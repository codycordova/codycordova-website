import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Britney Spears - I\'m a Slave 4 U (Cody Cordova Bootleg) - CODY CORDOVA',
  description: 'I\'m a Slave 4 U bootleg by Cody Cordova.',
}

export default function BritneySpears() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">​Britney Spears - I&apos;m a Slave 4 U (Cody Cordova Bootleg)</h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://soundcloud.com/codycordova/4-u-1" target="_blank" rel="noopener noreferrer" style={{ color: '#f86d2b' }}>
            SoundCloud
          </Link>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1085438131&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

