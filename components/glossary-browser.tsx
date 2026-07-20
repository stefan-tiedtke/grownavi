"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { GlossaryCategory, GlossaryTerm } from "@/lib/glossary";
import { cn } from "@/lib/utils";

const categories: Array<"Alle" | GlossaryCategory> = [
  "Alle",
  "Pflanzenaufbau",
  "Blüte & Fortpflanzung",
  "Inhaltsstoffe",
  "Anbaupraxis",
];

export function GlossaryBrowser({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Alle");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("de");
    return terms.filter(
      (item) =>
        (category === "Alle" || item.category === category) &&
        (!needle ||
          [item.term, item.aliases, item.location, item.explanation]
            .filter(Boolean)
            .join(" ")
            .toLocaleLowerCase("de")
            .includes(needle)),
    );
  }, [category, query, terms]);

  return (
    <section>
      <div className="card grid gap-4 p-4">
        <label className="relative">
          <Search
            className="absolute left-4 top-3.5 size-5 text-forest/40"
            aria-hidden="true"
          />
          <span className="sr-only">Glossar durchsuchen</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Begriff suchen, z. B. Trichom, Bud oder VPD …"
            className="min-h-12 w-full rounded-xl border border-forest/15 bg-white pl-12 pr-4"
          />
        </label>
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          aria-label="Glossarkategorien"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={cn(
                "min-h-11 whitespace-nowrap rounded-full px-4 text-sm font-bold transition",
                category === item
                  ? "bg-forest text-cream"
                  : "bg-sage/10 hover:bg-sage/20",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="my-5 text-sm text-forest/60" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "Begriff" : "Begriffe"}{" "}
        gefunden
      </p>
      {filtered.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <article
              className="card p-6"
              id={item.term.toLocaleLowerCase("de").replaceAll(" ", "-")}
              key={item.term}
            >
              <span className="eyebrow">{item.category}</span>
              <h2 className="mt-3 font-serif text-3xl font-bold">
                {item.term}
              </h2>
              {item.aliases && (
                <p className="mt-1 text-sm font-semibold text-moss">
                  Auch: {item.aliases}
                </p>
              )}
              <p className="mt-4 leading-7 text-forest/75">
                {item.explanation}
              </p>
              {item.location && (
                <p className="mt-5 rounded-xl bg-sage/10 p-3 text-sm leading-6">
                  <strong>Wo zu finden:</strong> {item.location}
                </p>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="card p-8 text-center text-forest/65">
          Kein passender Begriff gefunden. Probiere einen allgemeineren
          Suchbegriff.
        </div>
      )}
    </section>
  );
}
