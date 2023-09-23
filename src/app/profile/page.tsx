"use client";

import { useAuth } from "@/context/session";
import { useState, useEffect } from "react";
import { fetchProfile } from "./action";
import Typography, { TypographyProps } from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import QuestionCard from "../../components/QuestionCard";
import { User } from '@/types/user.interface';
import { OrganizationBasic } from '@/types/organization.interface';
import { Divider, Stack, Skeleton } from '@mui/material';
import Image from 'next/image';
import Profile from "../../../public/profile.png"
import { useRouter } from "next/router";

export default function Page() {
    const { session } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState<User | null>(null);
    const [organization, setOrganization] = useState<OrganizationBasic | null>(null);
    useEffect(() => {
        fetchProfile(session).then(({ profile }) => {
            if (!profile) router.push("/login");
            else {
                setProfile({ ...profile, organization: profile.organization._id });
                setOrganization(profile.organization);
            }
        });
    }, [session, router]);

    if (!profile || !organization) {
        {
            const variants = [
                'h3',
                'h3',
                'h3',
                'h3',
            ] as readonly TypographyProps['variant'][];
            return (
                <>
                    <Grid container sx={{ display: "flex", flexDirection: "column", minHeight: "85vh" }}>
                        <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>

                            <div style={{ padding: "20px", borderRadius: 20 }}>
                                <Stack spacing={2}>
                                    <Skeleton variant="circular" animation="wave" width={200} height={200} />
                                </Stack>
                            </div>

                            <div style={{ display: "flex", marginLeft: "8vh", flexDirection: "column", padding: "20px" }}>
                                <Stack spacing={2}>
                                    <Skeleton variant="rounded" width={410} height={60} />
                                    <Skeleton variant="rounded" width={410} height={40} />
                                    <Skeleton variant="rounded" width={410} height={40} />
                                    <Skeleton variant="rounded" width={410} height={40} />
                                </Stack>
                            </div>

                        </div>

                        <Divider />

                        <div style={{ padding: "15px", marginLeft: "25px" }}>
                            <Stack spacing={2}>
                                <Skeleton variant="rounded" width={610} height={60} />
                                <Skeleton variant="rounded" width={610} height={40} />
                            </Stack>
                        </div>

                        <Divider />

                        <div style={{ padding: "15px", marginLeft: "25px" }}>
                            <Stack spacing={2}>
                                <Skeleton variant="rounded" width={410} height={60} />

                                {variants.map((variant, index) => (
                                    <Skeleton key={index} variant="rounded" width={1010} height={100} />
                                ))}


                            </Stack>
                        </div>

                    </Grid>
                </>);
        }
    }

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
                            sx={{ mt: 2, color: '#261f49' }}
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