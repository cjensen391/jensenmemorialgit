import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import PhotoAlbum from 'react-photo-album';
import golf from './media/golf.jpeg';
import church from './media/church.jpeg';
import intro from './media/intro.jpeg';
import littleboy from './media/littleboy.jpeg';
import baby from './media/baby.jpeg';
import mariage1 from './media/mariage1.jpeg';

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const photos = [
    { src: golf,     width: 600, height: 600 },
    { src: church,   width: 600, height: 900 },
    { src: mariage1, width: 700, height: 1000 },
    { src: baby,     width: 700, height: 1000 },
    { src: intro,    width: 600, height: 600 },
    { src: littleboy,width: 600, height: 800 },
  ];

  const slides = [
    { src: golf,      title: 'Playing Golf with Mr. Barber' },
    { src: church,    title: 'Terry and Chris Jensen' },
    { src: mariage1,  title: 'Terry and Christian Jensen getting Married' },
    { src: baby,      title: 'Baby Jensen' },
    { src: intro,     title: 'Waiting to get Married!' },
    { src: littleboy, title: 'Young Jensen in Brooklyn' },
  ];

  return (
    <div className="gallery-page">
      <h2 className="gallery-page__heading">A Life in Photos</h2>
      <p className="gallery-page__sub">Click any photo to view</p>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => { setCurrentIndex(index); setOpen(true); }}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  );
}
