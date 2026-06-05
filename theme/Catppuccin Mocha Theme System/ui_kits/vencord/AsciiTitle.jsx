// Decorative ASCII channel banner shown at the top of each channel.
// system24 ships this as `--ascii-titles: on`. We render the channel
// name in a faux-pixel display font and surround it with a TUI box.

function AsciiTitle({ name = 'design-system' }) {
  return (
    <div style={{
      padding: '20px 14px 12px',
      display: 'flex', alignItems: 'flex-start', gap: 16,
      userSelect: 'none',
    }}>
      <pre style={{
        fontFamily: tokens.font,
        color: tokens.accent,
        whiteSpace: 'pre',
        letterSpacing: 0,
        fontSize: 11,
        lineHeight: 1.05,
        margin: 0,
      }}>{`┌─────────────────────┐
│  ┌─┐ ┌─┐ ┌─┐ ┌─┐    │
│  └─┘ └─┘ └─┘ └─┘    │
│                     │
└─────────────────────┘`}</pre>
      <div style={{ paddingTop: 6 }}>
        <div style={{
          fontFamily: tokens.ascii,
          fontSize: 36,
          lineHeight: 1,
          color: tokens.text2,
          letterSpacing: 0,
          textTransform: 'lowercase',
        }}>#{name}</div>
        <div style={{
          marginTop: 6,
          fontSize: 11,
          color: tokens.text4,
          lineHeight: 1.5,
        }}>this is the start of <span style={{ color: tokens.text2 }}>#{name}</span>. say hi.</div>
      </div>
    </div>
  );
}

Object.assign(window, { AsciiTitle });
