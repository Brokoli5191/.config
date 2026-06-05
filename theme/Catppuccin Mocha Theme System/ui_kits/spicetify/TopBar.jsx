// Top bar — nav arrows, search, user menu.

function TopBar({ onSearch, query, setQuery }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '6px 12px', height: 42,
      borderBottom: `1px solid ${tokens.border}`,
      flexShrink: 0, background: '#000',
    }}>
      <IconBtn ch="◂" title="back" />
      <IconBtn ch="▸" title="forward" />
      <div style={{ flex: 1, position: 'relative' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search · songs, artists, podcasts…"
          style={{
            width: '100%', boxSizing: 'border-box',
            background: tokens.bg,
            border: `1px solid ${tokens.border}`,
            color: tokens.text3,
            fontFamily: tokens.font, fontSize: 12.5,
            letterSpacing: '-0.05ch',
            padding: '6px 10px 6px 26px',
            outline: 'none',
            borderRadius: 0,
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = tokens.accent)}
          onBlur={(e) => (e.target.style.borderColor = tokens.border)}
        />
        <span style={{
          position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
          color: tokens.text4, fontSize: 12, pointerEvents: 'none',
        }}>⌕</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{
          background: 'transparent', border: `1px solid ${tokens.border}`,
          color: tokens.text3, fontFamily: tokens.font, fontSize: 11,
          padding: '4px 10px', cursor: 'pointer', borderRadius: 0,
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = tokens.accent; e.currentTarget.style.color = tokens.accent; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.border; e.currentTarget.style.color = tokens.text3; }}
        >upgrade</button>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: tokens.surface, border: `1px solid ${tokens.border}`,
          color: tokens.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
        }}>★</div>
      </div>
    </div>
  );
}

Object.assign(window, { TopBar });
