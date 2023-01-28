import { Heading } from "@go1d/go1d";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Typewriter } from "../effects/Typewriter";

export const Profile = ({ avatar, name }: { avatar: string; name: string }) => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 20,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [0 - height, 0]);

  return (
    <AbsoluteFill className="bg-slate-100 items-center justify-center text-center">
      <div
        style={{
          position: "absolute",
          transform: `translateY(${entranceOffset}px)`,
          zIndex: 1,
        }}
      >
        <Img src={avatar} className="w-40 h-40 m-auto rounded-full mb-20" />
        <Heading semanticElement="h1" visualHeadingLevel="Heading 1">
          <Typewriter delay={12} duration={40} text={`Hey ${name}`} />
        </Heading>
        <Heading semanticElement="h4" visualHeadingLevel="Heading 4">
          <Typewriter
            delay={20}
            duration={50}
            delimiter=" "
            text="Let's dive in to see your journey this month"
          />
        </Heading>
      </div>
    </AbsoluteFill>
  );
};
