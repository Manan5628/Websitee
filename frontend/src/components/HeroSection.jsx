import React from 'react';
import { ArrowRight, Star, Award, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="body-small">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: 'var(--accent-text)' }} />
              <span className="body-small">Eco-Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="body-small">Social Impact</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="heading-1 mb-6">
            Nature's Touch in 
            <br />
            <span style={{ color: 'var(--accent-text)' }}>Every Gift</span>
          </h1>

          {/* Subtitle */}
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Transform your corporate gifting with sustainable, customizable eco-friendly gifts 
            that make a real impact. Support artisans, save the planet, and delight your recipients.
          </p>

          {/* Value Proposition */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="text-center">
              <div className="heading-3" style={{ color: 'var(--accent-text)' }}>100%</div>
              <div className="body-small">Eco-Friendly</div>
            </div>
            <div className="text-center">
              <div className="heading-3" style={{ color: 'var(--accent-text)' }}>2,847</div>
              <div className="body-small">Trees Saved</div>
            </div>
            <div className="text-center">
              <div className="heading-3" style={{ color: 'var(--accent-text)' }}>1,240</div>
              <div className="body-small">Artisans Supported</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button className="btn-primary flex items-center gap-2">
              Get Free Sample Kit
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">
              Book Free Consultation
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="body-small mb-4">Trusted by leading companies</p>
            <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
              <span className="body-small font-medium">TechCorp India</span>
              <span className="body-small font-medium">Green Energy Solutions</span>
              <span className="body-small font-medium">Sustainable Futures</span>
              <span className="body-small font-medium">EcoTech Ltd</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;