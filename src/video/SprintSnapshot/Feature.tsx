import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FadeInList } from "../effects/FadeInList";
import { Text, View } from "@go1d/go1d";
import { useMemo } from "react";

export const Feature = ({
  points,
  file,
}: {
  points: string[];
  file: string;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.5], {
    extrapolateLeft: "clamp",
  });

  const fileType = useMemo(() => {
    return file.includes(".mp4?") ? "video" : "image";
  }, [file]);

  return (
    <AbsoluteFill className="bg-slate-100 items-center justify-center">
      {fileType === "image" && (
        <Img src={file} style={{ transform: `scale(${zoom})` }} />
      )}
      {fileType === "video" && (
        <Video src={file} style={{ transform: `scale(${zoom})` }} />
      )}
      <FadeInList>
        {points.map((point, index) => {
          const style = index % 2 === 0 ? { top: 300 } : { bottom: 300 };
          return (
            <View
              key={index}
              position="absolute"
              paddingX={8}
              css={{ ...style }}
            >
              <Text
                color="white"
                padding={6}
                fontSize={8}
                css={{ background: "#111111b8" }}
              >
                {point}
              </Text>
            </View>
          );
        })}
      </FadeInList>
    </AbsoluteFill>
  );
};
