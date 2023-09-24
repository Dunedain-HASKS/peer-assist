"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const githubRepoLink = 'https://github.com/Dunedain-HASKS/peer-assist';

  return (
    <AppBar sx={{ top: 'auto', bottom: 0, position: 'inherit' }}>
      <Toolbar sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant="body1" color="inherit" sx={{textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Peer Assist. All rights reserved.
        </Typography>
        {/* Add the GitHub icon with a link */}
        <IconButton color="inherit" href={githubRepoLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
