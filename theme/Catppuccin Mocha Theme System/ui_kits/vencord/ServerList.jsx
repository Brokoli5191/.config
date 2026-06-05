// Left server rail. Tall narrow column of square server icons + DMs button.

function ServerList({ activeServer, onSelectServer }) {
  const servers = [
    { id: 'dms', kind: 'dms', label: 'direct messages' },
    { id: 'cat', label: 'catppuccin', ch: '★', tone: tokens.accent },
    { id: 'sys', label: 'system24',  ch: '◆', tone: tokens.green },
    { id: 'spc', label: 'spicetify', ch: '♪', tone: tokens.yellow },
    { id: 'vnc', label: 'vencord',   ch: '▲', tone: tokens.red },
    { id: 'tui', label: 'tui-club',  ch: '▒', tone: tokens.text3 },
  ];

  return (
    <Panel style={{ width: 64, padding: 8, gap: 8, alignItems: 'center' }}>
      {servers.map((s) => {
        const active = activeServer === s.id;
        if (s.kind === 'dms') {
          return (
            <button key={s.id} title={s.label} onClick={() => onSelectServer(s.id)}
              style={{
                width: 44, height: 44, padding: 0, border: 0, cursor: 'pointer',
                backgroundImage: 'url(../../assets/catppuccin-macchiato-square.png)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: 0,
                outline: active ? `2px solid ${tokens.accent}` : '2px solid transparent',
                outlineOffset: -2,
              }} />
          );
        }
        return (
          <button key={s.id} title={s.label} onClick={() => onSelectServer(s.id)}
            style={{
              width: 44, height: 44, background: tokens.surface,
              border: `1px solid ${active ? tokens.accent : tokens.border}`,
              color: s.tone, fontFamily: tokens.font, fontSize: 18,
              cursor: 'pointer', borderRadius: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = tokens.accent; }}
            onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = tokens.border; }}
          >{s.ch}</button>
        );
      })}
      <div style={{ height: 1, width: 28, background: tokens.border, margin: '4px 0' }} />
      <button title="add server"
        style={{ width: 44, height: 44, background: 'transparent',
          border: `1px dashed ${tokens.border}`, color: tokens.text4,
          fontFamily: tokens.font, fontSize: 18, cursor: 'pointer', borderRadius: 0 }}>+</button>
    </Panel>
  );
}

Object.assign(window, { ServerList });
