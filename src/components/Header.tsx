"use client";

import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hamburger from '@/components/Hamburger';
import { useAuth } from '@/context/session';
import { verifyAction } from "@/context/action";
import UserCard from "./UserCard";
import HeaderImage from "../../public/header.png";
import Image from "next/image";

export default function Header() {
    const { session } = useAuth();
    const [id, setId] = useState("");

    useEffect(() => {
        verifyAction(session).then((res) => {
            if (!res.id) return;
            else setId(res.id);
        });
    }, [session]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Hamburger />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Image src={HeaderImage} alt="header" width={200} height={60} />
                </Typography>
                {id &&
                    (
                        <div style={{ display: "flex", gap: "2vh", alignItems: "center" }}>
                            <UserCard id={id} />
                        </div>
                    )
                }
                <Button color="inherit">Contact Us</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
}