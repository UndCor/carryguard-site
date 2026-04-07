/**
 * Stripe payment link URLs for the /subscribe page.
 *
 * In a static-site deployment (Vercel), these are NOT injected from
 * environment variables at runtime. Replace the placeholders below with
 * the live Stripe payment links from the Stripe dashboard.
 *
 * For documentation of the corresponding env var keys (used by the
 * in-app Expo client and any future Next.js build), see /.env.example.
 */
window.STRIPE_URLS = {
  carrier: {
    monthly: 'STRIPE_CARRIER_MONTHLY_URL_HERE',
    yearly:  'STRIPE_CARRIER_YEARLY_URL_HERE',
  },
  guardian: {
    monthly: 'STRIPE_GUARDIAN_MONTHLY_URL_HERE',
    yearly:  'STRIPE_GUARDIAN_YEARLY_URL_HERE',
  },
};
