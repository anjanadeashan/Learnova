// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

// Page Components
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Course from './components/Course';
import Resource from './components/Resource';
import Translator from './components/Translater'; 
import AIChatbot from './components/AIChatbot';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

// Auth Components
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import GuestRoute from './auth/GuestRoute';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <Router>
      <Routes>
        {/* Auth routes (no layout) */}
        <Route path="/login" element={<GuestRoute><LoginForm /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><SignupForm /></GuestRoute>} />

        {/* All other routes with main layout */}
        <Route
          path="/*"
          element={
            <MainLayout
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
              closeSidebar={closeSidebar}
            />
          }
        />
      </Routes>
    </Router>
  );
}

// Main Layout for app routes
const MainLayout = ({ sidebarOpen, toggleSidebar, closeSidebar }) => {
  return (
    <div className="app-layout">
      <Header 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen}
      />

      <div className="layout-body">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
        />

        <main className={`content ${sidebarOpen ? "content-shift" : ""}`}>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Features - Updated paths to match sidebar navigation */}
            <Route path="/search" element={<div><h2>Search Page</h2></div>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resource />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/ai-chatbot" element={<AIChatbot />} />
            <Route path="/translator" element={<Translator />} />

            {/* Legacy routes for backward compatibility */}
            <Route path="/course" element={<Course />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/aichatbot" element={<AIChatbot />} />

            {/* Fallback */}
            <Route path="*" element={<div className="not-found"><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;