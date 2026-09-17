export const SITE_URL = "https://maidforme.co";

export const SITE = {
  name: "Maid For Me",
  legalName: "Maid For Me",
  phoneDisplay: "(510) 603-7272",
  phoneE164: "+15106037272",
  email: "hello@maidforme.co",
  url: SITE_URL,
  locale: "en_US",
  facebook: "https://www.facebook.com/profile.php?id=61559035648699",
  instagram: "https://www.instagram.com/maidforme.co",
  serviceAreaLabel: "Oakland, Piedmont, San Francisco, and nearby Bay Area cities",
} as const;

export const DEFAULT_TITLE =
  "Maid For Me | Home Cleaning in Oakland & the Bay Area";

export const DEFAULT_DESCRIPTION =
  "Professional home cleaning in Oakland and the San Francisco Bay Area. Maintenance, Signature, Deep, and Move-In/Move-Out cleaning—customized to your home. Call (510) 603-7272 or request a quote.";

export const ROUTES = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    priority: 1,
  },
  {
    path: "/services",
    title: "Cleaning Services | Maid For Me Oakland & Bay Area",
    description:
      "Choose Maintenance, Signature, Deep, or Move-In/Move-Out cleaning from Maid For Me. Personalized home cleaning throughout Oakland and the Bay Area.",
    priority: 0.8,
  },
  {
    path: "/quote",
    title: "Request a Quote | Maid For Me",
    description:
      "Tell us about your home and get a personalized Maid For Me cleaning quote for Oakland and the Bay Area.",
    priority: 0.9,
  },
  {
    path: "/rates",
    title: "Cleaning Rates Guide | Maid For Me",
    description:
      "View Maid For Me's general cleaning rates guide. Every home is different—request a personalized quote for accurate pricing.",
    priority: 0.7,
  },
  {
    path: "/faqs",
    title: "FAQs | Maid For Me Home Cleaning",
    description:
      "Answers about Maid For Me cleaning services, supplies, insurance, booking, and service areas in Oakland and the Bay Area.",
    priority: 0.7,
  },
  {
    path: "/testimonials",
    title: "Customer Reviews | Maid For Me",
    description:
      "Read what Oakland, Piedmont, and Bay Area homeowners say about Maid For Me home cleaning.",
    priority: 0.7,
  },
  {
    path: "/gallery",
    title: "Gallery | Maid For Me",
    description:
      "See finished interiors reflecting Maid For Me’s professional home cleaning care.",
    priority: 0.6,
  },
  {
    path: "/hiring",
    title: "Careers | Maid For Me",
    description:
      "Join the Maid For Me team providing professional home cleaning in Oakland and the Bay Area.",
    priority: 0.4,
  },
] as const;

export function absoluteUrl(path: string = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
