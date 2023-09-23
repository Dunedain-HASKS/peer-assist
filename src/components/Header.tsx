"use client"

import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hamburger from '@/components/Hamburger';
import { useAuth } from '@/context/session';
import { verifyToken } from "@/server/services/auth.service";

export default function Header() {
    const { session } = useAuth();
    const [id, setId] = useState<string>("" as string);
    useEffect(() => {
       
    }, [session]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Hamburger />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Peer Assist
                </Typography>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {session.token}
                </Typography> */}
                <Button color="inherit">Contact Us</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
}