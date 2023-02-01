import React, { useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const ZoomText = ({ text }: { text: string | string[] }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const [words, duration] = useMemo(() => {
    const words = typeof text === "string" ? text.split(" ") : text;
    const duration = durationInFrames / words.length;
    return [words, duration];
  }, [text, durationInFrames]);

  const currentWordIndex = Math.min(
    Math.floor(frame / duration),
    words.length - 1
  );

  const zoom = interpolate(frame % duration, [0, duration], [1, 15], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div style={{ transform: `scale(${zoom})` }}>{words[currentWordIndex]}</div>
  );
};
