type Service = {
  title: string;
  description: string;
  icon: string;
};

type PriceItem = {
  title: string;
  price: string;
  details: string;
};

type BookingField = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function DakarFleetWebsite() {
  const services: Service[] = [
    {
      title: "Transfert Aéroport",
      description:
        "Service premium avec chauffeur pour vos arrivées et départs à Dakar. Disponible 24h/24 et 7j/7 pour particuliers, hôtels et entreprises.",
      icon: "✈️",
    },
    {
      title: "Dakar City Tour",
      description:
        "Découvrez les lieux emblématiques de Dakar dans le confort de nos véhicules électriques BYD avec chauffeur professionnel.",
      icon: "🏙️",
    },
    {
      title: "Île de Gorée",
      description:
        "Une expérience complète avec transport, ferry et guide inclus pour permettre à vos clients de découvrir Gorée dans les meilleures conditions.",
      icon: "⛴️",
    },
    {
      title: "Lac Rose",
      description:
        "Excursion confortable et bien organisée avec différentes formules selon le nombre de personnes et les activités choisies.",
      icon: "🌅",
    },
    {
      title: "Réserve de Bandia",
      description:
        "Safari premium avec transport et formule adaptée selon le nombre de personnes, idéal pour touristes, familles et groupes privés.",
      icon: "🦓",
    },
    {
      title: "Hôtels & Entreprises",
      description:
        "Solution fiable pour les conciergeries, hôtels, entreprises et clients internationaux recherchant un service premium et écologique à Dakar.",
      icon: "🏨",
    },
  ];

  const highlights: string[] = [
    "Flotte 100% électrique BYD",
    "Conduite silencieuse et confortable",
    "Chauffeurs professionnels",
    "Réservation rapide par WhatsApp",
    "Service premium à Dakar",
    "Partenariats hôtels & entreprises",
  ];

  const partners: string[] = [
    "Image premium pour votre établissement",
    "Solution écologique valorisante",
    "Service fiable pour vos clients VIP",
    "Organisation simple des transferts",
  ];

  const tags: string[] = [
    "100% Électrique",
    "BYD Dolphin",
    "BYD Atto 2",
    "Chauffeurs professionnels",
  ];

  const pricing: PriceItem[] = [
    {
      title: "Transfert Aéroport",
      price: "30 000 FCFA",
      details:
        "Prix par trajet • 1 à 3 personnes • Disponible 24h/24 • Chauffeur + véhicule électrique inclus",
    },
    {
      title: "Dakar City Tour",
      price: "65 000 FCFA",
      details:
        "Jusqu’à 3 personnes • Visite des lieux emblématiques de Dakar • Chauffeur inclus",
    },
    {
      title: "Île de Gorée",
      price: "80 000 FCFA (1 à 2 personnes) / 95 000 FCFA (3 à 4 personnes)",
      details:
        "Transport + ferry + guide inclus • Déjeuner non inclus",
    },
    {
      title: "Lac Rose",
      price: "75 000 / 95 000 / 115 000 FCFA",
      details:
        "Tarif selon le nombre de personnes et les activités choisies • Chameau, quad, pirogue inclus selon formule • Déjeuner non inclus",
    },
    {
      title: "Réserve de Bandia (Safari)",
      price: "140 000 FCFA (1 à 3 personnes) / 160 000 FCFA (4 personnes)",
      details:
        "Transport + véhicule safari inclus • Déjeuner non inclus",
    },
  ];

  const bookingFields: BookingField[] = [
    { label: "Nom complet", placeholder: "Votre nom" },
    { label: "Téléphone / WhatsApp", placeholder: "+221..." },
    { label: "Service souhaité", placeholder: "Ex : Transfert Aéroport" },
    { label: "Date", placeholder: "Choisissez une date", type: "date" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-bold tracking-wide text-amber-400">
              DAKAR FLEET
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-300">
              Transport premium électrique
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="#services" className="transition hover:text-amber-400">
              Services
            </a>
            <a href="#tarifs" className="transition hover:text-amber-400">
              Tarifs
            </a>
            <a href="#flotte" className="transition hover:text-amber-400">
              Flotte
            </a>
            <a href="#partenaires" className="transition hover:text-amber-400">
              Partenaires
            </a>
            <a href="#reservation" className="transition hover:text-amber-400">
              Réservation
            </a>
            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.25),transparent_35%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
                ⚡ Flotte BYD 100% électrique à Dakar
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
                Transport premium{" "}
                <span className="text-amber-400">100% électrique</span> à Dakar
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Voyagez avec confort, silence et élégance grâce à nos véhicules
                BYD avec chauffeur. Dakar Fleet propose des transferts
                aéroport, excursions, services hôtels et solutions premium pour
                une clientèle locale et internationale.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/221777796922"
                  className="rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-900/30 transition hover:scale-[1.02]"
                >
                  Réserver sur WhatsApp
                </a>

                <a
                  href="tel:+221777796922"
                  className="rounded-2xl bg-amber-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-900/30 transition hover:scale-[1.02]"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  src="/hero.jpg"
                  alt="BYD Dolphin et BYD Atto 2 à Dakar"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-black/20"
                >
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
                    Dakar Fleet
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              Nos services
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Des prestations pensées pour les voyageurs, les hôtels et les
              entreprises
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Dakar Fleet propose des services premium avec chauffeur pour les
              transferts, excursions, besoins des hôtels et déplacements privés
              ou professionnels à Dakar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="tarifs" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              Tarifs
            </p>
            <h2 className="mt-4 text-4xl font-bold">Nos offres et prix</h2>
            <p className="mt-4 text-lg text-slate-300">
              Des prestations premium pensées pour les voyageurs, les hôtels et
              les clients internationaux. Les prix sont indiqués de manière
              claire pour mieux comprendre le nombre de personnes et ce qui est
              inclus.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-3xl font-bold text-amber-400">
                  {item.price}
                </p>
                <p className="mt-4 leading-7 text-slate-300">{item.details}</p>
                <p className="mt-3 text-sm text-amber-300">
                  Contactez-nous pour une réservation ou un devis personnalisé.
                </p>
                <a
                  href="https://wa.me/221777796922"
                  className="mt-6 inline-flex rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Réserver ce service
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="flotte"
          className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Notre flotte
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Des véhicules BYD modernes pour une expérience haut de gamme
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Nos BYD Dolphin et BYD Atto 2 incarnent une nouvelle mobilité à
                Dakar : élégante, silencieuse et respectueuse de
                l’environnement. Idéal pour les transferts aéroport, les clients
                d’hôtels et les déplacements business.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xl font-semibold text-amber-400">
                    BYD Dolphin
                  </div>
                  <p className="mt-2 text-slate-300">
                    Compacte, moderne et parfaite pour une mobilité urbaine
                    premium.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xl font-semibold text-amber-400">
                    BYD Atto 2
                  </div>
                  <p className="mt-2 text-slate-300">
                    Plus spacieuse, idéale pour accueillir vos clients avec
                    confort et distinction.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40">
              <img
                src="/hero.jpg"
                alt="Flotte Dakar Fleet"
                className="h-[460px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="partenaires"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Partenariats
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Une solution de transport premium pour hôtels et entreprises
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Offrez à vos clients et collaborateurs un service haut de gamme
                à Dakar, tout en valorisant une image moderne et écologique
                grâce à notre flotte électrique BYD.
              </p>
            </div>

            <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-8">
              <div className="text-xl font-semibold text-white">
                Pourquoi travailler avec nous ?
              </div>

              <div className="mt-6 space-y-4">
                {partners.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-950/50 px-5 py-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/221777796922"
                className="mt-8 inline-flex rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </section>

        <section
          id="reservation"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Réservation
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Réservez votre service en quelques instants
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Contactez Dakar Fleet pour un transfert aéroport, une excursion,
                un city tour ou un service privé avec chauffeur. Nous répondons
                rapidement sur WhatsApp pour confirmer votre réservation.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  1. Choisissez votre service
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  2. Envoyez vos informations
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  3. Recevez une confirmation rapide sur WhatsApp
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
              <div className="text-2xl font-semibold text-white">
                Demande de réservation
              </div>
              <div className="mt-8 space-y-5">
                {bookingFields.map((field) => (
                  <div key={field.label}>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-amber-400"
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Précisez votre besoin, le nombre de personnes, l’heure ou le lieu de prise en charge..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-amber-400"
                  />
                </div>

                <a
                  href="https://wa.me/221777796922"
                  className="inline-flex w-full justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-900/30 transition hover:scale-[1.01]"
                >
                  Envoyer ma demande sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-4xl font-bold">
                  Réservez votre transport premium à Dakar
                </h2>
                <p className="mt-4 max-w-3xl text-lg">
                  Besoin d’un transfert aéroport, d’un chauffeur privé ou d’une
                  solution pour votre hôtel ? Contactez Dakar Fleet dès
                  maintenant.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/221777796922"
                  className="rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+221777796922"
                  className="rounded-2xl border border-slate-950 px-6 py-4 font-semibold text-slate-950"
                >
                  Appel direct
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-slate-300 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="text-2xl font-bold text-amber-400">
              DAKAR FLEET
            </div>
            <p className="mt-4 leading-7">
              Service de transport premium 100% électrique à Dakar, avec
              véhicules BYD et chauffeurs professionnels.
            </p>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Contact</div>
            <div className="mt-4 space-y-3">
              <p>📞 +221 77 779 69 22</p>
              <p>📍 Dakar, Sénégal</p>
              <p>📲 Réservation rapide par WhatsApp</p>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Services clés</div>
            <div className="mt-4 space-y-3">
              <p>Transferts aéroport</p>
              <p>Excursions et city tours</p>
              <p>Partenariats hôtels & entreprises</p>
              <p>Transport premium avec chauffeur</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}