"use client";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import QuestionCard from '@/components/QuestionCard';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { fetchUser } from './action';
import { User } from '@/types/user.interface';
import { OrganizationBasic } from '@/types/organization.interface';
import { Divider, Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import Profile from "../../../../public/profile.png"



export default function UserPage({ params }: { params: { id: string } }) {

    const [user, setUser] = useState<User | null>(null);
    const [organization, setOrganization] = useState<OrganizationBasic | null>(null);
    useEffect(() => {
        fetchUser({ id: params.id }).then(({ user }) => {
            setUser({ ...user, organization: user.organization._id });
            setOrganization(user.organization);
        });
    });

    if (!user || !organization) return( <>
        <Box sx={{ width: 1400 }}>
        <Skeleton sx={{ height: 60 }}/>
        <Skeleton animation="wave" sx={{ height: 60 }} />
        <Skeleton animation={false} sx={{ height: 60 }}/>
      </Box>
        </>
        );
    return (
        <>

            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>

                    <div style={{ padding: "20px", borderRadius: 20 }}>
                    <Image
                            src={Profile}
                            alt="Profile"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div style={{ display: "flex", marginLeft: "8vh", flexDirection: "column", padding: "20px" }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ mt: 2, textAlign: 'center', color: '#261f49' }}
                        >
                            Name : {user.first_name} {user.last_name}
                        </Typography>
                        <Divider />
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ mt: 2, color: '#261f49' }}
                        >
                            Email : {user.email}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ mt: 2, color: '#261f49' }}
                        >
                            Username : {user.username}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ mt: 2, color: '#261f49' }}
                        >

                            Bio : {user.bio}
                        </Typography>
                    </div>

                </div>

                <Divider />

                <div style={{ padding: "15px", marginLeft: "25px" }}>
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

                <div style={{ padding: "15px", marginLeft: "25px" }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ mt: 2, color: '#261f49' }}
                    >
                        {user.questions.length} Questions
                    </Typography>
                    {user.questions.map((id, index) => (
                        <QuestionCard key={String(id)} id={String(id)} />
                    ))}
                </div>

            </Grid>
        </>
    );
}