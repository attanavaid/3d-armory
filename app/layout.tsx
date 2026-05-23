import type { Metadata } from "next";
import { Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fantasy Armory | 3D Weapon Gallery",
  description:
    "Interactive 3D armory showcasing fantasy weapons on rotating turntables with PBR materials.",
  openGraph: {
    title: "Fantasy Armory",
    description: "Browse fantasy weapons in a futuristic 3D gallery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${orbitron.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full">{children}</body>
    </html>
  );
}
