import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found" id="main-content">
        <p className="eyebrow">Reference page</p>
        <h1>That page is not in the archive.</h1>
        <p>The Presidential blunt reference starts at the pillar and opens into four focused libraries.</p>
        <Link className="button-link" href="/">Return to Presidential Blunts</Link>
      </main>
      <SiteFooter />
    </>
  );
}
