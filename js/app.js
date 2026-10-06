/**
 * RAYIE COLLECTION - Interactive Frontend Controller
 * Complete luxury shopping interactions: Cart Drawer, Wishlist, Quick View,
 * Live Search, Category Filtering, Dynamic Badges, and AJIO Link Integration.
 */

// CURATED PRODUCT CATALOGUE (Inspired by Rayie Collection on AJIO & Brand Identity)
const PRODUCTS = [
  {
    id: 1,
    title: "Crimson Flared Cocktail Dress with Tie-Back Sash",
    category: "red-edit",
    price: 1399,
    originalPrice: 3499,
    discount: "60% OFF",
    rating: 4.8,
    reviews: 142,
    badge: "Signature Icon",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description: "Our signature silhouette as captured in the Rayie emblem. Features a sculpted bodice, deep sweetheart back with tie-up sash, and an ultra-flared circle skirt engineered for effortless movement.",
    fabric: "Premium Poly-Georgette & Satin Lining",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    title: "Chanderi Flared Kurta Set with Zari Border Dupatta",
    category: "ethnic",
    price: 1899,
    originalPrice: 4799,
    discount: "60% OFF",
    rating: 4.9,
    reviews: 218,
    badge: "AJIO Bestseller",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "A celebration of Indian festive craftsmanship. Tailored flared Anarkali kurta accented with delicate hand-zari embroidery on the neckline, paired with tailored pants and an organza dupatta.",
    fabric: "Chanderi Silk Blend",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    title: "Scarlet Pleated Midi Dress with Sweetheart Neckline",
    category: "red-edit",
    price: 1249,
    originalPrice: 2999,
    discount: "58% OFF",
    rating: 4.7,
    reviews: 94,
    badge: "Trending Drop",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    description: "An intoxicating blend of daytime elegance and evening glam. Accordion pleats along the hemline create a dramatic sway with every step.",
    fabric: "Breathable Modal Crepe",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    title: "Emerald Embroidered Kurta & Wide-Leg Palazzo Suit",
    category: "ethnic",
    price: 1699,
    originalPrice: 3999,
    discount: "57% OFF",
    rating: 4.8,
    reviews: 130,
    badge: "Festive Drop",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Rich jewel-toned green kurta ensemble featuring thread embroidery and pearl buttons. Paired with wide flared palazzo trousers.",
    fabric: "Pure Viscose Rayon",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    title: "Noir Velvet & Crimson Accent Evening Maxi Gown",
    category: "western",
    price: 2199,
    originalPrice: 5499,
    discount: "60% OFF",
    rating: 4.9,
    reviews: 86,
    badge: "Limited Edition",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    description: "Haute couture evening wear designed for galas and cocktail nights. Sculpted empire silhouette with subtle scarlet piped hems and high-slit grace.",
    fabric: "Plush Micro-Velvet",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    title: "Blush Pink Tiered Fit-and-Flare Summer Sundress",
    category: "western",
    price: 999,
    originalPrice: 2499,
    discount: "60% OFF",
    rating: 4.6,
    reviews: 167,
    badge: "Under ₹999",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight, airy, and effortlessly feminine. Three tiers of ruffled cotton drape softly over a smocked bodice with adjustable bow straps.",
    fabric: "100% Breathable Combed Cotton",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 7,
    title: "Royal Ruby Floral Printed Anarkali Gown with Belt",
    category: "ethnic",
    price: 1499,
    originalPrice: 3699,
    discount: "59% OFF",
    rating: 4.8,
    reviews: 195,
    badge: "AJIO Bestseller",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    description: "Full-flare 5.5-meter umbrella flare Anarkali gown with digital micro-florals and an embroidered gold zari waist belt.",
    fabric: "Soft Georgette with Butter Silk Lining",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 8,
    title: "Carmine Red Backless Halter Neck Bodycon Midi",
    category: "red-edit",
    price: 1199,
    originalPrice: 2799,
    discount: "57% OFF",
    rating: 4.7,
    reviews: 112,
    badge: "Party Edit",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=80",
    description: "A head-turning cocktail number featuring cross-back straps, sweetheart plunge, and figure-contouring stretch tailoring.",
    fabric: "Premium Spandex Ribbed Knit",
    sizes: ["XS", "S", "M", "L"]
  }
];

// STATE MANAGEMENT
const STATE = {
  cart: [
    {
      id: 1,
      title: "Crimson Flared Cocktail Dress with Tie-Back",
      size: "M",
      price: 1399,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    }
  ],
  wishlist: [1, 2],
  activeFilter: "all",
  activeModalProduct: null,
  selectedSize: "M",
  discountApplied: false,
  freeShippingThreshold: 1499
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initEventListeners();
  initCountdownTimer();
  initHeaderScroll();
});

// HEADER SCROLL SHADOW
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// RENDER PRODUCTS GRID
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = STATE.activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        if (STATE.activeFilter === "bestseller") return p.rating >= 4.8;
        return p.category === STATE.activeFilter;
      });

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = STATE.wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media">
          <span class="product-badge ${product.badge.toLowerCase().includes('sale') ? 'sale' : ''}">${product.badge}</span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Add to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">Quick View</button>
        </div>
        <div class="product-info">
          <span class="product-brand">RAYIE COLLECTION</span>
          <h3 class="product-title">${product.title}</h3>
          <div class="product-rating">
            <span>★ ${product.rating}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-pricing">
            <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
            <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span class="price-discount">${product.discount}</span>
          </div>
          <div class="product-actions">
            <button class="add-bag-btn" onclick="addToCartFromCard(${product.id})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Add to Bag
            </button>
            <a href="https://www.ajio.com/b/rayie-collection?page=2" target="_blank" rel="noopener noreferrer" class="ajio-link-btn" title="View on AJIO">
              AJIO ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// FILTER HANDLERS
function setFilter(category, btnElement) {
  STATE.activeFilter = category;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  renderProducts();
}

// WISHLIST TOGGLE
function toggleWishlist(productId) {
  const index = STATE.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`);
  } else {
    STATE.wishlist.push(productId);
    showToast(`Added "${product.title.substring(0, 24)}..." to Wishlist! ❤️`);
  }

  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const countBadge = document.getElementById("wishlistCount");
  if (countBadge) {
    countBadge.textContent = STATE.wishlist.length;
  }
}

// CART MANAGEMENT
function addToCart(productId, size = "M", qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = STATE.cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += qty;
  } else {
    STATE.cart.push({
      id: product.id,
      title: product.title,
      size: size,
      price: product.price,
      quantity: qty,
      image: product.image
    });
  }

  updateCartUI();
  openCartDrawer();
  showToast(`Added to Bag: Size ${size} 🛍️`);
}

function addToCartFromCard(productId) {
  addToCart(productId, "M", 1);
}

function updateCartQty(index, delta) {
  if (!STATE.cart[index]) return;
  STATE.cart[index].quantity += delta;
  if (STATE.cart[index].quantity <= 0) {
    STATE.cart.splice(index, 1);
    showToast(`Item removed from bag`);
  }
  updateCartUI();
}

function removeCartItem(index) {
  if (STATE.cart[index]) {
    STATE.cart.splice(index, 1);
    updateCartUI();
    showToast(`Item removed from bag`);
  }
}

function updateCartUI() {
  const cartCountBadges = document.querySelectorAll(".cart-count-badge");
  const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCountBadges.forEach(b => {
    b.textContent = totalItems;
  });

  const cartList = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotalPrice");
  const shippingFill = document.getElementById("shippingProgressFill");
  const shippingText = document.getElementById("shippingProgressText");

  if (!cartList) return;

  if (STATE.cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin: 0 auto 1rem auto;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <p>Your shopping bag is empty.</p>
        <button class="btn btn-primary" style="margin-top: 1rem; width: 100%;" onclick="closeCartDrawer()">Explore Collection</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (shippingFill) shippingFill.style.width = "0%";
    if (shippingText) shippingText.innerHTML = `Add <strong>₹${STATE.freeShippingThreshold.toLocaleString('en-IN')}</strong> more for Free Express Delivery`;
    return;
  }

  // Calculate Subtotal
  let rawSubtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let finalSubtotal = STATE.discountApplied ? Math.round(rawSubtotal * 0.85) : rawSubtotal;

  if (subtotalEl) {
    subtotalEl.textContent = `₹${finalSubtotal.toLocaleString('en-IN')}`;
  }

  // Free shipping progress
  const remaining = Math.max(0, STATE.freeShippingThreshold - finalSubtotal);
  const pct = Math.min(100, Math.round((finalSubtotal / STATE.freeShippingThreshold) * 100));

  if (shippingFill) {
    shippingFill.style.width = `${pct}%`;
  }

  if (shippingText) {
    if (remaining === 0) {
      shippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You've unlocked FREE Express Delivery!`;
    } else {
      shippingText.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more for FREE Express Delivery!`;
    }
  }

  // Render items
  cartList.innerHTML = STATE.cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>Size: <strong>${item.size}</strong></p>
        <div class="cart-qty-ctrl">
          <button onclick="updateCartQty(${idx}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
        <button class="remove-cart-item" onclick="removeCartItem(${idx})">Remove</button>
      </div>
    </div>
  `).join("");
}

// CART DRAWER OPEN / CLOSE
function openCartDrawer() {
  document.getElementById("cartDrawerBackdrop")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawerBackdrop")?.classList.remove("active");
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.body.style.overflow = "";
}

// QUICK VIEW MODAL
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  STATE.activeModalProduct = product;
  STATE.selectedSize = product.sizes[0] || "M";

  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalPriceCurr").textContent = `₹${product.price.toLocaleString('en-IN')}`;
  document.getElementById("modalPriceOrig").textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  document.getElementById("modalPriceDisc").textContent = product.discount;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalFabric").textContent = product.fabric;

  // Render sizes
  const sizesWrap = document.getElementById("modalSizesWrap");
  sizesWrap.innerHTML = product.sizes.map(sz => `
    <button class="size-pill ${sz === STATE.selectedSize ? 'active' : ''}" onclick="selectModalSize('${sz}', this)">${sz}</button>
  `).join("");

  document.getElementById("quickviewBackdrop")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function selectModalSize(size, btn) {
  STATE.selectedSize = size;
  document.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
}

function closeQuickView() {
  document.getElementById("quickviewBackdrop")?.classList.remove("active");
  document.body.style.overflow = "";
}

function addModalProductToBag() {
  if (!STATE.activeModalProduct) return;
  addToCart(STATE.activeModalProduct.id, STATE.selectedSize, 1);
  closeQuickView();
}

// LIVE SEARCH MODAL
function openSearch() {
  document.getElementById("searchModalBackdrop")?.classList.add("active");
  document.getElementById("searchInput")?.focus();
  document.body.style.overflow = "hidden";
  performSearch("");
}

function closeSearch() {
  document.getElementById("searchModalBackdrop")?.classList.remove("active");
  document.body.style.overflow = "";
}

function performSearch(query) {
  const list = document.getElementById("searchResultsList");
  if (!list) return;

  const q = query.trim().toLowerCase();
  const matched = q === "" 
    ? PRODUCTS.slice(0, 4) 
    : PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

  if (matched.length === 0) {
    list.innerHTML = `<p style="padding: 1.5rem; color: #888; text-align: center;">No pieces found for "${query}". Try searching "red", "kurta", "gown", or "frock".</p>`;
    return;
  }

  list.innerHTML = matched.map(p => `
    <div class="search-result-item" onclick="openQuickView(${p.id}); closeSearch();">
      <img src="${p.image}" alt="${p.title}">
      <div style="flex: 1;">
        <h4 style="font-size: 0.85rem; font-weight: 600; color: #111;">${p.title}</h4>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.2rem;">
          <span style="font-weight: 700; color: #D90429; font-size: 0.85rem;">₹${p.price.toLocaleString('en-IN')}</span>
          <span style="font-size: 0.75rem; text-decoration: line-through; color: #999;">₹${p.originalPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <button class="btn btn-outline" style="padding: 0.35rem 0.7rem; font-size: 0.72rem;">View</button>
    </div>
  `).join("");
}

// APPLY PROMO CODE
function applyPromoCode() {
  const codeInput = document.getElementById("promoCodeInput");
  const msg = document.getElementById("promoMessage");
  if (!codeInput) return;

  const val = codeInput.value.trim().toUpperCase();
  if (val === "RAYIE15" || val === "RAYIEFIRST" || val === "SCARLET") {
    STATE.discountApplied = true;
    updateCartUI();
    if (msg) {
      msg.style.color = "#10b981";
      msg.textContent = "15% Royal discount applied successfully!";
    }
    showToast("Promo Code Applied: 15% OFF! 🏷️");
  } else {
    if (msg) {
      msg.style.color = "#D90429";
      msg.textContent = "Invalid code. Use RAYIE15 for 15% off!";
    }
  }
}

// COUNTDOWN TIMER
function initCountdownTimer() {
  const hoursEl = document.getElementById("countHours");
  const minsEl = document.getElementById("countMins");
  const secsEl = document.getElementById("countSecs");

  if (!hoursEl || !minsEl || !secsEl) return;

  let totalSecs = (8 * 3600) + (42 * 60) + 15;

  setInterval(() => {
    if (totalSecs <= 0) totalSecs = 12 * 3600;
    totalSecs--;

    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// TOAST NOTIFICATION
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// NEWSLETTER SUBMIT
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input || !input.value) return;

  showToast("Welcome to the Rayie Atelier Club! ✨ Check your inbox for 15% off.");
  input.value = "";
}

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNavDrawer");
  mobileNav.classList.toggle("active");
}

// CLIENT PITCH TOUR
function triggerClientPitchTour() {
  alert("✨ Rayie Collection Template Pitch Highlights:\n\n1. Needle & Red Silhouette Logo identity natively integrated across banners, typography & craft story.\n2. Fully responsive e-commerce layout with zero dependencies.\n3. Interactive slide-out Bag Drawer with live ₹1,499 free-shipping threshold.\n4. Quick-view modal with size/fabric details and direct AJIO storefront links.\n5. Built-in search, wishlist, newsletter & flash sales countdown.\n\nReady to deploy & impress!");
}

// EVENT LISTENERS
function initEventListeners() {
  // Close modals on Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
      closeSearch();
    }
  });

  // Search input live trigger
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });
  }
}
