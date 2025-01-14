import { cookies } from 'next/headers';
import { COOKIE_PREFERENCES_KEY, type CookiePreferences } from './cookieManager';

export const getServerPreferences = async (): Promise<CookiePreferences | null> => {
  const cookieStore = await cookies();
  const preferences = cookieStore.get(COOKIE_PREFERENCES_KEY);
  if (preferences) {
    return JSON.parse(preferences.value);
  }
  return null;
};

export const setServerPreferences = async (preferences: CookiePreferences) => {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), { 
    expires: 365, // 1 year
    path: '/',
  });
};

export const resetServerPreferences = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_PREFERENCES_KEY);
}; 