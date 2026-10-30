import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NavHeader } from "@/components/NavHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { content } from "@/i18n/content";
import type { AnalyticsContext } from "@/lib/analytics";
import { PHONE_DISPLAY, SITE_URL, WA_BASE } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPage, SERVICE_ELECTRIC_ID } from "@/lib/structured-data";

const title = "Electric Chauffeur Service Dakar | Dakar Fleet";
const description =
  "Travel with a chauffeur in Dakar Fleet's current all-electric fleet, including BYD Atto 2 and BYD Dolphin vehicles for airport, private and business trips.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "electric chauffeur Dakar",
    "electric car with driver Dakar",
    "electric transport Dakar",
    "electric airport transfer Dakar",
    "BYD chauffeur Dakar",
  ],
  openGraph: {
    title: "Electric Chauffeur Service in Dakar",
    description:
      "Dakar Fleet currently operates an all-electric fleet for airport transfers, private journeys and business travel.",
    url: `${SITE_URL}${localizedRoutes.electricChauffeur.en}`,
  },
  twitter: {
    title: "Electric Chauffeur Service in Dakar",
    description:
      "Dakar Fleet currently operates an all-electric fleet for airport transfers, private journeys and business travel.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.electricChauffeur.en}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.electricChauffeur.fr}`,
      en: `${SITE_URL}${localizedRoutes.electricChauffeur.en}`,
    },
  },
};

const webPage = buildWebPage({
  canonical: `${SITE_URL}${localizedRoutes.electricChauffeur.en}`,
  name: title,
  description,
  lang: "en",
  mainEntityId: SERVICE_ELECTRIC_ID,
});

const benefits = [
  {
    title: "No direct tailpipe emissions while driving",
    text: "An electric vehicle produces no direct tailpipe emissions during the journey. This factual point is not a claim that the vehicle has no lifecycle or environmental impact.",
  },
  {
    title: "Quiet electric operation",
    text: "Electric propulsion reduces mechanical engine noise and helps create a calm setting for airport, private and business journeys.",
  },
  {
    title: "A modern chauffeur experience",
    text: "The BYD Atto 2 and BYD Dolphin currently used by Dakar Fleet support its chauffeur services across the main areas served.",
  },
] as const;

const useCases = [
  "Airport transfers between AIBD, Dakar and the main destinations served",
  "Private point-to-point journeys with a chauffeur",
  "Business appointments and multi-stop itineraries",
  "Reserved travel to Diamniadio, Thiès, Mbour or Saly",
] as const;

const faq = [
  {
    question: "Does Dakar Fleet currently operate an all-electric fleet?",
    answer:
      "Yes. The fleet currently operated by Dakar Fleet is fully electric. Its composition may evolve in the future, so this describes the present fleet rather than a permanent promise.",
  },
  {
    question: "Which electric vehicles does Dakar Fleet use?",
    answer:
      "The current fleet includes BYD Atto 2 and BYD Dolphin vehicles. The model assigned to a journey depends on the requested service and availability.",
  },
  {
    question: "Are electric vehicles used for AIBD airport transfers?",
    answer:
      "Yes. Dakar Fleet uses its current electric fleet for airport transfers as well as private and business chauffeur journeys, subject to route feasibility and availability.",
  },
  {
    question: "What does no direct tailpipe emissions mean?",
    answer:
      "It means the electric vehicle does not emit exhaust gases from a tailpipe while driving. It does not mean that vehicle manufacturing or electricity production has no environmental impact.",
  },
  {
    question: "Can an electric chauffeur journey serve Thiès, Mbour or Saly?",
    answer:
      "Thiès, Mbour and Saly are among the main areas served. Dakar Fleet confirms whether the requested journey can be handled when reviewing the route and vehicle availability.",
  },
  {
    question: "How do I book an electric chauffeur journey?",
    answer:
      "Send the date, preferred time, pickup location and destination through WhatsApp. Dakar Fleet then confirms trip feasibility and vehicle availability for the requested time.",
  },
] as const;

export default function ElectricChauffeurPage() {
  const lang = "en";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "en",
    page_type: "service",
    service_context: "electric_mobility",
  };
  const WA = `${WA_BASE}?text=Hello Dakar Fleet, I would like to arrange a journey with your electric chauffeur service.`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <JsonLd data={webPage} />
      <NavHeader
        lang={lang}
        nav={t.nav}
        waUrl={WA}
        phoneDisplay={PHONE_DISPLAY}
        analyticsContext={analyticsContext}
      />

      <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,107,74,0.15),transparent_40%),linear-gradient(135deg,#0A0A0A_0%,#0e0f0e_50%,#0A0A0A_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-7 inline-flex rounded-full border border-[#4CAF7D]/30 bg-[#4CAF7D]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#4CAF7D]">
            Electric vehicles with a private chauffeur
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Electric Chauffeur Service
            <br />
            <span className="italic text-[#4CAF7D]">for Travel in and around Dakar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Dakar Fleet currently provides its airport, private and business chauffeur services
            with an all-electric fleet that includes BYD Atto 2 and BYD Dolphin vehicles.
          </p>
          <TrackedLink
            href={WA}
            analyticsEvents={[
              {
                name: "contact_whatsapp_click",
                params: { ...analyticsContext, cta_location: "hero", contact_method: "whatsapp" },
              },
              {
                name: "booking_cta_click",
                params: { ...analyticsContext, cta_location: "hero", contact_method: "whatsapp" },
              },
            ]}
            className="mt-8 inline-flex rounded-full bg-[#4CAF7D] px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:bg-[#7BD8A4]"
          >
            Book an electric chauffeur
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Why electric?</p>
        <h2 className="mt-3 font-title text-4xl text-white">Practical benefits without environmental absolutes</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-title text-2xl text-white">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Current models</p>
            <h2 className="mt-3 font-title text-4xl text-white">BYD Atto 2 and BYD Dolphin</h2>
            <p className="mt-4 leading-8 text-white/70">
              These models are part of the fleet operated today. The Atto 2 has a compact SUV
              format, while the Dolphin has a compact format. The vehicle used for a booking depends
              on the service requested and availability.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              The makeup of the fleet may change as the service develops. This page describes the
              vehicles currently operated and does not make a permanent all-electric commitment.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Chauffeur uses</p>
            <h2 className="mt-3 font-title text-4xl text-white">One fleet across Dakar Fleet services</h2>
            <ul className="mt-6 space-y-3">
              {useCases.map((useCase) => (
                <li key={useCase} className="rounded-xl border border-white/10 bg-black/25 px-5 py-4 leading-7 text-white/70">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Service area</p>
            <h2 className="mt-3 font-title text-4xl text-white">Journeys confirmed for the requested route</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet primarily serves Dakar, Diamniadio, AIBD, Thiès, Mbour and Saly. Other
              journeys around Dakar may be considered according to the request. Each journey is
              reviewed for the planned route before it is confirmed.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Booking confirmation</p>
            <h2 className="mt-3 font-title text-4xl text-white">Feasibility checked before the journey</h2>
            <p className="mt-4 leading-8 text-white/70">
              Booking allows Dakar Fleet to confirm that the requested journey can be handled and
              that a vehicle is available for the preferred time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Frequently asked questions</p>
          <h2 className="mt-3 font-title text-4xl text-white">Electric chauffeur travel in practice</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <summary className="cursor-pointer list-none font-medium text-white marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 leading-7 text-white/65">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 text-center md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-title text-3xl text-white">Arriving at AIBD?</h2>
            <Link
              href={localizedRoutes.airportTransfer.en}
              className="mt-4 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Plan an AIBD airport transfer
            </Link>
          </div>
          <div>
            <h2 className="font-title text-3xl text-white">Planning a business itinerary?</h2>
            <Link
              href={localizedRoutes.businessChauffeur.en}
              className="mt-4 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Explore private and business chauffeur services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-title text-3xl text-white">Book with the current electric fleet</h2>
            <p className="mt-2 text-white/60">Share your pickup, destination, preferred time and travel date.</p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Hello Dakar Fleet, I would like to arrange a journey with your electric chauffeur service.",
            }}
            analyticsContext={analyticsContext}
          />
        </div>
      </section>

      <Footer lang={lang} analyticsContext={analyticsContext} />
      <WhatsAppFloat waUrl={WA} label="Book now" analyticsContext={analyticsContext} />
    </main>
  );
}
