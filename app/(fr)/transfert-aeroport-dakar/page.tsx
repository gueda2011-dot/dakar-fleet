import Link from "next/link";
import type { Metadata } from "next";
import { content } from "@/i18n/content";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { NavHeader } from "@/components/NavHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { localizedRoutes } from "@/lib/localized-routes";
import { PHONE_DISPLAY, SITE_URL, WA_BASE } from "@/lib/constants";
import type { AnalyticsContext } from "@/lib/analytics";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPage, SERVICE_AIRPORT_ID } from "@/lib/structured-data";

const title = "Transfert Aéroport AIBD Dakar | Chauffeur Privé - Dakar Fleet";
const description =
  "Transfert aéroport AIBD vers Dakar, Diamniadio, Thiès, Mbour ou Saly. Chauffeur privé, flotte actuelle électrique et service disponible 24h/24.";
const structuredDescription =
  "Transfert aéroport AIBD vers Dakar, Diamniadio, Thiès, Mbour ou Saly. Service avec chauffeur organisable 24h/24 et 7j/7, sur réservation et selon disponibilité.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "transfert aéroport Dakar",
    "navette AIBD",
    "taxi aéroport AIBD",
    "chauffeur privé aéroport Dakar",
    "transport AIBD Saly",
    "VTC AIBD Dakar",
  ],
  openGraph: {
    title: "Transfert Aéroport AIBD Dakar | VTC Premium",
    description:
      "Préparez votre transfert depuis ou vers l'AIBD avec un chauffeur privé, 24h/24 et 7j/7 sur réservation.",
    url: `${SITE_URL}${localizedRoutes.airportTransfer.fr}`,
  },
  twitter: {
    title: "Transfert Aéroport AIBD Dakar | VTC Premium",
    description:
      "Préparez votre transfert depuis ou vers l'AIBD avec un chauffeur privé, 24h/24 et 7j/7 sur réservation.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.airportTransfer.fr}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.airportTransfer.fr}`,
      en: `${SITE_URL}${localizedRoutes.airportTransfer.en}`,
    },
  },
};

const webPage = buildWebPage({
  canonical: `${SITE_URL}${localizedRoutes.airportTransfer.fr}`,
  name: title,
  description: structuredDescription,
  lang: "fr",
  mainEntityId: SERVICE_AIRPORT_ID,
});

const pickupSteps = [
  {
    title: "Réserver le trajet",
    text: "Indiquez la date, l'heure prévue, la destination et les informations utiles à l'organisation de votre transfert.",
  },
  {
    title: "Transmettre le numéro de vol",
    text: "Pour une arrivée à l'AIBD, Dakar Fleet demande le numéro de vol afin d'identifier l'horaire prévu.",
  },
  {
    title: "Vérifier le statut avant la prise en charge",
    text: "Avant le départ du chauffeur, l'équipe consulte le statut du vol et adapte l'organisation si un changement est observé.",
  },
  {
    title: "Rester en contact",
    text: "Les informations pratiques de prise en charge sont confirmées avec le client par le canal convenu lors de la réservation.",
  },
] as const;

const destinations = ["Dakar", "Diamniadio", "Thiès", "Mbour", "Saly"] as const;

const audiences = [
  "Voyageurs individuels souhaitant préparer leur arrivée ou leur départ",
  "Familles organisant leur transport entre l'aéroport et leur lieu de séjour",
  "Professionnels et visiteurs internationaux en déplacement au Sénégal",
  "Clients d'hôtels qui souhaitent réserver directement leur chauffeur",
] as const;

const faq = [
  {
    question: "Dakar Fleet assure-t-il les transferts AIBD 24h/24 ?",
    answer:
      "Oui. Le service de transfert peut être organisé 24h/24 et 7j/7. La réservation permet de confirmer le trajet et la disponibilité pour l'horaire souhaité.",
  },
  {
    question: "Quelles destinations sont desservies depuis l'AIBD ?",
    answer:
      "Les zones principales sont Dakar, Diamniadio, Thiès, Mbour et Saly. D'autres trajets autour de Dakar peuvent être étudiés selon la distance et la disponibilité.",
  },
  {
    question: "Pourquoi Dakar Fleet demande-t-il le numéro de vol ?",
    answer:
      "Il permet à l'équipe de vérifier le statut du vol avant le départ pour la prise en charge et d'adapter l'organisation lorsqu'un changement d'horaire est observé.",
  },
  {
    question: "Les véhicules utilisés sont-ils électriques ?",
    answer:
      "Oui. Aujourd'hui, la flotte exploitée par Dakar Fleet est entièrement électrique et comprend notamment les modèles BYD Atto 2 et BYD Dolphin.",
  },
  {
    question: "Peut-on réserver un transfert vers Saly ou Mbour ?",
    answer:
      "Oui. Saly et Mbour font partie des zones principales desservies. Le trajet et les conditions sont confirmés au moment de la demande.",
  },
  {
    question: "Comment demander un tarif ?",
    answer:
      "Envoyez la date, l'horaire, le numéro de vol et la destination via WhatsApp. Les transferts aéroport sont proposés à partir de 30 000 FCFA, selon le trajet et les conditions confirmées lors de la réservation.",
  },
] as const;

export default function TransfertAeroportPage() {
  const lang = "fr";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "fr",
    page_type: "service",
    service_context: "airport_transfer",
  };
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je souhaite réserver un transfert aéroport depuis/vers AIBD.`;

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            Transfert avec chauffeur depuis et vers l&apos;AIBD
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Votre <span className="italic text-[#C9A84C]">Transfert Aéroport</span>
            <br />
            Premium et Sans Stress
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Organisez votre trajet entre l&apos;aéroport AIBD, Dakar, Diamniadio et les principales
            destinations desservies. Dakar Fleet assure un service avec chauffeur disponible
            24h/24 et 7j/7, sur réservation.
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
            Préparer mon transfert
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Prise en charge</p>
          <h2 className="mt-3 font-title text-4xl text-white">Comment organiser votre transfert AIBD</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            La préparation commence avant l&apos;arrivée du chauffeur. Les informations de vol et de
            destination servent à organiser le trajet de façon claire, sans promettre une
            surveillance automatisée ou une attente illimitée.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pickupSteps.map((step, index) => (
            <article key={step.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                Étape {index + 1}
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
            <h2 className="mt-3 font-title text-4xl text-white">Les principales zones desservies</h2>
            <p className="mt-4 leading-8 text-white/70">
              Depuis ou vers l&apos;AIBD, Dakar Fleet organise principalement des transferts pour les
              destinations suivantes. Un autre trajet autour de Dakar peut être étudié selon la
              distance et la disponibilité.
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Disponibilité</p>
            <h2 className="mt-3 font-title text-4xl text-white">Un service organisé 24h/24 et 7j/7</h2>
            <p className="mt-4 leading-8 text-white/70">
              Les départs matinaux, arrivées tardives et transferts de nuit peuvent être pris en
              charge. La demande préalable reste importante pour confirmer le véhicule, le
              chauffeur et les conditions du trajet souhaité.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet est implanté à Diamniadio, SD City, et intervient comme service de
              transport avec chauffeur, sans présenter ce lieu comme une agence ouverte au public.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Véhicules</p>
            <h2 className="mt-3 font-title text-4xl text-white">Une flotte actuelle entièrement électrique</h2>
            <p className="mt-4 leading-8 text-white/70">
              Aujourd&apos;hui, Dakar Fleet opère des véhicules 100 % électriques, notamment les BYD
              Atto 2 et BYD Dolphin déjà présentés sur le site. Leur fonctionnement silencieux
              contribue à une expérience calme entre l&apos;aéroport et votre destination.
            </p>
            <Link
              href={localizedRoutes.electricChauffeur.fr}
              className="mt-5 inline-flex text-sm font-medium text-[#4CAF7D] underline-offset-4 hover:underline"
            >
              Découvrir la flotte électrique actuelle
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Pour qui ?</p>
            <h2 className="mt-3 font-title text-4xl text-white">Un transfert adapté à différents séjours</h2>
            <ul className="mt-6 space-y-3">
              {audiences.map((audience) => (
                <li key={audience} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 leading-7 text-white/70">
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Tarif et devis</p>
          <h2 className="mt-3 font-title text-4xl text-white">Un prix confirmé selon votre trajet</h2>
          <p className="mt-4 leading-8 text-white/70">
            L&apos;offre de transfert aéroport est affichée à partir de 30 000 FCFA. Le prix dépend
            notamment de la destination et des conditions du trajet. La demande de réservation
            permet de confirmer le montant applicable, sans appliquer un tarif générique à toutes
            les destinations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Questions fréquentes</p>
        <h2 className="mt-3 font-title text-4xl text-white">Préparer un transfert aéroport</h2>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
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
          <h2 className="font-title text-3xl text-white">Vous avez aussi besoin d&apos;un chauffeur à Dakar ?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/65">
            Prolongez votre transfert avec un déplacement ponctuel ou une mise à disposition selon
            votre programme.
          </p>
          <Link
            href={localizedRoutes.businessChauffeur.fr}
            className="mt-5 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
          >
            Découvrir le service chauffeur privé et business
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-title text-3xl text-white">Préparer votre transfert AIBD</h2>
            <p className="mt-2 text-white/60">
              Indiquez votre vol, votre destination et la date souhaitée dans le message WhatsApp.
            </p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Bonjour, je souhaite réserver un transfert pour l'aéroport AIBD.",
            }}
            analyticsContext={analyticsContext}
          />
        </div>
      </section>

      <Footer lang={lang} analyticsContext={analyticsContext} />
      <WhatsAppFloat waUrl={WA} label="Réserver" analyticsContext={analyticsContext} />
    </main>
  );
}
