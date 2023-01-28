import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { SprintForm } from "@/components/projects/sprint-shot/SprintForm";
import { Project } from "@/components/Project";
import SlideOver from "@/components/SlideOvers";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/config/firebase";
import { useRouter } from "next/router";
import { Thumbnail } from "@remotion/player";
import { SprintSnapshotComposition } from "@/video/SprintSnapshot/Composition";

const dbInstance = collection(database, "sprints");

export default function Home() {
  const { push } = useRouter();
  const [sprints, setSprints] = useState<any[] | null>(null);
  useEffect(() => {
    getSprints();
  }, []);

  const getSprints = async () => {
    const { docs } = await getDocs(dbInstance);
    const content = docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    console.log(content);
    setSprints(content);
  };

  return (
    <>
      <Layout>
        <Project
          label="Sprint Shot"
          title="Capture your sprint goals and share it"
          description="Sprint Shot auto generates a video of what you accomplished your sprint. Share what your team achieved to the rest of your company and more."
        >
          <SlideOver label="New Video">
            <SprintForm onSave={({ id }) => push(`/sprint-shot/${id}`)} />
          </SlideOver>
        </Project>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">
              Customers also viewed
            </h2>
            <a
              href="#"
              className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View all
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {sprints?.map(({ data, id }) => (
              <div key={id} className="group relative">
                <Thumbnail
                  component={SprintSnapshotComposition}
                  compositionWidth={280}
                  compositionHeight={280}
                  frameToDisplay={220}
                  durationInFrames={225}
                  fps={30}
                  inputProps={{ data }}
                />
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                  <h3>
                    <a href={`/sprint-shot/${id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
