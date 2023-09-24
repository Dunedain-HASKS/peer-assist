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
import HeaderImage from "../../public/headerNoBG.png";
import Image from "next/image";
import { Box } from "@mui/material";

export default function Header() {
    const { session } = useAuth();
    const [id, setId] = useState("");
    useEffect(() => {
        verifyAction(session).then((res) => {
            if (!res.id) setId("");
            else setId(res.id);
        });
    }, [session]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Hamburger />
                <Box sx={{ flexGrow: 1 }} >
                    <Image src={HeaderImage} alt="header" width={200} height={60} />
                </Box>
                <Button color="inherit" href="/about-us" >About Us</Button>
                {id &&
                    (
                        <div style={{ display: "flex", gap: "2vh", alignItems: "center", marginLeft: "1vh" }}>
                            <UserCard id={id} />
                        </div>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}