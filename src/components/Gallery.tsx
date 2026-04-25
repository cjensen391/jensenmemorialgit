import React, { useEffect, useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import PhotoAlbum from 'react-photo-album';
import { useAtcStream } from '../hooks/useAtcStream';

type PhotoItem = { src: string; width: number; height: number };

const ctx = (require as any).context('./media', false, /\.(png|jpe?g|gif|webp)$/i);
const mediaSrcs: string[] = ctx.keys().map((k: string) => {
  const mod = ctx(k);
  return typeof mod === 'string' ? mod : (mod as { default: string }).default;
});

const CAPTIONS: Record<string, string> = {
  'golf.jpeg':       'Playing Golf with Mr. Barber',
  'church.jpeg':     'Terry and Chris Jensen',
  'mariage1.jpeg':   'Terry and Christian Jensen getting Married',
  'baby.jpeg':       'Baby Jensen',
  'intro.jpeg':      'Waiting to get Married!',
  'littleboy.jpeg':  'Young Jensen in Brooklyn',
  'mrwakenhut.jpeg': 'With Mr. Wakenhut',
};

function getTitle(src: string): string | undefined {
  const filename = src.split('/').pop()?.split('?')[0];
  return filename ? CAPTIONS[filename] : undefined;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { streamUrl } = useAtcStream();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      mediaSrcs.map(
        src =>
          new Promise<PhotoItem>(resolve => {
            const img = new window.Image();
            img.onload = () =>
              resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
            img.onerror = () => resolve({ src, width: 800, height: 600 });
            img.src = src;
          })
      )
    ).then(loaded => { if (!cancelled) setPhotos(loaded); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !streamUrl) return;
    if (open) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [open, streamUrl]);

  const slides = photos.map(p => ({ src: p.src, title: getTitle(p.src) }));

  return (
    <div className="gallery-page">
      <h2 className="gallery-page__heading">A Life in Photos</h2>
      <p className="gallery-page__sub">Click any photo to view</p>

      {streamUrl && <audio ref={audioRef} src={streamUrl} />}

      {photos.length > 0 && (
        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ index }) => { setCurrentIndex(index); setOpen(true); }}
        />
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Captions]}
      />

      {open && streamUrl && (
        <div className="atc-live-badge">
          <span className="atc-player__dot" />
          <span>Miami Center ATC</span>
        </div>
      )}
    </div>
  );
}
