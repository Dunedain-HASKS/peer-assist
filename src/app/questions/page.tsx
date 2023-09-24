"use client";

import React, { useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import QuestionCard from "../../components/QuestionCard";
import fetchQuestions from "./action";
import Link from "next/link";
import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setSearchQuery("");
    }, []);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["questions", { searchQuery }],
        queryFn: () =>
            fetchQuestions({ query: searchQuery, pageNumber: pageNumber }),
        getNextPageParam: (lastPage, pages) => {
            return lastPage.questions.length === 8 ? pages.length : false;
        },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div style={{ minHeight: "90vh" }}>
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
                    label="Search for a question"
                    sx={{ width: 600 }}
                    onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "#0e131f" } }}
                />
                <div style={{}}>
                    {isFetching && <CircularProgress sx={{ ml: 2 }} />}
                </div>
            </Container>
            <h1 style={{ textAlign: "center" }}>Questions</h1>
            {isLoading && <Skeleton variant="rectangular" height={600} />}
            {isError && (
                <Typography variant="h2" color="error">
                    {" "}
                    Error: {(error as { message: string }).message}
                </Typography>
            )}
            {data &&
                data.pages.map((page) =>
                    page.questions.map((question, i) => (
                        <QuestionCard key={i} id={question} />
                    ))
                )}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "30px 2px",
                }}
            >
                <Button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    variant="contained"
                >
                    {isFetchingNextPage ? (
                        <Typography variant="h5" color="info.main">
                            Loading more...
                        </Typography>
                    ) : hasNextPage ? (
                        <Typography variant="h5">Load More</Typography>
                    ) : (
                        <Typography variant="h5">Nothing more to load</Typography>
                    )}
                </Button>
            </div>
        </div>
    );
}
