import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="wsite-footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} CODY CORDOVA. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/contactme">Contact</Link>
            <Link href="/affiliates">Affiliates</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

