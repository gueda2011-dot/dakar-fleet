import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { identityGraph } from "@/lib/structured-data";

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
  metadataBase: new URL(SITE_URL),
  title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
  description:
    "Transferts aéroport AIBD, déplacements business et excursions avec chauffeur privé à Dakar. Véhicules électriques BYD, sur réservation 24h/24.",
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
    canonical: `${SITE_URL}/`,
    languages: { fr: `${SITE_URL}/`, en: `${SITE_URL}/en` },
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <JsonLd data={identityGraph} />
        {children}
        <GoogleAnalytics gaId="G-90BGR08TSS" />
      </body>
    </html>
  );
}
