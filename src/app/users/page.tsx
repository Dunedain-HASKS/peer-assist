"use client";

import { Container, Skeleton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import UserCardComp from "@/components/UserCardComp";
import { fetchUsers } from "./action";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";

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
        queryKey: ["users", { searchQuery }],
        queryFn: () => fetchUsers({ query: searchQuery, pageNumber: pageNumber }),
        getNextPageParam: (lastPage, pages) => {
            return lastPage.users.length === 8 ? pages.length : false;
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
                    label="Search for a user"
                    sx={{ width: 600 }}
                    onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "#0e131f" } }}
                />
                <div style={{}}>
                    {isFetching && <CircularProgress sx={{ ml: 2 }} />}
                </div>
            </Container>
            <Typography variant="h2" style={{ textAlign: "center" }}>
                Users
            </Typography>
            {isLoading && <Skeleton variant="rectangular" height={600} />}
            {isError && (
                <Typography variant="h2" color="error">
                    {" "}
                    Error: {(error as { message: string }).message}
                </Typography>
            )}
            <div
                style={{
                    display: "flex",
                    margin: "0 3",
                    borderRadius: 2,
                    width: "100vw",
                    color: "black",
                }}
            >
                <Typography variant="h4" sx={{ ml: 4 }}>
                    Username
                </Typography>
                <Typography variant="h4" sx={{ py: 1, ml: "auto", mr: 4 }}>
                    Organisation
                </Typography>
            </div>
            <Divider />
            <Divider sx={{ mb: 2 }} />
            {data &&
                data.pages.map((page) =>
                    page.users.map((user, i) => (
                        <UserCardComp key={i} id={user} />
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
