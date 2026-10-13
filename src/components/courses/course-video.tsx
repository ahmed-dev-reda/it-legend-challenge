import { Card } from "@/components/ui/card";

type CourseVideoProps = {
  videoUrl: string;
  title: string;
};

export default function CourseVideo({ videoUrl, title }: CourseVideoProps) {
  return (
    <Card
      id="video"
      className="scroll-mt-24 gap-0 overflow-hidden rounded-2xl border-border py-0"
    >
      <div className="aspect-video w-full bg-secondary">
        <iframe
          src={videoUrl}
          title={title}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}
