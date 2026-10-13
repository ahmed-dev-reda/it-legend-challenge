import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProgressBar from "@/components/courses/progress-bar";
import { cn } from "@/lib/utils";

type CourseProgressProps = {
  progress: number;
  isCompleted: boolean;
  courseTitle: string;
};

export default function CourseProgress({
  progress,
  isCompleted,
  courseTitle,
}: CourseProgressProps) {
  return (
    <Card className="gap-0 rounded-2xl border-border py-0 shadow-sm">
      <CardContent className="p-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Your progress
        </h2>

        <div className="mt-4 flex items-end justify-between">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {progress}%
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            complete
          </span>
        </div>

        <ProgressBar
          value={progress}
          isCompleted={isCompleted}
          label={`${courseTitle} progress`}
          className="mt-3 h-2"
        />

        <Button
          asChild
          className={cn(
            "mt-6 w-full rounded-xl py-3 font-bold",
            isCompleted &&
              "border border-emerald-600/30 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-950/60",
          )}
        >
          <a href="#video">
            <Play size={16} fill="currentColor" />
            {isCompleted
              ? "Review course"
              : progress > 0
                ? "Continue learning"
                : "Start course"}
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="mt-3 w-full rounded-xl py-3 font-bold text-foreground"
        >
          <Link href="/#courses">
            <ArrowLeft size={16} />
            Browse courses
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
