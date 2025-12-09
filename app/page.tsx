import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ParallaxSection from '@/components/ParallaxSection'
import GlassCard from '@/components/GlassCard'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CODY CORDOVA - Cody Cordova Tech House',
  description: 'The home page of Cody Cordova\'s website.',
  openGraph: {
    title: 'Cody Cordova Tech House',
    description: 'The home page of Cody Cordova\'s website.',
    images: [
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/e92ccff6-f14a-4f76-a0c3-c208b89ef2ba_orig.jpg',
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/68e5300d-8985-4f36-b8e7-1ef0eb94904b_orig.jpg',
    ],
    url: 'http://www.codycordova.com/',
  },
}

export default function Home() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/CODYCORDOVAmusic',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: 'http://twitter.com/realcodycordova',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'http://instagram.com/realcodycordova',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cody-cordova-499642b6/',
      icon: Linkedin,
    },
  ]

  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection speed={0.3} className="mt-0">
        <div className="hero-section relative">
          <Image
            src="/images/cody-header.jpg"
            alt="Cody Cordova"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground text-center px-4 drop-shadow-2xl">
              UR BABY MAMA&apos;S FAVORITE DJ
            </h1>
          </div>
        </div>
      </ParallaxSection>

      <div className="wsite-content">
        <div className="container">
          {/* Tagline Section */}
          <div className="my-12 pt-16 md:pt-20">
            <GlassCard className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif italic text-foreground">
                Sacramento raised me, Los Angeles made me.
              </h2>
            </GlassCard>
          </div>

          {/* Bio Section */}
          <div className="my-12">
            <GlassCard>
              <div className="space-y-4 text-foreground text-center">
                <p className="text-lg leading-relaxed">
                  From martial arts champion to concert violinist turned Music Artist sensation, Cody Cordova lives for electrifying performances. A violinist from age 6, Cody&apos;s musical evolution led him to the vibrant energy of EDM, with a special love for Dubstep. It was the underground Tech House scene of Los Angeles, however that showed him the power of rhythm on the dance floor. A master at crafting grooves that keep the dance floor alive, Cody channels the pure ecstasy of music into every set. As a Music Producer/DJ, he brings a unique cultural flair to music that truly embodies the pulse of LA&apos;s nightlife.
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  Experience the connection—lose yourself in Cody Cordova&apos;s beat.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Image Gallery */}
          <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 max-w-4xl mx-auto">
              {/* Left: Large Image - spans 2 rows */}
              <GlassCard hover className="md:row-span-2">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/e92ccff6-f14a-4f76-a0c3-c208b89ef2ba_orig.jpg"
                    alt="Cody Cordova Head Shot 1 Tech House"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </GlassCard>
              {/* Right: Top Image */}
              <GlassCard hover>
                <div className="relative w-full aspect-square max-w-[250px] mx-auto md:max-w-none overflow-hidden rounded-lg">
                  <Image
                    src="/images/68e5300d-8985-4f36-b8e7-1ef0eb94904b_orig.jpg"
                    alt="Cody Cordova Head Shot 2 Tech House"
                    fill
                    sizes="(max-width: 768px) 250px, 50vw"
                    className="object-cover"
                  />
                </div>
              </GlassCard>
              {/* Right: Bottom Image */}
              <GlassCard hover>
                <div className="relative w-full aspect-square max-w-[250px] mx-auto md:max-w-none overflow-hidden rounded-lg">
                  <Image
                    src="/images/a4edd375-22fb-49fd-8ef3-1f5faeeb3c25_orig.jpg"
                    alt="Cody Cordova"
                    fill
                    sizes="(max-width: 768px) 250px, 50vw"
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Performance Image */}
          <div className="my-12">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/edmmaniac_cody.jpg"
                  alt="Cody Cordova Insomniac TV EDM Maniac Tech House DJ Music Producer Artist"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-foreground/80 text-sm">
                Cody Cordova performing for Insomniac TV sponsored by EDM Maniac. #techhouse
              </p>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <div className="my-12">
            <GlassCard className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                Check the{' '}
                <Link href="/about" className="text-primary hover:underline">
                  About
                </Link>{' '}
                page to learn more about who I am and what I do!
              </h2>
              <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-black">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </GlassCard>
          </div>

          {/* Social Links */}
          <div className="my-12">
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardContent className="pt-6">
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Picture */}
          <div className="my-12">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/cc_perf_pic.JPG"
                  alt="Cody Cordova Tech House Artist Los Angeles"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </div>

          {/* Logo Section */}
          <div className="my-12">
            <GlassCard>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                <div className="relative h-16 w-48">
                  <Image
                    src="/images/Cody 2020 black fill png.png"
                    alt="Cody Cordova logo"
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
                <p className="text-foreground/80 text-sm text-center">
                  The official logo of CODYCORDOVA.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  )
}
