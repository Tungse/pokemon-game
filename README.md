# Pokemon Spiel

A browser-based Pokemon battle game featuring turn-based dice combat between two players.

## About

This is a vanilla JavaScript Pokemon battle game where two players select their teams and battle using a dice-based combat system. Each player chooses 4 Pokemon from a roster of 28 legendary and powerful Pokemon, then takes turns rolling dice to attack until one team is defeated.

## Features

- **28 Playable Pokemon** - Including legendary Pokemon like Mewtu, Rayquaza, Dialga, and more
- **Type Effectiveness System** - Pokemon types affect damage (e.g., Water vs Fire, Dragon vs Dragon)
- **Super Attack Mechanic** - Build up energy over multiple turns to unleash devastating attacks
- **Dynamic Animations** - Smooth CSS animations for attacks, damage, and Pokemon switching
- **Sound Effects** - Background music and battle sounds enhance the experience
- **No Dependencies** - Pure vanilla JavaScript, HTML, and CSS

## How to Play

### Setup

1. Clone or download this repository
2. Open `index.html` in a web browser, or
3. Run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

### Gameplay

1. **Pokemon Selection**
   - Player 1 clicks "Pokemon auswählen" and selects 4 Pokemon
   - Player 2 does the same
   - Click on Pokemon images to select/deselect them

2. **Battle**
   - A random player is chosen to attack first
   - Click the dice to roll and attack
   - Dice result (1-6) determines attack strength
   - Type effectiveness adds +2 to your roll

3. **Super Attacks**
   - The super attack bar charges with each attack
   - When full, your next attack deals massive damage
   - Screen glows red when super attack is ready

4. **Victory**
   - Battle continues until all of one player's Pokemon are defeated
   - Last player standing wins!

## Game Mechanics

### Damage Calculation

```
Base Damage = (Attacker's Attack × Dice Roll) - Defender's Defense
```

- If attacker's type is effective against defender: +2 to dice roll
- Super attack: Multiply damage by Pokemon's super attack value (3-5×)

### Pokemon Stats

Each Pokemon has unique stats:
- **HP** - Health points (2388-4431)
- **Attack** - Offensive power (180-345)
- **Defense** - Damage reduction (109-310)
- **Super Attack** - Turns needed to charge (3-5)
- **Type** - 1-2 types (e.g., Dragon/Flying)
- **Effective Against** - Types this Pokemon deals extra damage to

## Technical Details

- **Language**: Vanilla JavaScript (ES6+)
- **No Build Required**: Static files only
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Assets**: WebP images, MP3 audio files

## Project Structure

```
pokemon-game/
├── index.html          # Game structure
├── index.js            # Game logic
├── style.css           # Styling and animations
├── bilder/             # Pokemon images (28 .webp files) + arena background
├── mp3/                # Sound effects and music
└── favicon.png         # Site icon
```

## Notes

- The game is in German (Pokemon Spiel = Pokemon Game)
- Pokemon names use German translations
- No external libraries or frameworks used
- All game state managed with vanilla JavaScript

## Credits

Pokemon and related characters are property of Nintendo/Game Freak/The Pokemon Company.

This is a fan-made game created for educational and entertainment purposes.
