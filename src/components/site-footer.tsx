import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">Presidential Blunts</p>
          <p className="site-footer__statement">A focused reference to the format, the wrap, the comparisons, and the ritual.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Read the pillar</Link>
          <Link href="/wrap">The wrap</Link>
          <Link href="/compare">Compare formats</Link>
          <Link href="/ritual">The ritual</Link>
          <Link href="/strains">Strain library</Link>
          <Link href="/about">About the publication</Link>
        </nav>
        <p className="site-footer__legal">For adults of legal age. Follow local laws and purchase only through licensed retailers.</p>
      </div>
    </footer>
  );
}
