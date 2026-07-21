import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro, LocalStorageNotice } from "@/components/site-shell";
import { toolDefinitions } from "@/lib/tools";
export const metadata: Metadata = {
  title: "Cannabis Grow-Werkzeuge",
  description:
    "Grow-Planer, Lichtplaner, Gießhilfe, Symptom-Finder und Ernte- sowie Trocknungsassistent.",
  alternates: { canonical: "/werkzeuge" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Beobachten wird einfacher"
        title="Praktische Werkzeuge. Vorsichtige Antworten."
        description="Jedes Ergebnis erklärt seine Unsicherheit. Keine Scheingenauigkeit, keine starren Rezepte und kein Konto erforderlich."
      />
      <section className="container-page">
        <LocalStorageNotice />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolDefinitions.map((x) => (
            <Link
              className="card group p-6 transition hover:-translate-y-1"
              href={`/werkzeuge/${x.slug}`}
              key={x.slug}
            >
              <x.icon className="size-8 text-moss" />
              <h2 className="mt-8 text-xl font-bold">{x.title}</h2>
              <p className="mt-3 text-sm leading-6 text-forest/65">{x.text}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                Öffnen{" "}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
