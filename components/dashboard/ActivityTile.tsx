'use client'

import { motion } from 'framer-motion'
import { glowOverlay, hoverScale, staggerItem } from '@/lib/animations'
import { Activity } from 'lucide-react'

export default function ActivityTile() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const activity = [4, 8, 6, 7, 9, 5, 8]

  return (
    <motion.article
      variants={staggerItem}
      whileHover="hover"
      className="md:col-span-2 lg:col-span-2"
    >
      <motion.div
        variants={hoverScale}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 p-6 shadow-2xl shadow-black/20"
      >
        <motion.div
          variants={glowOverlay}
          className="pointer-events-none absolute inset-0 rounded-2xl border border-accent-secondary/50 bg-gradient-to-br from-accent-secondary/10 via-transparent to-accent-tertiary/10"
        />
        <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">This week</h2>
          <Activity className="text-accent-secondary" size={24} />
        </div>

        <div className="flex h-32 items-end justify-between gap-2">
          {days.map((day, idx) => (
            <div key={day} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: activity[idx] / 10 }}
                style={{ transformOrigin: 'bottom' }}
                transition={{
                  delay: idx * 0.1,
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                }}
                className="h-28 w-full rounded-t-lg bg-gradient-to-t from-accent-primary to-accent-secondary"
              />
              <span className="text-xs text-dark-400">{day}</span>
            </div>
          ))}
        </div>
        </div>
      </motion.div>
    </motion.article>
  )
}
