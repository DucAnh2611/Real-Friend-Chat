"use client";

import Providers from "@/lib/redux/Providers";
import { SocketProvider } from "../utils/useSocket";
import "./globals.css";
import { Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export default function RootLayout({children}) {

    return (
        <Providers>
            <html lang="en" className={`${fontSans.className}`}>
                <body>
                        <SocketProvider>{children}</SocketProvider>
                </body>
            </html>            
        </Providers>

    )
}