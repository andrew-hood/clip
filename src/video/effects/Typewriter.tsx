import React from "react";
import { Sequence, useCurrentFrame, useVideoConfig } from "remotion";

const cursor: React.CSSProperties = {
  height: 40,
  width: 3,
  display: "inline-block",
  backgroundColor: "black",
  marginLeft: 4,
  marginTop: -4,
};

export const Typewriter = ({
  text,
  delay = 0,
  delimiter = "",
}: {
  text: string;
  delay?: number;
  delimiter?: string;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const items = text.split(delimiter);
  const itemDuration = (durationInFrames * 0.6) / items.length;

  // A new character every 3 frames
  const charsShown = Math.max(0, Math.floor(frame / itemDuration) - delay);
  const textToShow = items.slice(0, charsShown).join(delimiter);
  // Show the cursor while the text is typing, then start blinking
  const cursorShown =
    charsShown <= 0
      ? false
      : textToShow.length === items.length
      ? Math.floor(frame / (fps / 4)) % 2 === 1
      : true;

  return (
    <div>
      {textToShow}
      <span
        style={{
          ...cursor,
          verticalAlign: "middle",
          opacity: Number(cursorShown),
        }}
      />
    </div>
  );
};
