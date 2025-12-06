import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Cody Cordova - CODY CORDOVA',
  description: 'Who is Cody Cordova And what does he do?',
  openGraph: {
    title: 'About Cody Cordova',
    description: 'Who is Cody Cordova And what does he do?',
    images: [
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/cody-headshot_orig.jpg',
    ],
    url: 'http://www.codycordova.com/about.html',
  },
}

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>About Cody Cordova</h1>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '24px' }}>Meet Our Team</span>
        </h2>

        <div className="wsite-multicol">
          <div className="wsite-multicol-table-wrap" style={{ margin: '0 -15px' }}>
            <table className="wsite-multicol-table">
              <tbody className="wsite-multicol-tbody">
                <tr className="wsite-multicol-tr">
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '20px' }}><strong>Cody Cordova</strong></span>
                    </h2>
                    <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '0 0 10px 0' }}>
                      <Link href="https://www.instagram.com/realcodycordova/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/cody-headshot_orig.jpg"
                          alt="Picture"
                          width={349}
                          height={349}
                          style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                        />
                      </Link>
                    </div>
                    <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '18px' }}>Artist</span>
                    </h2>
                  </td>
                  <td className="wsite-multicol-col" style={{ width: '50%', padding: '0 15px' }}>
                    <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '20px' }}>Ezzy Guerra</span>
                    </h2>
                    <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '0 0 10px 0' }}>
                      <Link href="https://www.instagram.com/lilwodii/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/published/esmeralda-guerra.jpg?1710340170"
                          alt="Ezzy Cordova"
                          width={349}
                          height={349}
                          style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                        />
                      </Link>
                    </div>
                    <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '18px' }}>Manager</span>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ height: '31px' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>About Me</h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="paragraph" style={{ textAlign: 'center', fontSize: '18px' }}>
          <p>
            28 years young, Cody is a seasoned Music Producer and DJ with over 15 years of experience. From mastering violin in the Sacramento Youth Symphony to earning 10 gold medals in Wushu, Cody&apos;s journey blends passion, discipline, and creativity. He lives by non-violence and honesty, valuing positive energy in life and music.
          </p>
          <p>
            With a worldview enriched by global travels, Cody&apos;s music reflects cultural lessons and personal growth. He&apos;s not only performing at underground raves but also innovating with tech—his latest project, CODY coin on the Stellar Network, lets fans engage by buying tickets, merch, or earning currency in future games.
          </p>
          <p>
            Reach out to Cody on social media; he&apos;s all about connecting with those who support his vision.
          </p>
          <p>
            <strong>Business Inquiries:</strong> <a href="mailto:business@codycordova.com">business@codycordova.com</a>
          </p>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/a54a8115-edit_orig.jpg"
            alt="Cody Cordova Music Artist Music Producer DJ Ur Baby Mama's Favorite DJ"
            width={800}
            height={600}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
          <div style={{ display: 'block', fontSize: '90%', marginTop: '10px' }}>
            DJ&apos;ing at Fever Los Angeles
          </div>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          <strong>Music</strong>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden' }}>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11924691&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
          ></iframe>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0' }}>
          <Image
            src="/images/Cody 2020 black fill png.png"
            alt="Cody Cordova Official Logo"
            width={906}
            height={300}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
          />
          <div style={{ display: 'block', fontSize: '90%', marginTop: '10px' }}>
            The official logo of CODYCORDOVA.
          </div>
        </div>
      </div>
    </div>
  )
}

