import React, { useState, useEffect } from 'react';
import { TreePine, Users, Recycle, Award } from 'lucide-react';
import { impactStats } from '../data/mock';

const ImpactTracker = () => {
  const [animatedStats, setAnimatedStats] = useState({
    treesPlanted: 0,
    plasticAvoided: 0,
    artisansSupported: 0,
    carbonReduced: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervals = 60;
    const increment = duration / intervals;

    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        treesPlanted: Math.min(prev.treesPlanted + Math.ceil(impactStats.treesPlanted / intervals), impactStats.treesPlanted),
        plasticAvoided: Math.min(prev.plasticAvoided + Math.ceil(12500 / intervals), 12500),
        artisansSupported: Math.min(prev.artisansSupported + Math.ceil(impactStats.artisansSupported / intervals), impactStats.artisansSupported),
        carbonReduced: Math.min(prev.carbonReduced + (8.5 / intervals), 8.5)
      }));
    }, increment);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const impactItems = [
    {
      icon: TreePine,
      value: animatedStats.treesPlanted.toLocaleString(),
      label: "Trees Planted",
      description: "Through our reforestation partnerships",
      color: "text-green-600"
    },
    {
      icon: Recycle,
      value: `${(animatedStats.plasticAvoided / 1000).toFixed(1)}K kg`,
      label: "Plastic Avoided",
      description: "By choosing sustainable alternatives",
      color: "text-blue-600"
    },
    {
      icon: Users,
      value: animatedStats.artisansSupported.toLocaleString(),
      label: "Artisans Supported",
      description: "Rural craftspeople and their families",
      color: "text-purple-600"
    },
    {
      icon: Award,
      value: `${animatedStats.carbonReduced.toFixed(1)} tons`,
      label: "CO₂ Reduced",
      description: "Carbon footprint reduction achieved",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="impact" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Growing Impact</h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every gift you choose creates a ripple effect of positive change. 
            Here's how we're making a difference together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
                     style={{ background: 'var(--accent-wash)' }}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="heading-1 mb-2" style={{ color: 'var(--accent-text)' }}>
                  {item.value}
                </div>
                <h3 className="heading-3 mb-2">{item.label}</h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Stories */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-2 mb-4">Stories of Change</h3>
              <p className="body-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                Behind every number is a real story of transformation. From rural artisans 
                gaining economic independence to forests being restored, your choice of 
                eco-friendly gifts creates lasting positive impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--accent-primary)' }}></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      Women's Empowerment
                    </h4>
                    <p className="body-small">
                      75% of our artisan partners are women-led cooperatives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--accent-primary)' }}></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      Skill Preservation
                    </h4>
                    <p className="body-small">
                      Traditional crafts passed down through generations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--accent-primary)' }}></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      Community Development
                    </h4>
                    <p className="body-small">
                      Direct investment in rural infrastructure and education
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500"
                alt="Artisan crafting traditional products"
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;