# Dakar Fleet Site

Dakar Fleet est une plateforme de présentation et de réservation pour un service premium de transport avec chauffeur privé à Dakar (Sénégal). La flotte se démarque par son approche écologique en utilisant exclusivement des véhicules 100% électriques (BYD).

## Fonctionnalités Principales

- **Internationalisation (i18n) :**
  - Support de deux langues : Français (`fr`, par défaut sur la racine `/`) et Anglais (`en`, sous `/en`).
  - URL de langue stables : aucune redirection automatique selon les cookies ou l'en-tête `Accept-Language`.
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

## Vérification SEO avant déploiement

Le domaine canonique est `https://www.dakarfleet.com`, défini par `SITE_URL`.
Le sitemap, les liens canoniques, les alternances FR/EN, les métadonnées sociales
et les identifiants schema.org utilisent ce domaine. Le domaine sans `www`
redirige vers celui-ci dans la configuration Vercel du projet `dakar-fleet-lp5a`.

Après installation des dépendances verrouillées avec `npm ci` :

```bash
npm run lint
npm run build
npm run check:structured-data
npm start
```

Dans un autre terminal, lancer `npm run test:seo`. Les tests HTTP interrogent
par défaut `http://127.0.0.1:3000`, sans suivre les redirections. La variable
`SEO_BASE_URL` permet de tester une autre instance ; les références canoniques
doivent toujours pointer vers le domaine public. Ils vérifient les 12 pages,
le sitemap et ses alternances, robots.txt, les métadonnées, les liens internes,
les données structurées, les préférences linguistiques et les réponses 404.

Le contrôle des données structurées inspecte également les fichiers HTML du
build et l'identité commune du graphe FR/EN. Ces tests ciblés complètent une
validation externe sur schema.org ; ils ne garantissent pas l'obtention de
résultats enrichis Google. Une prévisualisation Vercel peut légitimement porter
un en-tête `X-Robots-Tag: noindex` ajouté par l'hébergeur ; ne pas lever cette
protection pour satisfaire le test d'indexabilité réservé à la production.

Sous Windows, si Turbopack échoue avec un refus de création de processus, utiliser
`npm run build -- --webpack` pour la vérification locale. Le build Vercel doit
être vérifié séparément avant validation de la mise en production.
