import './../styles/globals.css'
import 'animate.css';
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import NavBar from '@/components/main-nav'
import { ThemeProvider } from '@/components/theme-provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Quang | Front-end developer",
  description: "Portfolio of Quang Nguyen, a front end developer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-dark`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
