"use client";

import React from 'react';
import { Container, Typography } from "@mui/material";
import QuestionCard from "../../components/questionCard";

const data = [
    {
        user: 'Alice',
        question: 'What inspired you to pursue your career in software engineering, and how has your journey been so far?',
        answers: {
            answer1: `I've always been fascinated by technology, and I decided to pursue a career in software engineering to be part of creating innovative solutions. My journey has been challenging yet rewarding. I've learned a lot and had the opportunity to work on exciting projects.`,
            answer2: `My interest in software engineering started during my college days when I took a programming course. Since then, I've been passionate about it. My journey has been a rollercoaster with many learning experiences, but I'm enjoying every bit of it.`,
            answer3: `I come from a family of engineers, so I was exposed to technology early on. This inspired me to pursue a career in software engineering. The journey has been a mix of hard work and exploration, but I'm grateful for the opportunities it has brought.`
        }
    },
    {
        user: 'Bob',
        question: 'If you could travel to any place in the world, where would you go and why?',
        answers: {
            answer1: `I've always dreamt of visiting the beautiful landscapes of New Zealand. The country's natural beauty and diverse geography are simply breathtaking, and I'd love to explore it.`,
            answer2: `Japan is on the top of my travel list. I'm fascinated by its rich culture, history, and modern technology. Experiencing the blend of tradition and innovation would be incredible.`,
            answer3: `I'd choose Italy. The art, architecture, and cuisine are captivating. Exploring the historic cities and indulging in delicious food would make for an unforgettable trip.`,
        }
    },
    {
        user: 'Charlie',
        question: 'What advice would you give to someone just starting their career in your field?',
        answers: {
            answer1: 'My advice would be to never stop learning. The tech industry evolves rapidly, so staying updated with new technologies and trends is crucial. Also, don\'t hesitate to ask for help and collaborate with others.',
            answer2: `Building a strong network is essential. Connect with professionals in your field, attend conferences, and join online communities. It's a great way to learn, grow, and find opportunities.`,
            answer3: 'Embrace challenges and setbacks as opportunities for growth. Don\'t be afraid to take on ambitious projects. The experience gained from tackling difficult tasks is invaluable in your career.'
        }
    },
    {
        user: 'Alice',
        question: 'What inspired you to pursue your career in software engineering, and how has your journey been so far?',
        answers: {
            answer1: `I've always been fascinated by technology, and I decided to pursue a career in software engineering to be part of creating innovative solutions. My journey has been challenging yet rewarding. I've learned a lot and had the opportunity to work on exciting projects.`,
            answer2: `My interest in software engineering started during my college days when I took a programming course. Since then, I've been passionate about it. My journey has been a rollercoaster with many learning experiences, but I'm enjoying every bit of it.`,
            answer3: `I come from a family of engineers, so I was exposed to technology early on. This inspired me to pursue a career in software engineering. The journey has been a mix of hard work and exploration, but I'm grateful for the opportunities it has brought.`
        }
    },
    {
        user: 'Bob',
        question: 'If you could travel to any place in the world, where would you go and why?',
        answers: {
            answer1: `I've always dreamt of visiting the beautiful landscapes of New Zealand. The country's natural beauty and diverse geography are simply breathtaking, and I'd love to explore it.`,
            answer2: `Japan is on the top of my travel list. I'm fascinated by its rich culture, history, and modern technology. Experiencing the blend of tradition and innovation would be incredible.`,
            answer3: `I'd choose Italy. The art, architecture, and cuisine are captivating. Exploring the historic cities and indulging in delicious food would make for an unforgettable trip.`,
        }
    },
    {
        user: 'Charlie',
        question: 'What advice would you give to someone just starting their career in your field?',
        answers: {
            answer1: 'My advice would be to never stop learning. The tech industry evolves rapidly, so staying updated with new technologies and trends is crucial. Also, don\'t hesitate to ask for help and collaborate with others.',
            answer2: `Building a strong network is essential. Connect with professionals in your field, attend conferences, and join online communities. It's a great way to learn, grow, and find opportunities.`,
            answer3: 'Embrace challenges and setbacks as opportunities for growth. Don\'t be afraid to take on ambitious projects. The experience gained from tackling difficult tasks is invaluable in your career.'
        }
    }
];

//   export default data;


const Page: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color:'#261f49' }}>
                Questions
            </Typography>
            {data.map((item, index) => (
                <QuestionCard key={index} id={item} />
            ))}
        </Container>
    );
};

export default Page;