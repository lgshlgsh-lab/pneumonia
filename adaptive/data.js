/* ============================================================
   《發燒的第七天》適性學習版 — 資料檔
   - 與原版 data.js 完全分開；原版遊戲不受影響
   - 圖片：n = 沿用原版 ../img/NN.webp；沒有 n 的新投影片會先找
     adaptive/img/<k>.webp，找不到就以文字卡呈現（title / body）
   - *斜體* 用於微生物學名，**粗體** 用於強調
   ============================================================ */

window.FEVER7_DATA = (function () {

  /* ---------------- 流程（預設依陣列順序前進；goto 指定跳轉） ----------------
     k     唯一代號（也是跳轉錨點）
     n     原版投影片編號（使用原圖）；null 表示新投影片
     type  scene / know / data / chapter / ask / verdict / card
     q     ask / verdict 對應的題目
     goto  播完這張要跳去哪裡；'ENDING' 由全班狀態決定結局；'V:qid' 進入該題結算
     note / noteBy  疊在畫面上方的說明條（noteBy 依路徑：alpha / beta / gamma / icu）
  */
  const flow = [
    /* ---- 序章・第一章 ---- */
    { k: 's01', n: 1, type: 'scene', label: '封面' },
    { k: 's02', n: 2, type: 'scene', label: '角色介紹' },
    { k: 's03', n: 3, type: 'data', label: '病人檔案：周正雄 72 歲' },
    { k: 's04', n: 4, type: 'scene', label: '凌晨 02:40　小婕來電' },
    { k: 's05', n: 5, type: 'scene', label: '血氧 94% → 89%' },
    { k: 's06', n: 6, type: 'scene', label: '「要不要先開抗生素？」' },
    { k: 's07', n: 7, type: 'scene', label: '你只有三十秒可以想' },
    { k: 'a-q1', n: 8, type: 'ask', q: 'q1', label: '選擇 1-1（分支）' },
    { k: 'v-q1', n: 9, type: 'verdict', q: 'q1', label: '結算 1-1' },
    { k: 's10', n: 10, type: 'know', label: '住院病人發燒的五個 W' },
    { k: 's11', n: 11, type: 'scene', label: '床邊，02:55',
      noteBy: { alpha: '支線 α：03:50，回到床邊' } },
    { k: 's12', n: 12, type: 'scene', label: '「學長，要抽哪些？」' },
    { k: 'a-q2', n: 13, type: 'ask', q: 'q2', label: '選擇 1-2（複選）' },
    { k: 'v-q2', n: 14, type: 'verdict', q: 'q2', label: '結算 1-2' },
    { k: 's15', n: 15, type: 'know', label: '血液培養的四個細節' },
    { k: 's16', n: 16, type: 'scene', label: '03:20，她出現了' },
    { k: 's17', n: 17, type: 'scene', label: '「為什麼不說是中樞性發燒？」' },
    { k: 's18', n: 18, type: 'know', label: '中樞性發燒是排除診斷' },

    /* ---- 第二章 ---- */
    { k: 's19', n: 19, type: 'chapter', label: 'CHAPTER II · 感染在哪裡' },
    { k: 's20', n: 20, type: 'data', label: 'Day 7, 04:10 的結果' },
    { k: 'a-q3', n: 21, type: 'ask', q: 'q3', label: '選擇 2-1' },
    { k: 'v-q3', n: 22, type: 'verdict', q: 'q3', label: '結算 2-1' },
    { k: 's23', n: 23, type: 'know', label: '肺炎分類：時間點決定一切' },
    { k: 's24', n: 24, type: 'scene', label: '微生物室　老K' },
    { k: 'a-q4', n: 25, type: 'ask', q: 'q4', label: '選擇 2-2' },
    { k: 'v-q4', n: 26, type: 'verdict', q: 'q4', label: '結算 2-2' },
    { k: 's27', n: 27, type: 'know', label: 'COPD 的痰：看變化' },
    { k: 'a-q5', n: 28, type: 'ask', q: 'q5', label: '選擇 2-3' },
    { k: 'v-q5', n: 29, type: 'verdict', q: 'q5', label: '結算 2-3' },

    /* ---- 第三章（時間線壓縮：Day 7 04:20） ---- */
    { k: 's30', n: 30, type: 'chapter', label: 'CHAPTER III · 可能是誰做的' },
    { k: 's31', n: 31, type: 'scene', label: '【季雨晴】你要涵蓋什麼菌', note: 'Day 7　04:20　值班室' },
    { k: 's32', n: 32, type: 'scene', label: '從這個病人身上找線索' },
    { k: 's33', n: 33, type: 'scene', label: '【季雨晴】病原是推出來的' },
    { k: 'a-q6', n: 34, type: 'ask', q: 'q6', label: '選擇 3-1（複選）' },
    { k: 'v-q6', n: 35, type: 'verdict', q: 'q6', label: '結算 3-1' },
    { k: 's36', n: 36, type: 'know', label: '這個病人的病原菌清單' },
    { k: 'a-q7', n: 37, type: 'ask', q: 'q7', label: '選擇 3-2' },
    { k: 'v-q7', n: 38, type: 'verdict', q: 'q7', label: '結算 3-2' },
    { k: 's39', n: 39, type: 'scene', label: '【季雨晴】本院的數字是多少' },

    /* ---- 第四章（Day 7 04:50，老K值夜班） ---- */
    { k: 's40', n: 40, type: 'chapter', label: 'CHAPTER IV · 打開 Antibiogram' },
    { k: 's41', n: 41, type: 'scene', label: '【老K】你要的東西', note: 'Day 7　04:50　微生物室（老K 值夜班）' },
    { k: 's42', n: 42, type: 'know', label: '三件事先講' },
    { k: 's43', n: 43, type: 'scene', label: '【老K】還有第四件' },
    { k: 's44', n: 44, type: 'data', label: 'Antibiogram · 革蘭氏陰性菌' },
    { k: 's45', n: 45, type: 'data', label: 'Antibiogram · 革蘭氏陽性菌' },
    { k: 's46', n: 46, type: 'know', label: 'Antibiogram 的兩個陷阱' },
    { k: 'a-q8', n: 47, type: 'ask', q: 'q8', label: '選擇 4-1（分支）' },
    { k: 'v-q8', n: 48, type: 'verdict', q: 'q8', label: '結算 4-1' },
    { k: 's49', n: 49, type: 'scene', label: '【方藥師】延長輸注與劑量', note: '第一劑抗生素約 05:00 給藥' },
    { k: 's50', n: 50, type: 'data', label: 'Cr 1.0 → 1.4 mg/dL' },

    /* ---- 第五章 ---- */
    { k: 's51', n: 51, type: 'chapter', label: 'CHAPTER V · 藥敏報告的陷阱' },
    { k: 's52', n: 52, type: 'scene', label: 'Day 9, 08:30' },
    { k: 's53', n: 53, type: 'data', label: '培養結果' },
    { k: 's54', n: 54, type: 'scene', label: '【季雨晴】兩件事要做',
      noteBy: { beta: '季雨晴：「報告上 ceftriaxone 是 S，但他前天就是在 ceftriaxone 上變差的。」' } },
    { k: 'a-q9', n: 55, type: 'ask', q: 'q9', label: '選擇 5-1' },
    { k: 'v-q9', n: 56, type: 'verdict', q: 'q9', label: '結算 5-1' },
    { k: 's57', n: 57, type: 'data', label: 'Day 9 藥敏報告',
      noteBy: { beta: '目前用藥：Day 8 晚上起 piperacillin-tazobactam ＋ vancomycin' } },
    { k: 'a-q10', n: 58, type: 'ask', q: 'q10', label: '⚔️ BOSS 選擇 5-2（分支）' },
    { k: 'v-q10', n: 59, type: 'verdict', q: 'q10', label: '結算 5-2' },
    { k: 's64', n: 64, type: 'know', label: 'Inducible AmpC 怎麼發生' },
    { k: 's65', n: 65, type: 'know', label: 'AmpC 風險：先記住這些菌' },
    { k: 'a-q11', n: 66, type: 'ask', q: 'q11', label: '選擇 5-3' },
    { k: 'v-q11', n: 67, type: 'verdict', q: 'q11', label: '結算 5-3' },
    { k: 's68', n: 68, type: 'know', label: 'CLSI I、SDD 與 EUCAST I' },
    { k: 's69', n: 69, type: 'scene', label: 'Day 9, 11:00　藥局',
      noteBy: { gamma: '支線 γ：Day 15 報告出來後，meropenem 降階為 cefepime；方藥師調整劑量',
                q10b: '你們選了 ertapenem：方藥師建議改為 cefepime，把 carbapenem 留給真的需要的那一天',
                q10d: '方藥師來電後，停 vancomycin、piperacillin-tazobactam 改為 cefepime' } },
    { k: 's70', n: 70, type: 'know', label: 'Cefepime 神經毒性' },

    /* ---- 第六章 ---- */
    { k: 's71', n: 71, type: 'chapter', label: 'CHAPTER VI · 什麼時候可以停' },
    { k: 's72', n: 72, type: 'data', label: '追蹤數據',
      noteBy: { alpha: '支線 α：天數同主線（第一劑仍在 Day 7）',
                beta: '支線 β：有效治療自 Day 8 晚上起算，表中日期各順延約 1 天',
                gamma: '支線 γ：Day 13 復發後重新起算，表中日期各順延 6 天' } },
    { k: 'a-q12', n: 73, type: 'ask', q: 'q12', label: '選擇 6-1（狀態題）' },
    { k: 'v-q12', n: 74, type: 'verdict', q: 'q12', label: '結算 6-1' },
    { k: 's75', n: 75, type: 'know', label: 'CRP 與 Procalcitonin 怎麼用' },
    { k: 'a-q13', n: 76, type: 'ask', q: 'q13', label: '選擇 6-2（狀態題）' },
    { k: 'v-q13', n: 77, type: 'verdict', q: 'q13', label: '結算 6-2' },
    { k: 's78', n: 78, type: 'know', label: '什麼情況不能直接套用 7 天' },
    { k: 'a-q14', n: 79, type: 'ask', q: 'q14', label: '選擇 6-3' },
    { k: 'v-q14', n: 80, type: 'verdict', q: 'q14', label: '結算 6-3' },
    { k: 'a-q15', n: 81, type: 'ask', q: 'q15', label: '選擇 6-4' },
    { k: 'v-q15', n: 82, type: 'verdict', q: 'q15', label: '結算 6-4' },
    { k: 's83', n: 83, type: 'know', label: 'FQ 藥敏不能互相推定', goto: 'ENDING' },

    /* ---- 結局 ---- */
    { k: 'EA1', n: 84, type: 'scene', label: '結局 A　第十六天轉復健', bgm: 'B' },
    { k: 'EA2', n: 85, type: 'scene', label: '【季雨晴】你做對的不是選了 cefepime', bgm: 'B', goto: 'M' },
    { k: 'EB1', type: 'card', label: '結局 B　繞了遠路回家', bgm: 'B', tone: 'warm',
      title: '結局 B　繞了遠路回家',
      body: '周先生比原本預計晚了幾天，才轉入復健病房。\n\n【周太太】「醫師，謝謝你那天半夜特地下來看他。」\n\n家屬一樣說謝謝。但你知道，那多出來的幾天是怎麼來的。' },
    { k: 'EB2', type: 'card', label: '【季雨晴】繞路之後', bgm: 'B', tone: 'warm', goto: 'M',
      title: '【季雨晴】',
      body: '「你們最後走回來了。\n\n救回來的那一題，答案其實一直都在前面那一題裡。\n下次，試著不要繞路。」' },
    { k: 'EC1', type: 'card', label: '結局 C　加護病房的燈', bgm: 'B', tone: 'red',
      title: '結局 C　加護病房的燈',
      body: '周先生插管，使用升壓劑，轉入加護病房。\n\n監視器的燈一閃一閃。\n故事停在這裡，結果未定。' },
    { k: 'EC2', type: 'card', label: '【季雨晴】在哪一幕落後的', bgm: 'B', tone: 'red', goto: 'M',
      title: '【季雨晴】',
      body: '「不是哪一個決定特別離譜。\n是每一次都晚了一步，或少想了一步。\n\n你們是在哪一幕開始落後的？」' },
    { k: 'ED1', type: 'card', label: '結局 D　出院前的代價', bgm: 'B', tone: 'warm',
      title: '結局 D　出院前的代價',
      body: '肺炎好了。\n\n但 Day 12 開始腹瀉，*Clostridioides difficile* 陽性，接觸隔離。\n轉復健病房延後到 Day 21。' },
    { k: 'ED2', type: 'card', label: '【方藥師】多打的每一天', bgm: 'B', tone: 'warm', goto: 'M',
      title: '【方藥師】',
      body: '「每多打一天、每多一個廣效藥，\n就多一份 *C. difficile*、抗藥性與腎毒性的風險。\n\n過度涵蓋不是安全，是另一種傷害。」' },
    { k: 'M', type: 'card', label: '你們走過的路', bgm: 'B', special: 'pathmap',
      title: '你們走過的路' },
    { k: 's87', n: 87, type: 'data', label: 'Debriefing：六個問題', bgm: 'B' },

    /* ================= 以下為支線片段（只能經由跳轉進入） ================= */

    /* ---- 支線 α：1-1 多數選錯 ---- */
    { k: 'al1', type: 'card', label: '支線 α　03:40 第二通電話', tone: 'red',
      title: '03:40　小婕的第二通電話',
      body: '【小婕】「學長！13 床血壓掉到 84/50，心跳 128，血氧剩 86%……\n我已經換成非再吸入面罩了。你可以現在下來嗎？」' },
    { k: 'al2', type: 'card', label: '支線 α　床邊', tone: 'red', goto: 'V:q1',
      title: '03:45　床邊',
      body: 'T 39.2 °C　HR 128　BP 84/50（MAP 61）　RR 32\nSpO₂ 86%（鼻導管 3 L）→ 改非再吸入面罩\n床邊 lactate 3.8 mmol/L　過去 3 小時尿量每小時 15 mL' },
    { k: 'a-r1', type: 'ask', q: 'r1', label: 'R1 救援題（支線 α）', tone: 'red',
      title: '支線 α　救援題 R1' },
    { k: 'v-r1', type: 'verdict', q: 'r1', label: 'R1 結算', tone: 'red' },
    { k: 'al-ok', type: 'card', label: '支線 α　救援成功', goto: 's10',
      title: '04:10　血壓回來了',
      body: '兩套血液培養抽完，第一劑抗生素已在 1 小時內掛上，輸液進行中。\nMAP 回到 70，lactate 開始下降。\n\n你們繞了一段路，但回到了主線。' },
    { k: 'al-icu', type: 'card', label: '支線 α　轉入加護病房', tone: 'red', special: 'icu', goto: 's10',
      title: '05:30　加護病房',
      body: '抗生素一直沒有掛上。血壓需要升壓劑維持，周先生轉入加護病房。\n\n接下來的章節照常進行——只是場景換成了 ICU。' },

    /* ---- 4-1 後果場景 ---- */
    { k: 'c8b', type: 'card', label: '4-1 後果：carbapenem 審核', goto: 'V:q8',
      title: '【方藥師】',
      body: '手上拿著一張 carbapenem 使用審核單。\n\n「沒有休克、沒有 ESBL 證據，第一線就用 meropenem？\n把它留給真的需要的那一天。」' },
    { k: 'c8c', type: 'card', label: '4-1 後果：MRSA 呢', goto: 'V:q8',
      title: '【方藥師】',
      body: '「piperacillin-tazobactam 和 levofloxacin 兩個都在打綠膿桿菌。\n\n本院 *S. aureus* 有 42.8% 是 MRSA——\n那 MRSA 呢？」' },

    /* ---- 支線 β：4-1 多數選 ceftriaxone ---- */
    { k: 'b-c1', type: 'card', label: '支線 β　Day 8 21:00', tone: 'red',
      title: 'Day 8　21:00　他更喘了',
      body: 'ceftriaxone ＋ vancomycin 第 40 小時。\n\nT 39.0 °C　RR 30　BP 102/60\nSpO₂ 88%（鼻導管 3 L）→ 改面罩 8 L' },
    { k: 'b-c2', type: 'card', label: '支線 β　老K來電', tone: 'red', goto: 'V:q8',
      title: '【老K】',
      body: '「血液培養一套報陽。\n革蘭氏陰性桿菌，鑑定中。」' },
    { k: 'a-r2', type: 'ask', q: 'r2', label: 'R2 救援題（支線 β）', tone: 'red',
      title: '支線 β　救援題 R2' },
    { k: 'v-r2', type: 'verdict', q: 'r2', label: 'R2 結算', tone: 'red' },
    { k: 'b-ok', type: 'card', label: '支線 β　救援成功', goto: 's49',
      title: 'Day 8　23:30　換藥',
      body: '改為 piperacillin-tazobactam，保留 vancomycin。\n天亮前，燒退了一些，氧氣降回鼻導管。\n\n你們繞了一段路，但回到了主線。' },
    { k: 'b-icu', type: 'card', label: '支線 β　轉入加護病房', tone: 'red', special: 'icu', goto: 's49',
      title: 'Day 9　03:00　加護病房',
      body: '呼吸衰竭，插管，轉入加護病房。\n\n接下來的章節照常進行——只是場景換成了 ICU。' },

    /* ---- 5-2 後果場景 ---- */
    { k: 'c10b', type: 'card', label: '5-2 後果：感管室來電', goto: 'V:q10',
      title: '感染管制室來電',
      body: '「這張 ertapenem 的審核單——\n報告上 cefepime 是 S，為什麼要用 carbapenem？」' },
    { k: 'c10d', type: 'card', label: '5-2 後果：Cr 1.6', goto: 'V:q10',
      title: '【方藥師】',
      body: '「Cr 升到 1.6 了。\nMRSA 沒長，vancomycin 為什麼還在打？」' },

    /* ---- 支線 γ：5-2 多數選 ceftriaxone（沿用原 BAD END 60–63） ---- */
    { k: 'g60', n: 60, type: 'scene', label: '支線 γ　Day 10' },
    { k: 'g61', n: 61, type: 'scene', label: '支線 γ　Day 13', goto: 'V:q10' },
    { k: 'a-r3', type: 'ask', q: 'r3', label: 'R3 救援題（支線 γ）', tone: 'red',
      title: '支線 γ　救援題 R3' },
    { k: 'v-r3', type: 'verdict', q: 'r3', label: 'R3 結算', tone: 'red' },
    { k: 'g62a', n: 62, type: 'scene', label: '支線 γ　Day 15 新報告' },
    { k: 'g63a', n: 63, type: 'scene', label: '【季雨晴】同一隻菌' },
    { k: 'g-ok', type: 'card', label: '支線 γ　救援成功', goto: 's64',
      title: 'Day 15　降階',
      body: 'Day 13 起改用 meropenem，重抽的血液培養轉陰。\nDay 15 報告 cefepime MIC 2 為 S，降階為 cefepime。\n\n你們繞了一段路，但回到了主線。' },
    { k: 'g62b', n: 62, type: 'scene', label: '支線 γ　Day 15 新報告' },
    { k: 'g63b', n: 63, type: 'scene', label: '【季雨晴】同一隻菌' },
    { k: 'g-icu', type: 'card', label: '支線 γ　轉入加護病房', tone: 'red', special: 'icu', goto: 's64',
      title: 'Day 14　加護病房',
      body: '菌血症持續，敗血性休克，轉入加護病房。\n\n接下來的章節照常進行——只是場景換成了 ICU。' }
  ];

  /* ---------------- 題目 ----------------
     type: knowledge（知識題）/ branch（分支題）/ state（狀態題）/ rescue（救援題）
     verdict: best ◎ / ok ○ / partial △ / bad ✕（bad 即「答錯」）
     複選題 role: required ◎ / neutral △ / wrong ✕；漏選 required 或選到 wrong 即算答錯
     cons: 公布分布後先播的後果場景；to: 結算與補強關卡之後要去的地方
     fx: { detour, overtx, icu }；route: 記錄目前所走的支線
  */
  const questions = {

    q1: {
      type: 'branch', ask: 'a-q1', verdict: 'v-q1', multi: false,
      stem: '你的第一句話是', note: '凌晨 02:40，護理站來電',
      options: [
        { k: 1, text: '「先給 acetaminophen，我把手上的會診寫完就下去。」', verdict: 'bad', base: -15,
          cons: 'al1', to: 'a-r1', route: 'alpha',
          why: '新發燒合併血氧下降，需要立刻評估。低血氧才是真正的警訊，退燒藥處理不了它。' },
        { k: 2, text: '「我現在下去。先幫我抽兩套血液培養，準備抽痰。」', verdict: 'best', base: 10,
          why: '親自看病人，並盡量在第一劑抗生素前留檢體。' },
        { k: 3, text: '「先抽血液培養，再給一劑 ceftriaxone，我處理完急診就上去。」', verdict: 'bad', base: -15,
          cons: 'al1', to: 'a-r1', route: 'alpha',
          why: '有留培養，但沒有床邊評估就用藥；疑似院內肺炎時 ceftriaxone 的涵蓋也不足。' },
        { k: 4, text: '「氧氣先調到 SpO₂ 92% 以上，我先看電腦上的抽血和舊片子。」', verdict: 'bad', base: -10,
          cons: 'al1', to: 'a-r1', route: 'alpha',
          why: '新的低血氧要看病人，不是看電腦。' }
      ],
      key: '新發燒＋新的低血氧，答案只有一個：現在就到床邊，並在第一劑抗生素前留好檢體。',
      linked: ['q1L1', 'q1L2', 'q1L3'],
      refs: 'Marik PE. Chest. 2000;117:855–869.'
    },

    r1: {
      type: 'rescue', ask: 'a-r1', verdict: 'v-r1', multi: false,
      stem: '你跑到床邊。最優先的處置是？',
      note: 'BP 84/50、MAP 61、lactate 3.8 mmol/L、SpO₂ 86%',
      options: [
        { k: 1, text: '先輸液，觀察兩小時血壓反應，再決定是否給抗生素', verdict: 'bad', base: -10,
          to: 'al-icu', fx: { icu: true },
          why: '血壓回升不代表感染已控制；可能的敗血性休克，抗生素每延遲一小時風險都上升。' },
        { k: 2, text: '先輸液，等 04:10 X 光與抽血結果，再選抗生素', verdict: 'bad', base: -10,
          to: 'al-icu', fx: { icu: true },
          why: '為了「選得準」而延後給藥。精準選藥靠之後的降階，不靠現在等待。' },
        { k: 3, text: '立即抽兩套血液培養，一小時內給抗生素，同時輸液', verdict: 'best', base: 10,
          to: 'al-ok', fx: { detour: 1 },
          why: '抗生素與復甦同步進行，一小時內給藥；血液培養在給藥前抽，但不為此拖延。' },
        { k: 4, text: '先安排胸部 CT 確認感染源，再開始抗生素', verdict: 'bad', base: -10,
          to: 'al-icu', fx: { icu: true },
          why: '休克病人先送 CT 再給藥，是最危險的順序。' }
      ],
      key: '可能的敗血性休克：留培養、一小時內給抗生素、同時復甦，三件事同步。',
      linked: ['r1L1', 'r1L2', 'r1L3'],
      refs: 'Evans L, et al. Surviving Sepsis Campaign 2021. Crit Care Med. 2021;49:e1063–e1143.'
    },

    q2: {
      type: 'knowledge', ask: 'a-q2', verdict: 'v-q2', multi: true,
      stem: '現在要留哪些檢體與檢查？（複選）', note: '床邊評估完成後',
      options: [
        { k: 1, text: '血液培養兩套', verdict: 'best', role: 'required',
          why: '兩套（不同部位）有助判斷污染，成人每瓶 8–10 mL。' },
        { k: 2, text: '痰液 Gram stain ＋ 培養', verdict: 'best', role: 'required',
          why: '先看抹片品質，再決定培養結果怎麼用。' },
        { k: 3, text: '尿液常規', verdict: 'best', role: 'required',
          why: '尿管才拔兩天，泌尿道仍在鑑別內，先做常規。' },
        { k: 4, text: '尿液培養', verdict: 'partial', role: 'neutral',
          why: '尿液常規異常或有泌尿症狀再送；不以陰性尿培養作為肺炎前提。' },
        { k: 5, text: '床邊胸部 X 光', verdict: 'best', role: 'required',
          why: '確認有無新的浸潤，是 HAP 診斷的關鍵。' },
        { k: 6, text: '血球、腎功能、電解質', verdict: 'best', role: 'required',
          why: '評估嚴重度與後續劑量調整所需。' },
        { k: 7, text: 'CRP 與 procalcitonin', verdict: 'partial', role: 'neutral',
          why: '可供參考，但不應等待結果才開始必要治療。' },
        { k: 8, text: '血液培養先抽一套，給藥後再補第二套', verdict: 'bad', role: 'wrong',
          why: '給藥後陽性率下降，也無法用兩套比對判斷污染。' },
        { k: 9, text: '胸部 CT，確認浸潤範圍與有無膿胸', verdict: 'bad', role: 'wrong',
          why: '新發燒不需要第一線 CT；先整合床邊評估與 X 光。' }
      ],
      scoring: { full: 10, partial: 5, wrong: -10 },
      summary: '◎ 1＋2＋3＋5＋6 選齊且未踩 8、9 → +10　漏選但未踩雷 → +5　踩到 8 或 9 → −10',
      key: '血液培養兩套、痰液、尿液常規、X 光、基本抽血。尿液培養視常規結果再送。',
      linked: ['q2L1', 'q2L2', 'q2L3'],
      refs: 'Lee A, et al. J Clin Microbiol. 2007;45:3546–3548.'
    },

    q3: {
      type: 'knowledge', ask: 'a-q3', verdict: 'v-q3', multi: false,
      stem: '你的診斷是', note: 'Day 7 04:10，右下肺新浸潤',
      options: [
        { k: 1, text: '社區型肺炎（CAP）', verdict: 'bad', base: -10,
          why: '本例不是社區發病；CURB-65 是 CAP 工具，不能套用在 HAP。' },
        { k: 2, text: '醫療照護相關肺炎（HCAP）', verdict: 'bad', base: -10,
          why: 'HCAP 已於 2016 年廢除，不再作為分類。' },
        { k: 3, text: '院內肺炎（HAP）', verdict: 'best', base: 10,
          why: '入院 ≥48 小時後發生、未使用呼吸器。本例 Day 7。' },
        { k: 4, text: 'COPD 急性惡化', verdict: 'bad', base: -10,
          why: '新浸潤合併感染線索支持肺炎，不能只用急性惡化解釋。' },
        { k: 5, text: '吸入性肺炎', verdict: 'ok', base: 5,
          why: '吸入是機轉，HAP 是發生情境的分類，兩者可並存。' }
      ],
      key: 'HAP：入院 ≥48 小時後、未用呼吸器。吸入是機轉，HCAP 已廢除。',
      linked: ['q3L1', 'q3L2', 'q3L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q4: {
      type: 'knowledge', ask: 'a-q4', verdict: 'v-q4', multi: false,
      stem: '合格咳出痰檢體的判斷標準是', note: '老K 把抹片推過來',
      options: [
        { k: 1, text: '鱗狀上皮細胞 <25/LPF、多形核白血球 >10/LPF', verdict: 'bad', base: -10,
          why: '兩個門檻記反了：上皮細胞是「少於 10」，白血球是「多於 25」。' },
        { k: 2, text: '未見鱗狀上皮細胞，且可見細菌', verdict: 'bad', base: -10,
          why: '門檻是 <10/LPF 而非零；有沒有細菌是結果，不是品質條件。' },
        { k: 3, text: '鱗狀上皮細胞 <10/LPF、多形核白血球 >25/LPF', verdict: 'best', base: 10,
          why: '上皮細胞少代表口咽污染少，白血球多支持來自發炎的下呼吸道。' },
        { k: 4, text: '黃綠色濃痰，且量在 2 mL 以上', verdict: 'bad', base: -10,
          why: '顏色反映白血球酵素，不能證明沒有混到口水。' }
      ],
      key: '上皮細胞 <10、白血球 >25。不合格的檢體長出來的菌，是雜訊，不是答案。',
      linked: ['q4L1', 'q4L2', 'q4L3'],
      refs: 'Murray PR, Washington JA. Mayo Clin Proc. 1975;50:339–344.'
    },

    q5: {
      type: 'knowledge', ask: 'a-q5', verdict: 'v-q5', multi: false,
      stem: '要不要現在安排胸部 CT？', note: '診斷已指向 HAP',
      options: [
        { k: 1, text: '不例行安排，無改善或懷疑併發症再評估', verdict: 'best', base: 10,
          why: '新浸潤＋發燒＋膿痰＋白血球上升＋氧合惡化，HAP 診斷已成立。' },
        { k: 2, text: '現在安排，排除膿胸與肺栓塞後再決定抗生素', verdict: 'bad', base: -10,
          why: '為了看清楚而延後治療，才是真正的風險。' },
        { k: 3, text: '現在安排，但先開始抗生素，不必等 CT 結果', verdict: 'bad', base: -5,
          why: '不延誤治療，但多數情況不改變處置，卻增加搬運風險、輻射與成本。' },
        { k: 4, text: '不需要，COPD 過度充氣讓 CT 判讀不可靠', verdict: 'bad', base: -10,
          why: '結論對，理由錯：需要時 CT 一樣有價值。' }
      ],
      key: 'HAP 不需要常規 CT。72 小時無改善、懷疑膿胸／膿瘍或非感染病因時才做。',
      linked: ['q5L1', 'q5L2', 'q5L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q6: {
      type: 'knowledge', ask: 'a-q6', verdict: 'v-q6', multi: true,
      stem: '哪些線索支持 MDR 或特定病原風險？（複選）', note: '季雨晴的問題',
      options: [
        { k: 1, text: '住院已 ≥5 天', verdict: 'partial', role: 'neutral',
          why: '這是 MDR *VAP* 的因子，不是 MDR HAP 的明列條件。' },
        { k: 2, text: '4 個月前曾靜脈使用 piperacillin-tazobactam', verdict: 'bad', role: 'wrong',
          why: '約 120 天，未符合 90 天。仍要追問更近期的暴露與培養史。' },
        { k: 3, text: 'COPD，GOLD group E', verdict: 'best', role: 'required',
          why: '可增加綠膿桿菌疑慮，需看嚴重度與既往培養。' },
        { k: 4, text: '鼻胃管留置、吞嚥困難', verdict: 'partial', role: 'neutral',
          why: '決定「怎麼進去的」，不決定「是誰」。' },
        { k: 5, text: '糖尿病，HbA1c 7.8%', verdict: 'bad', role: 'wrong',
          why: '不是指引明列的 MDR HAP 因子。' },
        { k: 6, text: '目前需要鼻導管氧氣 3 L/min', verdict: 'bad', role: 'wrong',
          why: '需要氧氣不等於高死亡風險；指引指的是需要呼吸器支持或敗血性休克。' }
      ],
      scoring: { full: 10, partial: 5, wrong: -10 },
      summary: '◎ 3　△ 1、4　✕ 2、5、6',
      key: '「90 天」要算天數，不憑印象。住院 ≥5 天是 VAP 的條件，需要氧氣不等於高死亡風險。',
      linked: ['q6L1', 'q6L2', 'q6L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q7: {
      type: 'knowledge', ask: 'a-q7', verdict: 'v-q7', multi: false,
      stem: '經驗性治療要不要涵蓋 MRSA？', note: '本院的數字還沒拿到',
      options: [
        { k: 1, text: '要，因為住院已超過 5 天且有 COPD', verdict: 'bad', base: -10,
          why: '住院天數與 COPD 都不是 MRSA 涵蓋的判準。' },
        { k: 2, text: '先查本院 *S. aureus* 的 MRSA 比例，超過 20% 就涵蓋', verdict: 'best', base: 10,
          why: '三個條件：90 天內靜脈抗生素、單位 MRSA >20% 或不明、高死亡風險。本例關鍵在第二項。' },
        { k: 3, text: '不要，90 天內沒有靜脈抗生素，也沒有休克或插管', verdict: 'ok', base: 5,
          why: '推理方向對，但漏了「本院 MRSA 比例」這個條件。' },
        { k: 4, text: '不要，痰液抹片只見革蘭氏陰性桿菌', verdict: 'bad', base: -10,
          why: '抹片看不到不等於沒有；停 MRSA 涵蓋要等培養。' }
      ],
      key: 'MRSA 涵蓋看三個條件，本例關鍵是「本院的數字是多少」。',
      linked: ['q7L1', 'q7L2', 'q7L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q8: {
      type: 'branch', ask: 'a-q8', verdict: 'v-q8', multi: false,
      stem: '你的經驗性處方', note: 'eGFR 48，劑量已依腎功能',
      options: [
        { k: 1, text: 'Ceftriaxone 2 g q24h ＋ vancomycin', verdict: 'bad', base: -15,
          cons: 'b-c1', to: 'a-r2', route: 'beta',
          why: 'Ceftriaxone 不涵蓋 *Pseudomonas*——這是它出局的唯一且充分的理由。' },
        { k: 2, text: 'Meropenem 1 g q12h ＋ vancomycin', verdict: 'bad', base: -10,
          cons: 'c8b', fx: { overtx: 1 },
          why: '無休克、無 ESBL 證據，carbapenem 沒有必要。' },
        { k: 3, text: 'Piperacillin-tazobactam 4.5 g q6h ＋ levofloxacin 750 mg q48h', verdict: 'bad', base: -10,
          cons: 'c8c', fx: { overtx: 1 },
          why: '雙重抗綠膿不需要，而且本院 MRSA 42.8% 卻沒有涵蓋 MRSA。' },
        { k: 4, text: 'Piperacillin-tazobactam 4.5 g q6h ＋ vancomycin', verdict: 'best', base: 10,
          why: 'TZP 對 *P. aeruginosa* 91%；MRSA 42.8% >20%。非插管、非休克，單一抗綠膿藥即可。' }
      ],
      key: '抗綠膿 β-lactam（TZP 91%）＋ MRSA 涵蓋（42.8%）。加 vancomycin 的同時，先想好什麼時候停。',
      linked: ['q8L1', 'q8L2', 'q8L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.　Rybak MJ, et al. Am J Health Syst Pharm. 2020;77:835–864.'
    },

    r2: {
      type: 'rescue', ask: 'a-r2', verdict: 'v-r2', multi: false,
      stem: '周先生更喘了。下一步？',
      note: 'ceftriaxone ＋ vancomycin 第 40 小時；血培一套報陽，革蘭氏陰性桿菌',
      options: [
        { k: 1, text: '改為 piperacillin-tazobactam，保留 vancomycin', verdict: 'best', base: 10,
          to: 'b-ok', fx: { detour: 1 },
          why: '依 antibiogram 換成抗綠膿 β-lactam，同時涵蓋 *Enterobacter*。' },
        { k: 2, text: '加上 amikacin，擴大革蘭氏陰性菌涵蓋', verdict: 'bad', base: -10,
          to: 'b-icu', fx: { icu: true },
          why: 'Aminoglycoside 肺部穿透差、腎毒性高，不能取代有效的主藥。' },
        { k: 3, text: '改為 meropenem，保留 vancomycin', verdict: 'ok', base: 5,
          to: 'b-ok', fx: { detour: 1, overtx: 1 },
          why: '有效，但比需要的更廣。' },
        { k: 4, text: '維持原方案，等明早鑑定結果', verdict: 'bad', base: -10,
          to: 'b-icu', fx: { icu: true },
          why: '「48–72 小時再評估」的前提是病情穩定；惡化時要立即調整。' }
      ],
      key: '惡化就要調整，不是等待；換成涵蓋綠膿桿菌的主藥，而不是往上疊。',
      linked: ['r2L1', 'r2L2', 'r2L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q9: {
      type: 'knowledge', ask: 'a-q9', verdict: 'v-q9', multi: false,
      stem: '血液培養只有一套陽性，要怎麼看？', note: 'Day 9，痰與血 1/2 套長出 *E. cloacae* complex',
      options: [
        { k: 1, text: 'Enterobacterales 單套陽性，就應視為真正菌血症', verdict: 'best', base: 10,
          why: '革蘭氏陰性桿菌單套陽性 >95% 是真的菌血症。' },
        { k: 2, text: '無導管病人單套陽性多為污染，先重抽兩套再判斷', verdict: 'bad', base: -15,
          why: '把革蘭氏陰性桿菌菌血症當污染，是會出人命的錯誤。' },
        { k: 3, text: '痰液同菌，血液那套多半是抽血時污染，以肺炎處理即可', verdict: 'bad', base: -10,
          why: '同菌是支持菌血症的證據，不是反證。' },
        { k: 4, text: '等追蹤血液培養再次陽性，才診斷菌血症', verdict: 'bad', base: -5,
          why: '不以「再一次陽性」作為門檻，只會延誤治療調整。' }
      ],
      key: '污染的機率取決於菌種：革蘭氏陰性桿菌、*S. aureus*、*Candida* 單套陽性都要當真。',
      linked: ['q9L1', 'q9L2', 'q9L3'],
      refs: 'Hall KK, Lyman JA. Clin Microbiol Rev. 2006;19:788–802.'
    },

    q10: {
      type: 'branch', ask: 'a-q10', verdict: 'v-q10', multi: false,
      stem: '⚔️ 如何改藥？', note: '*E. cloacae* complex，藥敏一整排 S',
      options: [
        { k: 1, text: '停 vancomycin，改 ceftriaxone 2 g q24h（報告 S、窄譜、一天一次）', verdict: 'bad', base: -25,
          cons: 'g60', to: 'a-r3', route: 'gamma',
          why: 'S 是治療前的測值。*E. cloacae* 有可誘導 AmpC，治療中可能篩選出抗藥株。' },
        { k: 2, text: '停 vancomycin，改 ertapenem 1 g q24h', verdict: 'ok', base: 5,
          cons: 'c10b', fx: { overtx: 1 }, tag: 'q10b',
          why: '有效，但 cefepime 適用時，應先選節省 carbapenem 的藥。' },
        { k: 3, text: '停 vancomycin，改 cefepime', verdict: 'best', base: 15,
          why: 'Cefepime 對 AmpC 穩定，是這類菌侵襲性感染的首選；MIC 2 為 S，劑量要足夠。' },
        { k: 4, text: '先不調整，TZP ＋ vancomycin 用到追蹤血培陰性', verdict: 'bad', base: -10,
          cons: 'c10d', fx: { overtx: 1 }, tag: 'q10d',
          why: 'MRSA 沒長，vancomycin 應停；TZP 也不建議用於這類菌的侵襲性感染。' }
      ],
      key: '所有理由都對，結論還是錯：*E. cloacae* 不用第三代 cephalosporin，改 cefepime，並停掉不需要的 vancomycin。',
      linked: ['q10L1', 'q10L2', 'q10L3'],
      refs: 'IDSA AMR Guidance 2026, Section 2.　Tamma PD, et al. Clin Infect Dis. 2024;79:1319–1323.'
    },

    r3: {
      type: 'rescue', ask: 'a-r3', verdict: 'v-r3', multi: false,
      stem: '同一隻菌，兩套血液培養陽性。下一步？', note: 'Day 13，新藥敏還要兩天',
      options: [
        { k: 1, text: '繼續 ceftriaxone，加上 vancomycin', verdict: 'bad', base: -10,
          to: 'g62b', fx: { icu: true },
          why: '回燒就加 vancomycin，沒有處理真正的問題。' },
        { k: 2, text: '停 ceftriaxone，改 cefepime，並重抽血液培養', verdict: 'ok', base: 5,
          to: 'g62a', fx: { detour: 1 },
          why: '去抑制的 AmpC 株多數仍對 cefepime 感受，多半有效；復發菌血症在藥敏未出前仍以 meropenem 較穩妥。' },
        { k: 3, text: '停 ceftriaxone，改 meropenem，並重抽血液培養', verdict: 'best', base: 10,
          to: 'g62a', fx: { detour: 1 },
          why: '復發菌血症、藥敏未出，先用 meropenem；報告出來後再降階。' },
        { k: 4, text: '繼續 ceftriaxone，等 Day 15 新藥敏再調整', verdict: 'bad', base: -10,
          to: 'g62b', fx: { icu: true },
          why: '這次沒有時間等。' }
      ],
      key: '同一隻菌在眼前把 AmpC 打開了。先 meropenem，報告出來（cefepime MIC 2 S）再降階。',
      linked: ['r3L1', 'r3L2', 'r3L3'],
      refs: 'Tamma PD, et al. Clin Infect Dis. 2024;79:1319–1323.'
    },

    q11: {
      type: 'knowledge', ask: 'a-q11', verdict: 'v-q11', multi: false,
      stem: '關於 MIC 的判讀，何者正確？', note: 'CRO 1　·　FEP 2　·　MEM ≤0.25　·　SXT ≤0.5/9.5',
      options: [
        { k: 1, text: 'Ceftriaxone MIC 1 比 cefepime MIC 2 低，ceftriaxone 較有效', verdict: 'bad', base: -10,
          why: 'Ceftriaxone 的 S breakpoint 是 ≤1，MIC 1 其實位於 S 的上限。' },
        { k: 2, text: 'Meropenem MIC 最低，治療效果一定最好', verdict: 'bad', base: -10,
          why: '符合 S 不等於「最強」，也不等於該用它。' },
        { k: 3, text: 'TMP-SMX MIC ≤0.5 也很低，可當菌血症首選', verdict: 'bad', base: -10,
          why: '全表 MIC 最小，卻沒有人會拿它治這個菌血症——每個藥的尺不一樣。' },
        { k: 4, text: '各藥 breakpoint 不同，MIC 數字不能跨藥比較', verdict: 'best', base: 10,
          why: '同為 S，也要整合感染部位、給藥暴露與抗藥機制。' }
      ],
      key: 'MIC 是絕對濃度，S/I/R 是相對判斷。不同藥的 MIC 不能直接比。',
      linked: ['q11L1', 'q11L2', 'q11L3'],
      refs: 'CLSI M100, 36th ed. 2026.'
    },

    q12: {
      type: 'state', ask: 'a-q12', verdict: 'v-q12', multi: false,
      stem: 'X 光還有陰影，接下來？', note: '臨床已明顯改善',
      options: [
        { k: 1, text: '繼續治療，直到 X 光浸潤消失', verdict: 'bad', base: -15, fx: { overtx: 1 },
          why: '肺炎陰影可持續 4–6 週，追著 X 光治療必然過長。' },
        { k: 2, text: '先做胸部 CT 排除膿瘍，再決定是否停藥', verdict: 'bad', base: -10,
          why: '臨床明顯改善時做 CT，只會看到正在吸收的浸潤，然後更不敢停。' },
        { k: 3, text: '再延長 3 天，追蹤 X 光後再決定', verdict: 'bad', base: -10, fx: { overtx: 1 },
          why: '影像 3 天內不會明顯改變，結果只會讓你更不敢停。' },
        { k: 4, text: '依臨床反應決定，不因殘存陰影延長療程', verdict: 'best', base: 10,
          why: '臨床恢復早於影像吸收；年長、COPD、菌血症者更慢。' }
      ],
      key: '影像的吸收遠慢於臨床恢復。追蹤影像是 6–8 週後的事，不是停藥的依據。',
      linked: ['q12L1', 'q12L2', 'q12L3'],
      refs: 'Bruns AH, et al. Clin Infect Dis. 2007;45:983–991.'
    },

    q13: {
      type: 'state', ask: 'a-q13', verdict: 'v-q13', multi: false,
      stem: '這個病人的總療程', note: 'HAP 合併 *E. cloacae* complex 菌血症，臨床反應良好，追蹤血培陰性',
      options: [
        { k: 1, text: '7 天，從換成最後用藥那天重新算起', verdict: 'bad', base: -10, fx: { overtx: 1 },
          why: '換藥是為了避開 AmpC 風險，不是前面的藥無效，不必歸零。' },
        { k: 2, text: '7 天，從第一劑有效抗生素那天算起', verdict: 'best', base: 10,
          why: 'HAP 7 天；穩定的革蘭氏陰性菌菌血症 7 天不劣於 14 天。從有效那天算起。' },
        { k: 3, text: '14 天，因為合併菌血症', verdict: 'bad', base: -10, fx: { overtx: 1 },
          why: 'Yahav 2019、BALANCE 2025：7 天不劣於 14 天。' },
        { k: 4, text: '10 天，折衷 HAP 與菌血症的建議', verdict: 'bad', base: -10, fx: { overtx: 1 },
          why: '沒有證據支持折衷，只多了風險。' }
      ],
      key: '7 天，從第一劑有效抗生素算起。主線：Day 7 的 TZP 起算，Day 13 停藥。',
      linked: ['q13L1', 'q13L2', 'q13L3'],
      refs: 'Daneman N, et al. BALANCE. N Engl J Med. 2025;392:1065–1078.　Yahav D, et al. Clin Infect Dis. 2019;69:1091–1098.'
    },

    q14: {
      type: 'knowledge', ask: 'a-q14', verdict: 'v-q14', multi: false,
      stem: '假設有效治療第 6 天仍持續發燒，你的第一步？', note: '生命徵象穩定',
      options: [
        { k: 1, text: '暫不改藥，先找感染源、併發症與非感染原因', verdict: 'best', base: 10,
          why: '診斷、感染源、病原、藥物、併發症五個方向。' },
        { k: 2, text: '升級為 meropenem，同時重抽血液培養', verdict: 'bad', base: -10,
          why: '未經評估就升階，可能掩蓋真正原因。' },
        { k: 3, text: '加上 vancomycin，同時重抽血液培養', verdict: 'bad', base: -10,
          why: '未經評估就加藥，MRSA 早已排除。' },
        { k: 4, text: '加上抗黴菌藥，同時送 β-D-glucan', verdict: 'bad', base: -10,
          why: '先評估，而不是先擴大涵蓋。' }
      ],
      key: '治療無反應時，先想的是「診斷」，不是「換更廣的藥」。',
      linked: ['q14L1', 'q14L2', 'q14L3'],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q15: {
      type: 'knowledge', ask: 'a-q15', verdict: 'v-q15', multi: false,
      stem: '可不可以轉口服完成療程？', note: '有效治療第 5 天穩定、仍 NG 灌食；報告 CIP S，沒有 levofloxacin',
      options: [
        { k: 1, text: '改 ciprofloxacin 經鼻胃管給藥，灌食照常', verdict: 'bad', base: -15,
          why: '灌食的 Ca、Mg、Fe、Zn 會螯合 FQ——藥有開卻等於沒給。' },
        { k: 2, text: '請檢驗室加測 levofloxacin，若 S 改用並前後停灌食 2 小時', verdict: 'best', base: 10,
          why: '選對藥、不自行推定藥敏、給藥前後停灌食。' },
        { k: 3, text: '改 ciprofloxacin 經鼻胃管給藥，前後各停灌食 2 小時', verdict: 'ok', base: 5,
          why: '螯合這一關過了，但肺炎的口服 FQ 是 levofloxacin。' },
        { k: 4, text: '革蘭氏陰性菌菌血症不能轉口服，需全程靜脈', verdict: 'bad', base: -10,
          why: '過時。穩定、感染源控制、有高生體可用率口服藥時可以轉。' }
      ],
      key: '肺炎的口服 FQ 是 levofloxacin；cipro 的 S 不能推定 levo；經鼻胃管前後停灌食 2 小時。',
      linked: ['q15L1', 'q15L2', 'q15L3'],
      refs: 'Tamma PD, et al. JAMA Intern Med. 2019;179:316–323.　CLSI M100, 36th ed. 2026.'
    }
  };

  /* ---------------- 關聯題（答錯過半才出現；答對 +5、答錯 0） ----------------
     role: 1 概念再確認 / 2 情境遷移 / 3 誘答拆解；ans = 正解選項序號（1 起算）
  */
  const L = (parent, role, stem, opts, ans, note) => ({ parent, role, stem, opts, ans, note: note || '' });
  const linked = {
    q1L1: L('q1', 1, '住院中新發燒的病人，哪一位最需要立即到床邊？',
      ['體溫 39.0 °C，生命徵象穩定，無其他新症狀', '體溫 38.2 °C，合併新的低血氧與呼吸變快',
       '體溫 38.5 °C，給退燒藥後降到 37.6 °C', '體溫 37.9 °C，白血球從 9,000 升到 11,000'], 2,
      '重點是伴隨的器官功能變化，不是體溫高低。'),
    q1L2: L('q1', 2, '另一位病人凌晨發燒，你趕往床邊的路上，請護理師先做哪件事最有幫助？',
      ['先給 acetaminophen，等你到時看退燒反應', '先給一劑經驗性抗生素，避免延誤',
       '先抽兩套血液培養，並量一次完整生命徵象', '先安排胸部 CT，等你到時一起看'], 3),
    q1L3: L('q1', 3, '「先留培養、打一劑 ceftriaxone，等一下再上去」最主要的問題是？',
      ['Ceftriaxone 一天一次，劑量不足以退燒', 'Ceftriaxone 會干擾血液培養的判讀',
       '中風病人使用 ceftriaxone 容易誘發癲癇', '沒有床邊評估就用藥，且對院內肺炎涵蓋不足'], 4),

    r1L1: L('r1', 1, '依 Sepsis-3，敗血性休克的定義是？',
      ['有感染且收縮壓低於 90 mmHg', 'qSOFA ≥ 2 分且 lactate 上升',
       '適當輸液後仍需升壓劑維持 MAP ≥ 65 mmHg，且 lactate > 2 mmol/L', 'lactate > 4 mmol/L，不論血壓高低'], 3),
    r1L2: L('r1', 2, '另一位疑似敗血性休克的病人血管很難打，血液培養一直抽不到。怎麼辦？',
      ['一定要先抽到兩套，再給抗生素', '約 45 分鐘內抽不到，就先給抗生素',
       '先等 lactate 與 PCT 結果，再決定要不要抽', '先給抗生素，隔天早上再補抽血液培養'], 2,
      '對應投影片 15 最後一行。'),
    r1L3: L('r1', 3, '「先輸液觀察兩小時，血壓回來就不急著給抗生素」錯在哪？',
      ['輸液會稀釋抗生素濃度，應先給抗生素', '血壓回升代表不是敗血症，本來就不需要抗生素',
       '兩小時太短，應觀察六小時再決定', '血壓回升不代表感染已控制，延遲給藥會增加死亡風險'], 4),

    q2L1: L('q2', 1, '血液培養「兩套」的主要價值是？',
      ['一套接需氧瓶、一套接厭氧瓶，才算完整', '比較兩套是否一致，協助判斷污染或真正菌血症',
       '兩套可以分別送不同的藥敏套組', '至少兩套，實驗室才會做藥敏'], 2,
      '一套＝需氧＋厭氧兩瓶。'),
    q2L2: L('q2', 2, '另一位病人尿管已拔 3 天，發燒合併明確肺部浸潤，無泌尿症狀，尿液常規 WBC 2–5/HPF。尿液培養？',
      ['可以不送，常規正常且無症狀', '一定要送，近期導尿就要排除 CAUTI',
       '要送，陰性才能確定是肺炎', '不用送，改送尿液抗原檢測'], 1),
    q2L3: L('q2', 3, '「先抽一套、給藥後再補一套」的問題是？',
      ['第二套和第一套重複，浪費檢體', '給藥後抽血容易溶血',
       '給藥後陽性率下降，也無法用兩套比對判斷污染', '沒有問題，只要總共兩套即可'], 3),

    q3L1: L('q3', 1, 'VAP 的定義是？',
      ['住院中使用氧氣 48 小時後發生', '入住加護病房 48 小時後發生',
       '氣管內插管使用呼吸器 ≥ 48 小時後發生', '使用非侵襲性呼吸器後發生'], 3),
    q3L2: L('q3', 2, '另一位病人入院後第 30 小時出現新浸潤與發燒，分類為？',
      ['院內肺炎', '社區型肺炎', '醫療照護相關肺炎', '呼吸器相關肺炎'], 2,
      '入院 48 小時內發生視為社區獲得。'),
    q3L3: L('q3', 3, 'HCAP 在 2016 年被 IDSA/ATS 刪除的主要原因是？',
      ['讓許多可窄效治療的病人用了廣效抗生素，預後卻沒有改善', '定義太模糊，無法納入感控統計',
       '已經被呼吸器相關肺炎取代', '已經併入社區型肺炎指引'], 1),

    q4L1: L('q4', 1, '痰抹片中鱗狀上皮細胞很多，代表什麼？',
      ['檢體來自發炎的下呼吸道', '口咽唾液污染多，培養結果參考價值低', '病人合併病毒感染', '病人正在 COPD 急性惡化'], 2),
    q4L2: L('q4', 2, 'COPD 病人穩定期回診，痰培養長出 *Pseudomonas aeruginosa*，無發燒、無新浸潤、痰量與性質沒有變化。處置？',
      ['依藥敏治療 14 天', '開始吸入性抗生素', '視為定殖，不需治療', '重複培養，再長就治療'], 3,
      '對應知識卡 27：看變化，不看有無。'),
    q4L3: L('q4', 3, '為什麼「黃綠色濃痰」不能當作檢體合格的依據？',
      ['顏色反映白血球酵素，不能證明檢體沒有混到口水', '黃綠色代表綠膿桿菌感染',
       '濃痰會讓培養長不出菌', '濃痰多半是病毒感染'], 1),

    q5L1: L('q5', 1, '下列哪一個情況最需要為肺炎病人安排胸部 CT？',
      ['入院時 X 光已見浸潤', '治療 72 小時仍發燒，且肋膜積液增加', 'CRP 第三天下降一半', '家屬希望確認已經痊癒'], 2),
    q5L2: L('q5', 2, '另一位 HAP 病人治療第 2 天仍低燒，但氧氣需求下降、痰量減少。下一步？',
      ['安排胸部 CT', '升階抗生素', '加上抗黴菌藥', '維持治療，持續觀察'], 4),
    q5L3: L('q5', 3, '「先給抗生素，同時排 CT 看清楚」為什麼仍不建議？',
      ['結果多半不改變處置，卻增加搬運風險、輻射與成本', 'CT 會延誤抗生素的給藥時間',
       '顯影劑會降低抗生素效果', 'CT 會讓肺炎惡化'], 1),

    q6L1: L('q6', 1, '「前 90 天內靜脈抗生素」這個條件，下列哪一位病人符合？',
      ['120 天前打過靜脈 piperacillin-tazobactam', '去年因肺炎住院打過靜脈抗生素',
       '30 天前吃過一週口服 amoxicillin-clavulanate', '60 天前打過靜脈 ceftriaxone 五天'], 4,
      '天數要實際核對，口服不在此條件內。'),
    q6L2: L('q6', 2, '若周先生 60 天前曾打靜脈 ceftriaxone，其他條件不變，經驗性治療應如何調整？',
      ['不需要調整', '只需要改用 carbapenem', '涵蓋 MRSA，並使用兩種不同類的抗綠膿藥', '只需要加上 vancomycin'], 3),
    q6L3: L('q6', 3, '「住院已 ≥ 5 天」在 IDSA 2016 指引中屬於？',
      ['HAP 的 MDR 明列因子', 'MRSA 專屬的涵蓋條件', '已廢除的 HCAP 定義條件', 'MDR VAP 的因子，不是 HAP 的明列條件'], 4),

    q7L1: L('q7', 1, '單位 MRSA 比例都是 12%，下列哪一位 HAP 病人仍符合涵蓋 MRSA 的條件？',
      ['住院第 10 天', '有糖尿病', '30 天前曾打靜脈抗生素', '痰抹片可見革蘭氏陰性桿菌'], 3),
    q7L2: L('q7', 2, '如果本院 MRSA 比例是 12% 而不是 42.8%，周先生的經驗性處方應該？',
      ['仍然加上 vancomycin', '改用 linezolid', '加上 clindamycin', '單一抗綠膿 β-lactam，不涵蓋 MRSA'], 4,
      '對應 Debriefing 第 2 題。'),
    q7L3: L('q7', 3, '抹片只見革蘭氏陰性桿菌，為什麼還不足以不涵蓋 MRSA？',
      ['抹片敏感度有限，混合感染可能看不到；停藥要等培養', 'MRSA 在抹片上會染成陰性',
       'MRSA 不會出現在痰裡', '抹片只能用來看黴菌'], 1),

    q8L1: L('q8', 1, '依本院 antibiogram，為什麼周先生用一種抗綠膿 β-lactam 就夠？',
      ['本院 *P. aeruginosa* 對 TZP 91%，且他沒有插管、沒有休克', '兩種抗綠膿藥合併使用腎毒性太高',
       'IDSA 已經不建議任何雙重抗綠膿治療', 'COPD 病人通常不需要涵蓋綠膿桿菌'], 1),
    q8L2: L('q8', 2, '若周先生 Day 7 出現敗血性休克，經驗性處方應改為？',
      ['維持 TZP ＋ vancomycin 即可', 'TZP ＋ vancomycin ＋ amikacin', 'Ceftriaxone ＋ vancomycin', 'Meropenem 單用'], 2,
      '高死亡風險：兩種不同類的抗綠膿藥＋MRSA 涵蓋。'),
    q8L3: L('q8', 3, 'Ceftriaxone ＋ vancomycin 最主要的缺口是？',
      ['不涵蓋 MRSA', '不涵蓋 *P. aeruginosa*', '不涵蓋厭氧菌', '不涵蓋 *E. coli*'], 2,
      '不要拿 *E. coli* 對 ceftriaxone 73% 來反對它。'),

    r2L1: L('r2', 1, '經驗性治療「48–72 小時再評估」的前提是？',
      ['不論病情，固定等 72 小時才改藥', '病情穩定或改善時等待；惡化時應立即調整',
       '48 小時內不得更改抗生素', '一定要等培養結果才能改藥'], 2),
    r2L2: L('r2', 2, '另一位病人血液培養報「革蘭氏陰性桿菌生長，鑑定中」，最重要的第一步是？',
      ['先停掉 vancomycin', '加上抗黴菌藥', '確認目前用藥涵蓋院內革蘭氏陰性桿菌，含 *P. aeruginosa*', '等鑑定結果出來再決定'], 3),
    r2L3: L('r2', 3, '在 ceftriaxone 上加 amikacin，為什麼不是好的救援？',
      ['Aminoglycoside 肺部穿透差、腎毒性高，不能取代有效的主藥', 'Amikacin 對 *P. aeruginosa* 無效',
       'Amikacin 會拮抗 ceftriaxone 的作用', 'Amikacin 只能口服給藥'], 1),

    q9L1: L('q9', 1, '下列哪一種菌，單套血液培養陽性最可能是污染？',
      ['*Staphylococcus aureus*', '*Candida albicans*', '*Escherichia coli*', '無植入物病人的 coagulase-negative staphylococci'], 4),
    q9L2: L('q9', 2, '另一位病人兩套血培中一套長出 *Bacillus*（非 *anthracis*），無導管、臨床穩定。最可能是？',
      ['污染', '真正菌血症', '需要立即給 vancomycin', '需要安排心臟超音波'], 1),
    q9L3: L('q9', 3, '痰液與血液長出同一隻菌，正確的解讀是？',
      ['血液那套更可能是污染', '支持肺炎合併菌血症，會影響療程與追蹤', '痰液才是真正的病原，血液不必理會', '兩者沒有關聯'], 2),

    q10L1: L('q10', 1, '依目前 IDSA 指引，下列哪一組菌最需要避免以第三代 cephalosporin 治療侵襲性感染？',
      ['*Serratia marcescens*、*Morganella morganii*、*Providencia* spp.',
       '*Escherichia coli*、*Klebsiella pneumoniae*、*Proteus mirabilis*',
       '*E. cloacae* complex、*Klebsiella aerogenes*、*Citrobacter freundii*',
       '*P. aeruginosa*、*Acinetobacter baumannii*、*Stenotrophomonas maltophilia*'], 3,
      '第一組是舊口訣的成員，現已歸為低風險。'),
    q10L2: L('q10', 2, '如果 Day 9 長的是 *Serratia marcescens*，ceftriaxone S，侵襲性感染要怎麼選？',
      ['依藥敏可以使用 ceftriaxone', '一定要用 cefepime', '一定要用 carbapenem', '需要合併 aminoglycoside'], 1,
      '對應 Debriefing 第 4 題。'),
    q10L3: L('q10', 3, '報告寫 ceftriaxone S，為什麼還是不建議用？',
      ['報告測的是用藥前的菌；治療中 AmpC 去抑制的突變株可能被篩選出來', '實驗室的 ceftriaxone 藥敏方法不準',
       'Ceftriaxone 在血中的濃度不足', '*Enterobacter* 對 ceftriaxone 天生抗藥'], 1),

    r3L1: L('r3', 1, '同一隻菌由 S 變成 R，最可能的機轉是？',
      ['院內新的菌株感染', '獲得 carbapenemase 基因', '實驗室判讀誤差', 'AmpC 去抑制的突變株被篩選出來'], 4),
    r3L2: L('r3', 2, '藥敏出來後 cefepime MIC 2 為 S，為什麼可以從 meropenem 降階為 cefepime？',
      ['Cefepime 是 AmpC 的不良受質、穿透外膜快，MIC ≤ 2 時療效可靠', 'Cefepime 能直接抑制 AmpC 酵素',
       'Cefepime 不屬於 β-lactam 類', 'Cefepime 製劑中含有 β-lactamase 抑制劑'], 1),
    r3L3: L('r3', 3, '若 Day 15 報告 cefepime MIC 為 8（SDD），腎功能正常，依目前 IDSA 建議？',
      ['改回 ceftriaxone', '改用 piperacillin-tazobactam', 'Cefepime 2 g q8h 並延長輸注，或繼續 carbapenem', '停藥觀察'], 3,
      '請以 IDSA v5.0 原文確認。'),

    q11L1: L('q11', 1, 'Cefepime 對 Enterobacterales 的 S breakpoint 是 ≤ 2，本例 MIC 2 代表？',
      ['遠低於 breakpoint，非常安全', '位於 S 的上限，劑量與暴露要足夠', '已經屬於 SDD', '已經屬於抗藥'], 2),
    q11L2: L('q11', 2, '同一個藥在腦膜炎與非腦膜炎的 breakpoint 不同，原因是？',
      ['不同部位可達到的藥物濃度不同', '腦膜炎的菌毒性比較強', '檢驗方法不同', '只是歷史沿用'], 1),
    q11L3: L('q11', 3, '「Ceftriaxone MIC 1 比 cefepime MIC 2 低」這個比較錯在哪？',
      ['兩藥的 MIC 單位不同', 'Ceftriaxone 的 MIC 要乘以 2 才能比',
       '兩藥 breakpoint 不同，MIC 1 已在 ceftriaxone 的 S 上限', '兩個數字都只是測量誤差'], 3),

    q12L1: L('q12', 1, '肺炎的 X 光浸潤完全吸收通常需要？',
      ['三天內', '一週內，與療程同步', '4–6 週，年長與 COPD 者更久', 'CRP 恢復正常時就會同時消失'], 3),
    q12L2: L('q12', 2, '一位 72 歲吸菸者右下葉肺炎痊癒，為排除潛在腫瘤，何時追蹤影像？',
      ['停藥當天', '約 6–8 週後', '每週一次，直到正常', '不需要追蹤'], 2),
    q12L3: L('q12', 3, '「多打 3 天再照一次 X 光」的問題是？',
      ['影像 3 天內不會明顯改變，結果只會讓你更不敢停', '3 天太短，應該延長 7 天', 'X 光輻射劑量太高', '3 天後浸潤一定會吸收'], 1),

    q13L1: L('q13', 1, '若 HAP 的致病菌是 *P. aeruginosa*，IDSA/ATS 2016 建議療程？',
      ['14 天，非發酵菌需要較長療程', '10 天', '7 天，依臨床反應調整', '至少 21 天'], 3),
    q13L2: L('q13', 2, '若血液培養長的是 *S. aureus*，療程與追蹤？',
      ['7 天，不需追蹤血培', '依 CRP 下降程度決定', '10 天', '至少 14 天，並追蹤血液培養至陰性'], 4,
      '對應知識卡 78。'),
    q13L3: L('q13', 3, '為什麼不是從 Day 9 換 cefepime 那天開始算？',
      ['Day 7 起的 TZP 對此菌有效；換藥是為了避開 AmpC 風險，不是前藥無效', 'Cefepime 比較強，所以要重新算',
       '換藥之後一律重新計算療程', '菌血症一律從血培轉陰那天算'], 1),

    q14L1: L('q14', 1, '中風病人用 cefepime 第 4 天出現意識變差與肌躍，最該先想到？',
      ['中風範圍擴大', 'Cefepime 神經毒性，檢查腎功能與劑量', '敗血症相關腦病變', '低血糖'], 2,
      '對應投影片 70。'),
    q14L2: L('q14', 2, '治療中又發燒，合併一天 6 次水瀉，最該先查？',
      ['藥物熱', '肺栓塞', '*Clostridioides difficile*', '導管相關感染'], 3),
    q14L3: L('q14', 3, '未經評估就升級 meropenem，主要風險是？',
      ['掩蓋真正原因（膿胸、藥物熱、*C. difficile*），並增加抗藥壓力', 'Meropenem 對 *Enterobacter* 無效',
       '一定會造成腎衰竭', '只是費用較高'], 1),

    q15L1: L('q15', 1, 'Fluoroquinolone 經鼻胃管給藥要前後停灌食，原因是？',
      ['灌食會稀釋藥物濃度', '配方中的 Ca、Mg、Fe、Zn 會螯合 FQ，降低吸收', 'FQ 會堵塞鼻胃管', '灌食會加重 QT 延長'], 2),
    q15L2: L('q15', 2, '肺炎病原未明、要用口服 FQ 經驗治療，應選？',
      ['Ciprofloxacin', 'Norfloxacin', 'Levofloxacin', '任何 FQ 皆可'], 3),
    q15L3: L('q15', 3, '為什麼不能把 ciprofloxacin 的 S 直接當成 levofloxacin 的 S？',
      ['Levofloxacin 一定比 ciprofloxacin 弱', '兩者 CLSI breakpoint 各自獨立，cipro 不是 levo 的替代測試藥',
       'Levofloxacin 只有靜脈劑型', '其實可以直接互推'], 2)
  };

  /* 前後測與滿意度調查：沿用原版內容，新舊兩版資料可以直接比較 */
  const base = window.FEVER7_BASE_DATA || {};

  /* ---------------- 前後測（依新原則重寫：選項長度與語氣一致、無括號提示、無「一律／只要」式的送分選項） ---------------- */
  const test = {
    title: (base.test && base.test.title) || '前後測',
    items: [
      { n: 1, ans: 2, ch: '第一章',
        stem: '中風臥床的住院病人，住院第 7 天凌晨發燒 38.6 °C，SpO₂ 由室氣 94% 降至 89%，血壓 118/70 mmHg。護理師來電。下列哪一組醫囑最適當？',
        opts: ['給氧與 acetaminophen，一小時後依體溫變化再決定是否採檢',
               '到床邊評估並給氧，留取血液培養兩套與痰液後開始抗生素',
               '電話開立經驗性抗生素並給氧，檢體留待早班時一併採集',
               '給氧並安排胸部 CT，確認有肺部浸潤後再採檢與用藥'] },
      { n: 2, ans: 4, ch: '第一章',
        stem: '成人疑似菌血症時抽取血液培養，下列做法何者正確？',
        opts: ['兩套由同一條中心靜脈導管連續抽取，減少穿刺次數',
               '等體溫升到 39 °C 以上的高峰再抽，陽性率明顯較高',
               '已開始使用抗生素的病人，改抽一套即可',
               '兩套由不同穿刺部位抽取，每瓶注入建議的足量血液'] },
      { n: 3, ans: 1, ch: '第二章',
        stem: '下列四份咳出痰檢體，哪一份最適合送培養？',
        opts: ['鱗狀上皮細胞 6/LPF、白血球 >25/LPF，抹片細菌量中等',
               '外觀黃綠濃稠、量多，鱗狀上皮細胞 30/LPF',
               '鱗狀上皮細胞 18/LPF、白血球 >25/LPF，抹片細菌量多',
               '白血球 >25/LPF，鱗狀上皮細胞未計數，抹片可見大量細菌'] },
      { n: 4, ans: 3, ch: '第二章',
        stem: '下列哪一位病人的肺炎符合 HAP 的定義？',
        opts: ['入院 30 小時後出現發燒與新浸潤，未插管',
               '兩週前出院、住護理之家，今天因肺炎入院',
               '入院第 4 天出現發燒與新浸潤，未使用呼吸器',
               '插管第 3 天出現發燒、膿痰與新浸潤'] },
      { n: 5, ans: 2, ch: '第三章',
        stem: '依 2016 IDSA/ATS 指引，下列何者是 HAP（非 VAP）病人感染 MDR 菌的風險因子？',
        opts: ['已住院 7 天，期間未曾使用抗生素',
               '近 90 天內曾接受靜脈抗生素',
               '長期鼻胃管灌食，曾有嗆咳',
               '長住護理之家且臥床'] },
      { n: 6, ans: 4, ch: '第三章',
        stem: '依 2016 IDSA/ATS 指引，HAP（非 VAP）的經驗性治療在下列哪一種情況應涵蓋 MRSA？',
        opts: ['單位 *S. aureus* 中 MRSA 比例 >10%，且病人曾住 ICU',
               '單位所有分離菌株中 MRSA 占 >20%，或比例不明',
               '單位 *S. aureus* 中 MRSA 比例 >50%，且痰抹片見 GPC',
               '單位 *S. aureus* 中 MRSA 比例 >20%，或比例不明'] },
      { n: 7, ans: 1, ch: '第四章',
        stem: '院內 antibiogram 的下列哪一種製作方式，最可能讓某藥的 %S 被高估？',
        opts: ['排除 carbapenem 抗藥株後才計算 %S',
               'ICU 與一般病房的菌株各自計算 %S',
               '同一病人同一菌種在分析期間只計第一株',
               '受測株數少於 30 株的菌種另外標註'] },
      { n: 8, ans: 3, ch: '第五章',
        stem: '院內肺炎合併菌血症，分離出 *Enterobacter cloacae* complex，ceftriaxone、ceftazidime、piperacillin-tazobactam、cefepime 皆為 S。病人臨床穩定，最適合的確定治療是？',
        opts: ['Ceftriaxone', 'Ceftazidime', 'Cefepime', 'Piperacillin-tazobactam'] },
      { n: 9, ans: 4, ch: '第五章',
        stem: '*Escherichia coli* 菌血症的藥敏報告：ceftriaxone MIC 1（S）、ciprofloxacin MIC 0.5（I）。下列判讀何者正確？',
        opts: ['Ciprofloxacin 的 MIC 較低，抗菌活性應優於 ceftriaxone',
               'Ceftriaxone MIC 1 已達折點上限，應改視為抗藥',
               'Ciprofloxacin 判讀為 I，可推定 levofloxacin 也是 I',
               'Ceftriaxone 判讀為 S，可作為此菌血症的治療選擇'] },
      { n: 10, ans: 1, ch: '第六章',
        stem: '院內肺炎合併 *Klebsiella pneumoniae* 菌血症，有效抗生素治療後已退燒、生命徵象穩定，追蹤血液培養無生長。治療第 7 天胸部 X 光仍有殘存陰影。下一步？',
        opts: ['第 7 天停藥，之後追蹤臨床狀況',
               '因合併菌血症，延長至 14 天',
               '繼續治療到 X 光陰影消失',
               '安排胸部 CT，有殘存病灶就延長'] }
    ]
  };

  return {
    title: '發燒的第七天',
    subtitle: '適性學習版 · 支線劇情與進階思考',
    flow, questions, linked,
    test,
    levels: base.levels,
    survey: base.survey
  };
})();
