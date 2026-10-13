# IT Legend Challenge

**IT Legend Challenge** is a course catalog web app for learning modern web development. It lets visitors browse a curated set of courses, open a detail page with an embedded video, curriculum, progress, and comments, and switch between light and dark themes. It solves the problem of a fragmented learning experience by bringing course discovery, content, and progress together in one clean, fast interface.

## Key Features

- Responsive course catalog with category, instructor, and progress info
- Course detail pages with an embedded YouTube video and an animated, collapsible curriculum
- Progress tracking with completed states
- Comments streamed from a public API
- Light / dark / system theme toggle
- Loading skeletons, plus empty, error, and not-found states

## Tech Stack

- Next.js 16 (App Router) with React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components built on Radix UI primitives
- next-themes and lucide-react

## Getting Started

Requires Node.js (a version supported by Next.js 16) and npm.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.
