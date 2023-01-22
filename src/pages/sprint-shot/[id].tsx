import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import { Player } from "@remotion/player";
import { useLambda } from "@/hooks/useLambda";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { database } from "@/config/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { SprintSnapshotComposition } from "@/video/SprintSnapshot/Composition";

interface Props {
  data: any;
}

function VideoTemplate({ data }: Props) {
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
            durationInFrames={(data?.goals?.length || 0) * 12 * 30 + 10 * 30}
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            style={{ width: "100%" }}
            controls
            autoPlay
          />
        </Container>
      </div>
      <Container className="justify-between flex-row pt-4">
        <h1 className="font-bold text-2xl text-slate-700">{data.title}</h1>
        <div className="">
          <Button>Export</Button>
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
    props: { data: data.data() },
  };
};

export default VideoTemplate;
