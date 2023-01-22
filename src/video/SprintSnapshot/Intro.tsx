import IconGo1Logo from "@go1d/go1d/build/components/Icons/Go1Logo";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Intro = () => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 30,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);
  const zoom = Math.cos(frame / 15) * 0.2 + 2;

  return (
    <AbsoluteFill className="bg-teal-800 items-center justify-center">
      <div
        style={{
          position: "absolute",
          transform: `translateY(${entranceOffset}px) scale(${zoom})`,
          zIndex: 1,
        }}
      >
        <IconGo1Logo size={10} color="complementary" />
      </div>
    </AbsoluteFill>
  );
};
