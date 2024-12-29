import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageContextProvider } from "@/context/languageContext";
import MainHeader from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonidas Services",
  description: "Your all in one platform for design, printing and publishing, made in Puerto Rico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <html lang="en" className="bg-gray-900 text-gray-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageContextProvider>
          <MainHeader />
          {children}
          <Footer />
        </LanguageContextProvider>
      </body>
    </html>
    </>
  );
}
