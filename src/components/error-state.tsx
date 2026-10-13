import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ErrorStateProps = {
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
};

export default function ErrorState({
  title,
  description,
  action,
}: ErrorStateProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <Card className="w-full max-w-md items-center gap-0 rounded-2xl p-8 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400">
          <AlertCircle className="size-6" />
        </div>
        <h1 className="mt-4 text-lg font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        {action ? (
          <Button asChild className="mt-6 rounded-xl py-3 font-bold">
            <Link href={action.href}>
              <ArrowLeft size={16} />
              {action.label}
            </Link>
          </Button>
        ) : null}
      </Card>
    </main>
  );
}
