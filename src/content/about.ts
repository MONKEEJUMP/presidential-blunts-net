import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About This Site",
  title: "About Presidential Blunts",
  description:
    "The publishing purpose, brand history, product scope, and sourcing principles behind the Presidential blunt reference.",
  wordTarget: [350, 450],
  intro: [
    "This is the official Presidential blunt reference, published to explain the format with clear, original reporting grounded in the brand’s verified product facts. It gives readers one focused place to understand hemp wraps, three-layer infusion, burn behavior, sizes, strain names, and licensed retail availability.",
  ],
  sections: [
    {
      id: "presidential",
      heading: "Presidential, Los Angeles, 2012",
      paragraphs: [
        "Presidential was founded in Los Angeles in 2012. The company operates wholesale only, supplying products through licensed retailers. Its current catalog contains 47 products across six groupings and four formats: Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Products are carried in California, Oklahoma, New York, Nevada, Michigan, and Arizona, with Florida and Washington opening.",
        "Across the blunt catalog, Presidential uses hemp wraps that are one hundred percent tobacco free. The hemp wrap provides the thicker structure, slower burn, and longer heat retention associated with a blunt while keeping its taste neutral. That lets the flower, concentrate, kief, and deliberately selected flavor direction provide the identity of what is rolled inside.",
      ],
    },
    {
      id: "why-this-reference-exists",
      heading: "Why This Reference Exists",
      paragraphs: [
        "Infused blunts bring several topics together in one format. The outer wrap manages airflow and burn rate. The inner construction combines flower, concentrate, and kief. Extract choices distinguish fruit-forward distillate products, cannabis-forward live resin products, solventless live rosin products, and collaboration lines. Full-size blunts and minis then carry that construction at two scales.",
        "This publication separates those topics into a pillar, four hubs, and focused articles. The wrap library covers material and function. Comparisons explain the structural differences among rolled formats. The ritual library follows lighting, relighting, storage, session length, and sharing. The strains hub records all 24 names currently available as blunts. Together, those pages create a durable path from a quick definition to a detailed understanding.",
      ],
    },
    {
      id: "publishing-standard",
      heading: "A Clear Publishing Standard",
      paragraphs: [
        "Every article starts with a direct answer and builds from verified facts. Product construction, catalog counts, formats, geographic availability, and extract processes stay connected to the information Presidential has established. Plain language keeps the reference useful for a first visit and precise enough for a reader comparing the role of wrap, fill, extract, size, and heat.",
        "The publication also connects learning with the brand’s wholesale model. Readers can understand the format here, then use Presidential’s complete catalog and retail resources to continue through licensed channels. That relationship keeps the reference centered on education while giving current product information a clear home.",
      ],
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com",
    label: "Explore the complete Presidential catalog",
  },
};
