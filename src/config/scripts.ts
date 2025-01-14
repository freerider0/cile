export interface Script {
  id: string;
  name: string;
  src: string;
  async?: boolean;
  defer?: boolean;
  onload?: string;
  enabled: boolean;
  category: 'necessary' | 'functional' | 'analytics' | 'performance' | 'advertisement';
}

export const scripts: Script[] = [
  {
    id: 'meta-pixel',
    name: 'Meta Pixel',
    src: 'https://connect.facebook.net/en_US/fbevents.js',
    async: true,
    enabled: false,
    category: 'analytics'
  },
  {
    id: 'google-tag-manager',
    name: 'Google Tag Manager',
    src: 'https://www.googletagmanager.com/gtag/js?id=YOUR-GTM-ID',
    async: true,
    enabled: false,
    category: 'analytics'
  },
  {
    id: 'custom-events-api',
    name: 'Custom Events API',
    src: '/js/custom-events.js',
    defer: true,
    enabled: false,
    category: 'functional'
  }
];

