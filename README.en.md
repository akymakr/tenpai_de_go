# Tenpai de GO!

Mahjong tenpai training game.

- Live demo: https://akymakr.github.io/tenpai_de_go/

## Game Modes

### CASUAL
- 9 questions + BOSS stage
- 45 seconds per question, 3 lives
- Wrong answer or time up costs 1 life; you can choose **Continue** (spend a life) or **Give Up**
- Correct answers (Q1–Q9) accumulate time for the BOSS stage

### STORY
- Progressive difficulty: Easy (Q1–3) → Medium (Q4–6) → Hard (Q7–9) → BOSS (Q10)
- 30 seconds per question, 3 lives

### SURVIVAL
- Endless questions
- Start with 60 seconds, no lives
- Time recovery on correct answers:
  - Easy: +5s
  - Medium: +10s
  - Hard: +15s

## BOSS Stage Rules

- The BOSS stage uses **only** the accumulated time from previous correct answers (no extra 45/30 seconds added).
- Minimum time is guaranteed when the accumulated time is too small:
  - Casual: at least 45 seconds
  - Story: at least 30 seconds

## Difficulty

- Easy: up to 3 waits
- Medium: up to 6 waits
- Hard: up to 9 waits

## How to Play

1. Choose a language
2. Choose a game mode
3. (Casual/Survival) choose a difficulty
4. Select all waiting tiles
5. The **Submit** button is enabled only after selecting at least 1 tile
6. If time runs out and you selected any tile(s), it is treated as an auto-submit

## Project Files

- `index.html`
- `styles.css`
- `utilities.css`
- `game.js`
- `assets/`
