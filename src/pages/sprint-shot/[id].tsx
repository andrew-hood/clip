import { GetServerSideProps } from "next";
import Layout from "@/components/layout/Layout";
import { Player } from "@remotion/player";
import { useLambda } from "@/hooks/useLambda";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/Button";
import { database } from "@/config/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { SprintSnapshotComposition } from "@/video/SprintSnapshot/Composition";
import SlideOver from "@/components/SlideOvers";
import { SprintForm } from "@/components/projects/sprint-shot/SprintForm";

interface Props {
  id: string;
  data: any;
}

function VideoTemplate({ id, data }: Props) {
  const [props, setProps] = useState(data);

  const { renderMedia, progress, status, price, url, renderId } = useLambda(
    "MyComp",
    props
  );
  return (
    <Layout>
      <div className="bg-black">
        <Container>
          <Player
            component={SprintSnapshotComposition}
            inputProps={{ data: props }}
            durationInFrames={(data?.goals?.length || 0) * 12 * 30 + 12 * 30}
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            style={{ width: "100%" }}
            controls
          />
        </Container>
      </div>
      <Container className="justify-between flex-row pt-4">
        <h1 className="font-bold text-2xl text-slate-700">{props.title}</h1>
        <div className="flex flex-row gap-2">
          <Button>Export</Button>
          <SlideOver label="Edit Video">
            <SprintForm
              sprint={props}
              id={id}
              onSave={({ data }) => setProps(data)}
            />
          </SlideOver>
        </div>
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const sprint = doc(database, "sprints", id as string);
  const data = await getDoc(sprint);
  if (!data.exists()) {
    return { notFound: true };
  }

  return {
    props: { id, data: data.data() },
  };
};

export default VideoTemplate;
