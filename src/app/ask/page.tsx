"use client";

import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Page() {
    const [selected, setSelected] = useState(["daiict"]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission here
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
                    InputProps={{ sx: { fontSize: '1.5rem', color: 'whitesmoke' }, }}
                    InputLabelProps={{ sx: { fontSize: '1.5rem', color: 'whitesmoke' }, style: { color: '#0E131F' } }}
                    sx={{ minHeight: '5rem', color: "whitesmoke", marginBottom: "1rem" }} />
                <TextField
                    id="outlined-multiline-static"
                    label="Question you want to ask"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { fontSize: '1.5rem', color: 'whitesmoke' }, }}
                    InputLabelProps={{ sx: { fontSize: '1.5rem', color: 'whitesmoke' }, style: { color: '#0E131F' } }}
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
