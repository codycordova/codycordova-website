'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ScrollReveal from '@/components/ScrollReveal'

interface PhotoGalleryProps {
  images: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  // Filter out images that might not be available
  const availableImages = images.filter((img) => {
    // We'll let Next.js Image handle 404s, but we can add validation here if needed
    return img.src
  })

  return (
    <ScrollReveal direction="up" delay={0.2}>
      <div className="my-12">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {availableImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black/40 border-white/20 text-white hover:bg-black/60" />
          <CarouselNext className="bg-black/40 border-white/20 text-white hover:bg-black/60" />
        </Carousel>
      </div>
    </ScrollReveal>
  )
}
