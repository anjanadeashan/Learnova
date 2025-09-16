import React from 'react';

const GuestRoute = ({ children }) => {
  // Simple guest route wrapper
  // You can add guest-specific logic here
  return (
    <div className="guest-wrapper">
      <div className="guest-banner">
        <span>You are browsing as a guest. <a href="/login">Login</a> for full access.</span>
      </div>
      {children}
    </div>
  );
};

export default GuestRoute;