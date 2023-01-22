import React, { ReactElement } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export const FadeInList = ({ children }: { children: ReactElement[] }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const duration = durationInFrames / children.length;
  console.log(duration);
  const showChild =
    children[Math.min(Math.floor(frame / duration), children.length - 1)];

  return <>{showChild}</>;
};
