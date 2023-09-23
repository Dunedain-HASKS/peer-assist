"use client";

import React, { useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import QuestionCard from "../../components/QuestionCard";
import fetchQuestions from "./action";
import Link from "next/link";
import { Box } from '@mui/system';
import Skeleton from '@mui/material/Skeleton';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions({ query: "" }).then((data) => {
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
  };

  return (
    <>
    <div style={{minHeight: "79.5vh"}}>
      <Container maxWidth="md" sx={{my: 3, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <TextField
          type="search"
          id="search"
          label="Search for a topic"
          sx={{ width: 600 }}
          onChange={handleInputChange}
          InputLabelProps={{style: {color: "#0e131f"}}}
        />
        <Button variant="contained" sx={{height: 50, mx: 3}} onClick={handleSearch}>
          Search
        </Button>
      </Container>
      <h1 style={{textAlign: "center"}}>Questions</h1>
      {loading && <>
            <Box sx={{ width: 1400 }}>
            <Skeleton sx={{ height: 60 }}/>
            <Skeleton animation="wave" sx={{ height: 60 }} />
            <Skeleton animation={false} sx={{ height: 60 }}/>
          </Box>
            </>}
      {data.map((id) => (
        <Link key={id} href={`/questions/${id}`} style={{textDecoration: "none"}}>
            <QuestionCard key={id} id={id} />
        </Link>
      ))}
    </div>
    </>
  );
}
