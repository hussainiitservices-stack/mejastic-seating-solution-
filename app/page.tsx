import type { Metadata } from "next";
import Link from "next/link";
import { CollectionStage } from "@/components/CollectionStage";
import { Reveal } from "@/components/Reveal";
import { StorySwitcher } from "@/components/StorySwitcher";
import { directionsUrl, phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Majestic Seating Solutions — Furniture Manufacturer in Bhiwandi, Thane",
  },
};

const featured = [
  { href: "/collection#lounge-chairs", kicker: "02", name: "Lounge chairs", note: "Wood, steel, fabric, rexine", image: "/images/lounge.jpg", alt: "Low lounge chair in oak with deep fabric cushions" },
  { href: "/collection#bar-stools", kicker: "03", name: "Bar stools", note: "Bars and raised counters", image: "/images/stool.jpg", alt: "Bar stool with a steel frame and tan upholstered seat" },
  { href: "/collection#puffy", kicker: "04", name: "Puffy", note: "Size and cover on enquiry", image: "/images/puffy.jpg", alt: "Low upholstered puffy in warm camel fabric" },
];

export default function HomePage() {
  return (
    <main id="main" className="home-main">
      <section className="film" aria-label="Dining chairs in warm daylight">
        <img src="/images/hero-room.jpg" alt="Dining chairs in oak, taupe and charcoal around a pale table" />
      </section>

      <section className="manifesto wrap">
        <h1>Seating shaped for dining rooms, lounges and bars.</h1>
        <Link className="line-link" href="/collection">
          Explore the collection
        </Link>
      </section>

      <CollectionStage />
      <StorySwitcher />

      <section className="feature">
        <Reveal className="feature-media">
          <figure>
            <img src="/images/dining.jpg" alt="Oak dining chair with a woven fabric seat" />
            <figcaption className="hover-note">Wood or stainless steel, fabric or rexine</figcaption>
          </figure>
        </Reveal>
        <Reveal className="feature-copy">
          <p className="eyebrow">In the workshop</p>
          <h2>Dining chairs</h2>
          <p>
            Dining chairs are a core part of the workshop. Frames are made in wood or stainless steel, with seats and backs finished in fabric or rexine.
          </p>
          <Link className="line-link" href="/collection#dining-chairs">
            Explore further
          </Link>
        </Reveal>
      </section>

      <section className="featured-row">
        <Reveal className="featured-intro">
          <p className="eyebrow">Also made here</p>
          <h2>Lounge chairs, bar stools and puffy.</h2>
          <p>Benches are part of the same range. Quantity, finish and availability are confirmed with the workshop.</p>
          <Link className="line-link" href="/collection">
            View the collection
          </Link>
        </Reveal>
        <div className="featured-cards">
          {featured.map((item) => (
            <Link className="piece-card" href={item.href} key={item.href}>
              <img src={item.image} alt={item.alt} />
              <span>{item.kicker}</span>
              <strong>{item.name}</strong>
              <em>{item.note}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="showroom">
        <Reveal>
          <p className="eyebrow">Visit us</p>
          <h2>The workshop in Bhiwandi.</h2>
          <p>E6-203, 2nd floor, Bhumi World Industrial Park, near Mumbai-Nashik Highway, Thane 421302.</p>
        </Reveal>
        <Link className="showroom-card" href="/workshop">
          <img src="/images/workshop-room.jpg" alt="Furniture workshop with oak chair frames and fabric rolls" />
          <span>Bhiwandi</span>
          <strong>Monday–Saturday, 9am–7pm</strong>
          <em>Sunday is not listed · {phoneDisplay}</em>
        </Link>
        <div className="showroom-actions">
          <a className="line-link" href={directionsUrl} target="_blank" rel="noopener">
            Get directions
          </a>
          <a className="line-link" href={`tel:${phoneTel}`}>
            Call {phoneDisplay}
          </a>
        </div>
      </section>
    </main>
  );
}
