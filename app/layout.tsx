import type { Metadata } from "next";
import {Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ['400', '700'],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unicorn Kids",
  description: "Generated by abdurakhim",
  icons: {
    icon: "/altimage.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
