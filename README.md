# 🎓 Next-Gen Learning Dashboard

A premium, high-performance student dashboard with butter-smooth animations, dark mode design, and real-time data from Supabase. Built to feel like the future of education platforms.

## What's Inside

This is a **server-rendered Next.js app** that pulls live course data from Supabase and animates it onto the screen with hardware-accelerated Framer Motion. The whole thing is typed with TypeScript and styled with Tailwind CSS because we care about code quality.

``
app/              - Next.js 13+ App Router (Server Components ftw)
├── dashboard/    - The main dashboard route
├── layout.tsx    - Root layout with metadata
└── globals.css   - Global dark mode styles

components/       - React components (mix of Server & Client)
├── dashboard/    - Dashboard-specific components
├── navigation/   - Sidebar & mobile nav
└── shared/       - Reusable, animated bits

lib/
├── supabase/     - Server-side Supabase client + queries
└── animations/   - Reusable animation variants

types/            - TypeScript interfaces for Supabase data
public/           - Static assets (grain texture, etc.)
``

## Quick Start

### 1. Prerequisites
- Node.js 18+ (seriously)
- A free [Supabase](https://supabase.com) account

### 2. Install Dependencies

``ash
npm install
# installs: next, react, framer-motion, @supabase/ssr, tailwindcss, lucide-react
``

### 3. Set Up Supabase

Go to your Supabase project and create a courses table with this SQL:

``sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  progress integer default 0,
  icon_name text default 'BookOpen',
  created_at timestamp with time zone default now()
);

-- Add some test data
insert into courses (title, description, progress, icon_name) values
  ('Advanced React Patterns', 'Master composition, hooks, and state management', 75, 'BookOpen'),
  ('TypeScript Mastery', 'Go from types to generics like a pro', 45, 'Code'),
  ('Tailwind Design Systems', 'Build scalable, maintainable design systems', 60, 'Palette'),
  ('Web Performance', 'Optimize everything: bundles, images, runtime', 82, 'Zap');
``

### 4. Environment Variables

Copy .env.example and rename to .env.local. Fill in your Supabase credentials:

``ash
cp .env.example .env.local
``

Then add:
``
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_KEY=your_service_key_here
``

Get these from your Supabase project settings → API.

### 5. Run It

``ash
npm run dev
``

Open [http://localhost:3000](http://localhost:3000) and you should see the dashboard load with your courses animating in.

## What Makes This Special

🎬 **Animations That Don't Suck**
- Staggered Bento tiles fading in with upward momentum
- Spring physics on hover (because ease-in-out is boring)
- Zero layout shifts — we use \	ransform\ and \opacity\ only
- Pulsing skeleton loaders while data fetches

🔐 **Server-First Data Fetching**
- Uses Next.js Server Components to fetch from Supabase securely
- Environment variables never leak to the client
- Suspense boundaries show elegant loading states

🎨 **Dark Mode Only**
- Deep blacks, dark grays, and glowing gradients
- Subtle grain texture overlay
- Every detail is intentional

📱 **Responsive & Mobile-Ready**
- Desktop: Full Bento grid + visible sidebar
- Tablet: Sidebar collapses to icons, 2-column grid
- Mobile: Bottom nav, single scrolling column

## Project Structure Explained

### Server Components (RSC)
- \pp/dashboard/page.tsx\ - Main page, fetches data
- \lib/supabase/server.ts\ - Server-side Supabase client
- \lib/supabase/queries.ts\ - Database queries

### Client Components (Use 'use client')
- \components/dashboard/*\ - Animated tiles and layout
- \components/navigation/*\ - Interactive nav
- \components/shared/*\ - Reusable animated bits

### Types
``	ypescript
// types/course.ts
interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon_name: string;
  created_at: string;
}
``

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repo
4. Add environment variables in the dashboard
5. Deploy

That's it. Vercel handles Next.js optimization automatically.

## Key Technologies

| What | Why |
|------|-----|
| **Next.js** | Server Components + automatic optimization |
| **Supabase** | PostgreSQL + auth + realtime (if needed later) |
| **Tailwind CSS** | Utility-first, zero runtime overhead |
| **Framer Motion** | Hardware-accelerated animations |
| **Lucide React** | Beautiful SVG icons, tree-shakeable |
| **TypeScript** | Catch bugs before users do |

## Development Tips

- Hot reload works perfectly with \
pm run dev\
- Check Supabase dashboard for real-time data changes
- Use browser DevTools to inspect animations (Performance tab)
- If data doesn't load, check console for Supabase errors
- Tailwind intellisense works best in VS Code with the official extension

## Troubleshooting

**"Supabase connection refused"**
- Check your \.env.local\ file (typos happen)
- Make sure your project is running (check Supabase dashboard)

**"Icons not rendering"**
- Make sure \icon_name\ matches Lucide icons exactly (case-sensitive)
- Check the [Lucide docs](https://lucide.dev) for available icons

**"Animations are janky"**
- Check DevTools Performance tab for jank
- We use \	ransform\ and \opacity\ only, so it should be smooth
- If still janky, let's debug together

## Next Steps (For You)

- [ ] Customize colors in \globals.css\ and Tailwind config
- [ ] Add more courses to Supabase
- [ ] Build an auth system (Supabase Auth is built-in)
- [ ] Add real progress tracking
- [ ] Connect to your actual course backend

---

Built with ❤️ for the future of learning. Questions? Check the code comments or open an issue.
