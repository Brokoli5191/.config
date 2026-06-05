# Catppuccin Mocha Theme System

A TUI-flavored adaptation of [Catppuccin Mocha](https://catppuccin.com) applied to two desktop clients: **Spotify (via Spicetify)** and **Discord (via Vencord / system24)**. The look is uncompromisingly dark — pure OLED black with hairline borders, lavender accents, and monospace type throughout. Think mid-90s terminal × modern pastel palette.

This design system catalogs the colors, typography, layout rules, and component patterns shared across both surfaces so they can be re-applied to new mocks, prototypes, or downstream clients.

> **Status:** living document. Built from the source configs in [Brokoli5191/.config](https://github.com/Brokoli5191/.config) and the upstream themes [spicetify/spicetify-themes › text](https://github.com/spicetify/spicetify-themes/tree/master/text) and [refact0r/system24](https://github.com/refact0r/system24). Logo + brand assets pulled from [catppuccin/catppuccin](https://github.com/catppuccin/catppuccin).

---

## Index

```
.
├── README.md                       you are here
├── SKILL.md                        Agent-Skills-compatible entry point
├── colors_and_type.css             tokens — drop-in stylesheet
├── LICENSE                         (MIT, inherited from upstream configs)
│
├── assets/                         logos + brand imagery
│   ├── catppuccin-circle.png
│   ├── catppuccin-macchiato-square.png
│   └── catppuccin-macchiato-squircle.png
│
├── source/                         original config files (read-only reference)
│   ├── original-config-README.md
│   ├── discord/quickcss.txt
│   └── spotify/text-theme/{color.ini, user.css}
│
├── preview/                        Design System tab cards
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   └── components-*.html
│
└── ui_kits/
    ├── spicetify/                  Spotify recreation
    │   ├── README.md
    │   ├── index.html
    │   └── *.jsx
    └── vencord/                    Discord recreation
        ├── README.md
        ├── index.html
        └── *.jsx
```

---

## The two surfaces

| Surface  | Tool             | Upstream theme                                  | Local config                             |
| -------- | ---------------- | ----------------------------------------------- | ---------------------------------------- |
| Spotify  | Spicetify        | `text` (catppuccin-mocha variant)               | `source/spotify/text-theme/`             |
| Discord  | Vencord QuickCSS | `system24` (catppuccin-mocha-lavender variant)  | `source/discord/quickcss.txt`            |

Both inherit the Catppuccin Mocha palette but **override the base canvas to `#000000`** (Mocha's stock base is `#1e1e2e`), and both promote **lavender `#b4befe`** as the singular accent — replacing Spotify's brand green and Discord's brand blurple wholesale.

---

## Visual Foundations

### Background

* **Canvas is pure black `#000000`** — no gradients, no images, no noise. Borders create separation, not fills.
* `--bg-surface: #1a1a1a` and `--bg-surface-2: #2a2a2a` are the only two near-black surfaces used (for buttons, hover rows, modals).
* No full-bleed photographic backgrounds. No hand-drawn illustrations. No repeating patterns.
* The single optional brand image is the Catppuccin macchiato-square cat in the Discord DMs tile.

### Color

* **Single accent: lavender** (`#b4befe`). Used for primary buttons, focus rings, links, active states, banners, mentions, "now playing" markers — anywhere stock Spotify would be green or stock Discord would be blurple.
* **Status colors** are Catppuccin Mocha hues used semantically: red `#f38ba8` (errors / DND), green `hsl(115,54%,76%)` (online), yellow `hsl(41,86%,83%)` (idle), blue `hsl(199,76%,69%)` (informational), with a 5-stop tonal ramp each for hover/press states.
* **Text** is a 5-step ramp from `#cdd6f4` (text-2, headings) down to `#585b70` (text-5, timestamps).
* Catppuccin Mocha replaces **destructive red** on mute/deafen buttons with the accent itself — it's a deliberately non-alarming theme.

### Type

* **All-monospace**, always. JetBrains Mono on Spotify, DM Mono on Discord. The two are practically interchangeable.
* Body is **14px, light weight (300 on Discord / 400 on Spotify)**, line-height 1.2, with **`letter-spacing: -0.05ch`** to tighten monospace runs for readability.
* Display headers are rendered in the **"asciid"** font at **4× body size** to look like ASCII-art banners ("ascii titles" feature is `on` in system24). VT323 is the practical Google-Fonts fallback if `asciid` doesn't load.
* See `colors_and_type.css` for the full type scale and `--font-mono-*` variables.

### Borders, radii, shadows

* **Border radius: 0.** Sharp corners are non-negotiable — system24 ships with `--unrounding: on` and Spicetify text uses `--border-radius: 0px`. Avatars are the one exception (circles, because they're images).
* **Borders are 1–2px hairlines** in `hsla(235, 15%, 53%, 0.20)` (the `--active` token). On hover, panels swap to a lavender border (`--border-hover: var(--accent-2)`) with a 0.2s ease transition. This is the single most distinctive interaction in the system.
* **Shadows: essentially absent.** The hover ring on panels (`0 0 0 1px var(--accent-2)`) is the only "elevation" used.

### Hover / press / active states

* **Hover:** `hsla(235, 15%, 53%, 0.10)` tint over the row + a border-color swap to lavender. No scale, no translate.
* **Active / selected:** the same tint at `0.20` opacity, plus a lavender left-border accent on the channel/track row.
* **Pressed:** surface steps from `#1a1a1a` → `#2a2a2a`. No shrink, no shadow.
* **Transitions:** universally `0.2s ease`. No bouncy springs, no long durations.

### Layout rules

* **Panels are gutter-separated**, not stacked-flush. `--gap: 12px` is the canonical panel gap in Discord; same instinct on Spotify.
* **Panel labels** (the `[ Channels ]`, `[ Members ]`, `[ Now Playing ]` micro-headers above each pane) are a defining motif — `font-size: 11px`, `font-weight: 500`, in `--text-muted`, lowercase. See the `.panel-label` rule in `colors_and_type.css`.
* **ASCII loaders + ASCII channel headers** are turned on (`--ascii-loader: system24`, `--ascii-titles: on`). These appear as decorative banners at the top of empty channels.
* **Small user panel** (`--small-user-panel: on`) — Discord's "old style" compressed user strip is preferred over the modern stacked version.
* **Custom Spotify-like text progress bar** (`--custom-spotify-bar: on`) — the linear bar is replaced with a `▰▰▰▱▱▱▱▱` text-character progress indicator in the Discord activity panel.

### Transparency & blur

* Both themes ship with transparency/blur **off by default**. The opaque black canvas is the point. Optional flags exist (`--panel-blur: on`, `--transparency-tweaks: on`) for users running compositor-level transparency, but the canonical look is fully opaque.

### Animation

* **Transitions only — no entrance animations, no bounces, no parallax.** A flat `0.2s ease` is applied to border-color swaps, hover tints, list-item state, and the DMs icon SVG (`--dms-icon-svg-transition: 0.4s ease`).
* The biggest "animation" in the system is the ASCII spinner used for loading states.

### Imagery & iconography vibe

* **Cool, desaturated, lavender-leaning.** When album art / avatars are present, they're displayed at the source — no color-grading filters, but the surrounding chrome is so cool-toned that warm art stands out hard (which is the intent).
* **No emoji as decoration.** Emoji appear only where users type them. The system itself never uses 🚀 / ✨ / etc.
* **Unicode block characters as decoration:** `▰ ▱ █ ▓ ▒ ░ ─ │ ┌ ┐ └ ┘ ├ ┤` show up in panel labels, progress bars, dividers, and ASCII titles. This is the brand's visual signature alongside lavender.

---

## Content Fundamentals

### Tone

The configs are written in **first-person, casual, all-lowercase, German-English mix**. Examples from the upstream README:

* "all my configs"
* "small repo of the themes & configs i use"
* "spicetify with theme / its the text catppuccin mocha theme from spicetify with a few adaptopns"
* "put this (the folder) into /spicetify/themes"
* "edited system24 catppuccin mocha theme / turn on 'enable custom css' & paste content from quickcss.txt into 'edit quickcss'"

### Casing & punctuation

* **Lowercase by default** — including channel/panel labels in the UI ("channels", "members", "now playing"). Sentence-case is reserved for proper nouns and user-generated content.
* **Sparing punctuation** — sentences often end without a period in the source README. UI strings follow suit.
* **No exclamation marks.** No marketing energy.
* **Lists use `&` not `and`** ("themes & configs", "scroll up, scroll down, and space to jump").

### Voice

* **First-person, "i" not "I"** in author voice.
* **Second-person ("you") for instructions** ("put this folder into…", "paste content from… into…").
* No marketing, no taglines, no hype. The configs read like a friend's pinned setup notes — utilitarian, terse, slightly informal.

### Emoji

* **Effectively none.** The only emoji-adjacent characters are Unicode block-drawing characters used in ASCII art. Avoid all standard emoji in UI copy and assets.

---

## Iconography

* **No proprietary icon set in the configs.** Both themes ride on top of their host app's native icons (Spotify's bundled Spoticon-style glyphs; Discord's bundled Lucide-derived icons).
* **For new mocks**, the closest CDN-available icon set that matches the host apps' stroke weight and fill style is **[Lucide](https://lucide.dev)** (1.5–2px stroke, rounded line-caps, outline-by-default). Lucide is the recommended substitute — load via CDN: `https://unpkg.com/lucide@latest`. **Flagged substitution**: this is not in the original configs, it's our recommended match.
* **Unicode block characters** double as iconography: `▰▱ █ ▓ ▒ ░ ─ │ ▲ ▼ ◆ ●` for progress bars, dividers, status dots, etc. Use these freely.
* **Brand mark / logo:** the Catppuccin cat (3 variants in `assets/`). The macchiato-square variant is referenced explicitly in `source/discord/quickcss.txt` as the DMs button background.
* **Emoji as icons: forbidden.** No 🚀 / 🔥 / ✨ etc.

### Substitution flags

* **`asciid` font** is imported from `fonts.cdnfonts.com` in the upstream Spicetify theme — it's not on Google Fonts. The CSS imports it from that CDN; **VT323 is the practical fallback**. If you need an offline `.ttf`, please attach it and I'll wire it into `fonts/`.
* **JetBrains Mono** is self-hosted from `fonts/` — full 9-weight roman + italic family in `.woff2` (`Thin` → `ExtraBold`). Provided by the user.
* **DM Mono** is loaded from Google Fonts (no local copy yet). If you'd like it self-hosted, attach the `.woff2` files and I'll wire them in alongside JetBrains Mono.
* No bundled icon font in the source — Lucide is a recommended substitution, not a copy.

---

## How to use this system

1. **Drop in tokens** — `<link rel="stylesheet" href="colors_and_type.css">`. You get the full token set, fonts, and base type styles for free.
2. **Read the UI kits** — `ui_kits/spicetify/index.html` and `ui_kits/vencord/index.html` are interactive recreations. Read the JSX components for patterns you can lift.
3. **For Spicetify-flavored designs:** use JetBrains Mono + the panel-label convention + zero radius.
4. **For Discord-flavored designs:** use DM Mono + system24-style panel borders + lavender mentions + ASCII channel banners.

Both surfaces share the same tokens. The differences are font (`--font-mono-spotify` vs `--font-mono-discord`) and component shape, not color.

### UI kits at a glance

| Kit                    | Recreates                       | Components                                                                           |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| `ui_kits/spicetify/`   | Spotify (Spicetify `text` theme) | `TopBar`, `Sidebar`, `EntityHeader`, `TrackList`, `NowPlayingBar`                    |
| `ui_kits/vencord/`     | Discord (Vencord `system24`)    | `ServerList`, `ChannelList`, `ChatHeader`, `Message`, `Composer`, `MemberList`, `UserPanel`, `AsciiTitle` |

---

## Going further

Explore the upstream repos for everything not covered here:

* **Config source:** https://github.com/Brokoli5191/.config
* **Spicetify text theme:** https://github.com/spicetify/spicetify-themes/tree/master/text
* **Discord system24 theme:** https://github.com/refact0r/system24
* **Catppuccin palette & logos:** https://github.com/catppuccin/catppuccin
