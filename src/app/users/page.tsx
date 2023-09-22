"use client";

import { Container, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import UserCard from '@/components/UserCard';

const data = [
    {
        username: 'user1',
        organization: 'org1'
    },
    {
        username: 'user2',
        organization: 'org1'
    },
    {
        username: 'user3',
        organization: 'org2'
    },
    {
        username: 'user4',
        organization: 'org3'
    },
];

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log('searching')
    }

    return (
        <>
            <Container maxWidth="md" sx={{ }}>
                <TextField  type="search" id="search" label="Search" sx={{ width: 600 }} onChange={handleInputChange} />
                <Button variant="contained" onClick={handleSearch}>
                    Search
                </Button>
            </Container>
            <h1>Users</h1>
            {data.map((item, index) => (
                <UserCard key={index} id={item} />
            ))}
        </>
    );
}

