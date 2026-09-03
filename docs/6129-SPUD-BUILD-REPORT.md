# 6129-SPUD Presidential Blunts Build Report

1. Project path: `J:\presidential-blunts-net`.
2. Production project: `paulie-pauliewoods-projects/presidential-blunts-net`.
3. Stable deployed URL: `https://presidential-blunts-net.vercel.app`.
4. Immutable deployment URL: `https://presidential-blunts-i0o1dms4k-paulie-pauliewoods-projects.vercel.app`.
5. Custom apex: `https://presidentialblunts.net` is attached to Vercel and pending GoDaddy DNS.
6. Custom `www`: `https://www.presidentialblunts.net` is attached to Vercel and pending GoDaddy DNS; the application contains the required permanent `www` to apex redirect.
7. DNS action required: `A presidentialblunts.net 76.76.21.21`; Vercel currently reports the same A target for `www.presidentialblunts.net`.
8. Private GitHub repository: `https://github.com/MONKEEJUMP/presidential-blunts-net`.
9. Deployed code commit SHA: `aeba641561ccf9843d3990d3582308b66d1600f0`.
10. Rollback command: `git revert aeba641561ccf9843d3990d3582308b66d1600f0`.
11. Build gate: local `npm run build` passed on Next.js 16.3.0 and Node 24.13.0.
12. Independent gate: the Vercel production build passed compilation, its integrated TypeScript phase, static data collection, and all 28 generated outputs.
13. Pages built: 23.
14. Pages live returning 200 on the stable Vercel alias: 23 of 23.
15. Pages live returning 200 on the custom apex: 0 of 23 until DNS and SSL propagate.
16. Registered composition: 1 pillar, 4 hubs, 17 articles, and 1 About page.
17. Total rendered editorial words: 17,549.
18. `/`: 2,486 words.
19. `/wrap`: 540 words.
20. `/compare`: 557 words.
21. `/ritual`: 517 words.
22. `/strains`: 521 words.
23. `/wrap/what-a-wrap-does`: 751 words.
24. `/wrap/hemp-vs-tobacco`: 752 words.
25. `/wrap/tobacco-free`: 738 words.
26. `/wrap/burn-rate`: 724 words.
27. `/wrap/wrap-and-flavour`: 727 words.
28. `/wrap/how-wraps-are-made`: 732 words.
29. `/compare/blunt-vs-joint`: 724 words.
30. `/compare/blunt-vs-pre-roll`: 740 words.
31. `/compare/blunt-vs-spliff`: 715 words.
32. `/compare/mini-vs-full`: 729 words.
33. `/compare/infused-vs-non-infused`: 725 words.
34. `/compare/hemp-wrap-vs-paper`: 721 words.
35. `/ritual/how-to-light-one`: 757 words.
36. `/ritual/relighting`: 736 words.
37. `/ritual/storage`: 743 words.
38. `/ritual/session-length`: 729 words.
39. `/ritual/sharing`: 748 words.
40. `/about`: 437 words.
41. Content images placed: 100 across the 23 pages; the shared crest is the 101st public WebP.
42. Pages with zero content images: 0.
43. Images appearing on more than one page: 0.
44. Images missing explicit width or height: 0.
45. Content images that are not WebP: 0.
46. Duplicate alt strings sitewide: 0.
47. Alt strings outside the 5–15 word range: 0.
48. Packaging images linked to a verified product page: 98.
49. Packaging images left unlinked: 2 — the Head Cheese blunt and infused pre-roll graphics have no matching product URL in the live Presidential sitemap, so no destination was guessed.
50. Unique Presidential outbound targets checked: 40; returning 200 after repair: 40.
51. Product image links carrying `nofollow`: 0.
52. Product image links carrying `target="_blank"`: 0.
53. Nested `<a>` elements in rendered HTML: 0.
54. Frames whose inset differs on any side: 0; every figure uses the same shared frame component and 16px CSS inset.
55. `preserveAspectRatio` frame occurrences: 1, with the required value `none`; frame rectangles are drawn with non-scaling vector paths.
56. Dark backing panels, fills, shadows, or glows behind packaging images: 0.
57. `scroll-behavior: smooth` occurrences: 0.
58. Header computed position: `sticky`; computed top: `0px`; computed z-index: `100`.
59. Hub in-page anchor links, excluding the skip link: 0.
60. Articles linking up to the pillar with the exact visible label `Presidential Blunts`: 17 of 17.
61. Representative rendered up-link: `<a href="/"><span>Presidential Blunts</span></a>`.
62. Sideways links per article: 3 on every article; 51 total.
63. Cross-silo article links: 0.
64. Contextual follow links to `presidentialmoonrocks.com`: 23, one per page.
65. Sitewide CTA blocks: 23, one per page; every CTA uses `rel="nofollow"`.
66. Pages missing an OG image: 0.
67. Pages with more than one H1: 0.
68. Pages missing a self-canonical: 0.
69. Articles missing Article schema: 0 of 17.
70. Pillar Organization schemas: 1, with a deliberately empty `sameAs` array and source comment because no verified profiles were supplied.
71. Sitemap URL count: 23.
72. Image sitemap URL count: 23 pages containing 100 `<image:image>` entries.
73. Robots rules: Allow all plus explicit Allow rules for GPTBot, ClaudeBot, PerplexityBot, and Google-Extended; both sitemap URLs are advertised.
74. `click here` occurrences: 0.
75. Hero eyebrow computed font size at the 1440px desktop test: 40px (2.5rem).
76. Hero eyebrow computed font size at the 375px mobile test: 24px (1.5rem).
77. Mobile horizontal overflow at 375px: 0px.
78. Header subline below 480px: computed `display: none`.
79. Largest modeled complete page transfer: 1.541 MB for `/`, including 187,008 HTML bytes, 503,163 bytes for all nine content images at a 640px responsive request, and 925,366 shared static bytes.
80. Pages at or above the 2 MB performance cap: 0.
81. Defect entries: 5 total — 3 resolved, 1 intentional unlinked-asset decision, and 1 DNS action pending.
82. Browser verification method: connected Chrome session with Playwright DOM reads, computed-style evaluation, responsive viewport overrides, direct navigation checks, and a real primary-nav click from `/` to `/wrap`.
83. Desktop viewport checked: 1440 × 1000; mobile viewport checked: 375 × 812.
84. Desktop screenshot: `J:\presidential-blunts-net\docs\qa\presidential-blunts-home-desktop.png`.
85. Mobile screenshot: `J:\presidential-blunts-net\docs\qa\presidential-blunts-home-mobile.png`.
86. Square frame detail: `J:\presidential-blunts-net\docs\qa\presidential-blunts-square-frame-desktop.png`.
87. Visual source of truth: the supplied 6129 design rulings plus the read-only architecture/design system at `J:\presidential-thc-net`; no generated concept was needed because the build explicitly reuses the existing Presidential system.
88. `view_image` inspection completed on the desktop, mobile, and square-frame renders.
89. Five comparison points inspected: two-line header lockup, black/teal/champagne palette, Clash Display/Source Serif hierarchy, direct-link navigation behavior, and equal-inset packaging frames.
90. Above-the-fold copy diff: header name/subline, `THE OFFICIAL`, exact H1 `Presidential Blunts`, and the supplied publication purpose are present; no unapproved badge, pill, scroll arrow, video, age gate, dropdown, or animation was added.
91. Core interaction path: clicking the unique primary-nav `Wrap` link loaded `/wrap` and rendered the single H1 `The Wrap`.
92. Remaining design deviations: 0.
93. Remaining launch deviation: custom-domain DNS/SSL only; the Vercel alias is fully live.
94. Square frame at desktop: the 486.87 × 486.87px rendered Apricotti package has computed frame insets of top 16px, right 16px, bottom 16px, and left 16px.
95. Tall portrait frame at desktop: the 482.81 × 603.51px rendered Cherry Gelato single-mini package has computed frame insets of top 16px, right 16px, bottom 16px, and left 16px; the SVG rule stretches to the portrait box while the centered ornament keeps its own intrinsic ratio.

## 96. Full contents of DEFECTS.md

```markdown
# Presidential Blunts Defect Log

## Phase 1 — Apex domain not present in Vercel scope

- Problem: `presidentialblunts.net` was not registered in the active Vercel team when infrastructure setup began.
- Action: Created and linked the separate `presidential-blunts-net` Vercel project, deployed the production build, and attached both the apex and `www` domains.
- Status: DNS remains pending at GoDaddy. Vercel requires `A presidentialblunts.net 76.76.21.21` and currently reports the same A target for `www.presidentialblunts.net`; the stable Vercel alias serves all 23 routes in the meantime.

## Phase 9 — Two Head Cheese graphics have no verified product destination

- Problem: The source library contains Head Cheese blunt and infused pre-roll packaging, but no matching Head Cheese URL appears in the live Presidential sitemap.
- Action: Kept both unique graphics in the publication and left their image frames unlinked rather than guessing a destination.
- Status: Intentional and verified.

## Phase 11 — Required pillar anchors carried extra descriptive text

- Problem: Six comparison articles initially rendered descriptive copy inside the required `Presidential Blunts` up-link.
- Action: Removed the descriptions, rebuilt, and verified all 17 article up-links render the exact required label once.
- Status: Resolved.

## Phase 12 — XJ-13 product slug had changed

- Problem: The inherited `/moon-rocks/x-13` target returned 404.
- Action: Verified `/moon-rocks/xj-13` in the live Presidential sitemap, updated all three image links and the generator, then confirmed the corrected target returns 200.
- Status: Resolved.

## Phase 12 — Strains hub rendered below its coverage floor

- Problem: Browser-extracted text measured 442 words against the 450-word floor.
- Action: Added a concise library-expansion context paragraph, rebuilt, and remeasured the page at 469 words.
- Status: Resolved.
```
