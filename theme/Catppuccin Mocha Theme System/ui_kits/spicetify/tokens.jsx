// Shared tokens + primitives for the Spicetify UI kit.

const tokens = {
  bg:       '#000000',
  surface:  '#1a1a1a',
  surface2: '#2a2a2a',
  hover:    'hsla(235, 15%, 53%, 0.10)',
  active:   'hsla(235, 15%, 53%, 0.20)',
  border:        'hsla(235, 15%, 53%, 0.20)',
  borderLight:   'hsla(235, 15%, 53%, 0.10)',
  borderHover:   '#b4befe',
  accent:   '#b4befe',
  accent4:  'hsl(232, 97%, 80%)',
  red:      'hsl(343, 81%, 75%)',
  green:    'hsl(115, 54%, 76%)',
  yellow:   'hsl(41, 86%, 83%)',
  text1:    'hsl(226, 64%, 95%)',
  text2:    '#cdd6f4',
  text3:    '#bac2de',
  text4:    '#7f849c',
  text5:    '#585b70',
  // Spotify-flavored Spicetify uses JetBrains Mono
  font:     "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace",
  ascii:    "'asciid', 'VT323', monospace",
  gap:      8,
};

function Panel({ children, style, label, labelRight, hoverable = true, ...rest }) {
  return (
    <div
      style={{
        background: tokens.bg,
        border: `1px solid ${tokens.border}`,
        transition: 'border-color 0.2s ease',
        display: 'flex', flexDirection: 'column',
        minWidth: 0, minHeight: 0,
        ...style,
      }}
      onMouseEnter={(e) => { if (hoverable) e.currentTarget.style.borderColor = tokens.borderHover; }}
      onMouseLeave={(e) => { if (hoverable) e.currentTarget.style.borderColor = tokens.border; }}
      {...rest}
    >
      {label && (
        <div style={{
          padding: '6px 12px',
          borderBottom: `1px solid ${tokens.border}`,
          fontSize: 11, fontWeight: 500, color: tokens.text4,
          textTransform: 'lowercase', letterSpacing: 0,
          display: 'flex', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <span>[ {label} ]</span>
          {labelRight && <span style={{ color: tokens.text5 }}>{labelRight}</span>}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}

function IconBtn({ ch, title, active, size = 26, onClick, ariaLabel }) {
  return (
    <button onClick={onClick} title={title} aria-label={ariaLabel || title}
      style={{
        width: size, height: size, padding: 0,
        background: 'transparent',
        border: `1px solid ${active ? tokens.accent : 'transparent'}`,
        color: active ? tokens.accent : tokens.text4,
        fontFamily: tokens.font, fontSize: 13,
        cursor: 'pointer', borderRadius: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'color 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = tokens.accent; e.currentTarget.style.borderColor = tokens.border; }}
      onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = tokens.text4; e.currentTarget.style.borderColor = 'transparent'; } }}
    >{ch}</button>
  );
}

Object.assign(window, { tokens, Panel, IconBtn });
