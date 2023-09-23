"use client";

import { Container, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';
import { fetchUsers } from "./action";


export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchUsers({ query: ""}).then((data) => {
            data?.users && setData(data.users);
        });
    }, []);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        setLoading(true);
        fetchUsers({ query: searchQuery }).then((data) => {
            data?.users && setData(data.users);
            setLoading(false);
        });
    }

    return (
        <>
            <Container maxWidth="md" sx={{}}>
                <TextField type="search" id="search" label="Search" sx={{ width: 600 }} onChange={handleInputChange} />
                <Button variant="contained" onClick={handleSearch}>
                    Search
                </Button>
            </Container>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            {data.map((id) => (
                <UserCard key={id} id={id} />
            ))}
        </>
    );
}

