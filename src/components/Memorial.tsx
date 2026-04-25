import React from 'react';

const decorations = [
  'National Defense Medal',
  'Vietnam Service Medal w/ 3 Bronze Stars',
  'Vietnam Campaign Medal w/ 1960 Device',
  '2 Overseas Bars',
  'Sharpshooter Badge — M-16',
  'Army Commendation Medal',
  'Bronze Star Medal w/ 1 Oak Leaf Cluster',
];

export default function Memorial() {
  return (
    <div className="memorial-page">

      <div className="memorial-hero">
        <p className="home-hero__eyebrow">In Honor &amp; Memory</p>
        <h1 className="memorial-hero__name">Christian Jensen</h1>
        <p className="home-hero__dates">July 15, 1944 &ndash; February 12, 2023</p>
        <hr className="home-hero__divider" />
        <p className="memorial-hero__tagline">Father &bull; Husband &bull; Brother &bull; Patriot</p>
      </div>

      <div className="memorial-grid">

        <section className="memorial-card">
          <h2 className="memorial-card__heading">Military Service</h2>
          <div className="memorial-field">
            <span className="memorial-label">Branch</span>
            <span className="memorial-value">U.S. Army</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Rank</span>
            <span className="memorial-value">Staff Sergeant (E-6)</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Last Unit</span>
            <span className="memorial-value">HHC, 43rd Engineer Battalion<br />931st Engineer Group (3A)</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Served</span>
            <span className="memorial-value">September 30, 1968 – September 29, 2017</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Conflict</span>
            <span className="memorial-value">Vietnam</span>
          </div>
        </section>

        <section className="memorial-card">
          <h2 className="memorial-card__heading">Decorations &amp; Awards</h2>
          <ul className="memorial-decorations">
            {decorations.map(d => (
              <li key={d} className="memorial-decoration">{d}</li>
            ))}
          </ul>
        </section>

        <section className="memorial-card">
          <h2 className="memorial-card__heading">Life &amp; Family</h2>
          <p className="memorial-bio">
            Born on July 15, 1944 in Brooklyn, New York, Christian Jensen
            lived a life defined by service, faith, and family.
            He is remembered as a devoted husband to Terry, a loving father,
            and a proud American veteran.
          </p>
          <p className="memorial-bio memorial-bio--placeholder">
            Additional biography — to be added.
          </p>
        </section>

        <section className="memorial-card">
          <h2 className="memorial-card__heading">Burial</h2>
          <div className="memorial-field">
            <span className="memorial-label">Cemetery</span>
            <span className="memorial-value">South Florida National Cemetery</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Location</span>
            <span className="memorial-value">Lake Worth, FL 33449</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Section / Plot</span>
            <span className="memorial-value">Section 40, Site 746</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Emblem</span>
            <span className="memorial-value">Bronze Star Medal (BSM)</span>
          </div>
          <div className="memorial-field">
            <span className="memorial-label">Inscription</span>
            <span className="memorial-value memorial-inscription">
              Your love is<br />always with us
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
