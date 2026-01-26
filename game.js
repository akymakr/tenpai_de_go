// 聴牌で GO! - ゲームロジック

const translations = {
    ja: {
        gameTitle: "🀄 聴牌で GO! 🀄",
        gameSubtitle: "麻雀 待ち当てトレーニング",
        selectMode: "モードを選択してください",
        casualMode: "カジュアル",
        casualDesc: "全 9 問 + BOSS ステージ\n各問 45 秒 / 3 ライフ制",
        storyMode: "ストーリー",
        storyDesc: "初級 → 中級 → 上級の各 3 問 + BOSS\n各問 30 秒 / 3ライフ制",
        survivalMode: "サバイバル",
        survivalDesc: "60 秒からスタート\n正解でタイム回復 / ライフなし",
        selectDifficulty: "難易度を選択してください",
        easy: "初級",
        easyDesc: "最大 3 面張まで",
        medium: "中級",
        mediumDesc: "最大 6 面張まで",
        hard: "上級",
        hardDesc: "最大 9 面張まで",
        handTitle: "🎴 手牌 🎴",
        selectWaiting: "🎯 待ち牌をすべて選んでください 🎯",
        submitAnswer: "✨ 回答する ✨",
        correct: "🎉 正解！ナイスアガリ！ 🎉",
        incorrect: "❌ 不正解です...",
        timeUp: "⏰ 時間切れ！",
        correctAnswer: "💡 正解の待ち：",
        nextQuestion: "➡️ 次の問題へ",
        question: "第",
        bossStage: "🔥 BOSS ステージ 🔥",
        bossChallenge: "貯めたタイムで挑戦！",
        bossComplete: "BOSS 撃破！クリアおめでとう！",
        victory: "🎊 完全制覇！ 🎊",
        gameOver: "ゲームオーバー",
        finalQuestions: "到達問題数：",
        finalScore: "合計正解数：",
        timeLeftLabel: "残り時間：",
        answerTimeLabel: "解答時間：",
        secondsUnit: "秒",
        livesLeftLabel: "残りライフ：",
        modeLabel: "モード：",
        playAgain: "もう一度遊ぶ",
        backToMenu: "メニューに戻る",
        back: "戻る",
        footer: "聴牌で GO!",
        selectLanguage: "言語を選択 / Select Language",
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
        timeExtension: "⏱️ 長考（タイム延長）",
        timeExtensionDesc: "+30 秒",
        extensionsLeft: "あと",
        ok: "OK",

        tutorial: "チュートリアル",
        tutorialTitle: "遊び方",
        tutorialPrev: "戻る",
        tutorialNext: "次へ",
        tutorialClose: "閉じる",
        tutorialFinish: "完了",

        tutorialP1Title: "ゲームの目的",
        tutorialP1Body: "表示された聴牌（テンパイ）の手牌から、アガリ牌（待ち牌）をすべて見つけ出しましょう。\n\nポイント：\n・待ちは複数ある場合があります\n・手牌で 4 枚使っている牌は、待ち牌にはなりません",

        tutorialP2Title: "操作方法",
        tutorialP2Body: "1) 画面下の 1 〜 9 のボタンから、待ち牌をすべて選択\n2) 「回答する」ボタンで判定\n\nヒント：\n・もう一度タップすると選択解除できます\n・時間切れになっても、牌を一枚でも選択していれば自動的に提出されます",

        tutorialP3Title: "難易度について",
        tutorialP3Body: "初級：最大 3 面張\n中級：最大 6 面張\n上級：最大 9 面張\n\nストーリーモードでは、ステージが進むごとに難易度が上がります。",

        tutorialP4Title: "長考（タイム延長）",
        tutorialP4Body: "「長考」ボタンで時間を増やせます。\n・1 回につき +30 秒\n・残り時間が少なくなると迷わず使ってしまいましょう\n\n※ BOSS ステージでは使用できませんが、残った回数分が BOSS ステージの制限時間に加算されます。",

        tutorialP5Title: "BOSS ステージ",
        tutorialP5Body: "ステージ 10 は BOSS 戦です。\nこれまでのステージで余った「残り時間の合計」が制限時間になります。正解すればクリアです！"
    },
    en: {
        gameTitle: "🀄 Tenpai de GO! 🀄",
        gameSubtitle: "Mahjong Waiting Tile Trainer",
        selectMode: "Select Mode",
        casualMode: "Casual",
        casualDesc: "9 Questions + BOSS\n45s per tile / 3 Lives",
        storyMode: "Story",
        storyDesc: "Easy → Med → Hard (3 levels each) + BOSS\n30s per tile / 3 Lives",
        survivalMode: "Survival",
        survivalDesc: "Start with 60s\nCorrect answers restore time / No lives",
        selectDifficulty: "Select Difficulty",
        easy: "Easy",
        easyDesc: "Up to 3-way waits",
        medium: "Medium",
        mediumDesc: "Up to 6-way waits",
        hard: "Hard",
        hardDesc: "Up to 9-way waits",
        handTitle: "🎴 Your Hand 🎴",
        selectWaiting: "🎯 Select ALL Winning Tiles (Waits) 🎯",
        submitAnswer: "✨ Submit ✨",
        correct: "🎉 Correct! Nice Hand! 🎉",
        incorrect: "❌ Wrong Answer...",
        timeUp: "⏰ Time's Up!",
        correctAnswer: "💡 Correct Waits:",
        nextQuestion: "➡️ Next Question",
        question: "Stage",
        bossStage: "🔥 BOSS STAGE 🔥",
        bossChallenge: "Use your saved time!",
        bossComplete: "BOSS Defeated! Congratulations!",
        victory: "🎊 ALL CLEARED! 🎊",
        gameOver: "GAME OVER",
        finalQuestions: "Stages Completed:",
        finalScore: "Total Correct:",
        timeLeftLabel: "Time Left:",
        answerTimeLabel: "Answer Time:",
        secondsUnit: "s",
        livesLeftLabel: "Lives:",
        modeLabel: "Mode:",
        playAgain: "Play Again",
        backToMenu: "Main Menu",
        back: "Back",
        footer: "Tenpai de GO!",
        selectLanguage: "Select Language",
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
        timeExtension: "⏱️ Think Time (+30s)",
        timeExtensionDesc: "+30s",
        extensionsLeft: "Left:",
        ok: "OK",

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

        tutorialP3Title: "Difficulty Levels",
        tutorialP3Body: "Easy: Up to 3-way waits.\nMedium: Up to 6-way waits.\nHard: Up to 9-way waits.\n\nIn Story Mode, the difficulty increases every 3 stages.",

        tutorialP4Title: "Think Time (+30s)",
        tutorialP4Body: "Use 'Think Time' to extend 30 seconds to your current stage.\n- Use it when the timer turns red.\n\nNote: Cannot be used during the BOSS Stage, but unused charges will be converted into extra time for the BOSS battle.",

        tutorialP5Title: "The BOSS Stage",
        tutorialP5Body: "Stage 10 is the BOSS stage.\nYour time limit is the sum of all remaining time from previous stages. If you answer correctly, you win this game!"
    },
    zh: {
        gameTitle: "🀄 聽牌 GO! 🀄",
        gameSubtitle: "麻雀聽牌強化訓練",
        selectMode: "請選擇遊戲模式",
        casualMode: "休閒模式",
        casualDesc: "全 9 題 + BOSS關卡\n每題 45 秒 / 3 條生命",
        storyMode: "闖關模式",
        storyDesc: "初級 → 中級 → 高級各 3 題 + BOSS\n每題 30 秒 / 3 條生命",
        survivalMode: "生存模式",
        survivalDesc: "60 秒開始\n答對可回復時間 / 無生命限制",
        selectDifficulty: "請選擇難度",
        easy: "初級",
        easyDesc: "最多 3 面聽",
        medium: "中級",
        mediumDesc: "最多 6 面聽",
        hard: "高級",
        hardDesc: "最多 9 面聽",
        handTitle: "🎴 目前手牌 🎴",
        selectWaiting: "🎯 請選出所有聽的牌 🎯",
        submitAnswer: "✨ 確認答案 ✨",
        correct: "🎉 正確！高手！ 🎉",
        incorrect: "❌ 答錯了...",
        timeUp: "⏰ 時間到！",
        correctAnswer: "💡 正確聽牌：",
        nextQuestion: "➡️ 下一題",
        question: "第",
        bossStage: "🔥 BOSS 關卡 🔥",
        bossChallenge: "使用累積時間挑戰！",
        bossComplete: "擊敗 BOSS！恭喜通關！",
        victory: "🎊 全部通關！ 🎊",
        gameOver: "遊戲結束",
        finalQuestions: "到達題目數：",
        finalScore: "總正確數：",
        timeLeftLabel: "剩餘時間：",
        answerTimeLabel: "答題時間：",
        secondsUnit: "秒",
        livesLeftLabel: "剩餘生命：",
        modeLabel: "模式：",
        playAgain: "再玩一次",
        backToMenu: "返回選單",
        back: "返回",
        footer: "聽牌 GO!",
        selectLanguage: "選擇語言 / Select Language",
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
        timeExtension: "⏱️ 長考（增加時間）",
        timeExtensionDesc: "+30 秒",
        extensionsLeft: "剩餘",
        ok: "確認",

        tutorial: "教學",
        tutorialTitle: "遊戲玩法",
        tutorialPrev: "上一頁",
        tutorialNext: "下一頁",
        tutorialClose: "關閉",
        tutorialFinish: "完成",

        tutorialP1Title: "遊戲目標",
        tutorialP1Body: "根據顯示的手牌（聽牌狀態），找出所有可以食胡的「聽牌」。\n\n注意點：\n・聽牌可能不只一張（多面聽）\n・手牌中已經使用了 4 張的牌，不能作為聽牌",

        tutorialP2Title: "操作方式",
        tutorialP2Body: "1) 點擊下方 1 ～ 9 的按鈕，選出所有聽牌\n2) 點擊「確認答案」進行判定\n\n提示：\n・再次點擊已選中的牌可取消選擇\n・時間結束時，若已有選牌會自動提交",

        tutorialP3Title: "難度說明",
        tutorialP3Body: "初級：最多 3 面聽\n中級：最多 6 面聽\n高級：最多 9 面聽\n\n在「闖關模式」中，難度會隨著關卡進度提升。",

        tutorialP4Title: "長考（增加時間）",
        tutorialP4Body: "可使用「長考」按鈕。\n・每次使用可增加 30 秒\n・時間快結束時，按鈕會閃爍提示\n\n※ BOSS 關卡不能使用，但剩餘次數會自動轉化為 BOSS 關卡的額外時間。",

        tutorialP5Title: "BOSS 關卡",
        tutorialP5Body: "第 10 關為 BOSS 關卡。\n你的挑戰時間等於之前關卡「節省下來的總時間」。答對即可通關！"
    }
};

let tutorialPageIndex = 0;

function getTutorialPages() {
    return [
        { title: t('tutorialP1Title'), body: t('tutorialP1Body') },
        { title: t('tutorialP2Title'), body: t('tutorialP2Body') },
        { title: t('tutorialP3Title'), body: t('tutorialP3Body') },
        { title: t('tutorialP4Title'), body: t('tutorialP4Body') },
        { title: t('tutorialP5Title'), body: t('tutorialP5Body') }
    ];
}

function renderTutorialPage() {
    const screen = document.getElementById('tutorial-screen');
    if (!screen || screen.classList.contains('hidden')) return;

    const pages = getTutorialPages();
    const total = pages.length;
    const idx = Math.min(Math.max(0, tutorialPageIndex), total - 1);
    tutorialPageIndex = idx;

    const indicator = document.getElementById('tutorial-page-indicator');
    const titleEl = document.getElementById('tutorial-page-title');
    const bodyEl = document.getElementById('tutorial-page-body');
    const prevBtn = document.getElementById('tutorial-prev-btn');
    const nextBtn = document.getElementById('tutorial-next-btn');
    const closeBtn = document.getElementById('tutorial-close-btn');
    const prevText = document.getElementById('tutorial-prev-text');
    const nextText = document.getElementById('tutorial-next-text');
    const closeText = document.getElementById('tutorial-close-text');

    if (indicator) indicator.textContent = `${idx + 1}/${total}`;
    if (titleEl) titleEl.textContent = pages[idx].title || '';
    if (bodyEl) bodyEl.textContent = pages[idx].body || '';

    if (prevText) prevText.textContent = t('tutorialPrev');
    if (nextText) nextText.textContent = (idx === total - 1) ? t('tutorialFinish') : t('tutorialNext');
    if (closeText) closeText.textContent = t('tutorialClose');

    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = false;
    if (closeBtn) closeBtn.disabled = false;
}

let currentLang = 'ja';
const t = (key) => translations[currentLang][key] || key;

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
    const overlay = document.getElementById('stage-intro');
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
    const overlay = document.getElementById('stage-intro');
    const titleEl = document.getElementById('stage-intro-title');
    const subtitleEl = document.getElementById('stage-intro-subtitle');
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
    let overlay = document.getElementById('scale-debug');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'scale-debug';
    overlay.className = 'scale-debug';
    document.body.appendChild(overlay);
    return overlay;
}

function applyUiScale() {
    const stage = document.getElementById('scale-stage');
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

    document.documentElement.style.setProperty('--ui-scale', clamped.toFixed(4));

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

function hideResultActions() {
    const actions = document.getElementById('result-actions');
    if (!actions) return;

    actions.classList.add('hidden');

    const title = document.getElementById('result-actions-title');
    const body = document.getElementById('result-actions-body');
    if (title) title.textContent = '';
    if (body) body.textContent = '';

    const continueBtn = document.getElementById('result-continue-btn');
    const backBtn = document.getElementById('result-back-btn');
    const okBtn = document.getElementById('result-ok-btn');
    if (continueBtn) continueBtn.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');
    if (okBtn) okBtn.classList.add('hidden');
}

let pendingOkAction = null;

function showResultOkAction({ titleText, titleClassName, bodyText = '', okText = null, onOk }) {
    const actions = document.getElementById('result-actions');
    if (!actions) return;

    const title = document.getElementById('result-actions-title');
    const body = document.getElementById('result-actions-body');
    const continueBtn = document.getElementById('result-continue-btn');
    const backBtn = document.getElementById('result-back-btn');
    const okBtn = document.getElementById('result-ok-btn');
    const okTextSpan = document.getElementById('result-ok-text');

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
    const actions = document.getElementById('result-actions');
    if (!actions) return;

    const title = document.getElementById('result-actions-title');
    const body = document.getElementById('result-actions-body');
    if (title) {
        title.textContent = t('loseLife');
        title.className = 'text-3xl font-black mb-3 text-yellow-300 text-center';
    }
    if (body) {
        const lives = Math.max(0, gameState.lives);
        const maxLives = Math.max(0, gameState.maxLives || 3);

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

    const continueBtn = document.getElementById('result-continue-btn');
    const backBtn = document.getElementById('result-back-btn');
    const okBtn = document.getElementById('result-ok-btn');
    const continueText = document.getElementById('result-continue-text');
    const backText = document.getElementById('result-back-text');
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
            const pending = document.getElementById('result-pending-loss-heart');
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

// アセット（assets/）配下を事前にすべてプリロードして、プレイ中の引っかかりを防ぐ
//（ブラウザ上では実行時にディレクトリ一覧を取得できないため、静的リストにする）
const ASSET_FILES = [
    'Back.png', 'Blank.png', 'Chun.png', 'continue.mp3', 'correct.mp3',
    'Front.png', 'gameover.mp3', 'Haku.png', 'Hatsu.png', 'incorrect.mp3',
    'Man1.png', 'Man2.png', 'Man3.png', 'Man4.png', 'Man5-Dora.png', 'Man5.png', 'Man6.png', 'Man7.png', 'Man8.png', 'Man9.png',
    'Nan.png', 'Pei.png',
    'Pin1.png', 'Pin2.png', 'Pin3.png', 'Pin4.png', 'Pin5-Dora.png', 'Pin5.png', 'Pin6.png', 'Pin7.png', 'Pin8.png', 'Pin9.png',
    'select.mp3', 'Shaa.png',
    'Sou1.png', 'Sou2.png', 'Sou3.png', 'Sou4.png', 'Sou5-Dora.png', 'Sou5.png', 'Sou6.png', 'Sou7.png', 'Sou8.png', 'Sou9.png',
    'tap.mp3', 'timer.mp3', 'timeup.mp3', 'Ton.png', 'victory.mp3'
];

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
    });
}

async function preloadAssets({ onProgress } = {}) {
    const urls = ASSET_FILES.map((f) => `assets/${f}`);
    const total = urls.length;
    let loaded = 0;

    const report = () => {
        if (typeof onProgress === 'function') onProgress({ loaded, total });
    };
    report();

    // 画面操作の反応を落とさない程度の並列数に抑える
    const concurrency = 6;
    const queue = urls.slice();

    const worker = async () => {
        while (queue.length) {
            const url = queue.shift();
            try {
                if (url.endsWith('.png')) {
                    await preloadImage(url);
                } else {
                    // 取得してブラウザキャッシュを温める
                    const res = await fetch(url, { cache: 'force-cache' });
                    if (res && res.ok) {
                        await res.blob();
                    }
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
    // 勝利/敗北系の音は重ねない（混ざりを防ぐ）
    select: { src: 'assets/select.mp3', pool: 4, allowOverlap: true, maxExtra: 6 },
    tap: { src: 'assets/tap.mp3', pool: 6, allowOverlap: true, maxExtra: 8 },
    correct: { src: 'assets/correct.mp3', pool: 2, allowOverlap: true, maxExtra: 2 },
    incorrect: { src: 'assets/incorrect.mp3', pool: 2, allowOverlap: true, maxExtra: 2 },
    continue: { src: 'assets/continue.mp3', pool: 2, allowOverlap: true, maxExtra: 2 },
    gameover: { src: 'assets/gameover.mp3', pool: 2, allowOverlap: false },
    victory: { src: 'assets/victory.mp3', pool: 2, allowOverlap: false },
    timeup: { src: 'assets/timeup.mp3', pool: 2, allowOverlap: false }
};

const soundPools = new Map();
const extraSoundInstances = new Map();

let audioUnlocked = false;

function unlockAudioOnce() {
    if (audioUnlocked) return;

    // 仕様：iOS（Safari/Chrome）はユーザー操作起点でない音声再生をブロックする
    // 最初の操作時に全オーディオを空再生して解除し、タイマー駆動の音も鳴るようにする
    const audiosToPrime = [];
    for (const pool of soundPools.values()) {
        for (const audio of pool) audiosToPrime.push(audio);
    }
    if (timerAudio) audiosToPrime.push(timerAudio);

    let anySucceeded = false;

    for (const audio of audiosToPrime) {
        try {
            const originalVolume = audio.volume;
            audio.volume = 0;
            audio.currentTime = 0;
            const p = audio.play();

            // すぐ停止/リセットする。ここでは「ユーザー操作内で play() が成功する」ことだけが必要
            audio.pause();
            audio.currentTime = 0;
            audio.volume = originalVolume;

            if (p && typeof p.then === 'function') {
                anySucceeded = true;
                // 未処理の Promise rejection を避ける
                p.catch(() => {});
            } else {
                anySucceeded = true;
            }
        } catch {
            // 無視
        }
    }

    if (anySucceeded) audioUnlocked = true;
}

function initSounds() {
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
}

function playSound(name) {
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
        audio.currentTime = 0;
        const p = audio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
        // 無視
    }
}

// カウントダウン音（assets/timer.mp3）は「残り 5 秒以内でループ再生」する専用音
let timerAudio = null;

function initTimerSound() {
    timerAudio = new Audio('assets/timer.mp3');
    timerAudio.preload = 'auto';
    timerAudio.loop = true;
}

function startTimerSound() {
    if (!timerAudio) return;
    if (!timerAudio.paused) return;
    try {
        const p = timerAudio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
        // 無視
    }
}

function pauseTimerSound() {
    if (!timerAudio) return;
    if (!timerAudio.paused) timerAudio.pause();
}

function stopTimerSound() {
    if (!timerAudio) return;
    timerAudio.pause();
    timerAudio.currentTime = 0;
}

function createTileImage(tileInfo) {
    const img = document.createElement('img');
    img.src = tileInfo.imgSrc;
    img.alt = tileInfo.name;
    img.draggable = false;
    img.className = 'tile-img';
    return img;
}

function createInlineHandTile(tileInfo) {
    const tile = document.createElement('span');
    tile.className = 'hand-tile tile-inline-hand rounded-lg tile-shadow';
    tile.title = tileInfo.name;
    tile.appendChild(createTileImage(tileInfo));
    return tile;
}

const gameState = {
    mode: null, difficulty: null, currentQuestion: 0, currentStage: 0, correctCount: 0,
    hand: [], counts: {}, waitingTiles: [], selectedTiles: new Set(), tileType: 'pin',
    timeLeft: 0, maxTime: 0, timeBonus: 0, timerInterval: null, isBossStage: false, isAnswered: false,
    lives: 3, maxLives: 3, isPaused: false,
    timeExtensions: 3, maxTimeExtensions: 3, extendedTime: 0, // 長考（タイム延長）の仕組み
    timerCuePlayed: false
};

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
        if (attempts <= 4) return count === 3;
        if (attempts <= 8) return count >= 2 && count <= 3;
        return count >= 1 && count <= 3;
    } else if (difficulty === 'medium') {
        if (attempts <= 16) return count === 6;
        if (attempts <= 32) return count >= 5 && count <= 6;
        if (attempts <= 64) return count >= 4 && count <= 6;
        if (attempts <= 256) return count >= 3 && count <= 6;
        if (attempts <= 1024) return count >= 2 && count <= 6;
        return count >= 1 && count <= 6;
    } else { // 上級
        if (attempts <= 16) return count === 9;
        if (attempts <= 32) return count >= 8 && count <= 9;
        if (attempts <= 64) return count >= 7 && count <= 9;
        if (attempts <= 256) return count >= 6 && count <= 9;
        if (attempts <= 1024) return count >= 5 && count <= 9;
        if (attempts <= 4096) return count >= 4 && count <= 9;
        if (attempts <= 8192) return count >= 3 && count <= 9;
        if (attempts <= 16384) return count >= 2 && count <= 9;
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
    const isVisible = !document.hidden && document.visibilityState === 'visible';
    const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
    if (!isVisible || !hasFocus) {
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
    hidePauseOverlay();
    updateInteractionState();
}

function pauseTimer() {
    if (!gameState.timerInterval || gameState.isAnswered) return;
    gameState.isPaused = true;
    pauseTimerSound();
    showPauseOverlay();
    updateInteractionState();
}

function resumeTimer() {
    if (!gameState.timerInterval) return;
    gameState.isPaused = false;
    hidePauseOverlay();
    if (gameState.timerCuePlayed && gameState.timeLeft <= 5 && !gameState.isAnswered) {
        startTimerSound();
    }
    updateInteractionState();
}

function isActiveQuestion() {
    return !!gameState.timerInterval && !gameState.isAnswered && !gameState.isPaused;
}

function updateInteractionState() {
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const possibleTiles = document.getElementById('possible-tiles');
    const resultSection = document.getElementById('result-section');

    const active = isActiveQuestion();
    const hasSelection = gameState.selectedTiles && gameState.selectedTiles.size > 0;

    if (submitBtn) {
        submitBtn.disabled = !active || !hasSelection;
    }

    if (nextBtn) {
        const nextVisible = !nextBtn.classList.contains('hidden');
        nextBtn.disabled = !nextVisible || !gameState.isAnswered || gameState.isBossStage;
    }

    if (possibleTiles) {
        possibleTiles.style.pointerEvents = active ? '' : 'none';
    }

    updateTimeExtensionButton();
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer-display');
    const timerBar = document.getElementById('timer-bar');
    if (!timerElement || !timerBar) return;
    
    // 現在ステージの maxTime を使って割合を計算
    const percentage = (gameState.timeLeft / gameState.maxTime) * 100;
    timerElement.textContent = gameState.timeLeft;
    
    // 幅の変化を滑らかに見せる
    timerBar.style.transition = 'width 1s linear';
    timerBar.style.width = `${Math.max(0, percentage)}%`;
    
    timerElement.className = 'timer-value';
    timerBar.className = 'timer-bar';
    
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

function getMaxTime() {
    if (gameState.mode === 'casual') return 45;
    if (gameState.mode === 'story') return 30;
    if (gameState.mode === 'survival') return 60;
    return 0;
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
    gameState.lives = 3;
    gameState.timeExtensions = gameState.maxTimeExtensions;
    gameState.extendedTime = 0;
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
    gameState.mode = mode;
    gameState.lives = 3; // ライフをリセット
    document.getElementById('mode-screen').classList.add('hidden');
    if (mode === 'story') {
        gameState.difficulty = 'easy';
        gameState.currentQuestion = 0;
        gameState.currentStage = 0;
        gameState.correctCount = 0;
        gameState.timeBonus = 0;
        gameState.timeExtensions = gameState.maxTimeExtensions; // タイム延長をリセット
        gameState.extendedTime = 0;
        document.getElementById('difficulty-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        document.body.classList.add('in-game');
        updateLivesDisplay();
        startNewQuestion();
    } else {
        document.getElementById('difficulty-screen').classList.remove('hidden');
    }
}

function startGameWithDifficulty(difficulty) {
    gameState.difficulty = difficulty;
    gameState.currentQuestion = 0;
    gameState.currentStage = 0;
    gameState.correctCount = 0;
    gameState.timeBonus = 0;
    gameState.lives = 3; // ライフをリセット
    gameState.timeExtensions = gameState.maxTimeExtensions; // タイム延長をリセット
    gameState.extendedTime = 0;
    document.getElementById('difficulty-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.body.classList.add('in-game');
    if (gameState.mode === 'survival') gameState.timeLeft = 60; // サバイバルの初期時間
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
    
    const isBossEntry = (gameState.mode === 'casual' || gameState.mode === 'story') && gameState.currentStage === 10;

    // ストーリーはステージに応じて難易度を調整（過場表示にも反映）
    if (gameState.mode === 'story' && !isBossEntry) {
        if (gameState.currentStage <= 3) gameState.difficulty = 'easy';
        else if (gameState.currentStage <= 6) gameState.difficulty = 'medium';
        else gameState.difficulty = 'hard';
    }

    gameState.isBossStage = !!isBossEntry;
    updateQuestionDisplay();

    const stageTitle = isBossEntry
        ? t('bossStage')
        : `${t('stage')} ${gameState.currentStage}`;
    const subtitle = `${t('difficulty')} ${getDifficultyBadgeHtml(gameState.difficulty)} <span class="opacity-80">(${t(`${gameState.difficulty}Desc`)})</span>`;

    await showStageIntro({ titleText: stageTitle, subtitleHtml: subtitle, durationMs: 3800 });

    // ボス（第10ステージ）に入るか判定
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
        if (gameState.currentStage <= 3) gameState.difficulty = 'easy';
        else if (gameState.currentStage <= 6) gameState.difficulty = 'medium';
        else gameState.difficulty = 'hard';
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

    // 未使用の延長回数は、BOSS の挑戦時間にまとめて加算する
    // （BOSS では延長を使えない設計のため、ここで自動変換して公平にする）
    if (gameState.mode === 'casual' || gameState.mode === 'story') {
        const unusedExtensions = Math.max(0, gameState.timeExtensions || 0);
        if (unusedExtensions > 0) {
            gameState.timeBonus += unusedExtensions * 30;
            gameState.timeExtensions = 0;
        }
    }

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

    updateLivesDisplay();
    updateInteractionState();
}

function renderHand() {
    const container = document.getElementById('hand-tiles');
    container.innerHTML = '';
    const sorted = [...gameState.hand].sort((a, b) => a - b);
    sorted.forEach(tile => {
        const tileInfo = getTileInfo(gameState.tileType, tile);
        const div = document.createElement('div');
        div.className = 'hand-tile rounded-lg tile-shadow flex items-center justify-center';
        div.style.cssText = 'width: 48px; height: 68px; font-size: 36px;';
        div.appendChild(createTileImage(tileInfo));
        div.title = tileInfo.name;
        container.appendChild(div);
    });
}

function renderPossibleTiles() {
    const container = document.getElementById('possible-tiles');
    container.innerHTML = '';
    for (let tile = 1; tile <= 9; tile++) {
        const tileInfo = getTileInfo(gameState.tileType, tile);
        const div = document.createElement('div');
        div.className = 'selectable-tile rounded-xl tile-shadow tile-hover flex items-center justify-center cursor-pointer';
        div.style.cssText = 'width: 64px; height: 88px; font-size: 48px;';
        div.dataset.tile = tile;
        div.appendChild(createTileImage(tileInfo));
        div.title = tileInfo.name;

        // 手牌内で同牌が4枚使われている場合、その牌は選択不可にする
        const exhausted = (gameState.counts && gameState.counts[tile] >= 4);
        if (exhausted) {
            div.classList.add('tile-disabled');
            div.setAttribute('aria-disabled', 'true');
        } else {
            div.addEventListener('click', () => toggleTileSelection(tile, div));
        }
        container.appendChild(div);
    }
}

function toggleTileSelection(tile, element) {
    if (!isActiveQuestion()) return;

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
    }
    
    if (gameState.mode === 'survival') {
        let recovery = 0;
        if (gameState.difficulty === 'easy') recovery = 5;
        else if (gameState.difficulty === 'medium') recovery = 10;
        else if (gameState.difficulty === 'hard') recovery = 15;
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
            // カジュアル/ストーリー：第1〜9問は「次へ」を表示
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
    displayCorrectAnswer();
    displayHandBreakdown();
}

function displayCorrectAnswer() {
    const container = document.getElementById('correct-answer-display');
    container.innerHTML = `<p class="text-xl font-bold mb-4 text-center">${t('correctAnswer')}</p>`;
    const tilesDiv = document.createElement('div');
    tilesDiv.className = 'flex gap-3 flex-wrap justify-center';
    gameState.waitingTiles.forEach(tile => {
        const tileInfo = getTileInfo(gameState.tileType, tile);
        const div = document.createElement('div');
        div.className = 'hand-tile rounded-lg tile-shadow flex items-center justify-center';
        div.style.cssText = 'width: 64px; height: 88px; font-size: 48px;';
        div.appendChild(createTileImage(tileInfo));
        div.title = tileInfo.name;
        tilesDiv.appendChild(div);
    });
    container.appendChild(tilesDiv);
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
    container.innerHTML = '';
    const handTiles = [...gameState.hand];
    
    // タイトルを追加
    const mainTitle = document.createElement('p');
    mainTitle.className = 'font-bold text-2xl mb-6 text-center text-yellow-300';
    mainTitle.innerHTML = t('allBreakdown');
    container.appendChild(mainTitle);
    
    // 待ち牌を分類：未選択（優先表示）と選択済み
    const selected = Array.from(gameState.selectedTiles);
    const missedTiles = gameState.waitingTiles.filter(tile => !selected.includes(tile));
    const selectedTiles = gameState.waitingTiles.filter(tile => selected.includes(tile));
    
    // 未選択の牌を優先表示（黄色）
    const sortedWaitingTiles = [...missedTiles, ...selectedTiles];
    
    // すべての待ち牌について牌型を表示
    for (const tile of sortedWaitingTiles) {
        const tempHand = [...handTiles, tile];
        const breakdown = getWinningHandBreakdown(tempHand);
        if (breakdown) {
            const tileInfo = getTileInfo(gameState.tileType, tile);
            const isMissed = missedTiles.includes(tile);
            
            // 各待ち牌のセクション
            const sectionDiv = document.createElement('div');
            sectionDiv.className = `breakdown-section ${isMissed ? 'missed-tile' : 'selected-tile'}`;
            
            const breakdownTitle = document.createElement('h3');
            breakdownTitle.style.color = isMissed ? '#fbbf24' : '#22c55e';
            breakdownTitle.textContent = `${t('winningTile')}`;
            breakdownTitle.appendChild(createInlineHandTile(tileInfo));
            breakdownTitle.appendChild(document.createTextNode(` ${tileInfo.name}`));
            sectionDiv.appendChild(breakdownTitle);

            const breakdownFlex = document.createElement('div');
            breakdownFlex.className = 'flex flex-wrap gap-4 justify-center';
            
            // 雀頭
            const headContainer = createTileGroup(breakdown.head, t('head'));
            breakdownFlex.appendChild(headContainer);

            // 面子
            for (const meld of breakdown.melds) {
                const meldContainer = createTileGroup(meld, t('meld'));
                breakdownFlex.appendChild(meldContainer);
            }
            sectionDiv.appendChild(breakdownFlex);
            container.appendChild(sectionDiv);
        }
    }
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

function updateTimeExtensionButton() {
    let extensionBtn = document.getElementById('time-extension-btn');
    
    // ボタンが無ければ作成
    if (!extensionBtn) {
        const slot = document.getElementById('time-extension-slot') || document.querySelector('.timer-container');
        if (!slot) return;

        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = `
            <button id="time-extension-btn" class="time-extension-btn">
                <span id="time-extension-text"></span>
            </button>
        `;
        slot.appendChild(btnContainer);
        extensionBtn = document.getElementById('time-extension-btn');
        extensionBtn.addEventListener('click', useTimeExtension);
    }
    
    // ボタン表示と状態を更新
    const textSpan = document.getElementById('time-extension-text');

    const active = isActiveQuestion();
    const canUseExtension = gameState.timeExtensions > 0 && !gameState.isBossStage && active;

    if (canUseExtension) {
        extensionBtn.disabled = false;
        extensionBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        textSpan.textContent = `${t('timeExtension')} ${t('timeExtensionDesc')} (${t('extensionsLeft')} ${gameState.timeExtensions})`;
    } else {
        extensionBtn.disabled = true;
        extensionBtn.classList.add('opacity-50', 'cursor-not-allowed');
        if (gameState.isBossStage) {
            textSpan.textContent = `${t('timeExtension')} (BOSS ${t('stage')})`;
        } else if (!active) {
            textSpan.textContent = `${t('timeExtension')} (${t('extensionsLeft')} ${gameState.timeExtensions})`;
        } else {
            textSpan.textContent = `${t('timeExtension')} (${t('extensionsLeft')} 0)`;
        }
    }

    // 残り時間が少ない & 延長可能なら、ボタンを少し目立たせる
    const shouldAttention = canUseExtension && gameState.timeLeft <= 5;
    extensionBtn.classList.toggle('attention', !!shouldAttention);
}

function useTimeExtension() {
    if (!isActiveQuestion()) return;
    if (gameState.timeExtensions <= 0 || gameState.isBossStage || gameState.isAnswered) return;

    playSound('select');
    
    gameState.timeExtensions--;
    gameState.timeLeft += 30;
    gameState.extendedTime += 30; // このステージで使った延長時間を記録

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
    if (timeLeftEl) timeLeftEl.textContent = String(Math.max(0, gameState.timeLeft || 0));

    const livesEl = document.getElementById('final-lives-left');
    const livesLabelEl = document.getElementById('final-lives-left-label');
    if (livesEl && livesLabelEl) {
        if (gameState.mode === 'casual' || gameState.mode === 'story') {
            livesEl.textContent = '';
            for (let i = 0; i < (gameState.maxLives || 3); i++) {
                livesEl.textContent += i < (gameState.lives || 0) ? '❤️' : '🖤';
            }
            livesLabelEl.parentElement?.classList.remove('hidden');
        } else {
            // 念のため（現状 victory は boss クリア時のみ）
            livesLabelEl.parentElement?.classList.add('hidden');
        }
    }

    createConfetti();
    // 16:9 固定フレーム設計：ページスクロールは使わない
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
    const screen = document.getElementById('victory-screen');
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

function updateUILanguage() {
    document.getElementById('header-title').textContent = t('gameTitle');
    document.getElementById('header-subtitle').textContent = t('gameSubtitle');
    
    // 言語選択画面
    document.getElementById('language-title').textContent = t('selectLanguage');
    document.getElementById('lang-ja-text').textContent = t('japanese');
    document.getElementById('lang-en-text').textContent = t('english');
    document.getElementById('lang-zh-text').textContent = t('chinese');
    
    // モード選択
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
    
    // 難易度選択
    document.getElementById('difficulty-title').textContent = t('selectDifficulty');
    document.getElementById('easy-title').textContent = t('easy');
    document.getElementById('easy-desc').textContent = t('easyDesc');
    document.getElementById('medium-title').textContent = t('medium');
    document.getElementById('medium-desc').textContent = t('mediumDesc');
    document.getElementById('hard-title').textContent = t('hard');
    document.getElementById('hard-desc').textContent = t('hardDesc');

    const difficultyBackText = document.getElementById('difficulty-back-text');
    if (difficultyBackText) difficultyBackText.textContent = t('back');
    
    // ゲーム画面
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
    
    
    // 勝利/敗北画面
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
    document.getElementById('play-again-victory').textContent = t('playAgain');
    document.getElementById('play-again-gameover').textContent = t('playAgain');
    document.getElementById('menu-victory').textContent = t('backToMenu');
    document.getElementById('menu-gameover').textContent = t('backToMenu');
    
    // フッター
    document.getElementById('footer-text').innerHTML = `${t('footer')} &copy; 2026 Akira Akiyama`;

    // チュートリアル
    const tutorialTitle = document.getElementById('tutorial-title');
    if (tutorialTitle) tutorialTitle.textContent = t('tutorialTitle');
    renderTutorialPage();
}

function resetGame() {
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
    gameState.lives = 3;
    gameState.timeExtensions = gameState.maxTimeExtensions;
    gameState.extendedTime = 0;
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
    updateInteractionState();
}

function selectLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t('gameTitle').replace(/🀄/g, '').trim();
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

    const languageScreen = document.getElementById('language-screen');
    const modeScreen = document.getElementById('mode-screen');
    languageScreen.style.opacity = '0';
    languageScreen.style.transform = 'scale(0.95)';
    setTimeout(() => {
        languageScreen.classList.add('hidden');
        languageScreen.style.opacity = '1';
        languageScreen.style.transform = 'scale(1)';
        modeScreen.classList.remove('hidden');
        modeScreen.classList.add('fade-in');
    }, 400);
}

function backToLanguageSelection() {
    const languageScreen = document.getElementById('language-screen');
    const modeScreen = document.getElementById('mode-screen');
    if (!languageScreen || !modeScreen) return;

    modeScreen.classList.add('hidden');
    languageScreen.classList.remove('hidden');
    languageScreen.classList.add('fade-in');
}

function backToModeSelection() {
    const difficultyScreen = document.getElementById('difficulty-screen');
    const modeScreen = document.getElementById('mode-screen');
    if (!difficultyScreen || !modeScreen) return;

    // 途中まで選んだ状態を破棄する
    gameState.mode = null;
    gameState.difficulty = null;

    difficultyScreen.classList.add('hidden');
    modeScreen.classList.remove('hidden');
    modeScreen.classList.add('fade-in');
}

function showPauseOverlay() {
    let overlay = document.getElementById('pause-overlay');
    if (!overlay) {
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

        const root = document.getElementById('design-root');
        (root || document.body).appendChild(overlay);
    }
    overlay.classList.remove('hidden');
    overlay.classList.add('fade-in');
}

function hidePauseOverlay() {
    const overlay = document.getElementById('pause-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 初期表示はプリロード画面のみにする
    const preloadScreen = document.getElementById('preload-screen');
    const languageScreen = document.getElementById('language-screen');
    if (preloadScreen) preloadScreen.classList.remove('hidden');
    if (languageScreen) languageScreen.classList.add('hidden');

    initSounds();
    initTimerSound();
    applyUiScale();
    window.addEventListener('resize', applyUiScale);
    window.visualViewport?.addEventListener('resize', applyUiScale);

    // 進捗表示付きでアセットをプリロード
    const progressFill = document.getElementById('preload-progress-fill');
    const progressText = document.getElementById('preload-progress-text');
    preloadAssets({
        onProgress: ({ loaded, total }) => {
            const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
            if (progressFill) progressFill.style.width = `${pct}%`;
            if (progressText) progressText.textContent = `${pct}% (${loaded}/${total})`;
        }
    }).then(() => {
        if (preloadScreen) preloadScreen.classList.add('hidden');
        if (languageScreen) {
            languageScreen.classList.remove('hidden');
            languageScreen.classList.add('fade-in');
        }
    });

    // 最初のユーザー操作で音声を解放（iOS 対策）
    document.addEventListener('pointerdown', unlockAudioOnce, { capture: true, once: true });
    document.addEventListener('touchstart', unlockAudioOnce, { capture: true, once: true, passive: true });

    document.getElementById('lang-ja').addEventListener('click', () => { playSound('select'); selectLanguage('ja'); });
    document.getElementById('lang-en').addEventListener('click', () => { playSound('select'); selectLanguage('en'); });
    document.getElementById('lang-zh').addEventListener('click', () => { playSound('select'); selectLanguage('zh'); });
    document.getElementById('casual-btn').addEventListener('click', () => { playSound('select'); startGameMode('casual'); });
    document.getElementById('story-btn').addEventListener('click', () => { playSound('select'); startGameMode('story'); });
    document.getElementById('survival-btn').addEventListener('click', () => { playSound('select'); startGameMode('survival'); });

    const modeBackBtn = document.getElementById('mode-back-btn');
    if (modeBackBtn) modeBackBtn.addEventListener('click', () => { playSound('tap'); backToLanguageSelection(); });

    const difficultyBackBtn = document.getElementById('difficulty-back-btn');
    if (difficultyBackBtn) difficultyBackBtn.addEventListener('click', () => { playSound('tap'); backToModeSelection(); });

    const tutorialBtn = document.getElementById('tutorial-btn');
    const tutorialScreen = document.getElementById('tutorial-screen');
    const tutorialPrevBtn = document.getElementById('tutorial-prev-btn');
    const tutorialNextBtn = document.getElementById('tutorial-next-btn');
    const tutorialCloseBtn = document.getElementById('tutorial-close-btn');

    function openTutorial() {
        if (!tutorialScreen) return;
        playSound('tap');
        tutorialPageIndex = 0;
        tutorialScreen.classList.remove('hidden');
        tutorialScreen.classList.add('fade-in');
        tutorialScreen.setAttribute('aria-hidden', 'false');
        updateUILanguage();
        renderTutorialPage();
    }

    function closeTutorial() {
        if (!tutorialScreen) return;
        playSound('tap');
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
            playSound('tap');
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
            playSound('tap');
            tutorialPageIndex = Math.min(last, tutorialPageIndex + 1);
            renderTutorialPage();
        });
    }

    if (tutorialCloseBtn) tutorialCloseBtn.addEventListener('click', closeTutorial);
    document.getElementById('easy').addEventListener('click', () => { playSound('select'); startGameWithDifficulty('easy'); });
    document.getElementById('medium').addEventListener('click', () => { playSound('select'); startGameWithDifficulty('medium'); });
    document.getElementById('hard').addEventListener('click', () => { playSound('select'); startGameWithDifficulty('hard'); });
    document.getElementById('submit-btn').addEventListener('click', () => { playSound('select'); checkAnswer(); });
    document.getElementById('next-btn').addEventListener('click', () => { playSound('select'); startNewQuestion(); });

    // 勝利/ゲームオーバー画面のボタン
    const playAgainVictory = document.getElementById('play-again-victory');
    const menuVictory = document.getElementById('menu-victory');
    const playAgainGameOver = document.getElementById('play-again-gameover');
    const menuGameOver = document.getElementById('menu-gameover');
    if (playAgainVictory) playAgainVictory.addEventListener('click', () => { playSound('select'); restartCurrentRun(); });
    if (menuVictory) menuVictory.addEventListener('click', () => { playSound('select'); backToMenu(); });
    if (playAgainGameOver) playAgainGameOver.addEventListener('click', () => { playSound('select'); restartCurrentRun(); });
    if (menuGameOver) menuGameOver.addEventListener('click', () => { playSound('select'); backToMenu(); });
    
    // ウィンドウのフォーカス喪失/復帰を監視
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // フォーカス喪失/最小化
            pauseTimer();
        } else {
            // フォーカス復帰
            if (gameState.isPaused && gameState.timerInterval) {
                // 自動再開しない（ユーザーのクリック待ち）
            }
        }
    });
    
    // フォーカス喪失（別アプリへ切替）
    window.addEventListener('blur', () => {
        pauseTimer();
    });
    
    // フォーカス復帰
    window.addEventListener('focus', () => {
        // 自動再開しない（一時停止オーバーレイのクリック待ち）
    });
});
