"use client";

import { Container, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';
import { fetchUsers } from "./action";


export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers({ query: "" }).then((data) => {
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
            <Container maxWidth="md" sx={{ my: 3 }}>
                <TextField type="search"
                    id="search"
                    label="Search for a user"
                    sx={{ width: 600 }}
                    InputLabelProps={{ style: { color: '#0E131F' } }}
                    onChange={handleInputChange}
                />
                <Button variant="contained" sx={{ height: 50, mx: 3 }} onClick={handleSearch}>
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

