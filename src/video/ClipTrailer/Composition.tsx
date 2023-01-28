import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Intro } from "./Intro";
import { FlashBackground } from "../effects/FlashBackground";
import { ZoomText } from "../effects/ZoomText";
import { Carousel } from "../effects/Carousel";

export const ClipTrailer = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <Audio startFrom={40} src={staticFile(`/audio/the-podcast-intro.mp3`)} />
      <Series>
        <Series.Sequence durationInFrames={Math.floor(3.8 * fps)}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={3 * fps}>
          <FlashBackground>
            <ZoomText text={["On your marks...", "Get set...", "...Clip!"]} />
          </FlashBackground>
        </Series.Sequence>
        <Series.Sequence durationInFrames={3 * fps}>
          <Carousel
            slideWidth={600}
            className="justify-center text-center gap-40"
          >
            <p className="bg-slate-300 h-20">Testing</p>
            <p className="bg-slate-500 h-40">Testing1</p>
            <p className="bg-slate-800 text-white h-60">Testing7</p>
          </Carousel>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
