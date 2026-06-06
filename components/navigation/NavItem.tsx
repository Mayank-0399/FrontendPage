'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface NavItemProps {
  id?: string
  label: string
  href: string
  icon: LucideIcon
  active?: boolean
  compact?: boolean
  highlightId?: string
  onClick?: () => void
}

export default function NavItem({
  label,
  href,
  icon: Icon,
  active = false,
  compact = false,
  highlightId = 'active-nav-highlight',
  onClick,
}: NavItemProps) {
  return (
    <motion.a
      href={href}
      onClick={(event) => {
        if (href.startsWith('#')) {
          event.preventDefault()
          window.history.replaceState(null, '', href)
        }
        onClick?.()
      }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center gap-3 rounded-lg px-4 py-3 text-dark-300 transition-colors hover:text-white"
      aria-current={active ? 'page' : undefined}
    >
      {active && (
        <motion.span
          layoutId={highlightId}
          className="absolute inset-0 rounded-lg border border-accent-primary/30 bg-accent-primary/15"
          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        />
      )}
      <Icon className="relative z-10 h-5 w-5 shrink-0" aria-hidden="true" />
      <span
        className={`relative z-10 font-medium ${
          compact ? 'hidden lg:inline' : ''
        }`}
      >
        {label}
      </span>
    </motion.a>
  )
}
