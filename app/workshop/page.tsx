import type { Metadata } from "next";
import { HoursTable } from "@/components/HoursTable";
import { directionsUrl, mapEmbed, mapsUrl, phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Visit Majestic Seating Solutions at E6-203, Bhumi World Industrial Park, Bhiwandi. Open Monday to Saturday, 9am to 7pm.",
};

export default function WorkshopPage() {
  return (
    <main id="main">
      <div className="page-film">
        <img src="/images/workshop-room.jpg" alt="Furniture workshop with oak chair frames and fabric rolls" />
      </div>
      <section className="wrap page-hero">
        <p className="eyebrow">Workshop</p>
        <h1>Find the workshop in Bhiwandi.</h1>
        <p className="lede">
          The business is at E6-203, 2nd floor, Bhumi World Industrial Park, near the Mumbai–Nashik Highway. Planning for a specific date? Contact the team to find a convenient time.
        </p>
      </section>

      <section className="wrap split">
        <div>
          <p className="eyebrow">Address</p>
          <h2 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
            Majestic Seating Solutions
          </h2>
          <address style={{ fontStyle: "normal", color: "var(--muted)" }}>
            E6-203, 2nd floor,
            <br />
            Bhumi World Industrial Park,
            <br />
            near Mumbai-Nashik Highway,
            <br />
            Bhiwandi, Thane, Maharashtra 421302
          </address>
          <p style={{ marginTop: "1rem" }}>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <div className="hero-actions">
            <a className="btn" href={directionsUrl} target="_blank" rel="noopener">
              Get directions
            </a>
            <a className="text-link" href={mapsUrl} target="_blank" rel="noopener">
              Open in Google Maps
            </a>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <HoursTable />
          </div>
        </div>
        <iframe
          className="map-frame"
          title="Map showing Majestic Seating Solutions in Bhiwandi"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
