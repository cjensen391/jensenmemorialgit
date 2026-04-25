import React from 'react';

export default function Where() {
  return (
    <div className="where-page">
      <h1>Where Is It?</h1>
      <p className="lead">
        Christian Jensen is interred at the{' '}
        <strong>South Florida National Cemetery</strong>.
      </p>

      <div className="where-info-grid">
        <div className="where-card">
          <h3 className="where-card__heading">Address</h3>
          <address>
            6501 S State Road 7<br />
            Lake Worth, FL 33449
          </address>
          <p className="where-card__detail">
            <span className="where-label">Phone</span> (561) 649-6489
          </p>
          <p className="where-card__detail">
            <span className="where-label">Visitation</span> Sunrise to sunset, daily
          </p>
          <p className="where-card__detail">
            <span className="where-label">Office</span> Mon–Fri, 8:00 am – 4:30 pm<br />
            <span style={{ paddingLeft: '5.5rem' }}>Closed federal holidays</span>
          </p>
        </div>

        <div className="where-card">
          <h3 className="where-card__heading">Directions</h3>
          <p className="where-directions__label">From Palm Beach Intl Airport (PBI)</p>
          <p className="where-directions__text">
            West on Turnage Blvd → Australian Ave South → merge onto Southern Blvd west
            → SR-7 / US-441 south → approximately 1 mile past Lantana Road →
            cemetery entrance on the <strong>right</strong>.
          </p>
          <p className="where-directions__label">From the North (FL Turnpike)</p>
          <p className="where-directions__text">
            Exit Lake Worth Road (#93) → west to SR-7 / US-441 → south past Lantana Road →
            entrance on the <strong>right</strong>.
          </p>
          <p className="where-directions__label">From the South (FL Turnpike)</p>
          <p className="where-directions__text">
            Exit Boynton Beach Blvd (#86) → west to SR-7 / US-441 → north →
            entrance on the <strong>left</strong>, just north of Hypoluxo Road.
          </p>
        </div>
      </div>

      <div className="map-wrap" style={{ marginTop: '2rem' }}>
        <iframe
          title="South Florida National Cemetery"
          src="https://maps.google.com/maps?q=26.5782405,-80.2091026&z=18&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
