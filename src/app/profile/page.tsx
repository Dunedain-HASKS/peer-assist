"use client";

import { useAuth } from "@/context/session";
import { User } from "@/types/user.interface";
import { useState, useEffect } from "react";
import { fetchProfile } from "./action";
import Typography from '@mui/material/Typography';

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
            <h1>User</h1>
            <p>{JSON.stringify(profile)}</p>
            <Typography variant="h2" gutterBottom>
                Name : {profile.first_name} {profile.last_name}
            </Typography>
            <Typography variant="h3" gutterBottom>
                Email : {profile.email} 
            </Typography>
            <Typography variant="h3" gutterBottom>
                username : {profile.username} 
            </Typography>
            <Typography variant="h4" gutterBottom>
                bio : {profile.bio}
            </Typography>
            <Typography variant="h4" gutterBottom>
                Organization : {profile.organization.name}
                <Typography variant="h5" gutterBottom>{profile.organization.description}</Typography>
            </Typography>
            
        </>
    );
}

// {"_id":"650e0fa936a67e17f06ed0e5","email":"202101484@daiict.ac.in","username":"Gor","first_name":"Gor","last_name":"H. Lamiro","password":"$2b$10$27YmoSsofe42ns2nxBpc5uJBjWEbzKntCCWJoZn/kJWu90gM6ZlUi","bio":"I am a Gor, I do Gor","organization":{"_id":"650e0ed236a67e17f06ed0cd","name":"daiict","description":"We are a new organization"},"questions":[],"answers":[],"upvote":0,"registered":"2023-09-22T22:05:29.567Z","__v":0}