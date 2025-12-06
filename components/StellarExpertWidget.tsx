'use client'

import { useEffect, useRef } from 'react'

interface StellarExpertWidgetProps {
  src: string
  style?: React.CSSProperties
}

export default function StellarExpertWidget({ src, style }: StellarExpertWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleMessage = (event: MessageEvent) => {
      if (iframe && event.source === iframe.contentWindow && event.data.widget === iframe.src) {
        iframe.style.height = event.data.height + 'px'
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={style}
      frameBorder="0"
      scrolling="no"
    />
  )
}

