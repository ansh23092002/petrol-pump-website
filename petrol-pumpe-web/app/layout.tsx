import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FuelTrack - Smart Petrol Pump Management System",
  description: "Transform your fuel station operations with FuelTrack - the complete digital solution for petrol pump management. Real-time tracking, automated reports, and seamless operations.",
  keywords: "petrol pump management, fuel station software, pump operations, fuel tracking, digital fuel management, petrol station app",
  authors: [{ name: "FuelTrack" }],
  openGraph: {
    title: "FuelTrack - Smart Petrol Pump Management System",
    description: "Transform your fuel station operations with FuelTrack",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FuelTrack - Smart Petrol Pump Management System",
    description: "Transform your fuel station operations with FuelTrack",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
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
        {children}
      </body>
    </html>
  );
}
