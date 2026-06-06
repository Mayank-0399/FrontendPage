'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  label?: string
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  const safeProgress = Math.max(0, Math.min(100, progress))

  return (
    <div className="w-full">
      {label && <label className="mb-2 block text-xs text-dark-400">{label}</label>}
      <div className="relative h-2 overflow-hidden rounded-full bg-dark-700">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: safeProgress / 100 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full w-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
        />
      </div>
      <div className="mt-2 text-right text-xs text-dark-400">
        {safeProgress}% complete
      </div>
    </div>
  )
}
