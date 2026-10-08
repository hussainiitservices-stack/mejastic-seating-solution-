import type { Metadata } from "next";
import Link from "next/link";
import { collection, enquireHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Dining chairs, lounge chairs, bar stools, puffy and benches manufactured by Majestic Seating Solutions in Bhiwandi, Thane.",
};

export default function CollectionPage() {
  return (
    <main id="main">
      <div className="page-film">
        <img src="/images/hero-room.jpg" alt="" />
      </div>
      <section className="wrap page-hero">
        <p className="eyebrow">Collection</p>
        <h1>What the workshop makes.</h1>
        <p className="lede">
          These are the pieces Majestic Seating Solutions manufactures. There is no fixed online catalogue or price list — tell the workshop the piece, the material and how many you need.
        </p>
      </section>

      <section className="wrap chapters">
        {collection.map((item) => (
          <article className="chapter" id={item.id} key={item.id}>
            <figure className="chapter-photo">
              <img src={item.image} alt={item.alt} />
            </figure>
            <div>
              <div className="chapter-index">{item.num}</div>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              <Link className="line-link" href={enquireHref(item.interest)}>
                Enquire about {item.name.toLowerCase()}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Ask about a specific piece.</h2>
          <p>Include the product in your message so the workshop can respond to that request.</p>
          <Link className="btn" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
