// One message. Three variants: rest, mention, reply.

function Message({ author, time, body, ch, color, mention = false, replyTo, variant }) {
  // variant: 'rest' | 'mention' | 'reply'
  const isMention = variant === 'mention';
  const isReply = variant === 'reply';

  const bg = isMention
    ? `linear-gradient(to right, color-mix(in hsl, ${tokens.accent}, transparent 90%) 40%, transparent)`
    : isReply
    ? `linear-gradient(to right, color-mix(in hsl, ${tokens.text3}, transparent 90%) 40%, transparent)`
    : 'transparent';

  const leftBorder = isMention ? tokens.accent : isReply ? tokens.text3 : 'transparent';

  return (
    <div style={{
      display: 'flex', gap: 12,
      padding: '6px 14px 6px 10px',
      borderLeft: `4px solid ${leftBorder}`,
      background: bg,
      transition: 'background 0.15s ease',
    }}
    onMouseEnter={(e) => { if (!isMention && !isReply) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    onMouseLeave={(e) => { if (!isMention && !isReply) e.currentTarget.style.background = 'transparent'; }}>
      <Avatar ch={ch} color={color || tokens.accent} size={36} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
        {replyTo && (
          <div style={{ fontSize: 10.5, color: tokens.text4, paddingLeft: 2, marginBottom: 1 }}>
            ↳ replying to <span style={{ color: tokens.accent }}>@{replyTo.author}</span> — "{replyTo.snippet}"
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <span style={{ color: color || tokens.accent, fontWeight: 500, fontSize: 13 }}>{author}</span>
          <span style={{ color: tokens.text5, fontSize: 10.5 }}>{time}</span>
        </div>
        <div style={{ color: tokens.text3, fontSize: 13, lineHeight: 1.4, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {mention ? (
            <>
              <span style={{ color: tokens.accent, background: 'color-mix(in hsl, ' + tokens.accent + ', transparent 80%)', padding: '0 2px' }}>
                @{mention}
              </span>
              {' '}
              {body}
            </>
          ) : body}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Message });
