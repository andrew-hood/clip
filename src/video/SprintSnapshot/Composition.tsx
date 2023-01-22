import { useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Slide, Fade } from "../transitions";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { VideoTitle } from "./VideoTitle";
import { FeatureTitle } from "./FeatureTitle";
import { Feature } from "./Feature";

export const SprintSnapshotComposition = ({ data }: { data: any }) => {
  const { fps } = useVideoConfig();

  const scenes = useMemo(() => {
    const scenes = [
      {
        component: (
          <Fade duration={10} type="out">
            <Intro />
          </Fade>
        ),
        duration: 3,
      },
      {
        component: (
          <Slide type="out">
            <VideoTitle title={data.title} />
          </Slide>
        ),
        duration: 4,
      },
      ...data.goals.flatMap((goal: any) => [
        {
          component: (
            <Fade type="in">
              <FeatureTitle title={goal.title} image={goal.file} />
            </Fade>
          ),
          duration: 4,
        },
        {
          component: <Feature points={goal?.points || []} image="" />,
          duration: 8,
        },
      ]),
      {
        component: <Outro />,
        duration: 3,
      },
    ];

    return scenes;
  }, [data]);

  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <Audio src={staticFile("/audio/tropical-house.mp3")} />
      <Series>
        {scenes.map(({ component, duration }, index) => (
          <Series.Sequence key={index} durationInFrames={duration * fps}>
            {component}
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
