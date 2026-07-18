# GROWNAVI – vom Samen bis zur Ernte

GROWNAVI ist eine vollständige, deutschsprachige Next.js-Website für volljährige Menschen, die Cannabis im Rahmen der jeweils geltenden Regeln privat anbauen dürfen. Sie verbindet redaktionelle Inhalte mit sieben interaktiven Werkzeugen und einem ausschließlich lokal gespeicherten Grow-Tagebuch.

## Technik

- Next.js 15 mit App Router und TypeScript
- Tailwind CSS, Radix-basierte UI-Bausteine im Stil von shadcn/ui
- Framer Motion, Lucide Icons und Recharts
- Browser-localStorage ohne Konto, Tracking oder Backend
- Vitest und Testing Library

## Installation und Start

```bash
pnpm install
pnpm dev
```

Danach ist die Website unter `http://localhost:3000` erreichbar.

## Qualitätsprüfung und Build

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Ordnerstruktur

- `app/`: App-Router-Seiten, dynamische Phasen-, Problem-, Wissens- und Werkzeugrouten
- `components/`: Navigation, Designsystem, Animation, Rechner und Tagebuch
- `lib/content.ts`: strukturierte redaktionelle Daten
- `lib/utils.ts`: VPD-, DLI-, Datums- und Planungslogik
- `lib/storage.ts`: versionierte lokale Daten, Demo, Import und Export
- `tests/`: Unit-Tests für Berechnungen, Termine und lokale Persistenz

## Interaktive Werkzeuge

Der Grow-Planer erzeugt eine geschätzte Zeitleiste. Der VPD-Rechner nutzt die Tetens-Näherung, der Lichtplaner berechnet DLI nur aus einem gemessenen PPFD-Wert. Gießhilfe, Symptom-Finder und Ernte-Check liefern vorsichtige Entscheidungshilfen statt definitiver Diagnosen. Der Trocknungsassistent dokumentiert Klima, Geruch und Konsistenz lokal.

## Lokale Datenspeicherung

Tagebuch, Checklisten, Planer und Hinweisstatus bleiben im Browser. „Mein Grow“ unterstützt JSON-Export, validierten Import und bestätigtes Löschen. Das Löschen der Browserdaten kann auch alle Grow-Daten entfernen; regelmäßige Exporte werden empfohlen.

## Spätere Backend-Erweiterung

Die Domänentypen und Storage-Funktionen sind von der Oberfläche getrennt. Eine spätere Repository-Schicht kann `localStorage` durch authentifizierte API-Aufrufe ersetzen. Empfohlen sind dann serverseitige Schema-Validierung, verschlüsselte Speicherung, Konfliktauflösung für Synchronisierung und eine explizite Einwilligungs- sowie Löschstrategie.

## Deployment auf Vercel

1. Repository zu GitHub/GitLab/Bitbucket pushen.
2. In Vercel „New Project“ wählen und das Repository importieren.
3. Framework-Preset „Next.js“ verwenden; Build-Befehl `pnpm build`.
4. Aktuell sind keine Umgebungsvariablen nötig.
5. Vor Produktion die Beispiel-Domain in `app/layout.tsx`, `app/sitemap.ts` und `app/robots.ts` ersetzen.

## Rechtlicher Rahmen

Die Inhalte sind keine Rechtsberatung und unterstützen weder Verschleierung noch illegalen Verkauf oder die Umgehung behördlicher Kontrollen. Nutzer müssen ihre aktuelle lokale Rechtslage selbst prüfen. Pflanzen und Produkte sind sicher vor Kindern und Haustieren aufzubewahren.
