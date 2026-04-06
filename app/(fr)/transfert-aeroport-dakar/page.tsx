import { Metadata } from "next";
import Image from "next/image";
import { content } from "@/i18n/content";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactForm } from "@/components/ContactForm";
import { WA_BASE, PHONE_DISPLAY } from "@/lib/constants";

// SPECIFIC SEO METADATA FOR THIS SILO PAGE
export const metadata: Metadata = {
  title: "Transfert Aéroport AIBD Dakar | Chauffeur Privé - Dakar Fleet",
  description:
    "Navette et transfert aéroport AIBD vers Dakar, Saly, Pointe Sarène. Accueil VIP avec pancarte, chauffeur privé, SUV électrique haut de gamme.",
  keywords: [
    "transfert aéroport Dakar",
    "navette AIBD",
    "taxi aéroport AIBD",
    "chauffeur privé aéroport Dakar",
    "transport VIP AIBD",
    "VTC AIBD Dakar"
  ],
  openGraph: {
    title: "Transfert Aéroport AIBD Dakar | VTC Premium",
    description: "Réservez votre navette premium depuis/vers l'aéroport AIBD. Chauffeur privé, accueil VIP avec pancarte.",
  }
};

export default function TransfertAeroportPage() {
  const lang = "fr";
  const t = content[lang];
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je souhaite réserver un transfert aéroport depuis/vers AIBD.`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader lang={lang} nav={t.nav} waUrl={WA} phoneDisplay={PHONE_DISPLAY} />

      {/* HERO DEDICATED TO AIRPORT */}
      <section className="relative overflow-hidden border-b border-white/10 pt-16 lg:pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Navette Aéroportuaire AIBD
          </div>

          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Votre <span className="italic text-[#C9A84C]">Transfert Aéroport</span>
            <br />
            Premium et Sans Stress
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Commencez ou terminez votre séjour au Sénégal dans les meilleures conditions. 
            Nos chauffeurs privés vous accueillent avec le sourire pour vous conduire à destination 
            dans nos véhicules électriques silencieux.
          </p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">✈️</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Suivi de vol</h3>
            <p className="mt-2 text-sm text-white/60">Nous ajustons notre arrivée en cas de retard de votre avion.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">👔</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Accueil VIP</h3>
            <p className="mt-2 text-sm text-white/60">Vous êtes attendu à la sortie avec une tablette à votre nom.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Flotte Électrique</h3>
            <p className="mt-2 text-sm text-white/60">Trajet relaxant, climatisé et totalement silencieux.</p>
          </div>
        </div>
      </section>

      {/* QUICK FORM SECTION */}
      <section className="bg-[rgba(247,243,238,0.03)] border-y border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="font-title text-3xl text-white">Prêt à réserver votre transfert ?</h2>
             <p className="mt-2 text-white/60">Prix fixe, sans frais cachés. Réponse rapide via WhatsApp.</p>
          </div>
          <ContactForm strings={{...t.contact.form, introMessage: "Bonjour, je souhaite réserver un transfert pour l'aéroport AIBD."}} />
        </div>
      </section>

      <Footer lang={lang} />
      <WhatsAppFloat waUrl={WA} label="Réserver" />
    </main>
  );
}
