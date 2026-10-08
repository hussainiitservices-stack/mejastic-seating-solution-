import type { Metadata } from "next";
import Link from "next/link";
import { phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Majestic Seating Solutions is a furniture manufacturer in Bhumi World Industrial Park, Bhiwandi, Thane.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <div className="page-film">
        <img src="/images/workshop-room.jpg" alt="" />
      </div>
      <section className="wrap page-hero">
        <p className="eyebrow">About</p>
        <h1>A seating workshop in Bhiwandi.</h1>
        <p className="lede">
          Majestic Seating Solutions deals in the manufacturing of high-quality furniture, especially dining chairs, lounge chairs and bar stools made from wood, stainless steel, different types of fabrics, rexine and more.
        </p>
      </section>

      <section className="wrap split">
        <div className="prose">
          <p>
            The workshop is on the second floor of Bhumi World Industrial Park, near the Mumbai–Nashik Highway. People looking for a furniture manufacturer in Bhiwandi and Thane can call, send an enquiry, or visit during the listed hours.
          </p>
          <p>
            Puffy and benches are made here as well. Pricing, availability and finish are handled by enquiry, so the useful first step is to say what you are looking for.
          </p>
          <div className="facts">
            <div className="fact">
              <span>Google reviews</span>
              <strong>5.0 / 5 · 3+ reviews</strong>
            </div>
            <div className="fact">
              <span>Phone</span>
              <strong>
                <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
              </strong>
            </div>
            <div className="fact">
              <span>Hours</span>
              <strong>Monday–Saturday, 9am–7pm</strong>
            </div>
            <div className="fact">
              <span>Sunday</span>
              <strong>Not listed</strong>
            </div>
          </div>
        </div>
        <figure className="brand-lockup">
          <img src="/images/lounge.jpg" alt="Low lounge chair in oak with deep fabric cushions" />
        </figure>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Know when to reach us.</h2>
          <p>You can contact the workshop anytime during the day with your query. Planning a visit? Ask for a convenient time.</p>
          <Link className="btn" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
