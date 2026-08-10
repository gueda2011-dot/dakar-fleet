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
  title: "Airport Transfer Dakar & AIBD | Private Chauffeur - Dakar Fleet",
  description:
    "Book a private AIBD airport transfer to Dakar, Diamniadio, Thiès, Mbour or Saly. Chauffeur service available 24 hours a day by reservation.",
  keywords: [
    "Dakar airport transfer",
    "AIBD airport transfer",
    "private airport transfer Dakar",
    "chauffeur airport transfer",
    "transport from Dakar airport",
  ],
  openGraph: {
    title: "Private Airport Transfer between AIBD and Dakar",
    description:
      "Arrange an AIBD pickup or drop-off with a private chauffeur, available 24 hours a day by reservation.",
    url: `${SITE_URL}${localizedRoutes.airportTransfer.en}`,
  },
  twitter: {
    title: "Private Airport Transfer between AIBD and Dakar",
    description:
      "Arrange an AIBD pickup or drop-off with a private chauffeur, available 24 hours a day by reservation.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.airportTransfer.en}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.airportTransfer.fr}`,
      en: `${SITE_URL}${localizedRoutes.airportTransfer.en}`,
    },
  },
};

const transferSteps = [
  {
    title: "Request your transfer",
    text: "Share the travel date, expected time, destination and any information needed to organise the journey.",
  },
  {
    title: "Provide your flight number",
    text: "For an AIBD arrival, Dakar Fleet asks for the flight number so the scheduled arrival can be identified correctly.",
  },
  {
    title: "Flight status check before pickup",
    text: "Before the chauffeur leaves for the pickup, the team checks the flight status and adapts the transfer if a schedule change is observed.",
  },
  {
    title: "Confirm practical details",
    text: "The pickup arrangements and useful contact details are confirmed through the channel agreed during the booking process.",
  },
] as const;

const destinations = ["Dakar", "Diamniadio", "Thiès", "Mbour", "Saly"] as const;

const travellerProfiles = [
  "Individual travellers planning a smooth arrival or departure",
  "Families arranging transport between the airport and their accommodation",
  "Business travellers and international visitors",
  "Hotel guests booking their chauffeur directly with Dakar Fleet",
] as const;

const faq = [
  {
    question: "Does Dakar Fleet operate AIBD airport transfers 24/7?",
    answer:
      "Yes. Airport transfers can be arranged 24 hours a day, 7 days a week. Booking in advance allows Dakar Fleet to confirm availability for the requested pickup time.",
  },
  {
    question: "Which destinations can I reach from AIBD?",
    answer:
      "The main service areas are Dakar, Diamniadio, Thiès, Mbour and Saly. Other journeys around Dakar may be considered depending on the route and vehicle availability.",
  },
  {
    question: "Why does Dakar Fleet ask for my flight number?",
    answer:
      "The flight number allows the team to check the flight status before the chauffeur leaves for the pickup and to adjust the organisation if a schedule change is observed.",
  },
  {
    question: "Is the fleet used for airport transfers electric?",
    answer:
      "Yes. Dakar Fleet currently operates an all-electric fleet, including BYD Atto 2 and BYD Dolphin vehicles. The vehicle assigned depends on the service and availability.",
  },
  {
    question: "Can I book an airport transfer to Saly or Mbour?",
    answer:
      "Yes. Saly and Mbour are among the main areas served. The route, price and availability are confirmed when you submit your request.",
  },
  {
    question: "How can I request an airport transfer price?",
    answer:
      "Send your date, pickup time, flight number and destination through WhatsApp. Airport transfer offers start from CFA 30,000, with the applicable price confirmed for the requested journey.",
  },
] as const;

export default function AirportTransferPage() {
  const lang = "en";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "en",
    page_type: "service",
    service_context: "airport_transfer",
  };
  const WA = `${WA_BASE}?text=Hello Dakar Fleet, I would like to arrange an airport transfer to or from AIBD.`;

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
            Private pickup and drop-off at AIBD
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Private Airport Transfers
            <br />
            <span className="italic text-[#C9A84C]">from AIBD to Dakar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Arrange a chauffeur-driven journey between Blaise Diagne International Airport (AIBD),
            Dakar, Diamniadio and the main destinations served by Dakar Fleet. Transfers are
            available 24 hours a day, 7 days a week, by reservation.
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
            Plan my airport transfer
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Pickup process</p>
        <h2 className="mt-3 font-title text-4xl text-white">How an AIBD transfer is arranged</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          The journey is prepared before the chauffeur heads to the airport. Dakar Fleet uses the
          booking details to organise the transfer and confirm the practical pickup arrangements
          before the service.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {transferSteps.map((step, index) => (
            <article key={step.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-title text-2xl text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Destinations</p>
            <h2 className="mt-3 font-title text-4xl text-white">Main areas served from AIBD</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet primarily arranges airport journeys to the destinations below. Another
              trip around Dakar may be considered according to the route and availability.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {destinations.map((destination) => (
                <li key={destination} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white/85">
                  {destination}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Availability</p>
            <h2 className="mt-3 font-title text-4xl text-white">Airport transfers available day and night</h2>
            <p className="mt-4 leading-8 text-white/70">
              Early departures, late arrivals and overnight transfers can be arranged. Advance
              booking is important because it allows the requested time, chauffeur and journey to
              be confirmed; it does not imply instant availability.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet is based in Diamniadio, SD City. This identifies where the service is
              based and should not be read as a public walk-in office address.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Current vehicles</p>
            <h2 className="mt-3 font-title text-4xl text-white">An all-electric fleet today</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet currently operates an all-electric fleet that includes BYD Atto 2 and BYD
              Dolphin vehicles. Their quiet electric operation supports a calm journey between the
              airport and your destination.
            </p>
            <Link
              href={localizedRoutes.electricChauffeur.en}
              className="mt-5 inline-flex text-sm font-medium text-[#4CAF7D] underline-offset-4 hover:underline"
            >
              Learn about our electric chauffeur service
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Who it serves</p>
            <h2 className="mt-3 font-title text-4xl text-white">A practical start or end to your stay</h2>
            <ul className="mt-6 space-y-3">
              {travellerProfiles.map((profile) => (
                <li key={profile} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 leading-7 text-white/70">
                  {profile}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Price and quote</p>
          <h2 className="mt-3 font-title text-4xl text-white">A price confirmed for your journey</h2>
          <p className="mt-4 leading-8 text-white/70">
            Airport transfer offers start from CFA 30,000. The applicable price depends on the
            route and journey conditions, so a booking request is used to confirm the amount rather
            than applying one fixed fare to Dakar, Saly, Mbour or Thiès.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Frequently asked questions</p>
        <h2 className="mt-3 font-title text-4xl text-white">Planning an airport transfer in Dakar</h2>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none font-medium text-white marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 leading-7 text-white/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center lg:px-8">
          <h2 className="font-title text-3xl text-white">Need a chauffeur after your airport transfer?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/65">
            Continue your journey with a point-to-point trip or chauffeur availability based on
            your schedule in Dakar.
          </p>
          <Link
            href={localizedRoutes.businessChauffeur.en}
            className="mt-5 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
          >
            Explore private and business chauffeur services
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-title text-3xl text-white">Prepare your AIBD transfer</h2>
            <p className="mt-2 text-white/60">Include your flight, destination and preferred date in the WhatsApp request.</p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Hello Dakar Fleet, I would like to arrange an airport transfer to or from AIBD.",
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
