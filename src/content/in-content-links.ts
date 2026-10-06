export type InContentLinkRule = {
  readonly href: string;
  readonly anchor: string;
  readonly context: string;
};

// InLinks pid 50403 export (2026-10-06), hardcoded as same-site links inside
// section copy. Each rule links its anchor once, at the first paragraph that
// contains the exact context, so no copy is added or reworded.
export const IN_CONTENT_LINKS: Readonly<Record<string, readonly InContentLinkRule[]>> = {
  // SHIP-FIXLIST audit-1006 items 7-8.
  "/": [
    { href: "/ritual", anchor: "Ritual hub", context: "belongs in the Ritual hub" },
    { href: "/strains", anchor: "Strains hub", context: "the Strains hub records the current named range" },
  ],
  "/compare/blunt-vs-joint": [
    { href: "/wrap", anchor: "hemp wrap", context: "The hemp wrap is tobacco free" },
  ],
  "/compare/blunt-vs-pre-roll": [
    { href: "/wrap", anchor: "hemp wrap", context: "neutral hemp wrap across its blunt catalog" },
  ],
  "/compare/hemp-wrap-vs-paper": [
    { href: "/wrap", anchor: "hemp wraps", context: "Presidential uses hemp wraps for its blunts" },
  ],
  "/compare/infused-vs-non-infused": [
    { href: "/wrap", anchor: "hemp wrap", context: "share a hemp wrap" },
  ],
  "/wrap/tobacco-free": [
    { href: "/wrap", anchor: "hemp wrap", context: "names hemp wrap or tobacco-free wrap" },
  ],
  "/wrap/wrap-and-flavour": [
    { href: "/wrap", anchor: "hemp wrap", context: "names hemp wrap or tobacco-free wrap" },
  ],
  "/wrap/hemp-vs-tobacco": [
    { href: "/", anchor: "blunt", context: "main blunt guide on the home page" },
  ],
  "/wrap/what-a-wrap-does": [
    { href: "/wrap", anchor: "hemp wrap", context: "Presidential uses a neutral hemp wrap, so" },
  ],
};

const WIKI = "https://en.wikipedia.org/wiki/";
const thing = (name: string, slug: string) => ({ "@type": "Thing", name, sameAs: `${WIKI}${slug}` });

// InLinks pid 50403 schema export, merged into the existing WebPage node as
// `mentions`. Only entities that match the page are kept; FAQ suggestions that
// repeat the live FAQ and mismatched entities (wedding ring, sheet metal,
// bread roll, driver's license, food wrap) are dropped.
export const INLINKS_MENTIONS: Readonly<Record<string, readonly ReturnType<typeof thing>[]>> = {
  "/": [thing("blunt", "Blunt_(cannabis)")],
  "/wrap": [thing("cannabis", "Cannabis_(drug)")],
  "/compare": [thing("joint", "Joint_(cannabis)"), thing("blunt", "Blunt_(cannabis)")],
  "/strains": [thing("strain", "Cannabis_strain"), thing("blunt", "Blunt_(cannabis)")],
  "/about": [thing("blunt", "Blunt_(cannabis)"), thing("strain", "Cannabis_strain")],
  "/wrap/how-wraps-are-made": [thing("hemp", "Hemp"), thing("blunt", "Blunt_(cannabis)")],
};
