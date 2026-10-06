import React from 'react';

/**
 * Top Announcement Bar
 * Displays complimentary shipping and discount codes.
 */
export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-inner">
        <div className="announcement-text">
          <span>COMPLIMENTARY EXPRESS DELIVERY ACROSS INDIA ON ORDERS OVER ₹1,499</span>
          <span className="announcement-divider">•</span>
          <span className="announcement-highlight">USE CODE: <strong>RAYIE15</strong> FOR 15% OFF</span>
        </div>
        <div className="announcement-links">
          <a href="https://www.ajio.com/b/rayie-collection?page=2" target="_blank" rel="noopener noreferrer">
            ★ Official Brand on AJIO
          </a>
          <span>INR (₹)</span>
        </div>
      </div>
    </div>
  );
}
