import React from 'react';

/**
 * Product Card Component
 * Clean, high-converting luxury card.
 */
export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  return (
    <div className="product-card-modern">
      {/* CARD IMAGE WRAPPER */}
      <div className="card-media-wrapper">
        <span className="card-badge">{product.badge}</span>
        
        {/* WISHLIST BUTTON */}
        <button 
          className={`card-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label="Save to Wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <img src={product.image} alt={product.title} loading="lazy" />

        {/* QUICK VIEW TRIGGER */}
        <button 
          className="card-quickview-btn"
          onClick={() => onQuickView(product)}
        >
          Quick View
        </button>
      </div>

      {/* CARD INFO */}
      <div className="card-info-block">
        <span className="card-brand">RAYIE COLLECTION</span>
        <h3 className="card-product-title" title={product.title}>
          {product.title}
        </h3>

        <div className="card-rating">
          <span className="stars">★ {product.rating}</span>
          <span className="count">({product.reviews})</span>
        </div>

        <div className="card-pricing">
          <span className="price-now">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="price-was">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="price-off">{product.discount}</span>
        </div>

        {/* ACTIONS */}
        <div className="card-actions-row">
          <button 
            className="btn-add-bag"
            onClick={() => onAddToCart(product, "M", 1)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Add to Bag
          </button>

          <a 
            href={product.ajioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ajio-direct"
            title="View product on AJIO"
          >
            AJIO ↗
          </a>
        </div>
      </div>
    </div>
  );
}
