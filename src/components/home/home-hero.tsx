import { Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: BookOpen, value: "6", label: "Courses" },
  { icon: Users, value: "6", label: "Instructors" },
  { icon: Award, value: "100%", label: "Free access" },
];

export default function HomeHero() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Master web development, one course at a time.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Explore courses and continue your learning journey — from HTML
          fundamentals to modern frameworks, at your own pace.
        </p>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="gap-0 rounded-xl border-border bg-background py-4 shadow-none"
            >
              <CardContent className="px-4">
                <stat.icon className="size-5 text-primary" />
                <dd className="mt-3 text-xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </dt>
              </CardContent>
            </Card>
          ))}
        </dl>
      </div>
    </section>
  );
}
