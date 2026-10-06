import React from 'react';

/**
 * Editorial Instagram Lookbook Grid (#RayieWomen)
 */
export default function Lookbook({ onImageClick }) {
  const photos = [
    { id: 1, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80" },
    { id: 7, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="lookbook-gallery-section">
      <div className="container">
        <div className="section-header-clean">
          <span className="section-eyebrow">Editorial Moments</span>
          <h2 className="section-main-title">Styled by #RayieWomen</h2>
          <p className="section-subtitle">Tag @RayieCollection on Instagram to be featured in our seasonal lookbook.</p>
        </div>

        <div className="lookbook-mosaic-grid">
          {photos.map((item, idx) => (
            <div 
              key={idx} 
              className="mosaic-cell"
              onClick={() => onImageClick && onImageClick(item.id)}
            >
              <img src={item.image} alt={`Styled Look ${idx + 1}`} loading="lazy" />
              <div className="mosaic-hover-overlay">
                <span>View Silhouette →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
