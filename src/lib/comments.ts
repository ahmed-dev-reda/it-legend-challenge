export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function getComments(limit = 3): Promise<Comment[]> {
  try {
    const request = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );
    if (!request.ok) {
      return [];
    }
    const comments: Comment[] = await request.json();
    return comments.slice(0, limit);
  } catch {
    return [];
  }
}
