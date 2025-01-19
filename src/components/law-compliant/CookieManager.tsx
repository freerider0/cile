'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useCookieManager } from '../../hooks/law-compliant/useCookieManager';
import { CookiePreferencesModal } from './CookiePreferencesModal';
import { CookiePreferences } from '../../utils/law-compliant/cookieManager';

interface CookieManagerProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  sticky?: boolean;
  initialHasInteracted: boolean;
}

export const CookieManager = ({ 
  position = 'bottom-right', 
  sticky = false,
  initialHasInteracted
}: CookieManagerProps) => {
  const {  updatePreferences, isOpen, openManager, closeManager } = useCookieManager();
  const [showBanner, setShowBanner] = useState(!initialHasInteracted);

  const handleUpdatePreferences = (newPreferences: CookiePreferences) => {
    updatePreferences(newPreferences);
    setShowBanner(false);
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };


  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-6 shadow-md z-50 bg-blue-1">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-2">Este sitio web utiliza cookies</h2>
            <p className="mb-4">
              Utilizamos cookies para mejorar tu experiencia de navegación. Por favor, elige tus preferencias.
            </p>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => {
                handleUpdatePreferences({
                  necessary: true,
                  functional: false,
                  analytics: false,
                  performance: false,
                  advertisement: false
                });
                setShowBanner(false);
              }}>
                Solo necesarias
              </Button>
              <Button onClick={() => {
                handleUpdatePreferences({ necessary: true, functional: true, analytics: true, performance: true, advertisement: true });
                setShowBanner(false);
              }}>
                Aceptar todas
              </Button>
              <Button variant="secondary" onClick={openManager}>
                Personalizar
              </Button>
            </div>
          </div>
        </div>
      )}
      {!showBanner && (
        <div className={`${sticky ? 'sticky' : 'fixed'} ${positionClasses[position]} z-50`}>
          <Button variant="outline" size="sm" onClick={openManager}>
            🍪 Configurar cookies
          </Button>
        </div>
      )}
     
      <CookiePreferencesModal
        isOpen={isOpen}
        onClose={closeManager}
        onSave={handleUpdatePreferences}
      />
    </>
  );
};

