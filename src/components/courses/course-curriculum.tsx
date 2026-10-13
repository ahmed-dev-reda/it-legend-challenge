"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { CurriculumSection } from "@/types/data";

export function CourseCurriculum({
  sections,
}: {
  sections: CurriculumSection[];
}) {
  const [openSections, setOpenSections] = useState<string[]>(() =>
    sections.map((section) => section.title),
  );

  const allOpen = openSections.length === sections.length;
  const totalLessons = sections.reduce(
    (total, section) => total + section.lessons.length,
    0,
  );

  function setSectionOpen(title: string, open: boolean) {
    setOpenSections((current) => {
      const isOpen = current.includes(title);

      if (open && !isOpen) {
        return [...current, title];
      }

      if (!open && isOpen) {
        return current.filter((item) => item !== title);
      }

      return current;
    });
  }

  function toggleAll() {
    setOpenSections(allOpen ? [] : sections.map((section) => section.title));
  }

  return (
    <Card className="gap-0 rounded-2xl border-border py-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Course content
            </h2>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {sections.length} sections · {totalLessons} lessons
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={toggleAll}
            className="shrink-0 rounded-lg font-bold"
          >
            {allOpen ? "Hide all" : "Show all"}
          </Button>
        </div>

        <div className="mt-5 space-y-5">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.title);

            return (
              <Collapsible
                key={section.title}
                asChild
                open={isOpen}
                onOpenChange={(open) => setSectionOpen(section.title, open)}
              >
                <section>
                  <h3>
                    <CollapsibleTrigger
                      type="button"
                      className="flex w-full items-center justify-between gap-3 rounded-lg text-left transition-colors hover:text-primary"
                    >
                      <span className="text-sm font-bold text-foreground">
                        {section.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground">
                          {section.lessons.length} lessons
                        </span>
                        <ChevronDown
                          size={16}
                          aria-hidden
                          className={cn(
                            "text-muted-foreground transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      </span>
                    </CollapsibleTrigger>
                  </h3>

                  <CollapsibleContent
                    forceMount
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1.5 pt-3">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lesson}
                            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
                          >
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                              {lessonIndex + 1}
                            </span>
                            <span className="truncate text-sm text-muted-foreground">
                              {lesson}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </section>
              </Collapsible>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
