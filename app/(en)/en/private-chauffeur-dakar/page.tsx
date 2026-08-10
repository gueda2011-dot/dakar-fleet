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

export const metadata: Metadata = {
  title: "Private Chauffeur Dakar | Business Chauffeur Service - Dakar Fleet",
  description:
    "Private chauffeur service in Dakar for point-to-point trips, business appointments and multi-stop itineraries. Available 24/7 by reservation.",
  keywords: [
    "private chauffeur Dakar",
    "chauffeur service Dakar",
    "business chauffeur Dakar",
    "private driver Dakar",
    "corporate transportation Dakar",
  ],
  openGraph: {
    title: "Private and Business Chauffeur Service in Dakar",
    description:
      "Arrange a point-to-point journey or a chauffeur for a multi-stop programme in Dakar and the main areas served.",
    url: `${SITE_URL}${localizedRoutes.businessChauffeur.en}`,
  },
  twitter: {
    title: "Private and Business Chauffeur Service in Dakar",
    description:
      "Arrange a point-to-point journey or a chauffeur for a multi-stop programme in Dakar and the main areas served.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.businessChauffeur.en}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.businessChauffeur.fr}`,
      en: `${SITE_URL}${localizedRoutes.businessChauffeur.en}`,
    },
  },
};

const useCases = [
  "A direct journey to a meeting, hotel, event venue or airport",
  "Several appointments scheduled across a half-day or full-day programme",
  "Travel between Dakar, Diamniadio and Blaise Diagne International Airport",
  "Transport for visiting executives, colleagues or small teams",
  "A chauffeur assigned to an itinerary shared before the service",
] as const;

const servicePrinciples = [
  {
    title: "A clear itinerary",
    text: "Pickup times, stops and useful contacts are collected before the journey so the requested programme can be confirmed.",
  },
  {
    title: "Professional discretion",
    text: "The service is intended to provide a calm, respectful setting during private and business travel.",
  },
  {
    title: "One contact for the programme",
    text: "For a multi-stop itinerary, the chauffeur follows the confirmed schedule and remains the practical transport contact for the agreed service period.",
  },
] as const;

const faq = [
  {
    question: "What is the difference between a point-to-point trip and a multi-stop chauffeur service?",
    answer:
      "A point-to-point trip connects one pickup location with one destination. A multi-stop chauffeur service can be arranged for an agreed period and programme, with several stops if required.",
  },
  {
    question: "Can I book a chauffeur for several business appointments?",
    answer:
      "Yes. Share the expected stops and times so Dakar Fleet can review the programme and confirm a suitable multi-stop service.",
  },
  {
    question: "Is the chauffeur service available 24/7?",
    answer:
      "Yes. Services can be arranged 24 hours a day, 7 days a week. A reservation is required to confirm availability for the requested time and itinerary.",
  },
  {
    question: "Which areas does Dakar Fleet serve?",
    answer:
      "The main service areas are Dakar, Diamniadio, AIBD, Thiès, Mbour and Saly. Other trips around Dakar may be considered according to the route and availability.",
  },
  {
    question: "Which vehicles are currently used?",
    answer:
      "Dakar Fleet currently operates an all-electric fleet that includes BYD Atto 2 and BYD Dolphin vehicles. The assigned model depends on the service and availability.",
  },
  {
    question: "How do I request a private chauffeur quote?",
    answer:
      "Send the date, pickup location, expected times, stops and required service period through WhatsApp. Pricing for a multi-stop chauffeur service is provided on request for the confirmed programme.",
  },
] as const;

export default function PrivateChauffeurPage() {
  const lang = "en";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "en",
    page_type: "service",
    service_context: "business_chauffeur",
  };
  const WA = `${WA_BASE}?text=Hello Dakar Fleet, I would like a quote for a private chauffeur service.`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader
        lang={lang}
        nav={t.nav}
        waUrl={WA}
        phoneDisplay={PHONE_DISPLAY}
        analyticsContext={analyticsContext}
      />

      <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-7 inline-flex rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            Private chauffeur and multi-stop travel
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Private Chauffeur Service
            <br />
            <span className="italic text-[#C9A84C]">for Business and Personal Journeys</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Arrange a direct trip or a chauffeur for an itinerary involving several stops in Dakar.
            The schedule, service period and areas to be covered are reviewed and confirmed before
            the journey.
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
            className="mt-8 inline-flex rounded-full bg-[#C9A84C] px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:bg-[#E8C97A]"
          >
            Request a chauffeur quote
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Choose the service format</p>
        <h2 className="mt-3 font-title text-4xl text-white">Point-to-point travel or a multi-stop itinerary</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <h3 className="font-title text-2xl text-white">Point-to-point journey</h3>
            <p className="mt-3 leading-7 text-white/65">
              This format covers a defined pickup and destination, such as a meeting, hotel,
              conference venue or airport.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <h3 className="font-title text-2xl text-white">Multi-stop chauffeur service</h3>
            <p className="mt-3 leading-7 text-white/65">
              This format suits a programme with several stops or an agreed service period. The
              itinerary and times are set out in the quote.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Typical needs</p>
            <h2 className="mt-3 font-title text-4xl text-white">Transport shaped around your schedule</h2>
            <ul className="mt-6 space-y-3">
              {useCases.map((useCase) => (
                <li key={useCase} className="rounded-xl border border-white/10 bg-black/25 px-5 py-4 leading-7 text-white/70">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Availability</p>
            <h2 className="mt-3 font-title text-4xl text-white">Available 24 hours a day by reservation</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet can arrange early, late and overnight journeys, 7 days a week. Booking
              allows the requested chauffeur, timing and programme to be confirmed; it does not
              promise instant availability.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet is based in Diamniadio, SD City. This is the service&apos;s base and is not
              presented as a public walk-in office with visitor opening hours.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Service experience</p>
        <h2 className="mt-3 font-title text-4xl text-white">A professional framework for each journey</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {servicePrinciples.map((principle) => (
            <article key={principle.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-title text-2xl text-white">{principle.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Current fleet</p>
            <h2 className="mt-3 font-title text-4xl text-white">Electric BYD vehicles with chauffeur</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet currently operates an all-electric fleet that includes BYD Atto 2 and BYD
              Dolphin vehicles. Their quiet electric operation is suited to private journeys and
              travel between business appointments.
            </p>
            <Link
              href={localizedRoutes.electricChauffeur.en}
              className="mt-5 inline-flex text-sm font-medium text-[#4CAF7D] underline-offset-4 hover:underline"
            >
              Explore the electric chauffeur service
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Service areas</p>
            <h2 className="mt-3 font-title text-4xl text-white">Dakar, Diamniadio and key destinations</h2>
            <p className="mt-4 leading-8 text-white/70">
              The main areas served are Dakar, Diamniadio, AIBD, Thiès, Mbour and Saly. Other trips
              around Dakar may be reviewed according to the requested route, programme and vehicle
              availability.
            </p>
            <Link
              href={localizedRoutes.airportTransfer.en}
              className="mt-5 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              View the AIBD airport transfer service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Pricing</p>
        <h2 className="mt-3 font-title text-4xl text-white">A quote based on the confirmed programme</h2>
        <p className="mt-4 leading-8 text-white/70">
          Multi-stop chauffeur services are priced on request. The proposal considers the service period,
          stops, times and areas to be covered. Sharing even a provisional itinerary helps Dakar
          Fleet prepare a more precise response.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Frequently asked questions</p>
          <h2 className="mt-3 font-title text-4xl text-white">Booking a private chauffeur in Dakar</h2>
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

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-title text-3xl text-white">Request a private chauffeur quote</h2>
            <p className="mt-2 text-white/60">Include the pickup, expected times, stops and service date.</p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Hello Dakar Fleet, I would like a quote for a private chauffeur service.",
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
