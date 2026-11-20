import type { JSX } from "react";

/** Renders `**bold**` spans inside copy from the dictionaries. */
export function EmphasisText({ value }: { value: string }): JSX.Element {
  const parts = value.split("**");

  return (
    <>
      {parts.map((part, index) => {
        if (part.length === 0) {
          return null;
        }

        if (index % 2 === 1) {
          return (
            <strong
              className="font-semibold text-text-strong"
              key={`${index}-${part}`}
            >
              {part}
            </strong>
          );
        }

        return <span key={`${index}-${part}`}>{part}</span>;
      })}
    </>
  );
}
