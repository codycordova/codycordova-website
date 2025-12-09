import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import { Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Cody Cordova - CODY CORDOVA',
  description: 'Who is Cody Cordova And what does he do?',
  openGraph: {
    title: 'About Cody Cordova',
    description: 'Who is Cody Cordova And what does he do?',
    images: [
      'http://www.codycordova.com/uploads/9/7/2/8/97282376/cody-headshot_orig.jpg',
    ],
    url: 'http://www.codycordova.com/about.html',
  },
}

export default function About() {
  return (
    <div className="wsite-content">
      <div className="container">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">About Cody Cordova</h1>

        {/* Team Section */}
        <div className="my-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cody Card */}
            <GlassCard hover>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-foreground">
                  Cody Cordova
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollReveal direction="up" delay={0.1}>
                  <Link
                    href="https://www.instagram.com/realcodycordova/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[500px] overflow-hidden rounded-lg group"
                  >
                    <Image
                      src="/images/cody-headshot_orig.jpg"
                      alt="Cody Cordova"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </ScrollReveal>
                <p className="text-center text-foreground/80 font-medium">Artist</p>
              </CardContent>
            </GlassCard>

            {/* Ezzy Card */}
            <GlassCard hover>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-foreground">
                  Ezzy Guerra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollReveal direction="up" delay={0.2}>
                  <Link
                    href="https://www.instagram.com/lilwodii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[500px] overflow-hidden rounded-lg group"
                  >
                    <Image
                      src="/images/published/esmeralda-guerra.jpg"
                      alt="Ezzy Cordova"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </ScrollReveal>
                <p className="text-center text-foreground/80 font-medium">Manager</p>
              </CardContent>
            </GlassCard>
          </div>
        </div>

        {/* About Me Section */}
        <div className="my-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground mb-8">
            About Me
          </h2>
          <GlassCard>
            <div className="space-y-6 text-foreground text-lg leading-relaxed text-center">
              <p>
                28 years young, Cody is a seasoned Music Producer and DJ with over 15 years of experience. From mastering violin in the Sacramento Youth Symphony to earning 10 gold medals in Wushu, Cody&apos;s journey blends passion, discipline, and creativity. He lives by non-violence and honesty, valuing positive energy in life and music.
              </p>
              <p>
                With a worldview enriched by global travels, Cody&apos;s music reflects cultural lessons and personal growth. He&apos;s not only performing at underground raves but also innovating with tech—his latest project, CODY coin on the Stellar Network, lets fans engage by buying tickets, merch, or earning currency in future games.
              </p>
              <p>
                Reach out to Cody on social media; he&apos;s all about connecting with those who support his vision.
              </p>
              <p className="pt-4 border-t border-white/10">
                <strong className="text-primary">Business Inquiries:</strong>{' '}
                <a
                  href="mailto:business@codycordova.com"
                  className="text-primary hover:underline"
                >
                  business@codycordova.com
                </a>
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Performance Image */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="my-12">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/a54a8115-edit_orig.jpg"
                  alt="Cody Cordova Music Artist Music Producer DJ Ur Baby Mama's Favorite DJ"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-foreground/80 text-sm">
                DJ&apos;ing at Fever Los Angeles
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Music Section */}
        <div className="my-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground mb-8">
            Music
          </h2>
          <GlassCard>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11924691&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
                allow="autoplay"
              />
            </div>
          </GlassCard>
        </div>

        {/* Logo Section */}
        <div className="my-12">
          <GlassCard>
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-20 w-64 md:h-24 md:w-80">
                <Image
                  src="/images/Cody 2020 black fill png.png"
                  alt="Cody Cordova Official Logo"
                  fill
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
  )
}
