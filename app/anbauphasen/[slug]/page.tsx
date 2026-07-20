import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";
import { phases } from "@/lib/content";
import { Badge, Notice } from "@/components/ui";
import { Checklist } from "@/components/content-cards";
import { Breadcrumbs } from "@/components/breadcrumbs";
export function generateStaticParams() {
  return phases.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = phases.find((x) => x.slug === slug);
  return p
    ? {
        title: `${p.title} beim Cannabis-Anbau`,
        description: p.short,
        alternates: { canonical: `/anbauphasen/${slug}` },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = phases.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = phases[i],
    Icon = p.icon;
  return (
    <>
      <section className="container-page py-12 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/" },
            { name: "Anbauphasen", href: "/anbauphasen" },
            { name: p.title, href: `/anbauphasen/${slug}` },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
          <div className="mt-8">
            <Badge>
              Phase {i + 1} von 10 · {p.duration}
            </Badge>
            <h1 className="mt-5 font-serif text-5xl font-bold sm:text-7xl">
              {p.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/70">
              {p.short}
            </p>
          </div>
          <div className="card grid min-h-64 place-items-center bg-gradient-to-br from-sage/20 to-sand/60">
            <Icon className="size-24 text-moss" strokeWidth={1.2} />
          </div>
        </div>
      </section>
      <section className="container-page grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
        <div className="space-y-6">
          <Notice>
            Orientierungswerte, keine festen Rezepte: Prüfe stets die Reaktion
            deiner Pflanze und die Bedingungen an deinem Standort.
          </Notice>
          <div className="card p-7">
            <p className="eyebrow">Ziel dieser Phase</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">{p.goal}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Licht", p.light],
              ["Klima", p.climate],
              ["Wasser", p.water],
              ["Nährstoffe", p.nutrients],
            ].map(([a, b]) => (
              <div key={a} className="card p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-moss">
                  {a}
                </p>
                <p className="mt-3 leading-6">{b}</p>
              </div>
            ))}
          </div>
          <div className="card p-7">
            <h2 className="flex items-center gap-3 font-serif text-3xl font-bold">
              <Eye className="size-7" />
              Sichtbare Merkmale
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {p.traits.map((x) => (
                <li className="rounded-xl bg-sage/10 p-4" key={x}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <h2 className="flex gap-2 text-xl font-bold">
                <Lightbulb />
                Häufige Fehler
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-forest/70">
                {p.mistakes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="card border-amber/30 bg-amber/10 p-6">
              <h2 className="flex gap-2 text-xl font-bold">
                <TriangleAlert />
                Warnzeichen
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-forest/70">
                {p.warnings.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside>
          <div className="card sticky top-24 p-6">
            <p className="eyebrow">Praktische Checkliste</p>
            <h2 className="mt-3 font-serif text-2xl font-bold">
              Gut vorbereitet?
            </h2>
            <div className="mt-5">
              <Checklist storageKey={p.slug} items={p.checks} />
            </div>
          </div>
        </aside>
      </section>
      <nav
        aria-label="Phasennavigation"
        className="container-page mt-12 flex justify-between gap-4"
      >
        {i > 0 ? (
          <Link
            className="inline-flex items-center gap-2 font-bold"
            href={`/anbauphasen/${phases[i - 1].slug}`}
          >
            <ArrowLeft /> {phases[i - 1].title}
          </Link>
        ) : (
          <span />
        )}
        {i < phases.length - 1 && (
          <Link
            className="inline-flex items-center gap-2 text-right font-bold"
            href={`/anbauphasen/${phases[i + 1].slug}`}
          >
            {phases[i + 1].title} <ArrowRight />
          </Link>
        )}
      </nav>
    </>
  );
}
