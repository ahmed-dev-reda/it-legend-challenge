import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <Skeleton className="h-4 w-28 rounded-full" />

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <Skeleton className="aspect-video w-full rounded-2xl" />

            <Card className="mt-6 gap-0 rounded-2xl border-border py-0 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="mt-5 h-8 w-3/4 rounded-lg" />
                <Skeleton className="mt-4 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-2/3" />
                <div className="mt-8 border-t border-border pt-6">
                  <Skeleton className="h-10 w-40 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Skeleton className="hidden h-72 rounded-2xl lg:block" />
        </div>
      </div>
    </main>
  );
}
