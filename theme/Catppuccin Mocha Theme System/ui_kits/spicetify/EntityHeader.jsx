// Big entity header — ASCII-font title + meta + play button.
// Spotify entity-header ("--font-family-header: asciid", 4× body size).

function EntityHeader({ kind = 'playlist', title, owner, count, duration, onPlay, playing }) {
  return (
    <div style={{
      padding: '24px 24px 16px',
      borderBottom: `1px solid ${tokens.border}`,
      display: 'flex', flexDirection: 'column', gap: 14,
      flexShrink: 0,
    }}>
      <div style={{ fontSize: 10.5, color: tokens.text5, textTransform: 'lowercase', letterSpacing: 0 }}>
        [ {kind} ]
      </div>
      <h1 style={{
        margin: 0,
        fontFamily: tokens.ascii,
        fontSize: 56, lineHeight: 1,
        color: tokens.text2,
        letterSpacing: 0,
        textTransform: 'lowercase',
        wordBreak: 'break-word',
      }}>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: tokens.text4 }}>
        <span style={{ color: tokens.text3 }}>{owner}</span>
        <span>·</span>
        <span>{count} songs</span>
        <span>·</span>
        <span>{duration}</span>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <button onClick={onPlay}
          style={{
            background: tokens.accent, color: '#000',
            border: `1px solid ${tokens.accent}`,
            fontFamily: tokens.font, fontWeight: 500, fontSize: 12,
            padding: '6px 18px', cursor: 'pointer', borderRadius: 0,
            whiteSpace: 'nowrap',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = tokens.accent4)}
          onMouseLeave={(e) => (e.currentTarget.style.background = tokens.accent)}
        >{playing ? '❚❚  pause' : '▶  play'}</button>
        <button style={ghostBtn}>♥&nbsp;&nbsp;saved</button>
        <button style={ghostBtn}>↓&nbsp;&nbsp;download</button>
        <button style={ghostBtn}>···</button>
      </div>
    </div>
  );
}

const ghostBtn = {
  background: 'transparent', color: tokens.text3,
  border: `1px solid ${tokens.border}`,
  fontFamily: tokens.font, fontSize: 12,
  padding: '6px 14px', cursor: 'pointer', borderRadius: 0,
  whiteSpace: 'nowrap',
  transition: 'border-color 0.2s ease, color 0.2s ease',
};

Object.assign(window, { EntityHeader });
