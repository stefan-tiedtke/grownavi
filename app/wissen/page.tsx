import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { KnowledgeGrid } from "@/components/content-cards";
export const metadata: Metadata = {
  title: "Cannabis-Anbauwissen",
  description:
    "Ausführliche Leitfäden und verständliche Vergleiche zu Licht, Klima, Gießen, Nährstoffen und verantwortungsvollem Cannabis-Eigenanbau.",
  alternates: { canonical: "/wissen" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Lesen, verstehen, anwenden"
        title="Wissen für gute Entscheidungen."
        description="Leitfäden, Vergleiche und verständliche Erklärungen – filterbar nach Thema und Wachstumsphase."
      />
      <section className="container-page">
        <KnowledgeGrid />
      </section>
    </>
  );
}
