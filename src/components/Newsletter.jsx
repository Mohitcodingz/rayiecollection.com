import React, { useState } from 'react';

/**
 * Atelier VIP Club Subscription
 */
export default function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubscribe(email);
    setEmail('');
  };

  return (
    <section className="newsletter-atelier-section">
      <div className="container">
        <div className="newsletter-card-clean">
          <span className="section-eyebrow">Exclusive Privileges</span>
          <h2 className="newsletter-title">Join The Rayie Atelier Club</h2>
          <p className="newsletter-text">
            Subscribe to receive 15% off your first online order, early access to festive capsule drops, and private fashion previews.
          </p>

          <form className="newsletter-input-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-text-input"
            />
            <button type="submit" className="btn-solid-red">
              Join Club
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
