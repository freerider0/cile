'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CookiePreferences } from '../../utils/law-compliant/cookieManager';
import { CookieCategory } from './CookieCategory';
import { useCookieManager } from "@/hooks/law-compliant/useCookieManager";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

const cookieDescriptions: Record<keyof CookiePreferences, string> = {
  necessary: "Las cookies necesarias son imprescindibles para el funcionamiento básico del sitio web. Estas cookies garantizan funcionalidades básicas y características de seguridad del sitio web, de forma estrictamente anónima.",
  functional: "Las cookies funcionales ayudan a realizar ciertas funcionalidades como compartir el contenido del sitio web en plataformas de redes sociales, recopilar comentarios y otras características de terceros.",
  analytics: "Las cookies analíticas se utilizan para comprender cómo los visitantes interactúan con el sitio web. Estas cookies ayudan a proporcionar información sobre métricas como el número de visitantes, la tasa de rebote, la fuente de tráfico, etc.",
  performance: "Las cookies de rendimiento se utilizan para comprender y analizar los índices de rendimiento clave del sitio web, lo que ayuda a proporcionar una mejor experiencia de usuario para los visitantes.",
  advertisement: "Las cookies publicitarias se utilizan para proporcionar a los visitantes anuncios personalizados basados en las páginas que visitaron anteriormente y analizar la efectividad de las campañas publicitarias."
};

export const CookiePreferencesModal = ({ isOpen, onClose, onSave }: CookiePreferencesModalProps) => {
  const { preferences, updatePreferences, defaultPreferences } = useCookieManager();

  const handleToggle = (key: keyof CookiePreferences) => {
    if (!preferences) return;
    updatePreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  const handleSavePreferences = (newPreferences: CookiePreferences) => {
    updatePreferences(newPreferences);
    onSave(newPreferences);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true,
    };
    handleSavePreferences(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertisement: false,
    };
    handleSavePreferences(allRejected);
    onClose();
  };

  const handleSaveCurrentPreferences = () => {
    if (!preferences) return;
    handleSavePreferences(preferences);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-blue-1">
        <DialogHeader>
          <DialogTitle>Personalizar preferencias de cookies</DialogTitle>
          <DialogDescription>
            Utilizamos cookies para ayudarte a navegar y realizar ciertas funciones. Encuentra información detallada sobre todas las cookies en cada categoría a continuación.
          </DialogDescription>
        </DialogHeader>
        <div className="my-6 max-h-[60vh] overflow-y-auto">
          {!preferences && (Object.keys(defaultPreferences) as Array<keyof CookiePreferences>).map((key) => (
            <CookieCategory
              key={key}
              name={key}
              description={cookieDescriptions[key]}
              isChecked={defaultPreferences[key]}
              onChange={() => key !== 'necessary' && handleToggle(key)}
              disabled={key === 'necessary'}
            />
          ))}
          {preferences && (Object.keys(preferences) as Array<keyof CookiePreferences>).map((key) => (
            <CookieCategory
              key={key}
              name={key}
              description={cookieDescriptions[key]}
              isChecked={preferences[key]}
              onChange={() => key !== 'necessary' && handleToggle(key)}
              disabled={key === 'necessary'}
            />
          ))}
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={handleRejectAll}>
            Rechazar todo
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSaveCurrentPreferences}>
              Guardar preferencias
            </Button>
            <Button onClick={handleAcceptAll}>
              Aceptar todo
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

