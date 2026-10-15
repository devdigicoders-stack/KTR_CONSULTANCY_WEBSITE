/**
 * Utility to manage and display realistic view counts for blogs.
 * Persists and increments views in localStorage per session.
 */

export const getBlogViews = (slug, baseViews = 1500) => {
  if (typeof window === 'undefined') return baseViews;
  const key = `ktr_views_${slug}`;
  const stored = localStorage.getItem(key);
  if (stored) {
    return parseInt(stored, 10);
  }
  localStorage.setItem(key, baseViews.toString());
  return baseViews;
};

export const incrementBlogViews = (slug, baseViews = 1500) => {
  if (typeof window === 'undefined') return baseViews;
  const key = `ktr_views_${slug}`;
  const sessionKey = `ktr_viewed_session_${slug}`;
  
  let current = getBlogViews(slug, baseViews);
  
  // Only increment once per browser tab session to keep it realistic
  if (!sessionStorage.getItem(sessionKey)) {
    current += 1;
    localStorage.setItem(key, current.toString());
    sessionStorage.setItem(sessionKey, 'true');
  }
  
  return current;
};

export const formatViewCount = (count) => {
  if (!count) return '1.2k';
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toLocaleString('en-IN');
};
