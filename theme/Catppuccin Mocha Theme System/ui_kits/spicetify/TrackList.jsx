// Track list table. Columns: #, title, album, duration.

function TrackList({ tracks, currentTrackId, playing, onPlayTrack }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '36px 1fr 1fr 80px',
        gap: 14,
        padding: '6px 24px',
        borderBottom: `1px solid ${tokens.border}`,
        fontSize: 10.5, color: tokens.text5,
        textTransform: 'lowercase',
        position: 'sticky', top: 0, background: '#000', zIndex: 1,
      }}>
        <span>#</span>
        <span>title</span>
        <span>album</span>
        <span style={{ textAlign: 'right' }}>⏱</span>
      </div>
      {tracks.map((t, i) => {
        const isCurrent = t.id === currentTrackId;
        return (
          <div key={t.id} onDoubleClick={() => onPlayTrack(t.id)}
            style={{
              display: 'grid',
              gridTemplateColumns: '36px 1fr 1fr 80px',
              gap: 14,
              padding: '8px 24px',
              fontSize: 13,
              alignItems: 'center',
              cursor: 'pointer',
              background: isCurrent ? tokens.active : 'transparent',
              borderLeft: `2px solid ${isCurrent ? tokens.accent : 'transparent'}`,
              marginLeft: -2,
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => { if (!isCurrent) e.currentTarget.style.background = tokens.hover; }}
            onMouseLeave={(e) => { if (!isCurrent) e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ color: isCurrent ? tokens.accent : tokens.text4, fontSize: 12 }}>
              {isCurrent && playing ? '▸' : i + 1}
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ color: isCurrent ? tokens.accent : tokens.text2, fontWeight: isCurrent ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</div>
              <div style={{ color: tokens.text4, fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.artist}</div>
            </div>
            <span style={{ color: tokens.text4, fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.album}</span>
            <span style={{ color: tokens.text4, fontSize: 12, textAlign: 'right' }}>{t.duration}</span>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { TrackList });
