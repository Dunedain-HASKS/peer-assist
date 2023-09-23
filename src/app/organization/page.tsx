"use client";

import { Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchOrganization } from "./action";
import { useAuth } from "@/context/session";
import { Organization } from "@/types/organization.interface";
import UserCardComp from "@/components/UserCardComp";

export default function Page() {
    const [organization, setOrganization] = useState<Organization>();
    const { session } = useAuth();
    const [error, setError] = useState("");
    useEffect(() => {
        fetchOrganization({ session }).then(({ organization, message }) => {
            if(!organization) setError(message);
            else setOrganization(organization);
        });
    }, [session]);
    if (!organization) return <div>Loading...</div>;
    return (
        <>
            <Typography variant="h2" sx={{ textAlign:'center', py: 1, color: "red" }}> {organization.name}</Typography>
            <Typography variant="h4" sx={{ py: 1, color: "red",textAlign:'center' }}> {organization.domain}</Typography>
            <Typography variant="h5" sx={{ py: 1, color: "red",textAlign:'center' }}> {organization.description}</Typography>
            <Divider sx={{mb:2}}/>
            <div style={{ paddingBottom: 5, fontSize: '1.5rem' }}>
                {
                    organization.users.map((user) => (
                        <Typography key={user as string}>
                            <UserCardComp id={user as string} />
                        </Typography>
                    ))
                }
            </div>
        </>
    );
}

