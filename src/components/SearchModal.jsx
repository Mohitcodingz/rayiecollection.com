import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';

/**
 * Live Search Modal Overlay
 */
export default function SearchModal({
  isOpen,
  onClose,
  onSelectProduct
}) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <>
      <div className="search-backdrop-clean active" onClick={onClose} />

      <div className="search-card-clean active" role="dialog" aria-modal="true">
        {/* INPUT HEADER */}
        <div className="search-input-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          
          <input 
            type="text" 
            placeholder="Search dresses, kurtas, red edit, frocks..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="search-text-field"
          />

          <button className="search-close-x" onClick={onClose}>✕</button>
        </div>

        {/* RESULTS LIST */}
        <div className="search-results-tray">
          {filtered.length === 0 ? (
            <div className="search-no-results">
              No pieces match "{query}". Try "red", "kurta", "flare", or "dress".
            </div>
          ) : (
            filtered.map(p => (
              <div 
                key={p.id} 
                className="search-item-cell"
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
              >
                <img src={p.image} alt={p.title} className="search-item-thumb" />
                <div className="search-item-info">
                  <h4 className="search-item-name">{p.title}</h4>
                  <div className="search-item-pricing">
                    <span className="price-primary">₹{p.price.toLocaleString('en-IN')}</span>
                    <span className="price-crossed">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <span className="search-item-view-tag">View Cut →</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
