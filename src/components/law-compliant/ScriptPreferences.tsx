import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Script } from '../config/scripts';

interface ScriptPreferencesProps {
  scripts: Script[];
  toggleScript: (scriptId: string) => void;
}

export const ScriptPreferences: React.FC<ScriptPreferencesProps> = ({ scripts, toggleScript }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Script Preferences</h2>
      {scripts.map((script) => (
        <div key={script.id} className="flex items-center justify-between">
          <Label htmlFor={script.id}>{script.id}</Label>
          <Switch
            id={script.id}
            checked={script.enabled}
            onCheckedChange={() => toggleScript(script.id)}
          />
        </div>
      ))}
    </div>
  );
};

