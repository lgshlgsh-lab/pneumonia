/* ============================================================
   《發燒的第七天》— 完整版（投影片 1–87，共 15 題）
   文字與計分依照各章結算頁
   選項／說明中的 *斜體* 會轉成 <i>，用來標示微生物學名
   ============================================================ */

window.FEVER7_DATA = {

  title: '發燒的第七天',
  subtitle: '抗生素臨床決策 · 互動教學',
  stages: [
    { id: 1, name: '第一章 · 發燒，然後呢', from: 1,  to: 18 },
    { id: 2, name: '第二章 · 感染在哪裡',   from: 19, to: 29 },
    { id: 3, name: '第三章 · 可能是誰做的', from: 30, to: 39 },
    { id: 4, name: '第四章 · 打開 Antibiogram', from: 40, to: 50 },
    { id: 5, name: '第五章 · 藥敏報告的陷阱', from: 51, to: 70 },
    { id: 6, name: '第六章 · 什麼時候可以停', from: 71, to: 87 }
  ],

  slides: [
    /* ---- 序章 ＋ 第一章 ---- */
    { n: 1,  type: 'scene',   label: '封面' },
    { n: 2,  type: 'scene',   label: '角色介紹' },
    { n: 3,  type: 'data',    label: '病人檔案：周正雄 72 歲' },
    { n: 4,  type: 'scene',   label: '凌晨 02:40　小婕來電' },
    { n: 5,  type: 'scene',   label: '血氧 94% → 89%' },
    { n: 6,  type: 'scene',   label: '「要不要先開抗生素？」' },
    { n: 7,  type: 'scene',   label: '你只有三十秒可以想' },
    { n: 8,  type: 'ask',     label: '選擇 1-1', q: 'q1' },
    { n: 9,  type: 'verdict', label: '結算 1-1', q: 'q1' },
    { n: 10, type: 'know',    label: '住院病人發燒的五個 W' },
    { n: 11, type: 'scene',   label: '床邊，02:55' },
    { n: 12, type: 'scene',   label: '「學長，要抽哪些？」' },
    { n: 13, type: 'ask',     label: '選擇 1-2（複選）', q: 'q2' },
    { n: 14, type: 'verdict', label: '結算 1-2', q: 'q2' },
    { n: 15, type: 'know',    label: '血液培養的四個細節' },
    { n: 16, type: 'scene',   label: '03:20，她出現了' },
    { n: 17, type: 'scene',   label: '「為什麼不說是中樞性發燒？」' },
    { n: 18, type: 'know',    label: '中樞性發燒是排除診斷' },

    /* ---- 第二章 ---- */
    { n: 19, type: 'chapter', label: 'CHAPTER II · 感染在哪裡' },
    { n: 20, type: 'data',    label: 'Day 7, 04:10 的結果' },
    { n: 21, type: 'ask',     label: '選擇 2-1', q: 'q3' },
    { n: 22, type: 'verdict', label: '結算 2-1', q: 'q3' },
    { n: 23, type: 'know',    label: '肺炎分類：時間與呼吸器情境' },
    { n: 24, type: 'scene',   label: '微生物室　老K' },
    { n: 25, type: 'ask',     label: '選擇 2-2', q: 'q4' },
    { n: 26, type: 'verdict', label: '結算 2-2', q: 'q4' },
    { n: 27, type: 'know',    label: 'COPD 的痰：看變化' },
    { n: 28, type: 'ask',     label: '選擇 2-3', q: 'q5' },
    { n: 29, type: 'verdict', label: '結算 2-3', q: 'q5' },

    /* ---- 第三章 ---- */
    { n: 30, type: 'chapter', label: 'CHAPTER III · 可能是誰做的' },
    { n: 31, type: 'scene',   label: '【季雨晴】你要涵蓋什麼菌' },
    { n: 32, type: 'scene',   label: '從這個病人身上找線索' },
    { n: 33, type: 'scene',   label: '【季雨晴】病原是推出來的' },
    { n: 34, type: 'ask',     label: '選擇 3-1（複選）', q: 'q6' },
    { n: 35, type: 'verdict', label: '結算 3-1', q: 'q6' },
    { n: 36, type: 'know',    label: '這個病人的病原菌清單' },
    { n: 37, type: 'ask',     label: '選擇 3-2', q: 'q7' },
    { n: 38, type: 'verdict', label: '結算 3-2', q: 'q7' },
    { n: 39, type: 'scene',   label: '【季雨晴】本院的數字是多少' },

    /* ---- 第四章 ---- */
    { n: 40, type: 'chapter', label: 'CHAPTER IV · 打開 Antibiogram' },
    { n: 41, type: 'scene',   label: '【老K】你要的東西' },
    { n: 42, type: 'know',    label: '三件事先講' },
    { n: 43, type: 'scene',   label: '【老K】還有第四件' },
    { n: 44, type: 'data',    label: 'Antibiogram · 革蘭氏陰性菌' },
    { n: 45, type: 'data',    label: 'Antibiogram · 革蘭氏陽性菌' },
    { n: 46, type: 'know',    label: 'Antibiogram 的兩個陷阱' },
    { n: 47, type: 'ask',     label: '選擇 4-1', q: 'q8' },
    { n: 48, type: 'verdict', label: '結算 4-1', q: 'q8' },
    { n: 49, type: 'scene',   label: '【方藥師】延長輸注與劑量' },
    { n: 50, type: 'data',    label: 'Cr 1.0 → 1.4 mg/dL' },

    /* ---- 第五章 ---- */
    { n: 51, type: 'chapter', label: 'CHAPTER V · 藥敏報告的陷阱' },
    { n: 52, type: 'scene',   label: 'Day 9, 08:30' },
    { n: 53, type: 'data',    label: '培養結果' },
    { n: 54, type: 'scene',   label: '【季雨晴】兩件事要做' },
    { n: 55, type: 'ask',     label: '選擇 5-1', q: 'q9' },
    { n: 56, type: 'verdict', label: '結算 5-1', q: 'q9' },
    { n: 57, type: 'data',    label: 'Day 9 藥敏報告' },
    { n: 58, type: 'ask',     label: '⚔️ BOSS 選擇 5-2', q: 'q10' },
    { n: 59, type: 'verdict', label: '結算 5-2', q: 'q10' },
    { n: 60, type: 'scene',   label: '💀 BAD END 分支 ①' },
    { n: 61, type: 'scene',   label: '💀 BAD END 分支 ②' },
    { n: 62, type: 'scene',   label: '💀 BAD END 分支 ③' },
    { n: 63, type: 'scene',   label: '💀 BAD END 分支 ④' },
    { n: 64, type: 'know',    label: 'Inducible AmpC 怎麼發生' },
    { n: 65, type: 'know',    label: 'AmpC 風險：先記住這些菌' },
    { n: 66, type: 'ask',     label: '選擇 5-3', q: 'q11' },
    { n: 67, type: 'verdict', label: '結算 5-3', q: 'q11' },
    { n: 68, type: 'know',    label: 'CLSI I、SDD 與 EUCAST I' },
    { n: 69, type: 'scene',   label: 'Day 9, 11:00　回到主線' },
    { n: 70, type: 'know',    label: 'Cefepime 神經毒性' },

    /* ---- 第六章 ---- */
    { n: 71, type: 'chapter', label: 'CHAPTER VI · 什麼時候可以停' },
    { n: 72, type: 'data',    label: '追蹤數據 Day 7 → Day 13' },
    { n: 73, type: 'ask',     label: '選擇 6-1', q: 'q12' },
    { n: 74, type: 'verdict', label: '結算 6-1', q: 'q12' },
    { n: 75, type: 'know',    label: 'CRP 與 Procalcitonin 怎麼用' },
    { n: 76, type: 'ask',     label: '選擇 6-2', q: 'q13' },
    { n: 77, type: 'verdict', label: '結算 6-2', q: 'q13' },
    { n: 78, type: 'know',    label: '什麼情況不能直接套用 7 天' },
    { n: 79, type: 'ask',     label: '選擇 6-3', q: 'q14' },
    { n: 80, type: 'verdict', label: '結算 6-3', q: 'q14' },
    { n: 81, type: 'ask',     label: '選擇 6-4', q: 'q15' },
    { n: 82, type: 'verdict', label: '結算 6-4', q: 'q15' },
    { n: 83, type: 'know',    label: 'FQ 藥敏不能互相推定' },
    { n: 84, type: 'scene',   label: '🏆 TRUE END' },
    { n: 85, type: 'scene',   label: '【季雨晴】你做對的不是選了 cefepime' },
    { n: 86, type: 'data',    label: '分數結算與三種結局' },
    { n: 87, type: 'data',    label: 'Debriefing：六個問題' }
  ],

  /* ---------------- 題目 ----------------
     verdict: best(◎) / ok(○) / partial(△) / bad(✕)
  */
  questions: {

    /* ========== 第一章 ========== */
    q1: {
      slide: 8, verdictSlide: 9, multi: false,
      stem: '你的第一句話是', note: '凌晨 02:40，護理站來電',
      options: [
        { k: 1, text: '「先給 Acetaminophen，我早上查房再去看。」', verdict: 'bad', base: -15,
          why: '新發燒合併血氧下降，需要立刻評估。低血氧是關鍵警訊，退燒藥無法處理這個問題。' },
        { k: 2, text: '「我現在下去。先幫我抽兩套血液培養，還有備好抽痰的管子。」', verdict: 'best', base: 10,
          why: '親自看病人，並盡量在抗生素給藥前留檢體。給藥後培養陽性率會下降，但仍可採檢；採檢不可明顯延誤必要治療。' },
        { k: 3, text: '「先開 Ceftriaxone 打下去，剩下的明天再說。」', verdict: 'bad', base: -15,
          why: '尚未床邊評估就延到明天，且未先留檢體。疑似院內肺炎時，Ceftriaxone 的經驗性涵蓋不足。' }
      ],
      refs: 'Marik PE. Chest. 2000;117:855–869.　O’Grady NP, et al. Crit Care Med. 2008;36:1330–1349.'
    },

    q2: {
      slide: 13, verdictSlide: 14, multi: true,
      stem: '現在要留哪些檢體與檢查？（複選）', note: '床邊評估完成後',
      options: [
        { k: 1, text: '血液培養兩套：不同部位、給藥前', verdict: 'best', role: 'required',
          why: '兩套有助污染判讀，成人每瓶 8–10 mL。' },
        { k: 2, text: '痰液 Gram stain ＋ 培養', verdict: 'best', role: 'required',
          why: '先看抹片品質，再決定培養結果怎麼用。' },
        { k: 3, text: '尿液常規，依 UTI 懷疑程度決定尿培養', verdict: 'partial', role: 'neutral',
          why: '近期導尿仍需考慮 UTI，但無泌尿症狀且有明確肺部線索，不必一律送尿培養，也不以陰性尿培養作為肺炎前提。' },
        { k: 4, text: '胸部 X 光：床邊 AP', verdict: 'best', role: 'required',
          why: '確認有無新的浸潤，是 HAP 診斷的關鍵。' },
        { k: 5, text: '血球、腎功能、電解質，CRP／PCT 酌情', verdict: 'best', role: 'required',
          why: '血球、腎功能與電解質有助評估病情。CRP／PCT 可供參考，不應等待結果才開始必要治療。' },
        { k: 6, text: '血液培養一套就好，省一點', verdict: 'bad', role: 'wrong',
          why: '少一套會降低檢出機會，也使污染判讀更困難。' },
        { k: 7, text: '立刻安排胸部電腦斷層', verdict: 'bad', role: 'wrong',
          why: '先整合床邊評估與 CXR，依診斷疑慮或併發症再安排 CT。' }
      ],
      scoring: { full: 10, partial: 5, wrong: -10 },
      summary: '◎ 1＋2＋4＋5 選齊且未踩 6、7 → +10　△ 3、5 為 0 分　✕ 踩到 6 或 7 → −10（即使其他都選對）',
      refs: 'Lee A, et al. J Clin Microbiol. 2007;45:3546–3548.　SCCM/IDSA New Fever Guideline. 2023.'
    },

    /* ========== 第二章 ========== */
    q3: {
      slide: 21, verdictSlide: 22, multi: false,
      stem: '你的診斷是', note: 'Day 7，新的右下肺浸潤',
      options: [
        { k: 1, text: '社區型肺炎（CAP）', verdict: 'bad', base: -10,
          why: '本例不是社區發病。CURB-65 是 CAP 工具，不能直接套用來決定 HAP 的處置。' },
        { k: 2, text: '院內感染型肺炎（HAP）', verdict: 'best', base: 10,
          why: '入院 ≥48 小時後發生、入院時未在潛伏。本例 Day 7，符合院內肺炎的時間與情境。' },
        { k: 3, text: '呼吸器相關肺炎（VAP）', verdict: 'bad', base: -10,
          why: '本例未氣管內插管使用呼吸器，不符合 VAP。' },
        { k: 4, text: 'COPD 急性惡化', verdict: 'bad', base: -10,
          why: '新浸潤合併感染線索支持肺炎，不能只用急性惡化解釋。COPD 急性惡化仍可同時存在。' },
        { k: 5, text: '吸入性肺炎', verdict: 'ok', base: 5,
          why: '吸入是可能機轉，HAP 是發生情境分類，兩者可並存。可描述為「HAP，考慮吸入相關機轉」。' }
      ],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q4: {
      slide: 25, verdictSlide: 26, multi: false,
      stem: '合格痰液檢體的判斷標準是', note: '老K 把抹片推過來',
      options: [
        { k: 1, text: '氣管內管抽出來的就可以算合格', verdict: 'bad', base: -10,
          why: '氣管內抽吸仍可能反映定殖，採集位置不等於感染證據。' },
        { k: 2, text: '鱗狀上皮細胞 <10/LPF，多形核白血球 >25/LPF', verdict: 'best', base: 10,
          why: 'SEC <10/LPF 代表口咽污染較少；PMN >25/LPF 支持發炎性檢體。這是常用咳出痰判準之一，仍依檢驗室規範。' },
        { k: 3, text: '沒有上皮細胞且有細菌才算合格', verdict: 'bad', base: -10,
          why: '判準是「污染指標少、發炎細胞多」，不是「完全沒有上皮細胞」——門檻是 <10/LPF 而非零。有沒有細菌是結果，不是檢體品質的條件。' },
        { k: 4, text: '必須是濃痰才算合格', verdict: 'bad', base: -10,
          why: '濃稠度與顏色反映嗜中性球與其酵素，不能單獨證明是合格檢體。清稀的痰也可能是好檢體，膿稠的痰也可能全是口水；*COPD* 病人的痰本來就常是黃綠濃稠的。' }
      ],
      refs: 'Murray PR, Washington JA. Mayo Clin Proc. 1975;50:339–344.'
    },

    q5: {
      slide: 28, verdictSlide: 29, multi: false,
      stem: '要不要現在安排胸部電腦斷層？', note: '診斷已指向 HAP',
      options: [
        { k: 1, text: '要。CT 比 X 光清楚，可以早點確定', verdict: 'bad', base: -10,
          why: '為了「清楚一點」而延後必要治療，才是真正的風險。' },
        { k: 2, text: '不要。目前證據足以支持 HAP，先開始必要治療', verdict: 'best', base: 10,
          why: '新浸潤合併發燒、膿痰、白血球上升與氧合惡化，已足以支持 HAP 的工作診斷。' },
        { k: 3, text: '不例行做，若 48–72 小時無改善或病情惡化，再評估 CT', verdict: 'best', base: 10,
          why: '同樣正確。考慮 CT 的時機：48–72 小時無改善或惡化、懷疑膿胸／肺膿瘍／壞死性肺炎、懷疑肺栓塞或腫瘤、CXR 判讀受限且結果可能改變處置。' }
      ],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    /* ========== 第三章 ========== */
    q6: {
      slide: 34, verdictSlide: 35, multi: true,
      stem: '哪些線索支持 MDR／特定病原風險？（複選）', note: '晨會後，季雨晴的問題',
      options: [
        { k: 1, text: '住院已 ≥5 天', verdict: 'partial', role: 'neutral',
          why: '**不能直接套用**。這屬於 MDR *VAP* 的因子，不是 MDR HAP 的明列條件。' },
        { k: 2, text: '4 個月前曾 IV 使用 piperacillin-tazobactam', verdict: 'bad', role: 'wrong',
          why: '**未符合 90 天**——約 120 天。但仍須追問更近期的暴露與培養史，不能解讀成「完全沒有風險」。' },
        { k: 3, text: 'COPD 病史', verdict: 'best', role: 'required',
          why: '**潛在病原風險**。可增加綠膿桿菌疑慮，需看嚴重度與既往培養。' },
        { k: 4, text: '鼻胃管留置、吞嚥困難', verdict: 'partial', role: 'neutral',
          why: '**吸入機轉**。提示吸入，不能單獨判定抗藥菌。' },
        { k: 5, text: '糖尿病，HbA1c 7.8%', verdict: 'bad', role: 'wrong',
          why: '**非獨立判準**。不是指引明列的 MDR HAP 因子。' },
        { k: 6, text: '目前有敗血性休克', verdict: 'bad', role: 'wrong',
          why: '**本例沒有**。若出現，屬高死亡風險，經驗性策略需升級。' }
      ],
      scoring: { full: 10, partial: 5, wrong: -10 },
      summary: '90 天需核對日期，HAP 與 VAP 的風險條件也要分清楚',
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q7: {
      slide: 37, verdictSlide: 38, multi: false,
      stem: '經驗性治療要不要涵蓋 MRSA？', note: '本院 *S. aureus* 中 MRSA 42.8%',
      options: [
        { k: 1, text: '要。因為他住院超過 5 天', verdict: 'bad', base: -10,
          why: '住院天數不能單獨決定 MRSA 涵蓋。' },
        { k: 2, text: '不要。90 天內沒有 IV 抗生素暴露，所以沒有 MRSA 風險', verdict: 'ok', base: 5,
          why: '只排除了一項條件，仍需查本地資料與既往 MRSA 紀錄。' },
        { k: 3, text: '尚須看該單位 *S. aureus* 中 MRSA 的比例，並整合個別風險', verdict: 'best', base: 10,
          why: 'HAP 的 MRSA 涵蓋條件（符合任一）：① 前 90 天內用過靜脈抗生素；② 該單位 MRSA >20% 或比例不明；③ 高死亡風險（需呼吸器支持或敗血性休克）。本例 ①③ 不符，關鍵在 ②。' },
        { k: 4, text: '一律都加，比較安全', verdict: 'bad', base: -10,
          why: '一律加藥會帶來不必要的毒性、抗藥性與成本。' }
      ],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    /* ========== 第四章 ========== */
    q8: {
      slide: 47, verdictSlide: 48, multi: false,
      stem: '你的經驗性處方', note: '提示：看 antibiogram 的 TZP 與 OXA 欄',
      options: [
        { k: 1, text: 'Ceftriaxone 2 g IV q24h', verdict: 'bad', base: -15,
          why: 'Ceftriaxone 不涵蓋 *Pseudomonas*。本院 *E. coli*／CRO 73%，也不能補足此缺口。' },
        { k: 2, text: 'Piperacillin-tazobactam 4.5 g IV q6h（輸注 4 小時）＋ Vancomycin（AUC 導向）', verdict: 'best', base: 10,
          why: 'TZP 對 *P. aeruginosa* 91%（非 CRPA，n=684），MRSA 42.8% >20%。本例可採單一抗綠膿 β-lactam ＋ MRSA 涵蓋，仍須整合近期用藥、既往培養、肺病與嚴重度。' },
        { k: 3, text: 'Meropenem ＋ Vancomycin ＋ Amikacin', verdict: 'bad', base: -10,
          why: '目前缺乏升級到此三藥組合的理由。不必要的 amikacin 增加腎毒性風險。' },
        { k: 4, text: 'Levofloxacin 750 mg IV q24h', verdict: 'bad', base: -10,
          why: 'Levofloxacin 單用不提供可靠 MRSA 涵蓋。而且 CIP %S 不能直接當作 levofloxacin %S。' }
      ],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.　Rybak MJ, et al. Am J Health Syst Pharm. 2020;77:835–864.'
    },

    /* ========== 第五章 ========== */
    q9: {
      slide: 55, verdictSlide: 56, multi: false,
      stem: '血液培養只有一套陽性', note: 'Day 9，痰與血長同一隻菌',
      options: [
        { k: 1, text: '只有一套陽性，多半是污染，不用處理', verdict: 'bad', base: -15,
          why: '把革蘭氏陰性桿菌菌血症當污染忽略，是會出人命的錯誤。' },
        { k: 2, text: '要看菌種。Enterobacterales 應高度懷疑真正菌血症', verdict: 'best', base: 10,
          why: 'Enterobacterales、*Pseudomonas* 通常是真正菌血症；*S. aureus*、*S. pneumoniae*、*Candida* 通常有臨床意義；CoNS 常見污染但有導管／植入物須警覺。本例痰、血同菌種且臨床相符 → 支持真正感染。' },
        { k: 3, text: '一定要再抽到陽性，才能判斷或開始治療', verdict: 'partial', base: -5,
          why: '需要追蹤血培時就抽，但**不以「再一次陽性」作為治療門檻**——這樣會延誤治療調整。' }
      ],
      refs: 'Hall KK, Lyman JA. Clin Microbiol Rev. 2006;19:788–802.'
    },

    q10: {
      slide: 58, verdictSlide: 59, multi: false,
      stem: '⚔️ 如何改藥？', note: '*E. cloacae* complex，藥敏一整排 S',
      options: [
        { k: 1, text: '停 vancomycin，改 ceftriaxone 2 g IV q24h（報告 S、窄譜、便宜、一天一次）', verdict: 'bad', base: -25,
          why: 'Ceftriaxone 的 S 是**當下測值**。侵襲性 *E. cloacae* 感染有治療中出現抗藥性的風險（AmpC 去抑制）。' },
        { k: 2, text: '停 vancomycin，改 cefepime（2 g IV q8h 為基礎，依腎功能調整）', verdict: 'best', base: 15,
          why: 'Cefepime 對 AmpC 水解較穩定。本例 MIC 2 為 S，仍須確保劑量與暴露。' },
        { k: 3, text: '停 vancomycin，改 ertapenem 1 g IV q24h', verdict: 'ok', base: 5,
          why: 'Ertapenem 有效，但若 cefepime 適用，可先採節省 carbapenem 的選擇。' },
        { k: 4, text: 'TZP ＋ vancomycin 原方案不動，打滿兩週', verdict: 'bad', base: -10,
          why: '不必要的 MRSA 涵蓋應停用。TZP 非本情境優先藥，療程也不是固定兩週。' }
      ],
      refs: 'IDSA AMR Guidance 2026, Section 2.'
    },

    q11: {
      slide: 66, verdictSlide: 67, multi: false,
      stem: 'MIC 小，就比較強？', note: 'CRO 1　·　FEP 2　·　MEM ≤0.25　·　SXT ≤0.5/9.5',
      options: [
        { k: 1, text: 'Ceftriaxone MIC 1，比 cefepime MIC 2 更強', verdict: 'bad', base: -10,
          why: '不同藥不能比數字。Ceftriaxone 的 S breakpoint 是 ≤1，MIC 1 其實**位於 S 的上限**。' },
        { k: 2, text: 'Meropenem MIC ≤0.25，治療一定最好', verdict: 'bad', base: -10,
          why: 'Meropenem 的 S breakpoint 是 ≤1，符合 S 不等於「最強」，也不等於該用它。' },
        { k: 3, text: '不同藥物不能直接比 MIC。要看各自 breakpoint、劑量與感染部位', verdict: 'best', base: 10,
          why: '同為 S，也要整合感染部位、給藥暴露與抗藥機制。Breakpoint 不是單看「血中濃度能不能超過 MIC」。**全表 MIC 最小的是 TMP-SMX 的 0.5（S breakpoint ≤2/38），但沒有人會拿它治這個菌血症**——每個藥的尺不一樣。' }
      ],
      refs: 'CLSI M100, 36th ed. 2026.（Enterobacterales，MIC 單位 µg/mL）'
    },

    /* ========== 第六章 ========== */
    q12: {
      slide: 73, verdictSlide: 74, multi: false,
      stem: 'Day 13，X 光還有陰影', note: '臨床已明顯改善',
      options: [
        { k: 1, text: '影像還沒完全乾淨，繼續打到 X 光正常', verdict: 'bad', base: -15,
          why: '追到 X 光正常容易過度治療。肺炎陰影可持續數週，4–6 週甚至更久。' },
        { k: 2, text: '不以殘存陰影單獨延長療程，整合臨床反應', verdict: 'best', base: 10,
          why: '臨床恢復常早於影像吸收。年長、慢性肺病或病情較重者可能更慢，本例不必為了殘存陰影繼續用藥。' },
        { k: 3, text: '先安排胸部 CT，再決定停不停', verdict: 'bad', base: -10,
          why: '臨床明顯改善時，不需為停藥常規加做 CT。沒有改善才查膿胸、膿瘍或其他診斷；疑腫瘤／阻塞則約 6–8 週後追蹤。' }
      ],
      refs: 'Bruns AH, et al. Clin Infect Dis. 2007;45:983–991.'
    },

    q13: {
      slide: 76, verdictSlide: 77, multi: false,
      stem: '這個病人的總療程', note: 'HAP 合併 *E. cloacae* 菌血症，Day 7 起治療',
      options: [
        { k: 1, text: '7 天', verdict: 'best', base: 10,
          why: 'HAP／VAP 通常 7 天，依反應調整；穩定、感染源已控制的菌血症 7 天有 RCT 支持。**從有效抗生素的第一天算起**——本例假設 Day 7 的 TZP 已有充分暴露與效果，故 Day 7–13 計為 7 天，不因換藥自動歸零。' },
        { k: 2, text: '10 天', verdict: 'bad', base: -10, why: '本例沒有常規延長的理由。' },
        { k: 3, text: '14 天', verdict: 'bad', base: -10, why: '不必要的延長會增加藥物不良反應與抗藥性風險。' },
        { k: 4, text: '21 天', verdict: 'bad', base: -10, why: '明顯過長，本例無此指徵。' }
      ],
      refs: 'IDSA/ATS 2016；BALANCE, doi:10.1056/NEJMoa2404991；IDSA AMR 2026.'
    },

    q14: {
      slide: 79, verdictSlide: 80, multi: false,
      stem: 'Day 12 仍發燒，你的第一步？', note: '假設分支：Day 7 起算，這是治療第 6 天',
      options: [
        { k: 1, text: '將 cefepime 升級成 meropenem', verdict: 'bad', base: -10,
          why: '沒有評估就加藥，可能延誤真正原因。' },
        { k: 2, text: '加上 vancomycin', verdict: 'bad', base: -10,
          why: '沒有評估就加藥，可能延誤真正原因。' },
        { k: 3, text: '重新評估診斷、感染源控制、併發症與非感染原因', verdict: 'best', base: 10,
          why: '五個方向：① 診斷（肺栓塞、心衰竭、肺出血、腫瘤、藥物熱）② 感染源（膿胸、膿瘍、導管、*C. difficile*、鼻竇炎、壓瘡）③ 病原（抗藥菌、黴菌、結核、病毒）④ 藥物（劑量、腎功能、交互作用、抗藥機轉）⑤ 併發症。若病況不穩，重評與復甦、必要的抗菌調整同步進行。' },
        { k: 4, text: '加上抗黴菌藥', verdict: 'bad', base: -10,
          why: '沒有評估就加藥，可能延誤真正原因。' }
      ],
      refs: 'Kalil AC, et al. Clin Infect Dis. 2016;63:e61–e111.'
    },

    q15: {
      slide: 81, verdictSlide: 82, multi: false,
      stem: '可不可以轉口服完成療程',
      note: 'Day 11 穩定、仍 NG 灌食；CIP S，報告沒有 levofloxacin',
      options: [
        { k: 1, text: '改 ciprofloxacin 經 NG 給藥，灌食照常', verdict: 'bad', base: -15,
          why: 'Ca、Mg、Fe、Zn 螯合會降低 FQ 吸收——藥有開卻等於沒給。' },
        { k: 2, text: '改 ciprofloxacin 經 NG 給藥，前後各停灌食 2 小時', verdict: 'ok', base: 5,
          why: '答對螯合，但尚未完成本題的加測流程。本例已知 *E. cloacae* 且 cipro S，並非無效；但須區分**病原已知的標的治療**與**病原未明的經驗治療**。' },
        { k: 3, text: '請加測 levofloxacin，若 S 則評估 750 mg 療程，依腎功能調整間隔，NG 前後各停灌食 2 小時', verdict: 'best', base: 10,
          why: '選定藥物要先確認 S，**不能自行由 cipro 的 S 推定**。NG 給藥前後各停灌食 2 小時，並核對劑型與腎功能（CrCl ≥50：750 mg q24h；20–49：750 mg q48h）。' },
        { k: 4, text: '不行，所有菌血症都必須打滿靜脈療程', verdict: 'bad', base: -10,
          why: '過時。穩定、感染源已控制且有適用口服藥時可以轉換。（本例療程已近尾聲，繼續 IV 完成也合理。）' }
      ],
      refs: 'IDSA AMR 2026；NHS SPS 2025；Tamma 2019；LEVAQUIN label.'
    }
  }
};
