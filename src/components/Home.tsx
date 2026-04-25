import React from 'react';
import intro from './media/intro.jpeg';

export default function Home() {
  return (
    <div className="home-hero">
      <p className="home-hero__eyebrow">In Loving Memory of</p>
      <h1 className="home-hero__name">Christian Jensen</h1>
      <p className="home-hero__dates">July 15, 1944 &ndash; February 12, 2023</p>
      <hr className="home-hero__divider" />
      <img src={intro} alt="Christian Jensen" className="home-hero__portrait" />
      <p className="home-hero__tagline">Father &bull; Husband &bull; Brother &bull; Patriot</p>
    </div>
  );
}
