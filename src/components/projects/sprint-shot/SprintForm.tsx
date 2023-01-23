import { database, storage } from "@/config/firebase";
import {
  Button,
  ButtonFilled,
  Field,
  FileUploader,
  Form,
  Select,
  Text,
  TextInput,
  View,
} from "@go1d/go1d";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useState } from "react";

const dbInstance = collection(database, "sprints");

export const SprintForm = ({
  sprint = null,
  id,
  onSave,
}: {
  sprint?: any;
  id?: string;
  onSave?: (sprint: any) => void;
}) => {
  const { push } = useRouter();
  const [goals, setGoals] = useState<
    { title: string; file?: string; points: string[] }[]
  >(sprint?.goals || []);

  const flattenData = ({ title, audio, goals }: any) => {
    const flatten: any = { title, audio };
    goals.forEach((goal: any, gIndex: number) => {
      const prefixKey = `goal-${gIndex}-`;
      Object.keys(goal).forEach((key) => {
        if (["points"].indexOf(key) >= 0) {
          goal.points.forEach((point: string, pIndex: number) => {
            flatten[`${prefixKey}point-${pIndex}`] = point;
          });
        }
        flatten[`${prefixKey}${key}`] = goal[key];
      });
    });
    return flatten;
  };

  const formatFormData = ({ title, audio, ...values }: any) => {
    const formatted: any = { title, audio, goals: [] };
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
    const data = formatFormData(values);
    if (id) {
      const sprint = doc(database, "sprints", id as string);
      updateDoc(sprint, data);
      onSave && onSave({ id, data });
      return;
    }

    try {
      const files = await Promise.all(
        data?.goals.map((goal: any) => {
          if (!goal.file) return null;
          return handleUpload(goal.file);
        })
      );

      data.goals.forEach(
        (goal: any, index: number) => (goal.file = files[index])
      );
      data.audio = "bounce.mp3";

      const document = await addDoc(dbInstance, data);
      onSave && onSave({ id: document.id, data });
    } catch (err) {
      console.error(err);
      actions.setSubmitting(false);
    }
  };

  const handleUpload = async (file: File) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const upload = await uploadBytes(storageRef, file);
    return getDownloadURL(upload.ref);
  };

  return (
    <Form
      onSubmit={handleOnSubmit}
      initialValues={sprint && flattenData(sprint)}
    >
      <Field component={TextInput} label="Title" name="title" required />
      {!!id && (
        <Field
          component={Select}
          label="Audio"
          name="audio"
          required
          options={[
            { value: "bounce.mp3", label: "bounce.mp3" },
            { value: "energetic-hip-hop.mp3", label: "energetic-hip-hop.mp3" },
            { value: "tropical-house.mp3", label: "tropical-house.mp3" },
            { value: "good-vibes.mp3", label: "good-vibes.mp3" },
            { value: "percussion-sport.mp3", label: "percussion-sport.mp3" },
          ]}
        />
      )}
      {goals.map((goal, gIndex) => (
        <View
          key={`goal-${gIndex}`}
          flexDirection="column"
          boxShadow="strong"
          padding={5}
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
  );
};
