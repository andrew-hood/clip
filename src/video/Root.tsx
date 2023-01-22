import { Composition } from "remotion";
import { MyComposition } from "./MyComp/Composition";
import { defaultMyCompProps } from "../types/MyComp";
import { SprintSnapshotComposition } from "./SprintSnapshot/Composition";

import "../styles/global.css";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="SprintSnapshot"
        component={SprintSnapshotComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{ data: { title: "Test Vide" } }}
      />
    </>
  );
};
