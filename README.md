# 🎓 IT Legend — Learn Web Development

A courses platform for learning web development from the ground up to modern frameworks, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** components.

## ✨ Features

- **Course catalog** (`/`): a hero plus a grid of course cards with thumbnail, progress bar, and category badge.
- **Course detail page** (`/courses/[id]`):
  - Course video (YouTube iframe).
  - Course, instructor, and rating-badge info.
  - User progress bar.
  - **Curriculum accordion** (sections/lessons) with a **smooth open/close animation** (height + fade), with `motion-reduce` support.
  - **Comments** (from JSONPlaceholder) with a Suspense skeleton loading state.
- **Dark / light mode 🌙**: a theme toggle in the header (next-themes) that remembers your choice.
- **Error / empty states**: dedicated components for every state.
- **Fully responsive** design.

## 🤖 Tech Stack & Libraries

| Library | Purpose |
|---|---|
| **next** `16.4.0` | Framework — App Router, API Routes, rendering |
| **react** / **react-dom** `19.3.0` | Component foundation |
| **next-themes** `^0.4.6` | Dark / light theme |
| **tailwindcss** `^4` (+ **@tailwindcss/turbopack**) | Styling |
| **@radix-ui/react-slot** | `asChild` on the Button |
| **@radix-ui/react-avatar** | Avatar component |
| **@radix-ui/react-collapsible** | Curriculum accordion |
| **@radix-ui/react-progress** | Progress bar |
| **@radix-ui/react-separator** | Divider lines |
| **class-variance-authority** | Button variants |
| **lucide-react** | Icons |
| **clsx** + **tailwind-merge** | `cn()` helper for merging classes |
| **typescript** `^5` + **@types/\*** | Types |
| **eslint** `^9` + **eslint-config-next** | Linting |

> `tw-animate-css` was removed because it was unused (no `animate-*` utilities are used).

## 🎨 Design System (Color Palette)

A strict system of **only 3 colors** plus white, with no random colors (except semantic states):

| Role | Color |
|---|---|
| Background `--background` | `#F5F5F5` |
| Primary `--primary` | `#303841` |
| Secondary `--secondary` | `#2C2C2C` |
| Cards `--surface` | `#FFFFFF` |

- All colors are defined as **CSS variables** + **shadcn tokens** in `src/app/globals.css`, and mirrored into the Tailwind theme (`@theme inline`).
- **Dark mode**: `.dark` inverts the same family (surface `#26282d`, background `#1a1b1f`, light text `#f5f5f5`).
- Only semantic states (green for completed, red for errors) have allowed colors, plus a dark variant.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/courses/route.ts        # Internal courses API
│   ├── courses/[id]/               # Course detail (page, loading, not-found)
│   ├── courses/page.tsx            # Courses page
│   ├── layout.tsx                  # ThemeProvider + Header + fonts
│   ├── page.tsx                    # Home page (catalog)
│   └── globals.css                 # tokens + dark mode
├── components/
│   ├── ui/                         # shadcn components (button, card, avatar, …)
│   ├── home/                       # Home page components
│   ├── courses/                    # Detail page components
│   └── (avatar, header, theme-*, error-state)  # Shared
├── lib/                            # courses, comments, format, utils
└── types/data.ts                   # Data and types
```

> Rule: **one component per file**.

## 🚀 Getting Started

```bash
npm install      # Install dependencies
npm run dev      # Develop on http://localhost:3000
npm run build    # Production build
npm start        # Run the build on http://localhost:3000
npm run lint     # Lint the code
```

- The app runs on port **3000** (another project, cv-builder, runs on 3001).

## 🔌 Data

- Courses: static data in `src/types/data.ts` plus an internal API `GET /api/courses` (serving the same data).
- Pages fetch data from their own API via `NEXT_PUBLIC_API_URL` (default `http://localhost:3000`) with `export const dynamic = "force-dynamic"` to guarantee fresh data.
- Comments: `JSONPlaceholder` (the latest 3 comments).

## 📜 Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run the build |
| `npm run lint` | ESLint check |
