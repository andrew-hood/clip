import { AbsoluteFill, Img, Video, staticFile } from "remotion";
import { FadeInList } from "../effects/FadeInList";
import { Text, View } from "@go1d/go1d";

export const Feature = ({
  points,
  image,
}: {
  points: string[];
  image: string;
}) => {
  return (
    <AbsoluteFill className="bg-slate-100 items-center justify-center">
      {/* <Img src={staticFile('/screenshots/screenshot1.png')} /> */}
      {/* <Video src={staticFile("/videos/screencast.mp4")} /> */}
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
