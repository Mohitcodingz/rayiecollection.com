import React, { useState } from 'react';

/**
 * Slide-out Shopping Bag Drawer
 * Calculates dynamic Free Shipping progress (Threshold: ₹1,499)
 * Supports promo discount coupons (RAYIE15 / SCARLET)
 */
export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoMsg, setPromoMsg] = useState({ text: '', isError: false });

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1499;

  // Calculate Subtotal
  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const finalSubtotal = discountApplied ? Math.round(rawSubtotal * 0.85) : rawSubtotal;

  // Free shipping progress calculation
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - finalSubtotal);
  const shippingProgressPct = Math.min(100, Math.round((finalSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'RAYIE15' || code === 'RAYIEFIRST' || code === 'SCARLET') {
      setDiscountApplied(true);
      setPromoMsg({ text: '15% Royal discount applied successfully!', isError: false });
    } else {
      setPromoMsg({ text: 'Invalid promo code. Try RAYIE15 for 15% off!', isError: true });
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="drawer-overlay active" onClick={onClose} />

      {/* DRAWER PANEL */}
      <aside className="cart-drawer-panel active">
        
        {/* HEADER */}
        <div className="drawer-top-bar">
          <h3 className="drawer-title">
            Your Shopping Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Shopping Bag">
            ✕
          </button>
        </div>

        {/* FREE SHIPPING PROGRESS METER */}
        <div className="shipping-meter-block">
          <div className="meter-text">
            {remainingForFreeShipping === 0 ? (
              <span>🎉 <strong>Congratulations!</strong> You've unlocked FREE Express Delivery!</span>
            ) : (
              <span>Add <strong>₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for FREE Express Delivery!</span>
            )}
          </div>
          <div className="meter-track">
            <div 
              className="meter-fill" 
              style={{ width: `${shippingProgressPct}%` }}
            />
          </div>
        </div>

        {/* ITEMS LIST */}
        <div className="drawer-items-scroll">
          {cartItems.length === 0 ? (
            <div className="drawer-empty-state">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
              <p>Your shopping bag is currently empty.</p>
              <button className="btn-solid-red" style={{ width: '100%', marginTop: '1rem' }} onClick={onClose}>
                Explore The Collections
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${item.size}`} className="drawer-item-row">
                <img src={item.image} alt={item.title} className="drawer-item-thumbnail" />
                
                <div className="drawer-item-details">
                  <h4 className="drawer-item-title">{item.title}</h4>
                  <p className="drawer-item-meta">Size: <strong>{item.size}</strong></p>
                  
                  <div className="drawer-qty-selector">
                    <button onClick={() => onUpdateQty(idx, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQty(idx, 1)}>+</button>
                  </div>
                </div>

                <div className="drawer-item-price-col">
                  <span className="item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  <button className="item-remove-btn" onClick={() => onRemoveItem(idx)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="drawer-summary-footer">
            
            {/* PROMO INPUT */}
            <div className="promo-input-row">
              <input 
                type="text" 
                placeholder="Promo Code (e.g. RAYIE15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="promo-input-field"
              />
              <button className="promo-apply-btn" onClick={handleApplyPromo}>
                Apply
              </button>
            </div>

            {promoMsg.text && (
              <div className={`promo-status-msg ${promoMsg.isError ? 'error' : 'success'}`}>
                {promoMsg.text}
              </div>
            )}

            {/* TOTAL */}
            <div className="subtotal-display-row">
              <span>Estimated Subtotal:</span>
              <span className="subtotal-amount">₹{finalSubtotal.toLocaleString('en-IN')}</span>
            </div>
            
            <p className="tax-inclusion-note">
              Inclusive of all taxes • Shipping calculated at checkout
            </p>

            <button className="btn-solid-red" style={{ width: '100%', padding: '0.95rem' }} onClick={onCheckout}>
              Proceed to Secure Checkout
            </button>

            <div className="ajio-fallback-note">
              <a href="https://www.ajio.com/b/rayie-collection?page=2" target="_blank" rel="noopener noreferrer">
                Or purchase via our official store on AJIO.com ↗
              </a>
            </div>
          </div>
        )}

      </aside>
    </>
  );
}
