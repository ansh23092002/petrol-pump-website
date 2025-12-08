import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "Sharma Interpreneurs - Petrol Pump Services",
  description: "Professional petrol pump labor services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
