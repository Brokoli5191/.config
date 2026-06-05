// Message composer with attach + emoji buttons.

function Composer({ channel, onSend }) {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        margin: 12, marginTop: 0,
        display: 'flex', alignItems: 'center', gap: 8,
        background: tokens.bg,
        border: `1px solid ${tokens.border}`,
        padding: '8px 10px',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = tokens.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = tokens.border)}
      onFocus={(e) => (e.currentTarget.style.borderColor = tokens.accent)}
      onBlur={(e) => (e.currentTarget.style.borderColor = tokens.border)}
    >
      <button type="button" title="attach"
        style={{ background: 'transparent', border: 0, color: tokens.text4, cursor: 'pointer', fontFamily: tokens.font, fontSize: 16, padding: 0 }}>+</button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`message #${channel}`}
        style={{
          flex: 1, background: 'transparent', border: 0, outline: 'none',
          fontFamily: tokens.font, fontSize: 13, color: tokens.text2,
          letterSpacing: '-0.05ch',
        }}
      />
      <button type="button" title="gif"
        style={{ background: 'transparent', border: 0, color: tokens.text4, cursor: 'pointer', fontFamily: tokens.font, fontSize: 11, padding: 0 }}>gif</button>
      <button type="button" title="emoji"
        style={{ background: 'transparent', border: 0, color: tokens.text4, cursor: 'pointer', fontFamily: tokens.font, fontSize: 14, padding: 0 }}>☺</button>
      <button type="submit"
        style={{
          background: value.trim() ? tokens.accent : 'transparent',
          border: `1px solid ${value.trim() ? tokens.accent : tokens.border}`,
          color: value.trim() ? '#000' : tokens.text4,
          fontFamily: tokens.font, fontSize: 11, fontWeight: 500,
          padding: '3px 10px', cursor: 'pointer', borderRadius: 0,
          transition: 'all 0.2s ease',
        }}>send ↵</button>
    </form>
  );
}

Object.assign(window, { Composer });
