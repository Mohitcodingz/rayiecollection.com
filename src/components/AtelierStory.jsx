import React from 'react';

/**
 * Atelier Craft Story Component
 * Ties in the logo's needle and red dress motif.
 */
export default function AtelierStory() {
  return (
    <section className="atelier-story-section" id="atelier">
      <div className="container">
        <div className="atelier-story-grid">
          
          {/* IMAGE COLUMN */}
          <div className="story-media-column">
            <div className="story-frame">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80" 
                alt="Atelier Tailoring Craft" 
              />
            </div>
            
            <div className="story-floating-badge">
              <div className="badge-logo-icon">
                <img src="/assets/images/rayie-logo.png" alt="Rayie Needle Symbol" />
              </div>
              <h4>Behind The Needle</h4>
              <p>Where precision tailoring meets vibrant contemporary silhouettes. Tailored for women who command presence.</p>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="story-content-column">
            <span className="story-eyebrow">Atelier Philosophy</span>
            <h2 className="story-heading">Where the Needle Unfolds Confidence.</h2>
            
            <p className="story-text">
              The soul of <strong>RAYIE COLLECTION</strong> is captured in our emblem: the slender sewing needle guiding curves of strength, and the fiery crimson dress dancing with poise. We do not mass-produce generic cuts — every dress begins with how the fabric drapes across your shoulders and falls around your waist.
            </p>

            <p className="story-text">
              Whether it’s our best-selling tie-back fit-and-flare dresses on AJIO or royal Chanderi Anarkalis, every seam is engineered to give you effortless poise throughout the day.
            </p>

            {/* PILLARS */}
            <div className="story-pillars-grid">
              <div className="story-pillar">
                <div className="pillar-check-icon">✓</div>
                <div>
                  <h5>Engineered Flare Geometry</h5>
                  <p>Calibrated circle cuts ensure maximum graceful movement without excessive bulk.</p>
                </div>
              </div>

              <div className="story-pillar">
                <div className="pillar-check-icon">✓</div>
                <div>
                  <h5>Breathable Natural Weaves</h5>
                  <p>Pre-tested cotton, viscose, chanderi & georgette blends that keep you cool in Indian climates.</p>
                </div>
              </div>

              <div className="story-pillar">
                <div className="pillar-check-icon">✓</div>
                <div>
                  <h5>XS to 3XL Smart Fit</h5>
                  <p>Equipped with customizable tie-backs and smart seams that gently adapt to your body shape.</p>
                </div>
              </div>

              <div className="story-pillar">
                <div className="pillar-check-icon">✓</div>
                <div>
                  <h5>Reinforced Double Stitching</h5>
                  <p>High-tensile seam finishing ensures your favorite piece retains its elegance wash after wash.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.ajio.com/b/rayie-collection?page=2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-solid-red"
            >
              Explore Rayie on AJIO Storefront
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
