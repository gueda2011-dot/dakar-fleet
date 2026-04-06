import { Metadata } from "next";
import { content } from "@/i18n/content";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactForm } from "@/components/ContactForm";
import { WA_BASE, PHONE_DISPLAY } from "@/lib/constants";

// SPECIFIC SEO METADATA
export const metadata: Metadata = {
  title: "VTC Électrique Dakar | Location de véhicule vert (BYD) Premium",
  description:
    "Optez pour un VTC 100% électrique à Dakar. Dakar Fleet déploie des SUV BYD premium, silencieux et sans émissions pour vos déplacements locaux et professionnels.",
  keywords: [
    "VTC électrique Dakar",
    "taxi écologique Sénégal",
    "location BYD Dakar",
    "mobilité premium Sénégal",
    "transport vert Dakar",
  ],
  openGraph: {
    title: "100% Électrique, 100% Premium à Dakar",
    description: "Expérimentez le silence et la technologie de notre flotte électrique pour vos trajets privés et professionnels au Sénégal.",
  }
};

export default function ElectricFleetPage() {
  const lang = "fr";
  const t = content[lang];
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je suis intéressé(e) par vos services de transport électrique.`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader lang={lang} nav={t.nav} waUrl={WA} phoneDisplay={PHONE_DISPLAY} />

      <section className="relative overflow-hidden border-b border-white/10 pt-16 lg:pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(46,107,74,0.15),transparent_40%),linear-gradient(135deg,#0A0A0A_0%,#0e0f0e_50%,#0A0A0A_100%)]" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#4CAF7D]/30 bg-[#4CAF7D]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#4CAF7D]">
            <span className="h-2 w-2 bg-[#4CAF7D] rounded-full animate-pulse" />
            La Révolution Verte à Dakar
          </div>

          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            L'Élégance du <span className="italic text-[#4CAF7D]">Zéro Émission</span>
            <br />
            sans aucun compromis.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Dakar Fleet s'engage vers une mobilité responsable avec la première flotte de VTC 
            exclusivement composée de véhicules électriques Premium (BYD Atto 2 & Dolphin) au Sénégal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4CAF7D]/15">
              <span className="text-2xl">🔇</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Silence absolu</h3>
            <p className="mt-2 text-sm text-white/60">Une cabine ultra-insonorisée, sans vibration moteur, de jour comme de nuit.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4CAF7D]/15">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">100% Écologique</h3>
            <p className="mt-2 text-sm text-white/60">Zéro émission de CO2 sur vos trajets. Vous roulez plus propre dans Dakar.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4CAF7D]/15">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Technologie Premium</h3>
            <p className="mt-2 text-sm text-white/60">Tableaux de bords futuristes, wifi intégré et climatisation performante.</p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(247,243,238,0.03)] border-y border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="font-title text-3xl text-white">Faites le choix de l'électrique</h2>
             <p className="mt-2 text-white/60">Transmettez-nous votre besoin, nos véhicules sont prêts.</p>
          </div>
          <ContactForm strings={{...t.contact.form, introMessage: "Bonjour, j'aimerais réserver un trajet avec l'un de vos véhicules électriques."}} />
        </div>
      </section>

      <Footer lang={lang} />
      <WhatsAppFloat waUrl={WA} label="Réserver" />
    </main>
  );
}
