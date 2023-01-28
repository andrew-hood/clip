import { Composition } from "remotion";
import { Go1Wrapped } from "./Go1Wrapped/Composition";
import { SprintSnapshotComposition } from "./SprintSnapshot/Composition";
import { ClipTrailer } from "./ClipTrailer/Composition";

import "../styles/global.css";

import { stats } from "./Go1Wrapped/Composition";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="ClipTrailer"
        component={ClipTrailer}
        durationInFrames={30 * 10}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Go1Wrapped"
        component={Go1Wrapped}
        durationInFrames={16 * 30}
        fps={30}
        width={480}
        height={820}
        defaultProps={stats}
      />
      <Composition
        id="SprintSnapshot"
        component={SprintSnapshotComposition}
        durationInFrames={240}
        fps={30}
        width={480}
        height={820}
        defaultProps={{ data: { title: "Test Video", goals: [] } }}
      />
    </>
  );
};
