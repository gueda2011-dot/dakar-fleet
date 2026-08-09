# Analytics and conversion measurement

## Google Analytics

The site loads GA4 with Next.js `GoogleAnalytics` from `@next/third-parties/google`.
The measurement ID remains `G-90BGR08TSS`.

Client-side events go through the typed, best-effort helper in `lib/analytics.ts`.
If GA is unavailable, the helper is a no-op and never prevents the underlying
WhatsApp, telephone, email, or form action.

## Event taxonomy

| Event | Exact meaning |
| --- | --- |
| `contact_whatsapp_click` | A WhatsApp link was clicked or the form attempted to open WhatsApp. It does not prove that a message was sent. |
| `contact_phone_click` | A `tel:` link was clicked. It does not prove that a call was completed. |
| `contact_email_click` | A `mailto:` link was clicked. It does not prove that an email was sent. |
| `contact_form_submit` | The current client-side form passed browser validation and attempted to open WhatsApp. It is not a confirmed lead. |
| `booking_cta_click` | A primary booking CTA was clicked. The contact method identifies the destination. |

Every event uses only these controlled parameters:

- `locale`: `fr` or `en`, derived from the rendered page context;
- `page_path`: the browser pathname at click time;
- `page_type`: `homepage` or `service`;
- `service_context`: `homepage`, `airport_transfer`, `business_chauffeur`, or `electric_mobility`;
- `cta_location`: a stable placement code such as `header`, `hero`, `contact_form`, or `floating_button`;
- `contact_method`: `whatsapp`, `phone`, or `email`.

Names, telephone numbers, email addresses, WhatsApp messages, dates, pickup
locations, flight details, and all other free-form values are forbidden. The
analytics API does not accept form values.

## Content Security Policy

Before this change, the production header allowed only same-origin analytics
traffic:

```text
script-src 'self' 'unsafe-inline'
connect-src 'self'
img-src 'self' data:
```

The rendered page requested `https://www.googletagmanager.com/gtag/js`, but the
script origin was not permitted and no GA collection request was emitted.

The final analytics allowlist is deliberately limited to:

- `script-src https://www.googletagmanager.com` — loads the existing Google tag;
- `connect-src https://www.google-analytics.com` — primary GA4 collection endpoint;
- `connect-src https://region1.google-analytics.com` — regional GA4 collection endpoint used by Google tag delivery.
- `connect-src https://www.googletagmanager.com` — Google-documented Google tag communication endpoint;
- `img-src https://www.google-analytics.com` — GA4 image transport fallback;
- `img-src https://www.googletagmanager.com` — Google tag image resources.

No wildcard, `unsafe-eval`, broad `https:` source, or unrelated origin is added.

References:

- [Google tag CSP guidance](https://developers.google.com/tag-platform/security/guides/csp)
- [GA4 cookie usage](https://support.google.com/analytics/answer/11397207)

## Local validation

1. Run `npm ci`, `npm run build`, then `npm run start`.
2. Open the production-local site in a browser and inspect Console and Network.
3. Confirm `gtag/js?id=G-90BGR08TSS` loads from `www.googletagmanager.com`.
4. Filter Network for `g/collect` and confirm the request uses an allowed GA endpoint.
5. Click each commercial contact surface and inspect the event name and controlled parameters.
6. Submit the form with synthetic data and confirm none of its values appear in Analytics payloads.
7. Repeat on `/en` and each French service page to verify locale and service context.

GA DebugView or Tag Assistant may be used when access is available, but Network
requests and the data layer are sufficient for technical validation.

## Privacy and future work

This change adds no custom user identifier, fingerprinting, cross-site tracking,
marketing cookie, CMP, or analytics provider. When storage is permitted, the
existing GA4 JavaScript tag can set the first-party `_ga` cookie to distinguish
users and `_ga_<container-id>` to persist session state. Whether GA requires
prior consent for the applicable audiences and jurisdictions remains a separate
legal and CMP workstream.

Booking V3 events must be introduced separately when the backend can distinguish
an attempted contact from a confirmed booking or lead.
