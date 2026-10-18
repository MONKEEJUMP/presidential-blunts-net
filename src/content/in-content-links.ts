export type InContentLinkRule = {
  readonly href: string;
  readonly anchor: string;
  readonly context: string;
};

// InLinks pid 50403 export (2026-10-06), hardcoded as same-site links inside
// section copy. Each rule links its anchor once, at the first paragraph that
// contains the exact context, so no copy is added or reworded.
export const IN_CONTENT_LINKS: Readonly<Record<string, readonly InContentLinkRule[]>> = {
  "/ritual/sharing": [
    { href: "/wrap", anchor: "a neutral hemp wrap", context: "Presidential uses a neutral hemp wrap that is one hundred percent tobacco free" },
  ],
  "/ritual": [
    { href: "/wrap", anchor: "a neutral, tobacco-free hemp blunt wrap", context: "Presidential blunts pair a neutral, tobacco-free hemp blunt wrap" },
  ],
  "/strains": [
    { href: "/", anchor: "infused hemp-wrapped blunts", context: "same core construction cue. Presidential’s infused hemp-wrapped blunts are one hundred percent tobacco free" },
    { href: "/ritual/sharing", anchor: "sharing is the next skill", context: "or sharing is the next skill" },
    { href: "/wrap/wrap-and-flavour", anchor: "selected flavor direction", context: "concentrate, kief, and selected flavor direction define the finished profile. Readers" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "tobacco-free blunt", context: "e package. A format answer is separate: tobacco-free blunt, mi" },
  ],
  "/about": [
    { href: "/", anchor: "the infused blunt format", context: "it explains the infused blunt format" },
    { href: "/ritual/sharing", anchor: "session length, and sharing", context: "relighting, storage, session length, and sharing. The strains hub records" },
    { href: "/wrap/wrap-and-flavour", anchor: "selected flavor direction", context: "the kief or diamond finish, and the selected flavor direction" },
    { href: "/compare/blunt-vs-spliff", anchor: "spliffs, paper wraps", context: "joints, pre-rolls, spliffs, paper wraps" },
    // SITEBULB-R28 fix 1.
    { href: "/wrap/hemp-vs-tobacco", anchor: "how our wraps compare with tobacco leaf", context: "see how our wraps compare with tobacco leaf" },
  ],
  // SHIP-FIXLIST audit-1006 items 7-8.
  "/": [
    { href: "/ritual", anchor: "the Ritual guide", context: "is covered in the Ritual guide" },
    { href: "/strains", anchor: "Strains hub", context: "the Strains hub records the current named range" },
    { href: "/strains", anchor: "strain library", context: "are listed in the strain library" },
    { href: "/strains", anchor: "full list of blunt strains", context: "The full list of blunt strains" },
    { href: "/about", anchor: "founded in Los Angeles in 2012", context: "Presidential cannabis brand, founded in Los Angeles in 2012" },
    // SURFER-BLUNTS-HOME-R4.
    { href: "/compare/blunt-vs-joint", anchor: "A joint is flower in thin paper", context: "A joint is flower in thin paper" },
    { href: "/wrap/tobacco-free", anchor: "tobacco-free hemp wrap", context: "packed inside a tobacco-free hemp wrap" },
    { href: "/compare/infused-vs-non-infused", anchor: "concentrate infusion", context: "flower base, concentrate infusion" },
    { href: "/wrap/burn-rate", anchor: "slower burn", context: "layered fill, and slower burn" },
    { href: "/wrap/hemp-vs-tobacco", anchor: "hemp wraps rather than tobacco leaf", context: "Presidential Blunts use hemp wraps rather than tobacco leaf. The wrap keeps" },
    { href: "/compare/hemp-wrap-vs-paper", anchor: "Pre rolls use paper", context: "Pre rolls use paper; Presidential Blunts use a broader hemp wrap" },
    { href: "/wrap", anchor: "Wrap hub", context: "continue in the Wrap hub" },
    { href: "/ritual/storage", anchor: "handling and storage", context: "Ritual for handling and storage" },
    { href: "/compare/blunt-vs-pre-roll", anchor: "blunt versus pre-roll", context: "burn rate, blunt versus pre-roll" },
    { href: "/ritual/session-length", anchor: "session pacing", context: "questions about session pacing lead" },
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
    { href: "/", anchor: "the official infused-blunt guide on this website", context: "start with the official infused-blunt guide on this website" },
    { href: "/wrap", anchor: "hemp wrap", context: "share a hemp wrap" },
  ],
  "/wrap/tobacco-free": [
    { href: "/wrap", anchor: "hemp wrap", context: "names hemp wrap or tobacco-free wrap" },
  ],
  "/wrap/wrap-and-flavour": [
    { href: "/wrap", anchor: "hemp wrap", context: "names hemp wrap or tobacco-free wrap" },
  ],
  "/wrap/hemp-vs-tobacco": [
    { href: "/", anchor: "main blunt guide", context: "main blunt guide on the home page" },
    { href: "/strains", anchor: "blunt library", context: "each name in the blunt library" },
  ],
  "/wrap/what-a-wrap-does": [
    { href: "/wrap", anchor: "hemp wrap", context: "A smooth hemp wrap of blunt-scale thickness" },
    { href: "/wrap/tobacco-free", anchor: "tobacco-free, neutral outer layer", context: "Hemp gives Presidential a tobacco-free, neutral outer layer" },
  ],
  // Final pass 1006: incoming "hemp wrap" links to /wrap and "strains" to /strains.
  "/ritual/session-length": [
    { href: "/wrap", anchor: "hemp wrap", context: "The hemp wrap also stays neutral in taste" },
  ],
  "/ritual/storage": [
    { href: "/", anchor: "brand’s official infused-blunt website", context: "The brand’s official infused-blunt website explains" },
    { href: "/wrap", anchor: "hemp wrap", context: "A neutral hemp wrap lets the contents lead the taste" },
  ],
  "/ritual/relighting": [
    { href: "/wrap", anchor: "hemp wrap", context: "A thicker hemp wrap around flower, concentrate, and a kief or diamond finish" },
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
    { href: "/", anchor: "the official Presidential blunt guide’s home page", context: "Both sizes are covered on the official Presidential blunt guide’s home page" },
    { href: "/wrap", anchor: "hemp wraps", context: "Presidential rolls in neutral hemp wraps across the blunt catalog" },
    { href: "/strains", anchor: "strains as blunts", context: "Presidential offers strains as blunts" },
    // SITEBULB-R28 fix 3.
    { href: "/wrap/hemp-vs-tobacco", anchor: "Our wraps are tobacco-free hemp", context: "Our wraps are tobacco-free hemp, not tobacco leaf" },
  ],
  // NETS-NEXT 1009 (InLinks 50403, 0 credits).
  "/wrap/burn-rate": [
    { href: "/compare/infused-vs-non-infused", anchor: "infused blunt", context: "and an infused blunt adds concentrate to the flower" },
  ],
  "/wrap": [
    { href: "/ritual/how-to-light-one", anchor: "how to light a hemp-wrapped blunt", context: "see how to light a hemp-wrapped blunt" },
  ],
  "/compare": [
    { href: "/ritual/sharing", anchor: "session length, sharing", context: "The comparison looks at session length, sharing, and how size" },
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
