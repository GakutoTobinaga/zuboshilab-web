import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zuboshi lab.',
  description: 'テクノロジーの力で社会課題を解決し、より良い未来を共に創造します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

