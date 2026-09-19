/* ============================================================
   連線層 — 兩種實作，介面相同
     firebase : Firebase Realtime Database（正式上課用）
     demo     : 同一台電腦、同一個瀏覽器的多個分頁（設定前先試玩用）
   ============================================================ */
(function () {
  const CFG = window.FEVER7_CONFIG || {};
  const hasFB = CFG.firebase && CFG.firebase.databaseURL && CFG.firebase.apiKey;

  /* ---------------- Firebase ---------------- */
  function firebaseNet() {
    firebase.initializeApp(CFG.firebase);
    const db = firebase.database();
    const R = (pin, path) => db.ref('rooms/' + pin + (path ? '/' + path : ''));
    return {
      mode: 'firebase',
      async createRoom(pin, state) {
        await R(pin).set({ state, createdAt: firebase.database.ServerValue.TIMESTAMP });
      },
      async roomExists(pin) {
        const s = await R(pin, 'state').get();
        return s.exists();
      },
      setState(pin, patch) { return R(pin, 'state').update(patch); },
      watchState(pin, cb) {
        const r = R(pin, 'state');
        const h = r.on('value', s => cb(s.val()));
        return () => r.off('value', h);
      },
      async join(pin, name, startTrust) {
        const ref = R(pin, 'players').push();
        await ref.set({ name, trust: startTrust, joinedAt: firebase.database.ServerValue.TIMESTAMP, streak: 0 });
        return ref.key;
      },
      async rejoin(pin, pid) {
        const s = await R(pin, 'players/' + pid).get();
        return s.exists() ? s.val() : null;
      },
      watchPlayers(pin, cb) {
        const r = R(pin, 'players');
        const h = r.on('value', s => cb(s.val() || {}));
        return () => r.off('value', h);
      },
      updatePlayer(pin, pid, patch) { return R(pin, 'players/' + pid).update(patch); },
      answer(pin, qid, pid, payload) { return R(pin, 'answers/' + qid + '/' + pid).set(payload); },
      watchAnswers(pin, qid, cb) {
        const r = R(pin, 'answers/' + qid);
        const h = r.on('value', s => cb(s.val() || {}));
        return () => r.off('value', h);
      },
      async getAnswers(pin, qid) {
        const s = await R(pin, 'answers/' + qid).get();
        return s.val() || {};
      },
      async closeRoom(pin) { await R(pin).remove(); }
    };
  }

  /* ---------------- Demo（BroadcastChannel + localStorage） ---------------- */
  function demoNet() {
    const KEY = p => 'f7demo:' + p;
    const bc = ('BroadcastChannel' in window) ? new BroadcastChannel('fever7') : null;
    const subs = { state: [], players: [], answers: [] };

    const read = p => { try { return JSON.parse(localStorage.getItem(KEY(p))) || null; } catch (e) { return null; } };
    const write = (p, room) => {
      localStorage.setItem(KEY(p), JSON.stringify(room));
      const msg = { pin: p, room };
      fire(msg);                      // 本頁的訂閱者（BroadcastChannel 不會回傳給自己）
      if (bc) bc.postMessage(msg);    // 其他分頁
    };
    function fire(msg) {
      subs.state.forEach(s => s.pin === msg.pin && s.cb(msg.room.state));
      subs.players.forEach(s => s.pin === msg.pin && s.cb(msg.room.players || {}));
      subs.answers.forEach(s => s.pin === msg.pin && s.cb((msg.room.answers || {})[s.qid] || {}));
    }
    if (bc) bc.onmessage = e => fire(e.data);
    window.addEventListener('storage', e => {
      if (e.key && e.key.startsWith('f7demo:')) {
        const pin = e.key.slice(7); const room = read(pin);
        if (room) fire({ pin, room });
      }
    });
    const ensure = p => read(p) || { state: {}, players: {}, answers: {} };

    return {
      mode: 'demo',
      async createRoom(pin, state) { write(pin, { state, players: {}, answers: {} }); },
      async roomExists(pin) { return !!read(pin); },
      async setState(pin, patch) { const r = ensure(pin); r.state = Object.assign({}, r.state, patch); write(pin, r); },
      watchState(pin, cb) {
        const s = { pin, cb }; subs.state.push(s);
        const r = read(pin); if (r) setTimeout(() => cb(r.state), 0);
        return () => { const i = subs.state.indexOf(s); if (i >= 0) subs.state.splice(i, 1); };
      },
      async join(pin, name, startTrust) {
        const r = ensure(pin); const id = 'p' + Math.random().toString(36).slice(2, 9);
        r.players[id] = { name, trust: startTrust, joinedAt: Date.now(), streak: 0 };
        write(pin, r); return id;
      },
      async rejoin(pin, pid) { const r = read(pin); return (r && r.players && r.players[pid]) || null; },
      watchPlayers(pin, cb) {
        const s = { pin, cb }; subs.players.push(s);
        const r = read(pin); if (r) setTimeout(() => cb(r.players || {}), 0);
        return () => { const i = subs.players.indexOf(s); if (i >= 0) subs.players.splice(i, 1); };
      },
      async updatePlayer(pin, pid, patch) {
        const r = ensure(pin); r.players[pid] = Object.assign({}, r.players[pid], patch); write(pin, r);
      },
      async answer(pin, qid, pid, payload) {
        const r = ensure(pin); r.answers[qid] = r.answers[qid] || {}; r.answers[qid][pid] = payload; write(pin, r);
      },
      watchAnswers(pin, qid, cb) {
        const s = { pin, qid, cb }; subs.answers.push(s);
        const r = read(pin); if (r) setTimeout(() => cb((r.answers || {})[qid] || {}), 0);
        return () => { const i = subs.answers.indexOf(s); if (i >= 0) subs.answers.splice(i, 1); };
      },
      async getAnswers(pin, qid) { const r = read(pin); return (r && r.answers && r.answers[qid]) || {}; },
      async closeRoom(pin) { localStorage.removeItem(KEY(pin)); }
    };
  }

  function loadScript(src) {
    return new Promise((ok, no) => {
      const el = document.createElement('script');
      el.src = src; el.onload = ok; el.onerror = () => no(new Error('無法載入 ' + src));
      document.head.appendChild(el);
    });
  }

  window.FEVER7_NET_READY = (async function () {
    if (!hasFB) { window.FEVER7_NET = demoNet(); return window.FEVER7_NET; }
    const V = 'https://www.gstatic.com/firebasejs/10.12.2/';
    await loadScript(V + 'firebase-app-compat.js');
    await loadScript(V + 'firebase-database-compat.js');
    window.FEVER7_NET = firebaseNet();
    return window.FEVER7_NET;
  })();
})();
