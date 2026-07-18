"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  Home,
  Menu,
  NotebookPen,
  Search,
  ShieldCheck,
  Sprout,
  Wrench,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Notice } from "./ui";

const links = [
  [/^\/$/, "Start", "/"],
  [/^\/anbauphasen/, "Anbauphasen", "/anbauphasen"],
  [/^\/grundlagen/, "Grundlagen", "/grundlagen"],
  [/^\/sortenkunde/, "Sortenkunde", "/sortenkunde"],
  [/^\/probleme/, "Probleme erkennen", "/probleme"],
  [/^\/werkzeuge/, "Werkzeuge", "/werkzeuge"],
  [/^\/wissen/, "Wissen", "/wissen"],
  [/^\/mein-grow/, "Mein Grow", "/mein-grow"],
  [/^\/faq/, "FAQ", "/faq"],
] as const;

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href="#hauptinhalt"
        className="fixed left-3 top-2 z-[100] -translate-y-20 rounded-full bg-amber px-4 py-2 font-bold focus:translate-y-0"
      >
        Zum Inhalt
      </a>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl font-bold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-forest text-cream">
              <Sprout className="size-5" />
            </span>
            GROWNAVI
          </Link>
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map(([match, label, href]) => (
              <Link
                key={href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-sage/15",
                  match.test(path) ? "bg-forest text-cream" : "text-forest/75",
                )}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-full border border-forest/15 lg:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            aria-label="Mobile Navigation"
            className="container-page grid gap-1 border-t border-forest/10 py-3 lg:hidden"
          >
            {links.map(([, label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={href}
                className="flex min-h-11 items-center justify-between rounded-xl px-3 font-semibold hover:bg-sage/15"
                href={href}
              >
                {label}
                <ChevronRight className="size-4" />
              </Link>
            ))}
          </nav>
        )}
      </header>
      <nav
        aria-label="Schnellnavigation"
        className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-2xl border border-forest/10 bg-cream/95 p-1 shadow-soft backdrop-blur lg:hidden"
      >
        {[
          [Home, "Start", "/"],
          [Wrench, "Tools", "/werkzeuge"],
          [NotebookPen, "Mein Grow", "/mein-grow"],
          [Search, "Wissen", "/wissen"],
        ].map(([Icon, label, href]) => (
          <Link
            key={String(href)}
            href={String(href)}
            className="flex min-h-12 flex-col items-center justify-center text-[10px] font-bold"
          >
            <Icon className="size-4" />
            {String(label)}
          </Link>
        ))}
      </nav>
    </>
  );
}
export function Footer() {
  return (
    <footer className="mt-24 bg-forest pb-24 pt-14 text-cream lg:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-serif text-2xl font-bold">
            <Sprout />
            GROWNAVI
          </div>
          <p className="mt-4 max-w-md leading-7 text-cream/70">
            Wissen und Werkzeuge für verantwortungsvollen, legalen privaten
            Eigenanbau – ruhig erklärt und lokal gespeichert.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Entdecken</h2>
          <div className="mt-4 grid gap-2 text-sm text-cream/70">
            <Link href="/anbauphasen">Anbauphasen</Link>
            <Link href="/sortenkunde">Sortenkunde</Link>
            <Link href="/werkzeuge">Werkzeuge</Link>
            <Link href="/wissen">Wissensbereich</Link>
            <Link href="/mein-grow">Mein Grow</Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Verantwortung</h2>
          <div className="mt-4 grid gap-2 text-sm text-cream/70">
            <Link href="/rechtliches">Rechtliches & Verantwortung</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <span>Keine Rechtsberatung</span>
            <span>Nur für Erwachsene</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function LegalGate() {
  const [show, setShow] = useState(false);
  useEffect(
    () =>
      setShow(
        localStorage.getItem("grownavi_notice") !== "ok" &&
          localStorage.getItem("gruenspur_notice") !== "ok",
      ),
    [],
  );
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-2xl rounded-3xl border border-forest/15 bg-cream p-5 shadow-soft lg:bottom-6">
      <div className="flex gap-4">
        <ShieldCheck className="size-7 shrink-0 text-moss" />
        <div>
          <h2 className="font-serif text-xl font-bold">
            Für Erwachsene. Legal. Verantwortlich.
          </h2>
          <p className="mt-2 text-sm leading-6 text-forest/70">
            Diese Inhalte unterstützen ausschließlich legalen privaten
            Eigenanbau. Die Rechtslage hängt von deinem Land ab und kann sich
            ändern. Bitte prüfe sie selbst; dies ist keine Rechtsberatung.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              onClick={() => {
                localStorage.setItem("grownavi_notice", "ok");
                setShow(false);
              }}
            >
              Verstanden, ich bin volljährig
            </Button>
            <Link
              className="inline-flex min-h-11 items-center px-3 text-sm font-bold"
              href="/rechtliches"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container-page py-14 sm:py-20">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/70">
        {description}
      </p>
    </section>
  );
}
export function LocalStorageNotice() {
  return (
    <Notice>
      Deine Eingaben bleiben ausschließlich in diesem Browser. Es werden keine
      persönlichen Grow-Daten an externe Dienste gesendet.
    </Notice>
  );
}
