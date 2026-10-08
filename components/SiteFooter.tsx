import Link from "next/link";
import { addressLines, collection, phoneDisplay, phoneTel } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="" />
          <p>
            Majestic Seating Solutions manufactures dining chairs, lounge chairs, bar stools, puffy and benches in wood, stainless steel, fabric and rexine.
          </p>
        </div>
        <div>
          <h2>Collection</h2>
          <ul>
            {collection.map((item) => (
              <li key={item.id}>
                <Link href={`/collection#${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Workshop</h2>
          <address>
            {addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <p>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/materials">Materials</Link></li>
            <li><Link href="/workshop">Hours and map</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {year} Majestic Seating Solutions.</p>
        <p>Monday–Saturday, 9am–7pm</p>
      </div>
    </footer>
  );
}
