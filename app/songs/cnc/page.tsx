import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'C\'N\'C [Dance Mix] - CODY CORDOVA',
  description: 'C\'N\'C [Dance Mix] by Cody Cordova.',
}

export default function CNC() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">
          <Link href="https://soundcloud.com/codycordova" target="_blank" rel="noopener noreferrer">Cody Cordova</Link> - C&apos;N&apos;C [Dance Mix]
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://soundcloud.com/codycordova/cnc" target="_blank" rel="noopener noreferrer" style={{ color: '#ef6a0f' }}>
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
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1331606086&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://open.spotify.com/track/3H1FpkB6ZTuNcUUsfi0AIV" target="_blank" rel="noopener noreferrer" style={{ color: '#77ef0f' }}>
            Spotify
          </Link>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3H1FpkB6ZTuNcUUsfi0AIV?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

