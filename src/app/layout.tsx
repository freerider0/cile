//import { initializeGTM, initializeGTMNoscript } from '@/utils/law-compliant/cookieManager';
import { f37WicklowBlack } from './fonts'
import './globals.css'
import { CookieManagerWrapper } from '@/components/law-compliant/CookieManagerWrapper';
import { Footer } from '@/components/sections/footer2';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Only if user has consented to analytics
  //const preferences = getPreferences();
  //if (preferences && preferences.analytics) {
    //initializeGTM(preferences);
    //initializeGTMNoscript();
  //}

  return (
    <html lang="en" className={`${f37WicklowBlack.variable}` }>
      <body className="bg-[#002147] flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieManagerWrapper />  
      </body>
    </html>
  )
} 