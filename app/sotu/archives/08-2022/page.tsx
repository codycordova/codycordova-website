import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'August 2022 Archive - SOTU - CODY CORDOVA',
  description: 'SOTU blog posts from August 2022.',
}

export default function August2022Archive() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">August 2022 Archive</h2>
        <div className="paragraph">
          <p>Posts from August 2022 will be listed here.</p>
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

