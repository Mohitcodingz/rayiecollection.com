import React from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

/**
 * Product Showcase Section with Filter Tabs
 */
export default function ProductGrid({
  products,
  activeFilter,
  onSelectFilter,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  return (
    <section className="product-showcase-section" id="products">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="section-header-clean">
          <span className="section-eyebrow">The Atelier Selection</span>
          <h2 className="section-main-title">Handpicked Curations</h2>
          <p className="section-subtitle">
            Explore our signature pieces featured across our boutique line and official AJIO listings.
          </p>
        </div>

        {/* TABS FILTER */}
        <div className="filter-tabs-row">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => onSelectFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-card-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* BOTTOM AJIO LINK */}
        <div className="showcase-bottom-cta">
          <a 
            href="https://www.ajio.com/b/rayie-collection?page=2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline-dark"
            style={{ padding: '0.9rem 2.2rem' }}
          >
            Explore Complete RAYIE COLLECTION on AJIO.com ↗
          </a>
        </div>

      </div>
    </section>
  );
}
