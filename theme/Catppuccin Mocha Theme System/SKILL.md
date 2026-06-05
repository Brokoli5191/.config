---
name: catppuccin-mocha-design
description: Use this skill to generate well-branded interfaces and assets for the Catppuccin Mocha Theme System (TUI-style desktop theming for Spotify/Spicetify and Discord/Vencord), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key reference files:
- `README.md` — full visual + content foundations
- `colors_and_type.css` — drop-in stylesheet with all design tokens
- `preview/*.html` — design system tab cards (palette swatches, type specimens, spacing scale, component states)
- `ui_kits/spicetify/` — Spotify-as-Spicetify recreation (JetBrains Mono, panel labels, ASCII headers)
- `ui_kits/vencord/` — Discord-as-Vencord/system24 recreation (DM Mono, lavender mentions, sharp panels)
- `source/` — read-only original config files for ground truth

Cardinal rules:
1. Canvas is `#000000`. Never invent gradients or background images.
2. Lavender `#b4befe` is the only accent. Use it sparingly.
3. Monospace everywhere — JetBrains Mono (Spotify) or DM Mono (Discord).
4. Border radius is `0`. Avatars are the only exception.
5. Borders, not shadows, separate panels. Hairline 1–2px, hover → lavender.
6. All lowercase in UI strings. No emoji. Unicode block characters (`▰▱ █ ▓ ▒ ─ │`) are welcome.
