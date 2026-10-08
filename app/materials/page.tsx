import type { Metadata } from "next";
import Link from "next/link";
import { enquireHref, materials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Majestic Seating Solutions makes furniture in wood, stainless steel, fabrics and rexine at its Bhiwandi workshop.",
};

export default function MaterialsPage() {
  return (
    <main id="main">
      <div className="page-film">
        <img src="/images/wood.jpg" alt="" />
      </div>
      <section className="wrap page-hero">
        <p className="eyebrow">Materials</p>
        <h1>Four materials. One workshop.</h1>
        <p className="lede">
          The current range is made from wood, stainless steel, different types of fabrics and rexine. Species, colours and grades are confirmed when you enquire — they are not published as a sample library.
        </p>
      </section>

      <section className="wrap chapters">
        {materials.map((item) => (
          <article className="chapter" id={item.id} key={item.id}>
            <figure className="chapter-photo">
              <img src={item.image} alt={item.alt} />
            </figure>
            <div>
              <div className="chapter-index">{item.num}</div>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              <Link className="line-link" href={enquireHref(item.interest)}>
                Ask about {item.name.toLowerCase()}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
