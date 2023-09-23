"use client";

import React from 'react';
import { useAuth } from "@/context/session";
import { User } from "@/types/user.interface";
import { useState, useEffect } from "react";
import { fetchProfile } from "./action";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

export default function Page() {
    const { session } = useAuth();
    const [profile, setProfile] = useState<any>(null);
    useEffect(() => {
        fetchProfile(session).then(({ user }) => {
            setProfile(user);
        });
    }, [session]);
    if(!profile) return (<h1>loading...</h1>);
 
    return (
        <>
            {/* <h1>User</h1> */}
            {/* <p>{JSON.stringify(profile)}</p> */}
            <Typography variant="h2" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Name : {profile.first_name} {profile.last_name}
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Email : {profile.email} 
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                username : {profile.username} 
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                bio : {profile.bio}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Organization : {profile.organization.name}
                <Typography variant="h5" gutterBottom>{profile.organization.description}</Typography>
            </Typography>
            <Container>
            <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Questions
            </Typography>
            {data.map((item: { user: string; question: string; body: string; tags: string[]; upvotes: number; downvotes: number; comments: string[]; answers: string[]; }, index: React.Key | null | undefined) => (
                <QuestionCard key={index} id={item} />
            ))}
        </Container>
        </>
    );
}

// {"_id":"650e0fa936a67e17f06ed0e5","email":"202101484@daiict.ac.in","username":"Gor","first_name":"Gor","last_name":"H. Lamiro","password":"$2b$10$27YmoSsofe42ns2nxBpc5uJBjWEbzKntCCWJoZn/kJWu90gM6ZlUi","bio":"I am a Gor, I do Gor","organization":{"_id":"650e0ed236a67e17f06ed0cd","name":"daiict","description":"We are a new organization"},"questions":[],"answers":[],"upvote":0,"registered":"2023-09-22T22:05:29.567Z","__v":0}