import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, IconButton, Avatar, Button, TextField } from '@mui/material'; // Assuming you are using Material-UI
import { ArrowDownward, Comment } from '@mui/icons-material'; // Assuming you are using Material-UI icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Answer } from '@/types/answer.interface';
import { downvoteAnswer, fetchAnswer, fetchAnswerStatus, postComment, upvoteAnswer } from "./answer-actions";
import UserCard from './UserCard';
import { useAuth } from '@/context/session';
import CommentCard from './CommentCard';
import { useRouter } from 'next/navigation';
import SendIcon from '@mui/icons-material/Send';


const AnswerCard = ({ id }: { id: string }) => {
    const [answer, setAnswer] = useState<Answer>();
    const [status, setStatus] = useState<'none' | 'loading' | 'upvote' | 'downvote'>('none');
    const [comment, setComment] = useState<string>('');
    const { session } = useAuth();
    const router = useRouter();
    useEffect(() => {
        fetchAnswer({ answerId: id }).then((res) => {
            setAnswer(res.answer);
        });
        fetchAnswerStatus({ answerId: id, session }).then((res) => {
            setStatus(res.status);
        });
    }, [id, session]);

    if (!answer) return <div>Loading...</div>;

    return (
        <Container sx={{
            color: '#333',
            padding: '20px',
        }}>
            <Typography variant='h6'>{answer.content}</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <UserCard id={answer.user as string} />
                <Typography variant='body2' sx={{ ml: 1, color: 'blue' }}>
                    {new Date(answer.time).toLocaleString()}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <IconButton sx={{ color: 'green' }} onClick={() => {
                    upvoteAnswer({ answerId: id, session }).then((res) => {
                        router.refresh();
                    });
                }}>
                    <ArrowUpwardIcon fontSize='medium' />
                </IconButton>
                <Typography variant='body2'>{answer.upvotes.length - answer.downvotes.length}</Typography>
                <IconButton sx={{ color: 'red' }} onClick={() => {
                    downvoteAnswer({ answerId: id, session }).then((res) => {
                        router.refresh();
                    });
                }}>
                    <ArrowDownward fontSize='medium' />
                </IconButton>

                <div style={{ display: 'flex' }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Add a comment"
                        fullWidth
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        InputLabelProps={{ style: { color: '#0E131F' } }}
                        sx={{ mb: 1, mx: 1 }}
                    />
                    <Button variant="contained" sx={{ mb: 1, mx: 1 }}
                        onClick={() => {
                            postComment({
                                answerId: id,
                                comment_input: {
                                    content: comment
                                },
                                session
                            }).then((res) => {
                                router.refresh();
                            })
                        }}
                    ><SendIcon />
                    </Button>
                </div>
                <Typography variant='body2'>{answer.comments.length} Comments </Typography>
                {answer.comments.map((id) => (
                    <CommentCard key={String(id)} id={String(id)} />
                ))}
            </Box>

            <hr />

        </Container>
    );
};

export default AnswerCard;
