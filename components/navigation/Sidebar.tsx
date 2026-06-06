'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  BookOpen,
  Gauge,
  GraduationCap,
  Settings,
} from 'lucide-react'
import { useState } from 'react'
import NavItem from './NavItem'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { id: 'courses', label: 'Courses', href: '#courses', icon: BookOpen },
  { id: 'progress', label: 'Progress', href: '#progress', icon: BarChart3 },
  { id: 'settings', label: 'Settings', href: '#settings', icon: Settings },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <>
      <motion.aside
        initial={false}
        className="hidden h-screen w-20 shrink-0 border-r border-white/10 bg-gradient-to-b from-dark-900 to-dark-950 p-4 md:block lg:w-72 lg:p-6"
      >
        <header className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-accent-primary/15 p-2 text-accent-primary">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold text-white">EduFlow</h1>
            <p className="text-sm text-dark-400">Learn, grow, achieve</p>
          </div>
        </header>

        <nav className="space-y-2" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
              highlightId="desktop-active-nav-highlight"
              compact
            />
          ))}
        </nav>

        <aside className="absolute bottom-6 left-6 right-6 hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary p-4 lg:block">
          <p className="mb-2 text-sm font-semibold text-white">
            Keep the streak going
          </p>
          <p className="text-xs text-dark-100">
            12 days of consistent learning. Your next session is queued.
          </p>
        </aside>
      </motion.aside>

      <nav
        className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-white/10 bg-dark-900/90 p-2 shadow-2xl shadow-black/40 backdrop-blur md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-4 gap-1">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
              highlightId="mobile-active-nav-highlight"
              compact
            />
          ))}
        </div>
      </nav>
    </>
  )
}
