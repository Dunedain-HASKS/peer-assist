"use client";

import { useState, useEffect } from 'react';
import { Container, Typography } from "@mui/material";
import { QuestionBasic } from '@/types/question.interface';
import { fetchQuestion } from './action';
import { RoundedCorner } from '@mui/icons-material';

const QuestionCard = ({ id }
    : { id: string }) => {
    const [question, setQuestion] = useState<QuestionBasic | null>(null);

    useEffect(() => {
        fetchQuestion({ questionId: id }).then((data) => {
            setQuestion(data.question);
        });
    }, [id]);

    if (!question) {
        return <div>Loading...</div>;
    };

    return (
        <Container sx={{
            color: 'black', bgcolor: '#ffffff', my: 3, borderRadius: 2,
            boxShadow: 3, padding: "10px"

        }}>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', minWidth: "25vh", justifyContent: "center", flexDirection: "column", padding: "10px", alignItems: "center", gap: "6px" }}>
                    <div>
                        <Typography variant="h6" sx={{ color : '#930000'}}>{question.balance} votes</Typography>
                    </div>
                    <div>
                        { question.verified === "true" ? <Typography variant="h6" sx={{ bgcolor: '#01620a', color: 'white', padding: '0px 5px', borderRadius: '5px'}}>✓ {question.answers} answers</Typography> 
                        : question.answers==0 ? <Typography variant="h6" sx={{ padding: '0px 17px'}}>{question.answers} answers</Typography>
                        : <Typography variant="h6" sx={{ border:'1px solid #01620a', padding: '0px 16px', borderRadius: '5px'}}>{question.answers} answers</Typography> }

                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                    <Typography variant="h5" sx={{}}>{question.title}</Typography>
                </div>
            </div>
            <Typography variant='h6' sx={{ color: '#22b', display: 'flex', justifyContent: 'flex-end', padding: "10px" }}>
                - {question.user.username}
            </Typography>
        </Container>
    );
};

export default QuestionCard;
