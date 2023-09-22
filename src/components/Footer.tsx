"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer(){
    return (
        <AppBar position="absolute" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Peer Assist. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
    );
}