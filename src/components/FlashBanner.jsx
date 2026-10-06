import React, { useState, useEffect } from 'react';

/**
 * Flash Sale Banner ("The Scarlet Hour") with Live Countdown
 */
export default function FlashBanner({ onShopScarlet }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 12;
          minutes = 0;
          seconds = 0;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num) => String(num).padStart(2, '0');

  return (
    <section className="flash-banner-section">
      <div className="container">
        <div className="flash-banner-box">
          
          <div className="flash-info-side">
            <span className="flash-tag">Limited Flash Drop</span>
            <h2 className="flash-title">The Scarlet Hour: Extra 15% Off</h2>
            <p className="flash-desc">
              Celebrate timeless cocktail poise. Use promo coupon <strong style={{ color: '#ff8598' }}>RAYIE15</strong> at checkout on our signature red flared dresses or bag directly via AJIO.
            </p>

            {/* LIVE COUNTDOWN */}
            <div className="countdown-cluster">
              <div className="timer-unit">
                <span className="unit-number">{formatDigit(timeLeft.hours)}</span>
                <span className="unit-label">Hours</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-unit">
                <span className="unit-number">{formatDigit(timeLeft.minutes)}</span>
                <span className="unit-label">Mins</span>
              </div>
              <div className="timer-separator">:</div>
              <div className="timer-unit">
                <span className="unit-number">{formatDigit(timeLeft.seconds)}</span>
                <span className="unit-label">Secs</span>
              </div>
            </div>

            <div className="flash-actions-row">
              <button className="btn-solid-red" onClick={onShopScarlet}>
                Shop Scarlet Edits
              </button>
              <a 
                href="https://www.ajio.com/b/rayie-collection?page=2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-white"
              >
                Shop on AJIO Storefront ↗
              </a>
            </div>
          </div>

          <div className="flash-visual-side">
            <img 
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80" 
              alt="Scarlet Cocktail Flare Edition" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
