# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a browser-based Pokemon battle game built with vanilla JavaScript, HTML, and CSS.
The game is a turn-based dice battle system where two players each select 4 Pokemon and battle until one player's team is defeated.

## Running the Game

This is a static web application with no build step or dependencies:

- Open `index.html` directly in a web browser
- Or use a local server: `python3 -m http.server 8000` (then visit http://localhost:8000)

No package.json, no build system, no transpilation required.

## Architecture

### Core Game Flow

1. **Pokemon Selection Phase** (`pokemon_auswaehlen`, `waehle_pokemon_aus`):
   - Each player selects exactly 4 Pokemon from the available roster (28 Pokemon total)
   - Selection UI shows all Pokemon images in a yellow overlay
   - Selected Pokemon are stored in `spieler_taschen` object

2. **Battle Phase** (`wuerfeln`, `schlagen`):
   - Random player selected to attack first
   - Attacker rolls dice (1-6) to determine attack strength
   - Damage calculation: `(angriff * dice_roll) - verteidigung`
   - Type effectiveness adds +2 to dice roll
   - Super attack system multiplies damage when charged

3. **Pokemon Switching** (`pokemon_platzieren`):
   - When a Pokemon's HP reaches 0, next Pokemon automatically enters
   - Game ends when one player has no Pokemon remaining

### State Management

The game uses global state variables (no framework):

- `spieler_taschen`: Object containing each player's Pokemon team and super attack charge
  ```js
  {
    1: { super_attacke: 0, pokemons: [...] },
    2: { super_attacke: 0, pokemons: [...] }
  }
  ```
- `angreifende_spieler` / `verteidigende_spieler`: Track current turn
- `ist_mitten_im_angriff`: Lock to prevent multiple simultaneous dice rolls
- Pokemon objects are deep-cloned from `pokemons` array when selected to track individual HP

### Pokemon Data Structure

Each Pokemon in the `pokemons` array has:
- `name`: Identifier and image filename (German names)
- `hp`: Health points
- `angriff`: Attack stat
- `verteidigung`: Defense stat
- `super_attacke`: Number of turns needed to charge super attack (3-5)
- `type`: Array of 1-2 types (e.g., `['drache', 'flug']`)
- `effektiv`: Array of types this Pokemon is effective against

### Animation System

The game uses CSS classes and setTimeout chains for animations:

- `angreifen` class: Moves attacking Pokemon toward opponent
- `geschlagen` class: Shake animation on hit Pokemon
- `schuettel` class: Dice roll animation
- `super_attacke_voll`: Red glow overlay when super attack is charged
- All animations coordinated via setTimeout delays (100ms-1500ms)

### Audio System

Pre-loaded Audio objects with manual control:
- `pokemon_auswaehlen_mp3`: Looping background music during selection
- `super_attacke_voll_mp3`: Looping intensity music when super attack ready
- `schlagen_mp3`, `geschlagen_mp3`, `sieger_mp3`: Sound effects

## File Structure

- `index.html`: Game structure with dice, player zones, Pokemon selection overlay
- `index.js`: All game logic in single file (350 lines)
- `style.css`: All styling including animations (309 lines)
- `bilder/`: 28 Pokemon images (.webp) + arena background
- `mp3/`: 8 audio files for music and sound effects

## Key Implementation Details

### Damage Calculation (`schlagen`)
1. Check type effectiveness (+2 to dice if effective)
2. Calculate base damage: `(attack * dice) - defense`
3. Apply super attack multiplier if charged (empties super attack)
4. Otherwise increment super attack charge by 1
5. Update defender HP and trigger animations

### Pokemon Instance Management
Pokemon are deep-cloned when selected (`JSON.parse(JSON.stringify(pokemon))`) so each player's copy has independent HP. The `ist_im_kampf` property is added dynamically to track which Pokemon is currently active.

### Turn System
Turns switch automatically after each attack completes (via setTimeout chain). First attacker is randomly chosen. Super attack charge persists across Pokemon switches for each player.

## Language Note

All code is in German (variables, functions, comments). Pokemon names are German translations.
