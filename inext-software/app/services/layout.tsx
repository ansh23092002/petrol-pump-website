import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Software Development & IT Solutions | iNext Software",
  description:
    "End-to-end software development services including web apps, mobile apps, cloud solutions, AI, blockchain, IoT, and consultancy. Transform your business with cutting-edge technology.",
  keywords: [
    "software development",
    "web application development",
    "mobile app development",
    "cloud solutions",
    "AI development",
    "machine learning",
    "blockchain development",
    "IoT solutions",
    "SAAS development",
    "ecommerce development",
    "ERP development",
    "DevOps",
  ].join(", "),
  openGraph: {
    title: "Our Services - iNext Software Solutions",
    description: "End-to-end software development and IT consulting services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - iNext Software Solutions",
    description: "End-to-end software development and IT consulting services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
