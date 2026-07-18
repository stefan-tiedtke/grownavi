import {
  Sprout,
  Sun,
  CloudSun,
  Droplets,
  Scissors,
  Archive,
  Flower2,
  Leaf,
  TestTube2,
} from "lucide-react";

export type Phase = {
  slug: string;
  title: string;
  short: string;
  duration: string;
  goal: string;
  light: string;
  climate: string;
  water: string;
  nutrients: string;
  traits: string[];
  mistakes: string[];
  warnings: string[];
  checks: string[];
  icon: typeof Sprout;
};
export const phases: Phase[] = [
  {
    slug: "samen-auswaehlen",
    title: "Samen auswählen",
    short: "Eine passende Genetik und seriöse Herkunft bilden die Grundlage.",
    duration: "1–7 Tage Planung",
    goal: "Legale, für Raum und Erfahrung passende Genetik wählen.",
    light: "Noch nicht erforderlich",
    climate: "Trocken, dunkel und kühl lagern",
    water: "Noch nicht erforderlich",
    nutrients: "Noch nicht erforderlich",
    traits: ["Unbeschädigte Samenschale", "Dokumentierte Herkunft"],
    mistakes: [
      "Nur nach Marketingnamen auswählen",
      "Rechtliche Rahmenbedingungen übersehen",
    ],
    warnings: ["Beschädigte oder feuchte Samen", "Unklare Herkunft"],
    checks: [
      "Lokale Rechtslage geprüft",
      "Anbauort festgelegt",
      "Photoperiodisch oder Autoflower gewählt",
    ],
    icon: Sprout,
  },
  {
    slug: "keimung",
    title: "Keimung",
    short:
      "Feuchtigkeit und Wärme aktivieren den Samen – Ruhe ist jetzt wichtiger als Aktion.",
    duration: "2–7 Tage",
    goal: "Eine gesunde Keimwurzel ohne Stress entwickeln.",
    light: "Sanftes Licht, sobald der Keimling erscheint",
    climate: "Etwa 22–26 °C, gleichmäßig feucht",
    water: "Feucht, niemals durchnässt",
    nutrients: "Meist keine zusätzliche Düngung",
    traits: ["Schale öffnet sich", "Weiße Keimwurzel erscheint"],
    mistakes: ["Zu nass halten", "Keimwurzel berühren"],
    warnings: ["Muffiger Geruch", "Schleimige oder dunkle Wurzel"],
    checks: [
      "Sauber gearbeitet",
      "Feuchtigkeit täglich geprüft",
      "Keimling vorsichtig eingesetzt",
    ],
    icon: Sprout,
  },
  {
    slug: "saemlingsphase",
    title: "Sämlingsphase",
    short:
      "Die ersten echten Blattpaare entstehen und das Wurzelsystem etabliert sich.",
    duration: "1–3 Wochen",
    goal: "Kompaktes, stabiles Wachstum fördern.",
    light: "Mäßig, ohne Hitzestress",
    climate: "Etwa 22–26 °C · 60–75 % rF",
    water: "Kleine Mengen nach Topfgewicht",
    nutrients: "Sehr zurückhaltend, abhängig vom Substrat",
    traits: ["Erste gezackte Blätter", "Kurze Internodien"],
    mistakes: ["Zu großer nasser Topf", "Zu viel Dünger"],
    warnings: ["Dünner, langer Stiel", "Dunkle, hängende Blätter"],
    checks: [
      "Lichtabstand geprüft",
      "Topf vor Gießen angehoben",
      "Luft bewegt sich sanft",
    ],
    icon: Leaf,
  },
  {
    slug: "wachstum",
    title: "Vegetative Wachstumsphase",
    short: "Blätter, Wurzeln und tragende Struktur gewinnen schnell an Masse.",
    duration: "2–8+ Wochen",
    goal: "Eine gesunde, gleichmäßige Pflanzenstruktur aufbauen.",
    light: "Lange Lichtphase, Intensität schrittweise anpassen",
    climate: "Etwa 21–28 °C · 50–70 % rF",
    water: "Nach Bedarf und Substrattrocknung",
    nutrients: "Wachstumsbetont, vorsichtig steigern",
    traits: ["Kräftige neue Triebe", "Zunehmende Blattmasse"],
    mistakes: ["Zu häufig gießen", "Mehrere Trainingsmaßnahmen zugleich"],
    warnings: ["Verbrannte Spitzen", "Ungewöhnlich langsames Wachstum"],
    checks: [
      "Blattunterseiten kontrolliert",
      "Neue Triebe dokumentiert",
      "Topfgröße bewertet",
    ],
    icon: Sun,
  },
  {
    slug: "vorbluete",
    title: "Vorblüte",
    short:
      "Die Pflanze zeigt Reifezeichen und bereitet den Übergang zur Blüte vor.",
    duration: "1–2 Wochen",
    goal: "Geschlecht, Stretch und Gesundheit aufmerksam beobachten.",
    light: "Bei Photoperiodischen kontrollierter Wechsel",
    climate: "Etwa 20–27 °C · 45–60 % rF",
    water: "Bedarf kann ansteigen",
    nutrients: "Übergang nicht abrupt gestalten",
    traits: ["Vorblüten an Nodien", "Beschleunigtes Höhenwachstum"],
    mistakes: ["Zu spätes starkes Training", "Geschlechtsmerkmale übersehen"],
    warnings: ["Pollenbildende Merkmale", "Starker Hitzestress"],
    checks: ["Nodien mit Lupe geprüft", "Höhe gemessen", "Luftstrom angepasst"],
    icon: CloudSun,
  },
  {
    slug: "bluete",
    title: "Blütephase",
    short:
      "Blütenstände entwickeln sich; Klima und Hygiene werden besonders wichtig.",
    duration: "6–12+ Wochen",
    goal: "Gesunde Blütenentwicklung bei geringem Schimmelrisiko.",
    light: "Konstanter, ungestörter Rhythmus",
    climate: "Etwa 19–26 °C · 40–55 % rF",
    water: "Regelmäßig prüfen, Staunässe vermeiden",
    nutrients: "Blüteangepasst, Reaktion beobachten",
    traits: ["Weiße Blütenstempel", "Zunehmende Harzbildung"],
    mistakes: ["Feuchte Luft stehen lassen", "Überdüngung erzwingen"],
    warnings: ["Graue oder braune Stellen", "Bananenförmige Staubblätter"],
    checks: [
      "Blüten innen geprüft",
      "Luftfeuchte nachts geprüft",
      "Schwere Triebe gestützt",
    ],
    icon: Flower2,
  },
  {
    slug: "reife",
    title: "Reifephase",
    short:
      "Die Entwicklung verlangsamt sich und Reifezeichen werden differenziert bewertet.",
    duration: "1–3 Wochen",
    goal: "Das passende Erntefenster durch mehrere Beobachtungen eingrenzen.",
    light: "Stabil halten, Stress vermeiden",
    climate: "Etwa 18–25 °C · 40–50 % rF",
    water: "Bedarf beobachten, nicht schematisch reduzieren",
    nutrients: "Keine abrupten Änderungen",
    traits: ["Trichome verändern sich", "Blütenstempel dunkeln nach"],
    mistakes: ["Nur auf Kalender vertrauen", "Nur eine Blüte untersuchen"],
    warnings: ["Schimmel im Inneren", "Rasche Verschlechterung"],
    checks: [
      "Mehrere Höhen geprüft",
      "Trichome mit Lupe betrachtet",
      "Genetikangaben nur als Rahmen genutzt",
    ],
    icon: TestTube2,
  },
  {
    slug: "ernte",
    title: "Ernte",
    short:
      "Saubere Vorbereitung schützt Qualität und erleichtert die anschließende Trocknung.",
    duration: "1 Tag",
    goal: "Schonend, hygienisch und zum geeigneten Zeitpunkt ernten.",
    light: "Arbeitsbereich gut ausleuchten",
    climate: "Kühlen, sauberen Bereich vorbereiten",
    water: "Kein schematisches Austrocknen erzwingen",
    nutrients: "Nicht relevant",
    traits: [
      "Mehrere Reifezeichen stimmen überein",
      "Pflanze frei von sichtbarem Schimmel",
    ],
    mistakes: ["Unsauberes Werkzeug", "Zu große dichte Bündel"],
    warnings: ["Schimmelverdacht", "Verunreinigte Schneideflächen"],
    checks: [
      "Werkzeug desinfiziert",
      "Trocknungsraum stabil",
      "Chargen beschriftet",
    ],
    icon: Scissors,
  },
  {
    slug: "trocknung",
    title: "Trocknung",
    short:
      "Langsamer, kontrollierter Feuchteverlust reduziert Qualitäts- und Schimmelrisiken.",
    duration: "7–14+ Tage",
    goal: "Gleichmäßig trocknen, ohne außen zu übertrocknen.",
    light: "Dunkel lagern",
    climate: "Etwa 16–21 °C · 55–65 % rF",
    water: "Nicht relevant",
    nutrients: "Nicht relevant",
    traits: ["Außen zunehmend trocken", "Kleine Zweige beginnen zu knacken"],
    mistakes: ["Direkter Ventilator", "Dichtes Stapeln"],
    warnings: ["Ammoniak- oder Modergeruch", "Feuchte, weiche Stellen"],
    checks: [
      "Täglich Geruch geprüft",
      "Luft bewegt sich indirekt",
      "Temperatur protokolliert",
    ],
    icon: Droplets,
  },
  {
    slug: "lagerung",
    title: "Lagerung & Reifung",
    short:
      "Licht-, luft- und kindersichere Aufbewahrung erhält Qualität und Sicherheit.",
    duration: "2–8+ Wochen",
    goal: "Restfeuchte ausgleichen und sicher lagern.",
    light: "Dunkel",
    climate: "Kühl und stabil; Kondensation vermeiden",
    water: "Nicht relevant",
    nutrients: "Nicht relevant",
    traits: [
      "Gleichmäßige Konsistenz",
      "Unauffälliger, sortentypischer Geruch",
    ],
    mistakes: ["Zu feucht verschließen", "Unbeschriftet lagern"],
    warnings: ["Kondenswasser", "Muffiger Geruch oder sichtbarer Belag"],
    checks: [
      "Behälter beschriftet",
      "Kindersicher verwahrt",
      "Regelmäßig kontrolliert",
    ],
    icon: Archive,
  },
];

export const problems = [
  "ueberwaesserung|Überwässerung|Blätter hängen schwer, Substrat bleibt lange nass|Zu häufiges Gießen; geringe Drainage; zu großer Topf|hoch",
  "unterwaesserung|Unterwässerung|Schlaffe, dünne Blätter und sehr leichter Topf|Zu lange Trockenphase; hoher Verdunstungsbedarf|mittel",
  "lichtbrand|Lichtbrand|Aufgehellte Spitzen nahe der Lampe|Zu hohe Intensität oder zu geringer Abstand|hoch",
  "hitzestress|Hitzestress|Aufwärts gerollte Blattränder|Hohe Temperatur; geringe Luftbewegung|hoch",
  "kaeltestress|Kältestress|Langsames Wachstum, dunkle Verfärbung|Kalte Wurzelzone; starke Nachtschwankung|mittel",
  "ueberduengung|Überdüngung|Braune Spitzen, sehr dunkles Laub|Zu hohe Konzentration; Salzaufbau|hoch",
  "stickstoffmangel|Stickstoffmangel|Ältere Blätter vergilben gleichmäßig|Geringe Verfügbarkeit; pH-Sperre|mittel",
  "magnesiumprobleme|Magnesiumprobleme|Interkostale Aufhellung älterer Blätter|pH; unausgewogenes Nährstoffverhältnis|mittel",
  "kalziummangel|Kalziummangel|Punktförmige Schäden an neuem Wachstum|pH; geringe Verfügbarkeit; Transpiration|mittel",
  "falscher-ph|Falscher pH-Wert|Mehrere scheinbare Mängel gleichzeitig|Unpassender Wurzelzonen-pH; Messfehler|hoch",
  "schimmel|Schimmel|Graue, braune oder pelzige Stellen|Hohe Feuchte; stehende Luft; dichte Blüten|sofort",
  "mehltau|Mehltau|Weißer, abwischbarer Belag|Sporen; ungünstiges Klima|hoch",
  "trauermuecken|Trauermücken|Kleine Fliegen nahe feuchter Erde|Dauerfeuchtes Substrat|mittel",
  "spinnmilben|Spinnmilben|Helle Saugpunkte, feine Gespinste|Trockene Wärme; eingeschleppte Tiere|hoch",
  "thripse|Thripse|Silbrige Fraßspuren, schwarze Punkte|Eingeschleppter Befall|hoch",
  "blattlaeuse|Blattläuse|Kolonien an jungen Trieben|Eingeschleppter Befall|mittel",
  "wurzelprobleme|Wurzelprobleme|Wachstumsstopp und dauerhaft nasses Medium|Sauerstoffmangel; Krankheitserreger|hoch",
  "foxtailing|Foxtailing|Turmartige neue Blütenkelche|Genetik oder Licht-/Hitzestress|mittel",
  "zwittrige-merkmale|Zwittrige Merkmale|Staubblätter oder Pollensäcke an Blüten|Genetik; Lichtleck; starker Stress|hoch",
  "verzoegertes-wachstum|Verzögertes Wachstum|Wenig neuer Zuwachs|Wurzelraum; Klima; Licht; Genetik|niedrig",
].map((x) => {
  const [slug, title, symptoms, causes, urgency] = x.split("|");
  return { slug, title, symptoms, causes, urgency };
});

export const knowledge = [
  {
    slug: "einsteigerleitfaden",
    title: "Einsteigerleitfaden",
    topic: "Start",
    phase: "Alle",
    excerpt:
      "Die wichtigsten Entscheidungen für einen überschaubaren, legalen ersten Grow.",
  },
  {
    slug: "indoor-oder-outdoor",
    title: "Indoor oder Outdoor?",
    topic: "Anbauart",
    phase: "Planung",
    excerpt:
      "Kontrolle, Aufwand und natürliche Bedingungen ehrlich vergleichen.",
  },
  {
    slug: "autoflower-oder-photoperiodisch",
    title: "Autoflower oder photoperiodisch?",
    topic: "Genetik",
    phase: "Planung",
    excerpt:
      "Lebenszyklus, Steuerbarkeit und typische Unterschiede verständlich erklärt.",
  },
  {
    slug: "licht-verstehen",
    title: "Licht, PPFD und DLI",
    topic: "Licht",
    phase: "Wachstum",
    excerpt: "Messwerte einordnen, ohne Scheingenauigkeit oder starre Rezepte.",
  },
  {
    slug: "klima-und-vpd",
    title: "Klima und VPD",
    topic: "Klima",
    phase: "Alle",
    excerpt: "Wie Temperatur, Feuchte und Blattklima zusammenspielen.",
  },
  {
    slug: "richtig-giessen",
    title: "Richtig gießen lernen",
    topic: "Wasser",
    phase: "Alle",
    excerpt:
      "Topfgewicht, Substrat und Pflanzensignale statt starrer Kalender.",
  },
  {
    slug: "naehrstoffe",
    title: "Nährstoffe mit Augenmaß",
    topic: "Pflege",
    phase: "Wachstum",
    excerpt:
      "Makro- und Mikronährstoffe, EC, pH und typische Fehlinterpretationen.",
  },
  {
    slug: "hygiene",
    title: "Sauber und sicher arbeiten",
    topic: "Sicherheit",
    phase: "Alle",
    excerpt:
      "Prävention, Werkzeuge, elektrische Sicherheit und kindergeschützte Lagerung.",
  },
  {
    slug: "mythen",
    title: "Mythen & Missverständnisse",
    topic: "Grundlagen",
    phase: "Alle",
    excerpt:
      "Warum mehr Wasser, mehr Licht oder mehr Dünger selten automatisch besser ist.",
  },
];
