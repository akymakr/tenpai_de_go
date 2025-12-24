# 聴牌でGO! / Tenpai de GO! / 聽牌GO!

麻雀聴牌訓練遊戲 - Mahjong Tenpai Training Game
Copyright © 2025 Akira Akiyama

## ゲームモード (Game Modes)

### 🎮 休閒モード (Casual Mode)
- 9 questions + BOSS stage
- 60 seconds per question
- Game over on wrong answer
- Accumulate time bonus for BOSS

### 📖 闖關モード (Story Mode)
- Progressive difficulty: Easy (Q1-3) → Medium (Q4-6) → Hard (Q7-9) → BOSS (Q10)
- 30 seconds per question
- Difficulty increases automatically

### ⚔️ 生存モード (Survival Mode)
- Infinite questions
- Start with 60 seconds
- Recover time on correct answers:
  - Easy: +10 seconds
  - Medium: +15 seconds
  - Hard: +20 seconds

## 難易度 (Difficulty Levels)

- **初級 (Easy)**: Up to 3 waiting tiles
- **中級 (Medium)**: Up to 6 waiting tiles
- **上級 (Hard)**: Up to 9 waiting tiles

## 言語 (Languages)

- 🇯🇵 日本語 (Japanese)
- 🇬🇧 English
- 🇭🇰 繁體中文 (Traditional Chinese)

## ファイル構造 (File Structure)

```
mahjong/
├── assets/       # Mahjong tile files
├── game.js       # Game logic and mahjong algorithms
├── index.html    # Main HTML structure
├── styles.css    # All styling and animations
└── README.md     # This file
```

## 遊び方 (How to Play)

1. Open `index.html` in a web browser
2. Select your language
3. Choose a game mode
4. Select difficulty (for Casual and Survival modes)
5. Identify all waiting tiles (待ち牌) from the 13-tile hand
6. Click tiles to select/deselect
7. Submit your answer before time runs out!

## 特徴 (Features)

- ⏱️ Real-time countdown timer with visual warnings
- 🔥 BOSS stage with accumulated time bonus
- 🎊 Victory animations with confetti effects
- ❌ Game over screen with shake animation
- 🌐 Full multi-language support
- 📱 Responsive design for mobile and desktop

## 技術スタック (Tech Stack)

- **HTML5**: Structure
- **Tailwind CSS**: Utility-first styling
- **Vanilla JavaScript**: Game logic
- **CSS Animations**: Special effects

## Credits

Created with ♥ for mahjong enthusiasts
