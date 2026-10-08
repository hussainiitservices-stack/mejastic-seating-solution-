"use client";

import Link from "next/link";
import { useState } from "react";
import { collection } from "@/lib/site";

export function CollectionStage() {
  const [active, setActive] = useState(0);
  const current = collection[active];

  return (
    <div className="stage">
      <div className="stage-copy">
        <p className="stage-lead">
          Majestic Seating Solutions manufactures dining chairs, lounge chairs, bar stools, puffy and benches in wood, stainless steel, fabric and rexine.
        </p>
        <Link className="line-link" href="/collection">
          Explore the collection
        </Link>
        <p className="stage-label">Browse by type</p>
        <ul className="stage-list">
          {collection.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`/collection#${item.id}`}
                className={index === active ? "is-active" : undefined}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span>{item.num}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="stage-visual" aria-hidden="true">
        {collection.map((item, index) => (
          <div
            key={item.id}
            className={`stage-panel${index === active ? " is-active" : ""}`}
          >
            <img src={item.image} alt="" />
          </div>
        ))}
        <p className="stage-caption">{current.name}</p>
      </div>
    </div>
  );
}
