import Image from "next/image";

const services = [
  {
    title: "Transfert Aéroport",
    description:
      "Prise en charge fiable pour vos arrivées et départs entre l’AIBD, Dakar et vos lieux de séjour, avec chauffeur professionnel.",
    icon: "✈️",
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur à votre service pour quelques heures, une demi-journée ou la journée, selon vos besoins.",
    icon: "🕒",
  },
  {
    title: "Transport Business",
    description:
      "Déplacements professionnels, rendez-vous, hôtels, conférences et accueil de clients VIP à Dakar.",
    icon: "💼",
  },
  {
    title: "Tours & Excursions",
    description:
      "Dakar Tour, Lac Rose, Bandia et trajets sur mesure pour une clientèle locale et internationale.",
    icon: "🌍",
  },
];

const pricing = [
  {
    title: "Transfert Aéroport",
    price: "À partir de 30 000 FCFA",
    details:
      "Tarif indicatif selon l’horaire, la zone de prise en charge et le nombre de passagers.",
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
      "Tarif ajusté selon le programme, le temps d’attente et les prestations retenues.",
  },
  {
    title: "Mise à disposition",
    price: "Sur demande",
    details:
      "Demi-journée, journée complète ou prestation sur mesure selon vos besoins.",
  },
];

const trustPoints = [
  "Réservation rapide par WhatsApp",
  "Chauffeurs professionnels",
  "Véhicules électriques modernes",
  "Service basé à Dakar",
  "Solution pour hôtels et entreprises",
  "Trajets privés et professionnels",
];

const partnerPoints = [
  "Solution simple pour hôtels et conciergeries",
  "Prise en charge de clients VIP et business",
  "Image premium et responsable",
  "Organisation fluide des transferts et trajets privés",
];

export default function HomePage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F7F3EE]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="font-title text-[1.45rem] tracking-[0.22em] text-[#C9A84C]"
          >
            DAKAR<span className="text-[#F7F3EE]">FLEET</span>
          </a>

          <nav className="hidden items-center gap-8 text-[0.78rem] uppercase tracking-[0.12em] text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#tarifs" className="transition hover:text-white">
              Tarifs
            </a>
            <a href="#flotte" className="transition hover:text-white">
              Flotte
            </a>
            <a href="#partenaires" className="transition hover:text-white">
              Partenaires
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+221777796922"
              className="hidden text-sm text-[#C9A84C] transition hover:text-[#E8C97A] sm:block"
            >
              +221 77 779 69 22
            </a>
            <a
              href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
              className="rounded-full bg-[#C9A84C] px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
            >
              Réserver
            </a>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,168,76,0.14),transparent_26%),radial-gradient(circle_at_15%_82%,rgba(46,107,74,0.11),transparent_22%),linear-gradient(135deg,#0A0A0A_0%,#111108_50%,#0A0A0C_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              <span className="h-2 w-2 rounded-full bg-green-500" />
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
              <span className="text-white">
                {" "}
                Véhicules électriques haut de gamme
              </span>
              , transferts aéroport, déplacements d’affaires, excursions et
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
                <div className="relative h-[560px] w-full">
                  <Image
                    src="/atto2.png"
                    alt="BYD Atto 2 Dakar Fleet"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>

                <div className="grid gap-4 border-t border-white/10 bg-black/55 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Positionnement
                    </p>
                    <p className="mt-2 text-base text-white">
                      Mobilité premium avec chauffeur pour clients privés,
                      hôtels et entreprises.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Signature
                    </p>
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

      <section className="border-y border-[#2E6B4A]/30 bg-[rgba(46,107,74,0.12)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4CAF7D]" />
            <p className="text-sm text-[#F7F3EE]">
              Dakar Fleet s’engage pour une mobilité premium et durable ·
              <span className="font-medium text-[#4CAF7D]">
                {" "}
                100% véhicules électriques
              </span>{" "}
              · engagement vers une recharge à l’énergie verte
            </p>
          </div>

          <div className="font-title text-2xl text-[#4CAF7D]">100% Green Vision</div>
        </div>
      </section>

      <section id="services" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Services
            </p>
            <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
              Des prestations pensées pour les voyageurs, les hôtels et les
              entreprises
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Dakar Fleet propose une offre claire, élégante et efficace, conçue
              pour les clients particuliers, business et hôteliers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="font-title text-2xl text-[#F7F3EE]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-white/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tarifs"
        className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Tarifs
              </p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                Des prix de départ pour rassurer, avec la souplesse du sur mesure
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                Les tarifs ci-dessous sont donnés à titre indicatif pour aider le
                client à se situer rapidement. Le prix final dépend du trajet,
                de l’horaire, du nombre de passagers et des options demandées.
              </p>

              <div className="mt-8 rounded-[1.8rem] border border-[#C9A84C]/20 bg-[#C9A84C]/10 p-6 text-white/80">
                Pour les hôtels, entreprises, mises à disposition longues ou
                prestations sur mesure, Dakar Fleet propose des offres
                personnalisées.
              </div>
            </div>

            <div className="grid gap-5">
              {pricing.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-title text-2xl text-[#F7F3EE]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-2xl font-semibold text-[#C9A84C]">
                    {item.price}
                  </p>
                  <p className="mt-3 leading-7 text-white/70">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="flotte" className="bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
              Flotte
            </p>
            <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
              Une flotte électrique moderne en expansion
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Dakar Fleet développe une flotte pensée pour accompagner la
              croissance d’une demande premium à Dakar, avec un positionnement
              moderne, responsable et orienté qualité de service.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative h-[390px] w-full">
                <Image
                  src="/atto2.png"
                  alt="BYD Atto 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  SUV Premium
                </p>
                <h3 className="mt-2 font-title text-3xl text-[#F7F3EE]">
                  BYD Atto 2
                </h3>
                <p className="mt-3 leading-7 text-white/70">
                  Confort haut de gamme, image affirmée et expérience premium
                  adaptée aux clients business, VIP et hôteliers.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative h-[390px] w-full">
                <Image
                  src="/dolphin.png"
                  alt="BYD Dolphin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Compact Premium
                </p>
                <h3 className="mt-2 font-title text-3xl text-[#F7F3EE]">
                  BYD Dolphin
                </h3>
                <p className="mt-3 leading-7 text-white/70">
                  Mobilité urbaine élégante, silencieuse et efficace pour les
                  trajets privés, professionnels et hôteliers à Dakar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="partenaires"
        className="border-y border-white/10 bg-[rgba(247,243,238,0.03)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
                Partenaires
              </p>
              <h2 className="mt-4 font-title text-4xl font-light leading-tight text-[#F7F3EE] sm:text-5xl">
                Une solution crédible pour hôtels, conciergeries et entreprises
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Dakar Fleet peut devenir un partenaire fiable pour la gestion
                des transferts, des déplacements privés et des prestations à
                destination d’une clientèle premium.
              </p>
            </div>

            <div className="grid gap-4">
              {partnerPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5 text-white/80"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-[#C9A84C]/20 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] p-8 text-black lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70">
                Réservation
              </p>
              <h2 className="mt-3 font-title text-4xl font-semibold leading-tight">
                Réservez votre transport premium à Dakar
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-black/75">
                Transfert aéroport, chauffeur privé, déplacement business,
                excursion ou partenariat hôtelier : contacte Dakar Fleet
                directement pour une réponse rapide.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a
                href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
                className="rounded-full bg-black px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white transition hover:scale-[1.02]"
              >
                WhatsApp
              </a>
              <a
                href="tel:+221777796922"
                className="rounded-full border border-black px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:bg-black hover:text-white"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-white/70 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="font-title text-2xl tracking-[0.22em] text-[#C9A84C]">
              DAKAR<span className="text-[#F7F3EE]">FLEET</span>
            </div>
            <p className="mt-4 leading-7">
              Service de transport premium avec chauffeur à Dakar, axé sur le
              confort, la réactivité et une image moderne.
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
              <p>Partenariats hôtels & entreprises</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/221777796922?text=Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet."
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition hover:scale-105"
      >
        WhatsApp
      </a>
    </main>
  );
}