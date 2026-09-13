import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.FAITH Whitepaper — Fan-Belohnungen von Dawid Faith",
  description: "D.FAITH belohnt Fans direkt für ihre Unterstützung auf Social Media mit einem eigenen Token auf Solana.",
  keywords: "D.FAITH, Solana, Fan-Engagement, Token, Dawid Faith, Quests",
  openGraph: {
    title: "D.FAITH Whitepaper",
    description: "Ein Fan-Belohnungssystem auf der Blockchain — von Dawid Faith, für seine Fans.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
