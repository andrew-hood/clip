import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Typewriter } from "../effects/Typewriter";
import { Heading } from "@go1d/go1d";
import { useMemo } from "react";

export const FeatureTitle = ({
  title,
  image,
}: {
  title: string;
  image?: string;
}) => {
  const frame = useCurrentFrame();
  const { width, durationInFrames } = useVideoConfig();

  const x = interpolate(frame, [0, durationInFrames], [width / 2, -width / 2]);

  const fileType = useMemo(() => {
    return image?.includes(".mp4?") ? "video" : "image";
  }, [image]);

  return (
    <AbsoluteFill className="bg-slate-100 items-center justify-center text-center">
      <Heading
        visualHeadingLevel="Heading 1"
        semanticElement="h1"
        color="accent"
        fontSize={10}
        css={{ width: 600, zIndex: 10 }}
      >
        <Typewriter text={title} />
      </Heading>

      {fileType === "image" ? (
        <Img
          style={{
            position: "absolute",
            transform: `translateX(${x}px) scale(2)`,
            opacity: 0.3,
          }}
          src={
            image ||
            "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          }
        />
      ) : (
        <Video
          style={{
            position: "absolute",
            transform: `translateX(${x}px) scale(2)`,
            opacity: 0.3,
          }}
          src={image}
        />
      )}
    </AbsoluteFill>
  );
};
