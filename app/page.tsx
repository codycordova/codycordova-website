import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CODY CORDOVA - Cody Cordova Tech House',
  description: 'The home page of Cody Cordova\'s website.',
  openGraph: {
    title: 'Cody Cordova Tech House',
    description: 'The home page of Cody Cordova\'s website.',
    images: [
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/e92ccff6-f14a-4f76-a0c3-c208b89ef2ba_orig.jpg',
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/68e5300d-8985-4f36-b8e7-1ef0eb94904b_orig.jpg',
    ],
    url: 'http://www.codycordova.com/',
  },
}

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <Image
          src="/images/cody-header.jpg"
          alt="Cody Cordova"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="wsite-content">
        <div className="container">
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="glass-text-bubble" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 className="wsite-content-title">
            <em>Sacramento raised me, Los Angeles made me.</em>
          </h2>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="glass-text-bubble" style={{ textAlign: 'center' }}>
          <div className="paragraph">
            <p>
              From martial arts champion to concert violinist turned Music Artist sensation, Cody Cordova lives for electrifying performances. A violinist from age 6, Cody&apos;s musical evolution led him to the vibrant energy of EDM, with a special love for Dubstep. It was the underground Tech House scene of Los Angeles, however that showed him the power of rhythm on the dance floor. A master at crafting grooves that keep the dance floor alive, Cody channels the pure ecstasy of music into every set. As a Music Producer/DJ, he brings a unique cultural flair to music that truly embodies the pulse of LA&apos;s nightlife.
            </p>
            <p>
              Experience the connection—lose yourself in Cody Cordova&apos;s beat.
            </p>
          </div>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-multicol">
          <div className="wsite-multicol-table-wrap" style={{ margin: '0 -15px' }}>
            <table className="wsite-multicol-table">
              <tbody className="wsite-multicol-tbody">
                <tr className="wsite-multicol-tr">
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
                      <Image
                        src="/images/e92ccff6-f14a-4f76-a0c3-c208b89ef2ba_orig.jpg"
                        alt="Cody Cordova Head Shot 1 Tech House"
                        width={545}
                        height={545}
                        style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </td>
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
                      <Image
                        src="/images/68e5300d-8985-4f36-b8e7-1ef0eb94904b_orig.jpg"
                        alt="Cody Cordova Head Shot 2 Tech House"
                        width={545}
                        height={545}
                        style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
                      <Image
                        src="/images/a4edd375-22fb-49fd-8ef3-1f5faeeb3c25_orig.jpg"
                        alt="Picture"
                        width={545}
                        height={545}
                        style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/edmmaniac_cody.jpg"
            alt="Cody Cordova Insomniac TV EDM Maniac Tech House DJ Music Producer Artist"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
          <div className="glass-text-bubble" style={{ display: 'inline-block', fontSize: '90%', marginTop: '10px', padding: '10px 20px' }}>
            Cody Cordova performing for Insomniac TV sponsored by EDM Maniac. #techhouse
          </div>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="glass-text-bubble" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 className="wsite-content-title">
            <strong>
              Check the <Link href="/about" style={{ color: '#e889e0' }}>About </Link>page to learn<br />
              more about who I am and what I do!
            </strong>
          </h2>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '10px', overflow: 'hidden' }}></div>
          <div className="wsite-social wsite-social-default">
            <a
              className="wsite-social-item wsite-social-facebook"
              href="https://www.facebook.com/CODYCORDOVAmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘 Facebook
            </a>
            <a
              className="wsite-social-item wsite-social-twitter"
              href="http://twitter.com/realcodycordova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              🐦 Twitter
            </a>
            <a
              className="wsite-social-item wsite-social-instagram"
              href="http://instagram.com/realcodycordova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷 Instagram
            </a>
            <a
              className="wsite-social-item wsite-social-linkedin"
              href="https://www.linkedin.com/in/cody-cordova-499642b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              💼 LinkedIn
            </a>
          </div>
          <div style={{ height: '10px', overflow: 'hidden' }}></div>
        </div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/cc_perf_pic.JPG"
            alt="Cody Cordova Tech House Artist Los Angeles"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'left', padding: '10px 0' }}>
          <Image
            src="/images/Cody 2020 black fill png.png"
            alt="Cody Cordova logo"
            width={161}
            height={60}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
          <div className="glass-text-bubble" style={{ display: 'inline-block', fontSize: '90%', padding: '10px 20px' }}>
            The official logo of CODYCORDOVA.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

