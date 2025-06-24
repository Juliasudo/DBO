import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from './sections/Header'
import Footer from './sections/Footer'

const inter = Inter({ subsets: ['latin'] })

// The 'metadata' object is the correct place to define the icon
export const metadata: Metadata = {
  title: 'Zeus - Web3 Deployment Assistant',
  description: 'A powerful assistant for deploying Web3 applications with ease.',
  icons: {
    icon: '/icon.ico', // This tells Next.js where to find the icon in the /public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // The manual <head> tag has been REMOVED from here
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
