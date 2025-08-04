import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import ImpactTracker from './components/ImpactTracker';
import ContactForm from './components/ContactForm';
import Blog from './components/Blog';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">About Green Touch</h2>
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              We're transforming corporate gifting with sustainable, meaningful gifts that make a positive impact. 
              Our eco-friendly products support artisan communities while helping companies achieve their ESG goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="heading-3 mb-4" style={{ color: 'var(--accent-text)' }}>Our Mission</h3>
                <p className="body-medium">Creating meaningful connections through sustainable gifting solutions.</p>
              </div>
              <div className="text-center">
                <h3 className="heading-3 mb-4" style={{ color: 'var(--accent-text)' }}>Our Vision</h3>
                <p className="body-medium">A world where every corporate gift makes a positive environmental impact.</p>
              </div>
              <div className="text-center">
                <h3 className="heading-3 mb-4" style={{ color: 'var(--accent-text)' }}>Our Values</h3>
                <p className="body-medium">Sustainability, authenticity, and social responsibility in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog />
      <ImpactTracker />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;