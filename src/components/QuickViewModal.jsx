import React, { useState } from 'react';

/**
 * Quick View Modal Component
 * Enables customers to view details, pick sizes, and add to bag.
 */
export default function QuickViewModal({
  product,
  onClose,
  onAddToCart
}) {
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  return (
    <>
      <div className="modal-backdrop-clean active" onClick={onClose} />

      <div className="modal-window-clean active" role="dialog" aria-modal="true">
        <button className="modal-dismiss-btn" onClick={onClose} aria-label="Close dialog">
          ✕
        </button>

        {/* IMAGE SIDE */}
        <div className="modal-visual-side">
          <img src={product.image} alt={product.title} />
        </div>

        {/* DETAILS SIDE */}
        <div className="modal-info-side">
          <span className="modal-brand-tag">RAYIE COLLECTION</span>
          <h2 className="modal-item-title">{product.title}</h2>

          <div className="modal-pricing-block">
            <span className="modal-current-price">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="modal-mrp-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            <span className="modal-discount-pill">{product.discount}</span>
          </div>

          <p className="modal-item-description">{product.description}</p>

          <div className="modal-fabric-note">
            <strong>Fabric & Drape:</strong> <span>{product.fabric}</span>
          </div>

          {/* SIZE SELECTOR */}
          <div className="modal-size-section">
            <div className="size-label-row">
              <span>Choose Size:</span>
              <span className="size-guide-link" onClick={() => alert("Size Chart: Standard Indian Fit XS (32) to 3XL (44).")}>
                Size Guide
              </span>
            </div>

            <div className="size-buttons-row">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTAS */}
          <div className="modal-ctas-row">
            <button 
              className="btn-solid-red" 
              style={{ flex: 1.2 }}
              onClick={() => {
                onAddToCart(product, selectedSize, 1);
                onClose();
              }}
            >
              Add to Bag (Size {selectedSize})
            </button>

            <a 
              href={product.ajioUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-dark" 
              style={{ flex: 1, textAlign: 'center' }}
            >
              Buy on AJIO ↗
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
