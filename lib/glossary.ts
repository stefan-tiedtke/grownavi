export type GlossaryCategory =
  "Pflanzenaufbau" | "Blüte & Fortpflanzung" | "Inhaltsstoffe" | "Anbaupraxis";

export type GlossaryTerm = {
  term: string;
  aliases?: string;
  category: GlossaryCategory;
  location?: string;
  explanation: string;
};

export const glossaryTerms: GlossaryTerm[] = (
  [
    {
      term: "Abluft",
      category: "Anbaupraxis",
      location: "Im oberen Bereich eines geschlossenen Anbauraums",
      explanation:
        "Führt warme und feuchte Luft kontrolliert aus einem Innenraum ab. Zuluft ersetzt die abgeführte Luft. Eine passende Abluft hilft, Temperatur und Feuchte stabiler zu halten.",
    },
    {
      term: "Apikalmeristem",
      aliases: "Triebspitze, Sprossmeristem",
      category: "Pflanzenaufbau",
      location: "An der Spitze des Haupttriebs und der Seitentriebe",
      explanation:
        "Teilungsaktives Gewebe, aus dem neue Blätter, Knoten und Triebe entstehen. Während der Blüte entwickeln sich an den Triebspitzen die oberen Blütenstände.",
    },
    {
      term: "Blüte",
      aliases: "Einzelblüte",
      category: "Blüte & Fortpflanzung",
      location:
        "Innerhalb eines Blütenstands, meist an Knoten und Triebspitzen",
      explanation:
        "Die einzelne weibliche Cannabisblüte ist sehr klein. Sie enthält unter anderem den Fruchtknoten und das Pistill und wird von einem harzreichen Hüllblatt umschlossen.",
    },
    {
      term: "Blütenstand",
      aliases: "Bud, Flower",
      category: "Blüte & Fortpflanzung",
      location: "An Knoten sowie an den Enden von Haupt- und Seitentrieben",
      explanation:
        "Eine dichte Gruppe vieler kleiner weiblicher Blüten mit Hüllblättern und kleinen Blättern. Im Alltag wird der gesamte Blütenstand meist als Bud oder Blüte bezeichnet.",
    },
    {
      term: "Braktee",
      aliases: "Tragblatt, Hüllblatt, im Grow-Sprachgebrauch oft „Calyx“",
      category: "Blüte & Fortpflanzung",
      location: "Direkt um die einzelne weibliche Blüte und ihren Fruchtknoten",
      explanation:
        "Ein kleines, blattähnliches Organ, das die weibliche Blüte umgibt. Auf diesen Hüllblättern sitzen besonders viele Drüsentrichome. Der häufig verwendete Begriff „Calyx“ bezeichnet botanisch nicht exakt dasselbe.",
    },
    {
      term: "Cannabinoide",
      aliases: "zum Beispiel THC und CBD",
      category: "Inhaltsstoffe",
      location: "Vor allem im Sekret glandulärer Trichome",
      explanation:
        "Eine Gruppe pflanzlicher Inhaltsstoffe. Ihre Zusammensetzung hängt unter anderem von Genetik, Pflanzenentwicklung und Umwelt ab. Ein sichtbarer Harzbesatz erlaubt keine genaue Aussage über einzelne Gehalte.",
    },
    {
      term: "Cola",
      aliases: "Hauptblüte, Top-Bud",
      category: "Blüte & Fortpflanzung",
      location:
        "An der Spitze des Haupttriebs oder eines kräftigen Seitentriebs",
      explanation:
        "Grow-Begriff für einen größeren, zusammenhängenden oberen Blütenstand. Eine Pflanze kann neben der Hauptcola mehrere kleinere Colas an Seitentrieben bilden.",
    },
    {
      term: "DLI",
      aliases: "Daily Light Integral, tägliche Lichtmenge",
      category: "Anbaupraxis",
      explanation:
        "Beschreibt die über einen ganzen Tag empfangene Menge photosynthetisch nutzbaren Lichts. DLI verbindet Lichtintensität und Beleuchtungsdauer.",
    },
    {
      term: "EC",
      aliases: "elektrische Leitfähigkeit",
      category: "Anbaupraxis",
      explanation:
        "Messwert für die Leitfähigkeit einer Lösung und damit eine indirekte Orientierung für gelöste Salze. Der Wert ist nur zusammen mit Wasserqualität, Anbaumethode und Pflanzenreaktion sinnvoll.",
    },
    {
      term: "Fächerblatt",
      aliases: "Fan Leaf",
      category: "Pflanzenaufbau",
      location: "Entlang des Hauptstamms und der Seitentriebe",
      explanation:
        "Großes, lang gestieltes Blatt mit mehreren gezackten Blattfingern. Fächerblätter leisten einen wichtigen Beitrag zur Photosynthese und zeigen häufig früh sichtbare Stressreaktionen.",
    },
    {
      term: "Fruchtknoten",
      aliases: "Ovar",
      category: "Blüte & Fortpflanzung",
      location: "Im Inneren der weiblichen Einzelblüte",
      explanation:
        "Unterer Teil des Pistills, der die Samenanlage enthält. Nach erfolgreicher Bestäubung kann sich daraus eine Frucht mit Samen entwickeln.",
    },
    {
      term: "Internodie",
      aliases: "Internodium, Zwischenknotenstück",
      category: "Pflanzenaufbau",
      location: "Stammabschnitt zwischen zwei Nodien",
      explanation:
        "Der Abstand zwischen zwei aufeinanderfolgenden Knoten. Seine Länge wird von Genetik, Entwicklungsphase, Licht und weiteren Umweltbedingungen beeinflusst.",
    },
    {
      term: "Keimblätter",
      aliases: "Kotyledonen",
      category: "Pflanzenaufbau",
      location: "Als erstes rundliches Blattpaar am jungen Keimling",
      explanation:
        "Im Samen angelegte Blätter, die den Keimling zu Beginn versorgen. Sie sehen glatter und einfacher aus als die später folgenden gezackten Laubblätter.",
    },
    {
      term: "Narbe",
      aliases: "Stigma; sichtbare „Blütenhaare“",
      category: "Blüte & Fortpflanzung",
      location: "Ragt paarweise aus der weiblichen Einzelblüte heraus",
      explanation:
        "Pollenaufnehmender Teil des Pistills. Die fadenförmigen Narbenäste sind anfangs häufig hell und verändern mit der Entwicklung ihre Farbe. Umgangssprachlich werden sie oft ungenau als Pistillen bezeichnet.",
    },
    {
      term: "Nodie",
      aliases: "Knoten, Node",
      category: "Pflanzenaufbau",
      location: "Verbindungspunkt von Stamm, Blattstiel und Seitentrieb",
      explanation:
        "Stelle am Spross, an der Blätter und neue Seitentriebe entstehen. Später können sich dort auch Vorblüten und Blütenstände entwickeln.",
    },
    {
      term: "pH-Wert",
      category: "Anbaupraxis",
      explanation:
        "Beschreibt, wie sauer oder basisch eine Lösung ist. Er beeinflusst die Verfügbarkeit von Nährstoffen, muss aber passend zur Anbaumethode und mit einem kalibrierten Gerät bewertet werden.",
    },
    {
      term: "Pistill",
      aliases: "weibliches Blütenorgan",
      category: "Blüte & Fortpflanzung",
      location: "Im Inneren der weiblichen Einzelblüte",
      explanation:
        "Das gesamte weibliche Fortpflanzungsorgan aus Fruchtknoten, Griffelbereich und Narben. Sichtbar aus der Blüte heraus ragen vor allem die beiden Narbenäste.",
    },
    {
      term: "PPFD",
      aliases: "photosynthetische Photonenflussdichte",
      category: "Anbaupraxis",
      explanation:
        "Gibt an, wie viele photosynthetisch nutzbare Photonen pro Sekunde auf einer Fläche eintreffen. Ein PPFD-Wert gilt nur am jeweiligen Messpunkt.",
    },
    {
      term: "Seitentrieb",
      aliases: "Ast, Seitenast",
      category: "Pflanzenaufbau",
      location: "Entspringt an einer Nodie seitlich aus dem Hauptstamm",
      explanation:
        "Seitliche Sprossachse mit eigenen Blättern, Knoten und Triebspitzen. Kräftige Seitentriebe können später eigene Colas tragen.",
    },
    {
      term: "Stamm",
      aliases: "Haupttrieb, Sprossachse",
      category: "Pflanzenaufbau",
      location: "Zentrale Achse zwischen Wurzeln und Triebspitze",
      explanation:
        "Trägt Blätter und Seitentriebe und verbindet die oberirdischen Pflanzenteile mit den Wurzeln. In seinen Leitgeweben werden Wasser, Mineralstoffe und Assimilate transportiert.",
    },
    {
      term: "Substrat",
      aliases: "Wurzelmedium",
      category: "Anbaupraxis",
      location: "Im Topf oder Beet rund um die Wurzeln",
      explanation:
        "Material, in dem die Wurzeln wachsen – beispielsweise Erde oder Kokos. Struktur, Wasserspeicherung, Luftanteil und Nährstoffgehalt beeinflussen den Gieß- und Pflegebedarf.",
    },
    {
      term: "Terpene",
      category: "Inhaltsstoffe",
      location: "Vor allem im Sekret glandulärer Trichome",
      explanation:
        "Flüchtige Aromastoffe, die unter anderem zu zitrischen, erdigen, fruchtigen oder harzigen Geruchsprofilen beitragen. Geruch allein erlaubt keine zuverlässige Vorhersage der Wirkung.",
    },
    {
      term: "Trichome",
      aliases: "Pflanzenhaare, Harzdrüsen bei glandulären Formen",
      category: "Inhaltsstoffe",
      location: "Besonders dicht auf Hüllblättern, Blüten und Zuckerblättern",
      explanation:
        "Feine Auswüchse der Pflanzenoberfläche. Glanduläre Trichome besitzen Drüsenköpfe, in denen Sekrete mit Cannabinoiden und Terpenen gebildet und gespeichert werden. Daneben gibt es nichtdrüsige Trichome.",
    },
    {
      term: "VPD",
      aliases: "Vapor Pressure Deficit, Dampfdruckdefizit",
      category: "Anbaupraxis",
      explanation:
        "Orientierungswert, der Temperatur und Feuchte gemeinsam betrachtet. Er beschreibt vereinfacht das Trocknungspotenzial der Luft, ersetzt aber nicht die Beobachtung von Blattklima und Pflanzenreaktion.",
    },
    {
      term: "Wurzeln",
      category: "Pflanzenaufbau",
      location: "Unterhalb des Substrats",
      explanation:
        "Verankern die Pflanze und nehmen Wasser sowie gelöste Mineralstoffe auf. Ein luftreicher, weder dauerhaft nasser noch vollständig ausgetrockneter Wurzelraum unterstützt ihre Funktion.",
    },
    {
      term: "Zuckerblatt",
      aliases: "Sugar Leaf",
      category: "Pflanzenaufbau",
      location: "Ragt direkt aus einem Blütenstand heraus",
      explanation:
        "Kleines Blatt innerhalb oder unmittelbar an einem Bud. Der dichte Trichombesatz kann wie eine Zuckerschicht wirken und erklärt den gebräuchlichen Namen.",
    },
  ] satisfies GlossaryTerm[]
).sort((a, b) => a.term.localeCompare(b.term, "de"));
