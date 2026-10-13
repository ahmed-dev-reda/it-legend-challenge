import { Avatar as AvatarRoot, AvatarFallback } from "@/components/ui/avatar";
import { initials } from "@/lib/format";
import { cn } from "@/lib/utils";

type AvatarProps = {
  name: string;
  className?: string;
};

export default function Avatar({ name, className }: AvatarProps) {
  return (
    <AvatarRoot className={cn("size-9 text-xs", className)}>
      <AvatarFallback className="bg-primary/10 font-extrabold text-primary">
        {initials(name)}
      </AvatarFallback>
    </AvatarRoot>
  );
}
