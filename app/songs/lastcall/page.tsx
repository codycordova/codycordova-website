import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Last Call - CODY CORDOVA',
  description: 'Last Call by Cody Cordova.',
}

export default function LastCall() {
  return (
    <div className="wsite-content">
      <div className="container">
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://soundcloud.com/codycordova/last-call-ft-deja" target="_blank" rel="noopener noreferrer" style={{ color: '#ea603c' }}>
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
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146371581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://open.spotify.com/track/2eK30l0qo7FMN6kfYcl9B3" target="_blank" rel="noopener noreferrer" style={{ color: '#0be324' }}>
            Spotify
          </Link>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2eK30l0qo7FMN6kfYcl9B3?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <Link href="https://www.youtube.com/watch?v=JQkxuA0PHV0" target="_blank" rel="noopener noreferrer">
            You<span style={{ color: '#ff0000' }}>Tube</span>
          </Link>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ marginBottom: '10px', marginTop: '10px', textAlign: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/JQkxuA0PHV0?wmode=opaque"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

