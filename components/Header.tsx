'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="birdseye-header">
      <div className="nav-wrap">
        <div className="container header-container">
          <Link href="/" className="header-brand">
            CODY CORDOVA
          </Link>
          <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>
    </header>
  )
}

