"use client";

import { useEffect, useState } from 'react';
import { Container, Divider, Typography } from "@mui/material";
import { UserBasic } from '@/types/user.interface';
import { fetchUser } from './action';

const UserCard = ({ id }: { id: string }) => {

    const [user, setUser] = useState<UserBasic>();
    useEffect(() => {
        fetchUser({ userId: id }).then((data) => {
            setUser(data?.user);
        });
    }, [id]);

    if (!user) return <div>Loading...</div>;

    const { username, organization } = user;

    return (
        <>
            <Typography variant="h6" sx={{ py: 0, ml:'auto' }}>{username}</Typography>
            <Typography variant="h6" sx={{ py: 0, ml:'auto' }}>{organization.name}</Typography>
        </>
    );
};

export default UserCard;
