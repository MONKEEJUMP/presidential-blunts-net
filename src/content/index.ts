import { aboutPage } from "./about";
import { comparePages } from "./compare";
import { pillarPage } from "./pillar";
import { ritualPages } from "./ritual";
import { strainsPage } from "./strains";
import { wrapPages } from "./wrap";

import type { PageContent } from "./types";

export const pages: PageContent[] = [
  pillarPage,
  wrapPages[0],
  comparePages[0],
  ritualPages[0],
  strainsPage,
  ...wrapPages.slice(1),
  ...comparePages.slice(1),
  ...ritualPages.slice(1),
  aboutPage,
];

export const pagesByPath = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string): PageContent | undefined {
  return pagesByPath.get(path);
}
