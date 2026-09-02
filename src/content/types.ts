export type PageKind = "pillar" | "hub" | "article" | "about";

export type Silo = "wrap" | "compare" | "ritual" | "strains";

export type DataTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: DataTable;
};

export type PageLink = {
  href: string;
  label: string;
  description?: string;
};

export type LinkedParagraph = {
  before: string;
  link: PageLink;
  after: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  path: string;
  kind: PageKind;
  silo?: Silo;
  h1: string;
  title: string;
  description: string;
  wordTarget: [number, number];
  intro: string[];
  sections: ContentSection[];
  linkParagraphs?: LinkedParagraph[];
  faq?: FaqItem[];
  childLinks?: PageLink[];
  relatedLinks?: PageLink[];
  externalLink?: PageLink;
};

export type ContentImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  productHref?: string;
};
