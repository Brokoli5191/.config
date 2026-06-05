// Top bar of the chat — channel title, members count, search.

function ChatHeader({ channel, memberCount = 142, onShowMembers }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      padding: '8px 14px', height: 40,
      borderBottom: `1px solid ${tokens.border}`,
      flexShrink: 0,
    }}>
      <span style={{ color: tokens.text4, marginRight: 6, fontFamily: tokens.font }}>#</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: tokens.text2 }}>{channel}</span>
      <span style={{ flex: 1 }} />
      <button onClick={onShowMembers}
        style={{
          background: 'transparent', border: `1px solid ${tokens.border}`,
          color: tokens.text4, fontFamily: tokens.font, fontSize: 11,
          padding: '3px 8px', cursor: 'pointer', borderRadius: 0,
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = tokens.accent; e.currentTarget.style.color = tokens.accent; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.border; e.currentTarget.style.color = tokens.text4; }}
      >members · {memberCount}</button>
    </div>
  );
}

Object.assign(window, { ChatHeader });
