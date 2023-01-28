import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Intro } from "./Intro";
import { Profile } from "./Profile";
import { MyEnrolments } from "./MyEnrolments";

interface Go1StatsType {
  duration: string;
  me: {
    avatar: string;
    name: string;
    enrolments: any[];
  };
  users: {
    numbers: number;
    percentage: number;
  };
  enrolments: {
    numbers: number;
    time: number;
  };
  content: {
    numbers: number;
    popularTopics: string[];
  };
}

export const Go1Wrapped = (stats: Go1StatsType) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <Audio startFrom={40} src={staticFile(`/audio/the-podcast-intro.mp3`)} />
      <Series>
        <Series.Sequence durationInFrames={4 * fps}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={4 * fps}>
          <Profile {...stats.me} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={8 * fps}>
          <MyEnrolments {...stats.me} />
        </Series.Sequence>
        {/* <Series.Sequence durationInFrames={4 * fps}>
          Portal
        </Series.Sequence>
        <Series.Sequence durationInFrames={4 * fps}>
          Number of users - e.g. your team welcomed 5 new faces
        </Series.Sequence>
        <Series.Sequence durationInFrames={4 * fps}>
          Number of enrolments - this month your team completed 50
          Number of enrolments - that equates to
        </Series.Sequence>
        <Series.Sequence durationInFrames={4 * fps}>
          Number of enrolments - this month your team completed 50
        </Series.Sequence> */}
      </Series>
    </AbsoluteFill>
  );
};

export const stats = {
  duration: "month", // week/year
  me: {
    avatar:
      "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
    name: "Andrew",
    enrolments: [
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
      {
        title: "Learning React",
        image:
          "https://res.cloudinary.com/go1/image/upload/v1555415565/ojul0auys2xiztvdkwhj.jpg",
      },
    ],
  },
  users: {
    numbers: 10,
    percentage: 0.05, // 5%
  },
  enrolments: {
    numbers: 20,
    time: 400, // mins
  },
  content: {
    numbers: 3,
    popularTopics: [""],
  },
} as Go1StatsType;
