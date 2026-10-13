import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CommentsSkeleton() {
  return (
    <Card className="mt-6 gap-0 rounded-2xl border-border py-0 shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <Skeleton className="h-3 w-24 rounded-full" />

        <div className="mt-6 space-y-5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-3">
              <Skeleton className="size-9 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3.5 w-32" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
