import React, { useState } from 'react';
import { Filter, Heart, Star, ArrowRight } from 'lucide-react';
import { products, categories, useCases } from '../data/mock';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedUseCase, setSelectedUseCase] = useState('All');

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const useCaseMatch = selectedUseCase === 'All' || product.useCase.includes(selectedUseCase);
    return categoryMatch && useCaseMatch;
  });

  return (
    <section id="products" className="py-20 px-6">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Eco-Friendly Gift Collections</h2>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            Discover our curated range of sustainable corporate gifts that make a real impact
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="body-small font-medium mr-2" style={{ color: 'var(--text-primary)' }}>Category:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="body-small font-medium mr-2" style={{ color: 'var(--text-primary)' }}>Use Case:</span>
            {['All', ...useCases].map(useCase => (
              <button
                key={useCase}
                onClick={() => setSelectedUseCase(useCase)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedUseCase === useCase
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {useCase}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="ai-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </button>
                </div>
                {product.customizable && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      Customizable
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="product-card-title">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>

                <p className="product-card-description">{product.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="body-small font-medium" style={{ color: 'var(--text-primary)' }}>Material:</span>
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>{product.material}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="body-small font-medium" style={{ color: 'var(--accent-text)' }}>Impact:</span>
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>{product.impactStory}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.useCase.map(use => (
                    <span
                      key={use}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{ 
                        background: 'var(--accent-wash)', 
                        color: 'var(--accent-text)' 
                      }}
                    >
                      {use}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: 'var(--border-light)' }}>
                  <div>
                    <span className="heading-3" style={{ color: 'var(--text-primary)' }}>{product.price}</span>
                    <span className="body-small ml-1" style={{ color: 'var(--text-muted)' }}>per kit</span>
                  </div>
                  <button className="btn-primary flex items-center gap-2">
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              No products found for the selected filters. Try adjusting your selection.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;