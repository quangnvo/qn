import './../styles/globals.css'
import 'animate.css';
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import NavBar from '@/components/main-nav'
import { ThemeProvider } from '@/components/theme-provider';


const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: "Ray | Web developer",
  description: "Portfolio of Ray, a web developer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-50 dark:bg-dark font-inter`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
