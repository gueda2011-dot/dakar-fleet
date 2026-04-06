import { Metadata } from "next";
import { content } from "@/i18n/content";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactForm } from "@/components/ContactForm";
import { WA_BASE, PHONE_DISPLAY } from "@/lib/constants";

// SPECIFIC SEO METADATA
export const metadata: Metadata = {
  title: "Chauffeur Privé & Business VTC Dakar | Dakar Fleet",
  description:
    "Location de voiture avec chauffeur privé à Dakar. Transport business, rendez-vous d'affaires, conciergerie hôtels. VTC premium avec Wifi, discrétion et flexibilité.",
  keywords: [
    "chauffeur privé Dakar",
    "location voiture avec chauffeur Sénégal",
    "VTC business Dakar",
    "transport VIP Dakar",
    "mise à disposition VTC Dakar",
    "chauffeur de direction Sénégal"
  ],
  openGraph: {
    title: "Chauffeur Privé & Mise à disposition | Dakar",
    description: "Transport Business, rendez-vous et hôtels. Un chauffeur dédié, discret et professionnel à votre disposition à Dakar.",
  }
};

export default function BusinessPage() {
  const lang = "fr";
  const t = content[lang];
  const WA = `${WA_BASE}?text=Bonjour Dakar Fleet, je souhaite réserver une mise à disposition avec chauffeur.`;

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader lang={lang} nav={t.nav} waUrl={WA} phoneDisplay={PHONE_DISPLAY} />

      <section className="relative overflow-hidden border-b border-white/10 pt-16 lg:pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            <span className="h-2 w-2 bg-[#C9A84C] rounded-full" />
            Mise à disposition & Business
          </div>

          <h1 className="font-title text-4xl font-light leading-[1.1] text-[#F7F3EE] sm:text-5xl lg:text-6xl">
            Votre <span className="italic text-[#C9A84C]">Chauffeur Privé</span>
            <br />
            pour affaires et hôtels
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-white/70">
            Une flotte de véhicules haut de gamme et des chauffeurs formés à la discrétion 
            pour vos rendez-vous professionnels, vos tournées ou l'accueil de vos clients VIP.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">🤫</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Discrétion & Pro</h3>
            <p className="mt-2 text-sm text-white/60">Chauffeurs en tenue avec respect total de votre confidentialité.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Espace de travail</h3>
            <p className="mt-2 text-sm text-white/60">Climatisation, sièges ergonomiques et recharge USB pour vos appareils.</p>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="mt-4 font-title text-xl text-[#F7F3EE]">Flexibilité totale</h3>
            <p className="mt-2 text-sm text-white/60">Facturation à l'heure, à la demi-journée ou sur plusieurs jours.</p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(247,243,238,0.03)] border-y border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="font-title text-3xl text-white">Réservez votre chauffeur privé</h2>
             <p className="mt-2 text-white/60">Indiquez la durée souhaitée et le lieu de prise en charge.</p>
          </div>
          <ContactForm strings={{...t.contact.form, introMessage: "Bonjour, je souhaite un devis pour une mise à disposition / chauffeur privé."}} />
        </div>
      </section>

      <Footer lang={lang} />
      <WhatsAppFloat waUrl={WA} label="Réserver" />
    </main>
  );
}
