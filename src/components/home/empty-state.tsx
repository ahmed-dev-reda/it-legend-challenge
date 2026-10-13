import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function EmptyState({
  icon: Icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <Card className="mt-8 items-center gap-0 rounded-2xl border-dashed bg-card px-6 py-20 text-center shadow-none">
      <div className="flex size-12 items-center justify-center rounded-full bg-secondary/5 text-muted-foreground">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
