'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname()

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

  const mainNavItems = [
    { title: 'Home', href: '/' },
    { title: 'EPK', href: '/epk' },
    { title: 'Songs', href: '#', hasSubmenu: true },
    { title: 'Book Me', href: '/bookme' },
    { title: 'Articles/Mixes', href: '/articles-mixes' },
    { title: 'Music Videos', href: '/musicvideos' },
    { title: 'Shop', href: '/shop' },
  ]

  const hamburgerNavItems = [
    { title: 'CODY Token', href: '/token' },
    { title: 'Contact Me', href: '/contactme' },
    { title: 'About', href: '/about' },
    { title: 'Affiliates', href: '/affiliates' },
    { title: 'SOTU', href: '/sotu' },
    { title: 'Photo Gallery', href: '/photogallery' },
    { title: '$Sox the Street Cat', href: '/soxthestreetcat' },
  ]

  const allNavItems = [...mainNavItems, ...hamburgerNavItems]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {mainNavItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.hasSubmenu ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-black/40 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 text-foreground data-[state=open]:bg-white/10',
                        isActive(item.href) && 'text-primary'
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0 !absolute">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {songsSubmenu.map((song) => (
                          <li key={song.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={song.href}
                                className={cn(
                                  'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                  isActive(song.href) && 'bg-accent text-accent-foreground'
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {song.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-foreground focus:bg-white/10 focus:text-foreground focus:outline-none',
                        isActive(item.href) && 'text-primary'
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
            
            {/* More Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-foreground data-[state=open]:bg-white/10">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-0 !absolute">
                <ul className="flex flex-col w-[200px] gap-3 p-4">
                  {hamburgerNavItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            isActive(item.href) && 'bg-accent text-accent-foreground'
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10">
          <SheetHeader>
            <SheetTitle className="text-foreground">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8">
            <ul className="space-y-2">
              {allNavItems.map((item) => (
                <li key={item.href}>
                  {'hasSubmenu' in item && item.hasSubmenu ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground py-2">
                        {item.title}
                      </div>
                      <ul className="pl-4 space-y-1">
                        {songsSubmenu.map((song) => (
                          <li key={song.href}>
                            <Link
                              href={song.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                'block py-2 text-sm text-foreground/80 hover:text-foreground transition-colors',
                                isActive(song.href) && 'text-primary'
                              )}
                            >
                              {song.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors',
                        isActive(item.href) && 'text-primary'
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
