export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const content = {
  fr: {
    meta: {
      title: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
      description:
        "Dakar Fleet propose des transferts aéroport, déplacements business, excursions et mise à disposition avec chauffeur à Dakar. Véhicules électriques haut de gamme, disponibles 24h/24.",
      ogTitle: "Dakar Fleet | Transport premium avec chauffeur à Dakar",
      ogDescription:
        "Transferts aéroport, déplacements business et excursions avec chauffeur privé à Dakar. Véhicules électriques BYD, disponibles 24h/24.",
    },
    nav: {
      services: "Services",
      pricing: "Tarifs",
      fleet: "Flotte",
      partners: "Partenaires",
      contact: "Contact",
      book: "Réserver",
    },
    hero: {
      badge: "Transport premium électrique · Dakar",
      line1: "L'élégance du",
      line2: "mouvement",
      line3: "sans compromis",
      body: "Chauffeurs privés professionnels à votre service à Dakar.",
      bodyHighlight: " Véhicules électriques haut de gamme",
      bodyEnd:
        ", transferts aéroport, déplacements d'affaires, excursions et prestations sur mesure pour particuliers, hôtels et entreprises.",
      ctaPrimary: "Réserver via WhatsApp",
      ctaSecondary: "Découvrir nos services",
      positioning: "Positionnement",
      positioningText:
        "Mobilité premium avec chauffeur pour clients privés, hôtels et entreprises.",
      signature: "Signature",
      signatureText: "Confort, discrétion, ponctualité et image moderne.",
    },
    trust: [
      "Réponse WhatsApp en moins de 10 min",
      "Chauffeurs professionnels & discrets",
      "Véhicules électriques BYD dernière génération",
      "Basé à Dakar, disponible 24h/24",
      "Solution dédiée hôtels & entreprises",
      "Trajets privés, VIP et business",
    ],
    eco: {
      text: "Dakar Fleet s'engage pour une mobilité premium et durable ·",
      highlight: " 100% véhicules électriques",
      end: " · engagement vers une recharge à l'énergie verte",
      label: "100% Green Vision",
    },
    services: {
      label: "Services",
      title:
        "Des prestations pensées pour les voyageurs, les hôtels et les entreprises",
      subtitle:
        "Dakar Fleet propose une offre claire, élégante et efficace, conçue pour les clients particuliers, business et hôteliers.",
      cta: "Réserver via WhatsApp",
      ctaLabel: "Prêt à réserver ?",
      items: [
        {
          title: "Transfert Aéroport",
          description:
            "Prise en charge fiable pour vos arrivées et départs entre l'AIBD, Dakar et vos lieux de séjour, avec chauffeur professionnel.",
        },
        {
          title: "Mise à disposition",
          description:
            "Un chauffeur à votre service pour quelques heures, une demi-journée ou la journée, selon vos besoins.",
        },
        {
          title: "Transport Business",
          description:
            "Déplacements professionnels, rendez-vous, hôtels, conférences et accueil de clients VIP à Dakar.",
        },
        {
          title: "Tours & Excursions",
          description:
            "Dakar Tour, Lac Rose, Bandia et trajets sur mesure pour une clientèle locale et internationale.",
        },
      ],
    },
    pricing: {
      label: "Tarifs",
      title:
        "Des prix de départ pour rassurer, avec la souplesse du sur mesure",
      subtitle:
        "Les tarifs ci-dessous sont donnés à titre indicatif pour aider le client à se situer rapidement. Le prix final dépend du trajet, de l'horaire, du nombre de passagers et des options demandées.",
      note: "Pour les hôtels, entreprises, mises à disposition longues ou prestations sur mesure, Dakar Fleet propose des offres personnalisées.",
      items: [
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
      ],
    },
    fleet: {
      label: "Flotte",
      title: "Une flotte électrique moderne en expansion",
      subtitle:
        "Dakar Fleet développe une flotte pensée pour accompagner la croissance d'une demande premium à Dakar, avec un positionnement moderne, responsable et orienté qualité de service.",
      vehicles: [
        {
          tag: "SUV Premium",
          name: "BYD Atto 2",
          description:
            "Confort haut de gamme, image affirmée et expérience premium adaptée aux clients business, VIP et hôteliers.",
        },
        {
          tag: "Compact Premium",
          name: "BYD Dolphin",
          description:
            "Mobilité urbaine élégante, silencieuse et efficace pour les trajets privés, professionnels et hôteliers à Dakar.",
        },
      ],
      specs: {
        passengers: "Passagers",
        luggage: "Bagages",
        range: "Autonomie",
        equipment: "Équipements",
      },
    },
    partners: {
      label: "Partenaires",
      title:
        "Une solution crédible pour hôtels, conciergeries et entreprises",
      subtitle:
        "Dakar Fleet peut devenir un partenaire fiable pour la gestion des transferts, des déplacements privés et des prestations à destination d'une clientèle premium.",
      cta: "Discuter d'un partenariat",
      items: [
        "Solution simple pour hôtels et conciergeries",
        "Prise en charge de clients VIP et business",
        "Image premium et responsable",
        "Organisation fluide des transferts et trajets privés",
      ],
    },
    contact: {
      label: "Réservation",
      title: "Réservez votre transport",
      titleHighlight: "premium",
      titleEnd: "à Dakar",
      subtitle:
        "Transfert aéroport, chauffeur privé, déplacement business, excursion ou partenariat hôtelier : contactez Dakar Fleet pour une réponse rapide.",
      whatsapp: "WhatsApp",
      call: "Appeler maintenant",
      form: {
        label: "Demande rapide",
        name: "Votre nom",
        type: "Type de trajet",
        submit: "Envoyer via WhatsApp",
        successTitle: "Demande envoyée",
        successText:
          "Nous revenons vers vous sous 10 minutes via WhatsApp.",
        newRequest: "Nouvelle demande",
        types: [
          "Transfert Aéroport",
          "Mise à disposition",
          "Transport Business",
          "Tour & Excursion",
          "Autre",
        ],
      },
    },
    footer: {
      description:
        "Service de transport premium avec chauffeur à Dakar, axé sur le confort, la réactivité et une image moderne.",
      contactTitle: "Contact",
      phone: "+221 77 779 69 22",
      location: "Dakar, Sénégal",
      whatsappNote: "Réservation rapide via WhatsApp",
      servicesTitle: "Services clés",
      services: [
        "Transferts aéroport",
        "Mise à disposition",
        "Excursions et tours",
        "Partenariats hôtels & entreprises",
      ],
    },
    waButton: "Réserver",
    whatsappMessage:
      "Bonjour%20Dakar%20Fleet,%20je%20souhaite%20r%C3%A9server%20un%20trajet.",
    whatsappPartnerMessage:
      "Bonjour%20Dakar%20Fleet,%20je%20souhaite%20discuter%20d%27un%20partenariat.",
  },

  en: {
    meta: {
      title: "Dakar Fleet | Premium Chauffeur Service in Dakar",
      description:
        "Dakar Fleet offers airport transfers, business travel, tours and private hire with professional drivers in Dakar. Premium electric vehicles available 24/7.",
      ogTitle: "Dakar Fleet | Premium Chauffeur Service in Dakar",
      ogDescription:
        "Airport transfers, business travel and tours with a private chauffeur in Dakar. BYD electric vehicles, available 24/7.",
    },
    nav: {
      services: "Services",
      pricing: "Pricing",
      fleet: "Fleet",
      partners: "Partners",
      contact: "Contact",
      book: "Book Now",
    },
    hero: {
      badge: "Premium electric transport · Dakar",
      line1: "The elegance of",
      line2: "movement",
      line3: "without compromise",
      body: "Professional private chauffeurs at your service in Dakar.",
      bodyHighlight: " Premium electric vehicles",
      bodyEnd:
        " for airport transfers, business travel, tours and bespoke services for individuals, hotels and corporations.",
      ctaPrimary: "Book via WhatsApp",
      ctaSecondary: "Explore our services",
      positioning: "Positioning",
      positioningText:
        "Premium chauffeur-driven mobility for private clients, hotels and corporations.",
      signature: "Signature",
      signatureText: "Comfort, discretion, punctuality and modern image.",
    },
    trust: [
      "WhatsApp response in under 10 min",
      "Professional & discreet chauffeurs",
      "Latest generation BYD electric vehicles",
      "Based in Dakar, available 24/7",
      "Dedicated solution for hotels & corporates",
      "Private, VIP and business transfers",
    ],
    eco: {
      text: "Dakar Fleet is committed to premium, sustainable mobility ·",
      highlight: " 100% electric vehicles",
      end: " · committed to green energy charging",
      label: "100% Green Vision",
    },
    services: {
      label: "Services",
      title: "Tailored services for travellers, hotels and businesses",
      subtitle:
        "Dakar Fleet offers a clear, elegant and efficient service designed for individual, business and hotel clients.",
      cta: "Book via WhatsApp",
      ctaLabel: "Ready to book?",
      items: [
        {
          title: "Airport Transfer",
          description:
            "Reliable pick-up and drop-off between AIBD airport, Dakar and your accommodation, with a professional chauffeur.",
        },
        {
          title: "Private Hire",
          description:
            "A dedicated chauffeur at your disposal for a few hours, a half-day or a full day, according to your needs.",
        },
        {
          title: "Business Travel",
          description:
            "Professional transfers, meetings, hotels, conferences and VIP client arrivals in Dakar.",
        },
        {
          title: "Tours & Excursions",
          description:
            "Dakar city tour, Lac Rose, Bandia and bespoke itineraries for local and international clients.",
        },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "Transparent starting rates, flexible for bespoke requests",
      subtitle:
        "The rates below are indicative to help clients get a quick sense of pricing. The final price depends on the route, time, number of passengers and options selected.",
      note: "For hotels, corporations, extended hire or bespoke services, Dakar Fleet offers personalised packages.",
      items: [
        {
          title: "Airport Transfer",
          price: "From 30,000 FCFA",
          details:
            "Indicative rate based on time of day, pick-up zone and number of passengers.",
        },
        {
          title: "Dakar City Tour",
          price: "From 65,000 FCFA",
          details:
            "Ideal package to discover Dakar in comfort with a dedicated chauffeur.",
        },
        {
          title: "Lac Rose",
          price: "From 65,000 FCFA",
          details:
            "Rate adjusted based on itinerary, waiting time and services included.",
        },
        {
          title: "Private Hire",
          price: "On request",
          details:
            "Half-day, full day or fully bespoke service based on your requirements.",
        },
      ],
    },
    fleet: {
      label: "Fleet",
      title: "A modern, expanding electric fleet",
      subtitle:
        "Dakar Fleet is building a fleet designed to meet the growing demand for premium mobility in Dakar, with a modern, responsible and service-oriented approach.",
      vehicles: [
        {
          tag: "Premium SUV",
          name: "BYD Atto 2",
          description:
            "High-end comfort, a strong presence and a premium experience tailored for business, VIP and hotel clients.",
        },
        {
          tag: "Premium Compact",
          name: "BYD Dolphin",
          description:
            "Elegant, silent and efficient urban mobility for private, professional and hotel transfers in Dakar.",
        },
      ],
      specs: {
        passengers: "Passengers",
        luggage: "Luggage",
        range: "Range",
        equipment: "Features",
      },
    },
    partners: {
      label: "Partners",
      title: "A reliable solution for hotels, concierges and corporations",
      subtitle:
        "Dakar Fleet can become a trusted partner for managing transfers, private journeys and premium client services.",
      cta: "Discuss a partnership",
      items: [
        "Simple solution for hotels and concierge services",
        "VIP and business client management",
        "Premium and responsible brand image",
        "Smooth organisation of transfers and private trips",
      ],
    },
    contact: {
      label: "Booking",
      title: "Book your premium",
      titleHighlight: "transport",
      titleEnd: "in Dakar",
      subtitle:
        "Airport transfer, private chauffeur, business travel, tour or hotel partnership — contact Dakar Fleet for a fast response.",
      whatsapp: "WhatsApp",
      call: "Call now",
      form: {
        label: "Quick request",
        name: "Your name",
        type: "Type of journey",
        submit: "Send via WhatsApp",
        successTitle: "Request sent",
        successText: "We'll get back to you within 10 minutes via WhatsApp.",
        newRequest: "New request",
        types: [
          "Airport Transfer",
          "Private Hire",
          "Business Travel",
          "Tour & Excursion",
          "Other",
        ],
      },
    },
    footer: {
      description:
        "Premium chauffeur service in Dakar, focused on comfort, responsiveness and a modern image.",
      contactTitle: "Contact",
      phone: "+221 77 779 69 22",
      location: "Dakar, Senegal",
      whatsappNote: "Quick booking via WhatsApp",
      servicesTitle: "Key services",
      services: [
        "Airport transfers",
        "Private hire",
        "Tours & excursions",
        "Hotel & corporate partnerships",
      ],
    },
    waButton: "Book now",
    whatsappMessage:
      "Hello%20Dakar%20Fleet,%20I%20would%20like%20to%20book%20a%20ride.",
    whatsappPartnerMessage:
      "Hello%20Dakar%20Fleet,%20I%20would%20like%20to%20discuss%20a%20partnership.",
  },
} as const;

export type Content = (typeof content)[Locale];
