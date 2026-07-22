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
  Wrench,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GROW_PROJECTS_CHANGED_EVENT, loadProjects } from "@/lib/storage";
import { Breadcrumbs } from "./breadcrumbs";
import { Button, Notice } from "./ui";
import { ThemeToggle } from "./theme-toggle";

const links = [
  [/^\/$/, "Start", "/"],
  [/^\/anbauphasen/, "Anbauphasen", "/anbauphasen"],
  [/^\/grundlagen/, "Grundlagen", "/grundlagen"],
  [/^\/sortenkunde/, "Sortenkunde", "/sortenkunde"],
  [/^\/probleme/, "Probleme erkennen", "/probleme"],
  [/^\/werkzeuge/, "Werkzeuge", "/werkzeuge"],
  [/^\/wissen/, "Wissen", "/wissen"],
  [/^\/glossar/, "Glossar", "/glossar"],
  [/^\/mein-grow/, "Mein Grow", "/mein-grow"],
  [/^\/faq/, "FAQ", "/faq"],
] as const;

function CannabisLeafLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="-100 -105 200 215"
      fill="none"
      stroke="currentColor"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 62C-2 30-3-7 0-91C3-7 2 30 0 62" />
      <path d="M-3 35C-24 12-43-19-57-67C-25-40-9-9-3 35" />
      <path d="M3 35C24 12 43-19 57-67C25-40 9-9 3 35" />
      <path d="M-7 47C-34 36-60 17-84-18C-48-4-22 17-7 47" />
      <path d="M7 47C34 36 60 17 84-18C48-4 22 17 7 47" />
      <path d="M-8 55C-31 55-53 48-72 34C-44 35-22 42-8 55" />
      <path d="M8 55C31 55 53 48 72 34C44 35 22 42 8 55" />
      <path d="M0 58V91" />
    </svg>
  );
}

function ActiveGrowIndicator() {
  return (
    <span
      className="size-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_0_3px_rgba(220,38,38,0.15)]"
      aria-hidden="true"
    />
  );
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hasActiveGrow, setHasActiveGrow] = useState(false);
  useEffect(() => {
    const refreshIndicator = () =>
      setHasActiveGrow(loadProjects().some((project) => !project.demo));
    refreshIndicator();
    window.addEventListener(GROW_PROJECTS_CHANGED_EVENT, refreshIndicator);
    window.addEventListener("storage", refreshIndicator);
    return () => {
      window.removeEventListener(GROW_PROJECTS_CHANGED_EVENT, refreshIndicator);
      window.removeEventListener("storage", refreshIndicator);
    };
  }, []);
  return (
    <>
      <a
        href="#hauptinhalt"
        className="fixed left-3 top-2 z-[100] -translate-y-20 rounded-full bg-amber px-4 py-2 font-bold focus:translate-y-0"
      >
        Zum Inhalt
      </a>
      <header className="sticky top-0 z-50 border-b border-forest/15 bg-cream/90 shadow-[0_8px_30px_-24px_rgba(16,63,50,.7)] backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl font-bold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-moss to-forest text-cream shadow-md ring-2 ring-moss/15">
              <CannabisLeafLogo className="size-6" />
            </span>
            GROWNAVI.de
          </Link>
          <div className="flex items-center gap-2">
            <nav
              aria-label="Hauptnavigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {links.map(([match, label, href]) => (
                <Link
                  key={href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-sage/15",
                    match.test(path) ? "bg-forest text-cream" : "text-forest/75",
                  )}
                  href={href}
                >
                  {label}
                  {href === "/mein-grow" && hasActiveGrow && (
                    <>
                      <ActiveGrowIndicator />
                      <span className="sr-only">Aktives Grow-Projekt</span>
                    </>
                  )}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="grid size-11 place-items-center rounded-full border border-forest/15 lg:hidden"
              aria-label="Menü öffnen"
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
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
                <span className="flex items-center gap-2">
                  {label}
                  {href === "/mein-grow" && hasActiveGrow && (
                    <>
                      <ActiveGrowIndicator />
                      <span className="sr-only">Aktives Grow-Projekt</span>
                    </>
                  )}
                </span>
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
            <span className="relative">
              <Icon className="size-4" />
              {href === "/mein-grow" && hasActiveGrow && (
                <span className="absolute -right-2 -top-1">
                  <ActiveGrowIndicator />
                  <span className="sr-only">Aktives Grow-Projekt</span>
                </span>
              )}
            </span>
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
            <CannabisLeafLogo className="size-7" />
            GROWNAVI
          </div>
          <p className="mt-4 max-w-md leading-7 text-cream/70">
            Wissen und Werkzeuge für verantwortungsvollen, legalen privaten
            Eigenanbau – ruhig erklärt und lokal gespeichert.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Entdecken</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-cream/70 md:grid-cols-1">
            <Link href="/">Start</Link>
            <Link href="/anbauphasen">Anbauphasen</Link>
            <Link href="/grundlagen">Grundlagen</Link>
            <Link href="/sortenkunde">Sortenkunde</Link>
            <Link href="/probleme">Probleme erkennen</Link>
            <Link href="/werkzeuge">Werkzeuge</Link>
            <Link href="/wissen">Wissen</Link>
            <Link href="/glossar">Glossar</Link>
            <Link href="/mein-grow">Mein Grow</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Verantwortung</h2>
          <div className="mt-4 grid gap-2 text-sm text-cream/70">
            <Link href="/rechtliches">Rechtliches & Verantwortung</Link>
            <Link href="/impressum">Impressum</Link>
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
  const path = usePathname();
  const breadcrumbLabel =
    {
      "/anbauphasen": "Anbauphasen",
      "/grundlagen": "Grundlagen",
      "/sortenkunde": "Sortenkunde",
      "/probleme": "Probleme erkennen",
      "/werkzeuge": "Werkzeuge",
      "/wissen": "Wissen",
      "/glossar": "Glossar",
      "/ausruestung": "Ausrüstung",
      "/mein-grow": "Mein Grow",
      "/faq": "FAQ",
      "/rechtliches": "Rechtliches & Verantwortung",
      "/impressum": "Impressum",
      "/datenschutz": "Datenschutz",
    }[path] ?? title.replace(/\.$/, "");
  return (
    <section className="container-page py-14 sm:py-20">
      <Breadcrumbs
        items={[
          { name: "Startseite", href: "/" },
          { name: breadcrumbLabel, href: path },
        ]}
      />
      <span className="eyebrow mt-6 block">{eyebrow}</span>
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
