"use client";

import React from 'react';
import { Container, Typography } from "@mui/material";
import QuestionCard from "../../components/questionCard";

const data = [
    {
        user: 'User1',
        question: 'How do you test a React component?',
        body: 'I am having trouble testing my React components. Can someone provide some guidance?',
        tags: ['React', 'Testing'],
        upvotes: 10,
        downvotes: 2,
        comments: [
            'You can use libraries like Jest and React Testing Library for testing React components.',
            'Here is an example of a test for a simple React component:',
        ],
        answers: [
            'First, install the necessary testing libraries using npm or yarn:',
            'Then, write test cases for your components using Jest:',
        ],
    },
    {
        user: 'User2',
        question: 'What are some best practices for responsive web design?',
        body: 'I want to make my website responsive to different screen sizes. Any tips for best practices in responsive web design?',
        tags: ['Web Design', 'Responsive Design'],
        upvotes: 8,
        downvotes: 1,
        comments: [
            'Responsive design is crucial for a great user experience. Some best practices include:',
            'You should also consider using CSS media queries to adjust the layout based on screen size:',
        ],
        answers: [
            '1. Use a mobile-first approach',
            '2. Use CSS flexbox or grid for layout',
        ],
    },
    {
        user: 'User3',
        question: 'How can I optimize my website for performance?',
        body: 'My website is loading slowly. What are some techniques to improve website performance?',
        tags: ['Web Performance', 'Optimization'],
        upvotes: 15,
        downvotes: 3,
        comments: [
            'Website performance optimization is essential for user satisfaction. Here are some tips:',
            'You should also consider using a content delivery network (CDN) to serve assets more efficiently:',
        ],
        answers: [
            '1. Minimize and compress JavaScript and CSS files',
            '2. Optimize images and use lazy loading',
        ],
    },
    // Add more test data as needed
];

//   export default data;


const Page: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Questions
            </Typography>
            {data.map((item, index) => (
                <QuestionCard key={index} id={item} />
            ))}
        </Container>
    );
};

export default Page;