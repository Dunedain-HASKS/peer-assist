"user client"

import React from 'react';
import { Container, Typography } from "@mui/material";

interface UserCardProps {
  id: {
    username: string;
    organization: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ id }) => {
  const { username, organization } = id;

  return (
    <Container sx={{border:'1px solid white', my:3, borderRadius:2, bgcolor:'#12273f', color:'#fff'}}>
      <Typography variant="h6" sx={{py:1}}>{username}</Typography>
      <Typography variant="h5">{organization}</Typography>
    </Container>
  );
};

export default UserCard;
