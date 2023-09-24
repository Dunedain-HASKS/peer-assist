"use client";

import ThemeContextProvider from "@/context/theme";
import { Button, Container, CssBaseline, Grid, Typography } from "@mui/material";
import styles from './page.module.css'
import Link from "next/link";
import { useAuth } from "@/context/session";


export default function Home() {
  const { session } = useAuth();
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ border: "8px", minHeight: "82.8vh", backgroundColor: "#99B2DD" }}
      >
        <Grid>
          <Typography
            variant="h1"
            sx={{
              // color: "white",
              fontFamily: "Source Code Pro",
              fontSize: "8rem",
            }}
            className={`${styles.colorChangeOnHover}`}
          >
            Peer Assist
          </Typography>
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ border: "2px", width: "100vh" }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
            className={`${styles.connectHover}`}
          >
            Connect.
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
            className={`${styles.exploreHover}`}
          >
            Explore.
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Source Code Pro" }}
            className={`${styles.illuminateHover}`}
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

        {!session.token && (<Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop="3rem"
        >


          <Link href="/login"><Button variant="contained" sx={{ marginRight: "2rem" }}>Login</Button></Link>
          <Link href="/register"><Button variant="contained">Signup</Button></Link>


        </Grid>)}
      </Grid>
    </>
  );
}
