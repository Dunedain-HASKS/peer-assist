"use client";

import React from 'react';
import { Container, Typography } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CommentCard = ({ id }: { id: string}) => {
    const content = "Fook Linda";
    const user = "User";
    return (
        <Container sx={{ color: '#22b', bgcolor: 'yellow', my: 3, borderRadius: 2,
        boxShadow: 3, padding: "10px"
        
        }}>
            <div style={{ display: 'flex' }}>
                <div style={{display: "flex", padding: "10px"}}>
                <Typography variant="h5" sx={{  }}>{content}</Typography>
                <Typography variant="h5" sx={{ ml:4 }}>{user}</Typography>
                </div>
            </div>

            {/* <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'flex-end', padding: "10px" }}>
                {user}
            </Typography> */}
        </Container>
    );
};

export default CommentCard;
