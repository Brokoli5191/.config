// Right rail — members grouped by role with lavender headings.

function MemberList() {
  const groups = [
    { name: 'admin · 2',     members: [
      { name: 'brokoli',  ch: '★', color: tokens.accent, presence: 'online'    },
      { name: 'refact0r', ch: '◆', color: tokens.accent, presence: 'streaming' },
    ]},
    { name: 'mods · 3', members: [
      { name: 'joe',    ch: 'j', color: tokens.green, presence: 'online' },
      { name: 'kacper', ch: 'k', color: tokens.green, presence: 'idle' },
      { name: 'lina',   ch: 'l', color: tokens.green, presence: 'dnd' },
    ]},
    { name: 'online · 5', members: [
      { name: 'andre',  ch: 'a', color: tokens.text3, presence: 'online' },
      { name: 'mira',   ch: 'm', color: tokens.text3, presence: 'online' },
      { name: 'felix',  ch: 'f', color: tokens.text3, presence: 'idle' },
      { name: 'nina',   ch: 'n', color: tokens.text3, presence: 'online' },
      { name: 'oskar',  ch: 'o', color: tokens.text3, presence: 'online' },
    ]},
    { name: 'offline · 2', members: [
      { name: 'pauline', ch: 'p', color: tokens.text5, presence: 'offline' },
      { name: 'quinn',   ch: 'q', color: tokens.text5, presence: 'offline' },
    ]},
  ];

  return (
    <Panel style={{ width: 200 }} label="members">
      <div style={{ overflowY: 'auto', flex: 1, padding: '8px 0' }}>
        {groups.map((g) => (
          <div key={g.name} style={{ marginBottom: 12 }}>
            <div style={{
              padding: '4px 14px', fontSize: 10.5, fontWeight: 500,
              color: tokens.accent, textTransform: 'lowercase',
            }}>{g.name}</div>
            {g.members.map((m) => (
              <div key={m.name}
                style={{
                  padding: '4px 14px', display: 'flex', alignItems: 'center', gap: 10,
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = tokens.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <Avatar ch={m.ch} color={m.color} size={24} presence={m.presence} />
                <span style={{ fontSize: 12, color: m.color, fontWeight: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Panel>
  );
}

Object.assign(window, { MemberList });
