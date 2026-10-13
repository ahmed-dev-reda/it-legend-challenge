export type Course = {
  id: string;
  title: string;
  video_thumbnail: string;
  video_url: string;
  description: string;
};

export const courseProgress: Record<string, number> = {
  "course-1": 75,
  "course-2": 40,
  "course-3": 25,
  "course-4": 0,
  "course-5": 60,
  "course-6": 100,
};

export const categories: Record<string, string> = {
  "course-1": "HTML & CSS",
  "course-2": "JavaScript",
  "course-3": "React",
  "course-4": "Next.js",
  "course-5": "TypeScript",
  "course-6": "Styling",
};

export const instructors: Record<string, string> = {
  "course-1": "Sarah Johnson",
  "course-2": "Ahmed Hassan",
  "course-3": "Mohamed Ali",
  "course-4": "Omar Khaled",
  "course-5": "John Smith",
  "course-6": "David Wilson",
};

export type CurriculumSection = {
  title: string;
  lessons: string[];
};

export const courseCurriculum: CurriculumSection[] = [
  {
    title: "Getting started",
    lessons: [
      "Course overview",
      "Setting up your environment",
      "Core concepts",
      "Your first project",
    ],
  },
  {
    title: "Core skills",
    lessons: [
      "Working with components",
      "Handling data",
      "Styling and layout",
      "Debugging essentials",
    ],
  },
  {
    title: "Advanced topics",
    lessons: [
      "Performance",
      "Best practices",
      "Real-world patterns",
      "Final project",
    ],
  },
];
