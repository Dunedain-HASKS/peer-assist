import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, IconButton, Avatar, Button, TextField, Divider } from '@mui/material'; // Assuming you are using Material-UI
import { ArrowDownward, Comment } from '@mui/icons-material'; // Assuming you are using Material-UI icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Answer } from '@/types/answer.interface';
import { downvoteAnswer, fetchAnswer, fetchAnswerStatus, postComment, upvoteAnswer } from "./answer-actions";
import UserCard from './UserCard';
import { useAuth } from '@/context/session';
import CommentCard from './CommentCard';
import { useRouter } from 'next/navigation';
import SendIcon from '@mui/icons-material/Send';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


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
            if (!res.status) setStatus('none');
            else setStatus(res.status);
        });
    }, [id, session]);

    if (!answer) return (<>
        <Box sx={{ width: 1400 }}>
            <Skeleton sx={{ height: 190 }} />
            <Skeleton animation="wave" sx={{ height: 190 }} />
            <Skeleton animation={false} sx={{ height: 190 }} />
        </Box>
    </>
    );

    return (
        <Grid container sx={{
            color: '#333',
            padding: '20px',
        }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Button variant="contained" sx={{ mb: 1, mx: 1 }} disabled={status === 'upvote'} onClick={() => {
                        upvoteAnswer({ answerId: id, session }).then((res) => {
                            router.refresh();
                        });
                    }}>
                        <ArrowUpwardIcon fontSize='medium' />
                    </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mb: 1 }}>{answer.upvotes.length - answer.downvotes.length}</Typography>
                    <Button variant="contained" sx={{ mb: 1, mx: 1 }} disabled={status === 'downvote'} onClick={() => {
                        downvoteAnswer({ answerId: id, session }).then((res) => {
                            router.refresh();
                        });
                    }}>
                        <ArrowDownward fontSize='medium' />
                    </Button>
                </div>
                <Typography variant='h6'>{answer.content}</Typography>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 15 }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 2, marginBottom: 3 }}>
                    <Typography variant='body2' sx={{ color: 'blue', ml: 'auto' }}>
                        {new Date(answer.time).toLocaleString()}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <UserCard id={answer.user as string} />
                    </div>
                </div>
                <div style={{ minWidth: 80, display: 'flex', justifyContent: 'center', flexDirection: 'column', marginRight: '20px' }}>


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

                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5' }}>
                        {answer.comments.map((id) => (
                            <CommentCard key={String(id)} id={String(id)} />
                        ))}
                    </div>
                </div>
            </div>


            <Divider />

        </Grid>
    );
};

export default AnswerCard;
