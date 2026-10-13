import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Avatar from "@/components/avatar";
import { getComments } from "@/lib/comments";

export default async function Comments() {
  const comments = await getComments();

  if (comments.length === 0) {
    return (
      <Card className="mt-6 gap-0 rounded-2xl border-border py-0 shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Comments
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            No comments available right now.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6 gap-0 rounded-2xl border-border py-0 shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Comments
          </h2>
          <span className="text-xs font-semibold text-muted-foreground">
            {comments.length} comments
          </span>
        </div>

        <ul className="mt-5">
          {comments.map((comment, index) => (
            <li key={comment.id}>
              {index > 0 && <Separator className="my-5" />}

              <div className="flex gap-3">
                <Avatar name={comment.name} className="size-9 text-xs" />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <p className="text-sm font-bold text-foreground">
                      {comment.name}
                    </p>
                    <p className="min-w-0 truncate text-xs text-muted-foreground">
                      {comment.email}
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {comment.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
