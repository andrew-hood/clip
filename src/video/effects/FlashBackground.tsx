import React, { PropsWithChildren } from "react";
import { useCurrentFrame } from "remotion";
import clsx from "clsx";

export const FlashBackground = ({ children }: PropsWithChildren) => {
  const frame = useCurrentFrame();
  const blink = Math.cos(frame / 5) < 0 ? true : false;
  return (
    <div
      className={clsx(
        blink ? "bg-black" : "bg-white",
        "absolute inset-0 flex items-center justify-center"
      )}
    >
      <span
        className={clsx(
          blink ? "text-white" : "text-black",
          "text-4xl text-center"
        )}
      >
        {children}
      </span>
    </div>
  );
};
