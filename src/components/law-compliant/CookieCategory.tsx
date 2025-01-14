'use client'

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface CookieCategoryProps {
  name: string;
  description: string;
  isChecked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const CookieCategory = ({ name, description, isChecked, onChange, disabled = false }: CookieCategoryProps) => (
  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <Label htmlFor={name} className="text-lg font-semibold capitalize">{name}</Label>
      <Switch
        id={name}
        checked={isChecked}
        onCheckedChange={onChange}
        disabled={disabled}
      />
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

