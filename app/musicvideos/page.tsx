import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music Videos - CODY CORDOVA',
  description: 'Music videos from Cody Cordova.',
}

export default function MusicVideos() {
  return (
    <div className="wsite-content">
      <div className="container">
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ marginBottom: '10px', marginTop: '10px', textAlign: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/JQkxuA0PHV0?wmode=opaque"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div style={{ marginBottom: '10px', marginTop: '10px', textAlign: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/-3jbHxdXtBc?wmode=opaque"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

