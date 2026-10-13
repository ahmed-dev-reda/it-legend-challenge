"use client";

import Image from "next/image";
import { Play } from "lucide-react";

type CourseImageProps = {
  src: string;
  alt: string;
};

export default function CourseImage({ src, alt }: CourseImageProps) {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-surface/80 text-primary">
          <Play size={20} fill="currentColor" />
        </div>
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    </>
  );
}
