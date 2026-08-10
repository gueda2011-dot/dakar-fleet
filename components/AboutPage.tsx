import Link from "next/link";
import { content, type Locale } from "@/i18n/content";
import { Footer } from "@/components/Footer";
import { NavHeader } from "@/components/NavHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { AnalyticsContext } from "@/lib/analytics";
import { PHONE_DISPLAY, WA_BASE } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

const pageCopy = {
  fr: {
    eyebrow: "À propos",
    h1: "À propos de Dakar Fleet",
    introduction:
      "Dakar Fleet est un service de transport avec chauffeur implanté à Diamniadio, SD City, au Sénégal. Il organise des transferts AIBD, des trajets privés et professionnels ainsi que des itinéraires à plusieurs étapes, sur réservation et selon disponibilité.",
    servicesLabel: "Nos services",
    servicesTitle: "Trois services pour organiser vos déplacements",
    servicesIntro:
      "Chaque demande est étudiée selon le trajet, l’horaire et la disponibilité. Les pages dédiées présentent les informations utiles sans multiplier les offres artificiellement.",
    services: [
      {
        route: "airportTransfer",
        title: "Transferts AIBD",
        text: "Des prises en charge depuis ou vers l’aéroport, préparées avec le numéro de vol lorsque le trajet est lié à une arrivée ou un départ.",
        link: "Découvrir les transferts AIBD",
      },
      {
        route: "businessChauffeur",
        title: "Chauffeur privé et déplacements professionnels",
        text: "Des trajets point à point ou des services avec plusieurs étapes pour les rendez-vous, programmes privés et déplacements business.",
        link: "Découvrir le service chauffeur privé",
      },
      {
        route: "electricChauffeur",
        title: "Transport avec la flotte électrique actuelle",
        text: "Les services sont aujourd’hui opérés avec les BYD Atto 2 et BYD Dolphin de la flotte actuelle de Dakar Fleet.",
        link: "Découvrir la flotte électrique actuelle",
      },
    ],
    areasLabel: "Zones desservies",
    areasTitle: "Où Dakar Fleet opère",
    areasText:
      "Dakar Fleet organise des trajets à Dakar, Diamniadio, l’AIBD, Thiès, Mbour et Saly. D’autres demandes peuvent être étudiées selon le trajet et la disponibilité.",
    fleetLabel: "Notre flotte aujourd’hui",
    fleetTitle: "Une flotte actuelle entièrement électrique",
    fleetText:
      "Notre flotte actuelle est composée de véhicules 100 % électriques : BYD Atto 2 et BYD Dolphin. Elle ne produit pas d’émissions directes à l’échappement pendant la conduite. Sa composition pourra évoluer avec les besoins du service.",
    processLabel: "Fonctionnement",
    processTitle: "Comment le service fonctionne",
    process: [
      {
        title: "Envoyer une demande",
        text: "Le client indique la date, l’horaire, la prise en charge, la destination ou l’itinéraire envisagé.",
      },
      {
        title: "Confirmer la faisabilité",
        text: "Dakar Fleet vérifie le trajet et la disponibilité avant de confirmer les conditions du service.",
      },
      {
        title: "Organiser le trajet",
        text: "Les étapes et informations pratiques sont précisées avec le client avant la prise en charge.",
      },
      {
        title: "Préparer un transfert aéroport",
        text: "Le numéro de vol est demandé. Son statut est consulté avant le départ pour la prise en charge afin d’adapter l’organisation à un changement observé.",
      },
    ],
    availabilityLabel: "Disponibilité",
    availabilityTitle: "Des services organisables 24h/24 et 7j/7",
    availabilityText:
      "Les trajets peuvent être organisés à toute heure sur réservation et selon disponibilité. Cette disponibilité du service ne constitue pas une promesse de réponse immédiate ou de véhicule instantanément disponible.",
    baseLabel: "Implantation",
    baseTitle: "Basé à Diamniadio, SD City",
    baseText:
      "Dakar Fleet coordonne ses services depuis Diamniadio, SD City, au Sénégal. Les demandes et les modalités de trajet sont préparées à distance par WhatsApp, téléphone ou email.",
    ctaTitle: "Parlons de votre trajet",
    ctaText:
      "La page contact réunit les coordonnées, le formulaire WhatsApp et les informations utiles à transmettre pour préparer une demande.",
    contactLink: "Contacter Dakar Fleet",
    whatsappLink: "Écrire sur WhatsApp",
    floatLabel: "Réserver",
  },
  en: {
    eyebrow: "About",
    h1: "About Dakar Fleet",
    introduction:
      "Dakar Fleet is a chauffeur-driven transport service based in Diamniadio, SD City, Senegal. It arranges AIBD airport transfers, private and business journeys, and multi-stop itineraries by reservation and subject to availability.",
    servicesLabel: "Our services",
    servicesTitle: "Three ways to arrange chauffeur-driven travel",
    servicesIntro:
      "Each request is reviewed against the route, timing and availability. Dedicated service pages provide the practical details for each type of journey.",
    services: [
      {
        route: "airportTransfer",
        title: "AIBD airport transfers",
        text: "Pickups and drop-offs to or from the airport, prepared with a flight number whenever the journey is connected to an arrival or departure.",
        link: "Explore AIBD airport transfers",
      },
      {
        route: "businessChauffeur",
        title: "Private and business chauffeur service",
        text: "Point-to-point journeys or multi-stop chauffeur services for meetings, private schedules and business travel.",
        link: "Explore private chauffeur services",
      },
      {
        route: "electricChauffeur",
        title: "Travel with the current electric fleet",
        text: "Services are currently operated with Dakar Fleet’s BYD Atto 2 and BYD Dolphin vehicles.",
        link: "Explore the current electric fleet",
      },
    ],
    areasLabel: "Service areas",
    areasTitle: "Where Dakar Fleet operates",
    areasText:
      "Dakar Fleet arranges journeys in Dakar, Diamniadio, AIBD, Thiès, Mbour and Saly. Other requests can be considered depending on the route and availability.",
    fleetLabel: "Our fleet today",
    fleetTitle: "A currently all-electric fleet",
    fleetText:
      "Dakar Fleet currently operates an all-electric fleet comprising the BYD Atto 2 and BYD Dolphin. These vehicles produce no direct tailpipe emissions while driving. The fleet composition may evolve as the service develops.",
    processLabel: "How it works",
    processTitle: "From request to journey",
    process: [
      {
        title: "Send a request",
        text: "Share the preferred date and time, pickup point, destination or intended itinerary.",
      },
      {
        title: "Confirm feasibility",
        text: "Dakar Fleet reviews the journey and availability before confirming the service arrangements.",
      },
      {
        title: "Organise the journey",
        text: "Stops and practical pickup information are agreed with the passenger before the service begins.",
      },
      {
        title: "Prepare an airport transfer",
        text: "A flight number is requested. Its status is checked before departure for the pickup so the arrangements can reflect an observed change.",
      },
    ],
    availabilityLabel: "Availability",
    availabilityTitle: "Services can be arranged 24/7",
    availabilityText:
      "Journeys can be arranged at any hour by reservation and subject to availability. This does not promise an instant response or immediate vehicle availability.",
    baseLabel: "Base",
    baseTitle: "Based in Diamniadio, SD City",
    baseText:
      "Dakar Fleet coordinates its services from Diamniadio, SD City, Senegal. Requests and journey arrangements are handled remotely through WhatsApp, phone or email.",
    ctaTitle: "Tell us about your journey",
    ctaText:
      "The contact page brings together direct contact details, the WhatsApp request form and guidance on the information to include.",
    contactLink: "Contact Dakar Fleet",
    whatsappLink: "Message us on WhatsApp",
    floatLabel: "Book now",
  },
} as const;

const serviceAreas = ["Dakar", "Diamniadio", "AIBD", "Thiès", "Mbour", "Saly"] as const;

export function AboutPage({ lang }: { lang: Locale }) {
  const t = content[lang];
  const copy = pageCopy[lang];
  const analyticsContext: AnalyticsContext = {
    locale: lang,
    page_type: "about",
    service_context: "brand",
  };
  const waUrl = `${WA_BASE}?text=${t.whatsappMessage}`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader
        lang={lang}
        nav={t.nav}
        waUrl={waUrl}
        phoneDisplay={PHONE_DISPLAY}
        analyticsContext={analyticsContext}
      />

      <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-7 inline-flex rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            {copy.eyebrow}
          </p>
          <h1 className="font-title text-5xl font-light leading-[1.1] text-white sm:text-6xl">
            {copy.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {copy.introduction}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.servicesLabel}</p>
          <h2 className="mt-3 font-title text-4xl text-white">{copy.servicesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">{copy.servicesIntro}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {copy.services.map((service) => (
            <article key={service.route} className="flex flex-col rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-title text-2xl text-white">{service.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-white/65">{service.text}</p>
              <Link
                href={localizedRoutes[service.route][lang]}
                className="mt-5 text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
              >
                {service.link}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.areasLabel}</p>
            <h2 className="mt-3 font-title text-4xl text-white">{copy.areasTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.areasText}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li key={area} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-white/85">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">{copy.fleetLabel}</p>
            <h2 className="mt-3 font-title text-4xl text-white">{copy.fleetTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.fleetText}</p>
            <Link
              href={localizedRoutes.electricChauffeur[lang]}
              className="mt-5 inline-flex text-sm font-medium text-[#4CAF7D] underline-offset-4 hover:underline"
            >
              {copy.services[2].link}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.processLabel}</p>
        <h2 className="mt-3 font-title text-4xl text-white">{copy.processTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {copy.process.map((step, index) => (
            <article key={step.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-title text-2xl text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <article className="rounded-[1.6rem] border border-white/10 bg-black/25 p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.availabilityLabel}</p>
            <h2 className="mt-3 font-title text-3xl text-white">{copy.availabilityTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.availabilityText}</p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-black/25 p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.baseLabel}</p>
            <h2 className="mt-3 font-title text-3xl text-white">{copy.baseTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.baseText}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="font-title text-4xl text-white">{copy.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">{copy.ctaText}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={localizedRoutes.contact[lang]}
            className="rounded-full bg-[#C9A84C] px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:bg-[#E8C97A]"
          >
            {copy.contactLink}
          </Link>
          <TrackedLink
            href={waUrl}
            analyticsEvents={[
              {
                name: "contact_whatsapp_click",
                params: { ...analyticsContext, cta_location: "contact_section", contact_method: "whatsapp" },
              },
              {
                name: "booking_cta_click",
                params: { ...analyticsContext, cta_location: "contact_section", contact_method: "whatsapp" },
              },
            ]}
            className="rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
          >
            {copy.whatsappLink}
          </TrackedLink>
        </div>
      </section>

      <Footer lang={lang} analyticsContext={analyticsContext} />
      <WhatsAppFloat waUrl={waUrl} label={copy.floatLabel} analyticsContext={analyticsContext} />
    </main>
  );
}
