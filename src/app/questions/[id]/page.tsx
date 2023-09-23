import React from 'react';
import { Typography, Chip, Paper } from '@mui/material';

const data = {
    user: 'User2',
    question: 'What are some best practices for responsive web design?',
    body: 'I want to make my website responsive to different screen sizes. Any tips for best practices in responsive web design?',
    tags: ['Web Design', 'Responsive Design'],
    upvotes: 8,
    downvotes: 1,
    comments: [
        'Responsive design is crucial for a great user experience. Some best practices include:',
        'You should also consider using CSS media queries to adjust the layout based on screen size:',
    ],
    answers: [
        '1. Use a mobile-first approach',
        '2. Use CSS flexbox or grid for layout',
    ],
};

export default function Page() {
    return (
        <Paper elevation={3} sx={{ padding: 2, maxWidth: '100vw', margin: 'auto', bgcolor: 'inherit' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <Typography variant="body2">{data.upvotes} upvotes</Typography>
                    <Typography variant="body2">{data.downvotes} downvotes</Typography>
                </div>
                <div>
                    <Typography variant="h4">{data.question}</Typography>
                    <Typography variant="body1">{data.body}</Typography>
                </div>
            </div>
            <div>
                {data.tags.map((tag, index) => (
                    <Chip key={index} label={tag} sx={{ marginRight: 1 }} />
                ))}
            </div>
            <div>
                <Typography variant="h5">Answers</Typography>
                {data.answers.map((answer, index) => (
                    <Typography key={index} variant="body1">
                        {answer}
                    </Typography>
                ))}
            </div>
        </Paper>
    );
}
