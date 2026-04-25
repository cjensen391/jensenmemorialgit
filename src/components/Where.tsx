import React from 'react';

export default function Where() {
  return (
    <div className="where-page">
      <h1>Where Is It?</h1>
      <p className="lead">
        Christian Jensen is interred at the{' '}
        <strong>South Florida National Cemetery</strong>.
      </p>
      <address>
        6501 S State Road 7<br />
        Lake Worth, FL 33449
      </address>
      <div className="map-wrap">
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
