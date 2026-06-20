import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Branches from './components/Branches';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AdminDashboard from './pages/AdminDashboard';
import Portal from './pages/Portal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Admin dashboard view
  if (currentPath === '/admin-dashboard' || currentPath === '/admin') {
    return <AdminDashboard navigateTo={navigateTo} />;
  }

  // Customer application home view
  if (currentPath === '/home') {
    return (
      <div className="min-h-screen bg-parlourDark text-gray-300 relative overflow-hidden font-montserrat">
        {/* Decorative luxury background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-parlourGold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-parlourGold/3 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Branches Section */}
        <Branches />

        {/* Special Offers Section */}
        <Offers />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Artistry Lookbook Gallery Section */}
        <Gallery />

        {/* Footer Section */}
        <Footer />

        {/* Booking Form Overlay Modal */}
        <BookingModal />
      </div>
    );
  }

  // Gateway portal (default root layout)
  return <Portal navigateTo={navigateTo} />;
}
