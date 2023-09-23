"use client";

import React from 'react';
import { Container, Typography, Divider } from "@mui/material";

const CommentCard = ({ id }: { id: string }) => {
    const content = "Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda Fook Linda ";
    const user = "User";

    return (
        <div style={{
            width: '100%',
            color: '#22b',
            // my: 3,
            borderRadius: 2,
            padding: "10px",
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "10px" }}>
                <Typography variant="h6" sx={{ flex: 1 }}>{content}</Typography>
                <Typography variant="h6" sx={{ ml: 4 }}>{user}</Typography>
            </div>
            <Divider/> {/* Add a divider */}
        </div>
    );
};

export default CommentCard;
