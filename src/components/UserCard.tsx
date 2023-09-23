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
        <div style={{ display:'flex', margin: '0 3', borderRadius: 2, color: '#fff', width:'100vw', color:'black' }}>
            <Typography variant="h6" sx={{ py: 1 , ml: 3}}>{username}</Typography>
            <Typography variant="h5" sx={{py:1, ml:'auto', mr:3}}>{organization.name}</Typography>
        </div>
        <Divider sx={{mb:2}}/>
        </>
    );
};

export default UserCard;
