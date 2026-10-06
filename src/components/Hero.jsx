import React from 'react';

/**
 * Editorial Hero Section
 * Spotlights the iconic red flared dress and brand poise.
 */
export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-editorial">
      <div className="container">
        <div className="hero-layout">
          
          {/* TEXT CONTENT */}
          <div className="hero-text-block">
            <div className="hero-season-tag">
              <span className="dot"></span>
              <span>New Season • Autumn/Festive Drop</span>
            </div>

            <h1 className="hero-heading">
              Sartorial Grace in <em>Every Stitch</em> & Silhouette.
            </h1>

            <p className="hero-description">
              Inspired by the art of bespoke needlecraft, RAYIE COLLECTION curates vibrant flared cocktail dresses, breathable day frocks, and royal festive ensembles tailored for unforgettable presence.
            </p>

            <div className="hero-actions">
              <button className="btn-solid-red" onClick={onExploreClick}>
                Explore The Red Edit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a 
                href="https://www.ajio.com/b/rayie-collection?page=2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-dark"
              >
                Browse on AJIO Catalog ↗
              </a>
            </div>

            {/* TRUST METRICS */}
            <div className="hero-metrics">
              <div className="metric-box">
                <span className="metric-val">4.8★</span>
                <span className="metric-lbl">Buyer Rating</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-val">25K+</span>
                <span className="metric-lbl">Dresses Shipped</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Bespoke Quality</span>
              </div>
            </div>
          </div>

          {/* VISUAL SHOWCASE */}
          <div className="hero-visual-block">
            <div className="hero-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85" 
                alt="Signature Crimson Cocktail Flare Dress"
                className="hero-main-photo" 
              />
              
              {/* FLOATING PRODUCT TAG */}
              <div className="hero-floating-card">
                <span className="floating-badge">Signature Cut</span>
                <h4 className="floating-title">Crimson Cocktail Flare Dress</h4>
                <div className="floating-price">
                  <strong>₹1,399</strong> <strike>₹3,499</strike> <span className="discount">60% OFF</span>
                </div>
              </div>

              {/* AJIO VERIFIED PILL */}
              <div className="hero-verified-pill">
                <span className="live-pulse"></span>
                <span>Certified Brand on AJIO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
