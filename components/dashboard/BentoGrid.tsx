'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import type { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6"
    >
      {children}
    </motion.section>
  )
}
