import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, PHONE, EMAIL } from "@/lib/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
  description:
    "Dakar Fleet offers airport transfers, business travel, tours and private hire with professional drivers in Dakar. Premium BYD electric vehicles, available 24/7.",
  openGraph: {
    title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
    description:
      "Airport transfers, business travel and tours with a private chauffeur in Dakar. BYD electric vehicles, available 24/7.",
    url: `${SITE_URL}/en`,
    siteName: "Dakar Fleet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
    description:
      "Airport transfers, business travel and tours with a private chauffeur in Dakar.",
  },
  keywords: [
    "premium transport Dakar",
    "private chauffeur Dakar",
    "airport transfer AIBD",
    "electric vehicle Dakar",
    "VTC Dakar",
    "VIP transport Senegal",
    "BYD Dakar",
  ],
  authors: [{ name: "Dakar Fleet" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { fr: SITE_URL },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Dakar Fleet",
  description:
    "Premium chauffeur service in Dakar. Airport transfers, business travel and tours.",
  url: `${SITE_URL}/en`,
  telephone: PHONE,
  email: EMAIL,
  areaServed: { "@type": "City", name: "Dakar", addressCountry: "SN" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dakar",
    addressCountry: "SN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "FCFA",
  image: `${SITE_URL}/logo.png`,
  sameAs: [`https://wa.me/221777796922`],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <JsonLd data={jsonLd} />
        {children}
        <GoogleAnalytics gaId="G-90BGR08TSS" />
      </body>
    </html>
  );
}
