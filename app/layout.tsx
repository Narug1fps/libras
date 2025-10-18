import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Librás',
  description: 'Librás site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html  lang="pt-br">
      <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <main className='selection:bg-primary selection:text-white'>
          
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
