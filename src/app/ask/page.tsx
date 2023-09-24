"use client";

import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { postQuestion } from "./action";
import { useAuth } from "@/context/session";
import { useRouter } from "next/navigation";
import MDEditor from "@uiw/react-md-editor";
import { Divider } from "@mui/material";

export default function Page() {
  const router = useRouter();
  const [selected, setSelected] = useState(["open"]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    postQuestion({
      question_input: {
        title: title,
        body: body,
        tags: selected,
      },
      session: session,
    }).then(({ questionId, message }) => {
      setLoading(false);
      if (!questionId) return setError(message);
      else router.push(`/questions/${questionId}`);
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
            Posting your question...
          </Typography>
        </div>
      </Grid>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: "100%",
        margin: "auto",
        bgcolor: "#eff1fe",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Ask
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Title
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          placeholder="Title of your question"
          label=""
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{ sx: { fontSize: "1.5rem", p: 1 } }}
          InputLabelProps={{
            sx: { fontSize: "1.5rem" },
            style: { color: "#0E131F" },
          }}
          sx={{ minHeight: "5rem", color: "whitesmoke", marginBottom: "1rem" }}
        />
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Question you want to ask
        </Typography>
        <div style={{ height: "auto" }} data-color-mode="light">
          <MDEditor
            height={450}
            value={body}
            onChange={(value) => setBody(value || "")}
          />
        </div>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Tags
        </Typography>
        <div style={{ backgroundColor: "#eff1fe" }}>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="tags"
            placeHolder="tags"
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
            display: "block", // Make the button a block element
            ml: "auto", // Center horizontally
            mr: "auto", // Center horizontally
          }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}
