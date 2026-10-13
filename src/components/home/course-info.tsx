import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Avatar from "@/components/avatar";

type CourseInfoProps = {
  title: string;
  description: string;
  category: string;
  instructor: string;
  isCompleted: boolean;
};

export default function CourseInfo({
  title,
  description,
  category,
  instructor,
  isCompleted,
}: CourseInfoProps) {
  return (
    <Card className="mt-6 gap-0 rounded-2xl border-border py-0 shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {category}
          </Badge>
          {isCompleted && (
            <Badge className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white dark:bg-emerald-600">
              <CheckCircle2 size={13} />
              Completed
            </Badge>
          )}
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>

        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {description}
        </p>

        <Separator className="mt-6" />

        <div className="mt-6 flex items-center gap-3">
          <Avatar name={instructor} className="size-10 text-sm" />
          <div>
            <p className="text-sm font-bold text-foreground">{instructor}</p>
            <p className="text-xs text-muted-foreground">Course instructor</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
