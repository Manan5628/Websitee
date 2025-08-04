import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Insights & Impact Stories</h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discover how sustainable gifting is transforming corporate culture and creating positive change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      background: 'var(--accent-wash)', 
                      color: 'var(--accent-text)' 
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="heading-3 mb-3 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>

                <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                    <span className="body-small" style={{ color: 'var(--text-muted)' }}>
                      Green Touch Team
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-600" 
                          style={{ color: 'var(--accent-text)' }}>
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <h3 className="heading-3 mb-4">Stay Updated</h3>
          <p className="body-medium mb-6 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Get the latest insights on sustainable gifting, ESG practices, and artisan stories 
            delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              style={{ borderColor: 'var(--border-light)' }}
            />
            <button className="btn-primary flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="mt-12">
          <h3 className="heading-3 mb-6 text-center">Explore Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Sustainability', 'ESG Goals', 'Artisan Stories', 'Corporate Culture', 'Social Impact', 'Eco Innovation'].map(topic => (
              <button
                key={topic}
                className="px-4 py-2 bg-white rounded-full border hover:border-green-300 hover:bg-green-50 transition-colors"
                style={{ borderColor: 'var(--border-light)' }}
              >
                <span className="body-small font-medium" style={{ color: 'var(--text-primary)' }}>
                  {topic}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;