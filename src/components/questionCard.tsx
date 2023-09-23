"user client"

import React from 'react';
import { Container, Typography } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface QuestionCardProps {
    id: {
        user: string;
        question: string;
        body: string;
        tags: string[];
        upvotes: number;
        downvotes: number;
        comments: string[];
        answers: string[];
    };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ id }) => {
    const { question, upvotes, downvotes, user, tags } = id;

    return (
        <Container sx={{ color: '#22b', bgcolor: 'yellow', my: 3, borderRadius: 2,
        boxShadow: 3, padding: "10px"
        
        }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', minWidth: "19vh", justifyContent: "center", flexDirection: "column", padding: "10px" }}>
                    <div>
                        <Typography variant="h6" sx={{  }}>{upvotes - downvotes} votes</Typography>
                    </div>
                    <div>

                        <Typography variant="h6" sx={{ }}>{id.answers.length} answers</Typography>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                <Typography variant="h5" sx={{  }}>{question}</Typography>
                <div style={{ fontSize: '1.5rem', display: 'flex', justifyContent: "start" }}>
                {id && id.tags && id.tags.map((tag, tagIndex) => (
                    
                    
                    <Typography variant="subtitle1" sx={{ color: 'red', mr: 1 }}>{tag}</Typography>
                ))}
            </div>
                </div>
            </div>

        
            
            <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'flex-end', padding: "10px" }}>
                {user}
            </Typography>
        </Container>
    );
};

export default QuestionCard;
