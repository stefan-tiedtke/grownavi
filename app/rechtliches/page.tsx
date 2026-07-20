import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { Notice } from "@/components/ui";
export const metadata: Metadata = {
  title: "Rechtliches & Verantwortung",
  description:
    "Hinweise zu Volljährigkeit, Rechtslage, sicherer Aufbewahrung und verantwortungsvollem privaten Cannabis-Eigenanbau.",
  alternates: { canonical: "/rechtliches" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Legal und umsichtig"
        title="Rechtliches & Verantwortung."
        description="GROWNAVI ist ein Bildungsangebot für volljährige Nutzer im Rahmen des jeweils legalen privaten Eigenanbaus."
      />
      <section className="container-page grid gap-5 md:grid-cols-2">
        <div className="card p-7">
          <h2 className="font-serif text-3xl font-bold">Deine Verantwortung</h2>
          <ul className="mt-5 list-inside list-disc space-y-3 leading-7 text-forest/70">
            <li>
              Prüfe die aktuelle Rechtslage deines Landes und deiner Region
              selbst.
            </li>
            <li>
              Beachte Grenzen zu Pflanzenzahl, Besitz, Standort und Weitergabe.
            </li>
            <li>
              Bewahre Pflanzen und Produkte sicher vor Kindern und Haustieren
              auf.
            </li>
            <li>Kein Konsum durch Minderjährige und keine illegale Abgabe.</li>
          </ul>
        </div>
        <div className="card p-7">
          <h2 className="font-serif text-3xl font-bold">Klare Grenzen</h2>
          <p className="mt-5 leading-7 text-forest/70">
            Die Website stellt keine Rechtsberatung dar. Sie bietet keine
            Informationen zur Verschleierung, Umgehung gesetzlicher Grenzen oder
            behördlicher Kontrollen und keine Hilfe für illegalen Verkauf oder
            Vertrieb.
          </p>
        </div>
        <div className="md:col-span-2">
          <Notice warning>
            Rechtslagen können sich jederzeit ändern. Verlasse dich nicht auf
            veraltete Zusammenfassungen und nutze im Zweifel offizielle
            staatliche Quellen oder qualifizierte Rechtsberatung.
          </Notice>
        </div>
        <div className="card p-7 md:col-span-2">
          <h2 className="font-serif text-3xl font-bold">
            Gesundheit & Sicherheit
          </h2>
          <p className="mt-4 leading-7 text-forest/70">
            Arbeite hygienisch, trenne Elektrik zuverlässig von Wasser, verwende
            keine sichtbar verschimmelten Produkte und lagere beschriftet,
            dunkel und verschlossen. Konsumentscheidungen gehören nicht in die
            Reichweite von Kindern, Jugendlichen oder anderen gefährdeten
            Personen.
          </p>
        </div>
      </section>
    </>
  );
}
