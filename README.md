# Next-Gen Learning Dashboard

Live demo: [frontend-page-4aqpdurwh-mayank-0399s-projects.vercel.app](https://frontend-page-4aqpdurwh-mayank-0399s-projects.vercel.app)

This is a dark, animated student dashboard built for the Frontend Intern Challenge. The goal was to make the dashboard feel polished without turning it into a noisy landing page: live course data, smooth motion, a responsive Bento layout, and a UI that stays stable while it animates.

## What I Built

The app is a Next.js App Router project with a single dashboard experience at `/dashboard`. Course cards are fetched from Supabase on the server, then rendered into animated Bento tiles on the page.

The design uses a dark-only visual system with deep background tones, soft gradients, subtle grain/mesh overlays, and spring-based interactions. I focused on keeping the movement transform-based so hover states and entrance animations do not cause layout shifts.

## Tech Stack

- Next.js with App Router
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React

## Live Data

Course data comes from a Supabase `courses` table. The app expects this schema:

```sql
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);
```

Example seed data:

```sql
insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'Code'),
  ('Design Systems Mastery', 62, 'Palette'),
  ('Database Foundations', 88, 'Database'),
  ('AI Product Engineering', 46, 'Brain');
```

If Row Level Security is enabled, allow public read access for the demo:

```sql
create policy "Allow public read access to courses"
on public.courses
for select
to anon
using (true);
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The same two variables are required in Vercel under **Project Settings > Environment Variables**.

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000/dashboard
```

For a production check:

```bash
npm run build
npm run start
```

## Architecture Notes

The dashboard keeps the data layer server-first. `app/dashboard/page.tsx` owns the route and Suspense boundary, while `components/dashboard/DashboardContent.tsx` fetches courses through the Supabase query helper. The animated tiles themselves are client components because Framer Motion needs to run in the browser.

The component split is intentionally simple:

- `components/dashboard` contains the Bento grid, hero tile, activity tile, and dynamic course cards.
- `components/navigation` contains the responsive sidebar and mobile bottom navigation.
- `components/shared` contains reusable pieces like the animated progress bar and skeleton cards.
- `lib/supabase` contains the server Supabase client and query function.
- `lib/animations.ts` keeps the shared Framer Motion variants in one place.

## Animation Details

The Bento tiles stagger in after the server data is ready. Each card fades in and moves slightly upward using opacity and transform.

Hover states use Framer Motion spring physics with a small scale increase and a soft glow overlay. The progress bar animates from zero to the course progress value using `scaleX`, which avoids layout shifts.

The sidebar uses a shared Framer Motion `layoutId` for the active background highlight, so the highlight snaps between navigation items when clicked.

## Responsive Behavior

- Desktop: full Bento grid with expanded sidebar.
- Tablet: icon-only sidebar with a two-column dashboard grid.
- Mobile: bottom navigation with a single-column scrolling dashboard.

## Deployment

The app is deployed on Vercel:

[https://frontend-page-4aqpdurwh-mayank-0399s-projects.vercel.app](https://frontend-page-4aqpdurwh-mayank-0399s-projects.vercel.app)

Vercel uses the default Next.js settings:

```text
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

## Small Challenges

The main challenge was keeping the page animated without causing layout movement. I handled that by using transform and opacity for motion, keeping card dimensions stable, and moving hover glow into Framer Motion overlays instead of changing layout-affecting styles.

Another important part was separating server and client work cleanly: Supabase data is fetched server-side, while the animation-heavy UI stays in client components.
