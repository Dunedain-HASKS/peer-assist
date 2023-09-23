"use client";

import React from 'react';
import { Typography, Chip, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import CommentCard from '@/components/CommentCard';
import SendIcon from '@mui/icons-material/Send';
import AnswerCard from '@/components/AnswerCard';
import Link from 'next/link';

const data = {
    user: 'User2',
    question: 'What are some best practices for responsive web design?',
    body: 'I want to make my website responsive to different screen sizes. Any tips for best practices in responsive web design?',
    tags: ['Web Design', 'Responsive Design'],
    upvotes: ['yes', 'ye'],
    downvotes: ['no'],
    comments: [
        'Responsive design is crucial for a great user experience. Some best practices include:',
        'You should also consider using CSS media queries to adjust the layout based on screen size:',
    ],
    answers: [
        '1. Use a mobile-first approach',
        '2. Use CSS flexbox or grid for layout',
    ],
};

export default function Page({params}: { params: { id: string } }) {
    return (
        <Paper elevation={3} sx={{ padding: 2, maxWidth: '100vw', margin: 'auto', bgcolor: 'inherit' }}>
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <div style={{ minWidth: 50 }}>
                    <ArrowUpwardIcon fontSize='large' />
                    <Typography variant="body2" sx={{ ml: 1.5, fontSize: 'large' }}>{data.upvotes.length - data.downvotes.length}</Typography>
                    <ArrowDownward fontSize='large' />
                    {/* <Typography variant="body2">{data.downvotes} downvotes</Typography> */}
                </div>
                <div>
                    <Typography variant="h4">{data.question}</Typography>
                    <Typography variant="h6">{data.body}</Typography>
                </div>

            </div>
            <div>
                {data.tags.map((tag, index) => (
                    <Chip key={index} label={tag} sx={{ marginRight: 1 }} />
                ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft:'auto' }}>
                <Link href={`/questions/${params.id}/answer`}><Button variant="contained" sx={{ mt:3, mr: 1 }}>Add Answer</Button></Link>
                <Typography variant="body1" sx={{ mr: 1, ml:'auto' }}>Asked by {data.user}</Typography>
                <Typography variant="body1" sx={{ mr: 1, color: 'blue' }}>{new Date().toLocaleString()}</Typography>
            </div>
            <Typography variant="h5" sx={{ mb: 1, mt:3 }}>Comments</Typography> 
            <div style={{display:'flex'}}>
            <TextField
                id="outlined-multiline-static"
                label="Add a comment"
                fullWidth
                InputLabelProps={{ style: { color: '#0E131F' } }}
                sx={{ mb:1, mx:1}}
                />
            <Button variant="contained" sx={{ mb:1, mx:1}}><SendIcon/></Button>
                </div>  
            <div>
                {data.comments.map((comment, index) => (
                    <CommentCard key={index} id={index.toString()} />
                ))}
                <Typography variant="h4" sx={{ my: 2 }}>Answers</Typography>
                {/* {data.answers.map((answer, index) => (
                    <AnswerCard key={index} id={index.toString()} />
                ))} */}
            </div>
        </Paper>
    );
}
