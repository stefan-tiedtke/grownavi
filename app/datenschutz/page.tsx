import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Transparente Informationen zur lokalen Datenspeicherung ohne Konto, Analyse-Tracker oder Datenupload bei GROWNAVI.",
  alternates: { canonical: "/datenschutz" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Keine Tracker, kein Konto"
        title="Deine Daten bleiben bei dir."
        description="Die erste Version von GROWNAVI überträgt keine persönlichen Grow-Eingaben an externe Dienste."
      />
      <section className="container-page prose-grow max-w-4xl">
        <h2>Lokale Speicherung</h2>
        <p>
          Planer, Checklisten, Hinweisstatus und Tagebuch werden über
          localStorage ausschließlich in deinem Browser gespeichert. Sie sind an
          dieses Gerät und dieses Browserprofil gebunden.
        </p>
        <h2>Keine unnötigen Cookies</h2>
        <p>
          GROWNAVI verwendet keine Analyse-, Werbe- oder Marketing-Tracker.
          Funktionale lokale Einträge sind technisch nötig, damit freiwillig
          gespeicherte Angaben beim nächsten Besuch wieder erscheinen.
        </p>
        <h2>Export, Import und Löschung</h2>
        <p>
          Im Bereich „Mein Grow“ kannst du alle Projektdaten als JSON
          herunterladen, eine Sicherung importieren und lokale Daten löschen.
          Achtung: Das Löschen von Browserdaten kann auch dein Grow-Tagebuch
          entfernen. Ohne vorherigen Export ist es nicht wiederherstellbar.
        </p>
        <h2>Bilder</h2>
        <p>
          In dieser Version werden keine Bilder hochgeladen. Wenn eine lokale
          Vorschau später ergänzt wird, bleibt sie ebenfalls im Browser und wird
          nicht an einen Server gesendet.
        </p>
      </section>
    </>
  );
}
