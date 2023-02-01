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
      damping: 100,
    },
    durationInFrames: 20,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [0 - height, 0]);

  return (
    <AbsoluteFill className="bg-gray-900 text-white items-center justify-center text-center">
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 z-10"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="8d958450-c69f-4251-94bc-4e091a323369"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </AbsoluteFill>
  );
};
