"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hamburger from '@/components/Hamburger';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Hamburger />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Peer Assist
                </Typography>
                <Button color="inherit">Contact Us</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
}