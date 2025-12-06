export interface NavItem {
  title: string
  href: string
  hasSubmenu?: boolean
  submenu?: NavItem[]
}

export const navigationItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'EPK', href: '/epk' },
  {
    title: 'Songs',
    href: '#',
    hasSubmenu: true,
    submenu: [
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
    ],
  },
  { title: 'Book Me', href: '/bookme' },
  { title: 'Articles/Mixes', href: '/articles-mixes' },
  { title: 'Music Videos', href: '/musicvideos' },
  { title: 'Shop', href: '/shop' },
  { title: 'CODY Token', href: '/token' },
  { title: 'Contact Me', href: '/contactme' },
  { title: 'About', href: '/about' },
  { title: 'Affiliates', href: '/affiliates' },
  { title: 'SOTU', href: '/sotu' },
  { title: 'Photo Gallery', href: '/photogallery' },
  { title: '$Sox the Street Cat', href: '/soxthestreetcat' },
]

