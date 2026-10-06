import React from 'react';

/**
 * Toast Notification Popup
 */
export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-banner-clean">
      <span className="toast-dot"></span>
      <span className="toast-text">{message}</span>
    </div>
  );
}
