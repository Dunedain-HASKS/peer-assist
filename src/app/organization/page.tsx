"use client";

import { Container, Divider, Skeleton, Typography, Box } from "@mui/material";
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
    if (!organization) return (
        <>
          <Box sx={{ width: 1400 }}>
            <Skeleton sx={{ height: 200 }} />
            <Skeleton animation="wave" sx={{ height: 200 }} />
            <Skeleton animation={false} sx={{ height: 200 }} />
          </Box>
        </>
      );
    return (
        <div style={{minHeight:'90vh'}}>
            <Typography variant="h2" sx={{ textAlign:'center', py: 1, color: "#12273f" }}> {organization.name}</Typography>
            <Typography variant="h4" sx={{ py: 1, color: "#12273f",textAlign:'center' }}> {organization.domain}</Typography>
            <Typography variant="h5" sx={{ py: 1, color: "#12273f",textAlign:'center' }}> {organization.description}</Typography>
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
        </div>
    );
}

