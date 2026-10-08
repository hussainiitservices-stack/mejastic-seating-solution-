"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, phoneDisplay, phoneTel } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    document.body.classList.toggle("is-home", isHome);
    return () => {
      document.body.classList.remove("nav-open");
      document.body.classList.remove("is-home");
    };
  }, [open, isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`chrome is-solid${stuck ? " is-stuck" : ""}`}>
      <div className="announce">
        <p>
          Workshop open Monday–Saturday, 9am–7pm · Bhiwandi ·{" "}
          <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
        </p>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="logo" href="/">
            <img src="/images/logo.jpg" alt="Majestic Seating Solutions" />
          </Link>
          <nav className={`nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="header-enquire line-link" href="/contact">
            Enquire
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="open-label">Menu</span>
            <span className="close-label">Close</span>
          </button>
        </div>
      </header>
    </div>
  );
}
