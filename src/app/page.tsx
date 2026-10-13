import CourseList from "@/components/home/course-list";
import ErrorState from "@/components/error-state";
import HomeHero from "@/components/home/home-hero";
import { courses } from "@/lib/courses";


export const dynamic = "force-dynamic";

export default async function HomePage() {


  if (courses === null) {
    return (
      <ErrorState
        title="Something went wrong"
        description="We couldn't load the courses. Please refresh the page to try again."
      />
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <CourseList courses={courses} />
    </main>
  );
}
