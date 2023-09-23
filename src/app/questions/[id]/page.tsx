"use client";

import { useEffect, useState } from 'react';
import { Typography, Chip, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from '@mui/icons-material';
import { Button, TextField, Box, Skeleton } from '@mui/material';
import CommentCard from '@/components/CommentCard';
import SendIcon from '@mui/icons-material/Send';
import { Question } from '@/types/question.interface';
import { downvoteQuestion, fetchQuestionStatus, fetchThread, postComment, upvoteQuestion } from './action';
import AnswerCard from '@/components/AnswerCard';
import UserCard from '@/components/UserCard';
import { useAuth } from '@/context/session';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) {
    const { session } = useAuth();
    const router = useRouter();
    const [question, setQuestion] = useState<Question>();
    const [status, setStatus] = useState<'loading' | 'upvote' | 'downvote' | 'none'>('loading');
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        setQuestion(undefined);
        fetchThread({ questionId: params.id }).then((res) => {
            setQuestion(res.question);
        });
        fetchQuestionStatus({ questionId: params.id, session }).then((res) => {
            if (res.status) setStatus(res.status);
            else setStatus('none');
        });
    }, [params.id, session]);

    if (!question) return (<>
        <Box sx={{ width: 1400 }}>
            <Skeleton sx={{ height: 200 }} />
            <Skeleton animation="wave" sx={{ height: 200 }} />
            <Skeleton animation={false} sx={{ height: 200 }} />
        </Box>
    </>
    );

    return (
        <Paper elevation={3} sx={{ padding: 2, maxWidth: '100vw', margin: 'auto', bgcolor: 'inherit', minHeight: "83vh" }}>
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <div style={{ minWidth: 80, display: 'flex', justifyContent: 'center', flexDirection: 'column', marginRight: '20px' }}>
                    <Button variant="contained" sx={{ mb: 1, mx: 1 }} disabled={status === 'upvote'}
                        onClick={() => {
                            upvoteQuestion({ questionId: params.id, session }).then((res) => {
                                console.log("upvoted");
                                setQuestion(undefined);
                                fetchThread({ questionId: params.id }).then((res) => {
                                    setQuestion(res.question);
                                });
                                fetchQuestionStatus({ questionId: params.id, session }).then((res) => {
                                    if (res.status) setStatus(res.status);
                                    else setStatus('none');
                                });
                            });
                        }}
                    >
                        <ArrowUpwardIcon fontSize='large' />
                    </Button>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontSize: 'large', mb: 1 }}>{question.upvotes.length - question.downvotes.length}</Typography>
                    <Button variant="contained" sx={{ mb: 1, mx: 1 }} disabled={status === 'downvote'}
                        onClick={() => {
                            downvoteQuestion({ questionId: params.id, session }).then((res) => {
                                console.log("downvoted");
                                setQuestion(undefined);
                                fetchThread({ questionId: params.id }).then((res) => {
                                    setQuestion(res.question);
                                });
                                fetchQuestionStatus({ questionId: params.id, session }).then((res) => {
                                    if (res.status) setStatus(res.status);
                                    else setStatus('none');
                                });
                            });
                        }}
                    >
                        <ArrowDownward fontSize='large' />
                    </Button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: '100%' }}>
                    <div>
                        <Typography variant="h4">{question.title}</Typography>
                        <Typography variant="h6">{question.body}</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginTop: 20 }}>
                        <Typography variant="body2" sx={{ color: 'blue', ml: 'auto' }}>
                            {new Date(question.time).toLocaleString()}
                        </Typography>
                        <UserCard id={question.user as string} />
                    </div>
                </div>

            </div>
            <div>
                {question.tags.map((tag, index) => (
                    <Chip key={index} label={tag} sx={{ marginRight: 1, mb: 3 }} />
                ))}
            </div>
            <div>
                <Link href={`/questions/${params.id}/answer`} >
                    <Button sx={{ backgroundColor: '#0E131F', color: 'white', '&:hover': { backgroundColor: '#1f2732' } }}>
                        Add answer
                    </Button>
                </Link>
            </div>
            <Typography variant="h5" sx={{ my: 2, mt: 4, mb: 2, ml: 15 }}>Comments: {question.comments.length}</Typography>
            <div style={{ display: 'flex' }}>
                <TextField
                    id="outlined-multiline-static"
                    label="Add a comment"
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    InputLabelProps={{ style: { color: '#0E131F' } }}
                    sx={{ mb: 1, mx: 1, ml: 15, }}
                />
                <Button variant="contained" sx={{ mb: 1, mx: 1 }}
                    onClick={() => {
                        postComment({
                            questionId: params.id,
                            comment_input: {
                                content: comment
                            },
                            session
                        }).then((res) => {
                            setQuestion(undefined);
                            fetchThread({ questionId: params.id }).then((res) => {
                                setQuestion(res.question);
                            });
                            fetchQuestionStatus({ questionId: params.id, session }).then((res) => {
                                if (res.status) setStatus(res.status);
                                else setStatus('none');
                            });
                        })
                    }}
                ><SendIcon />
                </Button>
            </div>
            <div>
                {question.comments.map((id) => (
                    <CommentCard key={String(id)} id={String(id)} />
                ))}
                <Typography variant="h4" sx={{ my: 2, mt: 4, mb: 2 }}>Answers: {question.answers.length}</Typography>
                {question.answers.map((id) => (
                    <AnswerCard id={String(id)} key={String(id)} />
                ))}
            </div>
        </Paper>
    );
}
