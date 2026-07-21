import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { knowledge } from "@/lib/content";
import { Notice } from "@/components/ui";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function generateStaticParams() {
  return knowledge.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = knowledge.find((item) => item.slug === slug);
  return {
    title: article?.title,
    description: article?.excerpt,
    alternates: { canonical: `/wissen/${slug}` },
    openGraph: {
      title: article?.title,
      description: article?.excerpt,
      type: "article",
      url: `/wissen/${slug}`,
    },
  };
}

const sections: Record<string, [string, string][]> = {
  einsteigerleitfaden: [
    [
      "Erst ankommen, dann anfangen",
      "Ein erster Grow darf überschaubar sein. Du musst nicht jedes Fachwort kennen und nicht vom ersten Tag an perfekte Werte erreichen. Beginne mit einem legalen, sicheren Standort, einer passenden Genetik und einer Ausstattung, die du wirklich verstehst. Eine einzelne aufmerksam beobachtete Pflanze vermittelt oft mehr als ein zu großes Projekt, das dich ständig unter Zeitdruck setzt.",
    ],
    [
      "Ein einfacher Rahmen gibt Sicherheit",
      "Kläre vor dem Start die für dich geltenden Regeln, den Schutz vor Kindern und Haustieren sowie die sichere Nutzung von Strom und Wasser. Überlege außerdem, wie viel Platz, Zeit und Ruhe du im Alltag tatsächlich hast. Wenn diese Grundlagen stehen, fühlt sich der weitere Weg weniger wie eine Liste technischer Aufgaben und mehr wie eine gut vorbereitete Routine an.",
    ],
    [
      "Die Pflanze lesen lernen",
      "Blätter, neue Triebe, Topfgewicht und Wachstumstempo erzählen dir laufend, wie es der Pflanze geht. Nimm dir regelmäßig einen ruhigen Moment zum Hinschauen, bevor du etwas veränderst. Fotos und kurze Notizen helfen dabei, Entwicklungen über mehrere Tage zu erkennen – denn nicht jede kleine Veränderung verlangt sofort nach einer Korrektur.",
    ],
    [
      "Weniger Stellschrauben, mehr Klarheit",
      "Gerade am Anfang ist Zurückhaltung eine Stärke. Verändere möglichst nur einen Faktor zurzeit und gib der Pflanze Gelegenheit zu reagieren. Wer gleichzeitig Licht, Gießen, Dünger und Klima anpasst, kann später kaum erkennen, was geholfen oder zusätzlichen Stress ausgelöst hat.",
    ],
    [
      "Fehler gehören zum Lernen",
      "Ein hängendes Blatt oder eine vergilbte Spitze bedeutet nicht, dass dein gesamter Grow misslungen ist. Viele Schwierigkeiten lassen sich durch aufmerksame Beobachtung und kleine, gut begründete Schritte auffangen. Ein gutes erstes Ziel ist deshalb nicht Perfektion, sondern eine sichere Routine und ein wachsendes Verständnis für Zusammenhänge.",
    ],
  ],
  "indoor-oder-outdoor": [
    [
      "Die passende Umgebung beginnt bei deinem Alltag",
      "Indoor und Outdoor können beide gut funktionieren, stellen aber sehr unterschiedliche Anforderungen. Frage dich nicht nur, welche Methode theoretisch mehr Kontrolle bietet, sondern auch, welche zuverlässig zu deinem Wohnort, deinem Zeitbudget und deinen Möglichkeiten passt. Die beste Entscheidung ist die, die du sicher und aufmerksam begleiten kannst.",
    ],
    [
      "Indoor: ein geschützter, steuerbarer Raum",
      "Im Innenbereich lassen sich Lichtdauer, Temperatur und Luftbewegung gezielter beeinflussen. Das kann unabhängig von Jahreszeit und Wetter für gleichmäßigere Bedingungen sorgen. Dafür brauchst du geeignete Technik, eine sichere Stromversorgung, zuverlässige Abluft und regelmäßige Kontrollen. Auch Energieverbrauch, Geräusche und Wärmeentwicklung gehören ehrlich in die Planung.",
    ],
    [
      "Outdoor: mit Sonne und Jahreszeit wachsen",
      "Draußen übernimmt die Sonne einen großen Teil der Arbeit, und der natürliche Rhythmus kann sehr unmittelbar erlebbar sein. Gleichzeitig bestimmen Standort, Saison, Regen, Hitze, Wind und Schädlingsdruck stärker mit. Achte besonders auf Privatsphäre, die lokale Rechtslage und einen Platz, der für Kinder, Haustiere und unbefugte Personen nicht zugänglich ist.",
    ],
    [
      "Ein Gewächshaus als Zwischenweg",
      "Ein Gewächshaus schützt teilweise vor starkem Regen und Wind und nutzt weiterhin natürliches Licht. Es ist jedoch kein automatisch stabiles Klima: An sonnigen Tagen kann sich die Luft rasch aufheizen, während hohe Feuchte und wenig Luftaustausch Krankheiten begünstigen. Gute Lüftung und regelmäßiges Messen bleiben daher wichtig.",
    ],
    [
      "Eine Entscheidung ohne Gewinner und Verlierer",
      "Es gibt keine grundsätzlich überlegene Anbauart. Ein kleiner, gut belüfteter Indoor-Bereich kann sinnvoller sein als ein ungeeigneter Gartenplatz – und ein sicherer, sonniger Außenstandort kann Technik weitgehend überflüssig machen. Vergleiche Kontrolle, Aufwand, Sicherheit und Freude an der täglichen Pflege als Gesamtbild.",
    ],
  ],
  "autoflower-oder-photoperiodisch": [
    [
      "Zwei Wege durch denselben Lebenszyklus",
      "Beide Pflanzentypen durchlaufen Keimung, Wachstum, Blüte und Reife. Der wichtigste Unterschied liegt darin, wodurch der Übergang zur Blüte ausgelöst wird. Diese Eigenschaft beeinflusst Zeitplanung, Größe und den Spielraum, den du nach kleinen Pflegefehlern hast.",
    ],
    [
      "Photoperiodische Pflanzen bieten mehr Steuerbarkeit",
      "Photoperiodische Pflanzen beginnen ihre Blüte, wenn sich die Länge der ununterbrochenen Dunkelphase verändert. Indoor lässt sich dadurch die Wachstumsdauer flexibler planen. Das schafft Zeit für Erholung und Formgebung, verlangt aber einen zuverlässigen Lichtzyklus ohne störende Lichtquellen während der Dunkelphase.",
    ],
    [
      "Autoflowering Pflanzen folgen ihrer inneren Uhr",
      "Autoflowering Genetiken wechseln altersabhängig in die Blüte. Ihr häufig kompakterer Lebenszyklus kann bei begrenztem Platz oder einer kurzen Outdoor-Saison interessant sein. Weil die Uhr weiterläuft, bleibt nach starkem Stress meist weniger Zeit für Erholung. Eine ruhige, schonende Pflege von Beginn an ist deshalb besonders wertvoll.",
    ],
    [
      "Etiketten sind nur ein Teil der Geschichte",
      "Bezeichnungen wie Indica, Sativa, Hybrid oder Autoflower geben Orientierung, beschreiben aber nicht jeden einzelnen Phänotyp zuverlässig. Herkunft, Zuchtlinie und individuelle Ausprägung wirken ebenso mit wie Licht, Wurzelraum und Klima. Seriöse Angaben helfen bei der Auswahl, ersetzen jedoch nicht die Beobachtung der konkreten Pflanze.",
    ],
    [
      "Was passt besser zu dir?",
      "Wenn du zeitlich flexibel bleiben und auf Entwicklungen reagieren möchtest, kann eine photoperiodische Pflanze angenehm sein. Wenn ein klar begrenzter Zeitraum und kompakter Wuchs wichtiger sind, kann eine Autoflower passen. Entscheide nach Standort und Alltag – nicht nach dem Versprechen, eine Variante sei grundsätzlich einfacher.",
    ],
  ],
  "cannabis-training-lst-hst": [
    [
      "Training verändert die Form – nicht die Grundbedürfnisse",
      "Beim Pflanzentraining werden Triebe gelenkt oder gezielt zurückgeschnitten, damit eine flachere, gleichmäßigere Krone entsteht. Dadurch können mehrere Triebspitzen ähnlich viel Licht erhalten und der vorhandene Platz lässt sich besser nutzen. Training ersetzt jedoch weder gesunde Wurzeln noch passendes Licht, Klima und einen ruhigen Gießrhythmus. Eine untrainierte, gesunde Pflanze kann erfolgreicher sein als eine überforderte Pflanze mit vielen Eingriffen.",
    ],
    [
      "Low Stress Training: sanft in die Breite führen",
      "Low Stress Training, kurz LST, formt die Pflanze ohne größere Schnittwunden. Beim Herunterbinden werden Haupt- und Seitentriebe vorsichtig gebogen und locker fixiert. Leaf Tucking legt große Blätter behutsam hinter junge Triebe, statt sie zu entfernen. Bei einem SCROG werden wachsende Triebe unter oder durch ein Netz verteilt. Gemeinsam ist diesen Methoden, dass sie regelmäßig in kleinen Schritten erfolgen und kein starkes Knicken oder Quetschen benötigen.",
    ],
    [
      "High Stress Training: bewusst eingreifen",
      "High Stress Training, kurz HST, entfernt oder verletzt Pflanzengewebe. Beim Topping wird die dominante Triebspitze entfernt, beim FIM nur ein Teil davon. Supercropping formt einen Trieb durch kontrolliertes Weichdrücken und Umlegen. Lollipopping entfernt schwache untere Triebe; Defoliation ausgewählte Blätter. Mainlining oder Manifolding verbindet wiederholtes Topping mit anschließendem Formen. Solche Eingriffe brauchen eine vitale Pflanze, sauberes Werkzeug und genügend Zeit zur Erholung.",
    ],
    [
      "Autoflower: Die innere Uhr läuft weiter",
      "Autoflowering Pflanzen beginnen genetisch gesteuert und weitgehend unabhängig von der Tageslänge mit der Blüte. Ihre Wachstumsphase lässt sich nach einem stärkeren Eingriff nicht einfach verlängern. Deshalb sind sanftes Herunterbinden, behutsames Spreizen und Leaf Tucking meist die risikoärmere Wahl. Topping, starke Entlaubung, Supercropping und Mainlining können funktionieren, lassen aber deutlich weniger Spielraum für Fehler und sind für Einsteiger nicht zu empfehlen.",
    ],
    [
      "Photoperiodisch: mehr Zeit für Erholung und Formgebung",
      "Photoperiodische Pflanzen lassen sich unter langen Tagen länger im vegetativen Wachstum halten. Das eröffnet mehr Zeit für Topping, SCROG, Lollipopping oder kombinierte Methoden und erlaubt, die Blüte erst nach sichtbarer Erholung einzuleiten. Auch hier gilt: nicht mehrere starke Eingriffe gleichzeitig vornehmen, nicht an geschwächten Pflanzen arbeiten und größere Schnittmaßnahmen möglichst nicht bis tief in die Blüte fortsetzen.",
    ],
    [
      "Mehr Training bedeutet nicht automatisch mehr Ertrag",
      "Die wissenschaftliche Datenlage ist noch begrenzt und Ergebnisse hängen stark von Genetik, Pflanzengröße, Dichte und Kulturbedingungen ab. In einer Untersuchung großer photoperiodischer medizinischer Cannabispflanzen erhöhte zweimaliges Beschneiden den Blütenertrag, während einfaches Beschneiden, Entlaubung und das Entfernen unterer Bereiche keinen sicheren Mehrertrag brachten. Extrem starkes Entfernen von Zweigen senkte den Ertrag drastisch. Die passende Intensität ist deshalb wichtiger als die Anzahl der Methoden.",
    ],
  ],
  "licht-verstehen": [
    [
      "Licht ist Nahrung – aber kein Wettbewerb",
      "Pflanzen brauchen Licht für die Photosynthese, doch mehr Intensität führt nicht unbegrenzt zu mehr Wachstum. Entscheidend ist ein stimmiges Zusammenspiel aus Licht, Temperatur, Wasser, Nährstoffversorgung und gesunden Wurzeln. Lichtwerte helfen dir bei der Orientierung; die Reaktion der Pflanze bleibt der wichtigste Teil des Bildes.",
    ],
    [
      "PPFD: eine Momentaufnahme am Messpunkt",
      "PPFD beschreibt, wie viele photosynthetisch nutzbare Photonen pro Sekunde auf einer Fläche ankommen. Der Wert gilt immer nur dort, wo gemessen wurde. Mitte, Rand und verschiedene Höhen können deutlich voneinander abweichen. Mehrere Messpunkte ergeben deshalb ein ehrlicheres Bild als ein einzelner Spitzenwert.",
    ],
    [
      "DLI: die Lichtmenge eines ganzen Tages",
      "Der Daily Light Integral verbindet Intensität und Beleuchtungsdauer. Eine moderate Intensität über längere Zeit kann rechnerisch eine ähnliche Tagesmenge liefern wie stärkeres Licht über einen kürzeren Zeitraum. Für die Pflanze sind beide Situationen trotzdem nicht vollständig gleich, weil Wärme, Erholung und Photoperiode ebenfalls eine Rolle spielen.",
    ],
    [
      "Sanft steigern und aufmerksam bleiben",
      "Junge oder frisch umgestellte Pflanzen profitieren von einer schrittweisen Anpassung. Aufhellungen nahe der Lichtquelle, hochgerollte Blattränder oder ungewöhnlich warme Blattoberflächen können auf zu viel Belastung hinweisen. Lange Internodien und schwacher, suchender Wuchs können dagegen zu wenig Licht anzeigen – aber auch hier sollten Klima und Genetik mitgedacht werden.",
    ],
    [
      "Gleichmäßigkeit ist oft wertvoller als ein Rekordwert",
      "Eine gut ausgeleuchtete Fläche ohne extreme helle und dunkle Zonen erleichtert gleichmäßiges Wachstum. Prüfe Abstand und Verteilung regelmäßig, besonders wenn die Pflanzen an Höhe gewinnen. Kleine, dokumentierte Anpassungen sind meist hilfreicher als häufige große Sprünge.",
    ],
  ],
  "klima-und-vpd": [
    [
      "Klima ist das tägliche Grundgefühl der Pflanze",
      "Temperatur und Luftfeuchte begleiten jede Phase und beeinflussen, wie leicht die Pflanze Wasser abgeben und aufnehmen kann. Statt einem einzelnen Idealwert hinterherzulaufen, lohnt sich der Blick auf stabile Verläufe, Tag-Nacht-Unterschiede und kleine Klimazonen zwischen dichtem Laub.",
    ],
    [
      "Temperatur und Feuchte gemeinsam lesen",
      "Relative Luftfeuchte verändert sich mit der Temperatur. Warme Luft kann mehr Wasserdampf aufnehmen als kühle, weshalb derselbe Feuchtegehalt bei sinkender Temperatur plötzlich als deutlich höhere relative Feuchte erscheint. Das erklärt, warum die Dunkelphase besondere Aufmerksamkeit verdient.",
    ],
    [
      "VPD als hilfreicher Kompass",
      "VPD beschreibt vereinfacht den Unterschied zwischen der möglichen und der tatsächlich vorhandenen Wasserdampfmenge. Der Wert kann helfen, Temperatur und Feuchte gemeinsam einzuordnen. Er ist jedoch kein exaktes Steuerkommando: Blattoberflächentemperatur, Messposition, Entwicklungsphase und Sorte verändern die Bedeutung.",
    ],
    [
      "Luftbewegung darf sanft sein",
      "Eine leichte, indirekte Bewegung hilft, feuchte Luft zwischen Blättern auszutauschen und Temperaturunterschiede auszugleichen. Die Blätter dürfen sich dabei dezent bewegen, sollten aber nicht dauerhaft stark flattern. Ein Ventilator direkt auf dieselbe Stelle kann austrocknen und Windstress verursachen.",
    ],
    [
      "Miss dort, wo die Pflanze lebt",
      "Ein Sensor an der Wand erzählt wenig über das Klima im Blätterdach. Miss möglichst auf Pflanzenhöhe und gelegentlich an mehreren Stellen. Notiere auch Werte während der Dunkelphase. So erkennst du Muster und Kondensationsrisiken, bevor sie zu einem sichtbaren Problem werden.",
    ],
  ],
  "richtig-giessen": [
    [
      "Gießen ist ein Rhythmus, kein Kalendereintrag",
      "Der Wasserbedarf verändert sich mit Pflanzengröße, Wurzelraum, Licht, Temperatur und Substrat. Deshalb kann ein starrer Plan wie ‚alle zwei Tage‘ schnell danebenliegen. Ein gutes Gießgefühl entsteht, wenn du dieselben wenigen Hinweise immer wieder vergleichst.",
    ],
    [
      "Der Topf ist dein einfachstes Messinstrument",
      "Heb den Topf nach dem Gießen und später erneut vorsichtig an. Der Gewichtsunterschied vermittelt mit der Zeit ein überraschend verlässliches Gefühl für die verbleibende Feuchte. Ergänze diesen Eindruck durch die Substratoberfläche, Drainage, Blattspannung und das bisherige Wachstum.",
    ],
    [
      "Langsam und gleichmäßig bewässern",
      "Gib Wasser in Ruhe und möglichst gleichmäßig über die nutzbare Oberfläche. Sehr trockenes Substrat kann Wasser zunächst abweisen oder an den Rändern vorbeileiten. Kleine Pausen zwischen den Gießschritten helfen, dass sich die Feuchtigkeit besser verteilt, ohne den Wurzelraum dauerhaft zu sättigen.",
    ],
    [
      "Über- und Unterwässerung auseinanderhalten",
      "Beide Situationen können hängende Blätter verursachen. Ein schwerer Topf, lange nasses Substrat und langsames Wachstum sprechen eher für zu häufiges Gießen. Ein sehr leichter Topf und rasche Erholung nach angemessener Bewässerung deuten eher auf Trockenheit. Der Verlauf ist aussagekräftiger als ein einzelnes Foto.",
    ],
    [
      "Messwerte sinnvoll einordnen",
      "pH- und EC-Werte können je nach Wasser, Substrat und Anbaumethode nützlich sein, brauchen aber kalibrierte Geräte und Kontext. Ein einzelner Drain-Wert ist noch keine Diagnose. Prüfe zuerst Gießrhythmus, Wurzelgesundheit und Messfehler, bevor du größere Korrekturen vornimmst.",
    ],
  ],
  naehrstoffe: [
    [
      "Nährstoffe begleiten Wachstum – sie erzwingen es nicht",
      "Eine Pflanze kann nur so gut wachsen, wie Licht, Klima, Wasser und Wurzeln es gemeinsam erlauben. Dünger ist deshalb kein Beschleuniger für jede Situation. Eine maßvolle Versorgung und aufmerksame Beobachtung sind meist erfolgreicher als der Versuch, jedes kleine Signal mit einer zusätzlichen Dosis zu beantworten.",
    ],
    [
      "Makro- und Mikronährstoffe arbeiten als Team",
      "Stickstoff, Phosphor und Kalium werden in größeren Mengen benötigt. Calcium, Magnesium und verschiedene Spurenelemente sind ebenfalls wichtig, auch wenn der Bedarf kleiner ist. Kein einzelnes Element arbeitet isoliert; Verhältnis, Verfügbarkeit und Wurzelgesundheit entscheiden gemeinsam.",
    ],
    [
      "Organisch und mineralisch sind unterschiedliche Systeme",
      "Organische Versorgung baut stärker auf Bodenleben und eine schrittweise Freisetzung. Mineralische Nährstoffe stehen direkter zur Verfügung und lassen sich genauer dosieren, reagieren aber schneller auf Überdosierung und Salzaufbau. Beide Wege können funktionieren, wenn sie zum Substrat und zur eigenen Routine passen.",
    ],
    [
      "Erst die Ursache prüfen, dann korrigieren",
      "Gelbe Blätter, Flecken oder langsamer Wuchs beweisen noch keinen bestimmten Mangel. Falsches Gießen, ungeeigneter pH, beschädigte Wurzeln, Lichtstress und natürliche Alterung können ähnlich aussehen. Prüfe zuerst die Grundlagen und beobachte vor allem neues Wachstum, bevor du die Versorgung veränderst.",
    ],
    [
      "Kleine Schritte lassen sich besser lesen",
      "Beginne bei unbekannter Reaktion zurückhaltend und ändere nicht mehrere Produkte gleichzeitig. Dokumentiere Menge, Zeitpunkt und sichtbare Entwicklung. Bereits geschädigte Blätter werden oft nicht wieder makellos; entscheidend ist, ob neue Triebe gesund erscheinen und sich die Verschlechterung verlangsamt.",
    ],
  ],
  hygiene: [
    [
      "Sauberkeit darf unkompliziert sein",
      "Ein hygienischer Anbaubereich muss nicht steril wirken. Klare, wiederholbare Routinen reichen oft aus: Hände waschen, abgestorbenes Material entfernen, verschüttetes Wasser aufnehmen und Werkzeuge reinigen. Je selbstverständlicher diese Schritte werden, desto weniger Aufwand fühlen sie sich an.",
    ],
    [
      "Probleme gar nicht erst mitbringen",
      "Viele Schädlinge und Krankheitserreger gelangen über neue Pflanzen, Kleidung, Haustiere oder gebrauchte Gegenstände in den Bereich. Beobachte neue Pflanzen zunächst getrennt und prüfe besonders Blattunterseiten. Verwende saubere Behälter und lagere Substrat trocken und geschützt.",
    ],
    [
      "Werkzeuge und Arbeitsflächen",
      "Reinige Scheren und andere Werkzeuge vor und nach dem Einsatz, besonders beim Wechsel zwischen Pflanzen. Beschädigte oder auffällige Pflanzenteile sollten nicht über gesunde Bereiche gelegt werden. Eine freie, gut beleuchtete Arbeitsfläche macht sauberes Arbeiten leichter.",
    ],
    [
      "Wasser und Strom bleiben getrennt",
      "Elektrische Sicherheit verdient dieselbe Aufmerksamkeit wie die Pflanze. Nutze geeignete, unbeschädigte Komponenten, beachte Lastgrenzen und führe Kabel so, dass kein Wasser hineinlaufen kann. Steckverbindungen gehören erhöht und außerhalb möglicher Gieß- oder Kondensationsbereiche.",
    ],
    [
      "Sicherheit endet nicht mit der Ernte",
      "Lagere Ernte dunkel, beschriftet und zuverlässig verschlossen. Kinder, Jugendliche, Haustiere und unbefugte Personen dürfen keinen Zugang haben. Prüfe Behälter regelmäßig auf Kondensation, auffälligen Geruch oder sichtbaren Belag und verwende verdächtiges Material im Zweifel nicht.",
    ],
  ],
  mythen: [
    [
      "Warum einfache Antworten so verlockend sind",
      "Beim Anbau treffen Biologie, Technik und viele persönliche Erfahrungen aufeinander. Daraus entstehen Regeln, die überzeugend klingen, aber oft nur in einer bestimmten Situation funktioniert haben. Gute Orientierung erkennt man daran, dass sie Zusammenhänge erklärt und Unsicherheit zulässt.",
    ],
    [
      "Mehr Dünger bedeutet nicht automatisch mehr Ertrag",
      "Wachstum richtet sich nach dem begrenzenden Faktor. Wenn Licht, Wurzeln oder Klima nicht passen, löst eine höhere Nährstoffdosis das Problem nicht. Überversorgung kann Wurzeln belasten, Blattspitzen schädigen und weitere Symptome erzeugen, die anschließend fälschlich als neuer Mangel gelesen werden.",
    ],
    [
      "Ein gelbes Blatt ist noch keine Diagnose",
      "Gelbfärbung kann durch natürliche Alterung, Gießfehler, ungeeigneten pH, Licht, Wurzelschäden oder Nährstoffverfügbarkeit entstehen. Entscheidend sind Position, Muster und Verlauf. Schau besonders darauf, ob neues Wachstum betroffen ist und welche Bedingungen in den Tagen zuvor herrschten.",
    ],
    [
      "Auch beim Licht ist mehr nicht grenzenlos besser",
      "Starke Beleuchtung kann nur genutzt werden, wenn die übrigen Bedingungen mithalten. Zu viel Intensität erzeugt Stress und zusätzliche Wärme. Eine gleichmäßige, zur Entwicklungsphase passende Beleuchtung ist oft wertvoller als ein hoher Messwert direkt unter der Lampe.",
    ],
    [
      "Der Kalender kennt den Erntetag nicht",
      "Wochenangaben von Züchtern oder aus Erfahrungsberichten sind nützliche Zeitfenster, aber keine Termine. Genetik, Phänotyp und Umgebung verändern den Verlauf. Beurteile mehrere Blütenbereiche und mehrere Reifezeichen und prüfe gleichzeitig sorgfältig auf Schimmel oder andere Schäden.",
    ],
    [
      "Beobachtung schlägt Geheimrezept",
      "Wenn ein Tipp absolute Sicherheit verspricht, lohnt sich ein zweiter Blick. Dokumentiere deine eigenen Bedingungen, verändere jeweils nur wenig und bewerte die Reaktion über mehrere Tage. So entsteht belastbares Wissen, das wirklich zu deinem Standort und deiner Pflanze passt.",
    ],
  ],
};

const checklist = [
  "Rahmenbedingungen und Ausgangswerte kurz dokumentieren",
  "Vor einer Änderung mehrere mögliche Ursachen prüfen",
  "Möglichst nur eine Stellschraube zurzeit verändern",
  "Die Reaktion über mehrere Tage beobachten",
  "Neues Wachstum stärker gewichten als alte Schäden",
];

const trainingMethods = {
  lst: [
    ["Herunterbinden", "Triebe vorsichtig biegen und locker fixieren"],
    ["Leaf Tucking", "Große Blätter hinter junge Triebe legen"],
    ["Sanftes Spreizen", "Seitentriebe schrittweise auseinanderführen"],
    ["SCROG", "Triebe zu einer gleichmäßigen Fläche verteilen"],
  ],
  hst: [
    ["Topping", "Die dominante Triebspitze gezielt entfernen"],
    ["FIM", "Nur einen Teil der jungen Triebspitze entfernen"],
    ["Supercropping", "Einen Trieb kontrolliert weichdrücken und umlegen"],
    ["Lollipopping", "Schwache untere Triebe und Blätter entfernen"],
    ["Defoliation", "Ausgewählte große Blätter entfernen"],
    ["Mainlining", "Topping und symmetrische Formgebung kombinieren"],
  ],
};

const trainingSuitability = [
  ["Sanftes Herunterbinden", "Gut geeignet", "Gut geeignet"],
  ["Leaf Tucking", "Gut geeignet", "Gut geeignet"],
  ["Vorsichtiges SCROG", "Bedingt geeignet", "Sehr gut geeignet"],
  ["Topping", "Eher riskant", "Gut geeignet"],
  ["FIM", "Eher riskant", "Gut geeignet"],
  ["Supercropping", "Eher vermeiden", "Nur mit Erfahrung"],
  ["Starke Defoliation", "Eher vermeiden", "Vorsichtig möglich"],
  ["Lollipopping", "Nur sehr zurückhaltend", "Gut planbar"],
  ["Mainlining", "Nicht empfohlen", "Anspruchsvoll, aber planbar"],
];

const trainingChecklist = [
  "Nur eine vitale, sichtbar wachsende Pflanze trainieren",
  "Vorher prüfen, wie viel Erholungszeit bis zur Blüte bleibt",
  "Mit der sanftesten geeigneten Methode beginnen",
  "Fixierungen locker halten und regelmäßig kontrollieren",
  "Starke Eingriffe nicht miteinander oder mit Umtopfen kombinieren",
  "Nach dem Eingriff mehrere Tage beobachten, bevor du weiterarbeitest",
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = knowledge.find((item) => item.slug === slug);
  if (!article) notFound();
  const content = sections[slug];
  if (!content) notFound();

  return (
    <article className="reading-page">
      <header className="container-page py-16">
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/" },
            { name: "Wissen", href: "/wissen" },
            { name: article.title, href: `/wissen/${slug}` },
          ]}
        />
        <p className="eyebrow mt-10">
          {article.topic} · {article.phase}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold sm:text-7xl">
          {article.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/70">
          {article.excerpt}
        </p>
      </header>
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_.35fr]">
        <div className="prose-grow min-w-0">
          {content.map(([heading, paragraph]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{paragraph}</p>
            </section>
          ))}
          {slug === "cannabis-training-lst-hst" && (
            <>
              <h2>Die Methoden auf einen Blick</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <section className="card p-5">
                  <p className="eyebrow !mt-0">Low Stress Training</p>
                  <ul className="mt-4 space-y-3">
                    {trainingMethods.lst.map(([name, description]) => (
                      <li key={name} className="rounded-xl bg-sage/10 p-3">
                        <strong className="block">{name}</strong>
                        <span className="mt-1 block text-sm text-forest/65">
                          {description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="card p-5">
                  <p className="eyebrow !mt-0">High Stress Training</p>
                  <ul className="mt-4 space-y-3">
                    {trainingMethods.hst.map(([name, description]) => (
                      <li key={name} className="rounded-xl bg-amber/10 p-3">
                        <strong className="block">{name}</strong>
                        <span className="mt-1 block text-sm text-forest/65">
                          {description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <h2>Welche Methode passt zu welchem Pflanzentyp?</h2>
              <div className="mt-5 grid gap-3 sm:hidden">
                {trainingSuitability.map(([method, auto, photo]) => (
                  <section className="card p-4" key={method}>
                    <h3 className="!mt-0 text-lg font-bold">{method}</h3>
                    <dl className="mt-3 grid gap-3 text-sm">
                      <div className="rounded-xl bg-sage/10 p-3">
                        <dt className="font-bold">Autoflower</dt>
                        <dd className="mt-1">{auto}</dd>
                      </div>
                      <div className="rounded-xl bg-sage/10 p-3">
                        <dt className="font-bold">Photoperiodisch</dt>
                        <dd className="mt-1">{photo}</dd>
                      </div>
                    </dl>
                  </section>
                ))}
              </div>
              <div className="mt-5 hidden max-w-full overflow-x-auto rounded-[1.75rem] border border-forest/15 bg-white/90 shadow-soft sm:block">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead className="bg-sage/15">
                    <tr>
                      <th className="p-4 font-bold">Methode</th>
                      <th className="p-4 font-bold">Autoflower</th>
                      <th className="p-4 font-bold">Photoperiodisch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingSuitability.map(([method, auto, photo]) => (
                      <tr className="border-t border-forest/10" key={method}>
                        <th scope="row" className="p-4 font-semibold">
                          {method}
                        </th>
                        <td className="p-4">{auto}</td>
                        <td className="p-4">{photo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-forest/60">
                Die Einordnung ist eine vorsichtige Praxisempfehlung, keine
                Ertragsgarantie. Für moderne Autoflower-Sorten fehlen bislang
                direkte wissenschaftliche Vergleichsstudien zwischen LST, HST
                und untrainierten Kontrollpflanzen.
              </p>

              <h2>Forschungsstand und Quellen</h2>
              <p>
                Die folgenden Arbeiten stützen die Einordnung zu
                Pflanzenarchitektur, Beschneiden und dem genetisch gesteuerten
                Autoflower-Merkmal:
              </p>
              <ul>
                <li>
                  <a
                    className="break-words font-semibold text-moss underline underline-offset-4"
                    href="https://www.mdpi.com/2223-7747/10/9/1834"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shape Matters: Plant Architecture Affects Chemical
                    Uniformity in Large-Size Medical Cannabis Plants
                  </a>
                </li>
                <li>
                  <a
                    className="break-words font-semibold text-moss underline underline-offset-4"
                    href="https://pubmed.ncbi.nlm.nih.gov/41787587/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Morphologische und physiologische Reaktionen auf Topping
                  </a>
                </li>
                <li>
                  <a
                    className="break-words font-semibold text-moss underline underline-offset-4"
                    href="https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2022.713481/full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Einfluss von Pflanzendichte und Architektur auf Ertrag und
                    Gleichmäßigkeit
                  </a>
                </li>
                <li>
                  <a
                    className="break-words font-semibold text-moss underline underline-offset-4"
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9533707/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Genetische Grundlagen des Autoflower-Merkmals
                  </a>
                </li>
              </ul>
            </>
          )}
          <h2>Eine ruhige Checkliste für die Praxis</h2>
          <ul>
            {(slug === "cannabis-training-lst-hst"
              ? trainingChecklist
              : checklist
            ).map((item) => (
              <li className="flex gap-2" key={item}>
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-moss" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="card sticky top-24 p-6">
            <BookOpen className="size-7 text-moss" />
            <h2 className="mt-5 text-xl font-bold">Nimm dir Zeit</h2>
            <p className="mt-3 text-sm leading-6 text-forest/65">
              {article.excerpt} Beobachte Zusammenhänge in Ruhe und behandle
              Richtwerte als hilfreiche Ausgangspunkte, nicht als starre
              Vorgaben.
            </p>
          </div>
        </aside>
      </div>
      <div className="container-page mt-12">
        <Notice>
          Dieser Beitrag dient der allgemeinen Bildung für legalen privaten
          Eigenanbau und ersetzt weder Rechtsberatung noch eine fachliche
          Diagnose.
        </Notice>
      </div>
    </article>
  );
}
