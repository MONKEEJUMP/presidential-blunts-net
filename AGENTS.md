# Presidential Blunts Project Law

## Project Identity

- Name: presidentialblunts.net
- Root path: `J:\presidential-blunts-net`
- Product mission: a 23-page reference publication dedicated to infused blunts.
- Current phase: initial build and launch.

## Non-Negotiables

- This J-drive folder is the only forward working home.
- Keep `J:\presidential-official` and `J:\presidential-thc-net` read-only.
- All content lives in code; no CMS, video, age gate, dropdown, parallax, reveal, or smooth scroll.
- Every registered route must render one H1, self-canonical metadata, index/follow robots, an OG image, and the correct schema.
- All content images are unique per page, local WebP files with explicit dimensions and unique descriptive alt text.
- Product images may link only to a verified matching Presidential product page.
- Log recoverable problems and decisions in `DEFECTS.md`, then continue.
- Never expose secrets or commit `.env` files.

## Working Loop

1. Read the active plan and `DEFECTS.md`.
2. Check Git status.
3. Implement the next item in the phase order.
4. Use `npm run build` as the production gate.
5. Inspect rendered desktop and mobile pages before deployment.
6. Repair failures, rebuild, and update the numeric report.
7. Update durable memory at closeout.

## Verification

- Production gate: `npm run build`
- Route truth: all 23 registered paths return 200.
- Packaging: every image is WebP, uniquely assigned, dimensioned, and represented in the image sitemap.
- SEO: metadata, schema, canonical, robots, sitemap, one-H1, and link audits.
- Security: no secrets, unsafe HTML interpolation, or unverified outbound targets.
- Report: `docs\6129-SPUD-BUILD-REPORT.md`

## Parallel Work

- Spud owns final integration.
- Helpers own bounded, non-overlapping files or read-only review lanes.
- Helpers must preserve concurrent edits and never alter reference repositories.

## Closeout

- State what changed, what was verified, remaining risks, deployment URL, commit SHA, rollback command, and the exact next move.
