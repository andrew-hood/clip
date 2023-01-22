import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Typewriter } from "../effects/Typewriter";
import { Heading } from "@go1d/go1d";

export const VideoTitle = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = frame > 40 ? 1 : 10;

  return (
    <AbsoluteFill className="bg-orange-100 items-center justify-center">
      <div
        style={{ opacity, transform: `scale(${scale})` }}
        className="text-orange-400 text-5xl font-bold leading-relaxed w-80 items-center text-center"
      >
        <Heading
          visualHeadingLevel="Heading 2"
          semanticElement="h2"
          fontSize={8}
        >
          <Typewriter text={title} />
        </Heading>
      </div>
    </AbsoluteFill>
  );
};
