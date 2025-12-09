import type { Metadata } from 'next'
import PhotoGallery from '@/components/PhotoGallery'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Photo Gallery - CODY CORDOVA',
  description: 'Photo gallery of Cody Cordova.',
}

// Gallery images - only photos from /photos directory
const galleryImages = [
  { src: '/photos/Cody1.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody2.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody3.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody4.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody5.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody6.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody7.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody8.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody9.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody10.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody11.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody12.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody13.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody14.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody14_PATTERN.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody15.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody16.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody17.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody18.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody19.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody20.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody21.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody22.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody23.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody24.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/photos/Cody25.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody26.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody27.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/Cody28.jpg', alt: 'Cody Cordova', width: 640, height: 800 },
  { src: '/photos/Cody29.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/photos/CodyStoryShot.jpg', alt: 'Cody Cordova', width: 450, height: 800 },
]

export default function PhotoGalleryPage() {
  return (
    <div className="wsite-content">
      <div className="container">
        <ScrollReveal direction="fade" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">Photo Gallery</h1>
        </ScrollReveal>
        <PhotoGallery images={galleryImages} />
      </div>
    </div>
  )
}
