import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | yep Linkshell Tracker",
    default: "yep Linkshell Tracker"
  },
  description: "Linkshell Tracker for yep by Meatclump.",
  icons: {
    icon: `/favicon.png`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
