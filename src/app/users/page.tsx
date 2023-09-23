"use client";

import { Container, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import UserCardComp from '@/components/UserCardComp';
import { fetchUsers } from "./action";
import Link from "next/link";


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
        <Container
          maxWidth="md"
          sx={{
            my: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="search"
            id="search"
            label="Search for a user"
            sx={{ width: 600 }}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: "#0e131f" } }}
          />
          <Button
            variant="contained"
            sx={{ height: 50, mx: 3 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Container>
        <h1 style={{ textAlign: "center" }}>Users</h1>
        {loading && <div>Loading...</div>}
        {data.map((id) => (
          <Link
            key={id}
            href={`/users/${id}`}
            style={{ textDecoration: "none" }}
          >
            <UserCardComp key={id} id={id} />
          </Link>
        ))}
      </>
    );
}

