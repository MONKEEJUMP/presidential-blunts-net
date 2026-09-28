import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential Blunts",
  title: "About Presidential Blunts | Brand and Publisher",
  description:
    "About Presidential Blunts, the official reference for the brand's tobacco-free hemp-wrap infused blunts, product formats, construction, and licensed retail context.",
  wordTarget: [1100, 1250],
  intro: [
    "This is the official Presidential blunt reference, published to explain the format with clear, original reporting grounded in the brand’s verified product facts. It gives readers one focused place to understand hemp wraps, three-layer infusion, burn behavior, sizes, strain names, and licensed retail availability.",
    "Presidential Blunts is the publisher identity for this focused reference. Presidential is the brand, not a strain or cultivar, and the site keeps that identity separate from the named flower selections recorded in the catalog index.",
    "Adult readers 21+ can treat this page as the publisher map: who publishes the guide, how the wholesale model works, why the hubs nest the way they do, and how to keep construction, catalog, and brand statements in their proper places—without medical claims, dosing language, or invented retail promises.",
  ],
  sections: [
    {
      id: "presidential",
      heading: "Presidential, Los Angeles, 2012",
      paragraphs: [
        "Presidential was founded in Los Angeles in 2012. The company operates wholesale only, supplying products through licensed retailers. Its current catalog contains 47 products across six groupings and four formats: Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Products are carried in California, Oklahoma, New York, Nevada, Michigan, and Arizona, with Florida and Washington opening.",
        "Across the blunt catalog, Presidential uses hemp wraps that are one hundred percent tobacco free. The hemp wrap provides the thicker structure, slower burn, and longer heat retention associated with a blunt while keeping its taste neutral. That lets the flower, concentrate, kief, and deliberately selected flavor direction provide the identity of what is rolled inside.",
        "Wholesale context matters for how this reference is read. Presidential Blunts does not sell or ship cannabis from this site; it explains the infused blunt format and points adults toward licensed doors where legal. Market coverage, retailer selection, and current package labeling remain the practical checks for availability and product identity.",
      ],
    },
    {
      id: "why-this-reference-exists",
      heading: "Why This Reference Exists",
      paragraphs: [
        "Infused blunts bring several topics together in one format. The outer wrap manages airflow and burn rate. The inner construction combines flower, concentrate, and kief. Extract choices distinguish fruit-forward distillate products, cannabis-forward live resin products, solventless live rosin products, and collaboration lines. Full-size blunts and minis then carry that construction at two scales.",
        "This publication separates those topics into a pillar, four hubs, and focused articles. The wrap library covers material and function. Comparisons explain the structural differences among rolled formats. The ritual library follows lighting, relighting, storage, session length, and sharing. The strains hub records all 24 names currently available as blunts. Together, those pages create a durable path from a quick definition to a detailed understanding.",
        "A single homepage overview cannot carry every construction, format, ritual, and catalog question without blurring them. The hub map keeps each question class in its silo so readers can move from definition to detail without mixing wrap physics into strain names or lighting cues into wholesale geography.",
      ],
    },
    {
      id: "publishing-standard",
      heading: "A Clear Publishing Standard",
      paragraphs: [
        "Every article starts with a direct answer and builds from verified facts. Product construction, catalog counts, formats, geographic availability, and extract processes stay connected to the information Presidential has established. Plain language keeps the reference useful for a first visit and precise enough for a reader comparing the role of wrap, fill, extract, size, and heat.",
        "The publication also connects learning with the brand’s wholesale model. Readers can understand the format here, then use Presidential’s complete catalog and retail resources to continue through licensed channels. That relationship keeps the reference centered on education while giving current product information a clear home.",
        "Publisher statements stay with Presidential Blunts as the identity on this site. Brand statements describe the company and product family. Catalog statements describe named items and groupings. Construction statements describe wrap, fill, and burn behavior. Keeping those layers separate prevents a strain name from rewriting the publisher or a format label from inventing an unverified product claim.",
      ],
    },
    {
      id: "using-the-publication",
      heading: "How to Use the Official Reference",
      paragraphs: [
        "The publication covers one subject: Presidential hemp-wrap infused blunts. It explains the format, records the verified catalog structure, and identifies the publisher behind the material. It does not turn every catalog name into a separate page, assign unverified products to a series, or use the Presidential name as though it were a cultivar.",
        "Each hub answers a different class of question. The wrap hub explains the tobacco-free outer material, airflow, burn rate, and how hemp wraps are made. The ritual hub covers storage, lighting, relighting, session length, and sharing. The comparison hub separates blunts from joints, pre-rolls, spliffs, paper wraps, and smaller formats. The strains hub keeps the verified name list and catalog groupings together without inventing child routes.",
        "Readers can enter through the hub that matches the question in front of them. A construction question belongs in the wrap library. A question about lighting or storage belongs in the ritual library. Format differences belong in comparisons, while exact names and series context belong in the strains index. The links between those hubs keep one topic from carrying claims that belong somewhere else.",
        "The site uses direct answers first, then adds the facts needed to understand the answer. Construction statements stay with the format, catalog statements stay with the catalog, and publisher statements stay with the brand record. When a detail depends on a specific package or current official catalog record, readers should check that source rather than infer it from a strain name, series label, image, or older page. That check keeps the publication current without adding unsupported catalog claims.",
      ],
    },
    {
      id: "hub-nesting",
      heading: "How the hubs nest under this publisher guide",
      paragraphs: [
        "This About page is the publisher parent. Five primary destinations nest beside it for adult readers: the homepage pillar for the full format overview, Wrap for hemp construction, Compare for rolled-format contrasts, Ritual for session cues, and Strains for named catalog groupings. Child articles under each hub isolate one practical question while linking back when the next question spans more than one silo.",
        "Browse in that practical order when you are new to the infused blunt format, or jump to the hub that matches the moment in hand. Company framing starts here; construction continues in Wrap; format choice continues in Compare; handling continues in Ritual; product names continue in Strains. Return to this About page whenever you need publisher identity, wholesale context, and the map of how those hubs stay separated.",
        "Outbound catalog and find-us paths already linked from this site stay as published: leave moon-rock locator destinations unchanged when you follow them from here, and confirm current selection with the licensed retailer rather than inferring stock from a hub overview.",
      ],
    },
  ],
  linkParagraphs: [
    {
      before: "Start with the complete ",
      link: { href: "/", label: "Presidential Blunts homepage guide" },
      after: " for the core infused blunt format overview.",
    },
    {
      before: "Browse all current blunt ",
      link: { href: "/strains", label: "strains and catalog groupings" },
      after: " in the named product library.",
    },
    {
      before: "See how ",
      link: { href: "/wrap", label: "hemp wrap construction" },
      after: " provides the tobacco-free outer structure, burn pace, and flavour window.",
    },
    {
      before: "Use the ",
      link: { href: "/ritual", label: "infused blunt ritual guide" },
      after: " for storage, lighting, relighting, pacing, and sharing.",
    },
    {
      before: "Open the ",
      link: { href: "/compare", label: "blunt comparison hub" },
      after: " when the question is how rolled formats differ.",
    },
    {
      before: "See how each ",
      link: { href: "https://presidentialcannabis.net/genetics/phenotypes", label: "strain" },
      after: " begins with traits expressed through cannabis genetics.",
    },
    {
      before: "Compare ",
      link: { href: "https://presidentialcannabis.net/choosing/flower-vs-infused", label: "flower" },
      after: " with infused products across the wider Presidential guide.",
    },
    {
      before: "Explore cannabis ",
      link: { href: "https://presidentialcannabis.net/plant/the-flower-structure", label: "flower structure" },
      after: " from the plant outward.",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com",
    label: "Explore the complete Presidential catalog",
  },
};
