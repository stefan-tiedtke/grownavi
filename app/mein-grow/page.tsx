import type { Metadata } from "next";
import { PageIntro, LocalStorageNotice } from "@/components/site-shell";
import { GrowJournal } from "@/components/grow-journal";
export const metadata: Metadata = {
  title: "Cannabis Grow-Tagebuch",
  description:
    "Lokales Grow-Tagebuch für Phasen, Aufgaben, Gießen, Düngung und Beobachtungen – ohne Konto und ohne Datenupload.",
  alternates: { canonical: "/mein-grow" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Privat auf deinem Gerät"
        title="Mein Grow-Tagebuch."
        description="Notiere Phasen, Klima, Gießen, Düngung und Beobachtungen. Alles wird automatisch in diesem Browser gespeichert."
      />
      <section className="container-page">
        <LocalStorageNotice />
        <div className="mt-6">
          <GrowJournal />
        </div>
      </section>
    </>
  );
}
