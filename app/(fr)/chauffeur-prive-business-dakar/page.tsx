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
  title: "Chauffeur Privé & Business VTC Dakar | Dakar Fleet",
  description:
    "Chauffeur privé à Dakar pour trajets ponctuels, rendez-vous et mise à disposition. Service 24h/24 à Dakar, Diamniadio et zones principales sur devis.",
  keywords: [
    "chauffeur privé Dakar",
    "location voiture avec chauffeur Sénégal",
    "VTC business Dakar",
    "transport professionnel Dakar",
    "mise à disposition VTC Dakar",
    "chauffeur Diamniadio",
  ],
  openGraph: {
    title: "Chauffeur Privé & Mise à disposition | Dakar",
    description:
      "Organisez vos rendez-vous, transferts professionnels et mises à disposition avec chauffeur à Dakar.",
    url: `${SITE_URL}${localizedRoutes.businessChauffeur.fr}`,
  },
  twitter: {
    title: "Chauffeur Privé & Mise à disposition | Dakar",
    description:
      "Organisez vos rendez-vous, transferts professionnels et mises à disposition avec chauffeur à Dakar.",
  },
  alternates: {
    canonical: `${SITE_URL}${localizedRoutes.businessChauffeur.fr}`,
    languages: {
      fr: `${SITE_URL}${localizedRoutes.businessChauffeur.fr}`,
      en: `${SITE_URL}${localizedRoutes.businessChauffeur.en}`,
    },
  },
};

const useCases = [
  "Trajet ponctuel vers un rendez-vous, un hôtel ou un lieu d'événement",
  "Enchaînement de plusieurs rendez-vous au cours d'une demi-journée ou d'une journée",
  "Déplacements entre Dakar, Diamniadio et l'aéroport AIBD",
  "Transport de visiteurs, collaborateurs ou clients pendant leur séjour",
  "Mise à disposition adaptée à un programme communiqué à l'avance",
] as const;

const servicePrinciples = [
  {
    title: "Organisation claire",
    text: "Les horaires, étapes et contacts utiles sont recueillis avant la prestation pour préparer le programme du chauffeur.",
  },
  {
    title: "Discrétion professionnelle",
    text: "Le service est conçu pour offrir un cadre calme et respectueux pendant les déplacements liés à votre activité.",
  },
  {
    title: "Continuité des déplacements",
    text: "Pour une mise à disposition, le chauffeur suit le programme confirmé et reste le point de contact pendant la durée convenue.",
  },
] as const;

const faq = [
  {
    question: "Quelle différence entre un trajet simple et une mise à disposition ?",
    answer:
      "Un trajet simple relie un point de départ à une destination. La mise à disposition couvre une durée et un programme convenus, avec un chauffeur pour plusieurs étapes éventuelles.",
  },
  {
    question: "Le service est-il disponible 24h/24 ?",
    answer:
      "Oui. Dakar Fleet organise des prestations 24h/24 et 7j/7. La réservation sert à confirmer la disponibilité pour l'horaire et le programme demandés.",
  },
  {
    question: "Quelles zones sont couvertes ?",
    answer:
      "Les zones principales sont Dakar, Diamniadio, AIBD, Thiès, Mbour et Saly. D'autres trajets autour de Dakar peuvent être étudiés selon l'itinéraire et la disponibilité.",
  },
  {
    question: "Peut-on organiser plusieurs rendez-vous dans la même journée ?",
    answer:
      "Oui. Communiquez les étapes et horaires prévus afin que Dakar Fleet puisse étudier une mise à disposition adaptée au programme.",
  },
  {
    question: "Quels véhicules sont actuellement utilisés ?",
    answer:
      "La flotte actuellement exploitée est entièrement électrique et comprend notamment des BYD Atto 2 et BYD Dolphin. Le véhicule est confirmé selon la prestation et la disponibilité.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Envoyez la date, les lieux, les horaires, la durée et les étapes prévues via WhatsApp. La mise à disposition est tarifée sur demande selon le besoin confirmé.",
  },
] as const;

export default function BusinessPage() {
  const lang = "fr";
  const t = content[lang];
  const analyticsContext: AnalyticsContext = {
    locale: "fr",
    page_type: "service",
    service_context: "business_chauffeur",
  };
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je souhaite réserver une mise à disposition avec chauffeur.`;

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
            Chauffeur privé et mise à disposition
          </p>
          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Votre <span className="italic text-[#C9A84C]">Chauffeur Privé</span>
            <br />
            pour affaires et hôtels
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Organisez un trajet ponctuel ou une mise à disposition pour vos rendez-vous, vos
            visiteurs et vos déplacements professionnels à Dakar. Le programme, la durée et les
            zones desservies sont confirmés avant la prestation.
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
            Demander une mise à disposition
          </TrackedLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Choisir la formule</p>
        <h2 className="mt-3 font-title text-4xl text-white">Trajet ponctuel ou chauffeur à disposition</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <h3 className="font-title text-2xl text-white">Le trajet ponctuel</h3>
            <p className="mt-3 leading-7 text-white/65">
              Il répond à un déplacement défini entre une prise en charge et une destination :
              rendez-vous, hôtel, événement, gare ou aéroport.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <h3 className="font-title text-2xl text-white">La mise à disposition</h3>
            <p className="mt-3 leading-7 text-white/65">
              Elle convient à un programme comportant plusieurs étapes ou une durée définie. Le
              périmètre et les horaires sont précisés dans le devis.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Usages</p>
            <h2 className="mt-3 font-title text-4xl text-white">Des déplacements adaptés au programme</h2>
            <ul className="mt-6 space-y-3">
              {useCases.map((useCase) => (
                <li key={useCase} className="rounded-xl border border-white/10 bg-black/25 px-5 py-4 leading-7 text-white/70">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Disponibilité</p>
            <h2 className="mt-3 font-title text-4xl text-white">Un service accessible 24h/24</h2>
            <p className="mt-4 leading-8 text-white/70">
              Dakar Fleet organise ses prestations 24h/24 et 7j/7. Pour un déplacement matinal,
              tardif ou un programme de plusieurs heures, la réservation permet de confirmer le
              chauffeur et les conditions de prise en charge.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              L&apos;activité est implantée à Diamniadio, SD City. Ce repère décrit l&apos;implantation de
              Dakar Fleet et non une agence déclarée ouverte au public.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Qualité de service</p>
        <h2 className="mt-3 font-title text-4xl text-white">Les principes d&apos;une prestation professionnelle</h2>
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4CAF7D]">Flotte actuelle</p>
            <h2 className="mt-3 font-title text-4xl text-white">Des véhicules BYD électriques</h2>
            <p className="mt-4 leading-8 text-white/70">
              La flotte actuellement exploitée par Dakar Fleet est entièrement électrique et
              comprend notamment les modèles BYD Atto 2 et BYD Dolphin. Leur fonctionnement
              silencieux convient aux trajets entre rendez-vous et aux échanges en déplacement.
            </p>
            <Link
              href={localizedRoutes.electricChauffeur.fr}
              className="mt-5 inline-flex text-sm font-medium text-[#4CAF7D] underline-offset-4 hover:underline"
            >
              Comprendre le service en véhicule électrique
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Zones principales</p>
            <h2 className="mt-3 font-title text-4xl text-white">Dakar, Diamniadio et au-delà</h2>
            <p className="mt-4 leading-8 text-white/70">
              Les prestations couvrent principalement Dakar, Diamniadio, AIBD, Thiès, Mbour et
              Saly. D&apos;autres demandes autour de Dakar sont étudiées selon l&apos;itinéraire, le programme
              et la disponibilité des véhicules.
            </p>
            <Link
              href={localizedRoutes.airportTransfer.fr}
              className="mt-5 inline-flex text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Voir le service de transfert aéroport AIBD
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Tarification</p>
        <h2 className="mt-3 font-title text-4xl text-white">Une proposition adaptée à la prestation</h2>
        <p className="mt-4 leading-8 text-white/70">
          La mise à disposition est proposée sur demande. Le devis tient compte de la durée, des
          étapes, des horaires et des zones à desservir. Transmettre un programme même provisoire
          permet d&apos;obtenir une réponse plus précise.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">Questions fréquentes</p>
          <h2 className="mt-3 font-title text-4xl text-white">Préparer votre chauffeur privé</h2>
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
            <h2 className="font-title text-3xl text-white">Demander un devis de mise à disposition</h2>
            <p className="mt-2 text-white/60">Indiquez la durée, les étapes et le lieu de prise en charge.</p>
          </div>
          <ContactForm
            strings={{
              ...t.contact.form,
              introMessage: "Bonjour, je souhaite un devis pour une mise à disposition / chauffeur privé.",
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
