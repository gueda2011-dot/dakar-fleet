import Image from "next/image";
import { content } from "@/i18n/content";
import type { Locale } from "@/i18n/content";
import { NavHeader } from "@/components/NavHeader";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { serviceIcons } from "@/components/ServiceIcons";
import { Footer } from "@/components/Footer";
import { WA_BASE, PHONE_DISPLAY, EMAIL } from "@/lib/constants";

const BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export function PageTemplate({ lang }: { lang: Locale }) {
  const t = content[lang];
  const WA = `${WA_BASE}?text=${t.whatsappMessage}`;
  const WA_PARTNER = `${WA_BASE}?text=${t.whatsappPartnerMessage}`;
  const specKeys = [
    t.fleet.specs.passengers,
    t.fleet.specs.luggage,
    t.fleet.specs.range,
    t.fleet.specs.equipment,
  ];

  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <NavHeader lang={lang} nav={t.nav} waUrl={WA} phoneDisplay={PHONE_DISPLAY} />

      {/* ── HERO ── */}
      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              {t.hero.badge}
            </div>

            <h1 className="font-title text-5xl font-light leading-[0.98] tracking-[-0.02em] text-[#F7F3EE] sm:text-6xl lg:text-7xl">
              {t.hero.line1}
              <br />
              <span className="italic text-[#C9A84C]">{t.hero.line2}</span>
              <br />
              <span className="font-semibold">{t.hero.line3}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[1.03rem] leading-8 text-white/70">
              {t.hero.body}
              <span className="text-white">{t.hero.bodyHighlight}</span>
              {t.hero.bodyEnd}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WA}
                className="rounded-full bg-[#C9A84C] px-6 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-6 py-4 text-sm uppercase tracking-[0.1em] text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {t.trust.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 backdrop-blur"
                >
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
                    blurDataURL={BLUR}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>
                <div className="grid gap-4 border-t border-white/10 bg-black/55 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{t.hero.positioning}</p>
                    <p className="mt-2 text-base text-white">{t.hero.positioningText}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{t.hero.signature}</p>
                    <p className="mt-2 text-base text-white">{t.hero.signatureText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECO ── */}
      <section className="border-y border-[#2E6B4A]/30 bg-[rgba(46,107,74,0.12)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#4CAF7D]" />
            <p className="text-sm text-[#F7F3EE]">
              {t.eco.text}
              <span className="font-medium text-[#4CAF7D]">{t.eco.highlight}</span>
              {t.eco.end}
            </p>
          </div>
          <div className="font-title text-2xl text-[#4CAF7D]">{t.eco.label}</div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">{t.services.label}</p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">{t.services.subtitle}</p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.services.items.map((service, i) => (
              <FadeIn key={service.title} delay={i * 80}>
                <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/35 hover:bg-white/[0.07]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="font-title text-2xl text-[#F7F3EE]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{service.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-[1.8rem] border border-[#C9A84C]/15 bg-white/3 py-10 text-center">
              <p className="text-sm uppercase tracking-[0.15em] text-white/60">{t.services.ctaLabel}</p>
              <a
                href={WA}
                className="rounded-full bg-[#C9A84C] px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
              >
                {t.services.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="tarifs" className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">{t.pricing.label}</p>
                <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  {t.pricing.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">{t.pricing.subtitle}</p>
                <div className="mt-8 rounded-[1.8rem] border border-[#C9A84C]/20 bg-[#C9A84C]/10 p-6 text-white/80">
                  {t.pricing.note}
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              {t.pricing.items.map((item, i) => (
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

      {/* ── FLEET ── */}
      <section id="flotte" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">{t.fleet.label}</p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                {t.fleet.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">{t.fleet.subtitle}</p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {t.fleet.vehicles.map((vehicle, i) => (
              <FadeIn key={vehicle.name} delay={i * 100}>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                  <div className="relative h-[280px] w-full sm:h-[390px]">
                    <Image
                      src={i === 0 ? "/atto2.png" : "/dolphin.png"}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{vehicle.tag}</p>
                    <h3 className="mt-2 font-title text-3xl text-[#F7F3EE]">{vehicle.name}</h3>
                    <p className="mt-3 leading-7 text-white/70">{vehicle.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/8 pt-5">
                      {vehicle.specs.map((value, j) => (
                        <div key={specKeys[j]} className="rounded-xl border border-white/8 bg-white/4 px-3 py-2.5">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">{specKeys[j]}</p>
                          <p className="mt-1 text-sm text-white/85">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partenaires" className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <FadeIn>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">{t.partners.label}</p>
                <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  {t.partners.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/70">{t.partners.subtitle}</p>
                <a
                  href={WA_PARTNER}
                  className="mt-8 inline-block rounded-full border border-[#C9A84C]/40 px-6 py-3 text-sm uppercase tracking-[0.1em] text-[#C9A84C] transition hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
                >
                  {t.partners.cta}
                </a>
              </div>
            </FadeIn>

            <div className="grid gap-4">
              {t.partners.items.map((point, i) => (
                <FadeIn key={point} delay={i * 70}>
                  <div className="flex items-start gap-3 rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5 text-white/80">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">{t.contact.label}</p>
                <h2 className="mt-3 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                  {t.contact.title}
                  <br />
                  <span className="italic text-[#C9A84C]">{t.contact.titleHighlight}</span>{" "}
                  {t.contact.titleEnd}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">{t.contact.subtitle}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={WA}
                    className="rounded-full bg-[#C9A84C] px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
                  >
                    {t.contact.whatsapp}
                  </a>
                  <a
                    href="tel:+221777796922"
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
                  >
                    {t.contact.call}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white/80 transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>
              <ContactForm strings={t.contact.form} />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer lang={lang} />

      <WhatsAppFloat waUrl={WA} label={t.waButton} />
    </main>
  );
}
