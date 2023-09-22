"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const primaryColor = '#c4ddf3'; // Your primary color
const secondaryColor = '#4a3a99'; // Your secondary color

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: '#1a4772',
            dark: '#12273f',
        },
        secondary: {
            main: secondaryColor,
            light: '#7a6fe5',
            dark: '#261f47',
        },
        background: {
            default: '#1f2732', // Dark background color
            paper: '#303140', // Dark background color for paper
        },
        text: {
            primary: '#f5f7fa', // Light text color
            secondary: '#1f2732', // Dark text color
            disabled: '#476682',
        }
    },

    typography: {
        h1: {
            fontFamily: 'inter',
            fontWeight: 700,
            fontSize: '7rem',
        },
        h2: {
            fontFamily: 'inter',
            fontWeight: 600,
            fontSize: '5rem',
        },
        h3: {
            fontFamily: 'inter',
            fontWeight: 500,
            fontSize: '4rem',
        },
        h4: {
            fontFamily: 'inter',
            fontWeight: 400,
            fontSize: '3rem',
        },
        h5: {
            fontFamily: 'inter',
            fontWeight: 500,
            fontSize: '2rem',
        },
        h6: {
            fontFamily: 'inter',
            fontWeight: 400,
            fontSize: '1rem',
        },
        body1: {
            fontFamily: 'inter',
            fontWeight: 300,
            fontSize: '0.8rem',
        },
        body2: {
            fontFamily: 'inter',
            fontWeight: 300,
            fontSize: '0.8rem',
        },
        button: {
            fontFamily: 'inter',
            fontWeight: 500,
            fontSize: '1rem',
        },
        caption: {
            fontFamily: 'inter',
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