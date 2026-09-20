/* 《發燒的第七天》互動遊戲 — 連線設定 */

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


/* ===== 主持人密碼 =====
   把下面 PASS 改成你要的密碼。留 "" = 不設密碼。 */
(function () {
  var PASS = "10996";          // ← 改成你的密碼
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
