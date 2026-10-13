import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Comments from "@/components/courses/comments";
import CommentsSkeleton from "@/components/courses/comments-skeleton";
import CourseInfo from "@/components/home/course-info";
import CourseProgress from "@/components/home/course-progress";
import CourseVideo from "@/components/courses/course-video";
import { CourseCurriculum } from "@/components/courses/course-curriculum";
import ErrorState from "@/components/error-state";

import {
  categories,
  courseCurriculum,
  courseProgress,
  instructors,
} from "@/types/data";
import { courses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (courses === null) {
    return (
      <ErrorState
        title="Something went wrong"
        description="We couldn't load this course. Please refresh the page to try again."
        action={{ href: "/#courses", label: "Back to courses" }}
      />
    );
  }

  const course = courses.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  const progress = courseProgress[course.id] ?? 0;
  const isCompleted = progress === 100;
  const instructor = instructors[course.id] ?? "Course Instructor";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          href="/#courses"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          All courses
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <CourseVideo videoUrl={course.video_url} title={course.title} />

            <CourseInfo
              title={course.title}
              description={course.description}
              category={categories[course.id] ?? "Development"}
              instructor={instructor}
              isCompleted={isCompleted}
            />

            <Suspense fallback={<CommentsSkeleton />}>
              <Comments />
            </Suspense>
          </div>

          <aside className="space-y-6">
            <CourseProgress
              progress={progress}
              isCompleted={isCompleted}
              courseTitle={course.title}
            />

            <CourseCurriculum sections={courseCurriculum} />
          </aside>
        </div>
      </div>
    </main>
  );
}
