'use client'

import { useState, useEffect } from 'react';
import { CookiePreferences, getClientPreferences, setClientPreferences, initializeGTM } from '../../utils/law-compliant/cookieManager';

export const useCookieManager = () => {
  const [preferences, setPreferencesState] = useState<CookiePreferences | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const defaultPreferences: CookiePreferences = {
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false,
  };

  useEffect(() => {
    const initializePreferences = async () => {
      const storedPreferences = await getClientPreferences();
      setPreferencesState(storedPreferences);
      
      if (storedPreferences && storedPreferences.analytics) {
        initializeGTM(storedPreferences);
      }
    };

    initializePreferences();
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    
    setClientPreferences(newPreferences);
    setPreferencesState(newPreferences);

    if (newPreferences.analytics) {
      initializeGTM(newPreferences);
    }
  };

  const openManager = () => setIsOpen(true);
  const closeManager = () => setIsOpen(false);

  return { preferences, updatePreferences, defaultPreferences,isOpen, openManager, closeManager };
};

