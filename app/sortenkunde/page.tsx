import type { Metadata } from "next";
import {
  Beaker,
  Brain,
  Citrus,
  Compass,
  Dna,
  Flower2,
  Gauge,
  Leaf,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Notice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sortenkunde: Indica, Sativa, Hybrid & Terpene",
  description:
    "Traditionelle Cannabis-Kategorien, Aromaprofile, Einflussfaktoren auf die Wirkung und bekannte Klassiker verständlich und kritisch erklärt.",
};

const categories = [
  {
    name: "Indica",
    label: "Traditionell: Ruhe & Körpergefühl",
    icon: Leaf,
    text: "Im Handel werden kompakter wachsende Linien mit breiteren Blättern häufig als Indica bezeichnet. Konsumenten verbinden das Label traditionell mit ruhigen, schweren oder körperbetonten Erfahrungen.",
    caveat:
      "Das Wort allein sagt weder den THC-Gehalt noch die tatsächliche Wirkung zuverlässig voraus.",
  },
  {
    name: "Sativa",
    label: "Traditionell: Aktivität & Kopfgefühl",
    icon: Sparkles,
    text: "Sativa wird traditionell für höher wachsende Pflanzen mit schmaleren Blättern verwendet. Im heutigen Sprachgebrauch steht das Label oft für anregende, klare oder gedankenbetonte Erfahrungen.",
    caveat:
      "Auch hier können Chemie, Dosis und persönliche Reaktion deutlich vom Etikett abweichen.",
  },
  {
    name: "Hybrid",
    label: "Kreuzung verschiedener Linien",
    icon: Dna,
    text: "Die meisten modernen Sorten vereinen Abstammungslinien, die als Indica und Sativa vermarktet werden. Zusätze wie „indica-dominant“ beschreiben die beabsichtigte Tendenz der Züchtung.",
    caveat:
      "Ein Hybrid ist nicht automatisch ausgewogen; entscheidend ist das konkrete Cannabinoid- und Aromaprofil.",
  },
];

const aromas = [
  {
    title: "Zitrus & frisch",
    terpenes: "Limonen, teils Terpinolen",
    examples: "Zitrone, Limette, Orange, frische Kräuter",
  },
  {
    title: "Erdig & kräuterig",
    terpenes: "Myrcen, Humulen",
    examples: "Erde, Hopfen, Holz, getrocknete Kräuter",
  },
  {
    title: "Kiefer & harzig",
    terpenes: "α-Pinen und β-Pinen",
    examples: "Nadelwald, Rosmarin, Harz",
  },
  {
    title: "Blumig & weich",
    terpenes: "Linalool, Geraniol",
    examples: "Lavendel, Rose, süße Blüten",
  },
  {
    title: "Pfeffrig & würzig",
    terpenes: "β-Caryophyllen",
    examples: "Schwarzer Pfeffer, Nelke, trockene Gewürze",
  },
  {
    title: "Fruchtig & süß",
    terpenes: "Terpinolen plus weitere flüchtige Stoffe",
    examples: "Beeren, tropische Früchte, Süße",
  },
];

const factors = [
  {
    title: "THC-Gehalt und Gesamtmenge",
    icon: Gauge,
    text: "THC ist der wichtigste berauschende Inhaltsstoff. Eine höhere Konzentration oder Gesamtmenge erhöht meist auch die Wahrscheinlichkeit unerwünschter Wirkungen.",
  },
  {
    title: "CBD und weitere Cannabinoide",
    icon: Beaker,
    text: "Das Verhältnis von THC zu CBD beschreibt ein Produkt besser als ein Sortenlabel. CBD ist jedoch kein verlässlicher „Aus-Schalter“ für eine zu hohe THC-Wirkung.",
  },
  {
    title: "Person, Erfahrung und Tagesform",
    icon: Brain,
    text: "Toleranz, Stoffwechsel, Alter, Stimmung, Schlaf, Vorerkrankungen und Medikamente können die individuelle Reaktion verändern.",
  },
  {
    title: "Konsumform und zeitlicher Verlauf",
    icon: Compass,
    text: "Aufnahmeweg und Produktform beeinflussen, wie schnell eine Wirkung beginnt, wie stark sie wahrgenommen wird und wie lange sie anhält.",
  },
  {
    title: "Umgebung und Erwartung",
    icon: Flower2,
    text: "Ort, Gesellschaft, Stressniveau und vorherige Erwartungen – oft als Set und Setting bezeichnet – prägen das subjektive Erleben mit.",
  },
  {
    title: "Charge, Reife und Lagerung",
    icon: Dna,
    text: "Selbst Pflanzen mit gleichem Namen können sich chemisch unterscheiden. Phänotyp, Anbau, Erntezeitpunkt und Lagerung verändern das messbare Profil.",
  },
];

const classics = [
  ["Skunk #1", "Hybrid", "kräftig, kräuterig, würzig"],
  ["Northern Lights", "traditionell Indica-dominant", "erdig, süß, würzig"],
  ["Haze", "traditionell Sativa-dominant", "Zitrus, Weihrauch, Gewürze"],
  ["White Widow", "Hybrid", "Kiefer, Kräuter, Pfeffer"],
  ["Blueberry", "traditionell Indica-dominant", "Beeren, süß, erdig"],
  ["OG Kush", "Hybrid", "Zitrus, Kiefer, erdig"],
];

const sources = [
  {
    label: "Phytochemical diversity of commercial Cannabis",
    publisher: "PLOS One / PMC",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9119530/",
  },
  {
    label: "Cannabis labelling and terpene synthase genes",
    publisher: "Nature Plants / PMC",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8516649/",
  },
  {
    label: "Cannabis products: THC, CBD and terpenes",
    publisher: "Health Canada",
    href: "https://www.canada.ca/en/health-canada/topics/accessing-cannabis-for-medical-purposes/cannabis-medical-purposes/choosing-cannabis-product.html",
  },
  {
    label: "How to read and understand a cannabis product label",
    publisher: "Health Canada",
    href: "https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/personal-use/how-read-understand-cannabis-product-label.html",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Aroma, Chemie und Einordnung"
        title="Sortenkunde ohne Marketingnebel."
        description="Indica, Sativa und Hybrid sind vertraute Orientierungspunkte. Für Aroma und Wirkung ist das konkrete chemische Profil jedoch aussagekräftiger als der Name auf dem Etikett."
      />

      <section className="container-page space-y-14">
        <Notice warning>
          <strong>Wichtig:</strong> Die Begriffe Indica, Sativa und Hybrid sind
          keine verlässliche Wirkungsprognose. Große chemische Analysen zeigen,
          dass handelsübliche Labels die tatsächliche Vielfalt nur ungenau
          abbilden. Beschreibungen wie „beruhigend“ oder „anregend“ sind daher
          traditionelle Erwartungen, keine Garantie.
        </Notice>

        <section aria-labelledby="kategorien">
          <div className="max-w-3xl">
            <span className="eyebrow">Traditionelle Kategorien</span>
            <h2
              id="kategorien"
              className="mt-3 font-serif text-3xl font-bold sm:text-5xl"
            >
              Drei Namen – viele Überschneidungen
            </h2>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <article className="card p-7" key={category.name}>
                <category.icon className="size-8 text-moss" aria-hidden />
                <p className="eyebrow mt-7">{category.label}</p>
                <h3 className="mt-2 font-serif text-3xl font-bold">
                  {category.name}
                </h3>
                <p className="mt-4 leading-7 text-forest/70">
                  {category.text}
                </p>
                <p className="mt-5 border-l-2 border-amber pl-4 text-sm leading-6 text-forest/65">
                  {category.caveat}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="aromen"
          className="rounded-[2rem] bg-forest px-5 py-9 text-cream sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <Citrus className="size-10 text-amber" aria-hidden />
              <span className="eyebrow mt-6 block text-sage">
                Beliebte Terpen- und Geschmacksrichtungen
              </span>
              <h2 id="aromen" className="mt-3 font-serif text-4xl font-bold">
                Erst die Nase, dann das Etikett
              </h2>
              <p className="mt-5 leading-7 text-cream/70">
                Terpene sind flüchtige Aromastoffe. Sie tragen wesentlich zum
                Geruch bei, sind aber nicht die einzigen Geschmacksgeber:
                Schwefelverbindungen, Ester und andere Stoffe können gerade
                fruchtige oder besonders intensive Noten prägen.
              </p>
              <p className="mt-4 text-sm leading-6 text-cream/60">
                Aromabeschreibungen sind sensorische Orientierung. Eine
                bestimmte Geschmacksrichtung beweist keine bestimmte Wirkung;
                der sogenannte Entourage-Effekt ist wissenschaftlich noch nicht
                ausreichend geklärt.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aromas.map((aroma) => (
                <article
                  key={aroma.title}
                  className="rounded-2xl border border-cream/10 bg-cream/5 p-5"
                >
                  <h3 className="font-bold text-amber">{aroma.title}</h3>
                  <p className="mt-2 text-sm font-semibold">
                    {aroma.terpenes}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cream/60">
                    {aroma.examples}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="wirkung">
          <div className="max-w-3xl">
            <span className="eyebrow">Wichtige Faktoren für die Wirkung</span>
            <h2
              id="wirkung"
              className="mt-3 font-serif text-3xl font-bold sm:text-5xl"
            >
              Wirkung entsteht aus mehr als Genetik
            </h2>
            <p className="mt-4 leading-7 text-forest/70">
              Sinnvoller als die Frage „Indica oder Sativa?“ ist ein Blick auf
              Inhaltsstoffe, Stärke, Person und Situation.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <article className="card p-6" key={factor.title}>
                <factor.icon className="size-7 text-moss" aria-hidden />
                <h3 className="mt-6 text-lg font-bold">{factor.title}</h3>
                <p className="mt-3 text-sm leading-6 text-forest/65">
                  {factor.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-5">
            <Notice warning>
              Hohe THC-Mengen können unter anderem Angst, Verwirrtheit,
              Kreislaufbeschwerden und eingeschränkte Reaktionsfähigkeit
              begünstigen. Nicht fahren, Maschinen bedienen oder Cannabis mit
              Alkohol kombinieren. Bei Schwangerschaft, psychischen oder
              kardiovaskulären Vorerkrankungen sowie Wechselwirkungen mit
              Medikamenten ist medizinischer Rat wichtig.
            </Notice>
          </div>
        </section>

        <section aria-labelledby="klassiker">
          <div className="max-w-3xl">
            <span className="eyebrow">Bekannte Klassiker</span>
            <h2
              id="klassiker"
              className="mt-3 font-serif text-3xl font-bold sm:text-5xl"
            >
              Namen, die Zuchtgeschichte geprägt haben
            </h2>
            <p className="mt-4 leading-7 text-forest/70">
              Die folgenden Namen sind historische Referenzpunkte, keine
              geschützten Rezepturen. Samenlinien und einzelne Phänotypen können
              je nach Züchter deutlich voneinander abweichen.
            </p>
          </div>
          <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white/80">
            <div className="hidden grid-cols-[1fr_1.25fr_1.35fr] gap-4 bg-sage/15 px-6 py-4 text-sm font-bold sm:grid">
              <span>Name</span>
              <span>Traditionelle Einordnung</span>
              <span>Häufig beschriebene Aromen</span>
            </div>
            {classics.map(([name, category, aroma]) => (
              <article
                key={name}
                className="grid gap-2 border-t border-forest/10 px-6 py-5 first:border-t-0 sm:grid-cols-[1fr_1.25fr_1.35fr] sm:gap-4"
              >
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-forest/65">{category}</p>
                <p className="text-sm text-forest/65">{aroma}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="quellen"
          className="card grid gap-6 p-7 lg:grid-cols-[.7fr_1.3fr]"
        >
          <div>
            <ShieldAlert className="size-8 text-moss" aria-hidden />
            <h2 id="quellen" className="mt-5 font-serif text-3xl font-bold">
              Quellen & Einordnung
            </h2>
            <p className="mt-3 text-sm leading-6 text-forest/65">
              Die Seite verbindet traditionelle Sortenbegriffe mit dem heutigen
              Forschungsstand. Wirkungsaussagen sind keine medizinische Beratung.
            </p>
          </div>
          <ul className="grid gap-3">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-between gap-4 rounded-2xl bg-sage/10 px-5 py-3 transition hover:bg-sage/20"
                >
                  <span>
                    <strong className="block text-sm">{source.label}</strong>
                    <span className="text-xs text-forest/55">
                      {source.publisher}
                    </span>
                  </span>
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
