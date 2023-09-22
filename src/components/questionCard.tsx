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
    <Container sx={{border:'1px solid white', my:3, borderRadius:2, bgcolor:'#12273f', color:'#fff'}}>
      <Typography variant="h6" sx={{py:1}}>{user}</Typography>
      <Typography variant="h5">{question}</Typography>
      {/* <Typography variant="h6">Answers:</Typography> */}
      <ul style={{paddingBottom:5}}>
        {Object.values(answers).map((answer, answerIndex) => (
          <li key={answerIndex}>{answer}</li>
        ))}
      </ul>
    </Container>
  );
};

export default QuestionCard;
