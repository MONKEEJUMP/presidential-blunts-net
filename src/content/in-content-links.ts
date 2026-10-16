export type InContentLinkRule = {
  readonly href: string;
  readonly anchor: string;
  readonly context: string;
};

// InLinks pid 50403 export (2026-10-06), hardcoded as same-site links inside
// section copy. Each rule links its anchor once, at the first paragraph that
// contains the exact context, so no copy is added or reworded.
export const IN_CONTENT_LINKS: Readonly<Record<string, readonly InContentLinkRule[]>> = {
  "/strains": [
    { href: "/", anchor: "Presidential blunts", context: "blunt name still returns to the same core construction cue. Presidential blunts are one hundred percent tobacco free" },
    { href: "/wrap/wrap-and-flavour", anchor: "selected flavor direction", context: "concentrate, kief, and selected flavor direction define the finished profile. Readers" },
  ],
  "/about": [
    { href: "/", anchor: "Presidential Blunts", context: "Presidential Blunts does not sell or ship cannabis" },
    { href: "/wrap/wrap-and-flavour", anchor: "selected flavor direction", context: "kief, and deliberately selected flavor direction" },
  ],
  // SHIP-FIXLIST audit-1006 items 7-8.
  "/": [
    { href: "/ritual", anchor: "Ritual hub", context: "belongs in the Ritual hub" },
    { href: "/strains", anchor: "Strains hub", context: "the Strains hub records the current named range" },
    { href: "/strains", anchor: "strain library", context: "are listed in the strain library" },
    { href: "/strains", anchor: "Presidential Blunts strains", context: "The full list of Presidential Blunts strains" },
    { href: "/about", anchor: "founded in Los Angeles in 2012", context: "Presidential cannabis brand, founded in Los Angeles in 2012" },
    // SURFER-BLUNTS-HOME-R4.
    { href: "/wrap/tobacco-free", anchor: "tobacco-free hemp wrap", context: "packed inside a tobacco-free hemp wrap" },
    { href: "/compare/infused-vs-non-infused", anchor: "concentrate infusion", context: "flower base, concentrate infusion" },
    { href: "/wrap/burn-rate", anchor: "slower burn", context: "layered fill, and slower burn" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "hemp wraps rather than tobacco leaf", context: "Presidential Blunts use hemp wraps rather than tobacco leaf. The wrap keeps" },
    { href: "/compare/hemp-wrap-vs-paper", anchor: "Pre rolls use paper", context: "Pre rolls use paper; Presidential Blunts use a broader hemp wrap" },
    { href: "/wrap", anchor: "Wrap hub", context: "continue in the Wrap hub" },
    { href: "/ritual/storage", anchor: "handling and storage", context: "Ritual for handling and storage" },
    { href: "/compare/blunt-vs-pre-roll", anchor: "blunt versus pre-roll", context: "burn rate, blunt versus pre-roll" },
    { href: "/ritual/session-length", anchor: "session pacing", context: "wrap material and session pacing" },
  ],
  "/compare/blunt-vs-joint": [
    { href: "/wrap", anchor: "hemp wrap", context: "The hemp wrap is tobacco free" },
    { href: "/strains", anchor: "strain labels", context: "Series names and strain labels refine the recipe" },
  ],
  "/compare/blunt-vs-pre-roll": [
    { href: "/wrap", anchor: "hemp wrap", context: "neutral hemp wrap across its blunt catalog" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "tobacco leaf", context: "so the tobacco leaf stays on the outside" },
  ],
  "/compare/hemp-wrap-vs-paper": [
    { href: "/wrap", anchor: "hemp wraps", context: "Presidential uses hemp wraps for its blunts" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "tobacco leaf", context: "Traditional tobacco leaf carries its own taste" },
    { href: "/wrap/what-a-wrap-does", anchor: "outer layer", context: "Hemp wrap versus paper answers the outer layer" },
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
    { href: "/strains", anchor: "blunt library", context: "each name in the blunt library" },
  ],
  "/wrap/what-a-wrap-does": [
    { href: "/wrap", anchor: "hemp wrap", context: "A smooth hemp wrap of blunt-scale thickness" },
  ],
  // Final pass 1006: incoming "hemp wrap" links to /wrap and "strains" to /strains.
  "/ritual/session-length": [
    { href: "/wrap", anchor: "hemp wrap", context: "The hemp wrap also stays neutral in taste" },
  ],
  "/ritual/storage": [
    { href: "/wrap", anchor: "hemp wrap", context: "A neutral hemp wrap lets the contents lead the taste" },
  ],
  "/ritual/relighting": [
    { href: "/wrap", anchor: "hemp wrap", context: "A thicker hemp wrap around flower, concentrate, and kief" },
  ],
  "/ritual/how-to-light-one": [
    { href: "/", anchor: "its blunts", context: "Presidential uses a hemp wrap across its blunts" },
    { href: "/wrap", anchor: "hemp wrap", context: "the thicker hemp wrap supports the slower burn" },
  ],
  "/compare/blunt-vs-spliff": [
    { href: "/wrap", anchor: "hemp wrap", context: "The thicker hemp wrap keeps the format's capacity" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "tobacco leaf", context: "s. When the wrap is hemp or another non-tobacco leaf substitut" },
  ],
  "/compare/mini-vs-full": [
    { href: "/wrap", anchor: "hemp wraps", context: "Presidential rolls in neutral hemp wraps across the blunt catalog" },
  ],
  // NETS-NEXT 1009 (InLinks 50403, 0 credits).
  "/wrap/burn-rate": [
    { href: "/compare/infused-vs-non-infused", anchor: "infused blunt", context: "and an infused blunt adds concentrate to the flower" },
  ],
  "/wrap": [
    { href: "/ritual/how-to-light-one", anchor: "how to light a hemp-wrapped blunt", context: "see how to light a hemp-wrapped blunt" },
  ],
  "/compare": [
    { href: "/wrap/wrap-and-flavour", anchor: "flavor profiles", context: "The wrap and the fill each shape how flavor profiles come through" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "tobacco leaf", context: "hms to different occasions. Traditional tobacco leaf or cigar-" },
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
