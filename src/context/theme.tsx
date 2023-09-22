"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#c4ddf3',
            light: '#1a4772',
            dark: '#12273f',
        },
        secondary: {
            main: '#4a3a99',
            light: '#7a6fe5',
            dark: '#261f47',
        },
        error: {
            main: '#ff5757aa',
            light: '#ffa0a0aa',
            dark: '#841818aa',
        },
        warning: {
            main: '#fc4d13aa',
            light: '#fe7339aa',
            dark: '#480707aa',
        },
        info: {
            main: '#7162f2aa',
            light: '#6245e6aa',
            dark: '#2c2b36aa',
        },
        success: {
            main: '#c5e600aa',
            light: '#99b800aa',
            dark: '#303140aa',
        },
        background: {
            default: '#f6f0f9aa',
            paper: '#303140aa',
        },
        text: {
            primary: '#1f2732',
            secondary: '#f5f7fa',
            disabled: '#476682',
        }
    },

    typography: {
        h1: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 700,
            fontSize: '7rem',
        },
        h2: {
            fontFamily: 'Cinzel Prompt, serif',
            fontWeight: 600,
            fontSize: '5rem',
        },
        h3: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 500,
            fontSize: '4rem',
        },
        h4: {
            fontFamily: 'Cinzel Prompt, serif',
            fontWeight: 400,
            fontSize: '3rem',
        },
        h5: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 500,
            fontSize: '2rem',
        },
        h6: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
        },
        body1: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
        },
        body2: {
            fontFamily: 'Cinzel Prompt, serif',
            fontWeight: 300,
            fontSize: '0.8rem',
        },
        button: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
        },
        caption: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 400,
            fontSize: '0.8rem',
        },
    }
});


export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    // TODO: Add theme switcher
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};