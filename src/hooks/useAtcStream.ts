import { useEffect, useState } from 'react';

const PLS_URL = 'https://www.liveatc.net/play/zma_fmy_133900.pls';

export type StreamStatus = 'loading' | 'ready' | 'error';

export function useAtcStream() {
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<StreamStatus>('loading');

  useEffect(() => {
    fetch(PLS_URL)
      .then(r => r.text())
      .then(text => {
        const match = text.match(/^File\d+=(.+)$/m);
        if (match) { setStreamUrl(match[1].trim()); setStatus('ready'); }
        else setStatus('error');
      })
      .catch(() => setStatus('error'));
  }, []);

  return { streamUrl, status, plsUrl: PLS_URL };
}
