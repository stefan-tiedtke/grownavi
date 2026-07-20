import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { PlantAnatomy } from "@/components/plant-anatomy";
import { GlossaryBrowser } from "@/components/glossary-browser";
import { Notice } from "@/components/ui";
import { glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Cannabis-Glossar: Pflanzenteile und Anbaubegriffe",
  description:
    "Cannabis-Pflanzenteile und Anbaubegriffe wie Trichome, Pistill, Narben, Bud, Cola, Nodie, PPFD und VPD verständlich erklärt und bebildert.",
  alternates: { canonical: "/glossar" },
  openGraph: {
    title: "Cannabis-Glossar: Pflanzenteile und Anbaubegriffe",
    description:
      "Begriffe des Cannabis-Anbaus verständlich erklärt – mit beschrifteter Pflanzen- und Blütengrafik.",
    url: "/glossar",
    type: "website",
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "GROWNAVI Cannabis-Glossar",
    url: "https://www.grownavi.de/glossar",
    description:
      "Glossar für Pflanzenteile und Fachbegriffe des verantwortungsvollen Cannabis-Eigenanbaus.",
    hasDefinedTerm: glossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.explanation,
      inDefinedTermSet: "https://www.grownavi.de/glossar",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageIntro
        eyebrow="Nachschlagen und verstehen"
        title="Das Cannabis-Glossar."
        description="Von der Wurzel bis zum Trichom: Entdecke wichtige Pflanzenteile, ihre Position und Begriffe, die dir beim Lesen über den Anbau immer wieder begegnen."
      />
      <div className="container-page space-y-12">
        <PlantAnatomy />
        <Notice>
          <strong>Botanisch genau:</strong> Im Grow-Alltag werden manche Wörter
          vereinfacht verwendet. Die sichtbaren „Blütenhaare“ sind die
          Narbenäste des Pistills. Was häufig „Calyx“ genannt wird, ist meist
          das harzreiche Hüll- oder Tragblatt um die weibliche Einzelblüte.
        </Notice>
        <GlossaryBrowser terms={glossaryTerms} />
        <section className="card p-6 text-sm leading-6 text-forest/65 sm:p-8">
          <h2 className="text-lg font-bold text-forest">
            Botanische Grundlagen
          </h2>
          <p className="mt-3">
            Die Erklärungen und die schematische Grafik orientieren sich an
            botanischen Beschreibungen der weiblichen Cannabisblüte und ihrer
            Drüsentrichome. Vertiefende Quellen:{" "}
            <a
              className="font-semibold text-moss underline decoration-moss/30 underline-offset-4"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6454139/"
              rel="noreferrer"
              target="_blank"
            >
              Frontiers in Plant Science
            </a>{" "}
            und{" "}
            <a
              className="font-semibold text-moss underline decoration-moss/30 underline-offset-4"
              href="https://extension.unr.edu/publication.aspx?PubID=4479"
              rel="noreferrer"
              target="_blank"
            >
              University of Nevada Extension
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
