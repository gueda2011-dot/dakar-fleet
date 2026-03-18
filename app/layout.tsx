import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
    url: "https://dakarfleet.com",
    siteName: "Dakar Fleet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dakar Fleet – Transport premium électrique à Dakar",
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
    description:
      "Transferts aéroport, déplacements business et excursions avec chauffeur privé à Dakar.",
    images: ["/og-image.png"],
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
