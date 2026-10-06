import React from 'react';

/**
 * Clean Boutique Footer with AJIO Certified Partner Badge
 */
export default function Footer({ onCategoryClick }) {
  return (
    <footer className="clean-boutique-footer" id="footer">
      <div className="container">
        
        {/* TOP ROW */}
        <div className="footer-columns-grid">
          
          {/* BRAND BIO */}
          <div className="footer-col brand-bio-col">
            <div className="footer-logo-wrap">
              <img src="/assets/images/rayie-logo.png" alt="RAYIE COLLECTION" />
            </div>
            <p className="footer-bio-desc">
              RAYIE COLLECTION crafts bespoke contemporary women's wear, flared silhouettes, and celebratory Indian ethnic couture with precision tailoring.
            </p>
            <div className="footer-social-row">
              <span className="social-pill">Instagram</span>
              <span className="social-pill">Facebook</span>
              <span className="social-pill">Pinterest</span>
              <span className="social-pill">WhatsApp</span>
            </div>
          </div>

          {/* COLLECTIONS LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-heading">The Collections</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => onCategoryClick('red-edit')}>The Signature Red Edit</button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('ethnic')}>Festive Kurta & Anarkalis</button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('western')}>Flared Cocktail Dresses</button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('western')}>Evening Maxi Gowns</button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('bestseller')}>AJIO Top Bestsellers</button>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Client Assistance</h4>
            <ul className="footer-nav-list">
              <li><a href="#footer" onClick={() => alert("Shipping: 2 to 4 business days across India.")}>Shipping & Dispatch</a></li>
              <li><a href="#footer" onClick={() => alert("Returns: Free 7-Day Exchange available on all orders.")}>7-Day Doorstep Returns</a></li>
              <li><a href="#footer" onClick={() => alert("Size Guide: Fits true to standard Indian sizing (XS 32 - 3XL 44).")}>Size Guide & Fit</a></li>
              <li><a href="#footer" onClick={() => alert("Fabric Care: Gentle dry clean or cold hand wash recommended.")}>Fabric Care Guide</a></li>
              <li><a href="mailto:care@rayiecollection.com">care@rayiecollection.com</a></li>
            </ul>
          </div>

          {/* AJIO OFFICIAL CERTIFIED CARD */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Official Platform</h4>
            <div className="footer-ajio-card">
              <div className="ajio-card-header">
                <span className="green-check">✓</span>
                <h5>Certified Brand on AJIO</h5>
              </div>
              <p>
                RAYIE COLLECTION is officially listed on Reliance AJIO. Enjoy secure payment gateways, trusted delivery, and easy doorstep returns.
              </p>
              <a 
                href="https://www.ajio.com/b/rayie-collection?page=2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-solid-red"
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.75rem' }}
              >
                Open AJIO Storefront ↗
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} RAYIE COLLECTION. All Rights Reserved. Crafted with Sartorial Poise.
          </p>
          <div className="payment-icons-strip">
            <span>UPI</span>
            <span>Google Pay</span>
            <span>RuPay</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
