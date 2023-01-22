import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "@/components/Container";
import Layout from "@/components/Layout";
import {
  Button,
  ButtonFilled,
  Field,
  FileUploader,
  Form,
  TextInput,
  View,
  Text,
} from "@go1d/go1d";
import { useState } from "react";
import { app, database } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const { push } = useRouter();
  const [goals, setGoals] = useState<
    { title: string; file?: string; points: string[] }[]
  >([]);

  const dbInstance = collection(database, "sprints");

  const formatFormData = ({ title, ...values }: any) => {
    const formatted: any = { title, goals: [] };
    Object.keys(values).forEach((key) => {
      const [, gIndex, field, pIndex] = key.split("-");
      let goal = formatted.goals[+gIndex] || {};

      if (!pIndex) {
        goal[field] = values[key];
      } else {
        if (!goal?.points) {
          goal.points = [];
        }
        goal.points[+pIndex] = values[key];
      }
      formatted.goals[+gIndex] = goal;
    });
    return formatted;
  };

  const handleOnSubmit = async (values: any, actions: any) => {
    try {
      const document = await addDoc(dbInstance, formatFormData(values));
      push(`/sprint-shot/${document.id}`);
    } catch (err) {
      console.error(err);
      actions.setSubmitting(false);
    }
  };

  return (
    <Layout className="bg-slate-100 border-t border-solid border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row py-10 gap-10 w-full">
          <View flexGrow={1} flexShrink={[0, 1]}>
            <Image
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
              alt="SprintShot"
              width={140}
              height={140}
              className="border-2 border-black border-double mb-4"
            />
            <h1 className="text-3xl font-semibold mb-3">SprintShot</h1>
            <Text fontSize={3}>
              Get a quick and easy overview of your agile sprints with our app.
              Simply upload your sprint data and our app will generate a
              customized video summary, highlighting key metrics and
              accomplishments. Stay on top of your team&apos;s progress and make
              informed decisions with our user-friendly video summaries.
            </Text>
          </View>
          <View
            flexBasis={[1, 0.5]}
            border={1}
            borderRadius={3}
            borderColor="faded"
            padding={6}
          >
            <Form onSubmit={handleOnSubmit}>
              <Field
                component={TextInput}
                label="Title"
                name="title"
                required
              />
              {goals.map((goal, gIndex) => (
                <View
                  key={`goal-${gIndex}`}
                  backgroundColor="background"
                  flexDirection="column"
                  boxShadow="strong"
                  padding={6}
                  borderRadius={3}
                  marginBottom={4}
                  gap={5}
                >
                  <Field
                    component={TextInput}
                    label="Goal Title"
                    name={`goal-${gIndex}-title`}
                    required
                  />
                  <Field
                    component={FileUploader}
                    label="File"
                    name={`goal-${gIndex}-file`}
                  />
                  <View padding={5} border={1} borderRadius={3} gap={4}>
                    <Text fontSize={1} color="subtle">
                      Jot down a few key points related to the goal
                    </Text>
                    {(goal?.points || []).map((_, pIndex) => (
                      <Field
                        key={`goal-${gIndex}-${pIndex}`}
                        component={TextInput}
                        label={`Point ${pIndex + 1}`}
                        name={`goal-${gIndex}-point-${pIndex}`}
                        required
                      />
                    ))}
                    <Button
                      onClick={() => {
                        goal.points.push("");
                        setGoals([...goals]);
                      }}
                    >
                      Add point
                    </Button>
                  </View>
                </View>
              ))}
              <ButtonFilled
                onClick={() => setGoals([...goals, { title: "", points: [] }])}
              >
                Add new goal
              </ButtonFilled>

              <View marginTop={8}>
                <ButtonFilled type="submit" color="accent">
                  Submit
                </ButtonFilled>
              </View>
            </Form>
          </View>
        </div>
      </Container>
    </Layout>
  );
}
