"use client";

import { useEffect, useState } from 'react';
import { Container, Divider, Typography,Box, Skeleton } from "@mui/material";
import { UserBasic } from '@/types/user.interface';
import { fetchUser } from './action';
import Link from 'next/link';

const UserCard = ({ id }: { id: string }) => {
    const [user, setUser] = useState<UserBasic>();
    useEffect(() => {
        fetchUser({ userId: id }).then((data) => {
            setUser(data?.user);
            console.log("user", data?.user);
        });
    }, [id]);

    if (!user) return( <>
        <Box sx={{ width: 100 }}>
        <Skeleton sx={{ height: 20 }}/>
        <Skeleton animation="wave" sx={{ height: 20 }} />
        <Skeleton animation={false} sx={{ height: 20 }}/>
      </Box>
        </>
        );

    const { username, organization } = user;

    return (
        <>  
            <Link href={`/users/${id}`} style={{textDecoration: "none", marginLeft:'auto'}}>
                <Typography variant="h6" sx={{ py: 0, ml:'auto', fontSize: "medium", textDecoration: "none", color:'#de6b48', fontWeight:300 }}>{username}</Typography>
            </Link>
                <Typography variant="h6" sx={{ py: 0, ml:'auto' }}>{organization.name}</Typography>
        </>
    );
};

export default UserCard;