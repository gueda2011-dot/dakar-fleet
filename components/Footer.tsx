import { content } from "@/i18n/content";
import type { Locale } from "@/i18n/content";
import { EMAIL } from "@/lib/constants";

export function Footer({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-white/70 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="font-title text-2xl tracking-[0.22em] text-[#C9A84C]">
            DAKAR<span className="text-[#F7F3EE]">FLEET</span>
          </div>
          <p className="mt-4 leading-7">{t.footer.description}</p>
        </div>

        <div>
          <h3 className="font-title text-2xl text-[#F7F3EE]">{t.footer.contactTitle}</h3>
          <div className="mt-4 space-y-3">
            <p>{t.footer.phone}</p>
            <p>{t.footer.location}</p>
            <p>{t.footer.whatsappNote}</p>
            <a href={`mailto:${EMAIL}`} className="block transition hover:text-[#C9A84C]">
              {t.footer.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-title text-2xl text-[#F7F3EE]">{t.footer.servicesTitle}</h3>
          <div className="mt-4 space-y-3">
            <a href={`/${lang === "en" ? "en" : ""}transfert-aeroport-dakar`} className="block transition hover:text-[#C9A84C]">Transfert Aéroport</a>
            <a href={`/${lang === "en" ? "en" : ""}chauffeur-prive-business-dakar`} className="block transition hover:text-[#C9A84C]">Chauffeur Privé & Business</a>
            <a href={`/${lang === "en" ? "en" : ""}vtc-voiture-electrique-dakar`} className="block transition hover:text-[#C9A84C]">VTC 100% Électrique</a>
            <a href={`/${lang === "en" ? "en" : ""}#partenaires`} className="block transition hover:text-[#C9A84C]">Hôtels & Conciergeries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
