/* ============================================================
   《發燒的第七天》互動遊戲 — 連線設定
   ------------------------------------------------------------
   把 Firebase 主控台給你的那段設定貼進下面的大括號裡，存檔即可。
   步驟看「設定說明.md」。

   還沒設定也沒關係：留白就會自動進入「示範模式」，
   可以在同一台電腦開兩個分頁（一個主持、一個手機模擬）先試玩。
   ============================================================ */

window.FEVER7_CONFIG = {

  // ---- 貼在這裡（從 Firebase 主控台複製） ----
  firebase: {
    apiKey: "AIzaSyCzK_AgxfqJAKQSjolT7Uhrs0hPk28Gta8",
  authDomain: "pneumonia-2871a.firebaseapp.com",
  databaseURL: "https://pneumonia-2871a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pneumonia-2871a",
  storageBucket: "pneumonia-2871a.firebasestorage.app",
  messagingSenderId: "408250442550",
  appId: "1:408250442550:web:18834ea90f02f6e4130997"
  },
  // -------------------------------------------

  // 每題預設作答秒數（主持人畫面上可以隨時調整）
  defaultSeconds: 30,

  // 每位參加者的起始 Trust 分數
  startTrust: 100,

  // 答對時最高可再加幾分的速度獎勵（越快答對加越多；答錯不扣更多）
  maxSpeedBonus: 5,

  // 房間代碼長度（4 碼好念，適合口頭報給學員）
  pinLength: 4
};
