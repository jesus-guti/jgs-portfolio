import Image from "next/image";
import type { JSX } from "react";

import { ImageLightbox } from "../../../components/image-lightbox";
import { PlayerPhoneFrame } from "./player-phone-frame";

export { CaseStudyFigure } from "../../../components/case-study-figure";

type CaseStudyPhoneFigureProperties = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
};

export function CaseStudyPhoneFigure({
  src,
  alt,
  caption,
  width,
  height,
}: CaseStudyPhoneFigureProperties): JSX.Element {
  return (
    <figure className="mb-8">
      <ImageLightbox
        alt={alt}
        height={height}
        src={src}
        triggerClassName="mx-auto block"
        width={width}
      >
        <PlayerPhoneFrame fill>
          <Image
            alt={alt}
            height={height}
            sizes="(min-width: 720px) 22rem, 100vw"
            src={src}
            width={width}
          />
        </PlayerPhoneFrame>
      </ImageLightbox>
      <figcaption className="mt-3 text-center text-caption text-text-weak">
        {caption}
      </figcaption>
    </figure>
  );
}
