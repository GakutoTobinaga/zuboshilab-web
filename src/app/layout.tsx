import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zuboshi lab.',
  description: 'テクノロジーの力で社会課題を解決し、より良い未来を共に創造します。',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '.favicon-light.svg',
        href: '.favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'src/public/favicon-dark.svg',
        href: 'src/public/favicon-dark.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

