import React, { useState, useEffect } from 'react';

/**
 * Clean Luxury Navbar Component
 * Features:
 * - Clean dual-tier boutique layout (Logo centered with ample breathing room)
 * - Sticky compact glassmorphism mode on scroll
 * - Live wishlist and bag counters
 * - Instant search modal trigger
 * - Mobile responsive drawer menu
 */
export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategory,
  activeCategory
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to toggle sticky compact mode
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (catId, anchor) => {
    if (onSelectCategory && catId) {
      onSelectCategory(catId);
    }
    setMobileMenuOpen(false);
    if (anchor) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`clean-navbar ${isScrolled ? 'is-sticky' : ''}`}>
        <div className="container">
          
          {/* TOP TIER: UTILITIES & LOGO */}
          <div className="nav-top-tier">
            
            {/* LEFT: SEARCH & MOBILE TOGGLE */}
            <div className="nav-left">
              <button 
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              <button className="nav-search-btn" onClick={onOpenSearch}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="search-placeholder">Search collection...</span>
              </button>
            </div>

            {/* CENTER: CRISP BRAND LOGO */}
            <div className="nav-center">
              <a href="#" className="brand-link" aria-label="RAYIE COLLECTION Home">
                <img 
                  src="/assets/images/rayie-logo.png" 
                  alt="RAYIE COLLECTION - Couture & Elegance" 
                  className="brand-logo"
                />
              </a>
            </div>

            {/* RIGHT: WISHLIST & SHOPPING BAG */}
            <div className="nav-right">
              {/* AJIO OFFICIAL BUTTON */}
              <a 
                href="https://www.ajio.com/b/rayie-collection?page=2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ajio-store-badge"
                title="Browse on AJIO"
              >
                <span>AJIO Store</span>
                <span className="arrow-icon">↗</span>
              </a>

              {/* WISHLIST BUTTON */}
              <button 
                className="icon-action-btn" 
                onClick={() => alert(`You have ${wishlistCount} saved item(s) in your Wishlist ❤️`)}
                title="Saved Items"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && <span className="counter-pill">{wishlistCount}</span>}
              </button>

              {/* CART BAG BUTTON */}
              <button 
                className="icon-action-btn bag-btn" 
                onClick={onOpenCart}
                title="Open Shopping Bag"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="counter-pill primary">{cartCount}</span>
              </button>
            </div>
          </div>

          {/* BOTTOM TIER: EDITORIAL NAVIGATION LINKS */}
          <nav className="nav-bottom-tier" aria-label="Editorial Categories">
            <ul className="nav-menu">
              <li>
                <button 
                  className={`menu-link ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => handleNavClick('all', '#products')}
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button 
                  className={`menu-link highlight ${activeCategory === 'red-edit' ? 'active' : ''}`}
                  onClick={() => handleNavClick('red-edit', '#products')}
                >
                  The Red Edit
                </button>
              </li>
              <li>
                <button 
                  className={`menu-link ${activeCategory === 'ethnic' ? 'active' : ''}`}
                  onClick={() => handleNavClick('ethnic', '#products')}
                >
                  Festive Ethnic
                </button>
              </li>
              <li>
                <button 
                  className={`menu-link ${activeCategory === 'western' ? 'active' : ''}`}
                  onClick={() => handleNavClick('western', '#products')}
                >
                  Flared Dresses
                </button>
              </li>
              <li>
                <button 
                  className={`menu-link ${activeCategory === 'bestseller' ? 'active' : ''}`}
                  onClick={() => handleNavClick('bestseller', '#products')}
                >
                  Top Rated
                </button>
              </li>
              <li>
                <a href="#atelier" className="menu-link" onClick={() => handleNavClick(null, '#atelier')}>
                  The Atelier
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div 
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Navigation</span>
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>✕</button>
        </div>

        <ul className="mobile-drawer-list">
          <li>
            <button onClick={() => handleNavClick('all', '#products')}>
              All New Arrivals
            </button>
          </li>
          <li>
            <button className="accent" onClick={() => handleNavClick('red-edit', '#products')}>
              The Signature Red Edit
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('ethnic', '#products')}>
              Festive Kurta & Anarkali Suits
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('western', '#products')}>
              Flared Dresses & Cocktail Gowns
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('bestseller', '#products')}>
              AJIO Top Bestsellers
            </button>
          </li>
          <li>
            <a href="#atelier" onClick={() => setMobileMenuOpen(false)}>
              Behind the Needle Craft
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <a 
            href="https://www.ajio.com/b/rayie-collection?page=2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-ajio-link"
          >
            Visit Official AJIO Storefront ↗
          </a>
        </div>
      </aside>
    </>
  );
}
