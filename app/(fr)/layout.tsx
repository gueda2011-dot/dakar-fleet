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
  title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
  description:
    "Dakar Fleet propose des transferts aéroport, déplacements business, excursions et mise à disposition avec chauffeur à Dakar. Véhicules électriques haut de gamme, disponibles 24h/24.",
  openGraph: {
    title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
    description:
      "Transferts aéroport, déplacements business et excursions avec chauffeur privé à Dakar. Véhicules électriques BYD, disponibles 24h/24.",
    url: SITE_URL,
    siteName: "Dakar Fleet",
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
    description:
      "Transferts aéroport, déplacements business et excursions avec chauffeur privé à Dakar.",
  },
  keywords: [
    "transport premium Dakar",
    "chauffeur privé Dakar",
    "transfert aéroport AIBD",
    "véhicule électrique Dakar",
    "VTC Dakar",
    "transport VIP Sénégal",
    "BYD Dakar",
  ],
  authors: [{ name: "Dakar Fleet" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
    languages: { en: `${SITE_URL}/en` },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Dakar Fleet",
  description:
    "Service de transport premium avec chauffeur à Dakar. Transferts aéroport, déplacements business, excursions.",
  url: SITE_URL,
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

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <JsonLd data={jsonLd} />
        {children}
        <GoogleAnalytics gaId="G-90BGR08TSS" />
      </body>
    </html>
  );
}
