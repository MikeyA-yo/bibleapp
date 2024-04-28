import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getNKJV } from "./fetch";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    template: '%s | Bible',
    default: 'Bible', // a default is required when creating a template
  },
  description: "Read the word in the best way you can",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
