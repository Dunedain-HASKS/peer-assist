"use client";

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import QuestionCard from "@/components/questionCard";

export default function Page() {
    const [selected, setSelected] = useState(["open"]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: any) => {
        setLoading(true);
        e.preventDefault();
    }

    return (
        <Paper elevation={3} sx={{ p: 2, maxWidth: '100%', margin: 'auto', bgcolor: '#eff1fe' }}>
            <Typography variant="h2" align="center" gutterBottom>
                Your Solution
            </Typography>
            <QuestionCard id="612f1b1b1f0b7e0015a9b3a0" />
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
                    label="Your Solution"
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
