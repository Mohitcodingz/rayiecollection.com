import React from 'react';

/**
 * Customer Testimonials & Verified AJIO Reviews
 */
export default function Reviews() {
  const reviews = [
    {
      stars: "★★★★★",
      text: "The crimson fit-and-flare dress is literally magical! The tie-back allows me to cinch my waist perfectly, and the bounce of the skirt gave me endless compliments.",
      name: "Priya Sharma",
      location: "Verified AJIO Buyer • Mumbai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      stars: "★★★★★",
      text: "I ordered the Chanderi Anarkali Kurta set for festive celebrations. The fabric is so breathable yet looks like a luxury designer piece. Totally secured my trust in Rayie.",
      name: "Ananya Roy",
      location: "Verified AJIO Buyer • Bengaluru",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      stars: "★★★★★",
      text: "Affordable luxury at its finest. Usually clothes on online marketplaces look different from pictures, but Rayie Collection delivers 100% on stitch quality and vibrant color.",
      name: "Sneha Kulkarni",
      location: "Verified AJIO Buyer • Pune",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header-clean">
          <span className="section-eyebrow">Verified Buyer Stories</span>
          <h2 className="section-main-title">Loved by Thousands of Women</h2>
          <p className="section-subtitle">Real experiences from our customers across Mumbai, Delhi, Bengaluru, and Pune.</p>
        </div>

        <div className="reviews-cards-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card-modern">
              <div className="review-stars-row">{rev.stars}</div>
              <p className="review-quote-text">"{rev.text}"</p>
              
              <div className="review-author-row">
                <img src={rev.avatar} alt={rev.name} className="author-photo" />
                <div>
                  <h5 className="author-name">{rev.name}</h5>
                  <p className="author-location">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
