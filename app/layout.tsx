import './globals.css'
import type { Metadata } from 'next'
import { IM_Fell_DW_Pica } from 'next/font/google'

const imfell = IM_Fell_DW_Pica({ style: ['italic', 'normal'], weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={imfell.className}>{children}</body>
    </html>
  )
}
