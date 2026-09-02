import Link from "next/link";
import { Fragment } from "react";

import type { ContentImage, ContentSection, PageContent } from "@/content/types";
import { absoluteUrl, escapeJsonLd, imageUrl, siloLabels, SITE_URL } from "@/lib/site";

import { ContentFigure } from "./content-figure";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function Breadcrumbs({ page }: { page: PageContent }) {
  const hubPath = page.silo ? `/${page.silo}` : undefined;
  const hubLabel = page.silo ? siloLabels[page.silo] : undefined;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {page.kind === "article" && hubPath && hubLabel ? (
        <><span aria-hidden="true">/</span><Link href={hubPath}>{hubLabel}</Link></>
      ) : null}
      <span aria-hidden="true">/</span>
      <span aria-current="page">{page.h1}</span>
    </nav>
  );
}

function TableOfContents({ page }: { page: PageContent }) {
  const entries = page.kind === "hub"
    ? page.childLinks?.length
      ? page.childLinks.map((link) => ({ key: link.href, label: link.label, href: link.href }))
      : page.sections.map((section) => ({ key: section.id, label: section.heading, href: undefined }))
    : page.sections.map((section) => ({ key: section.id, label: section.heading, href: `#${section.id}` }));
  const rows = Math.max(1, Math.ceil(entries.length / 2));
  const firstColumnEndIndex = rows - 1;
  return (
    <nav className={`table-of-contents table-of-contents--rows-${rows}`} aria-labelledby="contents-heading">
      <p className="table-of-contents__label" id="contents-heading">CONTENTS</p>
      <ol>
        {entries.map((entry, index) => (
          <li className={index === firstColumnEndIndex ? "table-of-contents__column-end" : undefined} key={entry.key}>
            {entry.href ? <Link href={entry.href}>{entry.label}</Link> : <span>{entry.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function DataTable({ section }: { section: ContentSection }) {
  if (!section.table) return null;
  return (
    <div className="table-scroll" role="region" aria-label={section.table.caption} tabIndex={0}>
      <table>
        <caption>{section.table.caption}</caption>
        <thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>
          {section.table.rows.map((row, rowIndex) => (
            <tr key={`${section.id}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${section.id}-${rowIndex}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSection({ section, image, reverse }: { section: ContentSection; image?: ContentImage; reverse: boolean }) {
  return (
    <section className={`article-section${image ? " article-section--with-image" : ""}`} id={section.id}>
      <div className={`article-section__grid${reverse ? " article-section__grid--reverse" : ""}`}>
        <div className="article-section__copy">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>)}
          {section.bullets?.length ? <ul>{section.bullets.map((bullet, index) => <li key={`${section.id}-bullet-${index}`}>{bullet}</li>)}</ul> : null}
          <DataTable section={section} />
        </div>
        {image ? <ContentFigure image={image} /> : null}
      </div>
    </section>
  );
}

function RelatedSiteLinks({ page }: { page: PageContent }) {
  if (!page.linkParagraphs?.length) return null;
  return (
    <div className="article-section__copy">
      {page.linkParagraphs.map((paragraph) => (
        <p key={paragraph.link.href}>
          {paragraph.before}<a href={paragraph.link.href}>{paragraph.link.label}</a>{paragraph.after}
        </p>
      ))}
    </div>
  );
}

function FrequentlyAskedQuestions({ page }: { page: PageContent }) {
  if (!page.faq?.length) return null;
  return (
    <section className="article-section" id="faq">
      <div className="article-section__copy">
        <h2>Frequently Asked Questions</h2>
        {page.faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandCallToAction() {
  return (
    <aside className="brand-cta" aria-labelledby="brand-cta-heading">
      <h2 id="brand-cta-heading">Find Presidential Near You</h2>
      <p>Explore the full Presidential catalog and locate licensed retailers through the main Presidential site.</p>
      <a className="brand-cta__button" href="https://presidentialmoonrocks.com/find-us" rel="nofollow">Find a licensed retailer</a>
    </aside>
  );
}

function LinkDirectory({ page }: { page: PageContent }) {
  const childLinks = page.childLinks ?? [];
  const relatedLinks = page.relatedLinks ?? [];
  if (!childLinks.length && !relatedLinks.length && !page.externalLink) return null;
  return (
    <aside className="link-directory" aria-label="Continue reading">
      {childLinks.length ? (
        <section>
          <p className="eyebrow">Explore this section</p>
          <div className="link-directory__list">
            {childLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>{link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      {relatedLinks.length ? (
        <section>
          <p className="eyebrow">Read next</p>
          <div className="link-directory__list link-directory__list--compact">
            {relatedLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>{link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      {page.externalLink ? <a className="editorial-link contextual-reference" href={page.externalLink.href}><span>{page.externalLink.label}</span></a> : null}
    </aside>
  );
}

function StructuredData({ page, images }: { page: PageContent; images: ContentImage[] }) {
  const pageUrl = absoluteUrl(page.path);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webPageId = `${pageUrl}#webpage`;
  const imageObjects = images.map((image) => ({
    "@type": "ImageObject",
    contentUrl: imageUrl(image),
    width: image.width,
    height: image.height,
    description: image.alt,
  }));
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Presidential Blunts",
      alternateName: ["Presidential Infused Blunts", "Presidential Hemp Blunts"],
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: imageUrl(), width: 512, height: 512 },
      sameAs: ["https://presidentialcannabis.net/"],
      parentOrganization: {
        "@type": "Organization",
        name: "Presidential Cannabis",
        url: "https://presidentialcannabis.net/",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE_URL}/`,
      name: "Presidential Blunts",
      publisher: { "@id": organizationId },
    },
    {
      "@type": page.kind === "about" ? ["WebPage", "AboutPage"] : page.faq?.length ? ["WebPage", "FAQPage"] : "WebPage",
      "@id": webPageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      relatedLink: ["https://presidentialcannabis.net/", "https://presidentialthc.net/"],
      ...(page.faq?.length
        ? {
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }
        : {}),
    },
    ...imageObjects,
  ];

  if (page.kind === "article") {
    graph.unshift({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: pageUrl,
      image: images.length ? images.map((image) => imageUrl(image)) : [imageUrl()],
      publisher: {
        "@id": organizationId,
      },
    });
  }

  if (!graph.length) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJsonLd({ "@context": "https://schema.org", "@graph": graph }) }} />;
}

export function ArticlePage({ page, images }: { page: PageContent; images: ContentImage[] }) {
  const showContents = page.kind === "pillar" || page.kind === "hub";
  const leadImage = images[0];
  const sectionImages = images.slice(1);
  const usedSectionImages = sectionImages.slice(0, page.sections.length);
  const remainingImages = sectionImages.slice(page.sections.length);
  return (
    <>
      <SiteHeader currentPath={page.path} />
      <main id="main-content">
        <article className={`publication publication--${page.kind}`}>
          <header className="article-hero">
            <Breadcrumbs page={page} />
            {page.kind === "pillar" ? <p className="article-hero__eyebrow">THE OFFICIAL</p> : null}
            <h1>{page.h1}</h1>
            <p className="article-hero__dek">{page.description}</p>
          </header>
          <div className="gold-seam" aria-hidden="true" />
          <div className={`article-lead${leadImage ? " article-lead--with-image" : ""}`}>
            <div className="article-lead__copy">{page.intro.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}</div>
            {leadImage ? <ContentFigure image={leadImage} priority /> : null}
          </div>
          {showContents ? <TableOfContents page={page} /> : null}
          <div className="article-body">
            {page.sections.map((section, index) => (
              <Fragment key={section.id}>
                <ArticleSection image={usedSectionImages[index]} reverse={index % 2 === 1} section={section} />
                {index === 0 ? <RelatedSiteLinks page={page} /> : null}
                {index === 0 ? <BrandCallToAction /> : null}
              </Fragment>
            ))}
            <FrequentlyAskedQuestions page={page} />
          </div>
          {remainingImages.length ? <aside className="image-ledger" aria-label="Packaging details">{remainingImages.map((image) => <ContentFigure image={image} key={image.src} />)}</aside> : null}
          <LinkDirectory page={page} />
        </article>
      </main>
      <StructuredData images={images} page={page} />
      <SiteFooter />
    </>
  );
}
