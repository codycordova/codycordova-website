import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When The Weekend Hits - CODY CORDOVA',
  description: 'When The Weekend Hits by Cody Cordova.',
}

export default function WhenTheWeekendHits() {
  return (
    <div className="wsite-content">
      <div className="container">
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">Soundcloud</h2>

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
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1097211871&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">Spotify</h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/77HxxCOs8CHdSMP93zTSnz?utm_source=generator"
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

        <h2 className="wsite-content-title">Track Information</h2>

        <h2 className="wsite-content-title" style={{ fontSize: '20px' }}>
          When The Weekend Hits is a highly energetic Tech House track made specifically for those who enjoy letting loose on the weekends. Work had you busy during the week? Baby mama giving you troubles? Forget all your responsibilities and let your dance moves take over when this bassline hits! This track will get you ready for any party, and also can provide for any party. Play this track when you&apos;re going out or at the party and I guarantee it will get everybody dancing, The catchy lyrics and groovy bassline will pull you into a dancing frenzy for sure! So go out there and let loose, because you deserve it!!!
        </h2>
      </div>
    </div>
  )
}

