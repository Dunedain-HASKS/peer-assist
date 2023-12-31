"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import QuestionCard from "@/components/QuestionCard";
import { useAuth } from "@/context/session";
import { postAnswerAction } from "./action";
import { useRouter } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";

export default function Page({ params }: { params: { id: string } }) {
  const [content, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    postAnswerAction({
      answer_input: {
        content,
      },
      questionId: params.id,
      session,
    }).then((res) => {
      setLoading(false);
      if (!res.answer) setError(res.message);
      else router.push(`/questions/${params.id}`);
    });
  };

  if (loading) {
    return (
      <Grid
        container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          minHeight: "83vh",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant="h4" sx={{ marginLeft: "10px" }}>
            Posting your answer...
          </Typography>
        </div>
      </Grid>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{ p: 2, maxWidth: "100%", margin: "auto", bgcolor: "#eff1fe" }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Your Solution
      </Typography>
      <QuestionCard id={params.id} />
      <form onSubmit={handleSubmit}>
        <div style={{ height: "auto" }} data-color-mode="light">
          <MDEditor
            height={450}
            value={content}
            onChange={(value) => setBody(value || "")}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            my: 2,
            fontSize: "1.2rem",
            width: "10vw",
            color: "whitesmoke",
            display: "block",
            ml: "auto",
            mr: "auto",
          }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}
