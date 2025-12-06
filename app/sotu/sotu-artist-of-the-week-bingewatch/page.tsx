import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SOTU Artist of the Week: Bingewatch - CODY CORDOVA',
  description: 'SOTU Artist of the Week feature on Bingewatch.',
}

export default function SOTUArtistOfTheWeekBingewatch() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">SOTU Artist of the Week: Bingewatch</h2>
        <div className="paragraph">
          {/* Content will be extracted from sotu-artist-of-the-week-bingewatch.html */}
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

