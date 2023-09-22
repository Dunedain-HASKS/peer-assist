"use client";

import { Container, Typography } from "@mui/material";

const data = [
    {
        users: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'],
        name: 'Organization A',
        description: 'This is Organization A',
        domain: 'orga.com',
      },
      {
        users: ['user4', 'user5'],
        name: 'Organization B',
        description: 'This is Organization B',
        domain: 'orgb.com',
      },
      {
        users: ['user6'],
        name: 'Organization C',
        description: 'This is Organization C',
        domain: 'orgc.com',
      },
      {
        users: ['user7', 'user8', 'user9'],
        name: 'Organization D',
        description: 'This is Organization D',
        domain: 'orgd.com',
      },
      {
        users: ['user10'],
        name: 'Organization E',
        description: 'This is Organization E',
        domain: 'orge.com',
      },
];

export default function Page() {
    return (
        <>
            <Typography variant="h2" sx={{ py: 1 , color: "red"}}>Name: {data[0].name}</Typography>
            <Typography variant="h4" sx={{ py: 1 , color: "red"}}>Domain: {data[0].domain}</Typography>
            <Typography variant="h5" sx={{ py: 1 , color: "red"}}>Description: {data[0].description}</Typography>
            <ul style={{ paddingBottom: 5, fontSize: '1.5rem' }}>
                {data[0].users.map((user, userIndex) => (
                    <li key={userIndex}>
                        <Typography variant="subtitle1" sx={{ color: '#ccc' }}>{user}:</Typography>
                    </li>
                ))}
            </ul>

        </>
  );
}

