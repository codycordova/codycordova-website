import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EPK - CODY CORDOVA',
  description: 'Official Electronic Press Kit (EPK) for Los Angeles based Tech House artist Cody Cordova.',
}

export default function EPK() {
  return (
    <div className="wsite-content">
      <div className="container">
        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Link href="https://dl.dropboxusercontent.com/s/f0kk5i43ih2xxzk/Cody%20Cordova%20Artist%20Assets.zip?dl=0" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/cody-cordova-epk_orig.png"
              alt="Official EPK for Los Angeles based Tech House artist Cody Cordova."
              width={800}
              height={600}
              style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
            />
          </Link>
          <div style={{ display: 'block', fontSize: '90%', marginTop: '10px' }}>
            Official Electronic Press Kit (EPK) for Los Angeles based Tech House artist Cody Cordova.
          </div>
        </div>
      </div>
    </div>
  )
}

