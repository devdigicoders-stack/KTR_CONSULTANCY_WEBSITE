import { useEffect } from 'react';

/**
 * Reusable SEO component to dynamically update document title and meta tags.
 * Helps Google index individual routes with distinct, keyword-rich titles and descriptions.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
}) => {
  useEffect(() => {
    // Base brand identifier
    const brandSuffix = 'KTR Consultants (ktrconsultants.in)';
    const fullTitle = title 
      ? `${title} | ${brandSuffix}` 
      : 'KTR Consultants | ktrconsultants.in | Financial Advisory & Loans in Lucknow';

    document.title = fullTitle;

    // Helper to create or update meta tags
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('meta[name="description"]', 'name', 'description', description);
      updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      updateMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    }

    if (keywords) {
      const defaultKeywords = 'ktrconsultants, ktr consultants, ktrconsultants.in, KTR Consultants Lucknow';
      const combinedKeywords = `${keywords}, ${defaultKeywords}`;
      updateMetaTag('meta[name="keywords"]', 'name', 'keywords', combinedKeywords);
    }

    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', fullTitle);

    // Canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
      updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null;
};

export default SEO;
