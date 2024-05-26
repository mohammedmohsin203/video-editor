import './globals.css'
import type { Metadata } from 'next'
import '@mantine/core/styles.css';
import {  MantineProvider } from '@mantine/core';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Video Editor',
  description: 'Created by Fazil & Irfan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MantineProvider>{children}
      </MantineProvider>
      </body>
    </html>
  )
}
