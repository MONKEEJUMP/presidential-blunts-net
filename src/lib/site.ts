import type { ContentImage, PageContent, Silo } from "@/content/types";

export const SITE_NAME = "Presidential Blunts";
export const SITE_URL = "https://presidentialblunts.net";
export const DEFAULT_OG_IMAGE = "/images/presidential-crest.webp";

export const primaryNavigation = [
  { href: "/wrap", label: "Wrap" },
  { href: "/compare", label: "Compare" },
  { href: "/ritual", label: "Ritual" },
  { href: "/strains", label: "Strains" },
  { href: "/about", label: "About" },
] as const;

export const siloLabels: Record<Silo, string> = {
  wrap: "The Wrap",
  compare: "Compare",
  ritual: "The Ritual",
  strains: "The Strains",
};

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function pathFromSegments(segments?: string[]): string {
  return segments?.length ? normalizePath(segments.join("/")) : "/";
}

export function absoluteUrl(path: string): string {
  return new URL(normalizePath(path), SITE_URL).toString();
}

export function findPage(pages: readonly PageContent[], path: string): PageContent | undefined {
  const normalizedPath = normalizePath(path);
  return pages.find((page) => normalizePath(page.path) === normalizedPath);
}

export function imagesForPage(
  pageImages: Readonly<Record<string, ContentImage[]>>,
  path: string,
): ContentImage[] {
  return pageImages[normalizePath(path)] ?? [];
}

export function imageUrl(image?: ContentImage): string {
  return absoluteUrl(image?.src ?? DEFAULT_OG_IMAGE);
}

export function escapeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
