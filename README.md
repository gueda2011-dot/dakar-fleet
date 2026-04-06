# Dakar Fleet Site

Dakar Fleet est une plateforme de présentation et de réservation pour un service premium de transport avec chauffeur privé à Dakar (Sénégal). La flotte se démarque par son approche écologique en utilisant exclusivement des véhicules 100% électriques (BYD).

## Fonctionnalités Principales

- **Internationalisation (i18n) :**
  - Support de deux langues : Français (`fr`, par défaut sur la racine `/`) et Anglais (`en`, sous `/en`).
  - Middleware intelligent (`middleware.ts`) pour la détection dynamique de la langue en fonction des cookies (`NEXT_LOCALE`) ou de l'en-tête `Accept-Language`.
- **Routage :**
  - Architecture "App Router" via Next.js regroupant les pages par locales (`app/(fr)/` et `app/(en)/`).
- **Composants :**
  - Architecture "Landing Page" où l'essentiel du rendu linguistique est porté par le composant maître `PageTemplate.tsx`.
  - Les contenus textuels sont centralisés et fortement typés dans le fichier `i18n/content.ts`.
  - Réservation et demandes de partenariat dirigées vers WhatsApp avec génération de messages préformatés.

## Technologies Utilisées

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library :** [React 19](https://react.dev/)
- **Style :** [Tailwind CSS v4](https://tailwindcss.com/)
- **Langage principal :** [TypeScript](https://www.typescriptlang.org/)

## Démarrage Rapide

Lancez le serveur de développement local :

```bash
npm install
npm run dev
```

La plateforme sera accessible sur [http://localhost:3000](http://localhost:3000). Vous pourrez visualiser les changements en direct.

## Déploiement

Le site est optimisé pour être déployé très facilement sur [Vercel](https://vercel.com/), créateur de Next.js.
