"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          aria-label="IT Legend — home"
          className="flex items-center gap-2.5 rounded-xl"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-transparent">
            <GraduationCap className="size-5 " />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-foreground">
            IT Legend
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <nav aria-label="Primary">
            <Button
              asChild
              variant={isHome ? "default" : "ghost"}
              className="rounded-full px-4"
            >
              <Link href="/#courses" aria-current={isHome ? "page" : undefined}>
                Courses
              </Link>
            </Button>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
