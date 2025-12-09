'use client'

import Image from 'next/image'

export default function EPK() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/cody-cordova-epk_orig.png'
    link.download = 'cody-cordova-epk.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="wsite-content">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
          Electronic Press Kit
        </h1>

        <div className="my-12 max-w-7xl mx-auto">
          <div 
            className="relative w-full cursor-pointer"
            style={{ minHeight: '1000px' }}
            onClick={handleDownload}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleDownload()
              }
            }}
            aria-label="Click to download EPK assets"
          >
            <Image
              src="/images/cody-cordova-epk_orig.png"
              alt="Official EPK for Los Angeles based Tech House artist Cody Cordova. Click to download."
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-center text-foreground/80 text-sm mt-4">
            Click the image above to download EPK assets
          </p>
        </div>
      </div>
    </div>
  )
}
