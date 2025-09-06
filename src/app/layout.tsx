// Server Component

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
// Import client component wrappers instead of direct components
import { ButtonWrapper, FooterWrapper, HeaderWrapper } from "../components/ClientComponentWrapper";
import { EmotionCacheProvider } from "@/lib/emotion-cache";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Wright -- Software Engineer / Manager",
  description: "Noah's developer portfolio, bio, and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EmotionCacheProvider>
          <div className="min-h-screen flex flex-col">
            {/* <HeaderNav /> */}
            <HeaderWrapper
              navItems={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Principles", href: "/principles" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <ButtonWrapper>Button test</ButtonWrapper>
            <ButtonWrapper>Another Button</ButtonWrapper>
            <main className="flex-grow pt-16">{children}</main>
            <FooterWrapper />
          </div>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
