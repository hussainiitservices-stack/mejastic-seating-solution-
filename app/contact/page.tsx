import type { Metadata } from "next";
import { Suspense } from "react";
import { EnquireForm } from "@/components/EnquireForm";
import { HoursTable } from "@/components/HoursTable";
import { directionsUrl, phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Majestic Seating Solutions in Bhiwandi on 98922 89987. Ask about dining chairs, lounge chairs, bar stools, puffy and benches.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <div className="page-film">
        <img src="/images/bench.jpg" alt="" />
      </div>
      <section className="wrap page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you are looking for.</h1>
        <p className="lede">
          Include the piece, your questions, and any dates or preferences that matter. You can also call {phoneDisplay}. Messages from this form open in WhatsApp to that number.
        </p>
      </section>

      <section className="wrap contact-grid">
        <div>
          <p className="eyebrow">Workshop</p>
          <address style={{ fontStyle: "normal" }}>
            Majestic Seating Solutions
            <br />
            E6-203, 2nd floor, Bhumi World Industrial Park,
            <br />
            near Mumbai-Nashik Highway,
            <br />
            Bhiwandi, Thane, Maharashtra 421302
          </address>
          <p style={{ marginTop: "1rem" }}>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <p style={{ marginTop: "0.4rem" }}>
            <a href={directionsUrl} target="_blank" rel="noopener">
              Get directions
            </a>
          </p>
          <div style={{ marginTop: "1.6rem" }}>
            <HoursTable />
          </div>
          <p className="lede" style={{ marginTop: "1rem" }}>
            You can contact us anytime during the day with your query.
          </p>
        </div>
        <Suspense fallback={<p>Loading the enquiry form…</p>}>
          <EnquireForm />
        </Suspense>
      </section>

      <section className="wrap faq">
        <p className="eyebrow">A few helpful details</p>
        <h2 className="serif" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
          Before you write.
        </h2>
        <details open>
          <summary>What should I include in my enquiry?</summary>
          <p>Let the workshop know what you are interested in, any questions you have, and any dates or preferences that matter.</p>
        </details>
        <details>
          <summary>Can I ask about a specific product?</summary>
          <p>Yes. Choose dining chairs, lounge chairs, bar stools, puffy or benches, or describe the piece in your message.</p>
        </details>
        <details>
          <summary>Where is the business?</summary>
          <p>E6-203, 2nd floor, Bhumi World Industrial Park, near Mumbai-Nashik Highway, Bhiwandi, Thane, Maharashtra 421302.</p>
        </details>
        <details>
          <summary>What are the opening hours?</summary>
          <p>Monday to Saturday, 9am–7pm. Sunday is not listed. Planning for a specific date? Contact the workshop to find a convenient time.</p>
        </details>
      </section>
    </main>
  );
}
