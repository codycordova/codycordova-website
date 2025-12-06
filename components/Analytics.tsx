'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-89295017-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-89295017-1');
        `}
      </Script>

      {/* Umami Analytics */}
      <Script
        src="https://analytics.us.umami.is/script.js"
        data-website-id="35011b7e-ed42-47dc-9bff-a3de8a6b01c2"
        strategy="afterInteractive"
      />
    </>
  )
}

