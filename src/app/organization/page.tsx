"use client";

import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchOrganization } from "./action";
import { useAuth } from "@/context/session";
import { Organization } from "@/types/organization.interface";
import UserCard from "@/components/UserCard";

export default function Page() {
    const [organization, setOrganization] = useState<Organization>();
    const { session } = useAuth();
    useEffect(() => {
        fetchOrganization(session).then((data) => {
            setOrganization(data?.organization);
        });
    }, [session]);
    if (!organization) return <div>Loading...</div>;
    return (
        <>
            <Typography variant="h2" sx={{ py: 1, color: "red" }}>Name: {organization.name}</Typography>
            <Typography variant="h4" sx={{ py: 1, color: "red" }}>Domain: {organization.domain}</Typography>
            <Typography variant="h5" sx={{ py: 1, color: "red" }}>Description: {organization.description}</Typography>
            <ul style={{ paddingBottom: 5, fontSize: '1.5rem' }}>
                {
                    organization.users.map((user) => (
                        <li key={user as string}>
                            <UserCard id={user as string} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

