import Cookies from 'js-cookie';

export const COOKIE_PREFERENCES_KEY = 'law-compliant-cookie-preferences';
export const GTM_CONTAINER_ID = 'GTM-XXXXXXX';

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

// Client-side cookie management
export const getClientPreferences = (): CookiePreferences | null => {
  const preferences = Cookies.get(COOKIE_PREFERENCES_KEY);
  return preferences ? JSON.parse(preferences) : null;
};

export const setClientPreferences = (preferences: CookiePreferences) => {
  Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), {
    expires: 365, // 1 año
    path: '/'
  });
};

export const resetClientPreferences = () => {
  Cookies.remove(COOKIE_PREFERENCES_KEY, { path: '/' });
};

export const initializeGTM = (preferences: CookiePreferences) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
      ...preferences
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
    
    // Get the first script tag
    const firstScript = document.getElementsByTagName('script')[0];
    // Insert before the first script tag
    firstScript.parentNode?.insertBefore(script, firstScript);
  }
};

export const initializeGTMNoscript = () => {
  if (typeof window !== 'undefined') {
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    
    noscript.appendChild(iframe);
    
    // Insert at the beginning of the body
    document.body.insertBefore(noscript, document.body.firstChild);
  }
};

export function getCookie(name: string): string | null {
  if (typeof window === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
}

export function setCookie(name: string, value: string, days?: number): void {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
}

