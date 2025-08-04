import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-header">
      <div className="flex items-center gap-2">
        <Leaf className="w-6 h-6" style={{ color: 'var(--accent-text)' }} />
        <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
          Green Touch
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#products" className="nav-link">Products</a>
        <a href="#impact" className="nav-link">Impact</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <button className="btn-secondary">
          Free Sample Kit
        </button>
        <button className="btn-primary">
          Book Consultation
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
        ) : (
          <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg md:hidden">
          <nav className="flex flex-col p-4 gap-2">
            <a href="#home" className="nav-link text-left" onClick={toggleMenu}>Home</a>
            <a href="#about" className="nav-link text-left" onClick={toggleMenu}>About</a>
            <a href="#products" className="nav-link text-left" onClick={toggleMenu}>Products</a>
            <a href="#impact" className="nav-link text-left" onClick={toggleMenu}>Impact</a>
            <a href="#blog" className="nav-link text-left" onClick={toggleMenu}>Blog</a>
            <a href="#contact" className="nav-link text-left" onClick={toggleMenu}>Contact</a>
            <div className="flex flex-col gap-2 mt-4">
              <button className="btn-secondary" onClick={toggleMenu}>
                Free Sample Kit
              </button>
              <button className="btn-primary" onClick={toggleMenu}>
                Book Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;