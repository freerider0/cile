import { cookies } from 'next/headers'
import { CookieManager  } from '@/components/law-compliant/CookieManager'
import {COOKIE_PREFERENCES_KEY} from '@/utils/law-compliant/cookieManager'

export async function CookieManagerWrapper() {
  const cookieStore = await cookies()
  const hasInteracted = cookieStore.has(COOKIE_PREFERENCES_KEY) // o el nombre de tu cookie

  return (

      <CookieManager 
        initialHasInteracted={hasInteracted}
        position="bottom-right"
      />
   
  )
} 