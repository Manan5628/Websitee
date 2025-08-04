import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-page)' }}>
      <Header />
      <HeroSection />
      
      {/* Placeholder sections for MVP */}
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

      {/* Products Section Placeholder */}
      <section id="products" className="py-20 px-6">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Eco-Friendly Gift Collections</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Discover our curated range of sustainable corporate gifts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Product cards will be implemented in next iteration */}
            <div className="product-card">
              <h3 className="product-card-title">Welcome Kits</h3>
              <p className="product-card-description">Bamboo essentials and organic cotton products for new employee onboarding</p>
            </div>
            <div className="product-card">
              <h3 className="product-card-title">CSR Gifts</h3>
              <p className="product-card-description">Seed paper stationery and handmade pottery supporting social causes</p>
            </div>
            <div className="product-card">
              <h3 className="product-card-title">Festival Collections</h3>
              <p className="product-card-description">Jute and hemp bundles crafted by women's self-help groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section Placeholder */}
      <section id="impact" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2 mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="heading-1" style={{ color: 'var(--accent-text)' }}>2,847</div>
                <p className="body-medium">Trees Planted</p>
              </div>
              <div className="text-center">
                <div className="heading-1" style={{ color: 'var(--accent-text)' }}>12.5K</div>
                <p className="body-medium">KG Plastic Avoided</p>
              </div>
              <div className="text-center">
                <div className="heading-1" style={{ color: 'var(--accent-text)' }}>1,240</div>
                <p className="body-medium">Artisans Supported</p>
              </div>
              <div className="text-center">
                <div className="heading-1" style={{ color: 'var(--accent-text)' }}>8.5</div>
                <p className="body-medium">Tons CO₂ Reduced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-20 px-6">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-6">Get Started Today</h2>
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              Ready to transform your corporate gifting? Let's create something meaningful together.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="btn-primary">Request Free Sample Kit</button>
              <button className="btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="py-12 px-6" style={{ background: 'var(--text-primary)', color: 'white' }}>
        <div className="container">
          <div className="text-center">
            <p className="body-medium">© 2024 Green Touch Corporate Gifts. Crafting sustainable futures, one gift at a time.</p>
          </div>
        </div>
      </footer>
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