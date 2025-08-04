import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6" style={{ background: 'var(--text-primary)', color: 'white' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
              <span className="font-bold text-xl">Green Touch</span>
            </div>
            <p className="body-medium mb-6 opacity-80">
              Crafting sustainable futures, one gift at a time. We transform corporate 
              gifting into meaningful impact through eco-friendly solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button 
                  key={index}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Impact', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="body-medium opacity-80 hover:opacity-100 hover:text-green-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Corporate Gifting',
                'CSR Solutions',
                'Custom Branding',
                'Bulk Orders',
                'Impact Reporting',
                'Consultation'
              ].map(service => (
                <li key={service}>
                  <span className="body-medium opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 opacity-60" />
                <div>
                  <p className="body-medium opacity-80">
                    Green Business Hub, Sector 44<br />
                    Gurgaon, Haryana 122003
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-60" />
                <p className="body-medium opacity-80">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-60" />
                <p className="body-medium opacity-80">hello@greentouch.gifts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small opacity-60 text-center md:text-left">
              © 2024 Green Touch Corporate Gifts. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(policy => (
                <a 
                  key={policy}
                  href="#"
                  className="body-small opacity-60 hover:opacity-100 transition-opacity"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="body-small opacity-60 mb-4">Certified & Verified</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <span className="body-small opacity-80">🌱 Carbon Neutral</span>
              <span className="body-small opacity-80">♻️ 100% Recyclable</span>
              <span className="body-small opacity-80">🤝 Fair Trade</span>
              <span className="body-small opacity-80">🏆 ESG Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;