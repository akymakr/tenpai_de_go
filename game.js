// 聴牌でGO! - ゲームロジック

const translations = {
    ja: {
        gameTitle: "聴牌でGO!",
        gameSubtitle: "麻雀 待ち当てトレーニング",
        gameVersion: "v2.0.60406.0",
        scoreVersionLabel: "採点バージョン",
        scoreVersion: "1.1",
        selectMode: "モードを選択してください",
        casualMode: "カジュアル",
        casualDesc: "全{casualStagesBeforeBoss}問+BOSSステージ\n各問{casualStartSeconds}秒 / {lives}ライフ制",
        storyMode: "ストーリー",
        storyDesc: "初級→中級→上級の各{storyDifficultyStep}問+BOSS\n各問{storyStartSeconds}秒 / {lives}ライフ制",
        survivalMode: "サバイバル",
        survivalDesc: "{survivalStartSeconds}秒からスタート\n正解でタイム回復 / ライフなし",
        selectDifficulty: "難易度を選択してください",
        easy: "初級",
        easyDesc: "最大3面張まで",
        medium: "中級",
        mediumDesc: "最大6面張まで",
        hard: "上級",
        hardDesc: "最大9面張まで",
        handTitle: "🀄 手牌 🀄",
        selectWaiting: "🎯 待ち牌をすべて選んでください 🎯",
        submitAnswer: "✨ 回答する ✨",
        selectionStatusIdle: "少なくとも1枚の待ち牌を選んでください",
        selectionStatusSelected: "{count}枚選択中。Enterで回答できます",
        selectionStatusLocked: "{count}枚選択済み。結果表示中は変更できません",
        selectionHintActive: "キーボードは 1〜9 で選択、Enter で回答できます",
        selectionHintLocked: "この画面ではキーボード操作は無効です",
        resultCorrectSelected: "正しく選べた牌",
        resultMissedTiles: "見逃した待ち牌",
        resultIncorrectSelected: "誤って選んだ牌",
        breakdownHowTitle: "待ち牌の並び替え（1雀頭 + 4面子）",
        breakdownSortedHand: "理牌済みの和了形",
        breakdownTarget: "牌型の並べ替え",
        breakdownPrevWait: "前の待ち",
        breakdownNextWait: "次の待ち",
        breakdownCounter: "{current}/{total}",
        breakdownAnimationHint: "理牌された14枚から、和了牌を含む形へ順番に組み替えます",
        correct: "🎉 素晴らしい！ 🎉",
        incorrect: "❌ 惜しい...",
        timeUp: "⏰ 時間切れ！",
        correctAnswer: "💡 正解：",
        nextQuestion: "➡️ 次の問題へ",
        question: "第",
        bossStage: "🔥 BOSSステージ 🔥",
        bossChallenge: "貯めたタイムで挑戦！",
        bossComplete: "BOSSステージクリア！",
        victory: "🎊 完全制覇！ 🎊",
        gameOver: "ゲームオーバー",
        finalQuestions: "ステージ到達：",
        finalScore: "正解数：",
        timeLeftLabel: "残り時間：",
        timeBonusLabel: "累計時間：",
        answerTimeLabel: "解答時間：",
        secondsUnit: "秒",
        livesLeftLabel: "残りライフ：",
        modeLabel: "モード：",
        playAgain: "もう一回遊ぶ",
        backToMenu: "メニューに戻る",
        back: "戻る",
        footer: "聴牌でGO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "日本語",
        english: "English",
        chinese: "繁體中文",
        allBreakdown: "📋 待ち牌の構成（アガリ形）：",
        winningTile: "🎯 待ち：",
        head: "雀頭",
        meld: "面子",
        pair: "対子",
        triplet: "刻子",
        sequence: "順子",
        pin: "筒子",
        man: "萬子",
        sou: "索子",
        lives: "ライフ：",
        loseLife: "ライフ減少",
        continue: "コンティニュー",
        giveUp: "あきらめる",
        stage: "ステージ",
        difficulty: "難易度",
        maxWaits: "最大待ち数：",
        correctCount: "正解数：",
        paused: "⏸️ 一時停止中",
        tapToResume: "画面をタップして再開",
        timeExtension: "⏲️ 長考",
        timeExtensionDesc: "+{timeExtensionSeconds}秒",
        extensionsLeft: "あと",
        cooldown: "クールダウン",
        ok: "OK",
        soundOn: "音あり",
        soundOff: "消音",

        tutorial: "遊び方",
        tutorialTitle: "遊び方",
        tutorialPrev: "戻る",
        tutorialNext: "次へ",
        tutorialClose: "閉じる",
        tutorialFinish: "完了",

        tutorialP1Title: "ゲームの目的",
        tutorialP1Body: "表示された聴牌（テンパイ）の手牌から、アガリ牌（待ち牌）をすべて見つけ出しましょう。\n\nポイント：\n・待ちは複数ある場合があります\n・手牌で4枚使っている牌は、待ち牌にはなりません",

        tutorialP2Title: "操作方法",
        tutorialP2Body: "1) 画面下の1から9の牌から、待ち牌をすべて選択\n2) 「回答する」ボタンで正誤判定\n\nヒント：\n・もう一度タップすると選択解除できます\n・時間切れになっても、牌を一枚でも選択していれば自動的に回答として提出されます",

        tutorialP3Title: "待ち牌の見つけ方（基本手順）",
        tutorialP3Body: "迷ったら、次の手順で判定しましょう。\n1) 手牌で4枚使っている牌を除外\n2) 端牌の速攻除外（例：9待ちは 7/8 か 9 が手牌に必要）\n3) その牌で面子/雀頭の形が作れないものを除外\n4) 残りだけ 1〜9 を仮追加して『4面子1雀頭』判定\n\nまずはこの手順だけ覚えればOKです。",

        tutorialP4Title: "よく出る待ちの形（局所）",
        tutorialP4Body: "手牌全体を一気に見るより、部分形の当たりを覚えると速くなります。\n・両面待ち：34 → 2/5\n・嵌張待ち：35 → 4\n・辺張待ち：12 → 3、89 → 7\n・双碰待ち：44 + 77 → 4/7\n・単騎待ち：6 → 6",

        tutorialP5Title: "難易度について",
        tutorialP5Body: "初級：最大3面張\n中級：最大6面張\n上級：最大9面張\n\nストーリーモードでは、ステージが進むごとに難易度が上がります。",

        tutorialP6Title: "長考",
        tutorialP6Body: "「長考」ボタンで回答時間を延長できます。\n・1回につき +{timeExtensionSeconds}秒\n・長考の回数は5ステージごと（第1/6/11...）に1回分だけ追加\n・使用できるのはカジュアル/ストーリーモードのみ（サバイバルでは使用不可）",

        tutorialP7Title: "BOSSステージ",
        tutorialP7Body: "ステージ{casualBossStageNumber}（カジュアルモード）/ステージ{storyBossStageNumber}（ストーリーモード）はBOSSステージです。\nこれまでのステージで余った「残り時間+長考の合計」が制限時間になります。正解すればゲームクリアです！",

        tutorialVisualExample: "図解",
        tutorialVisualHand: "手牌（13枚）",
        tutorialVisualWait: "待ち牌",
        tutorialVisualCandidates: "候補（1〜9）",
        tutorialVisualSelected: "選択中",
        tutorialVisualUsedFour: "手牌で4枚使い切り",
        tutorialVisualNotWait: "この牌は待ちにならない",
        tutorialVisualFlow1: "4枚使い牌を除外",
        tutorialVisualFlow2: "1〜9を仮追加",
        tutorialVisualFlow3: "4面子1雀頭で判定",
        tutorialPatternRyanmen: "両面 34 → 2/5",
        tutorialPatternKanchan: "嵌張 35 → 4",
        tutorialPatternPenchanA: "辺張 12 → 3",
        tutorialPatternPenchanB: "辺張 89 → 7",
        tutorialPatternShanpon: "双碰 44+77 → 4/7",
        tutorialPatternTanki: "単騎 6 → 6",
        tutorialRealTitle: "実戦問題（手順で解く）",
        tutorialRealBody: "この13枚は実戦で出る形です。\n先に自力で待ちを考えてから、下の『ヒント』→『答え』を押して確認してください。",
        tutorialRealHintBtn: "ヒントを表示",
        tutorialRealAnswerBtn: "答えを表示",
        tutorialRealNewBtn: "別の問題",
        tutorialRealResetBtn: "最初から",
        tutorialRealHintUsedFour: "ヒント：{tiles} は手牌で4枚使っているので、待ち候補から除外します。",
        tutorialRealHintNoUsedFour: "ヒント：4枚使い切りの牌はありません。",
        tutorialRealHintStructure: "ヒント：{tiles} は必要な形を作れないため先に除外できます（例：9待ちは 7/8 または 9 が必要）。",
        tutorialRealHintFallback: "ヒント：この問題は明確な除外牌が少ない形です。中張（4/5/6）から順に仮追加して、4面子1雀頭になるかを確認しましょう。",
        tutorialRealAnswerText: "正解：待ちは {waits}。",
        tutorialRealBreakdownTitle: "待ち牌ごとの並び替え（1雀頭 + 4面子）",
        tutorialWaitTierLabel: "教學難易度：",
        tutorialWaitTierEasyDesc: "1〜3面待ち",
        tutorialWaitTierMediumDesc: "4〜6面待ち",
        tutorialWaitTierHardDesc: "7〜9面待ち",
        tutorialWaitCountLabel: "待ちの数：{count}"
    },
    en: {
        gameTitle: "Tenpai de GO!",
        gameSubtitle: "Mahjong Waiting Tile Trainer",
        gameVersion: "v2.0.60406.0",
        scoreVersionLabel: "Scoring Version",
        scoreVersion: "1.1",
        selectMode: "Select Mode",
        casualMode: "Casual",
        casualDesc: "{casualStagesBeforeBoss} Questions + BOSS\n{casualStartSeconds}s each stage / {lives} Lives",
        storyMode: "Story",
        storyDesc: "Easy→Med→Hard ({storyDifficultyStep} stages each) + BOSS\n{storyStartSeconds}s each stage / {lives} Lives",
        survivalMode: "Survival",
        survivalDesc: "Starting with {survivalStartSeconds}s\nRecover time on correct answers / No lives",
        selectDifficulty: "Select Difficulty",
        easy: "Easy",
        easyDesc: "Up to 3-way waits",
        medium: "Medium",
        mediumDesc: "Up to 6-way waits",
        hard: "Hard",
        hardDesc: "Up to 9-way waits",
        handTitle: "🀄 Your Hand 🀄",
        selectWaiting: "🎯 Select ALL Winning Tiles (Waits) 🎯",
        submitAnswer: "✨ Submit ✨",
        selectionStatusIdle: "Select at least 1 waiting tile",
        selectionStatusSelected: "{count} selected. Press Enter to submit",
        selectionStatusLocked: "{count} selected. Selection is locked right now",
        selectionHintActive: "Keyboard: press 1-9 to toggle tiles, Enter to submit",
        selectionHintLocked: "Keyboard shortcuts are disabled on this screen",
        resultCorrectSelected: "Correctly selected",
        resultMissedTiles: "Missed waits",
        resultIncorrectSelected: "Incorrect selections",
        breakdownHowTitle: "Winning Shape Rearrangement (1 Pair + 4 Melds)",
        breakdownSortedHand: "Sorted winning hand",
        breakdownTarget: "Breakdown order",
        breakdownPrevWait: "Previous Wait",
        breakdownNextWait: "Next Wait",
        breakdownCounter: "{current}/{total}",
        breakdownAnimationHint: "Start from the sorted 14-tile hand, then rearrange it into the winning structure",
        correct: "🎉 Fantastic! 🎉",
        incorrect: "❌ So close...",
        timeUp: "⏰ Time's Up!",
        correctAnswer: "💡 Correct Waits:",
        nextQuestion: "➡️ Next Question",
        question: "Stage",
        bossStage: "🔥 BOSS STAGE 🔥",
        bossChallenge: "Use your saved time!",
        bossComplete: "BOSS STAGE cleared! Congratulations!",
        victory: "🎊 ALL CLEARED! 🎊",
        gameOver: "GAME OVER",
        finalQuestions: "Stages Reached:",
        finalScore: "Correct:",
        timeLeftLabel: "Time Left:",
        timeBonusLabel: "Saved Time:",
        answerTimeLabel: "Answer Time:",
        secondsUnit: "sec",
        livesLeftLabel: "Lives:",
        modeLabel: "Mode:",
        playAgain: "Play Again",
        backToMenu: "Main Menu",
        back: "Back",
        footer: "Tenpai de GO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "Japanese",
        english: "English",
        chinese: "繁體中文",
        allBreakdown: "📋 Hand Structure for each wait:",
        winningTile: "🎯 Wait:",
        head: "Pair",
        meld: "Meld",
        pair: "Pair",
        triplet: "Pung (Triplet)",
        sequence: "Chow (Sequence)",
        pin: "Circles (Pin)",
        man: "Characters (Man)",
        sou: "Bamboos (Sou)",
        lives: "Lives:",
        loseLife: "Life Lost",
        continue: "Continue",
        giveUp: "Give Up",
        stage: "Stage",
        difficulty: "Difficulty",
        maxWaits: "Max Waits:",
        correctCount: "Correct:",
        paused: "⏸️ PAUSED",
        tapToResume: "Tap to Resume",
        timeExtension: "⏲️ Think Time",
        timeExtensionDesc: "+{timeExtensionSeconds}s",
        extensionsLeft: "Left:",
        cooldown: "Cooldown",
        ok: "OK",
        soundOn: "Sound On",
        soundOff: "Muted",

        tutorial: "Tutorial",
        tutorialTitle: "How to Play",
        tutorialPrev: "Back",
        tutorialNext: "Next",
        tutorialClose: "Close",
        tutorialFinish: "Finish",

        tutorialP1Title: "Goal",
        tutorialP1Body: "Your hand is in 'Tenpai' (one tile away from winning).\nFind and select ALL possible winning tiles (waits).\n\nKey Points:\n- There may be multiple different winning tiles.\n- Tiles already used 4 times in your hand cannot be waits.",

        tutorialP2Title: "Controls",
        tutorialP2Body: "1) Tap the tile icons (1-9) to select your waits.\n2) Tap 'Submit' to check your answer.\n\nTips:\n- Tap a selected tile again to unselect it.\n- If time runs out, your current selection will be auto-submitted.",

        tutorialP3Title: "How to Judge Waits (Beginner Flow)",
        tutorialP3Body: "When unsure, follow this exact flow.\n1) Exclude tiles already used 4 times in your hand.\n2) Quick edge pruning (e.g. waiting on 9 needs 7/8 or an existing 9).\n3) Exclude tiles that cannot form any meld/head shape.\n4) Only then test remaining tiles 1-9 with the 4 melds + 1 pair rule.\n\nYou can clear most problems with just this method.",

        tutorialP4Title: "Common Wait Shapes (Local Patterns)",
        tutorialP4Body: "Spotting small patterns is faster than reading all 13 tiles at once.\n- Ryanmen (open wait): 34 -> 2/5\n- Kanchan (closed wait): 35 -> 4\n- Penchan (edge wait): 12 -> 3, 89 -> 7\n- Shanpon (pair wait): 44 + 77 -> 4/7\n- Tanki (single wait): 6 -> 6",

        tutorialP5Title: "Difficulty Levels",
        tutorialP5Body: "Easy: Up to 3-way waits.\nMedium: Up to 6-way waits.\nHard: Up to 9-way waits.\n\nIn Story Mode, the difficulty increases every {storyDifficultyStep} stages.",

        tutorialP6Title: "Think Time (+{timeExtensionSeconds}s)",
        tutorialP6Body: "Use 'Think Time' to extend {timeExtensionSeconds} seconds to your current stage.\n- Gain 1 charge every 5 stages (Stage 1/6/11...).\n- Available in Casual/Story only (disabled in Survival mode).",

        tutorialP7Title: "The BOSS Stage",
        tutorialP7Body: "Stage {casualBossStageNumber} (Casual Mode) / Stage {storyBossStageNumber} (Story Mode) is the BOSS stage.\nYour time limit is the sum of all remaining time from previous stages. If you answer correctly, you win this game!",

        tutorialVisualExample: "Visual Guide",
        tutorialVisualHand: "Hand (13 tiles)",
        tutorialVisualWait: "Wait tile",
        tutorialVisualCandidates: "Candidates (1-9)",
        tutorialVisualSelected: "Selected",
        tutorialVisualUsedFour: "Already used 4 copies",
        tutorialVisualNotWait: "Cannot be a wait",
        tutorialVisualFlow1: "Exclude tiles used 4 times",
        tutorialVisualFlow2: "Try adding 1-9",
        tutorialVisualFlow3: "Check 4 melds + 1 pair",
        tutorialPatternRyanmen: "Ryanmen 34 -> 2/5",
        tutorialPatternKanchan: "Kanchan 35 -> 4",
        tutorialPatternPenchanA: "Penchan 12 -> 3",
        tutorialPatternPenchanB: "Penchan 89 -> 7",
        tutorialPatternShanpon: "Shanpon 44+77 -> 4/7",
        tutorialPatternTanki: "Tanki 6 -> 6",
        tutorialRealTitle: "Practice Question (Step-by-Step)",
        tutorialRealBody: "This is a realistic 13-tile hand.\nTry solving it first, then use 'Show Hint' and 'Show Answer' below.",
        tutorialRealHintBtn: "Show Hint",
        tutorialRealAnswerBtn: "Show Answer",
        tutorialRealNewBtn: "New Question",
        tutorialRealResetBtn: "Reset",
        tutorialRealHintUsedFour: "Hint: {tiles} is already used 4 times in hand, so exclude it from wait candidates.",
        tutorialRealHintNoUsedFour: "Hint: No tile is used 4 times.",
        tutorialRealHintStructure: "Hint: {tiles} cannot form required shapes, so eliminate them first (e.g. waiting on 9 needs 7/8 or an existing 9).",
        tutorialRealHintFallback: "Hint: This hand has few obvious eliminations. Start by testing middle tiles (4/5/6) and check whether the hand can become 4 melds + 1 pair.",
        tutorialRealAnswerText: "Answer: waits are {waits}.",
        tutorialRealBreakdownTitle: "Rearrangement per wait (1 pair + 4 melds)",
        tutorialWaitTierLabel: "Tutorial Tier:",
        tutorialWaitTierEasyDesc: "1-3 waits",
        tutorialWaitTierMediumDesc: "4-6 waits",
        tutorialWaitTierHardDesc: "7-9 waits",
        tutorialWaitCountLabel: "Waits: {count}"
    },
    zh: {
        gameTitle: "聽牌GO!",
        gameSubtitle: "麻雀聽牌強化訓練",
        gameVersion: "v2.0.60406.0",
        scoreVersionLabel: "計分版本",
        scoreVersion: "1.1",
        selectMode: "請選擇遊戲模式",
        casualMode: "休閒模式",
        casualDesc: "全{casualStagesBeforeBoss}題 + BOSS關卡\n每題{casualStartSeconds}秒 / {lives}條生命",
        storyMode: "闖關模式",
        storyDesc: "初級→中級→高級各{storyDifficultyStep}題 + BOSS關卡\n每題{storyStartSeconds}秒 / {lives}條生命",
        survivalMode: "生存模式",
        survivalDesc: "由{survivalStartSeconds}秒倒計時開始\n答對可回復時間 / 無生命",
        selectDifficulty: "請選擇難度",
        easy: "初級",
        easyDesc: "最多聽3張",
        medium: "中級",
        mediumDesc: "最多聽6張",
        hard: "高級",
        hardDesc: "最多聽9張",
        handTitle: "🀄 目前手牌 🀄",
        selectWaiting: "🎯 請選出所有聽的牌 🎯",
        submitAnswer: "✨ 確認答案 ✨",
        selectionStatusIdle: "請至少選擇 1 張聽牌",
        selectionStatusSelected: "已選擇 {count} 張，可按 Enter 送出",
        selectionStatusLocked: "已選擇 {count} 張，目前不能再修改",
        selectionHintActive: "鍵盤可用 1-9 選牌，Enter 送出答案",
        selectionHintLocked: "此畫面已停用鍵盤快捷操作",
        resultCorrectSelected: "正確選中的牌",
        resultMissedTiles: "漏選的聽牌",
        resultIncorrectSelected: "誤選的牌",
        breakdownHowTitle: "胡牌排列（1 對子 + 4 面子）",
        breakdownSortedHand: "理牌後的和牌形",
        breakdownTarget: "拆分順序",
        breakdownPrevWait: "上一張聽牌",
        breakdownNextWait: "下一張聽牌",
        breakdownCounter: "{current}/{total}",
        breakdownAnimationHint: "先從排序後的 14 張牌開始，再依序重排成能胡的牌型",
        correct: "🎉 高手！ 🎉",
        incorrect: "❌ 可惜...",
        timeUp: "⏰ 時間到了！",
        correctAnswer: "💡 正確聽牌：",
        nextQuestion: "➡️ 下一題",
        question: "第",
        bossStage: "🔥 BOSS關卡 🔥",
        bossChallenge: "使用累積時間挑戰！",
        bossComplete: "恭喜您挑戰BOSS關卡成功！",
        victory: "🎊 全部通關！ 🎊",
        gameOver: "遊戲結束",
        finalQuestions: "到達關卡：",
        finalScore: "正確數：",
        timeLeftLabel: "剩餘時間：",
        timeBonusLabel: "累積時間：",
        answerTimeLabel: "答題時間：",
        secondsUnit: "秒",
        livesLeftLabel: "剩餘生命：",
        modeLabel: "模式：",
        playAgain: "再玩一次",
        backToMenu: "返回選單",
        back: "返回",
        footer: "聽牌GO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "日本語",
        english: "English",
        chinese: "繁體中文",
        allBreakdown: "📋 聽牌拆解（食胡牌型）：",
        winningTile: "🎯 聽：",
        head: "將眼",
        meld: "面子",
        pair: "對子",
        triplet: "刻子",
        sequence: "順子",
        pin: "筒子",
        man: "萬子",
        sou: "索子",
        lives: "生命值：",
        loseLife: "生命減少",
        continue: "繼續遊戲",
        giveUp: "放棄",
        stage: "關卡",
        difficulty: "難度",
        maxWaits: "最大聽牌數：",
        correctCount: "正確數：",
        paused: "⏸️ 已暫停",
        tapToResume: "點擊螢幕繼續",
        timeExtension: "⏲️ 思考時間",
        timeExtensionDesc: "+{timeExtensionSeconds}秒",
        extensionsLeft: "剩餘",
        cooldown: "冷卻",
        ok: "確認",
        soundOn: "音效開啟",
        soundOff: "靜音",

        tutorial: "教學",
        tutorialTitle: "遊戲玩法",
        tutorialPrev: "上一頁",
        tutorialNext: "下一頁",
        tutorialClose: "關閉",
        tutorialFinish: "完成",

        tutorialP1Title: "遊戲目標",
        tutorialP1Body: "根據顯示的手牌（聽牌狀態），找出所有可以食胡的「聽牌」。\n\n注意點：\n・聽牌可能不只一張（聽多張）\n・手牌中已經使用了4張的牌，不能作為聽牌",

        tutorialP2Title: "操作方式",
        tutorialP2Body: "1) 點擊下方1至9的麻雀牌，選出所有聽牌\n2) 點擊「確認答案」進行判定\n\n提示：\n・再次點擊已選中的牌可取消選擇\n・時間結束時，若已有選牌會自動提交",

        tutorialP3Title: "新手判斷流程（重點）",
        tutorialP3Body: "如果不確定聽哪張，就照這個流程：\n1) 先排除「手牌已用滿4張」的牌\n2) 先做邊張速排（例：要聽 9，手上至少要有 7/8 或已有 9）\n3) 再排除「連面子/雀頭基本形都做不出來」的牌\n4) 最後把 1~9 逐張假設補入，檢查是否成 4面子+1雀頭\n\n先熟這流程，解題成功率會明顯提升。",

        tutorialP4Title: "常見待型（局部記憶）",
        tutorialP4Body: "先看局部形狀，通常比整副牌硬算更快。\n・兩面：34 → 2/5\n・嵌張：35 → 4\n・邊張：12 → 3、89 → 7\n・雙碰：44 + 77 → 4/7\n・單騎：6 → 6",

        tutorialP5Title: "難度說明",
        tutorialP5Body: "初級：最多聽3張\n中級：最多聽6張\n高級：最多聽9張\n\n在「闖關模式」中，難度會隨著關卡進度提升。",

        tutorialP6Title: "思考時間",
        tutorialP6Body: "可使用思考時間按鈕延長該關卡的回答時間。\n・每次使用可增加{timeExtensionSeconds}秒\n・每 5 關（第 1/6/11... 關）才增加 1 次\n・僅限休閒/闖關模式可用（生存模式不可使用）",

        tutorialP7Title: "BOSS關卡",
        tutorialP7Body: "第{casualBossStageNumber}關 (休閒模式) / 第{storyBossStageNumber}關 (闖關模式) 為BOSS關卡。\n你的挑戰時間等於之前關卡「節省下來的總時間」。答對即可通關！",

        tutorialVisualExample: "圖解",
        tutorialVisualHand: "手牌（13張）",
        tutorialVisualWait: "聽牌",
        tutorialVisualCandidates: "候選（1~9）",
        tutorialVisualSelected: "目前選擇",
        tutorialVisualUsedFour: "手牌已用滿4張",
        tutorialVisualNotWait: "這張不能當聽牌",
        tutorialVisualFlow1: "先排除用滿4張的牌",
        tutorialVisualFlow2: "把1~9逐張假設補入",
        tutorialVisualFlow3: "檢查是否成4面子+1雀頭",
        tutorialPatternRyanmen: "兩面 34 → 2/5",
        tutorialPatternKanchan: "嵌張 35 → 4",
        tutorialPatternPenchanA: "邊張 12 → 3",
        tutorialPatternPenchanB: "邊張 89 → 7",
        tutorialPatternShanpon: "雙碰 44+77 → 4/7",
        tutorialPatternTanki: "單騎 6 → 6",
        tutorialRealTitle: "實戰題（按步驟解）",
        tutorialRealBody: "這是常見的13張手牌題型。\n請先自行判斷，再按下方『顯示提示』→『顯示答案』核對。",
        tutorialRealHintBtn: "顯示提示",
        tutorialRealAnswerBtn: "顯示答案",
        tutorialRealNewBtn: "換一題",
        tutorialRealResetBtn: "重設",
        tutorialRealHintUsedFour: "提示：{tiles} 在手牌中已經出現4張，因此要先從候選中排除。",
        tutorialRealHintNoUsedFour: "提示：沒有牌被用滿4張。",
        tutorialRealHintStructure: "提示：{tiles} 無法形成必要形狀，可先淘汰（例如聽 9 至少要有 7/8 或已有 9）。",
        tutorialRealHintFallback: "提示：這題明顯可淘汰的牌較少，建議先從中張（4/5/6）開始逐張假設補入，再檢查是否能成 4 面子 + 1 雀頭。",
        tutorialRealAnswerText: "答案：聽 {waits}。",
        tutorialRealBreakdownTitle: "各聽牌排列（1 對子 + 4 面子）",
        tutorialWaitTierLabel: "教學難度：",
        tutorialWaitTierEasyDesc: "1-3 面聽",
        tutorialWaitTierMediumDesc: "4-6 面聽",
        tutorialWaitTierHardDesc: "7-9 面聽",
        tutorialWaitCountLabel: "面聽數：{count}"
    }
};

// ========== ゲーム設定（変数化）==========
const gameConfig = {
    modeStartSeconds: {
        casual: 60,
        story: 30,
        survival: 30
    },
    lives: 3,
    survivalRecoverySeconds: {
        easy: 4,
        medium: 8,
        hard: 16
    },
    timeExtensionSeconds: 30,
    // BOSS ステージ
    storyBossStageNumber: 16,
    casualBossStageNumber: 11,
    // ストーリーの難易度アップ間隔（N ステージごと）
    storyDifficultyStep: 5
};

function getBossStageNumberForMode(mode) {
    if (mode === 'story') return gameConfig.storyBossStageNumber;
    if (mode === 'casual') return gameConfig.casualBossStageNumber;
    return null;
}

function getStagesBeforeBossForMode(mode) {
    const boss = getBossStageNumberForMode(mode);
    return boss ? Math.max(0, boss - 1) : 0;
}

function getStoryDifficultyForStage(stageNumber) {
    const step = Math.max(1, gameConfig.storyDifficultyStep || 1);
    if (stageNumber <= step) return 'easy';
    if (stageNumber <= step * 2) return 'medium';
    return 'hard';
}

let tutorialPageIndex = 0;
let tutorialRealQuestionStep = 0;
let tutorialBreakdownIndex = 0;
let tutorialRealQuestionData = null;

function getQueryParam(name) {
    try {
        return new URLSearchParams(window.location.search).get(name);
    } catch {
        return null;
    }
}

function isProbablyMobileDevice() {
    // 2026+: UA/Platform は縮退・非推奨化が進んでいるため、可能なら UA-CH を優先
    const uaData = navigator.userAgentData;
    const coarsePointer = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
    if (uaData && typeof uaData.mobile === 'boolean') {
        // iPad は mobile=false の場合があるため、タッチ指標も併用
        const isTouchLike = (navigator.maxTouchPoints || 0) > 1;
        return !!(uaData.mobile || (isTouchLike && coarsePointer));
    }

    // フォールバック（古いブラウザ / Safari）
    const ua = (navigator.userAgent || '').toLowerCase();
    const isMobileUa = /android|iphone|ipod|ipad/.test(ua);
    // iPadOS 13+ は UA が Mac っぽいことがある（navigator.platform も縮退しうるが最後の手段）
    const isIpadOsLegacy = navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1;
    return !!(isMobileUa || isIpadOsLegacy || coarsePointer);
}

function prefersReducedMotion() {
    try {
        return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
        return false;
    }
}

function shouldEnableLowPowerMode() {
    const forced = getQueryParam('lowpower');
    if (forced === '1' || forced === 'true') return true;
    if (forced === '0' || forced === 'false') return false;

    const saveData = !!navigator.connection?.saveData;
    const effectiveType = navigator.connection?.effectiveType || '';
    const slowNetwork = /^(slow-2g|2g|3g)$/.test(effectiveType);
    const deviceMemory = navigator.deviceMemory;
    const lowMemory = typeof deviceMemory === 'number' && deviceMemory > 0 && deviceMemory <= 4;
    const cpuCores = navigator.hardwareConcurrency;
    const lowCpu = typeof cpuCores === 'number' && cpuCores > 0 && cpuCores <= 4;

    return prefersReducedMotion() || saveData || slowNetwork || lowMemory || lowCpu || isProbablyMobileDevice();
}

function applyLowPowerClass() {
    document.body.classList.toggle('low-power', shouldEnableLowPowerMode());
}

function isIOSFamilyDevice() {
    const ua = (navigator.userAgent || '').toLowerCase();
    const isIOSUa = /iphone|ipad|ipod/.test(ua);
    const isIpadOsDesktopMode = navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1;
    return !!(isIOSUa || isIpadOsDesktopMode);
}

function applyIosTextureCompatibilityClass() {
    document.body.classList.toggle('ios-texture-compat', isIOSFamilyDevice());
}

const domCache = new Map();

const nativeGetElementById = document.getElementById.bind(document);

function getElementByIdCached(id) {
    if (domCache.has(id)) {
        const cached = domCache.get(id);
        if (cached && cached.isConnected) return cached;
        domCache.delete(id);
    }
    const element = nativeGetElementById(id);
    if (element) domCache.set(id, element);
    return element;
}

// 互換性のため：以後の document.getElementById はキャッシュ経由にする
// （getElementByIdCached 内部は nativeGetElementById を使うため再帰しない）
document.getElementById = (id) => getElementByIdCached(id);

let resultActionCache = {};
const breakdownAnimationState = {
    currentIndex: 0,
    playToken: 0,
    timerIds: []
};

function getResultActionElements() {
    if (resultActionCache.actions && resultActionCache.actions.isConnected) return resultActionCache;

    resultActionCache = {};

    resultActionCache.actions = getElementByIdCached('result-actions');
    resultActionCache.title = getElementByIdCached('result-actions-title');
    resultActionCache.body = getElementByIdCached('result-actions-body');
    resultActionCache.continueBtn = getElementByIdCached('result-continue-btn');
    resultActionCache.backBtn = getElementByIdCached('result-back-btn');
    resultActionCache.okBtn = getElementByIdCached('result-ok-btn');
    resultActionCache.okTextSpan = getElementByIdCached('result-ok-text');
    resultActionCache.continueText = getElementByIdCached('result-continue-text');
    resultActionCache.backText = getElementByIdCached('result-back-text');

    return resultActionCache;
}

function getTutorialPages() {
    return [
        { title: t('tutorialP1Title'), body: t('tutorialP1Body'), visualType: 'goal' },
        { title: t('tutorialP2Title'), body: t('tutorialP2Body'), visualType: 'controls' },
        { title: t('tutorialP3Title'), body: t('tutorialP3Body'), visualType: 'flow' },
        { title: t('tutorialP4Title'), body: t('tutorialP4Body'), visualType: 'patterns' },
        { title: t('tutorialRealTitle'), body: t('tutorialRealBody'), visualType: 'realQuestion' },
        { title: t('tutorialP5Title'), body: t('tutorialP5Body') },
        { title: t('tutorialP6Title'), body: t('tutorialP6Body') },
        { title: t('tutorialP7Title'), body: t('tutorialP7Body') }
    ];
}

function buildCountsFromTiles(tiles) {
    const counts = {};
    for (let i = 1; i <= 9; i++) counts[i] = 0;
    for (const tile of tiles || []) {
        if (Number.isInteger(tile) && tile >= 1 && tile <= 9) counts[tile]++;
    }
    return counts;
}

function solveTutorialHand(tiles) {
    const counts = buildCountsFromTiles(tiles);
    return {
        hand: Array.isArray(tiles) ? tiles.slice() : [],
        waits: calculateWinningTiles(counts),
        counts
    };
}

function getExhaustedTilesFromCounts(counts) {
    const exhausted = [];
    for (let tile = 1; tile <= 9; tile++) {
        if ((counts?.[tile] || 0) >= 4) exhausted.push(tile);
    }
    return exhausted;
}

function getStructurallyImpossibleTilesFromCounts(counts) {
    const impossible = [];
    for (let tile = 1; tile <= 9; tile++) {
        const sameTileExists = (counts?.[tile] || 0) > 0;
        const canMakeLeftSequence = tile >= 3 && (counts?.[tile - 1] || 0) > 0 && (counts?.[tile - 2] || 0) > 0;
        const canMakeMiddleSequence = tile >= 2 && tile <= 8 && (counts?.[tile - 1] || 0) > 0 && (counts?.[tile + 1] || 0) > 0;
        const canMakeRightSequence = tile <= 7 && (counts?.[tile + 1] || 0) > 0 && (counts?.[tile + 2] || 0) > 0;

        if (!sameTileExists && !canMakeLeftSequence && !canMakeMiddleSequence && !canMakeRightSequence) {
            impossible.push(tile);
        }
    }
    return impossible;
}

function pickTutorialRandomDifficulty() {
    const levels = ['easy', 'medium', 'hard'];
    return levels[Math.floor(Math.random() * levels.length)];
}

function getTutorialTierByWaitCount(waitCount) {
    const count = Math.max(0, Number(waitCount) || 0);
    if (count >= 7) return 'hard';
    if (count >= 4) return 'medium';
    return 'easy';
}

function generateTutorialRealQuestion() {
    const backupHand = gameState.hand;
    const backupCounts = gameState.counts;
    const backupWaiting = gameState.waitingTiles;

    try {
        const difficulty = pickTutorialRandomDifficulty();
        const generated = generateTenpaiHand(difficulty);
        const hand = Array.isArray(generated?.hand)
            ? generated.hand.slice().sort((a, b) => a - b)
            : [1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
        const counts = buildCountsFromTiles(hand);
        const waits = calculateWinningTiles(counts);
        return {
            difficulty,
            tileType: 'pin',
            hand,
            counts,
            waits,
            exhausted: getExhaustedTilesFromCounts(counts),
            structurallyImpossible: getStructurallyImpossibleTilesFromCounts(counts)
        };
    } catch {
        const fallback = solveTutorialHand([1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9]);
        return {
            difficulty: 'easy',
            tileType: 'pin',
            hand: fallback.hand.slice().sort((a, b) => a - b),
            counts: fallback.counts,
            waits: fallback.waits,
            exhausted: getExhaustedTilesFromCounts(fallback.counts),
            structurallyImpossible: getStructurallyImpossibleTilesFromCounts(fallback.counts)
        };
    } finally {
        gameState.hand = backupHand;
        gameState.counts = backupCounts;
        gameState.waitingTiles = backupWaiting;
    }
}

function getTutorialRealQuestionData({ forceNew = false } = {}) {
    if (!tutorialRealQuestionData || forceNew) {
        tutorialRealQuestionData = generateTutorialRealQuestion();
    }
    return tutorialRealQuestionData;
}

function createTutorialMiniTile(tileNumber, { selected = false, disabled = false, crossed = false } = {}) {
    const tile = document.createElement('span');
    tile.className = 'tutorial-mini-tile';
    if (selected) tile.classList.add('is-selected');
    if (disabled) tile.classList.add('is-disabled');
    if (crossed) tile.classList.add('is-crossed');

    const tileInfo = getTileInfo('pin', tileNumber);
    tile.appendChild(createTileImage(tileInfo));
    tile.title = tileInfo.name;
    return tile;
}

function createTutorialTileRow({ label, tiles, selected = [], disabled = [], crossed = [] }) {
    const row = document.createElement('div');
    row.className = 'tutorial-tile-row';

    const labelEl = document.createElement('div');
    labelEl.className = 'tutorial-row-label';
    labelEl.textContent = label || '';
    row.appendChild(labelEl);

    const tilesWrap = document.createElement('div');
    tilesWrap.className = 'tutorial-row-tiles';

    const selectedSet = new Set(selected);
    const disabledSet = new Set(disabled);
    const crossedSet = new Set(crossed);
    for (const number of tiles || []) {
        tilesWrap.appendChild(createTutorialMiniTile(number, {
            selected: selectedSet.has(number),
            disabled: disabledSet.has(number),
            crossed: crossedSet.has(number)
        }));
    }

    row.appendChild(tilesWrap);
    return row;
}

function createTutorialChipRow(chips) {
    const chipRow = document.createElement('div');
    chipRow.className = 'tutorial-chip-row';
    for (const text of chips || []) {
        const chip = document.createElement('span');
        chip.className = 'tutorial-chip';
        chip.textContent = text;
        chipRow.appendChild(chip);
    }
    return chipRow;
}

function createTutorialPatternItem({ label, core, waits }) {
    const item = document.createElement('div');
    item.className = 'tutorial-pattern-item';

    const labelEl = document.createElement('div');
    labelEl.className = 'tutorial-pattern-label';
    labelEl.textContent = label || '';
    item.appendChild(labelEl);

    const groups = document.createElement('div');
    groups.className = 'tutorial-pattern-groups';

    const coreWrap = document.createElement('div');
    coreWrap.className = 'tutorial-row-tiles';
    for (const number of core || []) {
        coreWrap.appendChild(createTutorialMiniTile(number));
    }

    const arrow = document.createElement('div');
    arrow.className = 'tutorial-pattern-arrow';
    arrow.textContent = '→';

    const waitWrap = document.createElement('div');
    waitWrap.className = 'tutorial-row-tiles';
    for (const number of waits || []) {
        waitWrap.appendChild(createTutorialMiniTile(number, { selected: true }));
    }

    groups.appendChild(coreWrap);
    groups.appendChild(arrow);
    groups.appendChild(waitWrap);
    item.appendChild(groups);

    return item;
}

function getTutorialMeldLabel(tiles, isHead = false) {
    if (isHead) return t('head');
    if (!Array.isArray(tiles) || tiles.length === 0) return t('meld');
    if (tiles.length === 2) return t('pair');
    if (tiles.length === 3 && tiles[0] === tiles[1] && tiles[1] === tiles[2]) return t('triplet');
    if (tiles.length === 3) return t('sequence');
    return t('meld');
}

function createTutorialBreakdownGroup(tiles, { isHead = false } = {}) {
    const group = document.createElement('div');
    group.className = 'tutorial-breakdown-group';

    const label = document.createElement('div');
    label.className = 'tutorial-breakdown-label';
    label.textContent = getTutorialMeldLabel(tiles, isHead);
    group.appendChild(label);

    const row = document.createElement('div');
    row.className = 'tutorial-row-tiles';
    for (const tile of tiles || []) {
        row.appendChild(createTutorialMiniTile(tile));
    }
    group.appendChild(row);

    return group;
}

function renderTutorialVisual(page) {
    const visualEl = getElementByIdCached('tutorial-page-visual');
    if (!visualEl) return;

    visualEl.innerHTML = '';
    if (!page || !page.visualType) {
        visualEl.classList.add('hidden');
        return;
    }

    visualEl.classList.remove('hidden');

    const titleEl = document.createElement('div');
    titleEl.className = 'tutorial-visual-title';
    titleEl.textContent = t('tutorialVisualExample');
    visualEl.appendChild(titleEl);

    if (page.visualType === 'goal') {
        const solved = solveTutorialHand([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]);
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualHand'),
            tiles: solved.hand
        }));
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualWait'),
            tiles: solved.waits,
            selected: solved.waits
        }));
        return;
    }

    if (page.visualType === 'controls') {
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualCandidates'),
            tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            selected: [5]
        }));
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualSelected'),
            tiles: [5],
            selected: [5]
        }));
        return;
    }

    if (page.visualType === 'flow') {
        visualEl.appendChild(createTutorialChipRow([
            t('tutorialVisualFlow1'),
            t('tutorialVisualFlow2'),
            t('tutorialVisualFlow3')
        ]));
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualUsedFour'),
            tiles: [5, 5, 5, 5],
            disabled: [5],
            crossed: [5]
        }));
        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualNotWait'),
            tiles: [5],
            disabled: [5],
            crossed: [5]
        }));
        return;
    }

    if (page.visualType === 'patterns') {
        const items = [
            { label: t('tutorialPatternRyanmen'), core: [3, 4], waits: [2, 5] },
            { label: t('tutorialPatternKanchan'), core: [3, 5], waits: [4] },
            { label: t('tutorialPatternPenchanA'), core: [1, 2], waits: [3] },
            { label: t('tutorialPatternPenchanB'), core: [8, 9], waits: [7] },
            { label: t('tutorialPatternShanpon'), core: [4, 4, 7, 7], waits: [4, 7] },
            { label: t('tutorialPatternTanki'), core: [6], waits: [6] }
        ];

        for (const item of items) {
            visualEl.appendChild(createTutorialPatternItem(item));
        }
        return;
    }

    if (page.visualType === 'realQuestion') {
        const question = getTutorialRealQuestionData();
        const waitCount = (question.waits || []).length;
        const tier = getTutorialTierByWaitCount(waitCount);
        const hand = question.hand;
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const exhausted = question.exhausted || [];
        const structural = (question.structurallyImpossible || []).filter((tile) => !exhausted.includes(tile));
        const eliminated = Array.from(new Set([...exhausted, ...structural]));
        const hasHint = true;

        const step = Math.max(0, Math.min(2, tutorialRealQuestionStep || 0));
        tutorialRealQuestionStep = step;

        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualHand'),
            tiles: hand
        }));

        const difficultyLine = document.createElement('div');
        difficultyLine.className = 'tutorial-visual-text';
        const tierBadgeClass = tier === 'hard'
            ? 'difficulty-badge difficulty-badge--hard'
            : tier === 'medium'
                ? 'difficulty-badge difficulty-badge--medium'
                : 'difficulty-badge difficulty-badge--easy';
        difficultyLine.innerHTML = `<span class="${tierBadgeClass}">${t('tutorialWaitCountLabel', { count: waitCount })}</span>`;
        visualEl.appendChild(difficultyLine);

        visualEl.appendChild(createTutorialTileRow({
            label: t('tutorialVisualCandidates'),
            tiles: candidates,
            disabled: step >= 1 ? eliminated : [],
            crossed: step >= 1 ? eliminated : [],
            selected: step >= 2 ? question.waits : []
        }));

        const message = document.createElement('div');
        message.className = 'tutorial-visual-text';
        if (step >= 2) {
            message.textContent = t('tutorialRealAnswerText', { waits: (question.waits || []).join(' / ') });
        } else if (step >= 1) {
            const lines = [];
            if (exhausted.length > 0) lines.push(t('tutorialRealHintUsedFour', { tiles: exhausted.join(' / ') }));
            if (structural.length > 0) lines.push(t('tutorialRealHintStructure', { tiles: structural.join(' / ') }));
            if (lines.length === 0) lines.push(t('tutorialRealHintFallback'));
            message.textContent = lines.join('\n');
        } else {
            message.textContent = '';
        }
        visualEl.appendChild(message);

        const controls = document.createElement('div');
        controls.className = 'tutorial-chip-row';

        const hintBtn = document.createElement('button');
        hintBtn.type = 'button';
        hintBtn.className = 'tutorial-step-btn';
        hintBtn.textContent = t('tutorialRealHintBtn');
        hintBtn.disabled = step >= 1 || !hasHint;
        hintBtn.addEventListener('click', () => {
            playSound('select');
            tutorialRealQuestionStep = 1;
            renderTutorialVisual(page);
        });
        controls.appendChild(hintBtn);

        const answerBtn = document.createElement('button');
        answerBtn.type = 'button';
        answerBtn.className = 'tutorial-step-btn';
        answerBtn.textContent = t('tutorialRealAnswerBtn');
        answerBtn.disabled = step >= 2;
        answerBtn.addEventListener('click', () => {
            playSound('select');
            tutorialRealQuestionStep = 2;
            tutorialBreakdownIndex = 0;
            renderTutorialVisual(page);
        });
        controls.appendChild(answerBtn);

        const newBtn = document.createElement('button');
        newBtn.type = 'button';
        newBtn.className = 'tutorial-step-btn tutorial-step-btn--ghost';
        newBtn.textContent = t('tutorialRealNewBtn');
        newBtn.addEventListener('click', () => {
            playSound('select');
            tutorialRealQuestionStep = 0;
            tutorialBreakdownIndex = 0;
            getTutorialRealQuestionData({ forceNew: true });
            renderTutorialVisual(page);
        });
        controls.appendChild(newBtn);

        if (step > 0) {
            const resetBtn = document.createElement('button');
            resetBtn.type = 'button';
            resetBtn.className = 'tutorial-step-btn tutorial-step-btn--ghost';
            resetBtn.textContent = t('tutorialRealResetBtn');
            resetBtn.addEventListener('click', () => {
                playSound('select');
                tutorialRealQuestionStep = 0;
                tutorialBreakdownIndex = 0;
                renderTutorialVisual(page);
            });
            controls.appendChild(resetBtn);
        }

        visualEl.appendChild(controls);

        if (step >= 2) {
            const breakdownWrap = document.createElement('div');
            breakdownWrap.className = 'tutorial-breakdown-wrap';

            const breakdownTitle = document.createElement('div');
            breakdownTitle.className = 'tutorial-breakdown-title';
            breakdownTitle.textContent = t('tutorialRealBreakdownTitle');
            breakdownWrap.appendChild(breakdownTitle);

            const waits = question.waits || [];
            tutorialBreakdownIndex = Math.min(Math.max(0, tutorialBreakdownIndex), Math.max(0, waits.length - 1));

            if (waits.length > 1) {
                const controlsRow = document.createElement('div');
                controlsRow.className = 'breakdown-controls tutorial-breakdown-controls';

                const prevBtn = document.createElement('button');
                prevBtn.type = 'button';
                prevBtn.className = 'breakdown-switch-btn';
                prevBtn.textContent = t('breakdownPrevWait');
                prevBtn.disabled = tutorialBreakdownIndex <= 0;
                prevBtn.addEventListener('click', () => {
                    playSound('select');
                    tutorialBreakdownIndex = Math.max(0, tutorialBreakdownIndex - 1);
                    renderTutorialVisual(page);
                });

                const counter = document.createElement('div');
                counter.className = 'breakdown-counter';
                counter.textContent = t('breakdownCounter', { current: tutorialBreakdownIndex + 1, total: waits.length });

                const nextBtn = document.createElement('button');
                nextBtn.type = 'button';
                nextBtn.className = 'breakdown-switch-btn';
                nextBtn.textContent = t('breakdownNextWait');
                nextBtn.disabled = tutorialBreakdownIndex >= waits.length - 1;
                nextBtn.addEventListener('click', () => {
                    playSound('select');
                    tutorialBreakdownIndex = Math.min(waits.length - 1, tutorialBreakdownIndex + 1);
                    renderTutorialVisual(page);
                });

                controlsRow.append(prevBtn, counter, nextBtn);
                breakdownWrap.appendChild(controlsRow);
            }

            const waitTile = waits[tutorialBreakdownIndex];
            const item = document.createElement('div');
            item.className = 'tutorial-breakdown-item';

            const waitHeader = document.createElement('div');
            waitHeader.className = 'tutorial-breakdown-wait';
            waitHeader.textContent = `${t('winningTile')} `;
            waitHeader.appendChild(createTutorialMiniTile(waitTile, { selected: true }));
            item.appendChild(waitHeader);

            const breakdown = getWinningHandBreakdown([...(question.hand || []), waitTile]);
            if (breakdown) {
                const displayData = buildBreakdownDisplayData(waitTile, breakdown, question.hand || []);
                const stage = createBreakdownStageElement(displayData, {
                    compact: true,
                    tileType: question.tileType || 'pin'
                });
                item.appendChild(stage);
                breakdownWrap.appendChild(item);
                visualEl.appendChild(breakdownWrap);
                playBreakdownTransition(stage, displayData, {
                    autoReplay: true,
                    replayHandler: () => {
                        const tutorialScreen = getElementByIdCached('tutorial-screen');
                        const visual = getElementByIdCached('tutorial-page-visual');
                        if (!tutorialScreen || tutorialScreen.classList.contains('hidden') || !visual || !visual.isConnected) return;
                        renderTutorialVisual(page);
                    }
                });
                return;
            }

            breakdownWrap.appendChild(item);
            visualEl.appendChild(breakdownWrap);
        }
    }
}

function renderTutorialPage() {
    const screen = getElementByIdCached('tutorial-screen');
    if (!screen || screen.classList.contains('hidden')) return;

    const pages = getTutorialPages();
    const total = pages.length;
    const idx = Math.min(Math.max(0, tutorialPageIndex), total - 1);
    tutorialPageIndex = idx;

    const indicator = getElementByIdCached('tutorial-page-indicator');
    const titleEl = getElementByIdCached('tutorial-page-title');
    const bodyEl = getElementByIdCached('tutorial-page-body');
    const prevBtn = getElementByIdCached('tutorial-prev-btn');
    const nextBtn = getElementByIdCached('tutorial-next-btn');
    const closeBtn = getElementByIdCached('tutorial-close-btn');
    const prevText = getElementByIdCached('tutorial-prev-text');
    const nextText = getElementByIdCached('tutorial-next-text');
    const closeText = getElementByIdCached('tutorial-close-text');

    if (indicator) indicator.textContent = `${idx + 1}/${total}`;
    if (titleEl) titleEl.textContent = pages[idx].title || '';
    if (bodyEl) bodyEl.textContent = pages[idx].body || '';

    if (!pages[idx].visualType || pages[idx].visualType !== 'realQuestion') {
        tutorialRealQuestionStep = 0;
        tutorialRealQuestionData = null;
    }
    renderTutorialVisual(pages[idx]);

    if (prevText) prevText.textContent = t('tutorialPrev');
    if (nextText) nextText.textContent = (idx === total - 1) ? t('tutorialFinish') : t('tutorialNext');
    if (closeText) closeText.textContent = t('tutorialClose');

    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = false;
    if (closeBtn) closeBtn.disabled = false;
}

let currentLang = 'ja';
const primaryScreenIds = ['preload-screen', 'language-screen', 'mode-screen', 'difficulty-screen', 'game-screen'];
const overlayScreenIds = ['victory-screen', 'gameover-screen'];
const menuNavigationState = {
    lockUntil: 0
};

function showExclusiveScreen(activeId, { fadeIn = false } = {}) {
    [...primaryScreenIds, ...overlayScreenIds].forEach((screenId) => {
        const screen = getElementByIdCached(screenId);
        if (!screen) return;
        screen.classList.add('hidden');
        screen.classList.remove('fade-in');
    });

    if (!activeId) return null;

    const activeScreen = getElementByIdCached(activeId);
    if (!activeScreen) return null;

    activeScreen.classList.remove('hidden');
    if (fadeIn) {
        void activeScreen.offsetWidth;
        activeScreen.classList.add('fade-in');
    }
    return activeScreen;
}

function isMenuNavigationLocked() {
    return Date.now() < menuNavigationState.lockUntil;
}

function lockMenuNavigation(durationMs = 220) {
    menuNavigationState.lockUntil = Date.now() + Math.max(0, durationMs);
}

function formatTemplateString(str, vars) {
    if (typeof str !== 'string') return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => {
        const v = vars && Object.prototype.hasOwnProperty.call(vars, k) ? vars[k] : undefined;
        return v === undefined || v === null ? `{${k}}` : String(v);
    });
}

function getDefaultTranslationVars() {
    return {
        casualStartSeconds: gameConfig.modeStartSeconds.casual,
        storyStartSeconds: gameConfig.modeStartSeconds.story,
        survivalStartSeconds: gameConfig.modeStartSeconds.survival,
        lives: gameConfig.lives,
        timeExtensionSeconds: gameConfig.timeExtensionSeconds,
        casualBossStageNumber: gameConfig.casualBossStageNumber,
        storyBossStageNumber: gameConfig.storyBossStageNumber,
        casualStagesBeforeBoss: getStagesBeforeBossForMode('casual'),
        storyDifficultyStep: gameConfig.storyDifficultyStep
    };
}

const t = (key, vars) => {
    const table = translations[currentLang] || {};
    const value = table[key] || key;
    if (typeof value !== 'string') return value;
    return formatTemplateString(value, { ...getDefaultTranslationVars(), ...(vars || {}) });
};

let stageIntroTimeoutId = null;

function getDifficultyBadgeHtml(diffKey) {
    const key = diffKey || 'easy';
    const diffName = t(key);
    const diffBadgeClass = key === 'easy'
        ? 'difficulty-badge difficulty-badge--easy'
        : key === 'medium'
            ? 'difficulty-badge difficulty-badge--medium'
            : 'difficulty-badge difficulty-badge--hard';
    return `<span class="${diffBadgeClass}">${diffName}</span>`;
}

function getModeDisplayText(modeKey) {
    if (!modeKey) return '';
    const map = {
        casual: 'casualMode',
        story: 'storyMode',
        survival: 'survivalMode'
    };
    const i18nKey = map[modeKey] || modeKey;
    return t(i18nKey);
}

function hideStageIntro({ immediate = false } = {}) {
    const overlay = getElementByIdCached('stage-intro');
    if (!overlay) return;

    if (stageIntroTimeoutId) {
        clearTimeout(stageIntroTimeoutId);
        stageIntroTimeoutId = null;
    }

    if (immediate) {
        overlay.classList.add('hidden');
        overlay.classList.remove('is-leaving');
        overlay.setAttribute('aria-hidden', 'true');
        return;
    }

    overlay.classList.add('is-leaving');
    stageIntroTimeoutId = setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.classList.remove('is-leaving');
        overlay.setAttribute('aria-hidden', 'true');
        stageIntroTimeoutId = null;
    }, 460);
}

function showStageIntro({ titleText, subtitleHtml, durationMs }) {
    const overlay = getElementByIdCached('stage-intro');
    const titleEl = getElementByIdCached('stage-intro-title');
    const subtitleEl = getElementByIdCached('stage-intro-subtitle');
    if (!overlay || !titleEl || !subtitleEl) return Promise.resolve();

    if (stageIntroTimeoutId) {
        clearTimeout(stageIntroTimeoutId);
        stageIntroTimeoutId = null;
    }

    // 安全のため：イントロ表示中はタイマーを停止する
    stopTimer();

    titleEl.textContent = titleText || '';
    subtitleEl.innerHTML = subtitleHtml || '';

    overlay.classList.remove('hidden');
    overlay.classList.remove('is-leaving');
    overlay.setAttribute('aria-hidden', 'false');

    const ms = Math.min(5000, Math.max(3000, durationMs ?? 3800));

    return new Promise((resolve) => {
        stageIntroTimeoutId = setTimeout(() => {
            hideStageIntro();
            resolve();
        }, ms);
    });
}

function isDebugScaleEnabled() {
    try {
        return new URLSearchParams(window.location.search).get('debug') === '1';
    } catch {
        return false;
    }
}

function ensureScaleDebugOverlay() {
    if (!isDebugScaleEnabled()) return null;
    let overlay = getElementByIdCached('scale-debug');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'scale-debug';
    overlay.className = 'scale-debug';
    document.body.appendChild(overlay);
    return overlay;
}

function applyUiScale() {
    const stage = getElementByIdCached('scale-stage');
    if (!stage) return;

    const baseWidth = 1280;
    const baseHeight = 720;

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;

    // モバイルブラウザの表示バーやセーフエリアで切れないよう、少し余白を確保
    const safetyPadding = 8;
    const availableWidth = Math.max(0, viewportWidth - safetyPadding * 2);
    const availableHeight = Math.max(0, viewportHeight - safetyPadding * 2);

    // 常に「16:9 の設計画面（1280x720）を歪めず、そのまま画面内に収める」
    // ＝縦横どちらか小さい方に合わせてスケール（裁切りはしない）
    const scale = Math.min(availableWidth / baseWidth, availableHeight / baseHeight);
    // 極小画面向けに最小値は維持
    const clamped = Math.max(0.05, scale);

    const scaleStr = clamped.toFixed(4);
    // 連続 resize（モバイルのアドレスバー伸縮など）で同じ値を何度も適用しない
    if (applyUiScale._lastScaleStr !== scaleStr) {
        applyUiScale._lastScaleStr = scaleStr;
        document.documentElement.style.setProperty('--ui-scale', scaleStr);
    }

    // 表示倍率/サイズ問題の調査用デバッグ表示（任意）
    const overlay = ensureScaleDebugOverlay();
    if (overlay) {
        stage.classList.add('debug-outline');
        const rect = stage.getBoundingClientRect();
        overlay.textContent = [
            `visualViewport: ${Math.round(viewportWidth)}x${Math.round(viewportHeight)} (css px)`,
            `available: ${Math.round(availableWidth)}x${Math.round(availableHeight)} (padding ${safetyPadding}*2)`,
            `scale: ${clamped.toFixed(4)}  DPR: ${window.devicePixelRatio || 1}`,
            `stage rect: ${Math.round(rect.width)}x${Math.round(rect.height)} (px)`,
            `stage base: ${baseWidth}x${baseHeight} (design)`,
        ].join('\n');
    } else {
        stage.classList.remove('debug-outline');
    }
}

// resize/visualViewport の連発を rAF で合流する（iOS/Android での発熱対策）
let uiScaleRafId = 0;
function scheduleApplyUiScale() {
    if (uiScaleRafId) return;
    uiScaleRafId = requestAnimationFrame(() => {
        uiScaleRafId = 0;
        applyUiScale();
    });
}

function hideResultActions() {
    const { actions, title, body, continueBtn, backBtn, okBtn } = getResultActionElements();
    if (!actions) return;

    actions.classList.add('hidden');

    if (title) title.textContent = '';
    if (body) body.textContent = '';

    if (continueBtn) continueBtn.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');
    if (okBtn) okBtn.classList.add('hidden');
}

let pendingOkAction = null;

function showResultOkAction({ titleText, titleClassName, bodyText = '', okText = null, onOk }) {
    const {
        actions,
        title,
        body,
        continueBtn,
        backBtn,
        okBtn,
        okTextSpan
    } = getResultActionElements();
    if (!actions) return;

    pendingOkAction = typeof onOk === 'function' ? onOk : null;

    if (title) {
        title.textContent = titleText || '';
        title.className = titleClassName || 'text-3xl font-black mb-3 text-center';
    }
    if (body) body.textContent = bodyText || '';

    if (continueBtn) continueBtn.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');

    if (okTextSpan) okTextSpan.textContent = okText || t('ok');
    if (okBtn) {
        okBtn.classList.remove('hidden');
        okBtn.disabled = false;
        okBtn.onclick = () => {
            playSound('select');
            if (!pendingOkAction) return;
            okBtn.disabled = true;
            const action = pendingOkAction;
            pendingOkAction = null;
            action();
        };
    }

    actions.classList.remove('hidden');
}

function showResultLifeAction() {
    const {
        actions,
        title,
        body,
        continueBtn,
        backBtn,
        okBtn,
        continueText,
        backText
    } = getResultActionElements();
    if (!actions) return;

    if (title) {
        title.textContent = t('loseLife');
        title.className = 'text-3xl font-black mb-3 text-yellow-300 text-center';
    }
    if (body) {
        const lives = Math.max(0, gameState.lives);
        const maxLives = Math.max(0, gameState.maxLives || gameConfig.lives);

        let heartsHtml = '<div class="result-lives" aria-label="lives">';
        for (let i = 0; i < maxLives; i++) {
            if (i < lives) {
                heartsHtml += '<span class="life-heart">❤️</span>';
                continue;
            }

            // ❤️/🖤 を切り替えて、失った分を分かりやすくする
            if (i === lives) {
                heartsHtml += '<span id="result-pending-loss-heart" class="life-heart heart-toggle pending-loss">'
                    + '<span class="heart-on">❤️</span>'
                    + '<span class="heart-off">🖤</span>'
                    + '</span>';
                continue;
            }

            heartsHtml += '<span class="life-heart">🖤</span>';
        }
        heartsHtml += '</div>';

        body.innerHTML = heartsHtml;
    }

    if (continueText) continueText.textContent = t('continue');
    if (backText) backText.textContent = t('giveUp');

    if (okBtn) okBtn.classList.add('hidden');

    if (continueBtn) {
        continueBtn.classList.remove('hidden');
        continueBtn.disabled = false;
        continueBtn.onclick = () => {
            playSound('continue');
            // 続行前に、失ったライフが消える演出を入れる
            continueBtn.disabled = true;
            const pending = getElementByIdCached('result-pending-loss-heart');
            if (!pending) {
                continueGame();
                return;
            }
            pending.classList.remove('pending-loss');
            pending.classList.add('removing');
            setTimeout(() => {
                pending.className = 'life-heart';
                pending.textContent = '🖤';
                continueGame();
            }, 360);
        };
    }
    if (backBtn) {
        backBtn.classList.remove('hidden');
        backBtn.disabled = false;
        backBtn.onclick = () => {
            playSound('select');
            giveUpGame();
        };
    }

    actions.classList.remove('hidden');
}

function showResultGameOverAction(timeUp) {
    showResultOkAction({
        titleText: t('gameOver'),
        titleClassName: 'text-3xl font-black mb-3 text-red-300 text-center',
        bodyText: '',
        onOk: () => {
            playSound('gameover');
            showGameOverOverlay(timeUp);
        }
    });
}

const tileImages = {
    pin: {
        1: 'Pin1.png',
        2: 'Pin2.png',
        3: 'Pin3.png',
        4: 'Pin4.png',
        5: 'Pin5.png',
        6: 'Pin6.png',
        7: 'Pin7.png',
        8: 'Pin8.png',
        9: 'Pin9.png'
    },
    man: {
        1: 'Man1.png',
        2: 'Man2.png',
        3: 'Man3.png',
        4: 'Man4.png',
        5: 'Man5.png',
        6: 'Man6.png',
        7: 'Man7.png',
        8: 'Man8.png',
        9: 'Man9.png'
    },
    sou: {
        1: 'Sou1.png',
        2: 'Sou2.png',
        3: 'Sou3.png',
        4: 'Sou4.png',
        5: 'Sou5.png',    
        6: 'Sou6.png',
        7: 'Sou7.png',
        8: 'Sou8.png',
        9: 'Sou9.png'
    }
};
const tileNames = {
    ja: {
        pin: { 1: '一筒（イーピン）', 2: '二筒（リャンピン）', 3: '三筒（サンピン）', 4: '四筒（スーピン）', 5: '五筒（ウーピン）', 6: '六筒（ローピン）', 7: '七筒（チーピン）', 8: '八筒（パーピン）', 9: '九筒（キューピン）' },
        man: { 1: '一萬（イーマン）', 2: '二萬（リャンマン）', 3: '三萬（サンマン）', 4: '四萬（スーマン）', 5: '五萬（ウーマン）', 6: '六萬（ローマン）', 7: '七萬（チーマン）', 8: '八萬（パーマン）', 9: '九萬（キューマン）' },
        sou: { 1: '一索（イーソー）', 2: '二索（リャンソー）', 3: '三索（サンソー）', 4: '四索（スーソー）', 5: '五索（ウーソー）', 6: '六索（ローソー）', 7: '七索（チーソー）', 8: '八索（パーソー）', 9: '九索（キューソー）' }
    },
    en: {
        pin: { 1: '1-Pin', 2: '2-Pin', 3: '3-Pin', 4: '4-Pin', 5: '5-Pin', 6: '6-Pin', 7: '7-Pin', 8: '8-Pin', 9: '9-Pin' },
        man: { 1: '1-Man', 2: '2-Man', 3: '3-Man', 4: '4-Man', 5: '5-Man', 6: '6-Man', 7: '7-Man', 8: '8-Man', 9: '9-Man' },
        sou: { 1: '1-Sou', 2: '2-Sou', 3: '3-Sou', 4: '4-Sou', 5: '5-Sou', 6: '6-Sou', 7: '7-Sou', 8: '8-Sou', 9: '9-Sou' }
    },
    zh: {
        pin: { 1: '一筒', 2: '二筒', 3: '三筒', 4: '四筒', 5: '五筒', 6: '六筒', 7: '七筒', 8: '八筒', 9: '九筒' },
        man: { 1: '一萬', 2: '二萬', 3: '三萬', 4: '四萬', 5: '五萬', 6: '六萬', 7: '七萬', 8: '八萬', 9: '九萬' },
        sou: { 1: '一索', 2: '二索', 3: '三索', 4: '四索', 5: '五索', 6: '六索', 7: '七索', 8: '八索', 9: '九索' }
    }
};

// アセット（assets/）配下を事前にプリロードして、プレイ中の引っかかりを防ぐ
//（ブラウザ上では実行時にディレクトリ一覧を取得できないため、静的リストにする）
const ASSET_FILES = [
    'Back.png', 'Blank.png', 'Chun.png',
    'Front.png', 'Haku.png', 'Hatsu.png',
    'Man1.png', 'Man2.png', 'Man3.png', 'Man4.png', 'Man5-Dora.png', 'Man5.png', 'Man6.png', 'Man7.png', 'Man8.png', 'Man9.png',
    'Nan.png', 'Pei.png',
    'Pin1.png', 'Pin2.png', 'Pin3.png', 'Pin4.png', 'Pin5-Dora.png', 'Pin5.png', 'Pin6.png', 'Pin7.png', 'Pin8.png', 'Pin9.png',
    'Shaa.png',
    'Sou1.png', 'Sou2.png', 'Sou3.png', 'Sou4.png', 'Sou5-Dora.png', 'Sou5.png', 'Sou6.png', 'Sou7.png', 'Sou8.png', 'Sou9.png',
    'Ton.png'
];

const AUDIO_ASSET_ENTRIES = [
    ['select', 'assets/select.mp3'],
    ['tap', 'assets/tap.mp3'],
    ['correct', 'assets/correct.mp3'],
    ['incorrect', 'assets/incorrect.mp3'],
    ['continue', 'assets/continue.mp3'],
    ['gameover', 'assets/gameover.mp3'],
    ['victory', 'assets/victory.mp3'],
    ['timeup', 'assets/timeup.mp3'],
    ['timer', 'assets/timer.mp3']
];

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
    });
}

const audioAssetArrayBuffers = new Map();
const audioAssetFetchPromises = new Map();

// 同じ音声を preload と初回再生で二重取得しないよう、ArrayBuffer を共有する。
async function fetchAudioAssetArrayBuffer(name, src) {
    if (audioAssetArrayBuffers.has(name)) return audioAssetArrayBuffers.get(name);
    if (audioAssetFetchPromises.has(name)) return audioAssetFetchPromises.get(name);

    const promise = (async () => {
        try {
            const res = await fetch(src, { cache: 'force-cache' });
            if (!res || !res.ok) return null;
            const arrayBuf = await res.arrayBuffer();
            audioAssetArrayBuffers.set(name, arrayBuf);
            return arrayBuf;
        } catch {
            return null;
        } finally {
            audioAssetFetchPromises.delete(name);
        }
    })();

    audioAssetFetchPromises.set(name, promise);
    return promise;
}

async function ensureWebAudioBuffer(name, src) {
    if (webAudioBuffers.has(name)) return true;

    const arrayBuf = await fetchAudioAssetArrayBuffer(name, src);
    if (!arrayBuf) return false;

    // AudioContext が使える端末だけ先に decode しておき、初回再生の待ちを減らす。
    const ctx = webAudioCtx;
    if (!ctx) return false;
    if (webAudioBuffers.has(name)) return true;

    try {
        const buf = await new Promise((resolve, reject) => {
            try {
                ctx.decodeAudioData(arrayBuf.slice(0), resolve, reject);
            } catch (e) {
                reject(e);
            }
        });
        webAudioBuffers.set(name, buf);
        return true;
    } catch {
        return false;
    }
}

async function preloadAssets({ onProgress } = {}) {
    const imageEntries = ASSET_FILES.map((f) => ({ type: 'image', url: `assets/${f}` }));
    const audioEntries = AUDIO_ASSET_ENTRIES.map(([name, src]) => ({ type: 'audio', name, url: src }));
    const tasks = [...imageEntries, ...audioEntries];
    const total = tasks.length;
    let loaded = 0;

    const report = () => {
        if (typeof onProgress === 'function') onProgress({ loaded, total });
    };
    report();

    // 画面操作の反応を落とさない程度の並列数に抑える
    const concurrency = shouldEnableLowPowerMode() ? 3 : 6;
    const queue = tasks.slice();

    const worker = async () => {
        while (queue.length) {
            const task = queue.shift();
            try {
                if (!task) continue;

                if (task.type === 'image') {
                    await preloadImage(task.url);
                } else {
                    // preload 中は通信とブラウザキャッシュだけ温め、AudioContext は作らない。
                    await fetchAudioAssetArrayBuffer(task.name, task.url);
                }
            } catch {
                // 個別のアセット読み込み失敗は無視して、ゲーム自体は続行できるようにする
            } finally {
                loaded++;
                report();
            }
        }
    };

    const workers = Array.from({ length: concurrency }, () => worker());
    await Promise.all(workers);
}

const getTileInfo = (type, number) => {
    const safeType = tileImages[type] ? type : 'pin';
    const src = tileImages[safeType]?.[number] || tileImages.pin[number];
    const name = tileNames[currentLang]?.[safeType]?.[number] || `${number}-${t(safeType)}`;
    return {
        imgSrc: `assets/${src}`,
        name
    };
};

function pickRandomTileType() {
    // 英語UIでは牌面が漢字の「萬子」を避ける
    const types = currentLang === 'en' ? ['pin', 'sou'] : ['pin', 'man', 'sou'];
    return types[Math.floor(Math.random() * types.length)];
}

// ========== サウンド ==========
const soundConfig = {
    // 重ね再生を許可する場合、プールが埋まっていれば一時的に追加インスタンスを生成して同時に鳴らす
    // 方針：効果音はすべて重ね再生を許可し、必要な転場タイミングで明示的に止める
    select: { src: 'assets/select.mp3', pool: 4, allowOverlap: true, maxExtra: 6, bus: 'ui', volume: 0.95 },
    tap: { src: 'assets/tap.mp3', pool: 6, allowOverlap: true, maxExtra: 8, bus: 'ui', volume: 0.92 },
    correct: { src: 'assets/correct.mp3', pool: 2, allowOverlap: true, maxExtra: 2, bus: 'sfx', volume: 1, duckTimerFactor: 0.28, duckTimerMs: 900 },
    incorrect: { src: 'assets/incorrect.mp3', pool: 2, allowOverlap: true, maxExtra: 2, bus: 'sfx', volume: 1, duckTimerFactor: 0.34, duckTimerMs: 850 },
    continue: { src: 'assets/continue.mp3', pool: 2, allowOverlap: true, maxExtra: 2, bus: 'ui', volume: 0.98, duckTimerFactor: 0.45, duckTimerMs: 500 },
    gameover: { src: 'assets/gameover.mp3', pool: 2, allowOverlap: true, maxExtra: 0, bus: 'sfx', volume: 1, duckTimerFactor: 0.2, duckTimerMs: 1200 },
    victory: { src: 'assets/victory.mp3', pool: 2, allowOverlap: true, maxExtra: 0, bus: 'sfx', volume: 1, duckTimerFactor: 0.2, duckTimerMs: 1200 },
    timeup: { src: 'assets/timeup.mp3', pool: 2, allowOverlap: true, maxExtra: 1, bus: 'sfx', volume: 1, duckTimerFactor: 0.12, duckTimerMs: 1400 }
};

const soundPools = new Map();
const extraSoundInstances = new Map();

const audioBusVolumes = {
    master: 1,
    ui: 0.96,
    sfx: 1,
    timer: 0.78
};
const AUDIO_MUTE_STORAGE_KEY = 'tenpai-de-go-audio-muted';
let audioMuted = false;

let audioUnlocked = false;
let soundsInitialized = false;
let timerInitialized = false;

// WebAudio（AudioContext）を使える環境では、HTMLAudio の「同時再生が詰まる/止まる」問題を避ける
// ※ iOS などはユーザー操作起点で resume() が必要
const WebAudioCtx = window.AudioContext || window.webkitAudioContext;
let webAudioCtx = null;
let webAudioMasterGain = null;
let webAudioUiGain = null;
let webAudioSfxGain = null;
let webAudioTimerGain = null;
const webAudioBuffers = new Map(); // name -> AudioBuffer
let webAudioLoadPromise = null;
let audioUnlockPromise = null;
let timerDuckTimeoutId = 0;
let timerDuckFactor = 1;

// allowOverlap=false の音だけ「多重再生を抑制」するためのトラッキング
const webAudioNonOverlapActive = new Map(); // name -> { source: AudioBufferSourceNode }

// 明示的に stop できるよう、WebAudio の再生中ソースをトラッキング
const webAudioActiveSources = new Map(); // name -> Set<AudioBufferSourceNode>

// タイマー（ループ）用
let timerWebAudioSource = null;

function getAudioBusName(name) {
    if (name === 'timer') return 'timer';
    return soundConfig[name]?.bus || 'sfx';
}

// UI / 効果音 / タイマーをバス分離しておくと、後段で個別に音量制御しやすい。
function ensureWebAudioBusGraph(ctx) {
    if (webAudioMasterGain && webAudioUiGain && webAudioSfxGain && webAudioTimerGain) return;

    webAudioMasterGain = ctx.createGain();
    webAudioUiGain = ctx.createGain();
    webAudioSfxGain = ctx.createGain();
    webAudioTimerGain = ctx.createGain();

    webAudioMasterGain.gain.value = audioBusVolumes.master;
    webAudioUiGain.gain.value = audioBusVolumes.ui;
    webAudioSfxGain.gain.value = audioBusVolumes.sfx;
    webAudioTimerGain.gain.value = audioBusVolumes.timer * timerDuckFactor;

    webAudioUiGain.connect(webAudioMasterGain);
    webAudioSfxGain.connect(webAudioMasterGain);
    webAudioTimerGain.connect(webAudioMasterGain);
    webAudioMasterGain.connect(ctx.destination);
}

function getWebAudioBusGain(name) {
    switch (getAudioBusName(name)) {
    case 'ui':
        return webAudioUiGain;
    case 'timer':
        return webAudioTimerGain;
    case 'sfx':
    default:
        return webAudioSfxGain;
    }
}

function getHtmlAudioVolume(name) {
    const cfg = soundConfig[name] || {};
    const baseVolume = typeof cfg.volume === 'number' ? cfg.volume : 1;
    const busVolume = audioBusVolumes[getAudioBusName(name)] ?? 1;
    return Math.max(0, Math.min(1, baseVolume * audioBusVolumes.master * busVolume));
}

function applyTimerDuckFactor(nextFactor) {
    timerDuckFactor = Math.max(0, Math.min(1, nextFactor));

    const ctx = webAudioCtx;
    if (ctx && webAudioTimerGain) {
        // タイマー音量の変化は短いランプでつなぎ、クリックノイズを避ける。
        const now = ctx.currentTime;
        const target = audioBusVolumes.timer * timerDuckFactor;
        webAudioTimerGain.gain.cancelScheduledValues(now);
        webAudioTimerGain.gain.setValueAtTime(webAudioTimerGain.gain.value, now);
        webAudioTimerGain.gain.linearRampToValueAtTime(target, now + 0.05);
    }

    if (timerAudio) {
        timerAudio.volume = Math.max(0, Math.min(1, audioBusVolumes.master * audioBusVolumes.timer * timerDuckFactor));
    }
}

function duckTimerAudio({ factor = 0.35, durationMs = 700 } = {}) {
    if (timerDuckTimeoutId) {
        clearTimeout(timerDuckTimeoutId);
        timerDuckTimeoutId = 0;
    }

    // 正誤音や終了音を優先して聞かせるため、一時的にタイマーだけを下げる。
    applyTimerDuckFactor(factor);
    timerDuckTimeoutId = window.setTimeout(() => {
        timerDuckTimeoutId = 0;
        applyTimerDuckFactor(1);
    }, Math.max(0, durationMs));
}

function maybeDuckTimerForSound(name) {
    const cfg = soundConfig[name];
    if (!cfg || typeof cfg.duckTimerFactor !== 'number') return;
    if (!timerWebAudioSource && (!timerAudio || timerAudio.paused)) return;

    duckTimerAudio({
        factor: cfg.duckTimerFactor,
        durationMs: cfg.duckTimerMs || 700
    });
}

function getWebAudioContext() {
    if (!WebAudioCtx) return null;
    if (webAudioCtx) return webAudioCtx;

    try {
        webAudioCtx = new WebAudioCtx();
        ensureWebAudioBusGraph(webAudioCtx);
        return webAudioCtx;
    } catch {
        webAudioCtx = null;
        webAudioMasterGain = null;
        webAudioUiGain = null;
        webAudioSfxGain = null;
        webAudioTimerGain = null;
        return null;
    }
}

function startLoadingWebAudioBuffers() {
    if (webAudioLoadPromise) return webAudioLoadPromise;
    const ctx = webAudioCtx;
    if (!ctx) {
        webAudioLoadPromise = Promise.resolve();
        return webAudioLoadPromise;
    }

    const entries = AUDIO_ASSET_ENTRIES;

    webAudioLoadPromise = (async () => {
        await Promise.all(entries.map(async ([name, src]) => {
            try {
                await ensureWebAudioBuffer(name, src);
            } catch {
                // 失敗しても HTMLAudio にフォールバックできる
            }
        }));
    })();

    return webAudioLoadPromise;
}

function primeWebAudioOnce() {
    const ctx = getWebAudioContext();
    if (!ctx) return Promise.resolve(false);
    // バッファ読み込みは非同期で開始しておく（再生はロード完了前なら HTMLAudio に落ちる）
    startLoadingWebAudioBuffers();
    if (ctx.state === 'running') return Promise.resolve(true);

    // iOS: ユーザー操作内で resume() する必要がある
    try {
        const p = ctx.resume();
        if (p && typeof p.then === 'function') {
            return p.then(() => true).catch(() => false);
        }
        return Promise.resolve(ctx.state === 'running');
    } catch {
        return Promise.resolve(false);
    }
}

function resumeWebAudioContextIfNeeded() {
    const ctx = webAudioCtx;
    if (!ctx) return null;
    if (ctx.state === 'running') return null;

    try {
        const p = ctx.resume();
        if (p && typeof p.catch === 'function') {
            p.catch(() => {});
            return p;
        }
    } catch {
        // 無視
    }

    return null;
}

function suspendWebAudioContextIfRunning() {
    const ctx = webAudioCtx;
    if (!ctx || ctx.state !== 'running') return null;

    try {
        const p = ctx.suspend();
        if (p && typeof p.catch === 'function') {
            p.catch(() => {});
            return p;
        }
    } catch {
        // 無視
    }

    return null;
}

function handleAudioInteraction() {
    // 最初の操作では unlock、復帰後の操作では resume に回す。
    if (!audioUnlocked) {
        return unlockAudioOnce();
    }

    return resumeWebAudioContextIfNeeded();
}

function playSoundViaWebAudio(name, { loop = false } = {}) {
    const ctx = getWebAudioContext();
    if (!ctx || ctx.state !== 'running' || !webAudioMasterGain) return false;
    const buffer = webAudioBuffers.get(name);
    if (!buffer) return false;

    const cfg = soundConfig[name] || {};
    const allowOverlap = cfg.allowOverlap !== false;

    if (!allowOverlap) {
        const active = webAudioNonOverlapActive.get(name);
        if (active && active.source) return true; // すでに鳴っているのでスキップ扱い
    }

    try {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = !!loop;

        const gain = ctx.createGain();
        gain.gain.value = typeof cfg.volume === 'number' ? cfg.volume : 1;

        source.connect(gain);
        gain.connect(getWebAudioBusGain(name) || webAudioSfxGain || webAudioMasterGain);

        if (!webAudioActiveSources.has(name)) webAudioActiveSources.set(name, new Set());
        webAudioActiveSources.get(name).add(source);

        if (!allowOverlap) {
            webAudioNonOverlapActive.set(name, { source });
        }

        source.onended = () => {
            const activeSet = webAudioActiveSources.get(name);
            if (activeSet) {
                activeSet.delete(source);
                if (activeSet.size === 0) webAudioActiveSources.delete(name);
            }
            const current = webAudioNonOverlapActive.get(name);
            if (current && current.source === source) webAudioNonOverlapActive.delete(name);
        };

        source.start(0);
        return true;
    } catch {
        return false;
    }
}

function unlockAudioOnce() {
    if (audioUnlocked) return Promise.resolve(true);
    if (audioUnlockPromise) return audioUnlockPromise;

    // ユーザー操作のタイミングで初期化して、初回ロードの負荷を下げる
    initSounds();
    initTimerSound();

    // WebAudio を優先的に解放（HTMLAudio が詰まる端末向け）
    audioUnlockPromise = Promise.resolve(primeWebAudioOnce())
        .then(async (webAudioPrimed) => {
            let anySucceeded = !!webAudioPrimed;

            // 実際の効果音プールを空再生すると、同じ操作内の select 音と競合して語尾だけになることがある。
            // ここでは非同期起動される可能性が高いタイマー専用音だけを個別に解放する。
            if (timerAudio) {
                try {
                    const originalVolume = timerAudio.volume;
                    timerAudio.volume = 0;
                    timerAudio.currentTime = 0;
                    const p = timerAudio.play();

                    // すぐ停止/リセットする。ここでは「ユーザー操作内で play() が成功する」ことだけが必要
                    timerAudio.pause();
                    timerAudio.currentTime = 0;
                    timerAudio.volume = originalVolume;

                    if (p && typeof p.then === 'function') {
                        await p.catch(() => {});
                        anySucceeded = true;
                    } else {
                        anySucceeded = true;
                    }
                } catch {
                    // 無視
                }
            }

            if (anySucceeded) audioUnlocked = true;
            return audioUnlocked;
        })
        .finally(() => {
            audioUnlockPromise = null;
        });

    return audioUnlockPromise;
}

function initSounds() {
    if (soundsInitialized) return;
    for (const [name, cfg] of Object.entries(soundConfig)) {
        const poolSize = Math.max(1, cfg.pool || 1);
        const pool = [];
        for (let i = 0; i < poolSize; i++) {
            const audio = new Audio(cfg.src);
            audio.preload = 'auto';
            pool.push(audio);
        }
        soundPools.set(name, pool);
        extraSoundInstances.set(name, []);
    }
    soundsInitialized = true;
}

function ensureSoundPool(name) {
    if (soundPools.has(name)) return;
    const cfg = soundConfig[name];
    if (!cfg) return;

    const poolSize = Math.max(1, cfg.pool || 1);
    const pool = [];
    for (let i = 0; i < poolSize; i++) {
        const audio = new Audio(cfg.src);
        audio.preload = 'auto';
        pool.push(audio);
    }
    soundPools.set(name, pool);
    extraSoundInstances.set(name, []);
}

function playSound(name, { allowDeferred = true } = {}) {
    const activation = handleAudioInteraction();

    const ctx = getWebAudioContext();
    const shouldDeferUntilUnlocked =
        allowDeferred &&
        webAudioBuffers.has(name) &&
        ctx &&
        ctx.state !== 'running' &&
        activation &&
        typeof activation.then === 'function';

    if (shouldDeferUntilUnlocked) {
        activation.finally(() => {
            playSound(name, { allowDeferred: false });
        });
        return;
    }

    maybeDuckTimerForSound(name);

    // WebAudio のバッファが使える場合はそちらを優先（多重再生・詰まり対策）
    if (playSoundViaWebAudio(name)) return;

    ensureSoundPool(name);

    const pool = soundPools.get(name);
    if (!pool || pool.length === 0) return;

    const cfg = soundConfig[name] || {};
    const allowOverlap = cfg.allowOverlap !== false;

    if (!allowOverlap) {
        // すでに再生中のものがあればスキップ
        if (pool.some(a => !a.paused && !a.ended)) return;
    }

    let audio = pool.find(a => a.paused || a.ended);

    if (!audio) {
        if (allowOverlap) {
            const extras = extraSoundInstances.get(name) || [];
            const maxExtra = Math.max(0, cfg.maxExtra || 0);
            if (extras.length < maxExtra) {
                try {
                    const extra = new Audio(cfg.src);
                    extra.preload = 'auto';
                    extra.addEventListener('ended', () => {
                        const arr = extraSoundInstances.get(name);
                        if (!arr) return;
                        const idx = arr.indexOf(extra);
                        if (idx >= 0) arr.splice(idx, 1);
                    }, { once: true });
                    extras.push(extra);
                    extraSoundInstances.set(name, extras);
                    audio = extra;
                } catch {
                    audio = null;
                }
            } else {
                // 上限に達した場合は先頭のプールを使い回す（フォールバック）
                audio = pool[0];
            }
        } else {
            audio = pool[0];
        }
    }

    if (!audio) return;

    try {
        // 再生中のインスタンスを強制的にリスタート（端末によってはこれをしないと詰まることがある）
        if (!audio.paused) audio.pause();
        audio.volume = getHtmlAudioVolume(name);
        audio.currentTime = 0;
        const p = audio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
        // 無視
    }
}

function stopSound(name) {
    // WebAudio
    const activeSet = webAudioActiveSources.get(name);
    if (activeSet && activeSet.size) {
        for (const src of Array.from(activeSet)) {
            try { src.stop(); } catch {}
        }
        webAudioActiveSources.delete(name);
    }

    const nonOverlap = webAudioNonOverlapActive.get(name);
    if (nonOverlap && nonOverlap.source) {
        try { nonOverlap.source.stop(); } catch {}
        webAudioNonOverlapActive.delete(name);
    }

    // HTMLAudio
    ensureSoundPool(name);
    const pool = soundPools.get(name) || [];
    for (const audio of pool) {
        try {
            audio.pause();
            audio.currentTime = 0;
        } catch {
            // 無視
        }
    }

    const extras = extraSoundInstances.get(name) || [];
    for (const audio of extras) {
        try {
            audio.pause();
            audio.currentTime = 0;
        } catch {
            // 無視
        }
    }

    // extra は再利用していないのでクリアして GC 可能にする
    if (extras.length) extraSoundInstances.set(name, []);
}

function syncAudioVolumes() {
    const nextMaster = audioMuted ? 0 : 1;
    audioBusVolumes.master = nextMaster;

    const ctx = webAudioCtx;
    if (ctx && webAudioMasterGain) {
        const now = ctx.currentTime;
        webAudioMasterGain.gain.cancelScheduledValues(now);
        webAudioMasterGain.gain.setValueAtTime(webAudioMasterGain.gain.value, now);
        webAudioMasterGain.gain.linearRampToValueAtTime(nextMaster, now + 0.05);
    }

    for (const [name, pool] of soundPools.entries()) {
        for (const audio of pool) {
            audio.volume = getHtmlAudioVolume(name);
        }
        const extras = extraSoundInstances.get(name) || [];
        for (const audio of extras) {
            audio.volume = getHtmlAudioVolume(name);
        }
    }

    if (timerAudio) {
        timerAudio.volume = Math.max(0, Math.min(1, audioBusVolumes.master * audioBusVolumes.timer * timerDuckFactor));
    }
}

function updateSoundToggleButton() {
    const button = getElementByIdCached('sound-toggle-btn');
    if (!button) return;

    button.textContent = audioMuted ? '🔇' : '🔊';
    button.classList.toggle('is-muted', audioMuted);
    button.setAttribute('aria-pressed', String(audioMuted));
    const label = t(audioMuted ? 'soundOff' : 'soundOn');
    button.setAttribute('aria-label', label);
    button.title = label;
}

function persistAudioPreference() {
    try {
        window.localStorage?.setItem(AUDIO_MUTE_STORAGE_KEY, audioMuted ? '1' : '0');
    } catch {
        // ignore
    }
}

function loadAudioPreference() {
    try {
        audioMuted = window.localStorage?.getItem(AUDIO_MUTE_STORAGE_KEY) === '1';
    } catch {
        audioMuted = false;
    }
    syncAudioVolumes();
}

function toggleAudioMute() {
    audioMuted = !audioMuted;
    syncAudioVolumes();
    persistAudioPreference();
    updateSoundToggleButton();

    if (!audioMuted) {
        playSound('select', { allowDeferred: false });
    }
}

// カウントダウン音（assets/timer.mp3）は「残り 5 秒以内でループ再生」する専用音
let timerAudio = null;

function initTimerSound() {
    if (timerInitialized) return;
    timerAudio = new Audio('assets/timer.mp3');
    timerAudio.preload = 'auto';
    timerAudio.loop = true;
    timerAudio.volume = audioBusVolumes.master * audioBusVolumes.timer * timerDuckFactor;
    timerInitialized = true;
}

function startTimerSound() {
    if (!timerAudio) initTimerSound();
    // WebAudio で鳴らせるなら優先（ループ）
    const ctx = getWebAudioContext();
    if (ctx && ctx.state === 'running' && webAudioBuffers.has('timer') && webAudioMasterGain) {
        if (timerWebAudioSource) return;
        // nonOverlap 管理には載せず、専用参照で stop できるようにする
        try {
            const buffer = webAudioBuffers.get('timer');
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const gain = ctx.createGain();
            gain.gain.value = 1;
            source.connect(gain);
            gain.connect(getWebAudioBusGain('timer') || webAudioTimerGain || webAudioMasterGain);

            source.start(0);
            timerWebAudioSource = source;
            return;
        } catch {
            // フォールバック
            timerWebAudioSource = null;
        }
    }

    if (!timerAudio) return;
    if (!timerAudio.paused) return;
    try {
        timerAudio.volume = audioBusVolumes.master * audioBusVolumes.timer * timerDuckFactor;
        const p = timerAudio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
        // 無視
    }
}

function pauseTimerSound() {
    if (timerWebAudioSource) {
        try { timerWebAudioSource.stop(); } catch {}
        timerWebAudioSource = null;
    }
    if (!timerAudio) return;
    if (!timerAudio.paused) timerAudio.pause();
}

function stopTimerSound() {
    if (timerWebAudioSource) {
        try { timerWebAudioSource.stop(); } catch {}
        timerWebAudioSource = null;
    }
    if (timerAudio) {
        timerAudio.pause();
        timerAudio.currentTime = 0;
    }
    applyTimerDuckFactor(1);
}

function updateTileImageElement(img, tileInfo) {
    if (!img) return;
    if (img.getAttribute('src') !== tileInfo.imgSrc) img.src = tileInfo.imgSrc;
    img.alt = tileInfo.name;
}

function createTileImage(tileInfo) {
    const img = document.createElement('img');
    img.draggable = false;
    img.className = 'tile-img';
    updateTileImageElement(img, tileInfo);
    return img;
}

function createInlineHandTile(tileInfo) {
    const tile = document.createElement('span');
    tile.className = 'hand-tile tile-inline-hand rounded-lg tile-shadow';
    tile.title = tileInfo.name;
    tile.appendChild(createTileImage(tileInfo));
    return tile;
}

const tileRenderCache = {
    handSlots: [],
    possibleSlots: new Map()
};

function isKeyboardEditableTarget(target) {
    if (!target) return false;
    const tagName = target.tagName?.toLowerCase();
    return tagName === 'input' || tagName === 'textarea' || tagName === 'select' || !!target.isContentEditable;
}

function clearKeyboardMenuHighlight() {
    document.querySelectorAll('.keyboard-nav-active').forEach((button) => {
        button.classList.remove('keyboard-nav-active');
    });
}

function canHandleGameKeyboardInput() {
    const gameScreen = getElementByIdCached('game-screen');
    const tutorialScreen = getElementByIdCached('tutorial-screen');
    const resultSection = getElementByIdCached('result-section');
    const pauseOverlay = getElementByIdCached('pause-overlay');

    return !!gameScreen &&
        !gameScreen.classList.contains('hidden') &&
        isActiveQuestion() &&
        (!tutorialScreen || tutorialScreen.classList.contains('hidden')) &&
        (!resultSection || resultSection.classList.contains('hidden')) &&
        (!pauseOverlay || pauseOverlay.classList.contains('hidden'));
}

function handleGlobalKeyboardNavigation(event) {
    if (event.defaultPrevented) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (isKeyboardEditableTarget(event.target)) return;

    const key = event.key;
    if (!canHandleGameKeyboardInput()) {
        clearKeyboardMenuHighlight();
        return;
    }

    if (/^[1-9]$/.test(key)) {
        const tile = Number(key);
        const tileButton = tileRenderCache.possibleSlots.get(tile)?.wrapper || getElementByIdCached('possible-tiles')?.querySelector(`[data-tile="${tile}"]`);
        if (tileButton) {
            event.preventDefault();
            toggleTileSelection(tile, tileButton);
        }
        return;
    }

    if (key === 'Enter') {
        const submitBtn = getElementByIdCached('submit-btn');
        if (submitBtn && !submitBtn.disabled) {
            event.preventDefault();
            submitBtn.click();
        }
    }
}

// 毎回 innerHTML を作り直さず、必要数までだけノードを増やして使い回す。
function ensureHandTileSlots(count) {
    const container = getElementByIdCached('hand-tiles');
    if (!container) return [];

    while (tileRenderCache.handSlots.length < count) {
        const wrapper = document.createElement('div');
        wrapper.className = 'hand-tile rounded-lg tile-shadow flex items-center justify-center';
        wrapper.style.cssText = 'width: 48px; height: 68px; font-size: 36px;';

        const img = createTileImage({ imgSrc: '', name: '' });
        wrapper.appendChild(img);
        container.appendChild(wrapper);

        tileRenderCache.handSlots.push({ wrapper, img });
    }

    return tileRenderCache.handSlots;
}

function ensurePossibleTileSlots() {
    const container = getElementByIdCached('possible-tiles');
    if (!container) return tileRenderCache.possibleSlots;
    if (tileRenderCache.possibleSlots.size === 9) return tileRenderCache.possibleSlots;

    // 候補牌は 1〜9 で固定なので、最初に 9 個だけ作れば以後は状態更新で足りる。
    container.innerHTML = '';
    tileRenderCache.possibleSlots.clear();

    for (let tile = 1; tile <= 9; tile++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'selectable-tile rounded-xl tile-shadow tile-hover flex items-center justify-center cursor-pointer';
        wrapper.style.cssText = 'width: 64px; height: 88px; font-size: 48px;';
        wrapper.dataset.tile = tile;

        const img = createTileImage({ imgSrc: '', name: '' });
        wrapper.appendChild(img);
        wrapper.addEventListener('click', () => toggleTileSelection(tile, wrapper));

        container.appendChild(wrapper);
        tileRenderCache.possibleSlots.set(tile, { wrapper, img });
    }

    return tileRenderCache.possibleSlots;
}

function syncPossibleTileNode(tile, slot) {
    if (!slot) return;

    const tileInfo = getTileInfo(gameState.tileType, tile);
    const exhausted = !!(gameState.counts && gameState.counts[tile] >= 4);
    const selected = gameState.selectedTiles.has(tile);

    // 正誤表示のクラスは毎回リセットしてから、その時点の状態だけを反映する。
    updateTileImageElement(slot.img, tileInfo);
    slot.wrapper.title = tileInfo.name;
    slot.wrapper.classList.remove('correct-selected', 'correct-missed', 'incorrect-selected');
    slot.wrapper.classList.toggle('selected', selected && !gameState.isAnswered);
    slot.wrapper.classList.toggle('tile-disabled', exhausted);
    slot.wrapper.setAttribute('aria-disabled', exhausted ? 'true' : 'false');
}

const gameState = {
    mode: null, difficulty: null, currentQuestion: 0, currentStage: 0, correctCount: 0,
    hand: [], counts: {}, waitingTiles: [], selectedTiles: new Set(), tileType: 'pin',
    timeLeft: 0, maxTime: 0, timeBonus: 0, timerInterval: null, isBossStage: false, isAnswered: false,
    lives: gameConfig.lives, maxLives: gameConfig.lives, isPaused: false,
    timeExtensions: 0, extendedTime: 0, // 長考（タイム延長）の仕組み
    lastExtensionStageGranted: 0,
    timeExtensionCooldownUntil: 0,
    timeExtensionCooldownInterval: null,
    timerCuePlayed: false
};

function getTimeExtensionCooldownRemainingMs() {
    const until = gameState.timeExtensionCooldownUntil || 0;
    return Math.max(0, until - Date.now());
}

function clearTimeExtensionCooldown() {
    gameState.timeExtensionCooldownUntil = 0;
    if (gameState.timeExtensionCooldownInterval) {
        clearInterval(gameState.timeExtensionCooldownInterval);
        gameState.timeExtensionCooldownInterval = null;
    }
}

function startTimeExtensionCooldown(seconds = 5) {
    const durationMs = Math.max(0, Math.floor(seconds * 1000));
    gameState.timeExtensionCooldownUntil = Date.now() + durationMs;

    if (gameState.timeExtensionCooldownInterval) {
        clearInterval(gameState.timeExtensionCooldownInterval);
        gameState.timeExtensionCooldownInterval = null;
    }

    // 表示は秒単位なので 500ms で十分（250ms はモバイルで無駄に負荷）
    gameState.timeExtensionCooldownInterval = setInterval(() => {
        updateTimeExtensionButton();
        if (getTimeExtensionCooldownRemainingMs() <= 0) {
            clearTimeExtensionCooldown();
            updateTimeExtensionButton();
        }
    }, 500);
}

function getTimeExtensionButtonLabel() {
    const base = t('timeExtension');
    const desc = t('timeExtensionDesc');
    if (!desc) return base;
    return `${base} ${desc}`;
}

function shouldGrantTimeExtensionForStage(stageNumber) {
    if (gameState.mode === 'survival') return false;
    return Number.isInteger(stageNumber) && stageNumber > 0 && stageNumber % 5 === 1;
}

function grantTimeExtensionForStage(stageNumber) {
    if (!shouldGrantTimeExtensionForStage(stageNumber)) return false;
    if (gameState.lastExtensionStageGranted === stageNumber) return false;

    const current = Math.max(0, gameState.timeExtensions || 0);
    gameState.timeExtensions = current + 1;
    gameState.lastExtensionStageGranted = stageNumber;
    return true;
}

// 正確な和了判定（4面子1雀頭）
function isWinningHand(counts) {
    for (let head = 1; head <= 9; head++) {
        if (counts[head] >= 2) {
            const newCounts = {...counts};
            newCounts[head] -= 2;
            if (canFormMentsu(newCounts)) {
                return true;
            }
        }
    }
    return false;
}

// 面子（刻子/順子）を組めるか判定
function canFormMentsu(counts) {
    let totalTiles = 0;
    for (let i = 1; i <= 9; i++) {
        totalTiles += counts[i];
    }
    
    if (totalTiles === 0) return true;
    if (totalTiles % 3 !== 0) return false;
    
    let firstTile = 0;
    for (let i = 1; i <= 9; i++) {
        if (counts[i] > 0) {
            firstTile = i;
            break;
        }
    }
    
    if (firstTile === 0) return true;
    
    const newCounts = { ...counts };
    
    // まず刻子（同牌3枚）を試す
    if (newCounts[firstTile] >= 3) {
        newCounts[firstTile] -= 3;
        if (canFormMentsu(newCounts)) {
            return true;
        }
        newCounts[firstTile] += 3;
    }
    
    // 次に順子（連続3枚）を試す
    if (firstTile <= 7 && newCounts[firstTile] > 0 && newCounts[firstTile + 1] > 0 && newCounts[firstTile + 2] > 0) {
        newCounts[firstTile]--;
        newCounts[firstTile + 1]--;
        newCounts[firstTile + 2]--;
        if (canFormMentsu(newCounts)) {
            return true;
        }
    }
    
    return false;
}

// 聴牌（待ち牌）を計算
function calculateWinningTiles(counts) {
    const winningTiles = [];
    
    for (let tile = 1; tile <= 9; tile++) {
        if (counts[tile] >= 4) continue;
        const newCounts = {...counts};
        newCounts[tile]++;
        
        if (isWinningHand(newCounts)) {
            winningTiles.push(tile);
        }
    }
    return winningTiles;
}

// 難易度に応じて待ちの数が条件を満たすか判定
function isValidWinningTilesCount(count, difficulty, attempts) {
    if (difficulty === 'easy') {
        return count >= 1 && count <= 3;
    } else if (difficulty === 'medium') {
        if (attempts <= 12) return count === 6;
        if (attempts <= 24) return count >= 5 && count <= 6;
        if (attempts <= 48) return count >= 4 && count <= 6;
        if (attempts <= 72) return count >= 3 && count <= 6;
        if (attempts <= 96) return count >= 2 && count <= 6;
        return count >= 1 && count <= 6;
    } else { // 上級
        if (attempts <= 60) return count === 9;
        if (attempts <= 120) return count >= 8 && count <= 9;
        if (attempts <= 240) return count >= 7 && count <= 9;
        if (attempts <= 480) return count >= 6 && count <= 9;
        if (attempts <= 720) return count >= 5 && count <= 9;
        if (attempts <= 960) return count >= 4 && count <= 9;
        if (attempts <= 1200) return count >= 3 && count <= 9;
        if (attempts <= 1440) return count >= 2 && count <= 9;
        return count >= 1 && count <= 9;
    }
}

// 聴牌手牌を生成
function generateTenpaiHand(difficulty) {
    let attempts = 0;
    
    do {
        attempts++;
        
        // 牌カウントをリセット
        gameState.counts = {};
        for (let i = 1; i <= 9; i++) {
            gameState.counts[i] = 0;
        }
        gameState.hand = [];
        
        // 13枚を生成（各牌は最大4枚）
        while (gameState.hand.length < 13) {
            const tile = Math.floor(Math.random() * 9) + 1;
            if (gameState.counts[tile] < 4) {
                gameState.hand.push(tile);
                gameState.counts[tile]++;
            }
        }
        
        // 聴牌を計算
        const winningTiles = calculateWinningTiles(gameState.counts);
        
        // 難易度条件を満たすか確認
        if (isValidWinningTilesCount(winningTiles.length, difficulty, attempts)) {
            return { hand: gameState.hand, waiting: winningTiles, counts: gameState.counts };
        }
        
        // 無限ループ防止
        if (attempts > 1000000) {
            console.warn('条件に合う手牌を生成できませんでした。現在の結果を使用します。');
            return { hand: gameState.hand, waiting: winningTiles, counts: gameState.counts };
        }
        
    } while (true);
}

function startTimer() {
    stopTimer();
    // 現在ステージの最大時間を保存
    gameState.maxTime = gameState.isBossStage ? Math.max(0, gameState.timeLeft) : getMaxTime();
    gameState.isPaused = false;
    updateTimerDisplay();
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isPaused) {
            gameState.timeLeft--;
            updateTimerDisplay();
            if (gameState.timeLeft <= 0) {
                stopTimer();
                handleTimeUp();
            }
        }
    }, 1000);

    // 画面を見ていない（タブ非表示/別アプリ/最小化など）状態で開始した場合は、即時に一時停止へ
    // ※ ステージ演出中に離脱 → 演出後にタイマー開始、というケースでも残り時間が減らないようにする
    const visibilityState = document.visibilityState;
    const isVisible = !document.hidden && (!visibilityState || visibilityState === 'visible');
    if (!isVisible) {
        pauseTimer();
    }

    // タイマー開始後に操作状態を更新する（先に更新すると選択牌がロックされる）
    updateInteractionState();
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }

    // タイマー停止時は一旦「一時停止」。回答送信時（isAnswered=true）は完全停止。
    if (gameState.isAnswered) {
        stopTimerSound();
    } else {
        pauseTimerSound();
    }

    gameState.isPaused = false;
    // 時間切迫エフェクトを解除
    document.body.classList.remove('time-critical');
    document.body.classList.remove('effects-paused');
    hidePauseOverlay();
    updateInteractionState();
}

function pauseTimer() {
    if (!gameState.timerInterval || gameState.isAnswered) return;
    gameState.isPaused = true;
    pauseTimerSound();
    document.body.classList.add('effects-paused');
    showPauseOverlay();
    updateInteractionState();
}

function resumeTimer() {
    if (!gameState.timerInterval) return;
    gameState.isPaused = false;
    hidePauseOverlay();
    document.body.classList.remove('effects-paused');
    if (gameState.timerCuePlayed && gameState.timeLeft <= 5 && !gameState.isAnswered) {
        const resumed = resumeWebAudioContextIfNeeded();
        if (resumed && typeof resumed.finally === 'function') {
            resumed.finally(() => {
                if (gameState.timerCuePlayed && gameState.timeLeft <= 5 && !gameState.isAnswered && !gameState.isPaused) {
                    startTimerSound();
                }
            });
        } else {
            startTimerSound();
        }
    }
    updateInteractionState();
}

function isActiveQuestion() {
    return !!gameState.timerInterval && !gameState.isAnswered && !gameState.isPaused;
}

function updateInteractionState() {
    const submitBtn = getElementByIdCached('submit-btn');
    const nextBtn = getElementByIdCached('next-btn');
    const possibleTiles = getElementByIdCached('possible-tiles');
    const resultSection = getElementByIdCached('result-section');

    const active = isActiveQuestion();
    const hasSelection = gameState.selectedTiles && gameState.selectedTiles.size > 0;

    if (submitBtn) {
        submitBtn.disabled = !active || !hasSelection;
        submitBtn.dataset.state = !active ? 'locked' : hasSelection ? 'ready' : 'empty';
    }

    if (nextBtn) {
        const nextVisible = !nextBtn.classList.contains('hidden');
        nextBtn.disabled = !nextVisible || !gameState.isAnswered || gameState.isBossStage;
    }

    if (possibleTiles) {
        possibleTiles.style.pointerEvents = active ? '' : 'none';
    }

    updateTimeExtensionButton();
    updateSelectionStatus();
    clearKeyboardMenuHighlight();
}

function updateTimerDisplay() {
    const timerElement = getElementByIdCached('timer-display');
    const timerBar = getElementByIdCached('timer-bar');
    if (!timerElement || !timerBar) return;
    
    // 現在ステージの maxTime を使って割合を計算
    const percentage = (gameState.timeLeft / gameState.maxTime) * 100;
    timerElement.textContent = gameState.timeLeft;
    
    timerBar.style.width = `${Math.max(0, percentage)}%`;

    // className 全置換はスタイル再計算の原因になりやすいので、差分で更新
    timerElement.classList.remove('timer-warning', 'timer-danger');
    timerBar.classList.remove('timer-bar-warning', 'timer-bar-danger');
    
    // 時間が少ないときに背景エフェクトを追加
    if (gameState.timeLeft <= 5) {
        timerElement.classList.add('timer-danger');
        timerBar.classList.add('timer-bar-danger');
        document.body.classList.add('time-critical');

        if (!gameState.timerCuePlayed && gameState.timeLeft === 5) {
            gameState.timerCuePlayed = true;
            if (!gameState.isPaused && !gameState.isAnswered) startTimerSound();
        }
    } else {
        // 5秒以上に戻ったらカウントダウン音は停止（延長など）
        if (gameState.timerCuePlayed) {
            gameState.timerCuePlayed = false;
            stopTimerSound();
        }
        document.body.classList.remove('time-critical');
        if (gameState.timeLeft <= 10) {
            timerElement.classList.add('timer-warning');
            timerBar.classList.add('timer-bar-warning');
        }
    }

    // 残り時間に応じて延長ボタンの表示状態も追随させる（毎秒更新）
    updateTimeExtensionButton();
}

const timeExtensionDom = {
    btn: null,
    text: null,
    cooldown: null,
    count: null,
    slot: null,
    last: {
        canUse: null,
        cooling: null,
        cooldownSec: null,
        count: null,
        attention: null,
        boss: null,
        active: null
    }
};

function getMaxTime() {
    return Math.max(0, gameConfig.modeStartSeconds?.[gameState.mode] || 0);
}

function handleTimeUp() {
    if (gameState.isAnswered) return;

    // 1枚でも選んでいれば「自動提出」として扱う（select 音は鳴らさない）
    if (gameState.selectedTiles && gameState.selectedTiles.size > 0) {
        checkAnswer({ force: true });
        return;
    }

    gameState.isAnswered = true;
    updateInteractionState();

    // 時間切れ確定：カウントダウン音は停止
    stopTimerSound();

    // 未提出の時間切れ：incorrect ではなく timeup を鳴らす
    playSound('timeup');
    
    // サバイバルは時間切れで即終了
    if (gameState.mode === 'survival') {
        highlightAnswers();
        const section = document.getElementById('result-section');
        const message = document.getElementById('result-message');
        const nextBtn = document.getElementById('next-btn');
        if (section) {
            section.classList.remove('hidden');
            section.classList.add('slide-down');
        }
        if (message) {
            message.textContent = t('timeUp');
            message.className = 'text-3xl font-bold text-red-300 mb-6';
        }
        if (nextBtn) nextBtn.classList.add('hidden');
        hideResultActions();
        showGameOver(true);
        return;
    }
    
    // カジュアル/ストーリーはライフ制
    if (gameState.mode === 'casual' || gameState.mode === 'story') {
        gameState.lives--;
        updateLivesDisplay();
        
        if (gameState.lives <= 0) {
            highlightAnswers();
            const section = document.getElementById('result-section');
            const message = document.getElementById('result-message');
            const nextBtn = document.getElementById('next-btn');
            if (section) {
                section.classList.remove('hidden');
                section.classList.add('slide-down');
            }
            if (message) {
                message.textContent = t('timeUp');
                message.className = 'text-3xl font-bold text-red-300 mb-6';
            }
            if (nextBtn) nextBtn.classList.add('hidden');
            hideResultActions();
            showGameOver(true);
        } else {
            // 正解表示後に Continue を出す
            highlightAnswers();
            const section = document.getElementById('result-section');
            const message = document.getElementById('result-message');
            const nextBtn = document.getElementById('next-btn');
            section.classList.remove('hidden');
            section.classList.add('slide-down');
            message.textContent = t('timeUp');
            message.className = 'text-3xl font-bold text-red-300 mb-6';
            if (nextBtn) nextBtn.classList.add('hidden');
            showContinueOption();
        }
    }
}

function backToMenu() {
    resetGame();
}

function restartCurrentRun() {
    // モード未選択ならメニューに戻る
    if (!gameState.mode) {
        resetGame();
        return;
    }

    // リスタート時に勝利/敗北系の音が残らないように止める
    stopSound('victory');
    stopSound('gameover');
    stopSound('timeup');

    stopTimer();
    // 念のため：再開時にカウントダウン音が残らないよう完全停止
    stopTimerSound();

    const mode = gameState.mode;
    const previousDifficulty = gameState.difficulty;

    // 画面状態をクリーンアップ
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('gameover-screen').classList.add('hidden');
    document.getElementById('mode-screen').classList.add('hidden');
    document.getElementById('difficulty-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.body.classList.remove('boss-stage');
    document.body.classList.add('in-game');

    // モーダル状態をクリーンアップ
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hidden');
    hideResultActions();

    // 状態をリセット（mode は保持、casual/survival は difficulty を保持。story は必ず easy から）
    gameState.currentQuestion = 0;
    gameState.currentStage = 0;
    gameState.correctCount = 0;
    gameState.timeBonus = 0;
    gameState.hand = [];
    gameState.counts = {};
    gameState.waitingTiles = [];
    gameState.selectedTiles.clear();
    gameState.isBossStage = false;
    gameState.isAnswered = false;
    gameState.isPaused = false;
    gameState.lives = gameConfig.lives;
    gameState.timeExtensions = 0;
    gameState.lastExtensionStageGranted = 0;
    gameState.extendedTime = 0;
    clearTimeExtensionCooldown();
    gameState.timerCuePlayed = false;

    if (mode === 'story') {
        gameState.difficulty = 'easy';
    } else {
        gameState.difficulty = previousDifficulty;
    }

    // SURVIVAL はステージ間で timeLeft を引き継ぐ仕様なので、リスタート時に明示的に初期値へ戻す
    // （time up / incorrect で timeLeft が 0 のままだと、次回開始が即 GAME OVER になる）
    gameState.timeLeft = getMaxTime();
    gameState.maxTime = getMaxTime();
    updateTimerDisplay();

    document.getElementById('submit-btn').disabled = false;
    updateLivesDisplay();
    updateInteractionState();
    startNewQuestion();
}

function startGameMode(mode) {
    if (isMenuNavigationLocked()) return;
    lockMenuNavigation(mode === 'story' ? 420 : 240);

    gameState.mode = mode;
    gameState.lives = gameConfig.lives; // ライフをリセット
    if (mode === 'story') {
        gameState.difficulty = 'easy';
        gameState.currentQuestion = 0;
        gameState.currentStage = 0;
        gameState.correctCount = 0;
        gameState.timeBonus = 0;
        gameState.timeExtensions = 0; // タイム延長をリセット
        gameState.lastExtensionStageGranted = 0;
        gameState.extendedTime = 0;
        clearTimeExtensionCooldown();
        showExclusiveScreen('game-screen');
        document.body.classList.add('in-game');
        updateLivesDisplay();
        startNewQuestion();
    } else {
        showExclusiveScreen('difficulty-screen', { fadeIn: true });
    }
}

function startGameWithDifficulty(difficulty) {
    if (isMenuNavigationLocked()) return;
    lockMenuNavigation(420);

    gameState.difficulty = difficulty;
    gameState.currentQuestion = 0;
    gameState.currentStage = 0;
    gameState.correctCount = 0;
    gameState.timeBonus = 0;
    gameState.lives = gameConfig.lives; // ライフをリセット
    gameState.timeExtensions = 0; // タイム延長をリセット
    gameState.lastExtensionStageGranted = 0;
    gameState.extendedTime = 0;
    clearTimeExtensionCooldown();
    showExclusiveScreen('game-screen');
    document.body.classList.add('in-game');
    if (gameState.mode === 'survival') gameState.timeLeft = getMaxTime(); // サバイバルの初期時間
    updateLivesDisplay();
    startNewQuestion();
}

async function startNewQuestion() {
    // 問題進行中（または一時停止中）の誤操作で次へ進まないようにする
    if (gameState.timerInterval && !gameState.isAnswered) return;

    // 次へ移る前に結果表示を閉じる
    const resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.classList.add('hidden');
    hideResultActions();

    // すべてのモードで currentStage を進める
    gameState.currentStage++;
    
    const bossStageNumber = getBossStageNumberForMode(gameState.mode);
    const isBossEntry = !!bossStageNumber && gameState.currentStage === bossStageNumber;

    // ストーリーはステージに応じて難易度を調整（過場表示にも反映）
    if (gameState.mode === 'story' && !isBossEntry) {
        gameState.difficulty = getStoryDifficultyForStage(gameState.currentStage);
    }

    gameState.isBossStage = !!isBossEntry;
    grantTimeExtensionForStage(gameState.currentStage);
    updateQuestionDisplay();

    const stageTitle = isBossEntry
        ? t('bossStage')
        : `${t('stage')} ${gameState.currentStage}`;
    const subtitle = `${t('difficulty')} ${getDifficultyBadgeHtml(gameState.difficulty)} <span class="opacity-80">(${t(`${gameState.difficulty}Desc`)})</span>`;

    await showStageIntro({ titleText: stageTitle, subtitleHtml: subtitle, durationMs: 3800 });

    // ボスに入るか判定
    if (isBossEntry) {
        startBossStage();
        return;
    }

    // 新しい問題を生成
    generateAndShowQuestion();
}

// 問題を生成して表示（startNewQuestion / continueGame 共通）
function generateAndShowQuestion() {
    gameState.selectedTiles.clear();
    gameState.isAnswered = false;
    gameState.extendedTime = 0; // このステージの延長時間をリセット
    gameState.timerCuePlayed = false;
    stopTimerSound();
    
    // ストーリーはステージに応じて難易度を調整
    if (gameState.mode === 'story') {
        gameState.difficulty = getStoryDifficultyForStage(gameState.currentStage);
    }
    
    // ランダム花色（筒/萬/索）
    gameState.tileType = pickRandomTileType();

    const result = generateTenpaiHand(gameState.difficulty);
    if (!result) { 
        alert('問題を生成できません。もう一度お試しください。');
        resetGame();
        return; 
    }
    
    gameState.hand = result.hand;
    gameState.counts = result.counts;
    gameState.waitingTiles = result.waiting;
    
    document.body.classList.remove('boss-stage');
    document.getElementById('boss-indicator').classList.add('hidden');
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hidden');
    hideResultActions();
      
    updateQuestionDisplay();
    renderHand();
    renderPossibleTiles();
    
    // サバイバルは第9問で時間をリセット。それ以外は既定の最大時間を使用
    if (gameState.mode !== 'survival' || gameState.currentQuestion === 9) {
        gameState.timeLeft = getMaxTime();
    }
    startTimer();
}

function startBossStage() {
    gameState.isBossStage = true;
    gameState.isAnswered = false;
    gameState.selectedTiles.clear();

    generateAndShowBossQuestion({ resetTime: true });
}

function generateAndShowBossQuestion({ resetTime = false } = {}) {
    gameState.selectedTiles.clear();
    gameState.isAnswered = false;
    gameState.extendedTime = 0;
    gameState.timerCuePlayed = false;
    stopTimerSound();

    // ランダム花色（筒/萬/索）
    gameState.tileType = pickRandomTileType();

    // ボスは現在の難易度を引き継ぐ（カジュアルは選択値、ストーリーは7-9でハードの想定）
    const result = generateTenpaiHand(gameState.difficulty);
    if (!result) {
        alert('BOSS問題を生成できません');
        return;
    }

    gameState.hand = result.hand;
    gameState.counts = result.counts;
    gameState.waitingTiles = result.waiting;

    document.body.classList.add('boss-stage');
    // ボスステージの上部表示は使わない（背景効果で十分）
    document.getElementById('boss-indicator').classList.add('hidden');
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hidden');
    hideResultActions();

    updateQuestionDisplay();
    renderHand();
    renderPossibleTiles();

    if (resetTime) {
        // ボスは累積時間のみ。ただし累積が少ない場合は各モードの基本秒数を下限にする
        const baseTime = getMaxTime();
        gameState.timeLeft = Math.max(gameState.timeBonus, baseTime);
    }
    startTimer();
}

function updateQuestionDisplay() {
    const questionNum = document.getElementById('question-number');
    const stageInfo = document.getElementById('stage-info');

    const diffKey = gameState.difficulty || 'easy';
    const diffName = t(diffKey);
    const diffDesc = t(`${diffKey}Desc`);

    const diffBadgeClass = diffKey === 'easy'
        ? 'difficulty-badge difficulty-badge--easy'
        : diffKey === 'medium'
            ? 'difficulty-badge difficulty-badge--medium'
            : 'difficulty-badge difficulty-badge--hard';

    const diffInfoHtml = `<span class="font-bold">${t('difficulty')}</span> ` +
        `<span class="${diffBadgeClass}">${diffName}</span>` +
        (diffDesc ? ` <span class="opacity-80">(${diffDesc})</span>` : '');

    // 難易度アクセント（主にストーリーモードの視認性向上）
    if (questionNum) {
        questionNum.classList.remove('difficulty-accent--easy', 'difficulty-accent--medium', 'difficulty-accent--hard');
        if (!gameState.isBossStage && (gameState.mode === 'casual' || gameState.mode === 'story' || gameState.mode === 'survival')) {
            questionNum.classList.add(`difficulty-accent--${diffKey}`);
        }
    }

    if (gameState.isBossStage) {
        questionNum.textContent = t('bossStage');
    } else {
        questionNum.textContent = `${t('stage')} ${gameState.currentStage}`;
    }
    stageInfo.innerHTML = `<small>${diffInfoHtml}</small>`;

    updateTimeBonusDisplay();
    updateLivesDisplay();
    updateInteractionState();
}

function updateSelectionStatus() {
    const status = getElementByIdCached('selection-status');
    const hint = getElementByIdCached('selection-hint');
    const count = gameState.selectedTiles?.size || 0;

    if (status) {
        if (!isActiveQuestion()) {
            status.textContent = count > 0
                ? t('selectionStatusLocked', { count })
                : t('selectionStatusIdle');
            status.dataset.state = 'locked';
        } else if (count > 0) {
            status.textContent = t('selectionStatusSelected', { count });
            status.dataset.state = 'ready';
        } else {
            status.textContent = t('selectionStatusIdle');
            status.dataset.state = 'empty';
        }
    }

    if (hint) {
        hint.textContent = isActiveQuestion()
            ? t('selectionHintActive')
            : t('selectionHintLocked');
    }
}

function renderHand() {
    const sorted = [...gameState.hand].sort((a, b) => a - b);
    const slots = ensureHandTileSlots(sorted.length);

    sorted.forEach((tile, index) => {
        const tileInfo = getTileInfo(gameState.tileType, tile);
        const slot = slots[index];
        if (!slot) return;
        slot.wrapper.hidden = false;
        slot.wrapper.title = tileInfo.name;
        updateTileImageElement(slot.img, tileInfo);
    });

    for (let index = sorted.length; index < slots.length; index++) {
        slots[index].wrapper.hidden = true;
    }
}

function renderPossibleTiles() {
    const slots = ensurePossibleTileSlots();
    for (let tile = 1; tile <= 9; tile++) {
        syncPossibleTileNode(tile, slots.get(tile));
    }
}

function toggleTileSelection(tile, element) {
    if (!isActiveQuestion()) return;
    if (gameState.counts && gameState.counts[tile] >= 4) return;

    playSound('tap');
    if (gameState.selectedTiles.has(tile)) {
        gameState.selectedTiles.delete(tile);
        element.classList.remove('selected');
    } else {
        gameState.selectedTiles.add(tile);
        element.classList.add('selected');
    }

    updateInteractionState();
}

function checkAnswer({ force = false } = {}) {
    if (gameState.isAnswered) return;
    if (!force && !isActiveQuestion()) return;
    gameState.isAnswered = true;
    stopTimer();
    const selected = Array.from(gameState.selectedTiles);
    const correct = gameState.waitingTiles;
    const isCorrect = selected.length === correct.length && selected.every(tile => correct.includes(tile));
    if (isCorrect) handleCorrectAnswer();
    else handleIncorrectAnswer();
    updateInteractionState();
}

function handleCorrectAnswer() {
    gameState.correctCount++;

    playSound('correct');
    
    // 時間ボーナスを計算（元の時間のみ。延長時間は含めない）
    // カジュアル/ストーリーのボス用に累積する（ボス自体では累積しない）
    if (!gameState.isBossStage && (gameState.mode === 'casual' || gameState.mode === 'story')) {
        const maxTimeForStage = getMaxTime(); // このステージの元の最大時間
        const actualBonus = Math.min(gameState.timeLeft, maxTimeForStage); // 元の時間分までを上限に加算
        gameState.timeBonus += actualBonus;
        updateTimeBonusDisplay();
    }
    
    if (gameState.mode === 'survival') {
        const recovery = Math.max(0, gameConfig.survivalRecoverySeconds?.[gameState.difficulty] || 0);
        gameState.timeLeft += recovery;
    }
    showResult(true);
    highlightAnswers();
    
    // ボスクリア後に勝利表示
    if (gameState.isBossStage) {
        showResultOkAction({
            titleText: t('victory'),
            titleClassName: 'text-3xl font-black mb-3 text-green-300 text-center',
            bodyText: '',
            onOk: () => {
                playSound('victory');
                showVictory();
            }
        });
    }
}

function handleIncorrectAnswer() {
    playSound('incorrect');
    showResult(false);
    highlightAnswers();
    
    // サバイバルは不正解で即終了
    if (gameState.mode === 'survival') {
        showGameOver(false);
        return;
    }
    
    // カジュアル/ストーリーはライフ制
    if (gameState.mode === 'casual' || gameState.mode === 'story') {
        gameState.lives--;
        updateLivesDisplay();
        
        if (gameState.lives <= 0) {
            // ライフが尽きたらゲームオーバー
            showGameOver(false);
        } else {
            // ライフが残っていれば Continue を表示
            showContinueOption();
        }
    }
}

function showResult(isCorrect) {
    const section = document.getElementById('result-section');
    const message = document.getElementById('result-message');
    const nextBtn = document.getElementById('next-btn');
    section.classList.remove('hidden');
    section.classList.add('slide-down');
    message.textContent = isCorrect ? t('correct') : t('incorrect');
    message.className = isCorrect ? 'text-3xl font-bold text-green-300 mb-6' : 'text-3xl font-bold text-red-300 mb-6';

    hideResultActions();
    
    // 「次へ」ボタン表示条件
    if (isCorrect && !gameState.isBossStage) {
        if (gameState.mode === 'survival') {
            nextBtn.classList.remove('hidden');
        } else if (gameState.mode === 'casual' || gameState.mode === 'story') {
            // カジュアル/ストーリー：第1〜10問は「次へ」を表示
            nextBtn.classList.remove('hidden');
        }
    } else {
        nextBtn.classList.add('hidden');
    }
    
    // 結果表示中は操作をロックして誤操作を防ぐ
    updateInteractionState();
}

function highlightAnswers() {
    const container = document.getElementById('possible-tiles');
    const tiles = container.querySelectorAll('[data-tile]');
    const selected = Array.from(gameState.selectedTiles);
    const correct = gameState.waitingTiles;
    const correctSelected = selected.filter(t => correct.includes(t));
    const missed = correct.filter(t => !selected.includes(t));
    const wrong = selected.filter(t => !correct.includes(t));
    tiles.forEach(element => {
        const tile = parseInt(element.dataset.tile);
        element.classList.remove('selected');
        if (correctSelected.includes(tile)) element.classList.add('correct-selected');
        else if (missed.includes(tile)) element.classList.add('correct-missed');
        else if (wrong.includes(tile)) element.classList.add('incorrect-selected');
    });
    breakdownAnimationState.currentIndex = 0;
    displayCorrectAnswer();
    displayHandBreakdown();
}

function displayCorrectAnswer() {
    const container = document.getElementById('correct-answer-display');
    const selected = Array.from(gameState.selectedTiles);
    const correct = gameState.waitingTiles;
    const groups = [
        {
            title: t('resultCorrectSelected'),
            className: 'result-group--correct',
            tiles: selected.filter((tile) => correct.includes(tile))
        },
        {
            title: t('resultMissedTiles'),
            className: 'result-group--missed',
            tiles: correct.filter((tile) => !selected.includes(tile))
        },
        {
            title: t('resultIncorrectSelected'),
            className: 'result-group--wrong',
            tiles: selected.filter((tile) => !correct.includes(tile))
        }
    ].filter((group) => group.tiles.length > 0);

    const totalTiles = groups.reduce((sum, group) => sum + group.tiles.length, 0);
    const useCompactTiles = totalTiles >= 8 || groups.some((group) => group.tiles.length >= 5);

    container.innerHTML = '';

    const groupsWrap = document.createElement('div');
    groupsWrap.className = `result-groups ${useCompactTiles ? 'result-groups--compact' : ''}`.trim();

    groups.forEach((group) => {
        const section = document.createElement('section');
        section.className = `result-group ${group.className}`;

        const title = document.createElement('h5');
        title.className = 'result-group-title';
        title.textContent = group.title;
        section.appendChild(title);

        const tilesDiv = document.createElement('div');
        tilesDiv.className = 'result-group-tiles';

        group.tiles.forEach((tile) => {
            const tileInfo = getTileInfo(gameState.tileType, tile);
            const div = document.createElement('div');
            div.className = 'hand-tile rounded-lg tile-shadow flex items-center justify-center result-answer-tile';
            div.appendChild(createTileImage(tileInfo));
            div.title = tileInfo.name;
            tilesDiv.appendChild(div);
        });

        section.appendChild(tilesDiv);
        groupsWrap.appendChild(section);
    });

    container.appendChild(groupsWrap);
}

// 和了牌型を理牌して返す
function getWinningHandBreakdown(handArray) {
    const counts = {};
    for (let i = 1; i <= 9; i++) counts[i] = 0;
    handArray.forEach(tile => counts[tile]++);

    for (let head = 1; head <= 9; head++) {
        if (counts[head] >= 2) {
            const tempCounts = { ...counts };
            tempCounts[head] -= 2;
            const melds = [];
            if (findMeldBreakdown(tempCounts, melds)) {
                return {
                    head: [head, head],
                    melds: melds
                };
            }
        }
    }
    return null;
}

function findMeldBreakdown(counts, melds) {
    let totalTiles = 0;
    for(let i = 1; i <= 9; i++) {
        totalTiles += counts[i];
    }
    if (totalTiles === 0) {
        return true;
    }

    // 最初の牌を探す
    let firstTile = 0;
    for (let i = 1; i <= 9; i++) {
        if (counts[i] > 0) {
            firstTile = i;
            break;
        }
    }

    // 優先的に刻子を試す
    if (counts[firstTile] >= 3) {
        const tempCounts = { ...counts };
        tempCounts[firstTile] -= 3;
        melds.push([firstTile, firstTile, firstTile]);
        if (findMeldBreakdown(tempCounts, melds)) {
            return true;
        }
        melds.pop(); // バックトラック
    }

    // 順子を試す
    if (firstTile <= 7 && counts[firstTile] > 0 && counts[firstTile + 1] > 0 && counts[firstTile + 2] > 0) {
        const tempCounts = { ...counts };
        tempCounts[firstTile]--;
        tempCounts[firstTile + 1]--;
        tempCounts[firstTile + 2]--;
        melds.push([firstTile, firstTile + 1, firstTile + 2]);
        if (findMeldBreakdown(tempCounts, melds)) {
            return true;
        }
        melds.pop(); // バックトラック
    }
    
    return false;
}

function displayHandBreakdown() {
    const container = document.getElementById('hand-breakdown');
    if (!container) return;

    clearBreakdownAnimationTimers();
    container.innerHTML = '';

    const mainTitle = document.createElement('p');
    mainTitle.className = 'font-bold text-2xl mb-6 text-center text-yellow-300';
    mainTitle.innerHTML = t('breakdownHowTitle');
    container.appendChild(mainTitle);

    const sortedWaitingTiles = getSortedBreakdownWaitingTiles();
    if (!sortedWaitingTiles.length) return;

    breakdownAnimationState.currentIndex = Math.min(
        Math.max(0, breakdownAnimationState.currentIndex),
        Math.max(0, sortedWaitingTiles.length - 1)
    );

    const waitTile = sortedWaitingTiles[breakdownAnimationState.currentIndex];
    const breakdown = getWinningHandBreakdown([...gameState.hand, waitTile]);
    if (!breakdown) return;

    const tileInfo = getTileInfo(gameState.tileType, waitTile);
    const isMissed = !gameState.selectedTiles.has(waitTile);
    const displayData = buildBreakdownDisplayData(waitTile, breakdown);

    const sectionDiv = document.createElement('div');
    sectionDiv.className = `breakdown-section ${isMissed ? 'missed-tile' : 'selected-tile'}`;

    const breakdownTitle = document.createElement('h3');
    breakdownTitle.style.color = isMissed ? '#fbbf24' : '#22c55e';
    breakdownTitle.textContent = `${t('winningTile')}`;
    breakdownTitle.appendChild(createInlineHandTile(tileInfo));
    breakdownTitle.appendChild(document.createTextNode(` ${tileInfo.name}`));
    sectionDiv.appendChild(breakdownTitle);

    const stage = createBreakdownStageElement(displayData, { tileType: gameState.tileType });
    sectionDiv.appendChild(stage);
    renderBreakdownControls(sectionDiv, sortedWaitingTiles.length, breakdownAnimationState.currentIndex);
    container.appendChild(sectionDiv);

    playBreakdownTransition(stage, displayData);
}

function createTileGroup(tileNumbers, label) {
    const groupContainer = document.createElement('div');
    groupContainer.className = 'tile-group';
    
    // 詳細な牌の種類を説明
    let detailText = '';
    if (tileNumbers.length === 2) {
        detailText = `${t('pair')}`;
    } else if (tileNumbers.length === 3) {
        if (tileNumbers[0] === tileNumbers[1] && tileNumbers[1] === tileNumbers[2]) {
            detailText = `${t('triplet')}`;
        } else {
            detailText = `${t('sequence')}`;
        }
    }

    const labelDiv = document.createElement('div');
    labelDiv.className = 'tile-group-label';
    labelDiv.textContent = detailText;
    
    const tilesDiv = document.createElement('div');
    tilesDiv.className = 'flex gap-1 justify-center';
    tileNumbers.forEach(tileNum => {
        const tileInfo = getTileInfo(gameState.tileType, tileNum);
        const tileDiv = document.createElement('div');
        tileDiv.className = 'hand-tile rounded-lg tile-shadow flex items-center justify-center';
        tileDiv.style.cssText = 'width: 32px; height: 45px; font-size: 28px;';
        tileDiv.appendChild(createTileImage(tileInfo));
        tileDiv.title = tileInfo.name;
        tilesDiv.appendChild(tileDiv);
    });

    groupContainer.appendChild(labelDiv);
    groupContainer.appendChild(tilesDiv);
    return groupContainer;
}

function updateLivesDisplay() {
    // カジュアル/ストーリーのみライフを表示
    const livesContainer = document.getElementById('lives-display');
    if (!livesContainer) return;
    
    if (gameState.mode === 'casual' || gameState.mode === 'story') {
        livesContainer.classList.remove('hidden');
        livesContainer.innerHTML = `<span class="font-bold">${t('lives')}</span> `;
        for (let i = 0; i < gameState.maxLives; i++) {
            if (i < gameState.lives) {
                livesContainer.innerHTML += '❤️';
            } else {
                livesContainer.innerHTML += '🖤';
            }
        }
    } else {
        livesContainer.classList.add('hidden');
    }
}

function updateTimeBonusDisplay() {
    const timeBonusEl = document.getElementById('time-bonus-display');
    if (!timeBonusEl) return;

    const shouldShow = !gameState.isBossStage && (gameState.mode === 'casual' || gameState.mode === 'story');
    if (!shouldShow) {
        timeBonusEl.classList.add('hidden');
        timeBonusEl.textContent = '';
        return;
    }

    const total = Math.max(0, Math.floor(gameState.timeBonus || 0));
    timeBonusEl.classList.remove('hidden');
    timeBonusEl.innerHTML = `<span class="font-bold">${t('timeBonusLabel')}</span> ${total}${t('secondsUnit')}`;
}

function updateTimeExtensionButton() {
    if (!timeExtensionDom.btn || !timeExtensionDom.btn.isConnected) {
        timeExtensionDom.btn = document.getElementById('time-extension-btn');
        timeExtensionDom.text = document.getElementById('time-extension-text');
        timeExtensionDom.cooldown = document.getElementById('time-extension-cooldown');
        timeExtensionDom.count = document.getElementById('time-extension-count');
        timeExtensionDom.slot = document.getElementById('time-extension-slot') || null;
    }

    // ボタンが無ければ作成（初回のみ）
    if (!timeExtensionDom.btn) {
        const slot = timeExtensionDom.slot || document.getElementById('time-extension-slot');
        if (!slot) return;

        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = `
            <button id="time-extension-btn" class="time-extension-btn" type="button">
                <span class="time-extension-main">
                    <span id="time-extension-text" class="time-extension-text"></span>
                    <span id="time-extension-cooldown" class="time-extension-cooldown hidden"></span>
                </span>
                <span id="time-extension-badge" class="time-extension-badge" aria-hidden="true">
                    <span class="time-extension-badge-emoji">⏰</span>
                    <span id="time-extension-count" class="time-extension-count"></span>
                </span>
            </button>
        `;
        slot.appendChild(btnContainer);

        timeExtensionDom.btn = document.getElementById('time-extension-btn');
        timeExtensionDom.text = document.getElementById('time-extension-text');
        timeExtensionDom.cooldown = document.getElementById('time-extension-cooldown');
        timeExtensionDom.count = document.getElementById('time-extension-count');
        if (timeExtensionDom.btn) timeExtensionDom.btn.addEventListener('click', useTimeExtension);
    }

    const extensionBtn = timeExtensionDom.btn;
    const textSpan = timeExtensionDom.text;
    const cooldownSpan = timeExtensionDom.cooldown;
    const countSpan = timeExtensionDom.count;
    if (!extensionBtn || !textSpan) return;

    const isAvailableMode = gameState.mode !== 'survival';
    if (timeExtensionDom.slot) {
        timeExtensionDom.slot.classList.toggle('hidden', !isAvailableMode);
    }
    if (!isAvailableMode) {
        extensionBtn.disabled = true;
        extensionBtn.classList.remove('attention', 'cooldown');
        textSpan.textContent = getTimeExtensionButtonLabel();
        if (cooldownSpan) cooldownSpan.classList.add('hidden');
        if (countSpan) countSpan.textContent = 'x0';
        return;
    }

    const active = isActiveQuestion();
    const cooldownRemainingMs = getTimeExtensionCooldownRemainingMs();
    const isCoolingDown = cooldownRemainingMs > 0;
    const cooldownRemainingSec = Math.ceil(cooldownRemainingMs / 1000);
    const canUseExtension = (gameState.timeExtensions > 0) && active && !isCoolingDown;

    const countValue = String(Math.max(0, gameState.timeExtensions || 0));
    const countDisplay = `x${countValue}`;
    if (countSpan && timeExtensionDom.last.count !== countValue) {
        timeExtensionDom.last.count = countValue;
        countSpan.textContent = countDisplay;
    }

    if (timeExtensionDom.last.canUse !== canUseExtension) {
        timeExtensionDom.last.canUse = canUseExtension;
        extensionBtn.disabled = !canUseExtension;
    }

    if (timeExtensionDom.last.cooling !== isCoolingDown) {
        timeExtensionDom.last.cooling = isCoolingDown;
        extensionBtn.classList.toggle('cooldown', !!isCoolingDown);
    }

    if (timeExtensionDom.last.active !== active || timeExtensionDom.last.cooldownSec !== cooldownRemainingSec) {
        timeExtensionDom.last.active = active;
        timeExtensionDom.last.cooldownSec = cooldownRemainingSec;

        if (canUseExtension) {
            textSpan.textContent = getTimeExtensionButtonLabel();
            if (cooldownSpan) cooldownSpan.classList.add('hidden');
        } else {
            textSpan.textContent = getTimeExtensionButtonLabel();

            if (cooldownSpan) {
                if (isCoolingDown) {
                    cooldownSpan.classList.remove('hidden');
                    cooldownSpan.textContent = `(${t('cooldown')} ${cooldownRemainingSec} ${t('secondsUnit')})`;
                } else {
                    cooldownSpan.classList.add('hidden');
                }
            }
        }
    }

    const shouldAttention = canUseExtension && gameState.timeLeft <= 5;
    if (timeExtensionDom.last.attention !== shouldAttention) {
        timeExtensionDom.last.attention = shouldAttention;
        extensionBtn.classList.toggle('attention', !!shouldAttention);
    }
}

function useTimeExtension() {
    if (gameState.mode === 'survival') return;
    if (!isActiveQuestion()) return;
    if (gameState.timeExtensions <= 0 || gameState.isAnswered) return;
    if (getTimeExtensionCooldownRemainingMs() > 0) return;

    playSound('select');
    
    gameState.timeExtensions--;
    gameState.timeLeft += gameConfig.timeExtensionSeconds;
    gameState.extendedTime += gameConfig.timeExtensionSeconds; // このステージで使った延長時間を記録

    // 連打防止：5 秒クールダウン
    startTimeExtensionCooldown(5);

    // 延長で 5秒以上に戻る可能性があるため、カウントダウン音は止める
    if (gameState.timeLeft > 5) {
        gameState.timerCuePlayed = false;
        stopTimerSound();
    }
    
    updateTimeExtensionButton();
    
    // ヒント演出を表示
    const timerDisplay = document.getElementById('timer-display');
    timerDisplay.classList.add('time-extended');
    setTimeout(() => {
        timerDisplay.classList.remove('time-extended');
    }, 1000);

    const extensionBtn = document.getElementById('time-extension-btn');
    if (extensionBtn) {
        extensionBtn.classList.add('used');
        setTimeout(() => extensionBtn.classList.remove('used'), 650);
    }
}

function showContinueOption() {
    // 結果表示は同じモーダル内で完結させる
    showResultLifeAction();
}

async function continueGame() {
    // コンティニューは「解答済み」かつ「進行中ではない」場合のみ許可
    if (!gameState.isAnswered) return;

    hideResultActions();

    // 続行時に結果モーダルを閉じる（古い内容の積み重なりを防ぐ）
    const resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.classList.add('hidden');

    // 同一ステージで新しい問題を出す（ステージ数は増やさない）
    // ボスのリトライは残り秒数を引き継ぎ、既定秒数へリセットしない
    const stageTitle = gameState.isBossStage
        ? t('bossStage')
        : `${t('stage')} ${gameState.currentStage}`;
    const subtitle = `${t('difficulty')} ${getDifficultyBadgeHtml(gameState.difficulty)} <span class="opacity-80">(${t(`${gameState.difficulty}Desc`)})</span>`;
    await showStageIntro({ titleText: stageTitle, subtitleHtml: subtitle, durationMs: 3200 });

    if (gameState.isBossStage) {
        generateAndShowBossQuestion({ resetTime: false });
        return;
    }
    generateAndShowQuestion();
}

function giveUpGame() {
    // 即ゲームオーバー
    showGameOver(false);
}

function showVictory() {
    document.getElementById('game-screen').classList.add('hidden');
    const screen = document.getElementById('victory-screen');
    screen.classList.remove('hidden');
    // すべてのモードで currentStage を使用
    const finalQuestionsEl = document.getElementById('final-questions');
    if (finalQuestionsEl) finalQuestionsEl.textContent = String(gameState.currentStage);
    const finalCorrectEl = document.getElementById('final-correct');
    if (finalCorrectEl) finalCorrectEl.textContent = String(gameState.correctCount);

    const modeEl = document.getElementById('mode');
    if (modeEl) modeEl.textContent = getModeDisplayText(gameState.mode);

    const difficultyLabelEl = document.getElementById('final-difficulty-label');
    const difficultyEl = document.getElementById('final-difficulty');
    const showDifficulty = gameState.mode === 'casual' || gameState.mode === 'survival';
    if (difficultyLabelEl) difficultyLabelEl.textContent = `${t('difficulty')}:`;
    if (difficultyEl) {
        if (showDifficulty) {
            const diffKey = gameState.difficulty || 'easy';
            difficultyEl.innerHTML = `${getDifficultyBadgeHtml(diffKey)} <span class="opacity-80">(${t(`${diffKey}Desc`)})</span>`;
            difficultyLabelEl?.parentElement?.classList.remove('hidden');
        } else {
            difficultyLabelEl?.parentElement?.classList.add('hidden');
        }
    }

    const timeLeftEl = document.getElementById('final-time-left');
    if (timeLeftEl) {
        const unusedExtension = getUnusedTimeExtensionSeconds();
        const totalTimeLeft = Math.max(0, gameState.timeLeft || 0) + unusedExtension;
        gameState.timeLeft = totalTimeLeft;
        timeLeftEl.textContent = String(totalTimeLeft);
    }

    const livesEl = document.getElementById('final-lives-left');
    const livesLabelEl = document.getElementById('final-lives-left-label');
    if (livesEl && livesLabelEl) {
        if (gameState.mode === 'casual' || gameState.mode === 'story') {
            livesEl.textContent = '';
            for (let i = 0; i < (gameState.maxLives || gameConfig.lives); i++) {
                livesEl.textContent += i < (gameState.lives || 0) ? '❤️' : '🖤';
            }
            livesLabelEl.parentElement?.classList.remove('hidden');
        } else {
            // 念のため（現状 victory は boss クリア時のみ）
            livesLabelEl.parentElement?.classList.add('hidden');
        }
    }

    // 低電力モード（主にモバイル）では紙吹雪を生成しない（DOM/アニメーション負荷が高い）
    if (!document.body.classList.contains('low-power')) {
        createConfetti();
    }
    // 16:9 固定フレーム設計：ページスクロールは使わない
}

function getUnusedTimeExtensionSeconds() {
    const count = Math.max(0, gameState.timeExtensions || 0);
    const seconds = Math.max(0, gameConfig.timeExtensionSeconds || 0);
    return count * seconds;
}

function showGameOver(timeUp) {
    const section = document.getElementById('result-section');
    const message = document.getElementById('result-message');
    const nextBtn = document.getElementById('next-btn');

    if (section && section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        section.classList.add('slide-down');
    }

    if (message) {
        message.textContent = timeUp ? t('timeUp') : t('incorrect');
        message.className = 'text-3xl font-bold text-red-300 mb-6';
    }

    if (nextBtn) nextBtn.classList.add('hidden');
    hideResultActions();
    showResultGameOverAction(timeUp);
    updateInteractionState();
}

function showGameOverOverlay(timeUp) {
    document.getElementById('game-screen').classList.add('hidden');
    const screen = document.getElementById('gameover-screen');
    screen.classList.remove('hidden');
    const message = document.getElementById('gameover-message');
    if (message) message.textContent = timeUp ? t('timeUp') : '';

    const finalScoreEl = document.getElementById('final-score');
    if (finalScoreEl) finalScoreEl.textContent = String(gameState.correctCount);

    const modeEl = document.getElementById('mode-gameover');
    if (modeEl) modeEl.textContent = getModeDisplayText(gameState.mode);

    const difficultyLabelEl = document.getElementById('final-difficulty-label-gameover');
    const difficultyEl = document.getElementById('final-difficulty-gameover');
    const showDifficulty = gameState.mode === 'casual' || gameState.mode === 'survival';
    if (difficultyLabelEl) difficultyLabelEl.textContent = `${t('difficulty')}:`;
    if (difficultyEl) {
        if (showDifficulty) {
            const diffKey = gameState.difficulty || 'easy';
            difficultyEl.innerHTML = `${getDifficultyBadgeHtml(diffKey)} <span class="opacity-80">(${t(`${diffKey}Desc`)})</span>`;
            difficultyLabelEl?.parentElement?.classList.remove('hidden');
        } else {
            difficultyLabelEl?.parentElement?.classList.add('hidden');
        }
    }
    // 16:9 固定フレーム設計：ページスクロールは使わない
}

function createConfetti() {
    if (document.body.classList.contains('low-power')) return;
    const screen = document.getElementById('victory-screen');
    if (!screen) return;
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        screen.appendChild(confetti);
        setTimeout(() => confetti.remove(), 6000);
    }
}

    function clearBreakdownAnimationTimers() {
        breakdownAnimationState.playToken += 1;
        breakdownAnimationState.timerIds.forEach((timerId) => clearTimeout(timerId));
        breakdownAnimationState.timerIds = [];
    }

    function getSortedBreakdownWaitingTiles() {
        const selected = Array.from(gameState.selectedTiles);
        const missedTiles = gameState.waitingTiles.filter((tile) => !selected.includes(tile));
        const selectedTiles = gameState.waitingTiles.filter((tile) => selected.includes(tile));
        return [...missedTiles, ...selectedTiles];
    }

    function getTileGroupDetailText(tileNumbers) {
        if (tileNumbers.length === 2) return t('pair');
        if (tileNumbers.length === 3) {
            if (tileNumbers[0] === tileNumbers[1] && tileNumbers[1] === tileNumbers[2]) return t('triplet');
            return t('sequence');
        }
        return '';
    }

    function compareBreakdownNumberLists(left, right) {
        const maxLength = Math.max(left.length, right.length);
        for (let index = 0; index < maxLength; index++) {
            const leftValue = left[index] ?? Number.MAX_SAFE_INTEGER;
            const rightValue = right[index] ?? Number.MAX_SAFE_INTEGER;
            if (leftValue !== rightValue) return leftValue - rightValue;
        }
        return 0;
    }

    function buildBreakdownDisplayData(waitTile, breakdown, baseHand = gameState.hand) {
        const sortedBaseEntries = [...baseHand].sort((a, b) => a - b).map((tile, index) => ({
                id: `hand-${index}`,
                tile,
                isWinning: false,
                order: index
            }));
        const lastSameTileEntry = [...sortedBaseEntries].reverse().find((entry) => entry.tile === waitTile) || null;
        const lastLessOrEqualTileEntry = [...sortedBaseEntries].reverse().find((entry) => entry.tile <= waitTile) || null;
        const winningEntry = {
            id: 'winning-tile',
            tile: waitTile,
            isWinning: true,
            order: lastSameTileEntry
                ? lastSameTileEntry.order + 0.5
                : lastLessOrEqualTileEntry
                    ? lastLessOrEqualTileEntry.order + 0.5
                    : -0.5
        };
        const sourceEntries = [...sortedBaseEntries, winningEntry];
        const availableByTile = new Map();

        sourceEntries.forEach((entry) => {
            if (entry.isWinning) {
                return;
            }
            const current = availableByTile.get(entry.tile) || [];
            current.push(entry);
            availableByTile.set(entry.tile, current);
        });

        const targetGroups = [breakdown.head, ...breakdown.melds];
        const previewAvailableByTile = new Map(
            Array.from(availableByTile.entries()).map(([tile, entries]) => [tile, [...entries]])
        );

        const groups = targetGroups.map((groupTiles, groupIndex) => {
            const previewOrders = groupTiles.map((tile) => {
                const pool = previewAvailableByTile.get(tile) || [];
                const sourceEntry = pool.shift();
                previewAvailableByTile.set(tile, pool);
                return sourceEntry?.order ?? Number.MAX_SAFE_INTEGER;
            });

            return {
                id: `group-${groupIndex}`,
                kind: groupIndex === 0 ? 'head' : 'meld',
                label: getTileGroupDetailText(groupTiles),
                tileNumbers: [...groupTiles],
                sourceOrders: previewOrders,
                normalizedSourceOrders: [...previewOrders].sort((a, b) => a - b)
            };
        });

        const [headGroup, ...meldGroups] = groups;
        if (!headGroup) {
            return {
                sourceEntries,
                groups,
                animationOrder: groups.flatMap((group) => group.tiles)
            };
        }

        const headMinOrder = headGroup.normalizedSourceOrders[0] ?? Number.MAX_SAFE_INTEGER;
        const headInsertIndex = meldGroups.findIndex((group) => {
            const groupMinOrder = group.normalizedSourceOrders[0] ?? Number.MAX_SAFE_INTEGER;
            return headMinOrder < groupMinOrder;
        });

        const orderedGroups = [...meldGroups];
        if (headInsertIndex >= 0) {
            orderedGroups.splice(headInsertIndex, 0, headGroup);
        } else {
            orderedGroups.push(headGroup);
        }

        const preferredWinningGroupId = (() => {
            for (let groupIndex = orderedGroups.length - 1; groupIndex >= 0; groupIndex--) {
                if (orderedGroups[groupIndex]?.tileNumbers.includes(waitTile)) return orderedGroups[groupIndex].id;
            }
            return orderedGroups[orderedGroups.length - 1]?.id || null;
        })();

        let winningPlaced = false;
        const assignedGroups = orderedGroups.map((group) => {
            const tiles = group.tileNumbers.map((tile) => {
                let sourceEntry = null;

                if (!winningPlaced && preferredWinningGroupId === group.id && tile === waitTile) {
                    sourceEntry = winningEntry;
                    winningPlaced = true;
                } else {
                    const pool = availableByTile.get(tile) || [];
                    sourceEntry = pool.shift();
                    availableByTile.set(tile, pool);
                }

                return {
                    groupId: group.id,
                    sourceId: sourceEntry?.id || `fallback-${group.id}-${tile}`,
                    tile,
                    isWinning: !!sourceEntry?.isWinning,
                    sourceOrder: sourceEntry?.order ?? Number.MAX_SAFE_INTEGER
                };
            });

            return {
                ...group,
                tiles
            };
        });

        return {
            sourceEntries,
            groups: assignedGroups,
            animationOrder: assignedGroups.flatMap((group) => group.tiles)
        };
    }

    function createBreakdownTileElement(tile, { sourceId = '', winning = false, className = '', width = 48, height = 68, fontSize = 36, tileType = gameState.tileType } = {}) {
        const tileInfo = getTileInfo(tileType, tile);
        const tileDiv = document.createElement('div');
        tileDiv.className = `hand-tile rounded-lg tile-shadow flex items-center justify-center breakdown-tile ${className}`.trim();
        tileDiv.style.cssText = `width: ${width}px; height: ${height}px; font-size: ${fontSize}px;`;
        if (sourceId) tileDiv.dataset.sourceId = sourceId;
        if (winning) tileDiv.classList.add('breakdown-winning-tile');
        tileDiv.appendChild(createTileImage(tileInfo));
        tileDiv.title = tileInfo.name;
        return tileDiv;
    }

    function animateBreakdownTileTransfer(animationLayer, sourceNode, targetNode, { duration = 1000 } = {}) {
        // アニメーション用レイヤー・移動元・移動先のいずれかが欠けている場合は、
        // 演出を諦めて状態だけを即時反映する。
        if (!animationLayer || !sourceNode || !targetNode) {
            if (sourceNode) sourceNode.classList.add('is-dealt');
            if (targetNode) targetNode.classList.add('is-arrived');
            return null;
        }

        // 画面上の実座標を取得し、
        // 「どこからどこへ飛ばすか」をピクセル単位で計算できるようにする。
        const layerRect = animationLayer.getBoundingClientRect();
        const sourceRect = sourceNode.getBoundingClientRect();
        const targetRect = targetNode.getBoundingClientRect();

        // 座標やサイズが正しく取得できない場合は、
        // 中途半端なアニメーションを避けて即時反映にフォールバックする。
        if (!layerRect.width || !layerRect.height || !sourceRect.width || !targetRect.width) {
            sourceNode.classList.add('is-dealt');
            targetNode.classList.add('is-arrived');
            return null;
        }

        // 元の牌 DOM を複製し、
        // 実際に飛んで見える専用の「飛行牌」要素を作る。
        const flyTile = sourceNode.cloneNode(true);

        // 元牌や到着済み牌の状態クラスは飛行牌には不要なので外し、
        // 飛行専用クラスだけを付与する。
        flyTile.classList.remove('is-dealt', 'is-arrived');
        flyTile.classList.add('breakdown-fly-tile');

        // 飛行牌の初期サイズと初期位置を、移動元牌と完全に一致させる。
        flyTile.style.width = `${sourceRect.width}px`;
        flyTile.style.height = `${sourceRect.height}px`;
        flyTile.style.left = `${sourceRect.left - layerRect.left}px`;
        flyTile.style.top = `${sourceRect.top - layerRect.top}px`;

        // 最初は「まだ動いていない状態」にしておき、
        // 次のフレームで transform を更新して移動を発火させる。
        flyTile.style.transform = 'translate(0px, 0px) scale(1)';
        flyTile.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease`;

        // 飛行牌をアニメーションレイヤーへ載せ、
        // 元の牌はその瞬間に「配り済み」として画面から消す。
        animationLayer.appendChild(flyTile);
        sourceNode.classList.add('is-dealt');

        // レイアウト確定後の次フレームで透明度と移動先 transform を与え、
        // ブラウザに「今ここからあそこへ飛ぶ」アニメーションを実行させる。
        requestAnimationFrame(() => {
            flyTile.style.opacity = '1';

            // 移動量は「移動先座標 - 移動元座標」で求め、
            // 必要なら移動先サイズに合わせて scale も同時に調整する。
            flyTile.style.transform = `translate(${(targetRect.left - sourceRect.left).toFixed(2)}px, ${(targetRect.top - sourceRect.top).toFixed(2)}px) scale(${(targetRect.width / Math.max(sourceRect.width, 1)).toFixed(4)})`;
        });

        // 呼び出し元で完了後に remove() できるよう、
        // 生成した飛行牌要素を返す。
        return flyTile;
    }

    function createBreakdownStageElement(displayData, { compact = false, tileType = gameState.tileType } = {}) {
        const stage = document.createElement('div');
        stage.className = `breakdown-stage ${compact ? 'tutorial-breakdown-stage' : ''}`.trim();

        const bubble = document.createElement('div');
        bubble.className = 'breakdown-bubble';

        const tileSize = compact
            ? { width: 40, height: 56, fontSize: 30 }
            : { width: 48, height: 68, fontSize: 36 };

        const sourceRow = document.createElement('div');
        sourceRow.className = 'breakdown-source-row';
        displayData.sourceEntries.forEach((entry) => {
            if (entry.isWinning) {
                const gap = document.createElement('div');
                gap.className = 'breakdown-source-gap';
                sourceRow.appendChild(gap);
            }

            sourceRow.appendChild(createBreakdownTileElement(entry.tile, {
                sourceId: entry.id,
                winning: entry.isWinning,
                className: `breakdown-source-tile ${entry.isWinning ? 'breakdown-source-winning-tile' : ''}`,
                tileType,
                ...tileSize
            }));
        });

        const targetGroups = document.createElement('div');
        targetGroups.className = 'breakdown-target-groups';
        displayData.groups.forEach((group) => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'breakdown-target-group';
            groupDiv.dataset.groupId = group.id;

            const groupLabel = document.createElement('div');
            groupLabel.className = 'breakdown-target-group-label';
            groupLabel.textContent = group.label;

            const board = document.createElement('div');
            board.className = 'breakdown-target-board';
            group.tiles.forEach(() => {
                const slot = document.createElement('div');
                slot.className = 'breakdown-target-slot';
                board.appendChild(slot);
            });

            const row = document.createElement('div');
            row.className = 'breakdown-target-row';
            group.tiles.forEach((tileEntry) => {
                row.appendChild(createBreakdownTileElement(tileEntry.tile, {
                    sourceId: tileEntry.sourceId,
                    winning: tileEntry.isWinning,
                    className: 'breakdown-target-tile',
                    tileType,
                    ...tileSize
                }));
            });

            groupDiv.append(groupLabel, board, row);
            targetGroups.appendChild(groupDiv);
        });

        const animationLayer = document.createElement('div');
        animationLayer.className = 'breakdown-animation-layer';
        bubble.append(sourceRow, targetGroups);
        stage.append(bubble, animationLayer);
        return stage;
    }

    function applyBreakdownCentering(stage, { animated = true } = {}) {
        const bubble = stage?.querySelector('.breakdown-bubble');
        const targetGroups = stage?.querySelector('.breakdown-target-groups');
        if (!bubble || !targetGroups) return;

        const groupNodes = Array.from(targetGroups.children).filter((node) => node.classList?.contains('breakdown-target-group'));
        if (!groupNodes.length) return;

        const trackRect = targetGroups.getBoundingClientRect();
        const bubbleRect = bubble.getBoundingClientRect();
        if (!trackRect.width) return;

        const firstRect = groupNodes[0].getBoundingClientRect();
        const lastRect = groupNodes[groupNodes.length - 1].getBoundingClientRect();
        const contentLeft = firstRect.left - trackRect.left;
        const contentRight = lastRect.right - trackRect.left;
        const contentWidth = Math.max(0, contentRight - contentLeft);
        const shiftX = contentWidth < trackRect.width
            ? Math.max(0, ((trackRect.width - contentWidth) / 2) - contentLeft)
            : 0;

        stage.classList.toggle('breakdown-stage-centering', animated && Math.abs(shiftX) > 0.5);
        targetGroups.style.setProperty('--breakdown-center-shift-x', `${shiftX.toFixed(2)}px`);
        targetGroups.style.setProperty('--breakdown-center-shift-y', '0px');
    }

    function renderBreakdownControls(container, total, activeIndex) {
        if (total <= 1) return null;

        const controls = document.createElement('div');
        controls.className = 'breakdown-controls';

        const prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'breakdown-switch-btn';
        prevBtn.textContent = t('breakdownPrevWait');
        prevBtn.disabled = activeIndex <= 0;
        prevBtn.addEventListener('click', () => {
            playSound('select');
            breakdownAnimationState.currentIndex = Math.max(0, breakdownAnimationState.currentIndex - 1);
            displayHandBreakdown();
        });

        const counter = document.createElement('div');
        counter.className = 'breakdown-counter';
        counter.textContent = t('breakdownCounter', { current: activeIndex + 1, total });

        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'breakdown-switch-btn';
        nextBtn.textContent = t('breakdownNextWait');
        nextBtn.disabled = activeIndex >= total - 1;
        nextBtn.addEventListener('click', () => {
            playSound('select');
            breakdownAnimationState.currentIndex = Math.min(total - 1, breakdownAnimationState.currentIndex + 1);
            displayHandBreakdown();
        });

        controls.append(prevBtn, counter, nextBtn);
        container.appendChild(controls);
        return controls;
    }

    function playBreakdownTransition(stage, displayData, { autoReplay = true, replayHandler = null } = {}) {
        clearBreakdownAnimationTimers();
        const playToken = breakdownAnimationState.playToken;

        const bubble = stage.querySelector('.breakdown-bubble');
        const targetGroups = new Map(Array.from(stage.querySelectorAll('.breakdown-target-group')).map((node) => [node.dataset.groupId, node]));
        const animationLayer = stage.querySelector('.breakdown-animation-layer');
        const sourceTiles = new Map(Array.from(stage.querySelectorAll('.breakdown-source-tile[data-source-id]')).map((node) => [node.dataset.sourceId, node]));
        const targetTiles = new Map(Array.from(stage.querySelectorAll('.breakdown-target-tile[data-source-id]')).map((node) => [node.dataset.sourceId, node]));
        if (animationLayer) animationLayer.innerHTML = '';
        stage.classList.remove('breakdown-stage-complete', 'breakdown-stage-centering', 'breakdown-stage-replay-fadeout');
        if (bubble) bubble.style.minHeight = `${bubble.offsetHeight}px`;
        const targetGroupsTrack = stage.querySelector('.breakdown-target-groups');
        if (targetGroupsTrack) {
            targetGroupsTrack.style.setProperty('--breakdown-center-shift-x', '0px');
            targetGroupsTrack.style.setProperty('--breakdown-center-shift-y', '0px');
        }
        stage.querySelectorAll('.breakdown-source-tile').forEach((node) => node.classList.remove('is-dealt'));
        stage.querySelectorAll('.breakdown-target-tile').forEach((node) => node.classList.remove('is-arrived'));
        targetGroups.forEach((groupNode) => {
            groupNode.classList.remove('is-complete', 'is-revealed');
            groupNode.querySelectorAll('.breakdown-target-slot').forEach((slot) => slot.classList.remove('is-filled'));
        });
        requestAnimationFrame(() => {
            if (playToken !== breakdownAnimationState.playToken) return;
            applyBreakdownCentering(stage, { animated: false });
        });

        const shouldSkipAnimation = prefersReducedMotion();
        if (shouldSkipAnimation) {
            stage.querySelectorAll('.breakdown-source-tile').forEach((node) => node.classList.add('is-dealt'));
            stage.querySelectorAll('.breakdown-target-tile').forEach((node) => node.classList.add('is-arrived'));
            targetGroups.forEach((groupNode) => {
                groupNode.classList.add('is-revealed', 'is-complete');
                groupNode.querySelectorAll('.breakdown-target-slot').forEach((slot) => slot.classList.add('is-filled'));
            });
            stage.classList.add('breakdown-stage-complete');
            return;
        }

        const prepDelayMs = 1800;
        const groupRevealMs = 400;
        const groupGapMs = 150;
        const groupCycleMs = groupRevealMs + groupGapMs;
        const settleDelayMs = 250;
        const replayFadeOutMs = 320;
        const replayDelayMs = 2000;
        displayData.groups.forEach((group, index) => {
            const groupNode = targetGroups.get(group.id);
            if (!groupNode) return;

            const delay = prepDelayMs + (index * groupCycleMs);
            const timerId = setTimeout(() => {
                if (playToken !== breakdownAnimationState.playToken) return;
                groupNode.classList.add('is-revealed');
                const targetSlots = Array.from(groupNode.querySelectorAll('.breakdown-target-slot'));
                const flyTiles = group.tiles.map((tileEntry, tileIndex) => {
                    const sourceNode = sourceTiles.get(tileEntry.sourceId);
                    const targetNode = targetTiles.get(tileEntry.sourceId);
                    const slotNode = targetSlots[tileIndex];
                    if (slotNode) slotNode.classList.add('is-filled');
                    return animateBreakdownTileTransfer(animationLayer, sourceNode, targetNode, { duration: groupRevealMs });
                }).filter(Boolean);

                const completeTimer = setTimeout(() => {
                    if (playToken !== breakdownAnimationState.playToken) return;
                    group.tiles.forEach((tileEntry) => {
                        const targetNode = targetTiles.get(tileEntry.sourceId);
                        if (targetNode) targetNode.classList.add('is-arrived');
                    });
                    flyTiles.forEach((node) => node.remove());
                    groupNode.classList.add('is-complete');
                }, groupRevealMs);

                breakdownAnimationState.timerIds.push(completeTimer);
            }, delay);

            breakdownAnimationState.timerIds.push(timerId);
        });

        const finishTimer = setTimeout(() => {
            if (playToken !== breakdownAnimationState.playToken) return;
            stage.classList.add('breakdown-stage-complete');
            animationLayer.innerHTML = '';
        }, Math.max(0, prepDelayMs + (displayData.groups.length * groupCycleMs) - groupGapMs + settleDelayMs));

        breakdownAnimationState.timerIds.push(finishTimer);

        if (autoReplay) {
            const fadeOutTimer = setTimeout(() => {
                if (playToken !== breakdownAnimationState.playToken) return;
                if (!stage.isConnected) return;
                stage.classList.add('breakdown-stage-replay-fadeout');
            }, Math.max(0, prepDelayMs + (displayData.groups.length * groupCycleMs) - groupGapMs + settleDelayMs + replayDelayMs - replayFadeOutMs));

            breakdownAnimationState.timerIds.push(fadeOutTimer);

            const replayTimer = setTimeout(() => {
                if (playToken !== breakdownAnimationState.playToken) return;
                if (!stage.isConnected) return;

                if (typeof replayHandler === 'function') {
                    replayHandler();
                    return;
                }

                const resultSection = document.getElementById('result-section');
                if (!resultSection || resultSection.classList.contains('hidden')) return;

                displayHandBreakdown();
            }, Math.max(0, prepDelayMs + (displayData.groups.length * groupCycleMs) - groupGapMs + settleDelayMs) + replayDelayMs);

            breakdownAnimationState.timerIds.push(replayTimer);
        }
    }

function updateUILanguage() {
    clearBreakdownAnimationTimers();

    document.getElementById('header-title').textContent = t('gameTitle');
    document.getElementById('header-subtitle').textContent = t('gameSubtitle');

    document.getElementById('language-title').textContent = t('selectLanguage');
    document.getElementById('lang-ja-text').textContent = t('japanese');
    document.getElementById('lang-en-text').textContent = t('english');
    document.getElementById('lang-zh-text').textContent = t('chinese');

    document.getElementById('mode-title').textContent = t('selectMode');
    document.getElementById('casual-title').textContent = t('casualMode');
    document.getElementById('casual-desc').textContent = t('casualDesc');
    document.getElementById('story-title').textContent = t('storyMode');
    document.getElementById('story-desc').textContent = t('storyDesc');
    document.getElementById('survival-title').textContent = t('survivalMode');
    document.getElementById('survival-desc').textContent = t('survivalDesc');

    const tutorialBtnText = document.getElementById('tutorial-btn-text');
    if (tutorialBtnText) tutorialBtnText.textContent = t('tutorial');

    const modeBackText = document.getElementById('mode-back-text');
    if (modeBackText) modeBackText.textContent = t('back');

    document.getElementById('difficulty-title').textContent = t('selectDifficulty');
    document.getElementById('easy-title').textContent = t('easy');
    document.getElementById('easy-desc').textContent = t('easyDesc');
    document.getElementById('medium-title').textContent = t('medium');
    document.getElementById('medium-desc').textContent = t('mediumDesc');
    document.getElementById('hard-title').textContent = t('hard');
    document.getElementById('hard-desc').textContent = t('hardDesc');

    const difficultyBackText = document.getElementById('difficulty-back-text');
    if (difficultyBackText) difficultyBackText.textContent = t('back');

    document.getElementById('hand-title').textContent = t('handTitle');
    document.getElementById('select-waiting-title').textContent = t('selectWaiting');
    document.getElementById('submit-text').textContent = t('submitAnswer');
    document.getElementById('next-text').textContent = t('nextQuestion');

    const resultMenuText = document.getElementById('result-menu-text');
    if (resultMenuText) resultMenuText.textContent = t('backToMenu');

    const resultContinueText = document.getElementById('result-continue-text');
    const resultBackText = document.getElementById('result-back-text');
    const resultOkText = document.getElementById('result-ok-text');
    if (resultContinueText) resultContinueText.textContent = t('continue');
    if (resultBackText) resultBackText.textContent = t('giveUp');
    if (resultOkText) resultOkText.textContent = t('ok');

    const tutorialPrevText = document.getElementById('tutorial-prev-text');
    const tutorialNextText = document.getElementById('tutorial-next-text');
    const tutorialCloseText = document.getElementById('tutorial-close-text');
    if (tutorialPrevText) tutorialPrevText.textContent = t('tutorialPrev');
    if (tutorialNextText) tutorialNextText.textContent = t('tutorialNext');
    if (tutorialCloseText) tutorialCloseText.textContent = t('tutorialClose');
    updateSoundToggleButton();

    updateSelectionStatus();

    const resultOpen = !!document.getElementById('result-section') && !document.getElementById('result-section').classList.contains('hidden');
    document.getElementById('gameover-title').textContent = t('gameOver');
    const timeLeftLabel = document.getElementById('final-time-left-label');
    const livesLeftLabel = document.getElementById('final-lives-left-label');
    const modeLabel = document.getElementById('mode-label');
    if (modeLabel) modeLabel.textContent = t('modeLabel');
    const modeEl = document.getElementById('mode');
    if (modeEl) modeEl.textContent = getModeDisplayText(gameState.mode);

    const modeLabelGameOver = document.getElementById('mode-label-gameover');
    if (modeLabelGameOver) modeLabelGameOver.textContent = t('modeLabel');
    const modeElGameOver = document.getElementById('mode-gameover');
    if (modeElGameOver) modeElGameOver.textContent = getModeDisplayText(gameState.mode);

    const diffLabelVictory = document.getElementById('final-difficulty-label');
    if (diffLabelVictory) diffLabelVictory.textContent = `${t('difficulty')}:`;
    const diffLabelGameOver = document.getElementById('final-difficulty-label-gameover');
    if (diffLabelGameOver) diffLabelGameOver.textContent = `${t('difficulty')}:`;
    if (timeLeftLabel) timeLeftLabel.textContent = t('timeLeftLabel');
    if (livesLeftLabel) livesLeftLabel.textContent = t('livesLeftLabel');
    document.getElementById('final-score-label').textContent = t('finalScore');
    const scoreVersionLabel = document.getElementById('score-version-label');
    const scoreVersionValue = document.getElementById('score-version');
    if (scoreVersionLabel) scoreVersionLabel.textContent = `${t('scoreVersionLabel')}:`;
    if (scoreVersionValue) scoreVersionValue.textContent = t('scoreVersion');
    const scoreVersionLabelGameOver = document.getElementById('score-version-label-gameover');
    const scoreVersionValueGameOver = document.getElementById('score-version-gameover');
    if (scoreVersionLabelGameOver) scoreVersionLabelGameOver.textContent = `${t('scoreVersionLabel')}:`;
    if (scoreVersionValueGameOver) scoreVersionValueGameOver.textContent = t('scoreVersion');
    document.getElementById('play-again-victory').textContent = t('playAgain');
    document.getElementById('play-again-gameover').textContent = t('playAgain');
    document.getElementById('menu-victory').textContent = t('backToMenu');
    document.getElementById('menu-gameover').textContent = t('backToMenu');
    
    // フッター
    updateFooterMeta();

    // チュートリアル
    const tutorialTitle = document.getElementById('tutorial-title');
    if (tutorialTitle) tutorialTitle.textContent = t('tutorialTitle');
    renderTutorialPage();

    if (resultOpen) {
        displayCorrectAnswer();
        displayHandBreakdown();
    }
}

function updateFooterMeta() {
    try {
        const footerText = document.getElementById('footer-text');
        if (!footerText) return;

        const versionEl = document.getElementById('game-version');
        if (versionEl) {
            // Keep it optional: translations may omit this key in some forks.
            const version = t?.('gameVersion');
            versionEl.textContent = typeof version === 'string' ? version : '';
        }

        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());

        // Update only the leading label text node (before #game-version) without clobbering spans.
        const label = t?.('footer');
        const leading = `${typeof label === 'string' ? label : ''} `;

        let leadingTextNode = null;
        for (const node of footerText.childNodes) {
            if (node && node.nodeType === 3) {
                leadingTextNode = node;
                break;
            }
        }

        if (leadingTextNode) {
            leadingTextNode.textContent = leading;
        } else {
            footerText.insertBefore(document.createTextNode(leading), footerText.firstChild);
        }
    } catch {
        // Footer meta update failure is non-fatal.
    }
}

function resetGame() {
    // メニューへ戻る遷移では、勝利/敗北系の音が残らないように止める
    stopSound('victory');
    stopSound('gameover');
    stopSound('timeup');
    stopTimer();
    stopTimerSound();
    gameState.mode = null;
    gameState.difficulty = null;
    gameState.currentQuestion = 0;
    gameState.currentStage = 0;
    gameState.correctCount = 0;
    gameState.timeBonus = 0;
    gameState.hand = [];
    gameState.counts = {};
    gameState.waitingTiles = [];
    gameState.selectedTiles.clear();
    gameState.isBossStage = false;
    gameState.isAnswered = false;
    gameState.isPaused = false;
    gameState.lives = gameConfig.lives;
    gameState.timeExtensions = 0;
    gameState.lastExtensionStageGranted = 0;
    gameState.extendedTime = 0;
    clearTimeExtensionCooldown();
    gameState.timeLeft = 0;
    gameState.maxTime = 0;
    gameState.timerCuePlayed = false;
    document.body.classList.remove('boss-stage');
    document.body.classList.remove('in-game');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('gameover-screen').classList.add('hidden');

    // モーダル状態をクリーンアップ
    const resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.classList.add('hidden');
    hideResultActions();
    
    document.getElementById('mode-screen').classList.remove('hidden');
    updateTimeBonusDisplay();
    updateInteractionState();
}

function selectLanguage(lang) {
    if (isMenuNavigationLocked()) return;
    lockMenuNavigation(320);

    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t('gameTitle').replace(/🀄/g, '').trim();

    // 繁體中文（zh）は初期ロードで Google Fonts を遅延し、選択時に必要なフォントのみ読み込む
    if (currentLang === 'zh') {
        ensureGoogleFontsTcLoaded();
    }

    updateUILanguage();

    // 英語へ切り替えた場合、途中でも萬子が出ないようにする
    //（画像が漢字牌面のため、海外プレイヤーには判読しづらい）
    if (currentLang === 'en' && gameState?.tileType === 'man') {
        gameState.tileType = 'pin';
        const gameScreen = document.getElementById('game-screen');
        if (gameScreen && !gameScreen.classList.contains('hidden')) {
            try {
                renderHand();
                renderPossibleTiles();
            } catch {
                // 画面切替中の描画失敗は無視する
            }
        }
    }

    showExclusiveScreen('mode-screen', { fadeIn: true });
    clearKeyboardMenuHighlight();
}

function ensureGoogleFontsTcLoaded() {
    try {
        if (document.getElementById('google-fonts-tc')) return;

        const link = document.createElement('link');
        link.id = 'google-fonts-tc';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap';
        link.media = 'print';
        link.onload = function () {
            this.media = 'all';
        };
        document.head.appendChild(link);
    } catch {
        // フォント最適化失敗は致命的ではないため無視する
    }
}

function backToLanguageSelection() {
    if (isMenuNavigationLocked()) return;
    lockMenuNavigation(220);

    showExclusiveScreen('language-screen', { fadeIn: true });
    clearKeyboardMenuHighlight();
}

function backToModeSelection() {
    if (isMenuNavigationLocked()) return;
    lockMenuNavigation(220);

    // 途中まで選んだ状態を破棄する
    gameState.mode = null;
    gameState.difficulty = null;

    showExclusiveScreen('mode-screen', { fadeIn: true });
    clearKeyboardMenuHighlight();
}

function showPauseOverlay() {
    let overlay = getElementByIdCached('pause-overlay');
    if (!overlay) {
        const overlayHost = getElementByIdCached('game-screen') || document.body;
        overlay = document.createElement('div');
        overlay.id = 'pause-overlay';
        overlay.className = 'pause-overlay';
        overlay.innerHTML = `
            <div class="pause-content">
                <div class="text-6xl font-black mb-6">${t('paused')}</div>
                <div class="text-2xl opacity-80">${t('tapToResume')}</div>
            </div>
        `;
        overlay.addEventListener('click', resumeTimer);
        overlayHost.appendChild(overlay);
    }
    overlay.classList.remove('hidden');
    overlay.classList.add('fade-in');
}

function hidePauseOverlay() {
    const overlay = getElementByIdCached('pause-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 初期表示はプリロード画面のみにする
    const preloadScreen = showExclusiveScreen('preload-screen', { fadeIn: true });
    const languageScreen = getElementByIdCached('language-screen');

    applyLowPowerClass();
    applyIosTextureCompatibilityClass();
    // prefers-reduced-motion の変更にも追随
    try {
        const m = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        if (m && typeof m.addEventListener === 'function') {
            m.addEventListener('change', applyLowPowerClass);
        }
    } catch {}

    scheduleApplyUiScale();
    window.addEventListener('resize', scheduleApplyUiScale);
    window.visualViewport?.addEventListener('resize', scheduleApplyUiScale);

    // 初回描画を優先してから、進捗表示付きでアセットをプリロード
    const runAfterFirstPaint = (cb) => {
        requestAnimationFrame(() => requestAnimationFrame(cb));
    };

    runAfterFirstPaint(() => {
        const progressFill = getElementByIdCached('preload-progress-fill');
        const progressText = getElementByIdCached('preload-progress-text');
        preloadAssets({
            onProgress: ({ loaded, total }) => {
                const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
                if (progressFill) progressFill.style.width = `${pct}%`;
                if (progressText) progressText.textContent = `${pct}% (${loaded}/${total})`;
            }
        }).then(() => {
            if (languageScreen) showExclusiveScreen('language-screen', { fadeIn: true });
            clearKeyboardMenuHighlight();
        });
    });

    // Footer meta (year/version) should be correct even before language selection.
    updateFooterMeta();
    loadAudioPreference();
    updateSoundToggleButton();

    // 先に pointer/touch で音声状態を整えておくと、その直後の click で効果音を鳴らしやすい。
    document.addEventListener('pointerdown', handleAudioInteraction, { capture: true });
    document.addEventListener('touchstart', handleAudioInteraction, { capture: true, passive: true });

    const langJaBtn = getElementByIdCached('lang-ja');
    if (langJaBtn) langJaBtn.addEventListener('click', () => { playSound('select'); selectLanguage('ja'); });

    const langEnBtn = getElementByIdCached('lang-en');
    if (langEnBtn) langEnBtn.addEventListener('click', () => { playSound('select'); selectLanguage('en'); });

    const langZhBtn = getElementByIdCached('lang-zh');
    if (langZhBtn) langZhBtn.addEventListener('click', () => { playSound('select'); selectLanguage('zh'); });

    const casualBtn = getElementByIdCached('casual-btn');
    if (casualBtn) casualBtn.addEventListener('click', () => { playSound('select'); startGameMode('casual'); });

    const storyBtn = getElementByIdCached('story-btn');
    if (storyBtn) storyBtn.addEventListener('click', () => { playSound('select'); startGameMode('story'); });

    const survivalBtn = getElementByIdCached('survival-btn');
    if (survivalBtn) survivalBtn.addEventListener('click', () => { playSound('select'); startGameMode('survival'); });

    const modeBackBtn = getElementByIdCached('mode-back-btn');
    if (modeBackBtn) modeBackBtn.addEventListener('click', () => { playSound('select'); backToLanguageSelection(); });

    const difficultyBackBtn = getElementByIdCached('difficulty-back-btn');
    if (difficultyBackBtn) difficultyBackBtn.addEventListener('click', () => { playSound('select'); backToModeSelection(); });

    const tutorialBtn = getElementByIdCached('tutorial-btn');
    const tutorialScreen = getElementByIdCached('tutorial-screen');
    const tutorialPrevBtn = getElementByIdCached('tutorial-prev-btn');
    const tutorialNextBtn = getElementByIdCached('tutorial-next-btn');
    const tutorialCloseBtn = getElementByIdCached('tutorial-close-btn');
    const soundToggleBtn = getElementByIdCached('sound-toggle-btn');

    function openTutorial() {
        if (!tutorialScreen) return;
        playSound('select');
        tutorialPageIndex = 0;
        tutorialRealQuestionStep = 0;
        tutorialBreakdownIndex = 0;
        tutorialRealQuestionData = null;
        tutorialScreen.classList.remove('hidden');
        tutorialScreen.classList.add('fade-in');
        tutorialScreen.setAttribute('aria-hidden', 'false');
        updateUILanguage();
        renderTutorialPage();
    }

    function closeTutorial() {
        if (!tutorialScreen) return;
        playSound('select');
        tutorialScreen.classList.add('hidden');
        tutorialScreen.setAttribute('aria-hidden', 'true');
    }

    if (tutorialBtn) tutorialBtn.addEventListener('click', openTutorial);

    if (tutorialScreen) {
        tutorialScreen.addEventListener('click', (e) => {
            // モーダル外（背景）クリックで閉じる
            if (e.target === tutorialScreen) {
                closeTutorial();
            }
        });
    }

    if (tutorialPrevBtn) {
        tutorialPrevBtn.addEventListener('click', () => {
            playSound('select');
            tutorialPageIndex = Math.max(0, tutorialPageIndex - 1);
            renderTutorialPage();
        });
    }

    if (tutorialNextBtn) {
        tutorialNextBtn.addEventListener('click', () => {
            const pages = getTutorialPages();
            const last = pages.length - 1;
            if (tutorialPageIndex >= last) {
                closeTutorial();
                return;
            }
            playSound('select');
            tutorialPageIndex = Math.min(last, tutorialPageIndex + 1);
            renderTutorialPage();
        });
    }

    if (tutorialCloseBtn) tutorialCloseBtn.addEventListener('click', closeTutorial);
    if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleAudioMute);
    const easyBtn = getElementByIdCached('easy');
    if (easyBtn) easyBtn.addEventListener('click', () => { playSound('select'); startGameWithDifficulty('easy'); });

    const mediumBtn = getElementByIdCached('medium');
    if (mediumBtn) mediumBtn.addEventListener('click', () => { playSound('select'); startGameWithDifficulty('medium'); });

    const hardBtn = getElementByIdCached('hard');
    if (hardBtn) hardBtn.addEventListener('click', () => { playSound('select'); startGameWithDifficulty('hard'); });

    const submitBtn = getElementByIdCached('submit-btn');
    if (submitBtn) submitBtn.addEventListener('click', () => { playSound('select'); checkAnswer(); });

    const nextBtn = getElementByIdCached('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => { playSound('select'); startNewQuestion(); });

    // 勝利/ゲームオーバー画面のボタン
    const playAgainVictory = getElementByIdCached('play-again-victory');
    const menuVictory = getElementByIdCached('menu-victory');
    const playAgainGameOver = getElementByIdCached('play-again-gameover');
    const menuGameOver = getElementByIdCached('menu-gameover');
    if (playAgainVictory) playAgainVictory.addEventListener('click', () => { playSound('select'); restartCurrentRun(); });
    if (menuVictory) menuVictory.addEventListener('click', () => { playSound('select'); backToMenu(); });
    if (playAgainGameOver) playAgainGameOver.addEventListener('click', () => { playSound('select'); restartCurrentRun(); });
    if (menuGameOver) menuGameOver.addEventListener('click', () => { playSound('select'); backToMenu(); });
    
    // ウィンドウのフォーカス喪失/復帰を監視
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // フォーカス喪失/最小化
            pauseTimer();
            // バックグラウンド中は WebAudio も止め、モバイルでの復帰不整合を減らす。
            suspendWebAudioContextIfRunning();
        } else {
            // フォーカス復帰
            resumeWebAudioContextIfNeeded();
            if (gameState.isPaused && gameState.timerInterval) {
                // 自動再開しない（ユーザーのクリック待ち）
            }
        }
    });
    
    // フォーカス喪失（別アプリへ切替）
    window.addEventListener('blur', () => {
        pauseTimer();
        suspendWebAudioContextIfRunning();
    });
    
    // フォーカス復帰
    window.addEventListener('focus', () => {
        resumeWebAudioContextIfNeeded();
        // 自動再開しない（一時停止オーバーレイのクリック待ち）
    });

    window.addEventListener('pagehide', () => {
        pauseTimer();
        suspendWebAudioContextIfRunning();
    });

    window.addEventListener('pageshow', () => {
        scheduleApplyUiScale();
        resumeWebAudioContextIfNeeded();
        clearKeyboardMenuHighlight();
    });

    document.addEventListener('keydown', handleGlobalKeyboardNavigation);
});
 