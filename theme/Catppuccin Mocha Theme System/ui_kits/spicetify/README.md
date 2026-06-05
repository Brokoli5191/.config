# Spicetify · text-theme — UI kit

Recreation of Spotify as themed by the [`text`](https://github.com/spicetify/spicetify-themes/tree/master/text) Spicetify theme, with the local Catppuccin Mocha + lavender adaptations from `source/spotify/text-theme/`.

- **Font:** JetBrains Mono, 14px / 400, `letter-spacing: -0.05ch`
- **Display headers:** `asciid` / VT323 at 4× body size for entity titles ("ascii titles")
- **Layout:** library sidebar (left), main view (center), now-playing sidebar (right) — all bordered, no rounded corners
- **Accent:** lavender `#b4befe` replaces Spotify's green throughout — play buttons, progress bar, "now playing" indicator
- **Cover art:** intentionally hidden by default (`--display-coverart-image: none`, `--display-tracklist-image: none`) — the theme is "text-first"

## Components

| File                | What it is                                                |
| ------------------- | --------------------------------------------------------- |
| `tokens.jsx`        | Design tokens + `<Panel>` / `<IconBtn>` primitives        |
| `TopBar.jsx`        | Navigation arrows, search box, user menu                  |
| `Sidebar.jsx`       | Library list with `[ your library ]` panel label          |
| `EntityHeader.jsx`  | Big ASCII entity title (album / artist / playlist)        |
| `TrackList.jsx`     | The track table — `#`, title, album, duration columns     |
| `NowPlayingBar.jsx` | Bottom strip with text-character progress bar             |

Open `index.html` for an interactive composite. Click between playlists, toggle play/pause, scrub the progress bar.
