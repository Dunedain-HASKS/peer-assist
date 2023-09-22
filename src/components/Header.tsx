"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    peerAssist
                </Typography>
                <Button color="inherit">Contact Us</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
}