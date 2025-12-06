import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Artist of the Week - SOTU - CODY CORDOVA',
  description: 'SOTU Artist of the Week posts.',
}

export default function ArtistOfTheWeek() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">Artist of the Week</h2>
        <div className="paragraph">
          <p>Artist of the Week posts will be listed here.</p>
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

