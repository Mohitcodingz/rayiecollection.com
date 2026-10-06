# RAYIE COLLECTION — React Homepage Template

A clean, modern, boutique luxury frontend template built with **React** and **Vite**, tailored for the **RAYIE COLLECTION** brand identity (needlecraft embroidery + scarlet flared silhouettes) and integrated with their [official AJIO.com storefront](https://www.ajio.com/b/rayie-collection?page=2).

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static folder in `dist/`.

---

## 📁 Simple & Clean File Structure (Easy to Edit)

```
rayie-collection/
├── public/
│   └── assets/images/
│       └── rayie-logo.png          # Brand logo
├── src/
│   ├── data/
│   │   └── products.js             # 👈 EDIT PRODUCTS, PRICES, SIZES & AJIO LINKS HERE
│   ├── components/
│   │   ├── AnnouncementBar.jsx     # Top promotion ticker
│   │   ├── Navbar.jsx              # 👈 CLEAN LUXURY NAVBAR (2-tier layout, sticky, clean logo)
│   │   ├── Hero.jsx                # Editorial hero banner with the Red Edit spotlight
│   │   ├── CategoryStrip.jsx       # "Shop by Silhouette" cards
│   │   ├── ProductCard.jsx         # Individual product card (wishlist, quick add, Ajio link)
│   │   ├── ProductGrid.jsx         # Product catalog with filter tabs
│   │   ├── AtelierStory.jsx        # "Behind the Needle" brand story
│   │   ├── FlashBanner.jsx         # "The Scarlet Hour" live countdown flash sale
│   │   ├── Reviews.jsx             # Verified buyer reviews & star ratings
│   │   ├── Lookbook.jsx            # Instagram gallery (#RayieWomen)
│   │   ├── Newsletter.jsx          # VIP Club subscription form
│   │   ├── Footer.jsx              # Boutique footer with AJIO certified partner card
│   │   ├── CartDrawer.jsx          # Slide-out bag with dynamic free shipping bar
│   │   ├── QuickViewModal.jsx      # Size selector & quick inspection modal
│   │   ├── SearchModal.jsx         # Instant live search overlay
│   │   └── Toast.jsx               # Floating toast notifications
│   ├── App.jsx                     # Simple React state controller
│   ├── index.css                   # Clean luxury CSS styling
│   └── main.jsx                    # React entrypoint
├── index.html                      # HTML template with Google Fonts
└── package.json                    # Dependencies & scripts
```

---

## 🛠️ How to Customize Later

### 1. Editing Products & AJIO Links
Open `src/data/products.js`. Each product is a clean, plain JavaScript object:
```javascript
{
  id: 1,
  title: "Your Dress Name",
  price: 1399,
  originalPrice: 3499,
  discount: "60% OFF",
  category: "red-edit", // "red-edit", "ethnic", "western", "bestseller"
  image: "https://your-image-url.com",
  sizes: ["XS", "S", "M", "L", "XL"],
  ajioUrl: "https://www.ajio.com/b/rayie-collection?page=2"
}
```

### 2. Modifying the Navbar
Open `src/components/Navbar.jsx`. It is split into two clean tiers:
- **Upper Row**: Search button, centered high-res brand logo, and utility actions (AJIO button, Wishlist count, Bag count).
- **Lower Row**: Centered, minimal editorial menu links (*New Arrivals*, *The Red Edit*, *Festive Ethnic*, *Flared Dresses*, *The Atelier*).
- **Sticky behavior**: Automatically condenses cleanly with glassmorphism when you scroll down.

### 3. Modifying Colors & Typography
Open `src/index.css`. The main brand variables are at the top:
```css
:root {
  --primary: #D90429;      /* Signature Scarlet Red */
  --dark: #121212;         /* Charcoal Noir */
  --ivory: #FAF7F2;        /* Soft Pearl Ivory */
  --gold: #C5A880;         /* Champagne Gold */
}
```
