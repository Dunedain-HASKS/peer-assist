import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ThemeContextProvider from '@/context/theme'
import { CssBaseline } from '@mui/material'

//font import 
import '@fontsource/inter'; // Make sure the import path is correct

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
