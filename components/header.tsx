"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NAV_ITEMS, NAV_LEFT_ITEMS, NAV_RIGHT_ITEMS } from "@/lib/nav";

function BurgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="site-header__burger"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isNavItemActive(id: string, pathname: string) {
  if (id === "villages") {
    return pathname === "/villages" || pathname.startsWith("/villages/");
  }
  const item = NAV_ITEMS.find((nav) => nav.id === id);
  if (!item) return false;
  return pathname === item.href;
}

function NavLink({
  id,
  href,
  label,
  pathname,
}: {
  id: string;
  href: string;
  label: string;
  pathname: string;
}) {
  return (
    <a
      href={href}
      className={isNavItemActive(id, pathname) ? "is-active" : undefined}
    >
      {label}
    </a>
  );
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("site-nav-open", navOpen);
    return () => document.body.classList.remove("site-nav-open");
  }, [navOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const headerClass = `site-header${!scrolled ? " site-header--transparent" : ""}`;

  return (
    <>
      <header className={headerClass}>
        <div className="site-header__inner">
          <div className="site-header__left">
            <button
              type="button"
              className="site-header__icon-btn site-header__menu"
              aria-label="Open menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              <BurgerIcon />
            </button>
            <nav
              className="site-header__nav site-header__nav--left"
              aria-label="Main navigation"
            >
              {NAV_LEFT_ITEMS.map((item) => (
                <NavLink key={item.id} {...item} pathname={pathname} />
              ))}
            </nav>
          </div>

          <Link href="/" className="site-header__logo" aria-label="Visit Cotswolds">
            <Logo className="site-header__logo-svg" />
          </Link>

          <div className="site-header__right">
            <nav
              className="site-header__nav site-header__nav--right"
              aria-label="Main navigation"
            >
              {NAV_RIGHT_ITEMS.map((item) => (
                <NavLink key={item.id} {...item} pathname={pathname} />
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div
        className={`site-nav-overlay${navOpen ? " is-open" : ""}`}
        id="site-nav-overlay"
        aria-hidden={!navOpen}
      >
        <div
          className="site-nav-backdrop"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
        <nav
          className="site-nav-panel"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="site-nav-header">
            <span className="site-nav-title">MENU</span>
            <button
              type="button"
              className="site-nav-close"
              aria-label="Close menu"
              onClick={() => setNavOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="site-nav-links">
            <li>
              <a
                href="/"
                className={pathname === "/" ? "is-active" : undefined}
                onClick={() => setNavOpen(false)}
              >
                Home
              </a>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={isNavItemActive(item.id, pathname) ? "is-active" : undefined}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
