import { content } from "@/i18n/content";
import type { Locale } from "@/i18n/content";
import { EMAIL } from "@/lib/constants";
import { localizedRoutes } from "@/lib/localized-routes";
import { TrackedLink } from "@/components/TrackedLink";
import type { AnalyticsContext } from "@/lib/analytics";

export function Footer({ lang, analyticsContext }: { lang: Locale; analyticsContext: AnalyticsContext }) {
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
            <TrackedLink
              href={`mailto:${EMAIL}`}
              analyticsEvents={[{
                name: "contact_email_click",
                params: {
                  ...analyticsContext,
                  cta_location: "footer",
                  contact_method: "email",
                },
              }]}
              className="block transition hover:text-[#C9A84C]"
            >
              {t.footer.email}
            </TrackedLink>
          </div>
        </div>

        <div>
          <h3 className="font-title text-2xl text-[#F7F3EE]">{t.footer.servicesTitle}</h3>
          <div className="mt-4 space-y-3">
            {lang === "fr" && (
              <>
                <a href={localizedRoutes.airportTransfer.fr} className="block transition hover:text-[#C9A84C]">Transfert Aéroport</a>
                <a href={localizedRoutes.businessChauffeur.fr} className="block transition hover:text-[#C9A84C]">Chauffeur Privé & Business</a>
                <a href={localizedRoutes.electricChauffeur.fr} className="block transition hover:text-[#C9A84C]">VTC électrique</a>
              </>
            )}
            <a href={`${localizedRoutes.home[lang]}#partenaires`} className="block transition hover:text-[#C9A84C]">Hôtels & Conciergeries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
