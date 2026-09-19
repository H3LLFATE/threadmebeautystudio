import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-cream font-sans">
        {/* Faded Background Overlay */}
        <div className="fixed inset-0 z-0 bg-pattern opacity-30 pointer-events-none mix-blend-multiply"></div>
        
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </div>
    </Router>
  );
}

export default App;
