import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NavHeader } from "@/components/NavHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { content, type Locale } from "@/i18n/content";
import type { AnalyticsContext } from "@/lib/analytics";
import { EMAIL, PHONE, PHONE_DISPLAY, WA_BASE } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";

const pageCopy = {
  fr: {
    eyebrow: "Contact",
    h1: "Contacter Dakar Fleet",
    introduction:
      "Contactez Dakar Fleet pour demander un transfert AIBD, un trajet privé ou professionnel, ou un service avec plusieurs étapes. La faisabilité et la disponibilité sont confirmées avant la prestation.",
    directLabel: "Contact direct",
    directTitle: "Choisissez le canal qui vous convient",
    whatsapp: "Écrire sur WhatsApp",
    phone: "Appeler Dakar Fleet",
    email: "Envoyer un email",
    formLabel: "Demande de trajet",
    formTitle: "Préparer votre demande dans WhatsApp",
    formText:
      "Le formulaire prépare un message avec les informations essentielles, puis ouvre WhatsApp. Votre demande n’est transmise à Dakar Fleet qu’après l’envoi du message dans WhatsApp.",
    guidanceLabel: "Informations utiles",
    guidanceTitle: "Ce que vous pouvez inclure dans votre demande",
    guidance: [
      "La date et l’horaire souhaités",
      "Le lieu de prise en charge",
      "La destination ou l’itinéraire envisagé",
      "Le numéro de vol pour un trajet lié à l’aéroport",
      "Le nombre de passagers lorsqu’il est utile à l’organisation",
      "Les étapes prévues pour un service chauffeur multi-stop",
    ],
    servicesLabel: "Services",
    servicesTitle: "Choisir le service adapté",
    services: [
      { route: "airportTransfer", label: "Transfert aéroport AIBD" },
      { route: "businessChauffeur", label: "Chauffeur privé et business" },
      { route: "electricChauffeur", label: "Transport avec la flotte électrique actuelle" },
    ],
    areasLabel: "Zones desservies",
    areasTitle: "Dakar, AIBD et principales destinations",
    areasText:
      "Dakar Fleet organise des trajets à Dakar, Diamniadio, l’AIBD, Thiès, Mbour et Saly. D’autres demandes peuvent être étudiées selon le trajet et la disponibilité.",
    availabilityLabel: "Disponibilité",
    availabilityTitle: "Services organisables 24h/24 et 7j/7",
    availabilityText:
      "Le service est disponible sur réservation et selon disponibilité. Dakar Fleet ne promet pas une réponse instantanée, une hotline permanente ou un véhicule immédiatement disponible.",
    baseLabel: "Implantation",
    baseTitle: "Diamniadio, SD City",
    baseText:
      "Dakar Fleet est implanté à Diamniadio, SD City, au Sénégal. Les demandes sont préparées à distance par WhatsApp, téléphone ou email.",
    floatLabel: "Réserver",
  },
  en: {
    eyebrow: "Contact",
    h1: "Contact Dakar Fleet",
    introduction:
      "Contact Dakar Fleet to request an AIBD airport transfer, a private or business journey, or a multi-stop chauffeur service. Feasibility and availability are confirmed before the service.",
    directLabel: "Direct contact",
    directTitle: "Choose the channel that works for you",
    whatsapp: "Message us on WhatsApp",
    phone: "Call Dakar Fleet",
    email: "Send an email",
    formLabel: "Journey request",
    formTitle: "Prepare your request in WhatsApp",
    formText:
      "The form prepares a message with the essential details and then opens WhatsApp. Your request reaches Dakar Fleet only after you send the message in WhatsApp.",
    guidanceLabel: "Useful information",
    guidanceTitle: "What to include in your request",
    guidance: [
      "Your preferred date and time",
      "The pickup location",
      "The destination or intended itinerary",
      "The flight number for an airport-related journey",
      "The number of passengers when relevant to the arrangements",
      "Planned stops for a multi-stop chauffeur service",
    ],
    servicesLabel: "Services",
    servicesTitle: "Choose the right service",
    services: [
      { route: "airportTransfer", label: "AIBD airport transfers" },
      { route: "businessChauffeur", label: "Private and business chauffeur service" },
      { route: "electricChauffeur", label: "Travel with the current electric fleet" },
    ],
    areasLabel: "Service areas",
    areasTitle: "Dakar, AIBD and key destinations",
    areasText:
      "Dakar Fleet arranges journeys in Dakar, Diamniadio, AIBD, Thiès, Mbour and Saly. Other requests can be considered depending on the route and availability.",
    availabilityLabel: "Availability",
    availabilityTitle: "Services can be arranged 24/7",
    availabilityText:
      "Service is available by reservation and subject to availability. Dakar Fleet does not promise an instant response, a permanent hotline or an immediately available vehicle.",
    baseLabel: "Base",
    baseTitle: "Diamniadio, SD City",
    baseText:
      "Dakar Fleet is based in Diamniadio, SD City, Senegal. Requests are handled remotely through WhatsApp, phone or email.",
    floatLabel: "Book now",
  },
} as const;

const serviceAreas = ["Dakar", "Diamniadio", "AIBD", "Thiès", "Mbour", "Saly"] as const;

export function ContactPage({ lang }: { lang: Locale }) {
  const t = content[lang];
  const copy = pageCopy[lang];
  const analyticsContext: AnalyticsContext = {
    locale: lang,
    page_type: "contact",
    service_context: "general_contact",
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
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.directLabel}</p>
          <h2 className="mt-3 font-title text-4xl text-white">{copy.directTitle}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
            className="rounded-[1.6rem] border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition hover:border-[#25D366]/60"
          >
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#72E39C]">WhatsApp</span>
            <span className="mt-3 block font-title text-2xl text-white">{copy.whatsapp}</span>
          </TrackedLink>
          <TrackedLink
            href={`tel:${PHONE}`}
            analyticsEvents={[{
              name: "contact_phone_click",
              params: { ...analyticsContext, cta_location: "contact_section", contact_method: "phone" },
            }]}
            className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#C9A84C]/50"
          >
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">{copy.phone}</span>
            <span className="mt-3 block font-title text-2xl text-white">{PHONE_DISPLAY}</span>
          </TrackedLink>
          <TrackedLink
            href={`mailto:${EMAIL}`}
            analyticsEvents={[{
              name: "contact_email_click",
              params: { ...analyticsContext, cta_location: "contact_section", contact_method: "email" },
            }]}
            className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#C9A84C]/50"
          >
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">{copy.email}</span>
            <span className="mt-3 block break-all font-title text-2xl text-white">{EMAIL}</span>
          </TrackedLink>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.formLabel}</p>
            <h2 className="mt-3 font-title text-4xl text-white">{copy.formTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.formText}</p>
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.guidanceLabel}</p>
              <h3 className="mt-3 font-title text-2xl text-white">{copy.guidanceTitle}</h3>
              <ul className="mt-5 space-y-3">
                {copy.guidance.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-white/70">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm strings={t.contact.form} analyticsContext={analyticsContext} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.servicesLabel}</p>
            <h2 className="mt-3 font-title text-4xl text-white">{copy.servicesTitle}</h2>
            <div className="mt-6 space-y-3">
              {copy.services.map((service) => (
                <Link
                  key={service.route}
                  href={localizedRoutes[service.route][lang]}
                  className="block rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 transition hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">{copy.areasLabel}</p>
            <h2 className="mt-3 font-title text-4xl text-white">{copy.areasTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{copy.areasText}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li key={area} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/85">
                  {area}
                </li>
              ))}
            </ul>
          </div>
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

      <Footer lang={lang} analyticsContext={analyticsContext} />
      <WhatsAppFloat waUrl={waUrl} label={copy.floatLabel} analyticsContext={analyticsContext} />
    </main>
  );
}
