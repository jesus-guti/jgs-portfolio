import Image from "next/image";
import type { JSX } from "react";

type CaseStudyFigureProperties = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  readonly maxWidthClassName?: string;
  readonly priority?: boolean;
};

export function CaseStudyFigure({
  src,
  alt,
  caption,
  width,
  height,
  maxWidthClassName,
  priority,
}: CaseStudyFigureProperties): JSX.Element {
  return (
    <figure className="mb-8">
      <div
        className={
          maxWidthClassName
            ? `mx-auto w-full overflow-hidden rounded border border-border-general ${maxWidthClassName}`
            : "overflow-hidden rounded border border-border-general"
        }
      >
        <Image
          alt={alt}
          className="h-auto w-full"
          height={height}
          priority={priority}
          sizes={
            maxWidthClassName
              ? "(min-width: 720px) 16rem, 70vw"
              : "(min-width: 720px) 720px, 100vw"
          }
          src={src}
          width={width}
        />
      </div>
      <figcaption className="mt-3 text-caption text-text-weak">
        {caption}
      </figcaption>
    </figure>
  );
}
