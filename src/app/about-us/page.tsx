"use client";

// About us page

import { Box } from "@mui/system";
import Image from "next/image";
import Anuj from "../../../public/Anuj.jpeg";
import Harshal from "../../../public/Harshal.jpg";
import Keyur from "../../../public/Keyur.jpeg";
import Sahil from "../../../public/Sahil.jpeg";
import Soham from "../../../public/Soham.jpeg";
import { Container, Typography, Grid, Card, CardContent, Button, makeStyles } from '@mui/material';
import { Email } from '@mui/icons-material';

export default function AboutUs() {

    const teamMembers = [
        {
          name: 'Anuj Contractor',
          role: 'Frontend Developer',
          description: 'We develop what we see.',
          email: 'anu82441@gmail.com',
          linkedinUrl: 'https://www.linkedin.com/in/anuj-contractor-60bb3222a/',
        },
        {
          name: 'Sahil Lakdawala',
          role: 'Frontend Developer',
          description: 'We develop what we see.',
          email: 'sahillakdawala1109@gmail.com',
          linkedinUrl: 'https://www.linkedin.com/in/sahil-h-lakdawala-816318260/',
        },
        {
          name: 'Keyur Govrani',
          role: 'Frontend Developer',
          description: 'We develop what we see.',
          email: 'keyurgovrani6912@gmail.com',
          linkedinUrl: 'https://www.linkedin.com/in/keyur-govrani-b94277237/',
        },
        {
          name: 'Harshal Patel',
          role: 'Backend Developer',
          description: 'We develop what we see.',
          email: 'harshal2804@gmail.com',
          linkedinUrl: 'https://www.linkedin.com/in/harshal-patel-0b61aa24b',
        },
        {
          name: 'Soham Viradiya',
          role: 'Backend Developer',
          description: 'We develop what we see.',
          email: 'sohamviradiya2003@gmail.com',
          linkedinUrl: 'https://www.linkedin.com/in/soham-viradiya-362635226/',
        },
      ];
    
      return (
        <Grid container style={{ marginTop: '1rem' }}>
            <div style={{display: "flex", justifyContent: "center", width: "500vh", textAlign: "center"}}>
                <Typography variant="h3" gutterBottom>
                        About Us
                </Typography>
            </div>
          <Grid container justifyContent="center" spacing={2}>
            {teamMembers.map((member, index) => (
              <Grid item key={index}>
                <Card style={{ width: '400px', margin: '1rem', color: "white", backgroundColor: "#232323" , border: "0.1rem solid black" }}>
                  <CardContent style={{ textAlign: 'center' }}>
                    <Image
                      src={
                        member.name === 'Anuj Contractor'
                          ? Anuj
                          : member.name === 'Sahil Lakdawala'
                          ? Sahil
                          : member.name === 'Keyur Govrani'
                          ? Keyur
                          : member.name === 'Harshal Patel'
                          ? Harshal
                          : Soham
                      }
                      alt={member.name}
                      width="175"
                      height="175"
                      style={{ borderRadius: '50%' }}
                    />
                    <Typography variant="h5" component="div" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {member.role}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {member.description}
                    </Typography>
                    <Typography variant="body2">
                      <Email style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                      {member.email}
                    </Typography>
                    <div style={{marginTop: "2vh"}}>
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={member.linkedinUrl}
                        target="_blank"
                      >
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
    );
}