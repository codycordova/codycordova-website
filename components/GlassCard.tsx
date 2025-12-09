'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl',
        hover && 'hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(212,175,55,0.1)]',
        'transition-all duration-300',
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

