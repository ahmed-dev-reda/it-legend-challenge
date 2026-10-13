import type { Course } from "@/types/data";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export async function getCourses(): Promise<Course[] | null> {
  try {
    const request = await fetch(`${API_URL}/api/courses`);
    if (!request.ok) {
      return null;
    }
    return request.json();
  } catch {
    return null;
  }
}
