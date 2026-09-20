/* ============================================================
   《發燒的第七天》互動遊戲 — 連線設定
   ------------------------------------------------------------
   把 Firebase 主控台給你的那段設定貼進下面的大括號裡，存檔即可。
   步驟看「設定說明.md」。

   還沒設定也沒關係：留白就會自動進入「示範模式」，
   可以在同一台電腦開兩個分頁（一個主持、一個手機模擬）先試玩。
   ============================================================ */

window.FEVER7_CONFIG = {

  firebase: {
    apiKey: "AIzaSyCzK_AgxfqJAKQSjolT7Uhrs0hPk28Gta8",
    authDomain: "pneumonia-2871a.firebaseapp.com",
    databaseURL: "https://pneumonia-2871a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pneumonia-2871a",
    storageBucket: "pneumonia-2871a.firebasestorage.app",
    messagingSenderId: "408250442550",
    appId: "1:408250442550:web:18834ea90f02f6e4130997"
  },

  // 每題預設作答秒數（主持人畫面右下角可隨時調整）
  defaultSeconds: 20,

  // 每位參加者的起始 Trust 分數
  startTrust: 100,

  // 答對的速度獎勵上限（0 = 關閉）
  maxSpeedBonus: 0,

  // 房間代碼長度
  pinLength: 4
};
/* ===== 背景音樂（只在主持人畫面播放，學員手機不會有聲音） ===== */
(function () {
  var BGM_URL = "";      // 留空 = 用瀏覽器即時合成的環境音；或填 "bgm.mp3"
  var VOLUME  = 0.10;    // 0～1，建議 0.06～0.15
  var AUTO    = true;    // 進主持人畫面自動開始

  var on = false, ac = null, master = null, el = null, nodes = [];

  function build(ctx, dest) {
    var out = ctx.createGain(); out.gain.value = 1; out.connect(dest);
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.7; lp.connect(out);
    var lfo = ctx.createOscillator(), lfoG = ctx.createGain();
    lfo.frequency.value = 1 / 40; lfoG.gain.value = 180;
    lfo.connect(lfoG); lfoG.connect(lp.frequency); lfo.start();
    var made = [lfo];
    var chords = [[73.42,110.00,146.83],[58.27,87.31,116.54],
                  [87.31,130.81,174.61],[65.41,98.00,130.81]];
    var STEP = 24, FADE = 8;
    chords.forEach(function (ch, ci) {
      ch.forEach(function (f, vi) {
        var o = ctx.createOscillator();
        o.type = vi === 0 ? 'sine' : 'triangle';
        o.frequency.value = f; o.detune.value = (vi - 1) * 4;
        var g = ctx.createGain(); g.gain.value = 0;
        o.connect(g); g.connect(lp);
        var lvl = vi === 0 ? 0.30 : 0.16;
        for (var r = 0; r < 20; r++) {
          var t = ctx.currentTime + r * chords.length * STEP + ci * STEP;
          g.gain.setValueAtTime(0.0001, t);
          g.gain.linearRampToValueAtTime(lvl, t + FADE);
          g.gain.setValueAtTime(lvl, t + STEP - FADE);
          g.gain.linearRampToValueAtTime(0.0001, t + STEP);
        }
        o.start(); made.push(o);
      });
    });
    return made;
  }

  function start() {
    if (on) return;
    on = true;
    if (BGM_URL) {
      if (!el) { el = new Audio(BGM_URL); el.loop = true; el.volume = 0; }
      el.play().then(function () {
        var v = 0, id = setInterval(function () {
          v = Math.min(VOLUME, v + VOLUME / 40); el.volume = v;
          if (v >= VOLUME) clearInterval(id);
        }, 100);
      }).catch(function () { on = false; paint(); });
    } else {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { on = false; return; }
      ac = new AC();
      if (ac.state === 'suspended') ac.resume();
      master = ac.createGain(); master.gain.value = 0.0001;
      master.connect(ac.destination);
      master.gain.exponentialRampToValueAtTime(VOLUME, ac.currentTime + 4);
      nodes = build(ac, master);
    }
    paint();
  }

  function stop() {
    if (!on) return;
    on = false;
    if (el) {
      var v = el.volume, id = setInterval(function () {
        v = Math.max(0, v - VOLUME / 20); el.volume = v;
        if (v <= 0) { clearInterval(id); el.pause(); }
      }, 60);
    }
    if (ac) {
      var t = ac.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
      var a = ac, n = nodes;
      setTimeout(function () {
        n.forEach(function (o) { try { o.stop(); } catch (e) {} });
        try { a.close(); } catch (e) {}
      }, 1500);
      ac = null; master = null; nodes = [];
    }
    paint();
  }

  function toggle() { on ? stop() : start(); }

  function paint() {
    var b = document.getElementById('bgmBtn');
    if (b) { b.textContent = on ? '♪ 音樂 開' : '♪ 音樂 關'; b.style.opacity = on ? 1 : .55; }
  }

  function mount() {
    var bar = document.querySelector('#host .hbar');
    if (!bar || document.getElementById('bgmBtn')) return;
    var b = document.createElement('button');
    b.className = 'btn'; b.id = 'bgmBtn'; b.title = '背景音樂（快捷鍵 M）';
    b.onclick = toggle;
    var full = document.getElementById('hFull');
    full ? bar.insertBefore(b, full) : bar.appendChild(b);
    paint();
  }

  document.addEventListener('keydown', function (e) {
    if (e.target && e.target.tagName === 'INPUT') return;
    if (e.key === 'm' || e.key === 'M') toggle();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var h = document.getElementById('host');
    if (!h) return;
    new MutationObserver(function () {
      if (h.classList.contains('on')) { mount(); if (AUTO) start(); }
    }).observe(h, { attributes: true, attributeFilter: ['class'] });
  });
})();
/* ===== 背景音樂 — 補強掛載 ===== */
(function () {
  console.log('[BGM] 補強已載入');
  if (!window.FEVER7_BGM) { console.warn('[BGM] 找不到音樂主程式'); return; }
  var started = false;
  function mount() {
    var bar = document.querySelector('#host .hbar');
    if (!bar || document.getElementById('bgmBtn')) return;
    var b = document.createElement('button');
    b.className = 'btn'; b.id = 'bgmBtn'; b.title = '背景音樂（快捷鍵 M）';
    b.textContent = '♪ 音樂';
    b.onclick = function () { window.FEVER7_BGM.toggle(); };
    var f = document.getElementById('hFull');
    f ? bar.insertBefore(b, f) : bar.appendChild(b);
    console.log('[BGM] 按鈕已加入');
  }
  var id = setInterval(function () {
    mount();
    var h = document.getElementById('host');
    if (!started && h && h.classList.contains('on')) {
      started = true; window.FEVER7_BGM.start(); clearInterval(id);
    }
  }, 400);
  setTimeout(function () { clearInterval(id); }, 600000);
})();
