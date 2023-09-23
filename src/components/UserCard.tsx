"use client";

import { useEffect, useState } from 'react';
import { Container, Typography } from "@mui/material";
import { UserBasic } from '@/types/user.interface';
import { fetchUser } from './action';

const UserCard = ({ id }: { id: string }) => {

    const [user, setUser] = useState<UserBasic>();
    useEffect(() => {
        fetchUser({ id }).then((data) => {
            setUser(data?.user);
        });
    }, [id]);

    if (!user) return <div>Loading...</div>;

    const { username, organization } = user;

    return (
        <Container sx={{ border: '1px solid white', my: 3, borderRadius: 2, bgcolor: '#12273f', color: '#fff' }}>
            <Typography variant="h6" sx={{ py: 1 }}>{username}</Typography>
            <Typography variant="h5">{organization.name}</Typography>
        </Container>
    );
};

export default UserCard;
