import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Avatar from "@/components/avatar";
import CourseImage from "@/components/home/course-image";
import ProgressBar from "@/components/courses/progress-bar";
import { Course, categories, instructors } from "@/types/data";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  isCompleted: boolean;
  progress: number;
};

export default function CourseCard({
  course,
  isCompleted,
  progress,
}: CourseCardProps) {
  const ctaLabel = isCompleted
    ? "Review course"
    : progress > 0
      ? "Continue learning"
      : "Start course";

  return (
    <Card
      className={cn(
        "group min-w-0 gap-0 overflow-hidden rounded-2xl border-border py-0",
        "transition duration-300 hover:-translate-y-1",
      )}
    >
      <Link
        href={`/courses/${course.id}`}
        className="relative block aspect-[16/9] overflow-hidden bg-secondary/5"
      >
        <CourseImage src={course.video_thumbnail} alt={course.title} />

        <Badge className="absolute left-4 top-4 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-sm">
          {categories[course.id] ?? "Development"}
        </Badge>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="flex size-12 items-center justify-center rounded-full bg-card text-primary shadow-xl">
            <Play size={21} fill="currentColor" />
          </div>
        </div>

        {isCompleted && (
          <Badge className="absolute right-4 top-4 gap-1 rounded-lg bg-emerald-700 px-2.5 py-1.5 text-xs font-bold text-white shadow-sm dark:bg-emerald-600">
            <CheckCircle2 size={14} />
            Completed
          </Badge>
        )}
      </Link>

      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {course.id.replace(/-/g, " ")}
          </span>

          <span className="text-xs font-semibold text-muted-foreground">
            {progress}% complete
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-4 flex items-center gap-2.5">
          <Avatar
            name={instructors[course.id] ?? "Course Instructor"}
            className="size-8 text-xs"
          />

          <span className="truncate text-xs font-semibold text-muted-foreground">
            {instructors[course.id] ?? "Course Instructor"}
          </span>
        </div>

        <ProgressBar
          value={progress}
          isCompleted={isCompleted}
          label={`${course.title} progress`}
          className="mt-5"
        />

        <Button
          asChild
          className={cn(
            "mt-5 w-full rounded-xl py-3 font-bold",
            isCompleted &&
              "border border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-950/60",
          )}
        >
          <Link href={`/courses/${course.id}`}>
            {ctaLabel}

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
