import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indian Accounting Software",
  description: "GST-compliant accounting software for Indian businesses",
};

import Navigation from '@/components/Navigation';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Don't render Navigation on not-found page to avoid session issues
  const showNavigation = !pathname?.startsWith('/_not-found');
  
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {showNavigation && <Navigation />}
        {children}
      </body>
    </html>
  );
}
