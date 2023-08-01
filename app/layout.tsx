import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import type { Metadata } from 'next'

const notojp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web App',
  description: 'kitadesign\'s web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={notojp.className}>{children}</body>
    </html>
  )
}
