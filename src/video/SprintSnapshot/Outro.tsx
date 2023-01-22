import IconGo1Logo from "@go1d/go1d/build/components/Icons/Go1Logo";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Outro = () => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  const zoom = Math.cos(frame / 15) * 0.2 + 2;

  return (
    <AbsoluteFill className="bg-slate-200 items-center justify-center">
      <div style={{ transform: `scale(${zoom})` }}>
        <IconGo1Logo size={10} color="accent" />
      </div>
    </AbsoluteFill>
  );
};
