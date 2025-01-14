'use client'

import { useEffect } from 'react';
import { Script } from '@/config/scripts';

interface ScriptManagerProps {
  scripts: Script[];
}

export const ScriptManager: React.FC<ScriptManagerProps> = ({ scripts }) => {
  useEffect(() => {
    scripts.forEach((script) => {
      if (!document.getElementById(script.id)) {
        const scriptElement = document.createElement('script');
        scriptElement.id = script.id;
        scriptElement.src = script.src;
        if (script.async) scriptElement.async = true;
        if (script.defer) scriptElement.defer = true;
        if (script.onload) scriptElement.onload = new Function(script.onload) as any;
        document.body.appendChild(scriptElement);
      }
    });

    return () => {
      scripts.forEach((script) => {
        const scriptElement = document.getElementById(script.id);
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      });
    };
  }, [scripts]);

  return null;
};

