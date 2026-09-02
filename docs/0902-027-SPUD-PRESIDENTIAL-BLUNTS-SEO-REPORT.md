# 0902-027-SPUD Presidential Blunts SEO Report

## Project and deployment

| Field | Result |
| --- | --- |
| Repo path | `J:\presidential-blunts-net` |
| Git root | `J:\presidential-blunts-net` (the workspace root is the repo; no nested inner repo) |
| Vercel team | `paulie-pauliewoods-projects` |
| Vercel project | `presidential-blunts-net` |
| Production URL | `https://presidentialblunts.net/` |
| Production deployment | `https://presidential-blunts-6n9wdhw6m-paulie-pauliewoods-projects.vercel.app` |
| Vercel inspection | `https://vercel.com/paulie-pauliewoods-projects/presidential-blunts-net/BRttZ4GETdErZtyZZB1McZa6YQL7` |
| Implementation commit | `f5aba7f7eb03212a4bffe759d2f98a6d990624e2` |
| Rollback command | `git revert f5aba7f7eb03212a4bffe759d2f98a6d990624e2` |
| Deploy status | Ready; aliased to `https://presidentialblunts.net` |
| Anonymous public-access result | HTTP 200 on the custom apex with no cookie, account session, or protection-bypass token |
| Required publication routes | 23 of 23 returned HTTP 200 on the custom apex |

## Files changed

| # | File | Change |
| ---: | --- | --- |
| 1 | `src/content/pillar.ts` | Exact homepage title, description, H1-preserving lead, required “What are Presidential Blunts?” section, company cross-links, and five-item FAQ |
| 2 | `src/content/about.ts` | “About Presidential Blunts” H1, title, and specific description |
| 3 | `src/content/types.ts` | Typed linked-paragraph and FAQ content contracts |
| 4 | `src/components/article-page.tsx` | Server-rendered cross-links, visible FAQ, and WebSite/WebPage/Organization/FAQPage JSON-LD |
| 5 | `src/app/[[...slug]]/page.tsx` | Preserved the root-layout `metadataBase` instead of nulling it on the homepage |
| 6 | `src/app/sitemap.ts` | Explicit homepage-first ordering |
| 7 | `src/app/robots.ts` | Explicit Googlebot and Googlebot-Image allow rules |
| 8 | `docs/0902-027-SPUD-PRESIDENTIAL-BLUNTS-SEO-REPORT.md` | This live verification report |
| Scope result | 8 files | Within the 12-file ceiling |

## Live homepage HTML

| Element | Live value |
| --- | --- |
| HTTP status | `200` |
| Title | `Presidential Blunts \| Official Infused Blunt Guide` |
| Meta description | `Presidential Blunts are Presidential's tobacco-free hemp-wrap infused blunts — flower, concentrate, and kief in one format — explained here, sold only at licensed retailers.` |
| H1 | `Presidential Blunts` |
| Lead | `Presidential Blunts are the official tobacco-free infused blunt line from Presidential Cannabis: flower carried through with concentrate, finished with kief, wrapped in hemp. This site is the official reference for how Presidential Blunts are built, how they differ from pre-rolls and minis, how strain and flavor lines work, and how to recognize authentic product at licensed retail.` |
| Required H2 | `What are Presidential Blunts?` |
| Robots meta | `index, follow` |
| Canonical | `https://presidentialblunts.net` (Next.js normalizes the root form; it is equivalent to the winning `/` URL) |
| Open Graph title | `Presidential Blunts \| Official Infused Blunt Guide` |
| Twitter card | `summary_large_image` |
| Rendering | Title, description, H1, lead, H2, FAQ, anchors, and JSON-LD are present in the initial server-rendered HTML |

## About indexability and publication registry

| Check | Result |
| --- | --- |
| About page existed before this task | Yes |
| Previous About H1 | `About This Site` |
| Live About title | `About Presidential Blunts \| Official Reference` |
| Live About H1 | `About Presidential Blunts` |
| Live About status | `200` |
| Live About robots | `index, follow` |
| Live About canonical | `https://presidentialblunts.net/about` |
| About present in sitemap | Yes |
| Publication registry exists | Yes, `src/content/index.ts` exports the registered 23-page list |
| Fail-closed mechanism | `dynamicParams = false` plus registry-derived `generateStaticParams()`; unregistered routes do not become publication pages |
| Unknown-route live proof | `/0902-027-unregistered-route-check` returned `404` with `noindex` |
| Prompt correction | The registry does not carry a separate approved/indexable flag. Registered pages receive index/follow metadata; unregistered paths fail closed as noindex 404 responses. `/about` was already registered and in the sitemap. |

## FAQ visible/schema parity

| # | Visible question | Live schema answer | Exact visible match |
| ---: | --- | --- | --- |
| 1 | What are Presidential Blunts? | Presidential Blunts are tobacco-free hemp-wrap infused blunts from Presidential Cannabis. They combine flower, concentrate, and kief in full-size and mini formats. | Yes |
| 2 | Are Presidential Blunts tobacco-free? | Yes. Presidential Blunts use hemp wraps and are one hundred percent tobacco-free, giving the infused flower, concentrate, kief, and selected flavor profile a neutral outer wrap. | Yes |
| 3 | How do Presidential Blunts differ from a pre-roll? | A Presidential Blunt uses a thicker hemp wrap, carries more material, retains heat longer, and follows a slower burn. A pre-roll uses thin rolling paper and offers a quicker format. | Yes |
| 4 | Where can I buy Presidential Blunts? | Presidential Blunts are available through licensed retailers in active Presidential markets. The official retailer locator provides the current path to nearby availability. | Yes |
| 5 | Does this site sell Presidential Blunts? | Presidentialblunts.net provides the official product-format reference. Licensed retailers provide current Presidential Blunts availability through the brand's wholesale retail network. | Yes |
| Total | 5 visible questions | 5 schema questions | 5 of 5 exact matches |

## Live cross-links

| Target | Live anchor | Status | Rel treatment |
| --- | --- | ---: | --- |
| `https://presidentialcannabis.net/` | `the official Presidential Cannabis brand guide` | 200 | Dofollow; no `nofollow` attribute |
| `https://presidentialthc.net/` | `the Presidential infusion chemistry reference` | 200 | Dofollow; no `nofollow` attribute |

## Robots and sitemap

| Check | Result |
| --- | --- |
| Live sitemap URL count | 23 |
| First sitemap URL | `https://presidentialblunts.net/` |
| About in sitemap | Yes |
| Standard sitemap declared in robots | Yes |
| Image sitemap declared in robots | Yes |
| Googlebot allowed | Yes |
| Googlebot-Image allowed | Yes |
| Existing AI crawler allow rules retained | Yes |

## JSON-LD verification

| Check | Result |
| --- | --- |
| Live JSON-LD script blocks | 1 |
| JSON parse result | Passed |
| Graph types | `Organization`, `WebSite`, `WebPage`, `FAQPage`, `ImageObject` |
| Organization name | `Presidential Blunts` |
| Organization URL | `https://presidentialblunts.net` |
| `sameAs` whitelist | `https://presidentialcannabis.net/` only |
| Related parent entity | `Presidential Cannabis` → `https://presidentialcannabis.net/` |
| WebPage related links | `https://presidentialcannabis.net/`, `https://presidentialthc.net/` |
| Invented social profiles | 0 |
| FAQ schema-visible-content match | 5 of 5 questions and answers |

<table>
  <thead><tr><th>Live JSON-LD block as fetched</th></tr></thead>
  <tbody><tr><td><pre><code>{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://presidentialblunts.net/#organization","name":"Presidential Blunts","alternateName":["Presidential Infused Blunts","Presidential Hemp Blunts"],"url":"https://presidentialblunts.net","logo":{"@type":"ImageObject","url":"https://presidentialblunts.net/images/presidential-crest.webp","width":512,"height":512},"sameAs":["https://presidentialcannabis.net/"],"parentOrganization":{"@type":"Organization","name":"Presidential Cannabis","url":"https://presidentialcannabis.net/"}},{"@type":"WebSite","@id":"https://presidentialblunts.net/#website","url":"https://presidentialblunts.net/","name":"Presidential Blunts","publisher":{"@id":"https://presidentialblunts.net/#organization"}},{"@type":["WebPage","FAQPage"],"@id":"https://presidentialblunts.net/#webpage","url":"https://presidentialblunts.net/","name":"Presidential Blunts | Official Infused Blunt Guide","description":"Presidential Blunts are Presidential's tobacco-free hemp-wrap infused blunts — flower, concentrate, and kief in one format — explained here, sold only at licensed retailers.","isPartOf":{"@id":"https://presidentialblunts.net/#website"},"about":{"@id":"https://presidentialblunts.net/#organization"},"relatedLink":["https://presidentialcannabis.net/","https://presidentialthc.net/"],"mainEntity":[{"@type":"Question","name":"What are Presidential Blunts?","acceptedAnswer":{"@type":"Answer","text":"Presidential Blunts are tobacco-free hemp-wrap infused blunts from Presidential Cannabis. They combine flower, concentrate, and kief in full-size and mini formats."}},{"@type":"Question","name":"Are Presidential Blunts tobacco-free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Presidential Blunts use hemp wraps and are one hundred percent tobacco-free, giving the infused flower, concentrate, kief, and selected flavor profile a neutral outer wrap."}},{"@type":"Question","name":"How do Presidential Blunts differ from a pre-roll?","acceptedAnswer":{"@type":"Answer","text":"A Presidential Blunt uses a thicker hemp wrap, carries more material, retains heat longer, and follows a slower burn. A pre-roll uses thin rolling paper and offers a quicker format."}},{"@type":"Question","name":"Where can I buy Presidential Blunts?","acceptedAnswer":{"@type":"Answer","text":"Presidential Blunts are available through licensed retailers in active Presidential markets. The official retailer locator provides the current path to nearby availability."}},{"@type":"Question","name":"Does this site sell Presidential Blunts?","acceptedAnswer":{"@type":"Answer","text":"Presidentialblunts.net provides the official product-format reference. Licensed retailers provide current Presidential Blunts availability through the brand's wholesale retail network."}}]},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-apricotti-blunt-packaging.webp","width":1200,"height":1200,"description":"Presidential Apricotti blunt packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-cap-junky-mini-blunt-packaging.webp","width":1200,"height":1200,"description":"Presidential Cap Junky mini blunt packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-cherry-gelato-moon-rocks-packaging.webp","width":1200,"height":1200,"description":"Presidential Cherry Gelato moon rocks packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-cherry-gelato-single-mini-blunt-packaging.webp","width":1080,"height":1350,"description":"Presidential Cherry Gelato single mini blunt packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-blue-dream-infused-pre-roll-packaging.webp","width":1080,"height":1350,"description":"Presidential Blue Dream infused pre-roll packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-blue-dream-blunt-packaging.webp","width":1080,"height":1350,"description":"Presidential Blue Dream blunt packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-cherry-gelato-mini-blunt-packaging.webp","width":1080,"height":1080,"description":"Presidential Cherry Gelato mini blunt packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-daniel-larusso-moon-rocks-packaging.webp","width":1080,"height":1080,"description":"Presidential Daniel LaRusso moon rocks packaging with illustrated label artwork"},{"@type":"ImageObject","contentUrl":"https://presidentialblunts.net/images/presidential-gorilla-goo-single-mini-blunt-packaging.webp","width":1080,"height":1350,"description":"Presidential Gorilla Goo single mini blunt packaging with illustrated label artwork"}]}</code></pre></td></tr>
</table>

## QA gates, prompt corrections, and skipped work

| Topic | Result |
| --- | --- |
| Outbound-link/owner-decision QA gate | No such gate exists in this repo; no gate fired and no allowlist change was needed |
| About page correction | The prompt allowed for creation, but `/about` already existed; its H1 was corrected from `About This Site` |
| Registry correction | The prompt described an explicit approved/indexable registry flag; this repo instead fails closed through static params plus `dynamicParams = false` |
| Sitemap estimate | The prompt said approximately 23 URLs; the live sitemap contains exactly 23 |
| Ranking guarantee | Not made; technical/content signals were improved, while crawling, indexing, and rankings remain search-engine decisions |
| Dependencies | No new dependencies |
| CMS/data writes | None |
| Retailer table or locator API | Untouched |
| `presidentialmoonrocks.com` repo | Untouched |
| Medical or ship-to-consumer copy | None added |
| Doorway pages | None added |
| Client-side SEO dependency | None; important copy, links, metadata, and schema are server-rendered/static HTML |
| Test buildout, smoke suites, review loops | Skipped as instructed |
| Build | One local `npm run build`; passed compilation, integrated TypeScript, and all 28 generated outputs |
| Search Console submission/URL Inspection | Skipped; not requested and no Search Console action was authorized |

## Current primary-source checks

| Date checked | Authority | Applied rule | Source |
| --- | --- | --- | --- |
| 2026-09-02 | Google Search Central | Descriptive concise title; title, H1, prominent copy, anchors, and WebSite data can inform title links | `https://developers.google.com/search/docs/appearance/title-link` |
| 2026-09-02 | Google Search Central | Specific, human-readable meta descriptions can support search snippets | `https://developers.google.com/search/docs/appearance/snippet` |
| 2026-09-02 | Google Search Central | Structured data must represent visible content and remain crawlable/indexable | `https://developers.google.com/search/docs/appearance/structured-data/sd-policies` |
| 2026-09-02 | Google Search Central | Homepage WebSite structured data is the preferred site-name signal | `https://developers.google.com/search/docs/appearance/site-names` |
| 2026-09-02 | Next.js | `metadataBase`, `generateMetadata`, robots metadata, OG, and Twitter fields render through the App Router metadata API | `https://nextjs.org/docs/app/api-reference/functions/generate-metadata` |
| 2026-09-02 | Next.js | `app/sitemap.ts` and `app/robots.ts` generate the production sitemap and robots files | `https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap`, `https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots` |
