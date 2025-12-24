// 聴牌でGO! - ゲームロジック

const translations = {
    ja: {
        gameTitle: "🀄 聴牌でGO! 🀄",
        gameSubtitle: "麻雀聴牌トレーニングゲーム",
        selectMode: "ゲームモードを選択してください",
        casualMode: "カジュアルモード",
        casualDesc: "9問 + BOSSステージ\n各問60秒、3ライフ制",
        storyMode: "ストーリーモード",
        storyDesc: "初級→中級→上級各3問 + BOSS\n各問30秒、3ライフ制",
        survivalMode: "サバイバルモード",
        survivalDesc: "60秒からスタート\n正解すると時間回復、ライフなし",
        selectDifficulty: "難易度を選択してください",
        easy: "初級",
        easyDesc: "3面張まで",
        medium: "中級",
        mediumDesc: "6面張まで",
        hard: "上級",
        hardDesc: "9面張まで",
        handTitle: "🎴 手牌 🎴",
        selectWaiting: "🎯 待ち牌をすべて選択してください 🎯",
        submitAnswer: "✨ 回答を確認 ✨",
        correct: "🎉 正解です！素晴らしい！ 🎉",
        incorrect: "❌ 残念、不正解です。",
        timeUp: "⏰ 時間切れです！",
        correctAnswer: "💡 正解：",
        nextQuestion: "➡️ 次の問題",
        question: "問題",
        bossStage: "🔥 BOSS ステージ 🔥",
        bossChallenge: "累積時間で挑戦！",
        bossComplete: "BOSSクリア！",
        victory: "🎊 全問クリア！ 🎊",
        gameOver: "ゲームオーバー",
        finalQuestions: "問題数：",
        finalScore: "正解数：",
        playAgain: "もう一度プレイ",
        backToMenu: "メニューに戻る",
        footer: "聴牌でGO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "日本語",
        english: "English",
        chinese: "繁體中文",
        allBreakdown: "📋 和了牌型は以下の通り：",
        winningTile: "🎯 和了牌：",
        head: "雀頭",
        meld: "面子",
        // pair: "対子：",
        // triplet: "刻子：",
        // sequence: "順子：",
        pair: "対子",
        triplet: "刻子",
        sequence: "順子",
        pin: "筒",
        lives: "ライフ：",
        loseLife: "ライフ -1",
        continue: "コンティニュー",
        giveUp: "あきらめる",
        stage: "ステージ",
        difficulty: "難易度",
        maxWaits: "最大待ち数：",
        correctCount: "正解数：",
        paused: "⏸️ 一時停止",
        tapToResume: "タップして再開",
        timeExtension: "⏱️ 長考",
        timeExtensionDesc: "+30秒",
        extensionsLeft: "残り"
    },
    en: {
        gameTitle: "🀄 Tenpai de GO! 🀄",
        gameSubtitle: "Mahjong Tenpai Training Game",
        selectMode: "Select Game Mode",
        casualMode: "Casual Mode",
        casualDesc: "9 Questions + BOSS Stage\n60 sec each, 3 lives",
        storyMode: "Story Mode",
        storyDesc: "3 Questions each from Easy→Medium→Hard + BOSS\n30 sec each, 3 lives",
        survivalMode: "Survival Mode",
        survivalDesc: "Start with 60 sec\nTime extension if correct, no lives",
        selectDifficulty: "Select Difficulty",
        easy: "Easy",
        easyDesc: "Up to 3 waits",
        medium: "Medium",
        mediumDesc: "Up to 6 waits",
        hard: "Hard",
        hardDesc: "Up to 9 waits",
        handTitle: "🎴 Your Hand 🎴",
        selectWaiting: "🎯 Select All Waiting Tiles 🎯",
        submitAnswer: "✨ Check Answer ✨",
        correct: "🎉 Correct! Excellent! 🎉",
        incorrect: "❌ Incorrect!",
        timeUp: "⏰ Time's Up!",
        correctAnswer: "💡 Correct Answer:",
        nextQuestion: "➡️ Next Question",
        question: "Question",
        bossStage: "🔥 BOSS STAGE 🔥",
        bossChallenge: "Use accumulated time!",
        bossComplete: "BOSS Defeated!",
        victory: "🎊 VICTORY! 🎊",
        gameOver: "GAME OVER",
        finalQuestions: "Questions:",
        finalScore: "Correct:",
        playAgain: "Play Again",
        backToMenu: "Back to Menu",
        footer: "Tenpai de GO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "Japanese",
        english: "English",
        chinese: "Traditional Chinese",
        allBreakdown: "📋 All Winning Hand Patterns as follows:",
        winningTile: "🎯 Winning Tile:",
        head: "Pair",
        meld: "Meld",
        // pair: "Pair: ",
        // triplet: "Triplet: ",
        // sequence: "Sequence: ",
        pair: "Pair",
        triplet: "Triplet",
        sequence: "Sequence",
        pin: "Pin",
        lives: "Lives:",
        loseLife: "Life -1",
        continue: "Continue",
        giveUp: "Give Up",
        stage: "Stage",
        difficulty: "Difficulty",
        maxWaits: "Max waits:",
        correctCount: "Correct:",
        paused: "⏸️ PAUSED",
        tapToResume: "Tap to Resume",
        timeExtension: "⏱️ Time Extension",
        timeExtensionDesc: "+30s",
        extensionsLeft: "Left"
    },
    zh: {
        gameTitle: "🀄 聽牌GO! 🀄",
        gameSubtitle: "麻雀聽牌訓練遊戲",
        selectMode: "選擇遊戲模式",
        casualMode: "休閒模式",
        casualDesc: "9條問題 + BOSS關卡\n每題60秒，3條生命",
        storyMode: "闖關模式",
        storyDesc: "初級→中級→高級各3條問題 + BOSS\n每題30秒，3條生命",
        survivalMode: "生存模式",
        survivalDesc: "由60秒開始\n答對可回復時間，沒有生命數",
        selectDifficulty: "選擇難度",
        easy: "初級",
        easyDesc: "最多聽3張",
        medium: "中級",
        mediumDesc: "最多聽6張",
        hard: "高級",
        hardDesc: "最多聽9張",
        handTitle: "🎴 手牌 🎴",
        selectWaiting: "🎯 選擇所有聽的牌 🎯",
        submitAnswer: "✨ 確認答案 ✨",
        correct: "🎉 正確！太棒了！ 🎉",
        incorrect: "❌ 可惜，不正確。",
        timeUp: "⏰ 時間到了！",
        correctAnswer: "💡 正確答案：",
        nextQuestion: "➡️ 下一題",
        question: "問題",
        bossStage: "🔥 BOSS 關卡 🔥",
        bossChallenge: "用累積時間挑戰！",
        bossComplete: "擊敗BOSS！",
        victory: "🎊 全部通關！ 🎊",
        gameOver: "遊戲結束",
        finalQuestions: "問題數：",
        finalScore: "正確數：",
        playAgain: "再玩一次",
        backToMenu: "返回選單",
        footer: "聽牌GO!",
        selectLanguage: "言語を選択 / Select Language / 選擇語言",
        japanese: "日本語",
        english: "English",
        chinese: "繁體中文",
        allBreakdown: "📋 所有聽的牌的食胡牌型如下：",
        winningTile: "🎯 食胡牌：",
        head: "眼",
        meld: "面子",
        // pair: "眼：",
        // triplet: "刻子：",
        // sequence: "順子：",
        pair: "眼",
        triplet: "刻子",
        sequence: "順子",
        pin: "筒",
        lives: "生命：",
        loseLife: "生命 -1",
        continue: "繼續遊戲",
        giveUp: "放棄",
        stage: "關卡",
        difficulty: "難度",
        maxWaits: "最多聽牌數：",
        correctCount: "正確數：",
        paused: "⏸️ 已暫停",
        tapToResume: "點擊繼續",
        timeExtension: "⏱️ 延長",
        timeExtensionDesc: "+30秒",
        extensionsLeft: "剩餘"
    }
};

let currentLang = 'ja';
const t = (key) => translations[currentLang][key] || key;

function applyUiScale() {
    const stage = document.getElementById('scale-stage');
    if (!stage) return;

    const baseWidth = 1280;
    const baseHeight = 720;

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;

    // モバイルブラウザの UI / セーフエリアで切れないよう、少し余白を確保
    const safetyPadding = 8;
    const availableWidth = Math.max(0, viewportWidth - safetyPadding * 2);
    const availableHeight = Math.max(0, viewportHeight - safetyPadding * 2);

    const scale = Math.min(availableWidth / baseWidth, availableHeight / baseHeight);
    // 大きい画面では 1 以上の拡大も許可（極小画面向けに最小値は維持）
    const clamped = Math.max(0.05, scale);

    document.documentElement.style.setProperty('--ui-scale', clamped.toFixed(4));
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
    if (continueBtn) continueBtn.classList.add('hidden');
    if (backBtn) backBtn.classList.add('hidden');
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
    const continueText = document.getElementById('result-continue-text');
    const backText = document.getElementById('result-back-text');
    if (continueText) continueText.textContent = t('continue');
    if (backText) backText.textContent = t('backToMenu');

    if (continueBtn) {
        continueBtn.classList.remove('hidden');
        continueBtn.disabled = false;
        continueBtn.onclick = () => {
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
        backBtn.onclick = backToMenu;
    }

    actions.classList.remove('hidden');
}

function showResultGameOverAction(timeUp) {
    const actions = document.getElementById('result-actions');
    if (!actions) return;

    const title = document.getElementById('result-actions-title');
    const body = document.getElementById('result-actions-body');
    if (title) {
        title.textContent = t('gameOver');
        title.className = 'text-3xl font-black mb-3 text-red-300 text-center';
    }
    // 主要な結果メッセージ（上部）を唯一の表示ソースとして扱う
    if (body) body.textContent = '';

    const continueBtn = document.getElementById('result-continue-btn');
    const backBtn = document.getElementById('result-back-btn');
    const backText = document.getElementById('result-back-text');
    if (backText) backText.textContent = t('backToMenu');

    if (continueBtn) continueBtn.classList.add('hidden');
    if (backBtn) {
        backBtn.classList.remove('hidden');
        backBtn.disabled = false;
        backBtn.onclick = backToMenu;
    }

    actions.classList.remove('hidden');
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
    }
};
const tileNames = {
    ja: { pin: { 1: '一筒（イーピン）', 2: '二筒（リャンピン）', 3: '三筒（サンピン）', 4: '四筒（スーピン）', 5: '五筒（ウーピン）', 6: '六筒（ローピン）', 7: '七筒（チーピン）', 8: '八筒（パーピン）', 9: '九筒（キューピン）' } },
    en: { pin: { 1: '1-Pin', 2: '2-Pin', 3: '3-Pin', 4: '4-Pin', 5: '5-Pin', 6: '6-Pin', 7: '7-Pin', 8: '8-Pin', 9: '9-Pin' } },
    zh: { pin: { 1: '一筒', 2: '二筒', 3: '三筒', 4: '四筒', 5: '五筒', 6: '六筒', 7: '七筒', 8: '八筒', 9: '九筒' } }
};

const getTileInfo = (type, number) => ({
    imgSrc: `assets/${tileImages[type][number]}`,
    name: tileNames[currentLang][type][number]
});

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
    timeExtensions: 3, maxTimeExtensions: 3, extendedTime: 0 // タイム延長（Time Extension）の仕組み
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
        if (attempts <= 5) return count === 3;
        if (attempts <= 10) return count >= 2 && count <= 3;
        return count >= 1 && count <= 3;
    } else if (difficulty === 'medium') {
        if (attempts <= 20) return count === 6;
        if (attempts <= 40) return count >= 5 && count <= 6;
        if (attempts <= 80) return count >= 4 && count <= 6;
        if (attempts <= 160) return count >= 3 && count <= 6;
        if (attempts <= 320) return count >= 2 && count <= 6;
        return count >= 1 && count <= 6;
    } else { // 上級
        if (attempts <= 10) return count === 9;
        if (attempts <= 80) return count >= 8 && count <= 9;
        if (attempts <= 1280) return count >= 7 && count <= 9;
        if (attempts <= 2560) return count >= 6 && count <= 9;
        if (attempts <= 5120) return count >= 5 && count <= 9;
        if (attempts <= 10240) return count >= 4 && count <= 9;
        if (attempts <= 20480) return count >= 3 && count <= 9;
        if (attempts <= 40960) return count >= 2 && count <= 9;
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
    gameState.maxTime = gameState.isBossStage ? gameState.timeBonus : getMaxTime();
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

    // timerInterval 設定後に操作状態を更新する（先に更新すると選択牌がロックされる）
    updateInteractionState();
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
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
    showPauseOverlay();
    updateInteractionState();
}

function resumeTimer() {
    if (!gameState.timerInterval) return;
    gameState.isPaused = false;
    hidePauseOverlay();
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

    if (submitBtn) {
        submitBtn.disabled = !active;
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
    
    // CSS transition で滑らかにアニメーション
    timerBar.style.transition = 'width 1s linear';
    timerBar.style.width = `${Math.max(0, percentage)}%`;
    
    timerElement.className = 'timer-value';
    timerBar.className = 'timer-bar';
    
    // 時間が少ないときに背景エフェクトを追加
    if (gameState.timeLeft <= 5) {
        timerElement.classList.add('timer-danger');
        timerBar.classList.add('timer-bar-danger');
        document.body.classList.add('time-critical');
    } else {
        document.body.classList.remove('time-critical');
        if (gameState.timeLeft <= 10) {
            timerElement.classList.add('timer-warning');
            timerBar.classList.add('timer-bar-warning');
        }
    }
}

function getMaxTime() {
    if (gameState.mode === 'casual') return 60;
    if (gameState.mode === 'story') return 30;
    if (gameState.mode === 'survival') return 60;
    return 0;
}

function handleTimeUp() {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    updateInteractionState();
    
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
    gameState.lives = 3;
    gameState.timeExtensions = gameState.maxTimeExtensions;
    gameState.extendedTime = 0;

    if (mode === 'story') {
        gameState.difficulty = 'easy';
    } else {
        gameState.difficulty = previousDifficulty;
    }

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
    if (gameState.mode === 'survival') gameState.timeLeft = 100; // サバイバルの初期時間
    updateLivesDisplay();
    startNewQuestion();
}

function startNewQuestion() {
    // 問題進行中（または一時停止中）の誤操作で次へ進まないようにする
    if (gameState.timerInterval && !gameState.isAnswered) return;

    // すべてのモードで currentStage を進める
    gameState.currentStage++;
    
    // ボス（第10ステージ）に入るか判定
    if ((gameState.mode === 'casual' || gameState.mode === 'story') && gameState.currentStage === 10) {
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
    
    // ストーリーはステージに応じて難易度を調整
    if (gameState.mode === 'story') {
        if (gameState.currentStage <= 3) gameState.difficulty = 'easy';
        else if (gameState.currentStage <= 6) gameState.difficulty = 'medium';
        else gameState.difficulty = 'hard';
    }
    
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
    document.getElementById('boss-indicator').classList.remove('hidden');
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hidden');
    hideResultActions();

    updateQuestionDisplay();
    renderHand();
    renderPossibleTiles();

    if (resetTime) {
        gameState.timeLeft = gameState.timeBonus;
    }
    startTimer();
}

function updateQuestionDisplay() {
    const questionNum = document.getElementById('question-number');
    const stageInfo = document.getElementById('stage-info');

    const totalStages = (gameState.mode === 'casual' || gameState.mode === 'story') ? 10 : null;
    const diffKey = gameState.difficulty || 'easy';
    const diffName = t(diffKey);
    const diffDesc = t(`${diffKey}Desc`);
    const diffInfo = `${t('difficulty')} ${diffName} (${diffDesc})`;

    if (gameState.isBossStage) {
        questionNum.textContent = t('bossStage');
        if (totalStages) {
            stageInfo.textContent = `${t('stage')} ${gameState.currentStage}/${totalStages}　${t('bossChallenge')}　${diffInfo}`;
        } else {
            stageInfo.textContent = `${t('stage')} ${t('bossChallenge')}　${diffInfo}`;
        }
    } else {
        if (gameState.mode === 'survival') {
            // サバイバルも「ステージ」表記を使用
            questionNum.textContent = `${t('stage')} ${gameState.currentStage}`;
            stageInfo.textContent = `${t('correctCount')} ${gameState.correctCount}　${diffInfo}`;
        } else {
            // カジュアル/ストーリーは「ステージ」表記を使用
            questionNum.textContent = totalStages
                ? `${t('stage')} ${gameState.currentStage}/${totalStages}`
                : `${t('stage')} ${gameState.currentStage}`;
            stageInfo.textContent = diffInfo;
        }
    }
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
        div.addEventListener('click', () => toggleTileSelection(tile, div));
        container.appendChild(div);
    }
}

function toggleTileSelection(tile, element) {
    if (!isActiveQuestion()) return;
    if (gameState.selectedTiles.has(tile)) {
        gameState.selectedTiles.delete(tile);
        element.classList.remove('selected');
    } else {
        gameState.selectedTiles.add(tile);
        element.classList.add('selected');
    }
}

function checkAnswer() {
    if (gameState.isAnswered) return;
    if (!isActiveQuestion()) return;
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
    
    // 時間ボーナスを計算（元の時間のみ。延長時間は含めない）
    // timeBonus はカジュアル/ストーリーのボス用。ボス自体では timeBonus を加算しない。
    if (!gameState.isBossStage && (gameState.mode === 'casual' || gameState.mode === 'story')) {
        const maxTimeForStage = getMaxTime(); // このステージの元の最大時間
        const actualBonus = Math.min(gameState.timeLeft, maxTimeForStage); // 元の時間分までを上限に加算
        gameState.timeBonus += actualBonus;
    }
    
    if (gameState.mode === 'survival') {
        let recovery = 0;
        if (gameState.difficulty === 'easy') recovery = 10;
        else if (gameState.difficulty === 'medium') recovery = 15;
        else if (gameState.difficulty === 'hard') recovery = 20;
        gameState.timeLeft += recovery;
    }
    showResult(true);
    highlightAnswers();
    
    // ボスクリア後に勝利表示
    if (gameState.isBossStage) {
        setTimeout(() => showVictory(), 2000);
    }
}

function handleIncorrectAnswer() {
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
    /*
    let detailText = '';
    if (tileNumbers.length === 2) {
        detailText = `${t('pair')}${tileNumbers[0]}${t('pin')}`;
    } else if (tileNumbers.length === 3) {
        if (tileNumbers[0] === tileNumbers[1] && tileNumbers[1] === tileNumbers[2]) {
            detailText = `${t('triplet')}${tileNumbers[0]}${t('pin')}×3`;
        } else {
            detailText = `${t('sequence')}${tileNumbers[0]}-${tileNumbers[1]}-${tileNumbers[2]}${t('pin')}`;
        }
    }
    */

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
}

function useTimeExtension() {
    if (!isActiveQuestion()) return;
    if (gameState.timeExtensions <= 0 || gameState.isBossStage || gameState.isAnswered) return;
    
    gameState.timeExtensions--;
    gameState.timeLeft += 30;
    gameState.extendedTime += 30; // このステージで使った延長時間を記録
    
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

function continueGame() {
    // コンティニューは「解答済み」かつ「進行中ではない」場合のみ許可
    if (!gameState.isAnswered) return;

    hideResultActions();

    // 続行時に結果モーダルを閉じる（古い内容の積み重なりを防ぐ）
    const resultSection = document.getElementById('result-section');
    if (resultSection) resultSection.classList.add('hidden');

    // 同一ステージで新しい問題を出す（ステージ数は増やさない）
    // ボスのリトライは残り秒数を引き継ぎ、既定秒数へリセットしない
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
    setTimeout(() => {
        document.getElementById('game-screen').classList.add('hidden');
        const screen = document.getElementById('victory-screen');
        screen.classList.remove('hidden');
        // すべてのモードで currentStage を使用
        document.getElementById('final-questions').textContent = gameState.currentStage;
        document.getElementById('final-correct').textContent = gameState.correctCount;
        createConfetti();
        
        // 16:9 固定フレーム設計：ページスクロールは使わない
    }, gameState.isBossStage ? 1500 : 800);
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
    message.textContent = timeUp ? t('timeUp') : '';
    document.getElementById('final-score').textContent = gameState.correctCount;
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
    
    // 難易度選択
    document.getElementById('difficulty-title').textContent = t('selectDifficulty');
    document.getElementById('easy-title').textContent = t('easy');
    document.getElementById('easy-desc').textContent = t('easyDesc');
    document.getElementById('medium-title').textContent = t('medium');
    document.getElementById('medium-desc').textContent = t('mediumDesc');
    document.getElementById('hard-title').textContent = t('hard');
    document.getElementById('hard-desc').textContent = t('hardDesc');
    
    // ゲーム画面
    document.getElementById('hand-title').textContent = t('handTitle');
    document.getElementById('select-waiting-title').textContent = t('selectWaiting');
    document.getElementById('submit-text').textContent = t('submitAnswer');
    document.getElementById('next-text').textContent = t('nextQuestion');
    const resultMenuText = document.getElementById('result-menu-text');
    if (resultMenuText) resultMenuText.textContent = t('backToMenu');

    const resultContinueText = document.getElementById('result-continue-text');
    const resultBackText = document.getElementById('result-back-text');
    if (resultContinueText) resultContinueText.textContent = t('continue');
    if (resultBackText) resultBackText.textContent = t('backToMenu');
    
    
    // 勝利/敗北画面
    const resultOpen = !!document.getElementById('result-section') && !document.getElementById('result-section').classList.contains('hidden');
    document.getElementById('gameover-title').textContent = t('gameOver');
    document.getElementById('final-questions-label').textContent = t('finalQuestions');
    document.getElementById('final-correct-label').textContent = t('finalScore');
    document.getElementById('final-score-label').textContent = t('finalScore');
    document.getElementById('play-again-victory').textContent = t('playAgain');
    document.getElementById('play-again-gameover').textContent = t('playAgain');
    document.getElementById('menu-victory').textContent = t('backToMenu');
    document.getElementById('menu-gameover').textContent = t('backToMenu');
    
    // フッター
    document.getElementById('footer-text').innerHTML = `${t('footer')} &copy; 2025 Akira Akiyama`;
}

function resetGame() {
    stopTimer();
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
    gameState.lives = 3;
    gameState.timeExtensions = gameState.maxTimeExtensions;
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
    applyUiScale();
    window.addEventListener('resize', applyUiScale);
    window.visualViewport?.addEventListener('resize', applyUiScale);

    document.getElementById('lang-ja').addEventListener('click', () => selectLanguage('ja'));
    document.getElementById('lang-en').addEventListener('click', () => selectLanguage('en'));
    document.getElementById('lang-zh').addEventListener('click', () => selectLanguage('zh'));
    document.getElementById('casual-btn').addEventListener('click', () => startGameMode('casual'));
    document.getElementById('story-btn').addEventListener('click', () => startGameMode('story'));
    document.getElementById('survival-btn').addEventListener('click', () => startGameMode('survival'));
    document.getElementById('easy').addEventListener('click', () => startGameWithDifficulty('easy'));
    document.getElementById('medium').addEventListener('click', () => startGameWithDifficulty('medium'));
    document.getElementById('hard').addEventListener('click', () => startGameWithDifficulty('hard'));
    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', startNewQuestion);

    const resultContinueBtn = document.getElementById('result-continue-btn');
    const resultBackBtn = document.getElementById('result-back-btn');
    if (resultContinueBtn) resultContinueBtn.addEventListener('click', continueGame);
    if (resultBackBtn) resultBackBtn.addEventListener('click', backToMenu);

    // 勝利/ゲームオーバー画面のボタン
    const playAgainVictory = document.getElementById('play-again-victory');
    const menuVictory = document.getElementById('menu-victory');
    const playAgainGameOver = document.getElementById('play-again-gameover');
    const menuGameOver = document.getElementById('menu-gameover');
    if (playAgainVictory) playAgainVictory.addEventListener('click', restartCurrentRun);
    if (menuVictory) menuVictory.addEventListener('click', backToMenu);
    if (playAgainGameOver) playAgainGameOver.addEventListener('click', restartCurrentRun);
    if (menuGameOver) menuGameOver.addEventListener('click', backToMenu);
    
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
