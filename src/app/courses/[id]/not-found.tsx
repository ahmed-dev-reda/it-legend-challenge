import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Course not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          The course you&apos;re looking for doesn&apos;t exist or may have been
          removed.
        </p>
        <Button asChild className="mt-8 rounded-xl px-5 py-3 font-bold">
          <Link href="/#courses">Browse courses</Link>
        </Button>
      </div>
    </main>
  );
}
