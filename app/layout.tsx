import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from './sections/Header'
import Footer from './sections/Footer'

const inter = Inter({ subsets: ['latin'] })

// The metadata object is still useful for SEO and other things
export const metadata: Metadata = {
  title: 'Zeus - Web3 Deployment Assistant',
  description: 'A powerful assistant for deploying Web3 applications with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add this line to manually link your favicon */}
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
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
