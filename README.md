# 🐉 Game of Thrones – The Seven Kingdoms Theme

> *"When you play the game of thrones, you win or you die."*

A complete, immersive VS Code experience inspired by the world of Westeros. Featuring **6 color themes**, **custom file & folder icons**, and full terminal theming.

---

## 🏰 Themes Included

| Theme | House | Vibe |
|-------|-------|------|
| **The Iron Throne** | — | Rich black, deep crimson, Lannister gold |
| **House Stark** | 🐺 Stark | Arctic blues, frost greens, steel grays |
| **House Lannister** | 🦁 Lannister | Casterly gold, deep crimson, amber |
| **House Targaryen** | 🔥 Targaryen | Dragon fire oranges, ash black, ember red |
| **Night's Watch** | ⚔️ Night's Watch | Pitch black, charcoal, dim silver |
| **Beyond the Wall** | ❄️ White Walkers | High contrast icy blues, stark white |

---

## 🗺️ Icon Theme: Westeros

### File Icons
Each language gets its own Westerosi color story:

- **`.js`** → Lannister Gold — *Dragon-backed wealth*
- **`.ts`** → Stark Blue — *Cold precision of the North*
- **`.py`** → Dragon Green — *Ancient Valyrian magic*
- **`.html`** → Targaryen Fire — *Red keep's flames*
- **`.css`** → Tully Blue — *The rivers of the Riverlands*
- **`.rs`** → Ironwood Orange — *Forged in the East*
- **`.go`** → Ice Teal — *Speed of a raven*
- **`.md`** → Parchment — *Maester's scrolls*
- **`.json`** → Casterly Gold — *The vault's data*
- **`.sql`** → Deep Blue — *The sea routes*
- **`.vue`** → Meadow Green — *The Reach's fields*
- **`.svelte`** → Wildfire Orange — *Burns everything*
- **`.yaml/.yml`** → Herb Green — *Maester's herbs*
- **`.sh`** → Night Green — *The Unsullied march*
- **`.docker`** → Iron Blue — *Iron Fleet*
- **`.env`** → Secret Gold — *Hidden confessions*

### Folder Icons
Named folders get house-themed sigil icons:

| Folder | Style | Inspiration |
|--------|-------|-------------|
| `src/` | Crossed Swords Gold | The Iron Throne seat of power |
| `components/` | Stark Shield Blue | Winterfell's defenses |
| `assets/` | Treasury Gold | The Lannister vaults |
| `tests/` | Crossbow Green | The Night's Watch |
| `docs/` | Parchment Brown | Maester's library |
| `node_modules/` | Dungeon Black | The Black Cells |
| `.git/` | Dragon Flame Red | Dragonfire archives |
| `dist/` | Amethyst Purple | Alchemists' potions |
| `public/` | Open Gates Blue | King's Landing gates |
| `config/` | Forge Orange | The smithy |
| `api/` | Raven Gold | The raven network |
| `hooks/` | Anchor Red | The Iron Islands |
| `styles/` | Tapestry Blue | The great tapestries |
| `utils/` | Quartermaster Green | The supply lines |

---

## 🖥️ Terminal Colors

Full ANSI color mapping for all themes:

| Color | Iron Throne | House Stark | Night's Watch |
|-------|-------------|-------------|---------------|
| Black | `#0D0D0D` | `#0D1117` | `#040404` |
| Red | Targaryen `#8B0000` | `#FF7B72` | `#800000` |
| Green | `#1E8449` | `#3FB950` | `#2A5A2A` |
| Yellow | Lannister `#CFB53B` | `#D29922` | `#5A5A00` |
| Blue | `#1F618D` | `#388BFD` | `#1A2A4A` |
| Magenta | `#6C3483` | `#BC8CFF` | `#4A1A4A` |
| Cyan | `#1A5276` | `#39C5CF` | `#1A3A4A` |
| White | Parchment `#D4C5A9` | `#CDD9E5` | `#B0B0B0` |

---

## 🗡️ Installation

### From VS Code Marketplace
1. Open VS Code → Extensions (`Ctrl+Shift+X`)
2. Search `Game of Thrones Theme`
3. Click Install

### From `.vsix` file
```bash
code --install-extension game-of-thrones-theme-1.0.0.vsix
```

### Local Development
```bash
git clone https://github.com/YOUR_USERNAME/game-of-thrones-theme
cd game-of-thrones-theme
code .
# Press F5 to launch Extension Development Host
```

---

## 🔨 Publishing

```bash
npm install -g @vscode/vsce

# Login (create token at dev.azure.com)
vsce login YOUR_PUBLISHER_NAME

# Package
vsce package

# Publish
vsce publish
```

---

## 🏛️ Recommended Settings

Add to your `settings.json` for the full experience:

```json
{
  "workbench.colorTheme": "GOT: The Iron Throne (Dark)",
  "workbench.iconTheme": "got-icons-westeros",
  "editor.fontFamily": "Cascadia Code, Fira Code, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "editor.letterSpacing": 0.3,
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.fontFamily": "Cascadia Code, monospace",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "workbench.tree.indent": 16,
  "workbench.tree.renderIndentGuides": "always"
}
```

---

## 🐉 Font Recommendations

For the best Westerosi coding experience:

- **[Cascadia Code](https://github.com/microsoft/cascadia-code)** — ligatures, free
- **[Fira Code](https://github.com/tonsky/FiraCode)** — classic coding font with ligatures
- **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** — sharp and clean

---

## 🦁 Contributing

Pull requests are welcome! Want to add a new house theme? House Baratheon (storm gold/black), House Greyjoy (kraken steel), House Martell (desert orange), and House Tyrell (rose garden) are all waiting to be born.

---

## 📜 License

MIT — *"Words are wind"*

---

*"The night is dark and full of terrors... but your code editor doesn't have to be."*
