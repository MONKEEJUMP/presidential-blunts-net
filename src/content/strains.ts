import type { PageContent } from "./types";

export const strainsPage: PageContent = {
  path: "/strains",
  kind: "hub",
  silo: "strains",
  h1: "The Strains",
  title: "Presidential Blunt Strains",
  description:
    "A standalone library of the 24 named strains available as Presidential blunts, with a guide to the six verified catalog groupings.",
  wordTarget: [450, 600],
  intro: [
    "The Presidential blunt library contains 24 named strains across a catalog organized by extract base, flavor direction, house lines, and collaboration. This hub gathers every current name as text and explains the verified groupings that surround the library. Individual strain pages belong to a later expansion, so this page serves as the complete strain index today.",
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
        "The Silver Flavor Series contains seven products built on distillate and has a fruit-forward direction. Distillate is refined to a near-neutral aroma, making it a clear foundation when flavor is added deliberately. The Gold Strain Series contains 19 products built on live resin and has a cannabis-forward direction. Live resin begins with cannabis flash-frozen around minus 40 degrees Fahrenheit within hours of harvest, followed by low-temperature closed-loop hydrocarbon extraction and vacuum purging.",
        "The Rose Gold Connoisseur Series contains five products built on solventless live rosin. Fresh-frozen material is washed in ice water and then pressed with heat and pressure; hash rosin presses at 160 to 190 degrees Fahrenheit. Three additional groupings complete the verified catalog structure: the Presidential Line with ten products, the Presidential House Line with three, and Presidential x THC Design with three. The collaboration uses estate-grown flower cultivated by THC Design.",
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
