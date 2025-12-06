import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turn It Up - CODY CORDOVA',
  description: 'Turn It Up by Cody Cordova.',
}

export default function TurnItUp() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">
          <u>
            <em>
              <Link href="https://soundcloud.com/codycordova" target="_blank" rel="noopener noreferrer" style={{ color: '#e94412' }}>
                SoundCloud
              </Link>
            </em>
          </u>
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
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1484624905&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <u>
            <em>
              <Link href="https://open.spotify.com/artist/677lOpgqlsN820JS4ER4ds?si=QS-FjqeTRSedSyyP4qXf2A" target="_blank" rel="noopener noreferrer" style={{ color: '#44d00a' }}>
                Spotify
              </Link>
            </em>
          </u>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2YRWJPLR7t42n9gkpZOs03?utm_source=generator"
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
          <u>
            <em>
              <Link href="https://music.apple.com/us/artist/cody-cordova/1536505416" target="_blank" rel="noopener noreferrer">
                Apple Music
              </Link>
            </em>
          </u>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="200"
            style={{ width: '100%', maxWidth: '1200px', overflow: 'hidden', borderRadius: '10px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/turn-it-up/1680690451?i=1680690453"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

