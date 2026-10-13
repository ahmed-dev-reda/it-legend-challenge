import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  isCompleted?: boolean;
  label?: string;
  className?: string;
};

export default function ProgressBar({
  value,
  isCompleted = false,
  label,
  className,
}: ProgressBarProps) {
  return (
    <Progress
      value={value}
      aria-label={label}
      className={cn("h-1.5 bg-secondary/10", className)}
      indicatorClassName={isCompleted ? "bg-emerald-600" : "bg-primary"}
    />
  );
}
