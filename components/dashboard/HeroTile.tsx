'use client'

import { motion } from 'framer-motion'
import { glowOverlay, hoverScale, staggerItem } from '@/lib/animations'

interface HeroTileProps {
  name: string
  streak?: number
}

export default function HeroTile({ name, streak = 0 }: HeroTileProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover="hover"
      className="md:col-span-2 lg:col-span-2"
    >
      <motion.div
        variants={hoverScale}
        className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 p-6 shadow-2xl shadow-black/30 md:p-8"
      >
        <motion.div
          variants={glowOverlay}
          className="pointer-events-none absolute inset-0 rounded-2xl border border-accent-primary/50 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(99,102,241,.34),transparent_32%),radial-gradient(circle_at_74%_12%,rgba(139,92,246,.22),transparent_28%),radial-gradient(circle_at_60%_90%,rgba(236,72,153,.16),transparent_35%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent-primary">
              Today&apos;s focus
            </p>
            <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              Welcome back, {name}
            </h1>
            <p className="max-w-xl text-base text-dark-300 sm:text-lg">
              Keep crushing those learning goals today
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur">
            <div className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-5xl font-bold text-transparent">
              {streak}
            </div>
            <p className="text-sm text-dark-300">day learning streak</p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}
