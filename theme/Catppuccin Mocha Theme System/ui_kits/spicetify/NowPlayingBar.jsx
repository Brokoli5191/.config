// Bottom now-playing strip with a text-character progress bar (▰▱).

function NowPlayingBar({ track, playing, onTogglePlay, progress, setProgress }) {
  // 24-char text progress bar
  const total = 24;
  const filled = Math.round((progress / 100) * total);

  if (!track) {
    return (
      <Panel hoverable={false} style={{ flexShrink: 0, height: 70 }}>
        <div style={{ padding: '0 16px', height: '100%', display: 'flex', alignItems: 'center', color: tokens.text5, fontSize: 12 }}>
          [ nothing playing ]
        </div>
      </Panel>
    );
  }

  // Format time mm:ss from 0–100 progress over a track duration like "3:42"
  const [tm, ts] = track.duration.split(':').map(Number);
  const totalSec = tm * 60 + ts;
  const elapsedSec = Math.floor((progress / 100) * totalSec);
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <Panel hoverable={false} style={{ flexShrink: 0, height: 70 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        alignItems: 'center', gap: 16,
        padding: '0 16px', height: '100%',
      }}>
        {/* track info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
          <div style={{
            width: 44, height: 44, background: tokens.surface,
            border: `1px solid ${tokens.border}`,
            color: tokens.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
          }}>♪</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 13, color: tokens.text2, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{track.title}</span>
            <span style={{ fontSize: 11, color: tokens.text4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{track.artist}</span>
          </div>
          <button style={{
            background: 'transparent', border: 0, color: tokens.text4,
            fontFamily: tokens.font, fontSize: 14, cursor: 'pointer',
          }}>♥</button>
        </div>

        {/* controls + progress */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button style={controlBtn}>⇆</button>
            <button style={controlBtn}>◂◂</button>
            <button onClick={onTogglePlay} style={{
              ...controlBtn,
              border: `1px solid ${tokens.accent}`,
              color: tokens.accent,
              width: 28, height: 28,
            }}>{playing ? '❚❚' : '▶'}</button>
            <button style={controlBtn}>▸▸</button>
            <button style={controlBtn}>↻</button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '40px 1fr 40px',
            gap: 10, alignItems: 'center', width: '100%',
            fontSize: 10.5, color: tokens.text4,
          }}>
            <span style={{ textAlign: 'right' }}>{fmt(elapsedSec)}</span>
            <div onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setProgress(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
            }}
            style={{ fontFamily: tokens.font, fontSize: 13, letterSpacing: 0, cursor: 'pointer', userSelect: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              <span style={{ color: tokens.accent }}>{'▰'.repeat(filled)}</span>
              <span style={{ color: tokens.text5 }}>{'▱'.repeat(total - filled)}</span>
            </div>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* volume + extras */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end', color: tokens.text4 }}>
          <button style={controlBtn}>♬</button>
          <button style={controlBtn}>⎙</button>
          <span style={{ fontFamily: tokens.font, fontSize: 11, color: tokens.accent }}>▰▰▰▰▱▱</span>
        </div>
      </div>
    </Panel>
  );
}

const controlBtn = {
  background: 'transparent', border: 0, color: tokens.text4,
  fontFamily: tokens.font, fontSize: 13, cursor: 'pointer', borderRadius: 0,
  width: 22, height: 22,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

Object.assign(window, { NowPlayingBar });
