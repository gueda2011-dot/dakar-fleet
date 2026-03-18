"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Transfert Aéroport",
    description:
      "Prise en charge fiable pour vos arrivées et départs entre l'AIBD, Dakar et vos lieux de séjour, avec chauffeur professionnel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#C9A84C]">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur à votre service pour quelques heures, une demi-journée ou la journée, selon vos besoins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#C9A84C]">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Transport Business",
    description:
      "Déplacements professionnels, rendez-vous, hôtels, conférences et accueil de clients VIP à Dakar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#C9A84C]">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
  },
  {
    title: "Tours & Excursions",
    description:
      "Dakar Tour, Lac Rose, Bandia et trajets sur mesure pour une clientèle locale et internationale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#C9A84C]">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

const pricing = [
  {
    title: "Transfert Aéroport",
    price: "À partir de 30 000 FCFA",
    details:
      "Tarif indicatif selon l'horaire, la zone de prise en charge et le nombre de passagers.",
  },
  {
    title: "Dakar Tour",
    price: "À partir de 65 000 FCFA",
    details:
      "Formule idéale pour découvrir Dakar avec confort, souplesse et chauffeur dédié.",
  },
  {
    title: "Lac Rose",
    price: "À partir de 65 000 FCFA",
    details:
      "Tarif ajusté selon le programme, le temps d'attente et les prestations retenues.",
  },
  {
    title: "Mise à disposition",
    price: "Sur demande",
    details:
      "Demi-journée, journée complète ou prestation sur mesure selon vos besoins.",
  },
];

const trustPoints = [
  "Réponse WhatsApp en moins de 10 min",
  "Chauffeurs professionnels & discrets",
  "Véhicules électriques BYD dernière génération",
  "Basé à Dakar, disponible 24h/24",
  "Solution dédiée hôtels & entreprises",
  "Trajets privés, VIP et business",
];

const partnerPoints = [
  "Solution simple pour hôtels et conciergeries",
  "Prise en charge de clients VIP et business",
  "Image premium et responsable",
  "Organisation fluide des transferts et trajets privés",
];

const fleetSpecs = {
  atto2: [
    { label: "Passagers", value: "4" },
    { label: "Bagages", value: "3 valises" },
    { label: "Autonomie", value: "312 km" },
    { label: "Équipements", value: "Wifi, USB-C, Climatisation" },
  ],
  dolphin: [
    { label: "Passagers", value: "4" },
    { label: "Bagages", value: "2 valises" },
    { label: "Autonomie", value: "340 km" },
    { label: "Équipements", value: "Wifi, USB-C, Climatisation" },
  ],
};

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", date: "", type: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Bonjour Dakar Fleet,%0Aje souhaite réserver un trajet.%0A%0ANom : ${form.nom}%0ADate : ${form.date}%0AType : ${form.type}`;
    window.open(`https://wa.me/221777796922?text=${msg}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[1.6rem] border border-[#C9A84C]/30 bg-white/5 p-8 text-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF7D" strokeWidth="1.5" className="h-10 w-10"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <p className="font-title text-2xl text-[#F7F3EE]">Demande envoyée</p>
        <p className="text-sm text-white/60">Nous revenons vers vous sous 10 minutes via WhatsApp.</p>
        <button onClick={() => setSent(false)} className="mt-2 text-xs text-white/40 underline underline-offset-4">Nouvelle demande</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">Demande rapide</p>
      <input
        type="text"
        placeholder="Votre nom"
        required
        value={form.nom}
        onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F7F3EE] placeholder-white/30 outline-none transition focus:border-[#C9A84C]/50 focus:bg-white/8"
      />
      <input
        type="date"
        required
        value={form.date}
        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#C9A84C]/50 [color-scheme:dark]"
      />
      <select
        required
        value={form.type}
        onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
        className="rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#C9A84C]/50"
      >
        <option value="">Type de trajet</option>
        <option>Transfert Aéroport</option>
        <option>Mise à disposition</option>
        <option>Transport Business</option>
        <option>Tour & Excursion</option>
        <option>Autre</option>
      </select>
      <button
        type="submit"
        className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
      >
        Envoyer via WhatsApp
      </button>
    </form>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="font-title text-[1.45rem] tracking-[0.22em] text-[#C9A84C]">
            DAKAR<span className="text-[#F7F3EE]">FLEET</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-[0.78rem] uppercase tracking-[0.12em] text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#tarifs" className="transition hover:text-white">Tarifs</a>
            <a href="#flotte" className="transition hover:text-white">Flotte</a>
            <a href="#partenaires" className="transition hover:text-white">Partenaires</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+221777796922" className="hidden text-sm text-[#C9A84C] transition hover:text-[#E8C97A] sm:block">
              +221 77 779 69 22
            </a>
            <a
              href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
              className="rounded-full bg-[#C9A84C] px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
            >
              Réserver
            </a>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="Menu"
            >
              <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-80" : "max-h-0"}`}>
          <nav className="flex flex-col gap-0 border-t border-white/10 bg-[rgba(10,10,10,0.97)]">
            {["#services:Services", "#tarifs:Tarifs", "#flotte:Flotte", "#partenaires:Partenaires", "#contact:Contact"].map((item) => {
              const [href, label] = item.split(":");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 px-6 py-4 text-sm uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
                >
                  {label}
                </a>
              );
            })}
            <a
              href="tel:+221777796922"
              className="px-6 py-4 text-sm text-[#C9A84C]"
            >
              +221 77 779 69 22
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Transport premium électrique · Dakar
            </div>

            <h1 className="font-title text-5xl font-light leading-[0.98] tracking-[-0.02em] text-[#F7F3EE] sm:text-6xl lg:text-7xl">
              L&apos;élégance du
              <br />
              <span className="italic text-[#C9A84C]">mouvement</span>
              <br />
              <span className="font-semibold">sans compromis</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[1.03rem] leading-8 text-white/70">
              Chauffeurs privés professionnels à votre service à Dakar.
              <span className="text-white"> Véhicules électriques haut de gamme</span>,
              transferts aéroport, déplacements d'affaires, excursions et
              prestations sur mesure pour particuliers, hôtels et entreprises.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
                className="rounded-full bg-[#C9A84C] px-6 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
              >
                Réserver via WhatsApp
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-6 py-4 text-sm uppercase tracking-[0.1em] text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                Découvrir nos services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#C9A84C]/10 blur-3xl" />
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#C9A84C]/20 bg-white/5 p-4 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#111111]">
                <div className="relative h-[320px] w-full sm:h-[560px]">
                  <Image
                    src="/atto2.png"
                    alt="BYD Atto 2 Dakar Fleet"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>

                <div className="grid gap-4 border-t border-white/10 bg-black/55 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Positionnement</p>
                    <p className="mt-2 text-base text-white">
                      Mobilité premium avec chauffeur pour clients privés, hôtels et entreprises.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Signature</p>
                    <p className="mt-2 text-base text-white">
                      Confort, discrétion, ponctualité et image moderne.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECO BANNER ── */}
      <section className="border-y border-[#2E6B4A]/30 bg-[rgba(46,107,74,0.12)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4CAF7D] animate-pulse" />
            <p className="text-sm text-[#F7F3EE]">
              Dakar Fleet s'engage pour une mobilité premium et durable ·
              <span className="font-medium text-[#4CAF7D]"> 100% véhicules électriques</span>
              {" "}· engagement vers une recharge à l'énergie verte
            </p>
          </div>
          <div className="font-title text-2xl text-[#4CAF7D]">100% Green Vision</div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">Services</p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                Des prestations pensées pour les voyageurs, les hôtels et les entreprises
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Dakar Fleet propose une offre claire, élégante et efficace, conçue pour les clients particuliers, business et hôteliers.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 80}>
                <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/35 hover:bg-white/[0.07]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10">
                    {service.icon}
                  </div>
                  <h3 className="font-title text-2xl text-[#F7F3EE]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{service.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* CTA intermédiaire */}
          <FadeIn delay={200}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-[1.8rem] border border-[#C9A84C]/15 bg-white/3 py-10 text-center">
              <p className="text-white/60 text-sm uppercase tracking-[0.15em]">Prêt à réserver ?</p>
              <a
                href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
                className="rounded-full bg-[#C9A84C] px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
              >
                Réserver via WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section id="tarifs" className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">Tarifs</p>
                <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  Des prix de départ pour rassurer, avec la souplesse du sur mesure
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  Les tarifs ci-dessous sont donnés à titre indicatif pour aider le client à se situer rapidement. Le prix final dépend du trajet, de l'horaire, du nombre de passagers et des options demandées.
                </p>
                <div className="mt-8 rounded-[1.8rem] border border-[#C9A84C]/20 bg-[#C9A84C]/10 p-6 text-white/80">
                  Pour les hôtels, entreprises, mises à disposition longues ou prestations sur mesure, Dakar Fleet propose des offres personnalisées.
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              {pricing.map((item, i) => (
                <FadeIn key={item.title} delay={i * 60}>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
                    <h3 className="font-title text-2xl text-[#F7F3EE]">{item.title}</h3>
                    <p className="mt-3 text-2xl font-semibold text-[#C9A84C]">{item.price}</p>
                    <p className="mt-3 leading-7 text-white/70">{item.details}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOTTE ── */}
      <section id="flotte" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">Flotte</p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                Une flotte électrique moderne en expansion
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Dakar Fleet développe une flotte pensée pour accompagner la croissance d'une demande premium à Dakar, avec un positionnement moderne, responsable et orienté qualité de service.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* BYD Atto 2 */}
            <FadeIn>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <div className="relative h-[280px] w-full sm:h-[390px]">
                  <Image
                    src="/atto2.png"
                    alt="BYD Atto 2"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">SUV Premium</p>
                  <h3 className="mt-2 font-title text-3xl text-[#F7F3EE]">BYD Atto 2</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Confort haut de gamme, image affirmée et expérience premium adaptée aux clients business, VIP et hôteliers.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/8 pt-5">
                    {fleetSpecs.atto2.map((spec) => (
                      <div key={spec.label} className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">{spec.label}</p>
                        <p className="mt-1 text-sm text-white/85">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* BYD Dolphin */}
            <FadeIn delay={100}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <div className="relative h-[280px] w-full sm:h-[390px]">
                  <Image
                    src="/dolphin.png"
                    alt="BYD Dolphin"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Compact Premium</p>
                  <h3 className="mt-2 font-title text-3xl text-[#F7F3EE]">BYD Dolphin</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Mobilité urbaine élégante, silencieuse et efficace pour les trajets privés, professionnels et hôteliers à Dakar.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/8 pt-5">
                    {fleetSpecs.dolphin.map((spec) => (
                      <div key={spec.label} className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">{spec.label}</p>
                        <p className="mt-1 text-sm text-white/85">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section id="partenaires" className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <FadeIn>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">Partenaires</p>
                <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  Une solution crédible pour hôtels, conciergeries et entreprises
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  Dakar Fleet peut devenir un partenaire fiable pour la gestion des transferts, des déplacements privés et des prestations à destination d'une clientèle premium.
                </p>
                <a
                  href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20discuter%20d%27un%20partenariat."
                  className="mt-8 inline-block rounded-full border border-[#C9A84C]/40 px-6 py-3 text-sm uppercase tracking-[0.1em] text-[#C9A84C] transition hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
                >
                  Discuter d'un partenariat
                </a>
              </div>
            </FadeIn>

            <div className="grid gap-4">
              {partnerPoints.map((point, i) => (
                <FadeIn key={point} delay={i * 70}>
                  <div className="flex items-start gap-3 rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5 text-white/80">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {point}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="grid gap-10 rounded-[2rem] border border-[#C9A84C]/20 bg-white/3 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Réservation</p>
                <h2 className="mt-3 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  Réservez votre transport<br />
                  <span className="italic text-[#C9A84C]">premium</span> à Dakar
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                  Transfert aéroport, chauffeur privé, déplacement business, excursion ou partenariat hôtelier : contactez Dakar Fleet pour une réponse rapide.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
                    className="rounded-full bg-[#C9A84C] px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+221777796922"
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
                  >
                    Appeler maintenant
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-white/70 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="font-title text-2xl tracking-[0.22em] text-[#C9A84C]">
              DAKAR<span className="text-[#F7F3EE]">FLEET</span>
            </div>
            <p className="mt-4 leading-7">
              Service de transport premium avec chauffeur à Dakar, axé sur le confort, la réactivité et une image moderne.
            </p>
          </div>

          <div>
            <h3 className="font-title text-2xl text-[#F7F3EE]">Contact</h3>
            <div className="mt-4 space-y-3">
              <p>+221 77 779 69 22</p>
              <p>Dakar, Sénégal</p>
              <p>Réservation rapide via WhatsApp</p>
            </div>
          </div>

          <div>
            <h3 className="font-title text-2xl text-[#F7F3EE]">Services clés</h3>
            <div className="mt-4 space-y-3">
              <p>Transferts aéroport</p>
              <p>Mise à disposition</p>
              <p>Excursions et tours</p>
              <p>Partenariats hôtels &amp; entreprises</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Réserver
      </a>
    </main>
  );
}
