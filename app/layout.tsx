import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'CODY CORDOVA - Cody Cordova Tech House',
  description: 'The home page of Cody Cordova\'s website.',
  keywords: 'Cody Cordova, codycordova, realcodycordova, #codycordova, tech house, house music, los angeles, wrhauz, underground tech house, deep house, techno, minimal techno, bass house, bassline, EDM, insomniac, insomniac tv, no pants party, DJ, music producer, art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="01a36b65-bb10-4d1e-856b-137a2fe37854"
          data-blockingmode="auto"
          type="text/javascript"
          async
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

