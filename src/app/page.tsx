"use client";

import ThemeContextProvider from "@/context/theme";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Typography>
        Hello World
      </Typography>
      <Container>
        {/* test */}
        <Grid container>
          <Grid item xs={12}>
            <Typography>
              Hello World
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeContextProvider>   
  )
}
