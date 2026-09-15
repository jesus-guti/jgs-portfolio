import type { JSX, ReactNode } from "react";

import "./streak-cromo.css";

type PlayerPhoneFrameProperties = {
  readonly children: ReactNode;
  readonly fill?: boolean;
};

export function PlayerPhoneFrame({
  children,
  fill = false,
}: PlayerPhoneFrameProperties): JSX.Element {
  return (
    <div className="player-phone">
      <div className={fill ? "player-phone-screen is-fill" : "player-phone-screen"}>
        {children}
      </div>
      <div aria-hidden className="player-phone-home" />
    </div>
  );
}
