// Channel sidebar — category collapses + channel rows.

function ChannelList({ activeChannel, onSelectChannel, serverName = 'catppuccin' }) {
  const cats = [
    {
      name: 'info',
      channels: [
        { id: 'welcome',       name: 'welcome' },
        { id: 'rules',         name: 'rules' },
        { id: 'announcements', name: 'announcements', unread: 2 },
      ]
    },
    {
      name: 'discussion',
      channels: [
        { id: 'general',       name: 'general' },
        { id: 'design-system', name: 'design-system' },
        { id: 'themes',        name: 'themes', mention: true },
        { id: 'random',        name: 'random', muted: true },
      ]
    },
    {
      name: 'voice',
      channels: [
        { id: 'lounge',  name: 'lounge', voice: true },
        { id: 'studio',  name: 'studio', voice: true },
      ]
    },
  ];

  return (
    <Panel style={{ width: 220 }}>
      <div style={{
        padding: '10px 14px',
        borderBottom: `1px solid ${tokens.border}`,
        fontSize: 13, fontWeight: 500, color: tokens.text2,
        textTransform: 'lowercase', letterSpacing: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span>{serverName}</span>
        <span style={{ color: tokens.text4, fontSize: 12 }}>▾</span>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, padding: '8px 0' }}>
        {cats.map((cat) => (
          <div key={cat.name} style={{ marginBottom: 10 }}>
            <div style={{
              padding: '4px 14px',
              fontSize: 10.5, fontWeight: 500, color: tokens.text5,
              textTransform: 'lowercase', letterSpacing: 0,
            }}>[ {cat.name} ]</div>
            {cat.channels.map((c) => {
              const active = activeChannel === c.id;
              return (
                <div key={c.id} onClick={() => onSelectChannel(c.id)}
                  style={{
                    padding: '4px 14px 4px 10px',
                    margin: '0 4px',
                    fontSize: 13,
                    fontFamily: tokens.font,
                    color: active ? tokens.text2 : c.muted ? tokens.text5 : c.unread || c.mention ? tokens.text2 : tokens.text3,
                    fontWeight: c.unread || c.mention ? 500 : 300,
                    background: active ? tokens.active : 'transparent',
                    borderLeft: `2px solid ${active ? tokens.accent : 'transparent'}`,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6,
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = tokens.hover; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ width: 12, textAlign: 'center', color: tokens.text4 }}>
                    {c.voice ? '♪' : '#'}
                  </span>
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {c.name}
                  </span>
                  {c.mention && <span style={{
                    background: tokens.red, color: '#000',
                    fontSize: 10, padding: '0 5px', lineHeight: '14px',
                  }}>!</span>}
                  {c.unread && <span style={{
                    background: tokens.red, color: '#000',
                    fontSize: 10, padding: '0 5px', lineHeight: '14px',
                  }}>{c.unread}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Panel>
  );
}

Object.assign(window, { ChannelList });
