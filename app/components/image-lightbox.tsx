"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ImageLightboxProperties = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly children: ReactNode;
  readonly triggerClassName?: string;
};

const viewportGutter =
  "max(0.5rem, env(safe-area-inset-left), env(safe-area-inset-right), env(safe-area-inset-top), env(safe-area-inset-bottom))";

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  children,
  triggerClassName,
}: ImageLightboxProperties): ReactNode {
  const ratio = width / height;
  const frameStyle: CSSProperties = {
    width: `min(calc(100vw - 2 * ${viewportGutter}), calc((100dvh - 2 * ${viewportGutter}) * ${ratio}))`,
    aspectRatio: `${width} / ${height}`,
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={alt}
        className={cn(
          "cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-general",
          triggerClassName,
        )}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-root/80" />
        <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-0">
          <Dialog.Popup className="relative outline-none">
            <Dialog.Title className="sr-only">{alt}</Dialog.Title>
            <div
              className="relative overflow-hidden rounded-none border border-border-general bg-surface-root p-0 shadow-lightbox"
              style={frameStyle}
            >
              <Image
                alt={alt}
                className="object-contain"
                fill
                sizes="100vw"
                src={src}
              />
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
