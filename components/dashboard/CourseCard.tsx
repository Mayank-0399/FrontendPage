'use client'

import { motion } from 'framer-motion'
import { glowOverlay, staggerItem, hoverScale } from '@/lib/animations'
import { getCourseIcon } from '@/lib/utils'
import type { Course } from '@/types/course'
import ProgressBar from '@/components/shared/ProgressBar'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = getCourseIcon(course.icon_name)

  return (
    <motion.article
      variants={staggerItem}
      whileHover="hover"
      className="group min-h-56 cursor-pointer"
    >
      <motion.div
        variants={hoverScale}
        className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 p-6 shadow-2xl shadow-black/20"
      >
        <motion.div
          variants={glowOverlay}
          className="pointer-events-none absolute inset-0 rounded-xl border border-accent-primary/50 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-tertiary/10"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.20),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_28%)] opacity-70" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="max-w-xs text-lg font-semibold text-white">
              {course.title}
            </h3>
            <div className="shrink-0 rounded-lg bg-dark-700/80 p-2 transition-colors group-hover:bg-accent-primary/20">
              <Icon size={24} className="text-accent-primary" />
            </div>
          </div>

          <p className="mb-6 text-sm text-dark-300">Active course module</p>

          <ProgressBar progress={course.progress} />
        </div>
      </motion.div>
    </motion.article>
  )
}
