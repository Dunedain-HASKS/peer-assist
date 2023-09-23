"use client";

import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { postQuestion } from "./action";
import { useAuth } from "@/context/session";
import { useRouter } from "next/navigation";

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
    }

    return (
        <Paper elevation={3} sx={{ p: 2, maxWidth: '100%', margin: 'auto', bgcolor: '#eff1fe' }}>
            <Typography variant="h2" align="center" gutterBottom>
                Ask
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    InputProps={{ sx: { fontSize: '1.5rem' }, }}
                    InputLabelProps={{ sx: { fontSize: '1.5rem' }, style: { color: '#0E131F' } }}
                    sx={{ minHeight: '5rem', color: "whitesmoke", marginBottom: "1rem" }} />
                <TextField
                    id="outlined-multiline-static"
                    label="Question you want to ask"
                    multiline
                    rows={4}
                    fullWidth
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { fontSize: '1.5rem' }, }}
                    InputLabelProps={{ sx: { fontSize: '1.5rem' }, style: { color: '#0E131F' } }}
                    sx={{ minHeight: '5rem', color: "whitesmoke", marginBottom: "1rem" }} />
                <Typography variant="h5" gutterBottom>
                    Tags
                </Typography>
                <div>
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
                        fontSize: '1.2rem',
                        width: '10vw',
                        color: 'whitesmoke',
                        display: 'block', // Make the button a block element
                        ml: 'auto', // Center horizontally
                        mr: 'auto', // Center horizontally
                    }}
                >
                    Submit
                </Button>

            </form>
        </Paper>
    )
}
