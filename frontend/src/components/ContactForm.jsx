import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    giftType: '',
    message: '',
    requestSample: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const giftTypes = [
    'Welcome Kit',
    'CSR Gift',
    'Custom Pack',
    'Festival Collection',
    'Corporate Events',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          giftType: '',
          message: '',
          requestSample: false
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-6">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
              <h3 className="heading-2 mb-4">Thank You!</h3>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                We've received your inquiry and will get back to you within 24 hours. 
                {formData.requestSample && " Your free sample kit will be shipped soon!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Let's Create Something Meaningful</h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to transform your corporate gifting? Share your requirements and 
            we'll craft the perfect sustainable solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-3 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full" 
                       style={{ background: 'var(--accent-wash)' }}>
                    <Phone className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Phone</p>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full" 
                       style={{ background: 'var(--accent-wash)' }}>
                    <Mail className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>hello@greentouch.gifts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full" 
                       style={{ background: 'var(--accent-wash)' }}>
                    <MapPin className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Address</p>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      Green Business Hub, Sector 44<br />
                      Gurgaon, Haryana 122003
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Different Audiences */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="heading-3 mb-4">Partner With Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="body-medium"><strong>Corporates:</strong> Bulk orders & custom branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="body-medium"><strong>CSR Teams:</strong> Impact reporting & certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                  <span className="body-medium"><strong>NGOs:</strong> Co-branded gift solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ borderColor: 'var(--border-light)' }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ borderColor: 'var(--border-light)' }}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ borderColor: 'var(--border-light)' }}
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ borderColor: 'var(--border-light)' }}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Gift Type
                </label>
                <select
                  name="giftType"
                  value={formData.giftType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  <option value="">Select gift type</option>
                  {giftTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block body-small font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  style={{ borderColor: 'var(--border-light)' }}
                  placeholder="Tell us about your requirements, quantity, budget, or any specific customization needs..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="requestSample"
                  id="requestSample"
                  checked={formData.requestSample}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="requestSample" className="body-medium" style={{ color: 'var(--text-primary)' }}>
                  Request a free sample kit
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;