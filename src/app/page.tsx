"use client";

import ThemeContextProvider from "@/context/theme";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ border: "8px", minHeight: "84vh" }}
      >
        <Grid>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontFamily: "Source Code Pro",
              fontSize: "8rem",
            }}
          >
            Peer Assist
          </Typography>
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ border: "2px", width: "100vh"}}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
          >
            Connect.
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
          >
            Explore.
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
          >
            Illuminate.
          </Typography>
        </Grid>
        <Grid container justifyContent="center" marginTop="6rem" width="100vh">
          <Typography 
            variant="h4"
            sx={{ fontFamily: "Source Code Pro", textAlign: "center", fontSize: "2.2rem" }}
            className={`${styles.fadeInAnimation} ${styles.colorChangeOnHover}`}
          >
            Peer Assist is a platform for students to connect with each other
            and explore their interests.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
