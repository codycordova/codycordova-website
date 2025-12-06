import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SOTU - CODY CORDOVA',
  description: 'State of the Underground - Blog and articles.',
}

export default function SOTU() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title" style={{ color: '#ae40a5', fontSize: '28px' }}>
          Sounds of the Underground
        </h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>
          SOTU: Sounds of the Underground Cody Cordova Tech House Artist Music Blog
        </h1>

        <div className="paragraph">
          <p>Blog posts and articles will be listed here.</p>
          <div style={{ marginTop: '20px' }}>
            <Link href="/sotu/category/all">All Posts</Link> | <Link href="/sotu/category/aotw">Artist of the Week</Link>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Link href="/sotu/archives/03-2023">March 2023</Link> | <Link href="/sotu/archives/08-2022">August 2022</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

