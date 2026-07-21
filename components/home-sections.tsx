"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Droplets,
  SearchCheck,
} from "lucide-react";
import { phases } from "@/lib/content";
import { Badge, FAQ } from "./ui";
export function PhaseChooser() {
  const [selected, setSelected] = useState(2);
  const p = phases[selected];
  return (
    <div className="card grid gap-6 p-5 md:grid-cols-[.8fr_1.2fr] md:p-8">
      <div>
        <label className="text-sm font-bold" htmlFor="phase-home">
          Aktuelle Phase
        </label>
        <select
          id="phase-home"
          className="mt-2 min-h-12 w-full rounded-xl border border-forest/20 bg-white px-4"
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
        >
          {phases.map((x, i) => (
            <option key={x.slug} value={i}>
              {i + 1}. {x.title}
            </option>
          ))}
        </select>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-sage/20">
          <div
            className="h-full rounded-full bg-amber transition-all"
            style={{ width: `${(selected + 1) * 10}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-forest/60">
          Phase {selected + 1} von 10
        </p>
      </div>
      <div>
        <Badge>{p.duration} · Orientierungswert</Badge>
        <h3 className="mt-3 font-serif text-3xl font-bold">{p.title}</h3>
        <p className="mt-2 leading-7 text-forest/70">{p.short}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <span className="rounded-xl bg-sage/10 p-3 text-sm">
            <b>Klima:</b>
            <br />
            {p.climate}
          </span>
          <span className="rounded-xl bg-sand/50 p-3 text-sm">
            <b>Jetzt wichtig:</b>
            <br />
            {p.checks[0]}
          </span>
        </div>
        <Link
          className="mt-5 inline-flex items-center gap-2 font-bold"
          href={`/anbauphasen/${p.slug}`}
        >
          Phase öffnen <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
export const toolTeasers = [
  {
    title: "Grow-Planer",
    text: "Deine geschätzte Zeitleiste von Start bis Reifung.",
    icon: CalendarDays,
    href: "/werkzeuge/grow-planer",
  },
  {
    title: "Gießhilfe",
    text: "Beobachten statt nach starrem Kalender gießen.",
    icon: Droplets,
    href: "/werkzeuge/giesshilfe",
  },
  {
    title: "Symptom-Finder",
    text: "Mögliche Ursachen vorsichtig eingrenzen.",
    icon: SearchCheck,
    href: "/werkzeuge/mangel-finder",
  },
];
export function HomeTools() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {toolTeasers.map((x) => (
        <Link
          key={x.title}
          href={x.href}
          className="card group p-5 transition hover:-translate-y-1"
        >
          <x.icon className="size-7 text-moss" />
          <h3 className="mt-8 text-lg font-bold">{x.title}</h3>
          <p className="mt-2 text-sm leading-6 text-forest/65">{x.text}</p>
          <ArrowRight className="mt-5 size-5 transition group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}
export function HomeFAQ() {
  return (
    <FAQ
      items={[
        {
          q: "Sind die Werte verbindliche Zielwerte?",
          a: "Nein. Alle Klima-, Licht- und Zeitangaben sind allgemeine Orientierungswerte. Genetik, Substrat, Umgebung und Methode verändern den tatsächlichen Bedarf.",
        },
        {
          q: "Werden meine Eingaben hochgeladen?",
          a: "Nein. Planer und Tagebuch speichern ihre Daten ausschließlich lokal in diesem Browser. Du kannst sie als JSON exportieren oder vollständig löschen.",
        },
        {
          q: "Kann ein Symptom-Finder eine Diagnose stellen?",
          a: "Nein. Viele Ursachen sehen ähnlich aus. Der Finder liefert Hypothesen, Kontrollfragen und nächste Beobachtungsschritte – keine eindeutige Diagnose.",
        },
        {
          q: "Gilt die Website überall rechtlich gleich?",
          a: "Nein. Die Rechtslage hängt vom Land und teils von der Region ab und kann sich ändern. Prüfe immer selbst die für dich geltenden Regeln.",
        },
      ]}
    />
  );
}
