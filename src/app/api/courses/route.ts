import { NextResponse } from "next/server";

const courses = [
  {
    id: "course-1",
    title: "HTML & CSS Fundamentals",
    video_thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/UB1O30fR-EE",
    description: "Learn HTML and CSS to build responsive web pages.",
  },
  {
    id: "course-2",
    title: "JavaScript for Beginners",
    video_thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/W6NZfCO5SIk",
    description: "Learn JavaScript fundamentals, functions, and objects.",
  },
  {
    id: "course-3",
    title: "React.js Fundamentals",
    video_thumbnail: "https://img.youtube.com/vi/SqcY0GlETPk/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/SqcY0GlETPk",
    description: "Build interactive user interfaces with React.",
  },
  {
    id: "course-4",
    title: "Next.js App Router",
    video_thumbnail: "https://img.youtube.com/vi/843nec-IvW0/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/843nec-IvW0",
    description: "Learn routing, layouts, and data fetching in Next.js.",
  },
  {
    id: "course-5",
    title: "TypeScript Essentials",
    video_thumbnail: "https://img.youtube.com/vi/d56mG7DezGs/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/d56mG7DezGs",
    description:
      "Learn TypeScript types, functions, objects, and advanced types.",
  },
  {
    id: "course-6",
    title: "Tailwind CSS",
    video_thumbnail: "https://img.youtube.com/vi/ft30zcMlFao/hqdefault.jpg",
    video_url: "https://www.youtube.com/embed/ft30zcMlFao",
    description: "Create responsive interfaces using utility-first CSS.",
  },
];

export async function GET() {
  return NextResponse.json(courses);
}
