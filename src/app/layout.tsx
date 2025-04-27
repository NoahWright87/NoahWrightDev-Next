// "use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
// import Footer from "../components/Footer";
// import { Button } from "nwright-design";
// import { Button, Footer, Header } from "nwright-design";
import { Button, Footer, Header } from "@noahwright/design"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Noah Wright -- Software Engineer / Manager",
//   description: "Noah's developer portfolio, bio, and resume.",
// };

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
        <div className="min-h-screen flex flex-col">
          {/* <HeaderNav /> */}
          {/* <Header
            navItems={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          /> */}
          {/* <Button>Button test</Button> */}
          {/* <Button>Another Button</Button> */}
          <main className="flex-grow pt-16">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
