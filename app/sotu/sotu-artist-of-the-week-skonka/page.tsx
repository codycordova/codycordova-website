import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SOTU Artist of the Week: Skonka - CODY CORDOVA',
  description: 'SOTU Artist of the Week feature on Skonka.',
}

export default function SOTUArtistOfTheWeekSkonka() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">SOTU Artist of the Week: Skonka</h2>
        <div className="paragraph">
          {/* Content will be extracted from sotu-artist-of-the-week-skonka.html */}
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

