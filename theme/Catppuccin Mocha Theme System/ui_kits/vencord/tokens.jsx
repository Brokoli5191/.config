// Shared design tokens + small primitives for the Vencord UI kit.
// Loaded before all *.jsx component files.

const tokens = {
  bg:       '#000000',
  surface:  '#1a1a1a',
  surface2: '#2a2a2a',
  hover:    'hsla(235, 15%, 53%, 0.10)',
  active:   'hsla(235, 15%, 53%, 0.20)',
  active2:  'hsla(235, 15%, 53%, 0.30)',
  border:        'hsla(235, 15%, 53%, 0.20)',
  borderLight:   'hsla(235, 15%, 53%, 0.10)',
  borderHover:   '#b4befe',
  buttonBorder:  'hsla(0, 0%, 100%, 0.10)',
  accent:   '#b4befe',
  accent4:  'hsl(232, 97%, 80%)',
  accent5:  'hsl(232, 97%, 75%)',
  red:      'hsl(343, 81%, 75%)',
  green:    'hsl(115, 54%, 76%)',
  yellow:   'hsl(41, 86%, 83%)',
  text1:    'hsl(226, 64%, 95%)',
  text2:    '#cdd6f4',
  text3:    '#bac2de',
  text4:    '#7f849c',
  text5:    '#585b70',
  font:     "'DM Mono', ui-monospace, Menlo, Consolas, monospace",
  ascii:    "'VT323', 'asciid', monospace",
  gap:      12,
  borderW:  2,
};

// Panel wrapper that handles the lavender-on-hover border swap.
function Panel({ children, style, label, labelRight, ...rest }) {
  return (
    <div
      style={{
        background: tokens.bg,
        border: `${tokens.borderW}px solid ${tokens.border}`,
        transition: 'border-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        minHeight: 0,
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = tokens.borderHover)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = tokens.border)}
      {...rest}
    >
      {label && (
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '6px 12px',
          borderBottom: `1px solid ${tokens.border}`,
          fontSize: 11, fontWeight: 500, color: tokens.text4,
          textTransform: 'lowercase', letterSpacing: 0,
          flexShrink: 0,
        }}>
          <span>[ {label} ]</span>
          {labelRight && <span style={{ color: tokens.text5 }}>{labelRight}</span>}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
}

// A tiny avatar with a presence dot.
function Avatar({ ch = '★', size = 36, color = tokens.accent, presence }) {
  const dotColor = {
    online: tokens.green, idle: tokens.yellow,
    dnd: tokens.red, streaming: tokens.accent, offline: tokens.text4,
  }[presence];
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: '50%',
        background: tokens.surface,
        border: `1px solid ${tokens.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, fontSize: size * 0.42,
      }}>{ch}</div>
      {dotColor && (
        <span style={{
          position: 'absolute', right: -2, bottom: -2,
          width: Math.max(10, size * 0.3), height: Math.max(10, size * 0.3),
          borderRadius: '50%', background: dotColor,
          border: `2px solid ${tokens.bg}`,
        }} />
      )}
    </div>
  );
}

Object.assign(window, { tokens, Panel, Avatar });
