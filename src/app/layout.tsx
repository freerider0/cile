import { f37WicklowBlack } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${f37WicklowBlack.variable}` }>
      <body className="bg-[#002147]">{children}</body>
    </html>
  )
} 