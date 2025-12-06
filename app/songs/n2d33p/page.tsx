import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'N2D33P - CODY CORDOVA',
  description: 'N2D33P is a deep dive into Tech House by Cody Cordova.',
}

export default function N2D33P() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title" style={{ color: '#da8044' }}>Soundcloud</h2>
        
        <div style={{ textAlign: 'left', width: '100%', overflowY: 'hidden' }}>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2153035968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          You<span style={{ color: '#c23b3b' }}>Tube</span>
        </h2>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wW2298qrXlY?si=m7kU_RnNRHq-YanK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ maxWidth: '100%' }}
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <span style={{ color: '#4cc9a4' }}>BeatPort</span>
        </h2>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            src="https://embed.beatport.com/?id=5267663&type=release"
            width="100%"
            height="362"
            frameBorder="0"
            scrolling="no"
            style={{ maxWidth: '600px' }}
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title">
          <span style={{ color: '#508d24' }}>Spotify</span>
        </h2>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/0Qzh41HYn3ccDfFFyB5bn7?utm_source=generator"
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

        <h2 className="wsite-content-title">Apple Music</h2>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/n2d33p-single/1833580285"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/codycordova-n2d33pcoverart_orig.png"
            alt="N2D33P Cover Art"
            width={800}
            height={800}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <h2 className="wsite-content-title" style={{ textAlign: 'right' }}>
          N2D33P is a deep dive into Tech House.
        </h2>

        <div className="paragraph">
          When I first created this song all i thought of was water.
        </div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/img-4733_orig.jpeg"
            alt="Picture"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <h2 className="wsite-content-title">I thought about how water felt and sounded!</h2>

        <div className="paragraph">
          I remembered my own personal experiences I have had either swimming or being at the beach! Or even just being at a close friend&apos;s pool.​it was amazing.​
        </div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/img-1781_orig.jpeg"
            alt="Picture"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <h2 className="wsite-content-title" style={{ textAlign: 'right' }}>
          I wanted to incorporate a sense of being in water.
        </h2>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/img-4734_orig.jpg"
            alt="Picture"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <h2 className="wsite-content-title" style={{ textAlign: 'left' }}>
          As a Music Producer I realized it was very easy to create music based on a theme.
        </h2>

        <div className="paragraph" style={{ textAlign: 'center' }}>
          I didn&apos;t have to think or worry about what needed to &quot;come next&quot; or just happen I was literally thinking &quot;okay water all the way.&quot; I put in sloshing water audio bites, and used post processing effects to achieve a &quot;wet&quot; sound.​
          <br /><br />
          We as humans all know the sound of a water drop. Or if we are deaf or blind can feel the water drop. Water is a very essential and basic necessity for life.​
          <br /><br />
          I was able to fully groove without the constrictions of thinking about societies charlatans or critics.​
          <br /><br />
          I was able to make music fully in to deep.
          <br /><br />
          ​Whatever that means ^~^
        </div>
      </div>
    </div>
  )
}

