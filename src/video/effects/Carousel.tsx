import clsx from "clsx";
import React, { PropsWithChildren, ReactElement, useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Carousel = ({
  slideWidth = 130,
  children,
  className = "",
}: {
  slideWidth: number;
  children: ReactElement[];
  className?: string;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, width } = useVideoConfig();

  const pauseDuration = durationInFrames / children.length;
  const animateDuration = Math.floor(pauseDuration * 0.25);
  const timeline = useMemo(() => {
    return children.map((_, index) => ({
      startFrame: index * pauseDuration - animateDuration,
      endFrame: (index + 1) * pauseDuration,
    }));
  }, [children]);

  const containerWidth = children.length * slideWidth;
  const x = interpolate(
    frame,
    [0, durationInFrames],
    [containerWidth, -containerWidth]
  );

  return (
    <div
      className={clsx(className, "flex flex-row gap-10 relative items-center")}
      style={{ transform: `translateX(${x}px)` }}
    >
      {children.map((child, index) => (
        <div key={index} style={{ width: slideWidth + 60 }}>
          <Pulse
            startFrame={timeline[index].startFrame}
            endFrame={timeline[index].endFrame}
            animateDuration={animateDuration}
          >
            {child}
          </Pulse>
        </div>
      ))}
    </div>
  );
};

export const Pulse = ({
  startFrame,
  endFrame,
  animateDuration,
  children,
}: PropsWithChildren<{
  startFrame: number;
  endFrame: number;
  animateDuration: number;
}>) => {
  const frame = useCurrentFrame();

  const scaleUp = interpolate(
    frame,
    [startFrame, startFrame + animateDuration],
    [0.8, 1.5],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const scaleDown = interpolate(
    frame,
    [endFrame - animateDuration, endFrame],
    [1.5, 0.8],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const scale = frame <= endFrame - animateDuration ? scaleUp : scaleDown;
  return <div style={{ transform: `scale(${scale})` }}>{children}</div>;
};
