import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting Services | Strategic IT Consulting - iNext",
  description:
    "Expert technology consulting services to guide your digital transformation journey. Strategic planning, technology advisory, business process optimization, and data analytics consulting.",
  keywords: [
    "IT consulting",
    "technology consulting",
    "digital transformation",
    "business consulting",
    "technology advisory",
    "architecture design",
    "process optimization",
    "data analytics consulting",
    "strategic planning",
  ].join(", "),
  openGraph: {
    title: "Technology Consulting Services - iNext Software",
    description: "Expert technology consulting for digital transformation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Consulting Services - iNext Software",
    description: "Expert technology consulting for digital transformation",
  },
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
