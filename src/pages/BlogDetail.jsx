import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOGS_DATA } from '../data/blogsData';
import { incrementBlogViews, formatViewCount } from '../utils/viewCounter';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = BLOGS_DATA.find(b => b.slug === slug);
  const [views, setViews] = useState(() => (blog ? blog.baseViews : 1500));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (blog) {
      const updated = incrementBlogViews(blog.slug, blog.baseViews);
      setViews(updated);
    }
  }, [slug, blog]);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold font-serif text-[#020d1c] mb-2">Article Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">The blog post you are looking for does not exist or has been moved.</p>
        <Link to="/blogs" className="bg-[#de9e48] text-[#020d1c] font-bold text-xs py-2.5 px-6 rounded-lg">
          ← Back to All Articles
        </Link>
      </div>
    );
  }

  const relatedBlogs = BLOGS_DATA.filter(b => b.id !== blog.id).slice(0, 3);
  const activeReaders = Math.floor((views % 17) + 3);

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-800">
      <SEO 
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.excerpt}
        keywords={blog.keywords}
        canonicalUrl={`https://www.ktrconsultants.in/blog/${blog.slug}`}
      />

      {/* JSON-LD Structured Data for Google Article / BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "image": `https://www.ktrconsultants.in${blog.image}`,
            "author": {
              "@type": "Organization",
              "name": blog.author,
              "url": "https://www.ktrconsultants.in/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KTR Consultants",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ktrconsultants.in/main.png"
              }
            },
            "datePublished": "2026-10-15T09:00:00+05:30",
            "dateModified": "2026-10-15T09:00:00+05:30",
            "mainEntityOfPage": `https://www.ktrconsultants.in/blog/${blog.slug}`
          })
        }}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-b from-[#020d1c] via-[#051833] to-[#020d1c] text-white pt-10 pb-14 lg:pt-14 lg:pb-18 relative">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blogs" className="hover:text-[#de9e48] transition-colors">Blogs</Link>
            <span>›</span>
            <span className="text-[#de9e48] font-medium truncate max-w-xs">{blog.category}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold text-[#de9e48] bg-[#de9e48]/15 border border-[#de9e48]/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {blog.category} • {blog.readTime}
              </span>
              <span className="text-xs font-bold text-white bg-emerald-600/80 px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                <span>{activeReaders} people reading right now</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-serif leading-[1.25] text-white mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300 pt-3 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#de9e48] text-[#020d1c] font-bold flex items-center justify-center text-xs">
                  KTR
                </span>
                <div>
                  <span className="font-bold text-white block">{blog.author}</span>
                  <span className="text-[11px] text-gray-400">{blog.authorRole}</span>
                </div>
              </div>

              {/* Views & Date Stat */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg text-xs">
                <div className="flex items-center gap-1.5 text-[#de9e48] font-bold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{views.toLocaleString('en-IN')} total reads</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300">Updated: {blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content & Sidebar Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Content Area (8 Cols) */}
            <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200/90 shadow-sm leading-relaxed space-y-6">
              
              {/* Featured Article Image */}
              {blog.image && (
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-md mb-8">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-64 sm:h-80 md:h-96 object-cover" 
                  />
                  <div className="bg-[#fafafa] px-4 py-2 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
                    <span>KTR Consultants Legal & Banking Research</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span>✓</span> Verified Editorial Guide
                    </span>
                  </div>
                </div>
              )}
              {blog.content.map((item, idx) => {
                if (item.type === 'intro' || item.type === 'p') {
                  return (
                    <p key={idx} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  );
                }

                if (item.type === 'callout') {
                  return (
                    <div key={idx} className="bg-amber-50 border-l-4 border-[#de9e48] p-5 rounded-r-xl my-4">
                      <h4 className="font-bold text-sm text-[#020d1c] mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  );
                }

                if (item.type === 'h2') {
                  return (
                    <h2 key={idx} className="text-xl sm:text-2xl font-bold font-serif text-[#020d1c] pt-4 border-t border-gray-100">
                      {item.title}
                    </h2>
                  );
                }

                if (item.type === 'h3') {
                  return (
                    <h3 key={idx} className="text-base sm:text-lg font-bold text-[#020d1c] pt-2">
                      {item.title}
                    </h3>
                  );
                }

                if (item.type === 'list') {
                  return (
                    <ul key={idx} className="space-y-2.5 my-3">
                      {item.items.map((li, liIdx) => (
                        <li key={liIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <span className="text-[#de9e48] font-bold text-base leading-none">•</span>
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (item.type === 'table') {
                  return (
                    <div key={idx} className="overflow-x-auto my-4">
                      <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-[#020d1c] text-white font-bold text-xs">
                          <tr>
                            {item.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 border-b border-gray-800">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {item.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 text-gray-700">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (item.type === 'cta') {
                  return (
                    <div key={idx} className="bg-gradient-to-br from-[#020d1c] to-[#0a2347] text-white p-6 sm:p-8 rounded-2xl shadow-lg my-8 border border-gray-800">
                      <span className="text-xs font-bold text-[#de9e48] uppercase tracking-wider block mb-1">RECOMMENDED ACTION</span>
                      <h3 className="text-lg sm:text-xl font-bold font-serif mb-2 text-white">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">{item.text}</p>
                      <Link
                        to={item.buttonLink}
                        className="inline-flex items-center gap-2 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm py-3 px-6 rounded-lg transition-all shadow"
                      >
                        <span>{item.buttonText}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  );
                }

                return null;
              })}

              {/* Share & Author Card */}
              <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link to="/blogs" className="text-xs font-bold text-[#de9e48] hover:underline inline-flex items-center gap-1">
                  <span>←</span>
                  <span>View All Financial Guides</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Share this guide:</span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-1.5 rounded-full hover:opacity-90"
                    title="Share on WhatsApp"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </main>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Consultation Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
                <span className="w-12 h-12 rounded-full bg-[#de9e48]/15 text-[#de9e48] flex items-center justify-center text-xl mx-auto mb-3">
                  📞
                </span>
                <h3 className="font-bold text-[#020d1c] text-base mb-1">Need Loan Assistance?</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Our loan officers in Gomti Nagar, Lucknow are available for instant eligibility assessment.
                </p>
                <div className="space-y-2.5">
                  <Link
                    to="/apply-online"
                    className="block w-full bg-[#020d1c] hover:bg-[#0a1930] text-white font-bold py-2.5 rounded-lg text-xs transition-all shadow"
                  >
                    Apply Online (Zero Fees)
                  </Link>
                  <a
                    href="https://wa.me/919918699696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold py-2.5 rounded-lg text-xs transition-all border border-[#25D366]/30"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Quick Links to Key Services */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#020d1c] mb-4">Popular Services</h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link to="/home-loan-in-lucknow" className="text-gray-600 hover:text-[#de9e48] font-medium flex items-center justify-between py-1 border-b border-gray-100">
                      <span>Home Loan in Lucknow</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/fake-loan-removal" className="text-gray-600 hover:text-[#de9e48] font-medium flex items-center justify-between py-1 border-b border-gray-100">
                      <span>Fake Loan Removal from CIBIL</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/non-approved-loans" className="text-gray-600 hover:text-[#de9e48] font-medium flex items-center justify-between py-1 border-b border-gray-100">
                      <span>Non-Approved Society Loans</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/business-finance" className="text-gray-600 hover:text-[#de9e48] font-medium flex items-center justify-between py-1 border-b border-gray-100">
                      <span>Business & MSME Loans</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cibil-services" className="text-gray-600 hover:text-[#de9e48] font-medium flex items-center justify-between py-1">
                      <span>CIBIL Score Repair</span>
                      <span>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <h3 className="text-xl font-bold font-serif text-[#020d1c] mb-6">Related Guides & Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogs.map(rb => (
              <div key={rb.id} className="p-5 bg-[#fafafa] rounded-xl border border-gray-200 hover:border-[#de9e48] transition-all">
                <span className="text-[10px] font-bold text-[#de9e48] uppercase tracking-wider block mb-1">
                  {rb.category}
                </span>
                <h4 className="font-bold text-sm text-[#020d1c] mb-2 line-clamp-2">
                  <Link to={`/blog/${rb.slug}`} className="hover:text-[#de9e48]">
                    {rb.title}
                  </Link>
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{rb.excerpt}</p>
                <Link to={`/blog/${rb.slug}`} className="text-xs font-bold text-[#020d1c] hover:text-[#de9e48]">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
