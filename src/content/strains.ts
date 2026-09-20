import type { PageContent } from "./types";

export const strainsPage: PageContent = {
  path: "/strains",
  kind: "hub",
  silo: "strains",
  h1: "Blunt Strains and Catalog Groupings",
  title: "Blunt Strain and Catalog Guide | Presidential Blunts",
  description:
    "A standalone library of the 24 named strains available as Presidential blunts, with a guide to the six verified catalog groupings.",
  wordTarget: [800, 950],
  intro: [
    "The Presidential blunt library contains 24 named strains across a catalog organized by extract base, flavor direction, house lines, and collaboration. This hub gathers every current name as text and explains the verified groupings that surround the library. Individual strain pages belong to a later expansion, so this page serves as the complete strain index today.",
    "Presidential Blunts publishes this index as a catalog guide. Presidential is the brand and publisher, not a strain or cultivar name, so the page keeps named selections separate from the series and partnership labels used to organize them.",
  ],
  sections: [
    {
      id: "all-24-strains",
      heading: "All 24 Blunt Strains",
      paragraphs: [
        "Each name below is available as a blunt. The list presents the library without assigning individual strains to a series, leaving the series descriptions to explain their verified construction and catalog direction.",
      ],
      bullets: [
        "Cherry Gelato",
        "Gorilla Goo",
        "Cap Junky",
        "Skywalker",
        "Crescendo",
        "Orange Push Pop",
        "Pink Cookies",
        "Strawberry",
        "Watermelon",
        "Waui",
        "XJ-13",
        "XXX",
        "Blue Raspberry",
        "Peach Mango",
        "Pineapple",
        "Tropical",
        "Grape",
        "Apricotti",
        "Daniel LaRusso",
        "Garlic Cookies",
        "Ghost Train Haze",
        "Laura Charles",
        "Nino Brown",
        "Whoa Si Whoa",
      ],
    },
    {
      id: "series-and-lines",
      heading: "Series and Collaboration Lines",
      paragraphs: [
        "The Silver Flavor Series contains seven products built on distillate and has a fruit-forward direction. The Gold Strain Series contains 19 products built on live resin and has a cannabis-forward direction. Live resin begins with cannabis frozen at harvest rather than first dried and cured.",
        "The Rose Gold Connoisseur Series contains five products built on solventless live rosin, which uses ice water, heat, and pressure instead of chemical solvents. Three additional groupings complete the catalog structure: the Presidential Line with ten products, the Presidential House Line with three, and Presidential x THC Design with three. The collaboration uses flower cultivated by THC Design.",
      ],
    },
    {
      id: "using-the-library",
      heading: "How to Use the Strain Library",
      paragraphs: [
        "A strain name and a series name provide two different entry points. The strain list supports browsing by a familiar selection, while the series description explains an extract base, flavor direction, or collaboration. Keeping those pieces distinct makes the library accurate and gives every name equal space until its own reference page is developed.",
        "Across the six groupings, the verified counts total 47 products. Those products appear in four formats—Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis—while this library focuses specifically on the 24 names available as blunts. The format focus makes the index easy to scan: every listed name belongs in the blunt conversation, and the surrounding series guide supplies the verified extract and catalog context readers can use alongside it.",
        "All of these selections return to the same blunt format: a thicker hemp wrap around infused material. Presidential blunts are one hundred percent tobacco free, and the neutral wrap lets the flower, concentrate, kief, and selected flavor direction define the finished profile. Readers who want the complete format overview can return to Presidential Blunts, while current retail availability is available through the licensed-retailer locator.",
        "The standalone hub keeps every verified strain name visible in one place and provides a stable foundation for the individual reference pages planned for the later library expansion.",
      ],
    },
    {
      id: "reading-the-index",
      heading: "Read the Catalog in Layers",
      paragraphs: [
        "Use the name list as the first layer of the index. It answers one narrow question: which names belong in the Presidential blunt library. The series and line descriptions form a second layer that explains how the wider catalog is grouped. Keeping those layers separate prevents a reader from assigning a named selection to a series when the verified catalog record does not make that relationship.",
        "Extract base is part of the grouping context, not another strain name. Distillate defines the Silver Flavor Series construction, live resin defines the Gold Strain Series, and solventless live rosin defines the Rose Gold Connoisseur Series. Fruit-forward and cannabis-forward language describes each series direction. It does not turn an extract, flavor direction, or series label into a cultivar identity.",
        "House and collaboration labels describe who organized or contributed to a line. The Presidential Line and Presidential House Line sit under the Presidential catalog, while Presidential x THC Design identifies a collaboration using flower cultivated by THC Design. Those labels explain catalog relationships. They do not rename the flower selections or make Presidential itself a strain.",
        "To use the hub, begin with the exact name list, then read the grouping notes for extract and catalog context. Move to the format guides when the question shifts to hemp wrap construction, blunt-versus-pre-roll differences, or mini-versus-full sizing. Check the current package for product-specific details instead of inferring them from a name or grouping alone. This keeps the index useful without inventing a product page, series assignment, or availability statement.",
      ],
    },
  ],
  linkParagraphs: [
    {
      before: "Return to the complete ",
      link: { href: "/", label: "blunt" },
      after: " reference for construction and format context.",
    },
    {
      before: "Match a selected format to the session ",
      link: { href: "/ritual", label: "guide" },
      after: " for lighting, storage, and sharing.",
    },
    {
      before: "Trace how each ",
      link: { href: "https://presidentialcannabis.net/genetics/phenotypes", label: "strain" },
      after: " expresses traits through cannabis genetics.",
    },
    {
      before: "Compare ",
      link: { href: "https://presidentialcannabis.net/choosing/flower-vs-infused", label: "flower" },
      after: " with infused products across the wider catalog.",
    },
    {
      before: "Explore the official plant and company guide from ",
      link: { href: "https://presidentialcannabis.net/", label: "Presidential Cannabis" },
      after: ".",
    },
    {
      before: "Read the ",
      link: { href: "/about", label: "Presidential Blunts brand guide" },
      after: " for publisher context behind the catalog.",
    },
    {
      before: "Use the ",
      link: { href: "/wrap", label: "hemp blunt wrap guide" },
      after: " when the question shifts from catalog names to outer construction.",
    },
    {
      before: "Open the ",
      link: { href: "/compare", label: "rolled-format comparison hub" },
      after: " to place the blunt catalog beside other rolled formats.",
    },
    {
      before: "Compare a ",
      link: { href: "/compare/blunt-vs-pre-roll", label: "blunt with an infused pre-roll" },
      after: " before using a catalog name to choose a format.",
    },
    {
      before: "Review the ",
      link: { href: "/compare/mini-vs-full", label: "mini and full-size guide" },
      after: " when size is the next catalog decision.",
    },
  ],
  relatedLinks: [
    {
      href: "/",
      label: "Presidential Blunts",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "Check strain availability at licensed retailers",
  },
};
