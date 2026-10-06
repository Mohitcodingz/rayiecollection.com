import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryStrip from './components/CategoryStrip';
import ProductGrid from './components/ProductGrid';
import AtelierStory from './components/AtelierStory';
import FlashBanner from './components/FlashBanner';
import Reviews from './components/Reviews';
import Lookbook from './components/Lookbook';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

export default function App() {
  // State for shopping cart
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Crimson Flared Cocktail Dress with Tie-Back Sash",
      size: "M",
      price: 1399,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    }
  ]);

  // State for wishlist
  const [wishlist, setWishlist] = useState([1, 2]);

  // State for active category filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Add item to cart
  const handleAddToCart = (product, size = "M", qty = 1) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.id === product.id && item.size === size);
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += qty;
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          size: size,
          price: product.price,
          quantity: qty,
          image: product.image
        }
      ];
    });
    setIsCartOpen(true);
    showToast(`Added to Bag: Size ${size} 🛍️`);
  };

  // Update cart item quantity
  const handleUpdateQty = (index, delta) => {
    setCart(prev => {
      const copy = [...prev];
      copy[index].quantity += delta;
      if (copy[index].quantity <= 0) {
        copy.splice(index, 1);
        showToast("Item removed from bag");
      }
      return copy;
    });
  };

  // Remove cart item
  const handleRemoveItem = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast("Item removed from bag");
  };

  // Toggle wishlist item
  const handleToggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast("Removed from Wishlist");
        return prev.filter(id => id !== productId);
      } else {
        const prod = PRODUCTS.find(p => p.id === productId);
        showToast(`Saved "${prod ? prod.title.slice(0, 24) : ''}..." to Wishlist ❤️`);
        return [...prev, productId];
      }
    });
  };

  // Filtered products list
  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        if (activeFilter === 'bestseller') return p.rating >= 4.8;
        return p.category === activeFilter;
      });

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="rayie-app-root">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. CLEAN LUXURY NAVBAR */}
      <Navbar
        cartCount={cartTotalItems}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(cat) => setActiveFilter(cat)}
        activeCategory={activeFilter}
      />

      <main>
        {/* 3. HERO EDITORIAL */}
        <Hero 
          onExploreClick={() => {
            setActiveFilter('red-edit');
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 4. BRAND PERKS STRIP */}
        <section className="clean-perks-strip">
          <div className="container">
            <div className="perks-strip-grid">
              <div className="clean-perk-box">
                <span className="perk-glyph">✂</span>
                <div>
                  <h4>Bespoke Needlecraft</h4>
                  <p>Millimeter-precise cut & flattering tie-back waistlines.</p>
                </div>
              </div>

              <div className="clean-perk-box">
                <span className="perk-glyph">🌿</span>
                <div>
                  <h4>Pure Breathable Fabrics</h4>
                  <p>Chanderi, Rayon, Cotton & Georgette with all-day drape.</p>
                </div>
              </div>

              <div className="clean-perk-box">
                <span className="perk-glyph">⚡</span>
                <div>
                  <h4>48-Hour Pan-India Dispatch</h4>
                  <p>Complimentary express delivery on orders over ₹1,499.</p>
                </div>
              </div>

              <div className="clean-perk-box">
                <span className="perk-glyph">🛡</span>
                <div>
                  <h4>7-Day Doorstep Exchange</h4>
                  <p>Hassle-free size replacement and certified AJIO protection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SHOP BY SILHOUETTE */}
        <CategoryStrip onSelectCategory={(cat) => setActiveFilter(cat)} />

        {/* 6. PRODUCT CATALOG WITH TABS */}
        <ProductGrid
          products={filteredProducts}
          activeFilter={activeFilter}
          onSelectFilter={(cat) => setActiveFilter(cat)}
          wishlistIds={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 7. BEHIND THE NEEDLE CRAFT STORY */}
        <AtelierStory />

        {/* 8. SCARLET HOUR FLASH SALE */}
        <FlashBanner 
          onShopScarlet={() => {
            setActiveFilter('red-edit');
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. REVIEWS */}
        <Reviews />

        {/* 10. INSTAGRAM LOOKBOOK */}
        <Lookbook onImageClick={(id) => {
          const found = PRODUCTS.find(p => p.id === id);
          if (found) setQuickViewProduct(found);
        }} />

        {/* 11. NEWSLETTER */}
        <Newsletter onSubscribe={(email) => showToast(`Welcome to the Atelier Club, ${email}! ✨`)} />
      </main>

      {/* 12. FOOTER */}
      <Footer onCategoryClick={(cat) => {
        setActiveFilter(cat);
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* INTERACTIVE DRAWERS & MODALS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => showToast("Proceeding to secure checkout gateway... 💳")}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      <Toast message={toastMessage} />

      {/* CLIENT PITCH PILL */}
      <button 
        className="client-pitch-pill"
        onClick={() => alert("✨ React Showcase Highlights:\n\n1. Clean, modular React code (Navbar, Hero, ProductGrid, CartDrawer).\n2. Refined clean Navbar with centered logo & sticky behavior.\n3. Product catalog in src/data/products.js for effortless edits.\n4. Complete cart math with free shipping progress threshold.\n\nReady to edit & impress your client!")}
        title="View Pitch Highlights"
      >
        <span className="pitch-pulse-dot"></span>
        <span><strong>React Template</strong> • Clean & Editable</span>
      </button>

    </div>
  );
}
