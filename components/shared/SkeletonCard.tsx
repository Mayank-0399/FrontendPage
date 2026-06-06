'use client'

import { motion } from 'framer-motion'
import { pulseAnimation } from '@/lib/animations'

interface SkeletonCardProps {
  className?: string
}

export default function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <motion.div
      variants={pulseAnimation}
      initial="initial"
      animate="animate"
      className={`h-48 rounded-xl border border-dark-700 bg-dark-800 ${className}`}
    />
  )
}
