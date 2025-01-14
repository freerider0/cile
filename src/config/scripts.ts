export interface Script {
  id: string;
  src: string;
  async?: boolean;
  defer?: boolean;
  onload?: string;
}

export const scripts: Script[] = [
  {
    id: 'meta-pixel',
    src: 'https://connect.facebook.net/en_US/fbevents.js',
    async: true,
  },
  {
    id: 'google-tag-manager',
    src: 'https://www.googletagmanager.com/gtag/js?id=YOUR-GTM-ID',
    async: true,
  },
  {
    id: 'custom-events-api',
    src: '/js/custom-events.js',
    defer: true,
  },
];

