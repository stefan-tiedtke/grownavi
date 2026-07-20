import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { ProblemGrid } from "@/components/content-cards";
import { Notice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cannabis-Probleme und Mangelerscheinungen erkennen",
  description:
    "Symptome, Stressreaktionen, Schädlinge und mögliche Mangelerscheinungen bei Cannabis vorsichtig vergleichen und Ursachen systematisch eingrenzen.",
  alternates: { canonical: "/probleme" },
};

export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Beobachten, vergleichen, eingrenzen"
        title="Probleme erkennen – ohne vorschnelle Diagnose."
        description="Viele Stressreaktionen sehen ähnlich aus. Vergleiche mögliche Ursachen und ändere nur einen Parameter zur Zeit."
      />
      <section className="container-page">
        <Notice warning>
          Bei Schimmelverdacht: betroffene Bereiche nicht konsumieren, isolieren
          und Hygiene priorisieren. Ein einzelnes Foto oder Symptom reicht nie
          für eine sichere Diagnose.
        </Notice>
        <div className="mt-8">
          <ProblemGrid />
        </div>
      </section>
    </>
  );
}
