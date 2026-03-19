import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
  description:
    "Dakar Fleet offers airport transfers, business travel, tours and private hire with professional drivers in Dakar. Premium BYD electric vehicles, available 24/7.",
  openGraph: {
    title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
    description:
      "Airport transfers, business travel and tours with a private chauffeur in Dakar. BYD electric vehicles, available 24/7.",
    url: "https://dakarfleet.com/en",
    siteName: "Dakar Fleet",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dakar Fleet – Premium electric transport in Dakar" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
    description: "Airport transfers, business travel and tours with a private chauffeur in Dakar.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://dakarfleet.com/en",
    languages: { fr: "https://dakarfleet.com" },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}