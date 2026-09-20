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


/* ===== 背景音樂（只在主持人畫面播放） ===== */
(function () {
  var BGM_URL = "";
  var VOLUME  = 0.4;
  var AUTO    = true;
  var on=false, ac=null, master=null, el=null, nodes=[], waiting=false;

  function build(ctx, dest) {
    var lp=ctx.createBiquadFilter();
    lp.type='lowpass'; lp.frequency.value=1400; lp.Q.value=0.6; lp.connect(dest);
    var lfo=ctx.createOscillator(), lfoG=ctx.createGain();
    lfo.frequency.value=1/35; lfoG.gain.value=500;
    lfo.connect(lfoG); lfoG.connect(lp.frequency); lfo.start();
    var made=[lfo];
    var chords=[[146.83,220.00,293.66,440.00],[116.54,174.61,233.08,349.23],
                [174.61,261.63,349.23,523.25],[130.81,196.00,261.63,392.00]];
    var STEP=24, FADE=8, lvls=[0.26,0.18,0.13,0.08];
    chords.forEach(function(ch,ci){
      ch.forEach(function(f,vi){
        var o=ctx.createOscillator();
        o.type=vi===0?'triangle':'sine';
        o.frequency.value=f; o.detune.value=(vi%2?5:-5);
        var g=ctx.createGain(); g.gain.value=0;
        o.connect(g); g.connect(lp);
        for(var r=0;r<20;r++){
          var t=ctx.currentTime+r*chords.length*STEP+ci*STEP;
          g.gain.setValueAtTime(0.0001,t);
          g.gain.linearRampToValueAtTime(lvls[vi],t+FADE);
          g.gain.setValueAtTime(lvls[vi],t+STEP-FADE);
          g.gain.linearRampToValueAtTime(0.0001,t+STEP);
        }
        o.start(); made.push(o);
      });
    });
    return made;
  }

  function armGesture(){
    if(waiting)return; waiting=true;
    var go=function(){
      waiting=false;
      ['pointerdown','keydown'].forEach(function(t){document.removeEventListener(t,go,true);});
      if(ac&&ac.state==='suspended')ac.resume().then(function(){console.log('[BGM] 已解鎖');paint();});
    };
    ['pointerdown','keydown'].forEach(function(t){document.addEventListener(t,go,true);});
    console.warn('[BGM] 瀏覽器擋住自動播放，點畫面任一處即可開始');
  }

  function start(){
    if(on)return; on=true;
    if(BGM_URL){
      if(!el){el=new Audio(BGM_URL);el.loop=true;el.volume=0;}
      el.play().then(function(){
        var v=0,id=setInterval(function(){v=Math.min(VOLUME,v+VOLUME/40);el.volume=v;if(v>=VOLUME)clearInterval(id);},100);
      }).catch(function(e){console.warn('[BGM] 音檔無法播放：',e.message);on=false;armGesture();paint();});
      paint(); return;
    }
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){console.warn('[BGM] 不支援 Web Audio');on=false;return;}
    ac=new AC();
    master=ac.createGain(); master.gain.value=0.0001; master.connect(ac.destination);
    master.gain.exponentialRampToValueAtTime(VOLUME,ac.currentTime+4);
    nodes=build(ac,master);
    ac.resume().then(function(){
      console.log('[BGM] 播放中，state =',ac.state,'音量 =',VOLUME);
      if(ac.state!=='running')armGesture();
    }).catch(function(){armGesture();});
    if(ac.state==='suspended')armGesture();
    paint();
  }

  function stop(){
    if(!on)return; on=false;
    if(el){var v=el.volume,id=setInterval(function(){v=Math.max(0,v-VOLUME/20);el.volume=v;if(v<=0){clearInterval(id);el.pause();}},60);}
    if(ac){
      var t=ac.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value,t);
      master.gain.exponentialRampToValueAtTime(0.0001,t+1.2);
      var a=ac,n=nodes;
      setTimeout(function(){n.forEach(function(o){try{o.stop();}catch(e){}});try{a.close();}catch(e){}},1500);
      ac=null;master=null;nodes=[];
    }
    paint();
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
    var locked=on&&ac&&ac.state!=='running';
    b.textContent=locked?'♪ 音樂 待解鎖':(on?'♪ 音樂 開':'♪ 音樂 關');
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
    console.log('[BGM] 已載入'); mount();
    var started=false;
    var id=setInterval(function(){
      mount();
      var h=document.getElementById('host');
      if(!started&&h&&h.classList.contains('on')){started=true;if(AUTO)start();clearInterval(id);}
    },400);
    setTimeout(function(){clearInterval(id);},600000);
  });

  window.FEVER7_BGM={start:start,stop:stop,toggle:toggle,build:build,mount:mount,beep:beep};
})();
