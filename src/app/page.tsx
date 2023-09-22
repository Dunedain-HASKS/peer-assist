"use client";

import ThemeContextProvider from "@/context/theme";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <h1>Hollaaaaaa</h1>
      <Container>
        {/* test */}
        <Grid container>
          <Grid item xs={12}>
            <Typography>
              Hello World !
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
