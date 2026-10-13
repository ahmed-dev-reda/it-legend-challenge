import { BookOpen } from "lucide-react";
import CourseCard from "@/components/home/course-card";
import EmptyState from "@/components/home/empty-state";
import { Course, courseProgress } from "@/types/data";

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({ courses }: CourseListProps) {
  return (
    <section id="courses" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              All courses
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {courses.length} courses available
            </p>
          </div>
        </div>

        {courses.length === 0 ? (
          <EmptyState
            icon={BookOpen}
            title="No courses yet"
            description="New courses are on the way. Check back soon to start learning."
          />
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const progress = courseProgress[course.id] ?? 0;

              return (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={progress}
                  isCompleted={progress === 100}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
