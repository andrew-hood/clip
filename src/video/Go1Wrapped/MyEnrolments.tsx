import { Heading } from "@go1d/go1d";
import { AbsoluteFill } from "remotion";
import CourseCard from "@go1d/go1d/build/components/CourseCard";
import { Carousel } from "../effects/Carousel";

export const MyEnrolments = ({ enrolments }: { enrolments: any[] }) => {
  return (
    <AbsoluteFill className="bg-teal-800 items-center justify-center text-center">
      <Heading
        semanticElement="h1"
        visualHeadingLevel="Heading 1"
        paddingX={6}
        css={{ top: -80, position: "relative" }}
        color="complementary"
      >
        Great Work!
      </Heading>
      <Heading
        semanticElement="h3"
        visualHeadingLevel="Heading 3"
        paddingX={6}
        css={{ top: -40, position: "relative" }}
        color="background"
      >
        You completed 10 new courses this month
      </Heading>
      <Carousel slideWidth={130}>
        {enrolments.map((lo, index) => (
          <CourseCard title={lo.title} courseImage={lo.image} />
        ))}
      </Carousel>
    </AbsoluteFill>
  );
};
