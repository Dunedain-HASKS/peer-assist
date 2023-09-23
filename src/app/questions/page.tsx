"use client";

import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from "@mui/material";
import QuestionCard from "../../components/questionCard";
import fetchQuestions from './action';

export default function Page(){
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchQuestions({ query: ""}).then((data) => {
            data?.questions && setData(data.questions);
        });
    }, []);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        setLoading(true);
        fetchQuestions({ query: searchQuery }).then((data) => {
            data?.questions && setData(data.questions);
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
            <h1>Questions</h1>
            {loading && <div>Loading...</div>}
            {data.map((id) => (
                <QuestionCard key={id} id={id} />
            ))}
        </>
    );
};
