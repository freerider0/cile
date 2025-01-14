import { useState } from 'react';
import { Script } from '@/config/scripts';

export const useScriptManager = (initialScripts: Script[]) => {
  const [enabledScripts, setEnabledScripts] = useState<Script[]>(initialScripts);

  const toggleScript = (scriptId: string) => {
    setEnabledScripts((prevScripts) =>
      prevScripts.map((script) =>
        script.id === scriptId ? { ...script, enabled: !script.enabled } : script
      )
    );
  };

  return { enabledScripts, toggleScript };
};

