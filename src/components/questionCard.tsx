"use client";

import { useState, useEffect } from 'react';
import { Container, Typography } from "@mui/material";
import { QuestionBasic } from '@/types/question.interface';
import { fetchQuestion } from './action';

const QuestionCard = ({ id }
    : { id: string }) => {
    const [question, setQuestion] = useState<QuestionBasic | null>(null);

    useEffect(() => {
        fetchQuestion({ id }).then((data) => {
            setQuestion(data.question);
        });
    }, [id]);

    if (!question) {
        return <div>Loading...</div>;
    };

    return (
        <Container sx={{
            color: '#22b', bgcolor: 'yellow', my: 3, borderRadius: 2,
            boxShadow: 3, padding: "10px"

        }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', minWidth: "19vh", justifyContent: "center", flexDirection: "column", padding: "10px" }}>
                    <div>
                        <Typography variant="h6" sx={{}}>{question.balance} votes</Typography>
                    </div>
                    <div>

                        <Typography variant="h6" sx={{}}>{question.answers} answers</Typography>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                    <Typography variant="h5" sx={{}}>{question.title}</Typography>
                </div>
            </div>
            <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'flex-end', padding: "10px" }}>
                {question.user.username}
            </Typography>
        </Container>
    );
};

export default QuestionCard;
