import type { Metadata } from 'next'
import PhotoGallery from '@/components/PhotoGallery'

export const metadata: Metadata = {
  title: 'Photo Gallery - CODY CORDOVA',
  description: 'Photo gallery of Cody Cordova.',
}

// Gallery images extracted from photogallery.html slideshow
const galleryImages = [
  { src: '/images/a54a8110-enhanced-nr.jpg', alt: 'Cody Cordova', width: 800, height: 640 },
  { src: '/images/e92ccff6-f14a-4f76-a0c3-c208b89ef2ba_orig.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/e10674ff-04b2-4556-bd07-6a4e75fcb52b.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/cody1.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/5568cc30-6b34-4135-a416-c0a2535087b4.jpg', alt: 'Cody Cordova', width: 800, height: 534 },
  { src: '/images/cody2.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody3.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody4.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody5.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody6.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody7.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody8.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody9.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody10.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/68e5300d-8985-4f36-b8e7-1ef0eb94904b_orig.jpg', alt: 'Cody Cordova', width: 800, height: 534 },
  { src: '/images/cody11.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody12.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody13.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody14.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/e1eb7e19-f83a-45f2-b6ad-3c8e80c99cbe.jpg', alt: 'Cody Cordova', width: 800, height: 534 },
  { src: '/images/a4edd375-22fb-49fd-8ef3-1f5faeeb3c25_orig.jpg', alt: 'Cody Cordova', width: 800, height: 531 },
  { src: '/images/cody14-pattern.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody15.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/645ceb55-26ab-42c9-b0d1-24a4bc7d8e99.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/cody16.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody17.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody18.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody19.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/d3ded865-d5da-4720-989c-9d1a47b6ce4d.jpg', alt: 'Cody Cordova', width: 800, height: 534 },
  { src: '/images/cody20.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/f6f52c88-d69b-46ac-8cc6-b81674ccb956.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/cody21.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/59c8eb3d-d5f9-4386-950a-9022b6d60ba1.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/0b42f6d6-4192-4d4b-8e91-0ba5d4b404d6.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/cody22.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/198192ff-07b4-4969-bfec-c7fe534d9c33.jpg', alt: 'Cody Cordova', width: 800, height: 534 },
  { src: '/images/cody23.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody24.jpg', alt: 'Cody Cordova', width: 534, height: 800 },
  { src: '/images/cody25.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody26.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody27.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/cody28.jpg', alt: 'Cody Cordova', width: 640, height: 800 },
  { src: '/images/cody29.jpg', alt: 'Cody Cordova', width: 533, height: 800 },
  { src: '/images/codystoryshot.jpg', alt: 'Cody Cordova', width: 450, height: 800 },
  { src: '/images/a54a8115-edit_orig.jpg', alt: 'Cody Cordova', width: 800, height: 640 },
]

export default function PhotoGalleryPage() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">Photo Gallery</h2>
        <PhotoGallery images={galleryImages} />
      </div>
    </div>
  )
}
