# Vencord · system24 — UI kit

Recreation of Discord's main client view as themed by [refact0r/system24](https://github.com/refact0r/system24) (Catppuccin Mocha lavender variant), with the local tweaks from `source/discord/quickcss.txt`.

- **Font:** DM Mono, weight 300, `letter-spacing: -0.05ch`
- **Layout:** three columns (server-rail / channel-list / chat) + right member-list, separated by 12px gutters
- **Panels:** every pane wrapped in a hairline border that swaps to lavender on hover
- **Accent:** lavender `#b4befe` replaces blurple everywhere (links, mentions, send button, "streaming" status, mute/deafen icons)
- **Corners:** `border-radius: 0` everywhere except avatars

## Components

| File              | What it is                                                     |
| ----------------- | -------------------------------------------------------------- |
| `ServerList.jsx`  | Left rail with server squares + DMs button (cat tile)          |
| `ChannelList.jsx` | Channel sidebar with `[ channels ]` panel labels               |
| `ChatHeader.jsx`  | Channel title bar with inbox button at right                   |
| `Message.jsx`     | One chat message — rest / mention / reply variants             |
| `Composer.jsx`    | The message composer with attach + emoji buttons               |
| `MemberList.jsx`  | Right rail grouped by role with lavender heading               |
| `UserPanel.jsx`   | Compact bottom-left user strip (system24 "small" variant)      |
| `AsciiTitle.jsx`  | Decorative ASCII channel banner shown at top of empty channels |

Open `index.html` for an interactive composite. Click between channels, send a message, hover panels to see the border-color transition.
