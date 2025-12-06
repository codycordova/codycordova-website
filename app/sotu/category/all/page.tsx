import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Posts - SOTU - CODY CORDOVA',
  description: 'All SOTU blog posts.',
}

export default function AllPosts() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title">All Posts</h2>
        <div className="paragraph">
          <p>All blog posts will be listed here.</p>
          <Link href="/sotu">Back to SOTU</Link>
        </div>
      </div>
    </div>
  )
}

