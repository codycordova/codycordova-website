import type { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords?: string
  ogImage?: string | string[]
  ogUrl?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
}: PageMetadata): Metadata {
  const baseTitle = 'CODY CORDOVA'
  const fullTitle = title.includes(baseTitle) ? title : `${title} - ${baseTitle}`
  
  const defaultKeywords = 'Cody Cordova, codycordova, realcodycordova, #codycordova, tech house, house music, los angeles, wrhauz, underground tech house, deep house, techno, minimal techno, bass house, bassline, EDM, insomniac, insomniac tv, no pants party, DJ, music producer, art'
  
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords || defaultKeywords,
    openGraph: {
      title: title,
      description,
      images: Array.isArray(ogImage) ? ogImage : ogImage ? [ogImage] : undefined,
      url: ogUrl || 'http://www.codycordova.com',
    },
  }

  return metadata
}

