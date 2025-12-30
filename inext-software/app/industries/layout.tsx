import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - Industry-Specific Software Solutions | iNext",
  description:
    "Industry-specific software solutions for healthcare, finance, e-commerce, education, logistics, real estate, manufacturing, and media. Tailored technology for your sector.",
  keywords: [
    "industry solutions",
    "healthcare software",
    "fintech solutions",
    "e-commerce platforms",
    "education technology",
    "logistics software",
    "real estate software",
    "manufacturing software",
    "media entertainment software",
    "industry-specific software",
  ].join(", "),
  openGraph: {
    title: "Industries We Serve - iNext Software Solutions",
    description: "Industry-specific software solutions tailored to your needs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - iNext Software Solutions",
    description: "Industry-specific software solutions tailored to your needs",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
