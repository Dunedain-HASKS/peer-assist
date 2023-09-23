
import React from 'react';
import { useAuth } from "@/context/session";
import { User } from "@/types/user.interface";
import { useState, useEffect } from "react";
// import { fetchProfile } from "./action";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import QuestionCard from '@/components/questionCard';


export default function Product({ params}: { params: { id: string }}) {


    return (
      <>
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