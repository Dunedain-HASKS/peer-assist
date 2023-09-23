"use client";

import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
    }).then(({ questionId }) => {
      setLoading(false);
      router.push(`/questions/${questionId}`);
    });
  };

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
        <TextField
          id="outlined-multiline-static"
          placeholder="Introduce the problem and expand on what you put in the title. Be specific and imagine you’re asking a question to another person."
          label=""
          multiline
          rows={10}
          fullWidth
          value={body}
          onChange={(e) => setBody(e.target.value)}
          variant="outlined"
          margin="normal"
          InputProps={{ sx: { fontSize: "1rem", p: 4 } }}
          InputLabelProps={{
            sx: { fontSize: "1.5rem" },
            style: { color: "#0E131F" },
          }}
          sx={{ minHeight: "5rem", color: "whitesmoke", marginBottom: "1rem" }}
        />
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Preview
        </Typography>
        <div className="container" data-color-mode="light">
          <MDEditor.Markdown
            source={body}
            style={{
              fontSize: "15px",
              display: "block",
              margin: "auto auto",
              padding: "2rem",
              border: "1px solid #000000",
              borderRadius: "4px",
            }}
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
