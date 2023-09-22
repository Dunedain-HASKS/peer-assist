"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer(){
    return (
        <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} peerAssist. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
    );
}