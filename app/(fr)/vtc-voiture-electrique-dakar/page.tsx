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

const title = "VTC Électrique Dakar | Chauffeur en véhicule BYD";
const description =
  "Découvrez le service avec chauffeur de Dakar Fleet dans sa flotte actuellement entièrement électrique : BYD Atto 2 et BYD Dolphin à Dakar et alentours.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "VTC électrique Dakar",
    "chauffeur véhicule électrique Dakar",
    "location BYD Dakar",
    "BYD Atto 2 Dakar",
    "BYD Dolphin Dakar",
  ],
  openGraph: {
    title: "VTC électrique avec chauffeur à Dakar",
    description:
      "Dakar Fleet opère aujourd'hui une flotte entièrement électrique pour ses services avec chauffeur.",
    url: `${SITE_URL}${localizedRoutes.electricChauffeur.fr}`,
  },
  twitter: {
    title: "VTC électrique avec chauffeur à Dakar",
    description:
      "Dakar Fleet opère aujourd'hui une flotte entièrement électrique pour ses services avec chauffeur.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.electricChauffeur.fr}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.electricChauffeur.fr}`,
      en: `${SITE_URL}${localizedRoutes.electricChauffeur.en}`,
    },
  },
};

const webPage = buildWebPage({
  canonical: `${SITE_URL}${localizedRoutes.electricChauffeur.fr}`,
  name: title,
  description,
  lang: "fr",
  mainEntityId: SERVICE_ELECTRIC_ID,
});

const benefits = [
  {
    title: "Pas d'émissions directes à l'échappement",
    text: "Pendant la conduite, un véhicule électrique ne produit pas d'émissions directes à l'échappement. Cette formulation ne prétend pas que son cycle de vie est sans impact.",
  },
  {
    title: "Fonctionnement silencieux",
    text: "La motorisation électrique réduit le bruit mécanique et contribue à une ambiance calme pendant le trajet.",
  },
  {
    title: "Expérience moderne",
    text: "Les BYD Atto 2 et BYD Dolphin actuellement exploitées accompagnent les transferts privés, aéroport et business de Dakar Fleet.",
  },
] as const;

const useCases = [
  "Transferts entre l'aéroport AIBD et Dakar ou les zones principales",
  "Trajets privés et déplacements du quotidien avec chauffeur",
  "Rendez-vous professionnels et mise à disposition",
  "Déplacements vers Diamniadio, Thiès, Mbour ou Saly sur réservation",
] as const;

const faq = [
  {
    question: "La flotte Dakar Fleet est-elle entièrement électrique ?",
    answer:
      "Oui, à ce jour. La flotte actuellement exploitée est entièrement électrique. Dakar Fleet pourra toutefois ajouter ultérieurement d'autres motorisations, notamment hybrides, selon ses besoins opérationnels.",
  },
  {
    question: "Quels modèles électriques sont actuellement utilisés ?",
    answer:
      "Dakar Fleet exploite notamment des BYD Atto 2 et BYD Dolphin. Le modèle affecté à un trajet dépend de la prestation et de la disponibilité.",
  },
  {
    question: "Un véhicule électrique est-il totalement sans émissions ?",
    answer:
      "Non. Dakar Fleet indique uniquement l'absence d'émissions directes à l'échappement pendant la conduite. La fabrication du véhicule et la production de l'électricité ont aussi un impact environnemental.",
  },
  {
    question: "Quelles zones sont accessibles avec la flotte actuelle ?",
    answer:
      "Les zones principales sont Dakar, Diamniadio, AIBD, Thiès, Mbour et Saly. Chaque trajet est confirmé selon l'itinéraire et la disponibilité, sans publier une distance maximale générique.",
  },
  {
    question: "Comment réserver un trajet en véhicule électrique ?",
    answer:
      "Envoyez la date, l'horaire, le lieu de prise en charge et la destination via WhatsApp. Dakar Fleet confirme ensuite la faisabilité et la disponibilité.",
  },
] as const;

export default function ElectricFleetPage() {
  const lang = "fr";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "fr",
    page_type: "service",
    service_context: "electric_mobility",
  };
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je suis intéressé(e) par vos services de transport électrique.`;

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
            Service avec chauffeur en véhicule électrique
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Une flotte aujourd&apos;hui
            <br />
            <span className="italic text-[#4CAF7D]">entièrement électrique</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Dakar Fleet réalise actuellement ses prestations avec des véhicules électriques BYD
            Atto 2 et BYD Dolphin. Cette flotte dessert les transferts aéroport, les trajets privés
            et les déplacements professionnels dans les principales zones couvertes.
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
            Réserver un trajet électrique
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Pourquoi l&apos;électrique ?</p>
        <h2 className="mt-3 font-title text-4xl text-white">Des bénéfices décrits sans promesse absolue</h2>
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Modèles actuels</p>
            <h2 className="mt-3 font-title text-4xl text-white">BYD Atto 2 et BYD Dolphin</h2>
            <p className="mt-4 leading-8 text-white/70">
              Ces deux modèles composent notamment la flotte exploitée aujourd&apos;hui. L&apos;Atto 2 offre
              un format SUV compact, tandis que la Dolphin propose un format compact. L&apos;affectation
              du véhicule dépend du service demandé et de la disponibilité.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              La composition de la flotte peut évoluer. Dakar Fleet pourra ajouter plus tard des
              véhicules hybrides ou d&apos;autres modèles, tout en décrivant ici la situation actuelle.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Usages</p>
            <h2 className="mt-3 font-title text-4xl text-white">Pour quels déplacements ?</h2>
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Périmètre</p>
            <h2 className="mt-3 font-title text-4xl text-white">Des trajets confirmés selon l&apos;itinéraire</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet intervient principalement à Dakar, Diamniadio, AIBD, Thiès, Mbour et Saly.
              Les autres demandes autour de Dakar sont examinées selon le trajet et la disponibilité.
              Aucune autonomie maximale unique n&apos;est promise pour toutes les conditions d&apos;usage.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Continuité de service</p>
            <h2 className="mt-3 font-title text-4xl text-white">Une disponibilité confirmée à la réservation</h2>
            <p className="mt-4 leading-8 text-white/70">
              La réservation permet à Dakar Fleet de confirmer la faisabilité du trajet et la
              disponibilité d&apos;un véhicule pour l&apos;horaire demandé.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Questions fréquentes</p>
          <h2 className="mt-3 font-title text-4xl text-white">Le service électrique en pratique</h2>
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
            <h2 className="font-title text-3xl text-white">Vous arrivez à l&apos;AIBD ?</h2>
            <Link
              href={localizedRoutes.airportTransfer.fr}
              className="mt-4 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Préparer un transfert aéroport AIBD
            </Link>
          </div>
          <div>
            <h2 className="font-title text-3xl text-white">Un programme professionnel ?</h2>
            <Link
              href={localizedRoutes.businessChauffeur.fr}
              className="mt-4 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Découvrir le chauffeur privé et business
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-title text-3xl text-white">Réserver un trajet avec la flotte actuelle</h2>
            <p className="mt-2 text-white/60">Indiquez votre point de départ, votre destination et la date souhaitée.</p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Bonjour, j'aimerais réserver un trajet avec l'un de vos véhicules électriques.",
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
