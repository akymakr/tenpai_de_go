# Tenpai de GO!

Mahjong tenpai training game.

- Live demo: https://akymakr.github.io/tenpai_de_go/

## Game Modes

### CASUAL
- 10 questions + BOSS stage
- 60 seconds per question, 3 lives
- Wrong answer or time up costs 1 life; you can choose **Continue** (spend a life) or **Give Up**
- Correct answers (Q1–Q10) accumulate time for the BOSS stage

### STORY
- Progressive difficulty: Easy (Q1–5) → Medium (Q6-10) → Hard (Q11-15) → BOSS (Q16)
- 30 seconds per question, 3 lives
- Wrong answer or time up costs 1 life; you can choose **Continue** (spend a life) or **Give Up**
- Correct answers (Q1–Q15) accumulate time for the BOSS stage

### SURVIVAL
- Endless questions
- Start with 30 seconds, no lives
- Time recovery on correct answers:
  - Easy: +3s
  - Medium: +6s
  - Hard: +12s

## BOSS Stage Rules

- The BOSS stage uses **only** the accumulated time from previous correct answers (no extra 60/30 seconds added).
- Minimum time is guaranteed when the accumulated time is too small:
  - Casual: at least 60 seconds
  - Story: at least 30 seconds

## Think Time (Time Extension)

- Gain 1 charge every 5 stages (Stage 1/6/11...), no hard cap
- Can be used during the BOSS stage

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
- `game.js`
- `assets/`
