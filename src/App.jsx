// src/App.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading'; // loading animation

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Homepage'));
const Services = lazy(() => import('./pages/Servicespage'));
const Pricing = lazy(() => import('./pages/Pricingpage'));
const About = lazy(() => import('./pages/Aboutuspage'));
const Contact = lazy(() => import('./pages/Contactus'));
const Join= lazy(()=>import("./pages/Join"))
// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-16">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/join" element={<Join />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
