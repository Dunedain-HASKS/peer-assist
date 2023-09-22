"user client"

import React from 'react';
import { Container, Typography } from "@mui/material";

interface QuestionCardProps {
    id: {
        user: string;
        question: string;
        answers: Record<string, string>;
    };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ id }) => {
    const { user, question, answers } = id;

    return (
        <Container sx={{ color: '#fff', bgcolor:'#303140', my: 3,border: '1px white solid', borderRadius:2 }}>
            <Typography variant="h6" sx={{ py: 1 }}>{user}</Typography>
            <Typography variant="h5" sx={{ mb: 0 }}>{question}</Typography>
            <Typography variant="h6">Answers:</Typography>
            <ul style={{ paddingBottom: 5, fontSize: '1.5rem' }}>
                {Object.entries(answers).map(([username, answer], answerIndex) => (
                    <li key={answerIndex}>
                        <Typography variant="subtitle1" sx={{ color: '#ccc' }}>{username}:</Typography>
                        {answer}
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default QuestionCard;
