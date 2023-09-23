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
            color: '#22b',
            // my: 3,
            borderRadius: 2,
            padding: "10px",
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "10px" }}>
                <Typography variant="h6" sx={{ flex: 1 }}>{comment.content}</Typography>
                <Typography variant="h6" sx={{ ml: 4 }}>{new Date(comment.time).toLocaleTimeString()}</Typography>
                <UserCard id={comment.user as string} />
            </div>
            <Divider />
        </div>
    );
};

export default CommentCard;
