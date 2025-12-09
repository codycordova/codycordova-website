import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StellarExpertWidget from '@/components/StellarExpertWidget'

export const metadata: Metadata = {
  title: 'CODY Token - CODY CORDOVA',
  description: 'Information about the CODY Token.',
}

export default function Token() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>What is a CODY Token?</h2>

        <div className="wsite-image wsite-image-border-none" style={{ textAlign: 'center', padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/images/cclogo.png"
            alt="CODY CORDOVA Logo"
            width={400}
            height={400}
            style={{ width: 'auto', maxWidth: '100%', height: 'auto', margin: '0 auto' }}
          />
        </div>

        <div className="paragraph" style={{ textAlign: 'center', fontSize: '18px' }}>
          <p>
            CODY Token is a custom asset created on the{' '}
            <Link href="https://stellar.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#3a96b8' }}>
              Stellar Network
            </Link>{' '}
            specifically for Music Artist Cody Cordova. He plans to use this asset as a way for fans to invest in his brand. Fans will be able to directly support Cody Cordova, purchase merchandise and concert tickets, or simply trade it as they please. There will only ever be 444,444,444,444 CODY tokens in existence.
          </p>
          <p>
            And currently there are 2000 released in the live market since June 6th, 2023.
          </p>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          Stats (powered by <Link href="https://stellar.expert/" target="_blank" rel="noopener noreferrer">Stellar.Expert</Link>)
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <StellarExpertWidget
            src="https://stellar.expert/widget/public/asset/summary/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%', minWidth: '300px', maxHeight: '100%', minHeight: '200px', width: '50%', margin: '0 auto' }}
          />
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ textAlign: 'center', width: '100%', overflowY: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <StellarExpertWidget
            src="https://stellar.expert/widget/public/asset/price/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%', minWidth: '300px', maxHeight: '100%', minHeight: '200px', width: '100%', margin: '0 auto' }}
          />
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>Goals:</h2>

        <div className="paragraph" style={{ textAlign: 'center' }}>
          <p>
            <strong>Short term goals:</strong> update codytoken.com website to implement web3 connectivity with the Stellar Wallet SDK and allow token swapping capabilities.
          </p>
          <p>
            <strong>Medium term goals:</strong> Develop a wallet app specifically for CODY Token and Stellar Assets. Update the SEP-10 and other Stellar SEP&apos;s to allow Withdrawal/Deposit capability from CODY to fiat currencies within Stellar Wallets.
          </p>
          <p>
            <strong>Long term goals:</strong> Create a video game app where users can play the game to earn CODY Token. That way fans can either use Fiat Currency to purchase Merchandise/Concert Tickets or use CODY Token to do the same.
          </p>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          Stellar Blockchain Information about CODY Token:
        </h2>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          <Link href="https://stellar.expert/explorer/public/asset/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK-1" target="_blank" rel="noopener noreferrer">
            Stellar.Expert Explorer
          </Link>
          <br /><br />
          <Link href="https://stellarchain.io/assets/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            StellarChain.io
          </Link>
          <br /><br />
          <Link href="https://lumenscan.io/assets/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            Lumenscan.io
          </Link>
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>
          How to buy CODY Token:
        </h2>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          1st you need a Stellar Wallet! There are many great ones I would recommend such as:
          <br />
          ​- <Link href="https://lobstr.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#3a96b8' }}>Lobstr</Link> (mobile/browser extension)
          <br />
          - <Link href="https://www.freighter.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#5848b7' }}>Freighter</Link> (browser extension)
          <br />
          - <Link href="https://stashapp.cloud/" target="_blank" rel="noopener noreferrer" style={{ color: '#5fa233' }}>StashApp</Link> (mobile)
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          2nd you will need to fund your wallet with some Lumens (XLM) to activate it ^~^
          <br /><br />
          You will purchase the Lumens with fiat or crypto depending on your specific situation.
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          3rd you will need to establish a trustline with CODY
          <br />
          Issuing address:
          <br />
          <span style={{ color: 'rgb(135, 240, 255)' }}>GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK</span>
          <br />
          Home Domain:
          <br />
          codytoken.com
          <br /><br />
          This will require a 0.5 XLM reserve on your end to add a custom Stellar asset!
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          4th You can then swap your XLM (lumens) for CODY on my website down here
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h2 className="wsite-content-title" style={{ textAlign: 'center', fontSize: '18px' }}>
          <u>
            <Link href="https://codytoken.com/purchase" target="_blank" rel="noopener noreferrer" style={{ color: '#dab844' }}>
              codytoken.com/purchase
            </Link>
          </u>
          <br /><br />
          <u>These are other Stellar DEX&apos;s you can swap XLM for CODY.</u>
          <br /><br />
          <Link href="https://lobstr.co/trade/CODY:GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            Lobstr Trade
          </Link>
          <br /><br />
          <Link href="https://www.stellarx.com/swap/native/CODY:GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            StellarX Swap
          </Link>
          <br /><br />
          <Link href="https://stellarterm.com/swap/XLM-native/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            StellarTerm Swap
          </Link>
          <br /><br />
          <Link href="https://obm.lumenswap.io/swap/XLM/CODY-GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK" target="_blank" rel="noopener noreferrer">
            Lumenswap Swap
          </Link>
          <br /><br />
          <Link href="https://scopuly.com/trade/CODY-XLM/GAW55YAX46HLIDRONLOLUWP672HTFXW5WWTEI2T7OXVEFEDE5UKQDJAK/native" target="_blank" rel="noopener noreferrer">
            Scopuly Trade
          </Link>
        </h2>
      </div>
    </div>
  )
}

