"use client";

import React from 'react';
import { useAuth } from "@/context/session";
import { useState, useEffect } from "react";
import { fetchProfile } from "./action";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import QuestionCard from "../../components/QuestionCard";
import { User } from '@/types/user.interface';
import { OrganizationBasic } from '@/types/organization.interface';
import { Divider } from '@mui/material';

export default function Page() {
    const { session } = useAuth();
    const [profile, setProfile] = useState<User | null>(null);
    const [organization, setOrganization] = useState<OrganizationBasic | null>(null);
    useEffect(() => {
        fetchProfile(session).then(({ profile }) => {
            setProfile({ ...profile, organization: profile.organization._id });
            setOrganization(profile.organization);
        });
    }, [session]);
    if (!profile || !organization) return (<h1>loading...</h1>);

    return (
        <>
            <Grid container sx={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", alignItems: "center", padding: "20px"}}>

                    <div style={{padding: "20px", borderRadius: 20}}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="profile" width="200vh" />
                    </div>

                    <div style={{display: "flex", marginLeft: "8vh", flexDirection: "column", padding: "20px"}}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}
                        >
                            Name : {profile.first_name} {profile.last_name}
                        </Typography>
                        <Divider />
                        <Typography
                            variant="h5"
                            gutterBottom
                                sx={{ mt: 2, color: '#261f49' }}
                        >
                            Email : {profile.email}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ mt: 2, color: '#261f49' }}
                        >
                            Username : {profile.username}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ mt: 2, color: '#261f49' }}
                        >

                            Bio : {profile.bio}
                        </Typography>
                    </div>

                </div>
                
                <Divider />
                
                <div style={{padding: "15px", marginLeft: "25px"}}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mt: 2, color: '#261f49' }}
                    >
                        Organization : {organization.name}
                    </Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mt: 2, color: '#261f49' }}
                    >
                        Organization Bio : {organization.description}
                    </Typography>
                </div>

                <Divider />

                <div style={{padding: "15px", marginLeft: "25px"}}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ mt: 2, color: '#261f49' }}
                    >
                       {profile.questions.length} Questions
                    </Typography>
                    {profile.questions.map((id, index) => (
                        <QuestionCard key={String(id)} id={String(id)} />
                    ))}
                </div>

            </Grid>
        </>
    );
}

{/* <h1>User</h1> */}
            {/* <p>{JSON.stringify(profile)}</p> */}
            {/* <Typography variant="h2" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
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
                Organization : {organization.name}
            </Typography>
            <Typography variant="h5" gutterBottom>{organization.description}</Typography>
            <Container>
                <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                    Questions
                </Typography>
                {profile.questions.map((id) => (
                    <QuestionCard key={String(id)} id={String(id)} />
                ))}
            </Container> */}

// {"_id":"650e0fa936a67e17f06ed0e5","email":"202101484@daiict.ac.in","username":"Gor","first_name":"Gor","last_name":"H. Lamiro","password":"$2b$10$27YmoSsofe42ns2nxBpc5uJBjWEbzKntCCWJoZn/kJWu90gM6ZlUi","bio":"I am a Gor, I do Gor","organization":{"_id":"650e0ed236a67e17f06ed0cd","name":"daiict","description":"We are a new organization"},"questions":[],"answers":[],"upvote":0,"registered":"2023-09-22T22:05:29.567Z","__v":0}