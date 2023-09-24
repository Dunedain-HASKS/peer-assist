"use client";

import { useEffect, useState } from 'react';
import { Container, Divider, Typography, Box, Skeleton } from "@mui/material";
import { UserBasic } from '@/types/user.interface';
import { fetchUser } from './action';
import Link from 'next/link';

const UserCardComp = ({ id }: { id: string }) => {

    const [user, setUser] = useState<UserBasic>();
    useEffect(() => {
        fetchUser({ userId: id }).then((data) => {
            setUser(data?.user);
        });
    }, [id]);

    if (!user) return (<>
        <Box sx={{ width: 1400 }}>
            <Skeleton sx={{ height: 60 }} />
            <Skeleton animation="wave" sx={{ height: 60 }} />
            <Skeleton animation={false} sx={{ height: 60 }} />
        </Box>
    </>
    );

    const { username, organization } = user;

    return (
        <>
            <div style={{ display: 'flex', margin: '0 3', borderRadius: 2, width: '100vw', color: 'black' }}>
                <Link href={`/users/${id}`}>
                    <Typography variant="h6" sx={{ py: 1, ml: '10vw' }}>{username}</Typography>
                </Link>
                <Typography variant="h5" sx={{ py: 1, ml: 'auto', mr: '10vw' }}>{organization.name}</Typography>
            </div>
            <Divider sx={{ mb: 2 }} />
        </>
    );
};

export default UserCardComp;
