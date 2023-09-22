"use client";


import React from 'react';
import { Container, Typography } from "@mui/material";
import QuestionCard from "../../components/questionCard";

const data = [
  {
    user: 'user1',
    question: 'question1',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user2',
    question: 'question2',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user3',
    question: 'question3',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user4',
    question: 'question4',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user5',
    question: 'question5',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user6',
    question: 'question6',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
  {
    user: 'user7',
    question: 'question7',
    answers: { answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
  },
];

const Page: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Questions
      </Typography>
      {data.map((item, index) => (
        <QuestionCard key={index} id={item} />
      ))}
    </Container>
  );
};

export default Page;