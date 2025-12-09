import type { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GlassCard from '@/components/GlassCard'

export const metadata: Metadata = {
  title: 'N2D33P - CODY CORDOVA',
  description: 'N2D33P is a deep dive into Tech House by Cody Cordova.',
}

export default function N2D33P() {
  return (
    <div className="wsite-content">
      <div className="container max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
          N2D33P
        </h1>

        {/* Soundcloud */}
        <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#da8044]">Soundcloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full" style={{ paddingBottom: '20%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2153035968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    allow="autoplay"
                  />
                </div>
              </CardContent>
            </GlassCard>
          </div>

        {/* YouTube */}
        <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  You<span className="text-[#c23b3b]">Tube</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/wW2298qrXlY?si=m7kU_RnNRHq-YanK"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </GlassCard>
          </div>

        {/* BeatPort */}
        <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  <span className="text-[#4cc9a4]">BeatPort</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full max-w-[600px] mx-auto" style={{ paddingBottom: '60%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://embed.beatport.com/?id=5267663&type=release"
                    frameBorder="0"
                  />
                </div>
              </CardContent>
            </GlassCard>
          </div>

        {/* Spotify */}
        <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  <span className="text-[#508d24]">Spotify</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://open.spotify.com/embed/album/0Qzh41HYn3ccDfFFyB5bn7?utm_source=generator"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </GlassCard>
          </div>

        {/* Apple Music */}
        <div className="my-8">
            <GlassCard>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Apple Music</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full max-w-[660px] mx-auto" style={{ paddingBottom: '68%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    src="https://embed.music.apple.com/us/album/n2d33p-single/1833580285"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  />
                </div>
              </CardContent>
            </GlassCard>
          </div>

        {/* Cover Art */}
        <div className="my-8">
            <GlassCard>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/codycordova-n2d33pcoverart_orig.png"
                  alt="N2D33P Cover Art"
                  fill
                  className="object-contain"
                />
              </div>
            </GlassCard>
          </div>

        {/* Description */}
        <div className="my-8">
            <GlassCard>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
                N2D33P is a deep dive into Tech House.
              </h2>
              <p className="text-foreground text-lg leading-relaxed text-center">
                When I first created this song all i thought of was water.
              </p>
            </GlassCard>
          </div>

        {/* Image 1 */}
        <div className="my-8">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/img-4733_orig.jpeg"
                  alt="Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </div>

        {/* Text Section */}
        <div className="my-8">
            <GlassCard>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
                I thought about how water felt and sounded!
              </h2>
              <p className="text-foreground text-lg leading-relaxed text-center">
                I remembered my own personal experiences I have had either swimming or being at the beach! Or even just being at a close friend&apos;s pool.​it was amazing.​
              </p>
            </GlassCard>
          </div>

        {/* Image 2 */}
        <div className="my-8">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/img-1781_orig.jpeg"
                  alt="Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </div>

        {/* Text Section 2 */}
        <div className="my-8">
            <GlassCard>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
                I wanted to incorporate a sense of being in water.
              </h2>
            </GlassCard>
          </div>

        {/* Image 3 */}
        <div className="my-8">
            <GlassCard>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/img-4734_orig.jpg"
                  alt="Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </div>

        {/* Final Text */}
        <div className="my-8">
            <GlassCard>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 text-center">
                As a Music Producer I realized it was very easy to create music based on a theme.
              </h2>
              <div className="text-foreground text-lg leading-relaxed space-y-4 text-center">
                <p>
                  I didn&apos;t have to think or worry about what needed to &quot;come next&quot; or just happen I was literally thinking &quot;okay water all the way.&quot; I put in sloshing water audio bites, and used post processing effects to achieve a &quot;wet&quot; sound.​
                </p>
                <p>
                  We as humans all know the sound of a water drop. Or if we are deaf or blind can feel the water drop. Water is a very essential and basic necessity for life.​
                </p>
                <p>
                  I was able to fully groove without the constrictions of thinking about societies charlatans or critics.​
                </p>
                <p>
                  I was able to make music fully in to deep.
                </p>
                <p>
                  ​Whatever that means ^~^
                </p>
              </div>
            </GlassCard>
          </div>
      </div>
    </div>
  )
}
