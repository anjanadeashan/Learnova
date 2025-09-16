// src/layout/Sidebar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const getCurrentDate = () => {
    const today = new Date();
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return today.toLocaleDateString('en-US', options);
  };

  const navigationItems = [
    {
      path: '/search',
      label: 'Search',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      )
    },
    {
      path: '/resources',
      label: 'Resources',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      path: '/chat',
      label: 'Chat',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      path: '/courses',
      label: 'Courses',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      )
    },
    {
      path: '/ai-chatbot',
      label: 'AI Chatbot',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C0,2.89 21.1,2 20,2M13,14H11V12H13V14M13,10H11V6H13V10Z"/>
        </svg>
      )
    },
    {
      path: '/translator',
      label: 'Translator',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="date-display">
            {getCurrentDate()}
          </div>
          <button className="sidebar-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
              onClick={onClose}
            >
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-branding">
            <div className="sidebar-logo">LEARNOVA</div>
            <p className="sidebar-tagline">Empowering peers, Inspiring generations</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;