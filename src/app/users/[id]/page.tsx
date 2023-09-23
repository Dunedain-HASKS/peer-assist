"use client";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import QuestionCard from '@/components/QuestionCard';
import { useEffect, useState } from 'react';
import { fetchUser } from './action';
import { User } from '@/types/user.interface';
import { OrganizationBasic } from '@/types/organization.interface';


export default function UserPage({ params }: { params: { id: string } }) {

    const [user, setUser] = useState<User | null>(null);
    const [organization, setOrganization] = useState<OrganizationBasic | null>(null);
    useEffect(() => {
        fetchUser({ id: params.id }).then(({ user }) => {
            setUser({ ...user, organization: user.organization._id });
            setOrganization(user.organization);
        });
    });

    if (!user || !organization) return (<h1>loading...</h1>);
    return (
        <>
            <Typography variant="h2" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Name : {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Email : {user.email}
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                username : {user.username}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                bio : {user.bio}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                Organization : {organization.name}
                <Typography variant="h5" gutterBottom>{organization.description}</Typography>
            </Typography>
            <Container>
                <Typography variant="h2" sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}>
                    Questions
                </Typography>
                {user.questions.map((id) => (
                    <QuestionCard key={String(id)} id={String(id)} />
                ))}
            </Container>
        </>
    );
}