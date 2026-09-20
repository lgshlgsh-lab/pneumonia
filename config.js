/* 《發燒的第七天》互動遊戲 — 設定檔 */

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
  defaultSeconds: 20,
  startTrust: 100,
  maxSpeedBonus: 0,
  pinLength: 4
};


/* ===== 主持人密碼 ===== */
(function () {
  var PASS = "10996";
  if (!PASS) return;
  var KEY = 'f7:host-ok';
  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('bootPass')) return;
    var b = document.getElementById('bHost');
    if (b) b.textContent = '主持人開新局 🔒';
  });
  document.addEventListener('click', function (e) {
    if (document.getElementById('bootPass')) return;
    var t = e.target;
    var b = (t && t.closest) ? t.closest('#bHost') : null;
    if (!b) return;
    if (sessionStorage.getItem(KEY) === '1') return;
    e.stopPropagation(); e.preventDefault();
    var v = prompt('主持人密碼');
    if (v === null) return;
    if (v === PASS) { sessionStorage.setItem(KEY, '1'); b.click(); }
    else alert('密碼不正確');
  }, true);
})();


/* ===== 背景音樂：兩首依投影片自動切換（只在主持人畫面播放） ===== */
(function () {
  var TRACK_A   = "BGM_1.mp3";   // 投影片 1–83
  var TRACK_B   = "BGM_2.mp3";   // 投影片 84–87
  var SWITCH_AT = 84;
  var VOLUME    = 0.18;
  var FADE_MS   = 1500;
  var AUTO      = true;

  var on=false, curKey=null, players={}, fades={}, armed=false;

  function el(src){
    if(players[src])return players[src];
    var a=new Audio(src); a.loop=true; a.volume=0; a.preload='auto';
    a.addEventListener('error',function(){
      console.warn('[BGM] 找不到或無法播放：'+src+'（要放在 index.html 同一層）');
    });
    players[src]=a; return a;
  }

  function fadeTo(a,target,ms,andPause){
    if(fades[a.src])clearInterval(fades[a.src]);
    var steps=Math.max(1,Math.round(ms/50));
    var step=(target-a.volume)/steps, n=0;
    fades[a.src]=setInterval(function(){
      n++; a.volume=Math.min(1,Math.max(0,a.volume+step));
      if(n>=steps){
        clearInterval(fades[a.src]); fades[a.src]=null;
        a.volume=Math.min(1,Math.max(0,target));
        if(andPause&&target===0)a.pause();
      }
    },50);
  }

  function armGesture(){
    if(armed)return; armed=true;
    var go=function(){
      armed=false;
      ['pointerdown','keydown'].forEach(function(t){document.removeEventListener(t,go,true);});
      if(on){curKey=null;apply();}
    };
    ['pointerdown','keydown'].forEach(function(t){document.addEventListener(t,go,true);});
    console.warn('[BGM] 瀏覽器擋住自動播放，點畫面任一處或按 M 即可開始');
  }

  function slideNo(){
    var lab=document.getElementById('cLabel');
    if(!lab)return 1;
    var m=/(\d+)/.exec(lab.textContent||'');
    return m?parseInt(m[1],10):1;
  }
  function wanted(){ return slideNo()>=SWITCH_AT?TRACK_B:TRACK_A; }

  function apply(){
    if(!on)return;
    var want=wanted();
    if(want===curKey)return;
    var prev=curKey; curKey=want;
    var a=el(want);
    a.play().then(function(){
      fadeTo(a,VOLUME,FADE_MS);
      if(prev)fadeTo(el(prev),0,FADE_MS,true);
      console.log('[BGM] 播放 '+want+'（第 '+slideNo()+' 張）');
    }).catch(function(){ curKey=prev; armGesture(); });
  }

  function start(){ if(on)return; on=true; curKey=null; apply(); paint(); }
  function stop(){
    if(!on)return; on=false;
    Object.keys(players).forEach(function(k){fadeTo(players[k],0,600,true);});
    curKey=null; paint();
  }
  function toggle(){ on?stop():start(); }

  function beep(){
    var AC=window.AudioContext||window.webkitAudioContext, c=new AC(); c.resume();
    var o=c.createOscillator(), g=c.createGain();
    o.type='sine'; o.frequency.value=440;
    g.gain.setValueAtTime(0.0001,c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25,c.currentTime+0.05);
    g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+1.0);
    o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime+1.1);
    setTimeout(function(){c.close();},1500);
    console.log('[BGM] 測試音 440 Hz，state =',c.state);
    return c.state;
  }

  function paint(){
    var b=document.getElementById('bgmBtn'); if(!b)return;
    b.textContent=on?'♪ 音樂 開':'♪ 音樂 關';
    b.style.opacity=on?1:.55;
  }

  function mount(){
    var bar=document.querySelector('#host .hbar');
    if(!bar||document.getElementById('bgmBtn'))return;
    var b=document.createElement('button');
    b.className='btn'; b.id='bgmBtn'; b.title='背景音樂（快捷鍵 M）';
    b.onclick=toggle;
    var full=document.getElementById('hFull');
    full?bar.insertBefore(b,full):bar.appendChild(b);
    paint(); console.log('[BGM] 按鈕已加入');
  }

  document.addEventListener('keydown',function(e){
    if(e.target&&e.target.tagName==='INPUT')return;
    if(e.key==='m'||e.key==='M')toggle();
  });

  function ready(fn){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn); else fn();
  }
  ready(function(){
    console.log('[BGM] 已載入（雙曲目版）');
    mount();
    var began=false;
    setInterval(function(){
      mount();
      var h=document.getElementById('host');
      if(!h||!h.classList.contains('on'))return;
      if(!began){began=true; if(AUTO)start();}
      apply();
    },500);
  });

  function status(){
    var r={開啟:on,目前張數:slideNo(),應播:wanted(),實播:curKey,曲目:{}};
    Object.keys(players).forEach(function(k){
      r.曲目[k.split('/').pop()]={播放中:!players[k].paused,音量:+players[k].volume.toFixed(3)};
    });
    console.log(r); return r;
  }

  window.FEVER7_BGM={start:start,stop:stop,toggle:toggle,beep:beep,apply:apply,status:status};
})();
