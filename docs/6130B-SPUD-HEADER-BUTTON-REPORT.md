# 6130B-SPUD Header Button Report

1. Production site: `https://presidentialblunts.net`.
2. Production deployment: `https://presidential-blunts-b95vh8snm-paulie-pauliewoods-projects.vercel.app`.
3. Vercel result: green; Next.js 16.3.0 compiled, completed its integrated TypeScript phase, and generated all 28 outputs.
4. Implementation commit SHA: `e329099f6c9e2d62504700b6374d5bdc4f4250bf`.
5. Rollback command: `git revert e329099f6c9e2d62504700b6374d5bdc4f4250bf`.
6. Files touched by 6130B: 3, within the scope ceiling of 3.
7. File 1: `src/components/site-header.tsx`.
8. File 2: `src/app/globals.css`.
9. File 3: `docs/6130B-SPUD-HEADER-BUTTON-REPORT.md`.
10. Pages carrying the header button: 23 of 23.
11. Header buttons with `rel="nofollow"`: 23 of 23.
12. Header buttons with `target="_blank"`: 0 of 23.
13. Header buttons without any `target` attribute: 23 of 23.
14. Live same-tab interaction: passed; clicking the unique header link kept the same browser-tab ID and navigated to `https://presidentialmoonrocks.com/`.
15. Rendered button label at 1440px: `OFFICIAL PRESIDENTIAL`.
16. Rendered button label at 1280px: `OFFICIAL PRESIDENTIAL`.
17. Rendered button label at 1024px: `PRESIDENTIAL`.
18. Button visibility at 1023px: hidden, with a 0 × 0 rendered box.
19. Button hidden below 1024px: yes.
20. Existing nav items before: 5 — `Wrap`, `Compare`, `Ritual`, `Strains`, `About`.
21. Existing nav items after: 5 — `Wrap`, `Compare`, `Ritual`, `Strains`, `About`.
22. Nav items removed, renamed, reordered, or added: 0.
23. Pages with a nav-order violation after deployment: 0 of 23.
24. Sitewide CTA blocks before: 23.
25. Sitewide CTA blocks after: 23.
26. Sitewide CTA links with `nofollow` before: 23.
27. Sitewide CTA links with `nofollow` after: 23.
28. Sitewide CTA changes: 0.
29. In-body contextual links remaining followable before: 23.
30. In-body contextual links remaining followable after: 23.
31. Product-image links remaining followable before: 98.
32. Product-image links remaining followable after: 98.
33. Combined contextual and product-image follow count before: 121.
34. Combined contextual and product-image follow count after: 121.
35. Existing in-body/product links newly given `nofollow`: 0.
36. Total rendered article-region words before: 20,484.
37. Total rendered article-region words after: 20,484.
38. Rendered article-region word delta: 0.
39. Original editorial-copy metric from the 6129 report before: 17,185 words.
40. Original editorial-copy metric after: 17,185 words; neither content modules nor page copy changed.
41. Pages returning HTTP 200 from the live custom apex: 23 of 23.
42. Header overlap at 1024px: none.
43. Header wrapping at 1024px: none; nav-link top-position spread is 0px.
44. Horizontal overflow at 1024px: 0px.
45. 1024px button clearance: 46.53px between the lockup and button, and 46.53px between the button and nav.
46. Header overlap at 1280px: none.
47. Header wrapping at 1280px: none; nav-link top-position spread is 0px.
48. Horizontal overflow at 1280px: 0px.
49. Header overlap at 1440px: none.
50. Header wrapping at 1440px: none; nav-link top-position spread is 0px.
51. Horizontal overflow at 1440px: 0px.
52. Header overlap at 1920px: none.
53. Header wrapping at 1920px: none; nav-link top-position spread is 0px.
54. Horizontal overflow at 1920px: 0px.
55. Gap-centering offset at 1024px: 0px.
56. Gap-centering offset at 1280px: 0px.
57. Gap-centering offset at 1440px: 0px.
58. Gap-centering offset at 1920px: 0px.
59. Button treatment: transparent pill with a 1.5px champagne-gradient outline, Clash Display uppercase text, generous horizontal padding, and fully rounded ends.
60. Outbound glyph: inline 14 × 14 SVG arrow using `currentColor`, with no text glyph substitution.
61. Hover treatment: 13% champagne-gradient fill, cream text, `200ms ease`, no transform, no movement, no scale, no glow, and no box shadow.
62. 1280px layout: the header uses three normal-flow grid columns—389.05px lockup, a flexible middle track containing the 226.79px button, and a 374.44px nav. The button has 112.86px of open space on both sides, a 0px gap-centering offset, and sits vertically centered with the lockup and nav.
63. 1440px comparison to the accepted existing header: crest, two-line lockup, five nav labels, header height, black field, champagne lower rule, typography, and content below the header are unchanged; only the specified centered pill was added.
64. Above-the-fold copy additions: 1 responsive destination label (`OFFICIAL PRESIDENTIAL`, shortened to `PRESIDENTIAL` from 1024px through 1279px).
65. Above-the-fold copy removals or renames: 0.
66. Visual fidelity inspection: passed against the pre-change 1440px header capture and the confirmed live 1440px implementation capture.
67. Material visual mismatches remaining: 0.
68. Intentional deviations from 6130B: 0.
69. Standalone lint, typecheck, test suites, gate scripts, and QA-suite buildout added or run: 0.
70. Repository source scope: only the shared header component and global stylesheet changed.

71. Browser-normalized rendered header HTML follows; only the generated Next.js image optimization query was abbreviated with `…`:

```html
<header class="site-header"><a class="skip-link" href="#main-content">Skip to the article</a><div class="site-header__inner"><a class="brand-lockup" aria-label="Presidential Blunts home" href="/"><img alt="Presidential crest" width="512" height="512" class="brand-crest" src="/_next/image?url=%2Fimages%2Fpresidential-crest.webp&…"><span class="brand-lockup__text"><span class="brand-lockup__name">Presidential Blunts</span><span class="brand-lockup__tagline">The Official Presidential Site</span></span></a><a class="header-official-link" href="https://presidentialmoonrocks.com" rel="nofollow"><span class="header-official-link__label header-official-link__label--full">Official Presidential</span><span class="header-official-link__label header-official-link__label--short">Presidential</span><svg aria-hidden="true" viewBox="0 0 14 14"><path d="M5 3h6v6M11 3 3 11"></path></svg></a><nav class="primary-nav" aria-label="Primary navigation"><a href="/wrap">Wrap</a><a href="/compare">Compare</a><a href="/ritual">Ritual</a><a href="/strains">Strains</a><a href="/about">About</a></nav></div></header>
```
