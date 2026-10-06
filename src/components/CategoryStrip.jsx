import React from 'react';

/**
 * Category Strip - "Shop by Silhouette"
 * Visual gateways into the key lines of Rayie Collection.
 */
export default function CategoryStrip({ onSelectCategory }) {
  const categories = [
    {
      id: "red-edit",
      title: "Scarlet & Cocktail Flare",
      tagline: "The Emblem Edit",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ethnic",
      title: "Flared Kurta & Palazzo Sets",
      tagline: "Festive Heritage",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "western",
      title: "Maxi Gowns & Velvet Drapes",
      tagline: "Haute Evenings",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "western",
      title: "Summer Frocks & Co-Ords",
      tagline: "Effortless Daywear",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80"
    }
  ];

  return (
    <section className="categories-strip-section" id="categories">
      <div className="container">
        
        <div className="section-header-clean">
          <span className="section-eyebrow">Curated Silhouettes</span>
          <h2 className="section-main-title">Tailored For Every Entrance</h2>
          <p className="section-subtitle">Choose from iconic red flared frocks, festive Chanderi sets, or gala evening drapes.</p>
        </div>

        <div className="category-card-grid">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="cat-card-item"
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="cat-card-media">
                <img src={cat.image} alt={cat.title} loading="lazy" />
                <div className="cat-card-overlay">
                  <span className="cat-pill">{cat.tagline}</span>
                  <h3 className="cat-title">{cat.title}</h3>
                  <span className="cat-cta">Explore Cuts →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
