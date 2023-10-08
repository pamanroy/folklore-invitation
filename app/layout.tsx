import './globals.css'
import type { Metadata } from 'next'
import { IM_Fell_DW_Pica } from 'next/font/google'

const imfell = IM_Fell_DW_Pica({ style: ['italic', 'normal'], weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Wedding of Naruto and Hinata',
  description: 'Naruto and Hinata is getting married!!!!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={imfell.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
