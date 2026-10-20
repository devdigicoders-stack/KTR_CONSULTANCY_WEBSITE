import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname, hash } = useLocation();

  // Scroll to hash element if present, otherwise top on route change
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // 300px is roughly past the header/hero top area
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const isDocPortal = pathname.startsWith('/d/') || pathname.startsWith('/s/') || pathname.startsWith('/shared-docs');

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] shadow-[0_4px_14px_0_rgba(222,158,72,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer ${
        isDocPortal
          ? 'bottom-18 right-3 sm:bottom-22 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-xl'
          : 'bottom-6 right-6 w-12 h-12 rounded-xl'
      } ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
