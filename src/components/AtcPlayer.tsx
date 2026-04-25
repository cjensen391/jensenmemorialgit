import React from 'react';
import { useAtcStream } from '../hooks/useAtcStream';

export default function AtcPlayer() {
  const { streamUrl, status, plsUrl } = useAtcStream();

  return (
    <div className="atc-player">
      <div className="atc-player__header">
        {status === 'ready' && <span className="atc-player__dot" />}
        <span className="atc-player__title">Miami Center — Live ATC &nbsp;·&nbsp; 133.900 MHz</span>
      </div>

      {status === 'loading' && (
        <p className="atc-player__msg">Connecting to stream…</p>
      )}

      {status === 'error' && (
        <p className="atc-player__msg">
          Stream unavailable in browser —{' '}
          <a href={plsUrl} target="_blank" rel="noreferrer">
            open in media player
          </a>
        </p>
      )}

      {status === 'ready' && streamUrl && (
        <audio controls style={{ width: '100%' }}>
          <source src={streamUrl} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
