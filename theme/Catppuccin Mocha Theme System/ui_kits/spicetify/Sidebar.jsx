// Left library sidebar — playlists + nav.

function Sidebar({ activeItem, onSelect }) {
  const sections = [
    {
      label: 'browse',
      items: [
        { id: 'home',   ch: '⌂', name: 'home' },
        { id: 'search', ch: '⌕', name: 'search' },
        { id: 'radio',  ch: '◉', name: 'radio' },
      ],
    },
    {
      label: 'your library',
      items: [
        { id: 'liked',    ch: '♥', name: 'liked songs',        meta: '247 songs' },
        { id: 'mocha',    ch: '♪', name: 'mocha mixtape',      meta: 'playlist · 32' },
        { id: 'tui',      ch: '♪', name: 'tui ambient',        meta: 'playlist · 18' },
        { id: 'lavender', ch: '♪', name: 'lavender hours',     meta: 'playlist · 41' },
        { id: 'monaco',   ch: '♪', name: 'monospace classics', meta: 'playlist · 67' },
        { id: 'study',    ch: '♪', name: 'study slow',         meta: 'playlist · 23' },
      ],
    },
  ];

  return (
    <Panel style={{ width: 250 }} label="library" labelRight="6 playlists">
      <div style={{ overflowY: 'auto', flex: 1 }}>
        {sections.map((sec) => (
          <div key={sec.label} style={{ padding: '10px 0' }}>
            <div style={{
              padding: '0 14px 6px', fontSize: 10.5, fontWeight: 500,
              color: tokens.text5, textTransform: 'lowercase',
            }}>[ {sec.label} ]</div>
            {sec.items.map((it) => {
              const active = activeItem === it.id;
              return (
                <div key={it.id} onClick={() => onSelect(it.id)}
                  style={{
                    padding: '6px 14px 6px 10px', margin: '0 4px',
                    display: 'flex', alignItems: 'center', gap: 10,
                    cursor: 'pointer',
                    background: active ? tokens.active : 'transparent',
                    borderLeft: `2px solid ${active ? tokens.accent : 'transparent'}`,
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = tokens.hover; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ width: 14, textAlign: 'center', color: active ? tokens.accent : tokens.text4, fontSize: 13 }}>{it.ch}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                    <span style={{ fontSize: 12.5, color: active ? tokens.text2 : tokens.text3, fontWeight: active ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</span>
                    {it.meta && <span style={{ fontSize: 10, color: tokens.text5 }}>{it.meta}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{
        padding: '10px 14px',
        borderTop: `1px solid ${tokens.border}`,
        fontSize: 10.5, color: tokens.text5,
      }}>+ create playlist</div>
    </Panel>
  );
}

Object.assign(window, { Sidebar });
