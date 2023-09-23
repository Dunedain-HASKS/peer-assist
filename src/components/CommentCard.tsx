"use client";

import React, { useEffect, useState } from 'react';
import { Container, Typography, Divider } from "@mui/material";
import { Comment } from '@/types/comment.interface';
import { fetchComment } from './action';
import UserCard from './UserCard';

const CommentCard = ({ id }: { id: string }) => {
    const [comment, setComment] = useState<Comment>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchComment({ commentId: id }).then((res) => {
            setComment(res.comment);
            setLoading(false);
        });
    }, [id]);
    if (!comment) return <div>Loading...</div>;

    return (
        <div style={{
            width: '100%',
            color: '#0E131F',
            // my: 3,
            borderRadius: 2,
            padding: "10px",
        }}>
            <div style={{}}>
                <div>
                    <Typography variant="h6" sx={{ ml: 15, mr: 0 }}>{comment.content}</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography variant="body1" sx={{ ml: 'auto', color: 'blue' }}>{new Date(comment.time).toLocaleString()}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <UserCard id={comment.user as string} />
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default CommentCard;
