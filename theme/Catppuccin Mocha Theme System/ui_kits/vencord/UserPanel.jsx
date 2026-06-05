// Compact bottom-left user strip (the "small user panel" system24 mode).

function UserPanel({ user = { name: 'brokoli', tag: 'online', ch: '★' } }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 12px',
      borderTop: `1px solid ${tokens.border}`,
      flexShrink: 0,
    }}>
      <Avatar ch={user.ch} color={tokens.accent} size={28} presence="online" />
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: 12, color: tokens.text2, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</span>
        <span style={{ fontSize: 10, color: tokens.text4 }}>{user.tag}</span>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button title="mute" style={iconBtn}>m</button>
        <button title="deafen" style={iconBtn}>d</button>
        <button title="settings" style={iconBtn}>⚙</button>
      </div>
    </div>
  );
}

const iconBtn = {
  background: 'transparent',
  border: `1px solid ${tokens.border}`,
  color: tokens.text4,
  fontFamily: tokens.font, fontSize: 10,
  width: 22, height: 22, cursor: 'pointer', borderRadius: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

Object.assign(window, { UserPanel });
