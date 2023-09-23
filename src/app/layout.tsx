import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import ThemeContextProvider from "@/context/theme";
import { CssBaseline } from "@mui/material";

//font import
import "@fontsource/inter"; // Make sure the import path is correct
import SessionProvider from "@/context/session";
import { ReactQuery } from "@/context/client";

export const metadata: Metadata = {
  title: "Peer 👨‍🎓 Assist",
  description:
    "Peer Assist is a platform for students to ask questions and get answers from their peers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <ThemeContextProvider>
          <SessionProvider>
            <CssBaseline />
            <ReactQuery>
              {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}> */}
              <Header />
              {children}
              <Footer />
              {/* </div> */}
            </ReactQuery>
          </SessionProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
