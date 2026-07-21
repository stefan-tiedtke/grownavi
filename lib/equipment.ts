export type EquipmentEnvironment = "Indoor" | "Outdoor";
export type EquipmentSystem = "Alle Systeme" | "Erde" | "Kokos/Hydro";
export type EquipmentPriority = "Grundausstattung" | "Sinnvoll" | "Optional";
export type EquipmentCategory =
  | "Anbauraum"
  | "Klima & Luft"
  | "Gießen & Substrat"
  | "Pflege & Kontrolle"
  | "Sicherheit"
  | "Ernte & Trocknung";

export type EquipmentItem = {
  id: string;
  name: string;
  purpose: string;
  watch: string;
  environments: EquipmentEnvironment[];
  systems: EquipmentSystem[];
  priority: EquipmentPriority;
  category: EquipmentCategory;
  icon: "tent" | "light" | "wind" | "gauge" | "water" | "plant" | "search" | "shield" | "scissors" | "scale" | "box";
};

export const equipment: EquipmentItem[] = [
  {id:"growzelt",name:"Growzelt oder geeigneter Raum",purpose:"Schafft einen abgrenzbaren, gut zu reinigenden Bereich für Licht und Luftführung.",watch:"Auf stabile Nähte, eine dichte Bodenwanne und genügend Arbeitsraum achten.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Anbauraum",icon:"tent"},
  {id:"led",name:"Geeignete LED-Pflanzenleuchte",purpose:"Versorgt Indoor-Pflanzen mit dem benötigten Licht.",watch:"Fläche, tatsächliche Leistungsaufnahme, Abstand und Herstellerangaben müssen zusammenpassen.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Anbauraum",icon:"light"},
  {id:"timer",name:"Zeitschaltuhr",purpose:"Hält den Lichtzyklus zuverlässig und wiederholbar.",watch:"Für die angeschlossene Leistung ausgelegt verwenden; keine improvisierten Schaltlösungen.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Anbauraum",icon:"light"},
  {id:"aufhaengung",name:"Höhenverstellbare Aufhängung",purpose:"Erlaubt eine sichere Anpassung des Lampenabstands.",watch:"Traglast prüfen und Leuchten immer unabhängig gegen Herabfallen sichern.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Anbauraum",icon:"light"},
  {id:"abluft",name:"Regelbarer Abluftventilator",purpose:"Tauscht warme, feuchte Luft im Indoor-Bereich aus.",watch:"Zur Raumgröße passend wählen und Schläuche möglichst strömungsgünstig führen.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Klima & Luft",icon:"wind"},
  {id:"aktivkohle",name:"Aktivkohlefilter",purpose:"Reduziert Gerüche in der Abluft.",watch:"Zum Luftdurchsatz passend dimensionieren und Vorfilter regelmäßig kontrollieren.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Klima & Luft",icon:"wind"},
  {id:"umluft",name:"Umluftventilator",purpose:"Bewegt die Luft sanft durch und über das Blätterdach.",watch:"Nicht dauerhaft stark auf dieselbe Pflanzenstelle richten.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Klima & Luft",icon:"wind"},
  {id:"thermohygrometer",name:"Thermometer und Hygrometer",purpose:"Zeigt Temperatur und relative Luftfeuchtigkeit am Blätterdach.",watch:"Ein Gerät mit Min-/Max-Speicher wählen und nicht direkt im Luftstrom platzieren.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Klima & Luft",icon:"gauge"},
  {id:"wetterschutz",name:"Luftiger Regen- und Wetterschutz",purpose:"Schützt Outdoor-Pflanzen vor Starkregen, Hagel oder frühem Frost.",watch:"Nie luftdicht einhausen; Windlast und Kondensation berücksichtigen.",environments:["Outdoor"],systems:["Alle Systeme"],priority:"Optional",category:"Anbauraum",icon:"tent"},
  {id:"toepfe",name:"Pflanzgefäße mit Drainage",purpose:"Geben den Wurzeln passenden Raum und lassen überschüssiges Wasser ablaufen.",watch:"Größe zur Pflanze wählen; Abflussöffnungen dürfen nicht blockiert sein.",environments:["Indoor","Outdoor"],systems:["Erde","Kokos/Hydro"],priority:"Grundausstattung",category:"Gießen & Substrat",icon:"plant"},
  {id:"auffangwanne",name:"Untersetzer oder Auffangwanne",purpose:"Fängt Drainage auf und schützt Boden und Elektrik.",watch:"Stehendes Wasser zeitnah entfernen und regelmäßig reinigen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Gießen & Substrat",icon:"water"},
  {id:"giesskanne",name:"Gießkanne mit feiner Tülle",purpose:"Ermöglicht langsames und gleichmäßiges Bewässern.",watch:"Nur für den Anbau verwenden und nach Nährlösungen gründlich reinigen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Gießen & Substrat",icon:"water"},
  {id:"messbecher",name:"Messbecher",purpose:"Macht Wassermengen nachvollziehbar und wiederholbar.",watch:"Deutlich beschriften und nicht mehr für Lebensmittel verwenden.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Gießen & Substrat",icon:"water"},
  {id:"ph-meter",name:"Kalibrierbares pH-Messgerät",purpose:"Hilft besonders bei Kokos, Hydro oder stark abweichendem Gießwasser.",watch:"Nur mit Kalibrier- und Aufbewahrungslösung zuverlässig; bei guter Erde nicht immer nötig.",environments:["Indoor","Outdoor"],systems:["Kokos/Hydro"],priority:"Sinnvoll",category:"Gießen & Substrat",icon:"gauge"},
  {id:"ec-meter",name:"EC-Messgerät",purpose:"Misst die elektrische Leitfähigkeit von Nährlösungen.",watch:"Vor allem für mineralische Kokos-/Hydrosysteme relevant und regelmäßig zu prüfen.",environments:["Indoor","Outdoor"],systems:["Kokos/Hydro"],priority:"Sinnvoll",category:"Gießen & Substrat",icon:"gauge"},
  {id:"pflanzenbinder",name:"Weiche Pflanzenbinder",purpose:"Stützen Triebe und ermöglichen schonendes Low Stress Training.",watch:"Locker befestigen und regelmäßig auf Einschnürungen kontrollieren.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"plant"},
  {id:"stuetzen",name:"Pflanzenstäbe oder Stütznetz",purpose:"Stabilisieren lange Triebe und später schwerere Blüten.",watch:"Früh und wurzelschonend einsetzen; Outdoor sturmfest verankern.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"plant"},
  {id:"lupe",name:"Handlupe mit 30–60-facher Vergrößerung",purpose:"Hilft bei der Kontrolle von Trichomen, Eiern, Milben und auffälligen Strukturen.",watch:"Mehrere Pflanzenbereiche betrachten und Beobachtung nicht mit sicherer Diagnose verwechseln.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"search"},
  {id:"etiketten",name:"Pflanzenetiketten und wasserfester Stift",purpose:"Halten Genetik, Startdatum und wichtige Angaben eindeutig auseinander.",watch:"Outdoor UV- und wetterbeständige Beschriftung verwenden.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"plant"},
  {id:"bypass-schere",name:"Bypass-Gartenschere",purpose:"Schneidet stärkere Triebe mit einer sauberen Schnittbewegung.",watch:"Scharf halten und vor sowie zwischen Pflanzen reinigen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"scissors"},
  {id:"trimmschere",name:"Feine Trimm- und Ernteschere",purpose:"Erleichtert präzise Arbeiten an kleinen Blättern und Blüten.",watch:"Eine schmale, gut zu reinigende Klinge wählen; klebrige Rückstände regelmäßig entfernen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Ernte & Trocknung",icon:"scissors"},
  {id:"reinigung",name:"Reinigungsalkohol und fusselfreie Tücher",purpose:"Halten Schneidwerkzeuge und Arbeitsflächen sauber.",watch:"Entzündlich – verschlossen, sicher und fern von Zündquellen lagern.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Pflege & Kontrolle",icon:"shield"},
  {id:"handschuhe",name:"Einmalhandschuhe",purpose:"Erleichtern hygienisches Arbeiten bei Ernte und auffälligen Pflanzenteilen.",watch:"Zwischen kranken und gesunden Pflanzen wechseln beziehungsweise Hände reinigen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Pflege & Kontrolle",icon:"shield"},
  {id:"rauchmelder",name:"Rauchmelder",purpose:"Warnt frühzeitig bei Rauchentwicklung im Indoor-Bereich.",watch:"Nach Herstellerangabe montieren, testen und Batterien kontrollieren.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Sicherheit",icon:"shield"},
  {id:"strommessgeraet",name:"Stromverbrauchsmessgerät",purpose:"Macht tatsächlichen Verbrauch und Last einzelner Geräte sichtbar.",watch:"Nur innerhalb der zugelassenen Belastungsgrenze verwenden.",environments:["Indoor"],systems:["Alle Systeme"],priority:"Optional",category:"Sicherheit",icon:"gauge"},
  {id:"wassermelder",name:"Wassermelder",purpose:"Warnt bei Leckagen oder überlaufenden Auffangwannen.",watch:"Am tiefsten gefährdeten Punkt platzieren und regelmäßig testen.",environments:["Indoor"],systems:["Kokos/Hydro"],priority:"Sinnvoll",category:"Sicherheit",icon:"shield"},
  {id:"trocknung",name:"Aufhängeschnur oder Trockennetz",purpose:"Hält Erntegut während der Trocknung luftig und geordnet.",watch:"Genügend Abstand lassen und Kontaktstellen regelmäßig kontrollieren.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Ernte & Trocknung",icon:"box"},
  {id:"lagerbehaelter",name:"Saubere, lebensmittelechte Behälter",purpose:"Ermöglichen dunkle, beschriftete und geschützte Lagerung.",watch:"Nur vollständig geeignetes Material einlagern und auf Kondensation kontrollieren.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Grundausstattung",category:"Ernte & Trocknung",icon:"box"},
  {id:"kleine-hygrometer",name:"Kleine Behälter-Hygrometer",purpose:"Geben einen zusätzlichen Hinweis auf die Feuchte während der Lagerung.",watch:"Günstige Geräte können abweichen; mehrere Geräte gelegentlich vergleichen.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Ernte & Trocknung",icon:"gauge"},
  {id:"waage",name:"Digitale Waage",purpose:"Dokumentiert Ernte- und Lagermengen nachvollziehbar.",watch:"Für kleinere trockene Mengen ist 0,1-g-Auflösung praktisch; gelegentlich mit Prüfgewicht kontrollieren.",environments:["Indoor","Outdoor"],systems:["Alle Systeme"],priority:"Sinnvoll",category:"Ernte & Trocknung",icon:"scale"},
];
