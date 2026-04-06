# État du Projet et Progression (Dakar Fleet Site)

## 📌 État Actuel : MVP / Présentation Statique (Complété)

L'application est fonctionnelle et implémente avec succès sa proposition de valeur principale : c'est-à-dire présenter le projet, la flotte, les tarifs et amener l'utilisateur vers une conversion (contact WhatsApp).

### ✅ Ce qui est fait
- **Initialisation** : Base Next.js 16 avec React 19 et TailwindCSS v4 configurée.
- **Multilinguisme (i18n)** :
  - Middleware Next.js opérationnel pour diriger les utilisateurs vers `fr` ou `en` selon leurs préférences navigateur / historique.
  - Découpage par Route Groups (`app/(fr)` / `app/(en)`).
  - Dictionnaire centralisé complet (`i18n/content.ts`).
- **UI/UX et Composants** :
  - Modèle central `PageTemplate.tsx` construit.
  - Formulaire de demande redirigeant habilement vers WhatsApp (`ContactForm.tsx`).
  - Section SEO intégrée (`JsonLd.tsx`, fichiers sitemap, etc.).
  - Bouton flottant de discussion directe (`WhatsAppFloat.tsx`).

## 🔍 Points d'Attention Techniques
- **Bouton WhatsApp** : Actuellement, le formulaire se contente de générer une URL formatée ouvrant la discussion WhatsApp (ce qui est une bonne chose pour un MVP, évitant tout coût de backend/emailing).
- **SEO & Opengraph** : Les métadonnées basiques (Titre et Description) sont gérés. Bien s'assurer que les images Opengraph (`opengraph-image.tsx`) générées soient optimales et conformes graphiquement si la marque évolue.
- La structure de la landing page est conçue comme un monolithe textuel. Si la croissance se poursuit, il faudra diviser les domaines (Services / Flotte) sur des pages séparées pour de meilleures performances SEO organique.

## 🚀 Prochaines Étapes / Axes d'Amélioration
- [ ] **Google Analytics & Tracking :** Implémenter le suivi basique (GTM / GA4) pour surveiller le trafic et le taux de clics sur les CTA WhatsApp.
- [ ] **Pages Légales :** Créer des pages pour les mentions légales et les conditions générales de vente (indispensable pour une entreprise de transport public pour la responsabilité légale).
- [ ] **Backend (Futur) :** Permettre le paiement/réservation direct en ligne (par exemple avec Stripe / Wave / Orange Money) au lieu de faire la facturation manuelle côté WhatsApp.
- [ ] **Performance :** Lancer des tests Google Lighthouse pour valider la vitesse de chargement et l'accessibilité.
