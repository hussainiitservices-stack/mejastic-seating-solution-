"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stories = [
  {
    num: "01",
    title: "Made in Bhiwandi",
    text: "The workshop is on the second floor of Bhumi World Industrial Park, near the Mumbai–Nashik Highway in Thane.",
    href: "/workshop",
    link: "Visit the workshop",
    image: "/images/workshop-room.jpg",
  },
  {
    num: "02",
    title: "Materials in the hand",
    text: "Pieces are made in wood, stainless steel, different types of fabrics and rexine. Colour and grade are confirmed when you enquire.",
    href: "/materials",
    link: "See the materials",
    image: "/images/wood.jpg",
  },
  {
    num: "03",
    title: "Built for daily rooms",
    text: "Dining chairs, lounge chairs, bar stools, puffy and benches are made for homes and for rooms that stay busy.",
    href: "/collection",
    link: "Browse the pieces",
    image: "/images/lounge.jpg",
  },
  {
    num: "04",
    title: "A direct enquiry",
    text: "There is no fixed catalogue price. Call 98922 89987, Monday to Saturday, 9am–7pm, and say what you need.",
    href: "/contact",
    link: "Enquire",
    image: "/images/fabric.jpg",
  },
];

export function StorySwitcher() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % stories.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="story"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="story-top">
        <h2>How the workshop works</h2>
        <div className="story-body">
          <ul className="story-nums">
            {stories.map((story, index) => (
              <li key={story.num}>
                <button
                  type="button"
                  className={index === active ? "is-active" : undefined}
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                >
                  {story.num}
                </button>
              </li>
            ))}
          </ul>
          <div className="story-copy">
            {stories.map((story, index) => (
              <article key={story.num} className={index === active ? "is-active" : undefined}>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <Link className="line-link" href={story.href}>
                  {story.link}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="story-gallery" aria-hidden="true">
        {stories.map((story, index) => (
          <div key={story.num} className={`story-frame${index === active ? " is-active" : ""}`}>
            <img src={story.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
