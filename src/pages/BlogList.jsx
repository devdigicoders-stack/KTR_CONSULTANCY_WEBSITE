import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOGS_DATA } from '../data/blogsData';
import { getBlogViews, formatViewCount } from '../utils/viewCounter';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'CIBIL & Credit Fraud', 'Property & Housing Loans', 'Credit Score Improvement', 'Home Loans'];

  const filteredBlogs = BLOGS_DATA.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-800">
      <SEO 
        title="Financial Insights, Loan Guides & CIBIL Advice | KTR Consultants Blog"
        description="Expert financial guides, home loan advice, CIBIL improvement tips, and property loan guides by KTR Consultants in Lucknow. Stay informed on Indian banking & credit laws."
        keywords="financial blogs lucknow, cibil score advice, home loan guide lucknow, fake loan removal guide, property loan tips, ktr consultants blog"
        canonicalUrl="https://www.ktrconsultants.in/blogs"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#020d1c] via-[#051833] to-[#020d1c] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white font-medium">Blogs & Financial Guides</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 border border-[#de9e48]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#de9e48] uppercase tracking-wider mb-4">
              <span>📚</span> KTR Financial Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-[1.2] mb-4 text-white">
              Financial Guides, Loan Insights <br />
              <span className="text-[#de9e48]">& CIBIL Advisory Articles</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Stay informed with actionable, legal, and banking insights from KTR Consultants. Learn how to secure the best home loans in Lucknow, remove fake loan entries, and boost your credit profile.
            </p>

            {/* Search Input */}
            <div className="relative max-w-lg">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles on Home Loans, CIBIL, Property..." 
                className="w-full bg-white text-gray-900 rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#de9e48] shadow-lg"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories Bar */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#020d1c] text-[#de9e48] shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-sm">No articles found matching your search.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#de9e48] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => {
                const views = getBlogViews(blog.slug, blog.baseViews);
                return (
                  <article 
                    key={blog.id} 
                    className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#de9e48]/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Featured Image */}
                      <Link to={`/blog/${blog.slug}`} className="block relative h-48 sm:h-52 overflow-hidden bg-gray-100">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="font-bold text-[#de9e48] bg-[#020d1c]/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider text-[10px] shadow">
                            {blog.category}
                          </span>
                          {blog.trending && (
                            <span className="font-bold text-white bg-rose-600 px-2 py-0.5 rounded-full text-[10px] shadow flex items-center gap-1">
                              🔥 Trending
                            </span>
                          )}
                        </div>

                        {/* View Count Badge on Image */}
                        <div className="absolute bottom-3 right-3 bg-[#020d1c]/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 shadow border border-white/10">
                          <svg className="w-3.5 h-3.5 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{formatViewCount(views)} views</span>
                        </div>
                      </Link>

                      {/* Content Area */}
                      <div className="p-6">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                          <span>{blog.date}</span>
                          <span>{blog.readTime}</span>
                        </div>

                        <h2 className="text-lg font-bold font-serif text-[#020d1c] mb-2.5 group-hover:text-[#de9e48] transition-colors leading-snug line-clamp-2">
                          <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#fafafa] border-t border-gray-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#de9e48]/20 text-[#de9e48] font-black flex items-center justify-center text-[10px]">
                          K
                        </span>
                        <span className="font-bold text-[#020d1c] block truncate max-w-[130px]">{blog.author}</span>
                      </div>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="font-black text-[#de9e48] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      >
                        <span>Read Full Guide</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-[#020d1c] text-white py-14 border-t border-gray-800">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest block mb-2">HAVE A SPECIFIC CASE?</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4 text-white">
            Need Expert Financial or Loan Consultation in Lucknow?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Speak directly with our loan and CIBIL specialists at KTR Consultants (Virat Khand, Gomti Nagar).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply-online"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black py-3 px-8 rounded-lg text-xs sm:text-sm transition-all shadow"
            >
              Apply Online Now
            </Link>
            <a
              href="https://wa.me/919918699696"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg text-xs sm:text-sm transition-all border border-white/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
