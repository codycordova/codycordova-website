import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'March 2023 Archive - SOTU - CODY CORDOVA',
  description: 'SOTU blog posts from March 2023.',
}

export default function March2023Archive() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">March 2023 Archive</h2>
        <div className="paragraph">
          <p>Posts from March 2023 will be listed here.</p>
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

