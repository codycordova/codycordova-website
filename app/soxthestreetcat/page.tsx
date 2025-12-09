import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: '$Sox the Street Cat - CODY CORDOVA',
  description: 'Information about $Sox the Street Cat.',
}

const SOX_LINK = 'https://lu.meme/explore/memes/SOX-GAJDYJHBQ6NDPG2C4IEV5RMJN7L3UDDMKREKEJFJZSHOKTGZFMTA43J6'

export default function SoxTheStreetCat() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
          $Sox the Street Cat
        </h1>

        <div className="my-12">
          <GlassCard className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              <Link href={SOX_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <span className="text-[#9945ff]">$Sox the Street</span> <span className="text-[#14f195]">Cat on Stellar</span>
              </Link>
            </h2>
          </GlassCard>
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard hover>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/876f55da-b48c-47f9-b2bc-ca29c1fd6057_orig.jpg"
                    alt="Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
              <GlassCard hover>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/c4a09e3a-242b-43e5-814e-cd95b61accca_orig.jpg"
                    alt="Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
              <GlassCard hover>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/published/946aa63e-efa6-49ce-b317-d8e5acfe14d8.jpg"
                    alt="Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </ScrollReveal>

        <div className="my-12">
          <GlassCard className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              <span className="text-[#00f4ff]">I was born in Koreatown</span>
              <span className="text-[#ff9dd6]">, Los Angeles California ^~^</span>
            </h2>
          </GlassCard>
        </div>

        <div className="my-12">
          <GlassCard>
            <p className="text-center text-foreground text-lg md:text-xl">
              I was found outside of an apartment by my Dad Cody Cordova, who introduced me to my Mom{' '}
              <Link href="https://puraumi.com" target="_blank" rel="noopener noreferrer" className="text-[#6555c2] hover:underline">
                PURAUMI
              </Link>{' '}
              :DDDDD
            </p>
          </GlassCard>
        </div>

        <div className="my-12">
          <GlassCard className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              I have launched on{' '}
              <span className="text-[#5cbce0]">
                <Link href={SOX_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Lu.meme
                </Link>
              </span>{' '}
              via Stellar Blockchain
            </h2>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-4">
              Let&apos;s kick some ass ^~^
            </h2>
          </GlassCard>
        </div>

        <div className="my-12">
          <GlassCard className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              BUY SOME $SOX HERE:
            </h2>
            <Link
              href={SOX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-lg"
            >
              Buy $SOX on Lu.meme
            </Link>
          </GlassCard>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="my-12">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/soxcat_orig.png"
                  alt="$SOX the Street Cat @soxthestreetcat"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-foreground/80 text-sm mt-4">
                $Sox the Street Cat
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
