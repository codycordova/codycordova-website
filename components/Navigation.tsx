'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname()
  const [songsMenuOpen, setSongsMenuOpen] = useState(false)
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const hamburgerRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => pathname === path

  const songsSubmenu = [
    { title: 'N2D33P', href: '/songs/n2d33p' },
    { title: 'Pitch Slapped', href: '/songs/pitchslapped' },
    { title: 'Jordan Ward & Trey Ryan - WHITE CROCS (Cody Cordova Remix)', href: '/songs/whitecrocs' },
    { title: 'Birthday Compilation I', href: '/songs/bdaycomp1' },
    { title: 'Turn It Up', href: '/songs/turnitup' },
    { title: 'DONPAIRION - Pérignon (Cody Cordova Remix)', href: '/songs/perignonremix' },
    { title: 'New Day', href: '/songs/newday' },
    { title: 'C\'N\'C [Dance Mix]', href: '/songs/cnc' },
    { title: 'UNDRGRND', href: '/songs/undrgrnd' },
    { title: 'Britney Spears - I\'m a Slave 4 U (Cody Cordova Bootleg)', href: '/songs/britneyspears' },
    { title: 'Last Call', href: '/songs/lastcall' },
    { title: 'When The Weekend Hits', href: '/songs/whentheweekendhits' },
    { title: 'Kitty City', href: '/songs/kittycity' },
  ]

  // Main navigation items (Home through Shop)
  const mainNavItems = [
    { title: 'Home', href: '/' },
    { title: 'EPK', href: '/epk' },
    { title: 'Songs', href: '#', hasSubmenu: true },
    { title: 'Book Me', href: '/bookme' },
    { title: 'Articles/Mixes', href: '/articles-mixes' },
    { title: 'Music Videos', href: '/musicvideos' },
    { title: 'Shop', href: '/shop' },
  ]

  // Hamburger menu items (everything after Shop)
  const hamburgerNavItems = [
    { title: 'CODY Token', href: '/token' },
    { title: 'Contact Me', href: '/contactme' },
    { title: 'About', href: '/about' },
    { title: 'Affiliates', href: '/affiliates' },
    { title: 'SOTU', href: '/sotu' },
    { title: 'Photo Gallery', href: '/photogallery' },
    { title: '$Sox the Street Cat', href: '/soxthestreetcat' },
  ]

  // Close hamburger menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setHamburgerMenuOpen(false)
      }
    }

    if (hamburgerMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [hamburgerMenuOpen])

  return (
    <>
      <nav className="nav desktop-nav">
        <ul className="wsite-menu-default">
          {/* Main navigation items (Home through Shop) */}
          {mainNavItems.map((item) => (
            <li
              key={item.href}
              className={`wsite-menu-item-wrap ${isActive(item.href) ? 'active' : ''}`}
              onMouseEnter={() => item.hasSubmenu && setSongsMenuOpen(true)}
              onMouseLeave={() => item.hasSubmenu && setSongsMenuOpen(false)}
            >
              {item.hasSubmenu ? (
                <>
                  <span className="wsite-menu-item">{item.title}</span>
                  {songsMenuOpen && (
                    <div className="wsite-menu-wrap">
                      <ul className="wsite-menu">
                        {songsSubmenu.map((song) => (
                          <li key={song.href} className="wsite-menu-subitem-wrap">
                            <Link href={song.href} className="wsite-menu-subitem">
                              <span className="wsite-menu-title">{song.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="wsite-menu-item">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          
          {/* Hamburger menu button */}
          <li className="wsite-menu-item-wrap hamburger-menu-wrap" ref={hamburgerRef}>
            <button
              className="wsite-menu-item hamburger-menu-button"
              onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
              aria-label="More menu"
              aria-expanded={hamburgerMenuOpen}
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            {hamburgerMenuOpen && (
              <div className="wsite-menu-wrap hamburger-menu-dropdown">
                <ul className="wsite-menu">
                  {hamburgerNavItems.map((item) => (
                    <li key={item.href} className="wsite-menu-subitem-wrap">
                      <Link 
                        href={item.href} 
                        className="wsite-menu-subitem"
                        onClick={() => setHamburgerMenuOpen(false)}
                      >
                        <span className="wsite-menu-title">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileMenuOpen && (
        <nav className="nav mobile-nav">
          <ul className="wsite-menu-default">
            {/* Main navigation items */}
            {mainNavItems.map((item) => (
              <li key={item.href}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setSongsMenuOpen(!songsMenuOpen)}
                      className="wsite-menu-item"
                    >
                      {item.title}
                    </button>
                    {songsMenuOpen && (
                      <ul className="wsite-menu">
                        {songsSubmenu.map((song) => (
                          <li key={song.href}>
                            <Link href={song.href} className="wsite-menu-subitem">
                              {song.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="wsite-menu-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            {/* Hamburger menu items */}
            {hamburgerNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="wsite-menu-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

