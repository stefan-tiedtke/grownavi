import {knowledge,phases,problems} from "@/lib/content";
import {equipment} from "@/lib/equipment";
import {glossaryTerms} from "@/lib/glossary";
import {toolDefinitions} from "@/lib/tools";

export type SearchEntry={id:string;title:string;description:string;href:string;type:"Wissen"|"Glossar"|"Anbauphase"|"Problem"|"Werkzeug"|"Ausrüstung"|"Seite";keywords?:string};
const slugify=(value:string)=>value.toLocaleLowerCase("de").replaceAll(" ","-");

const pages:SearchEntry[]=[
  {id:"start",title:"Startseite",description:"Der Einstieg in GROWNAVI – vom Samen bis zur Ernte.",href:"/",type:"Seite",keywords:"home cannabis anbauen"},
  {id:"grundlagen",title:"Grundlagen",description:"Anbauarten, Genetik, Licht, Klima, Wasser, Nährstoffe und Pflanzenpflege verständlich erklärt.",href:"/grundlagen",type:"Seite",keywords:"anfangen einsteiger basis"},
  {id:"sortenkunde",title:"Sortenkunde",description:"Indica, Sativa, Hybrid, Terpene, Geschmacksrichtungen und Wirkungsfaktoren einordnen.",href:"/sortenkunde",type:"Seite",keywords:"sorte genetik terpene indica sativa hybrid"},
  {id:"mein-grow",title:"Mein Grow-Tagebuch",description:"Projekte, Aufgaben und Beobachtungen ausschließlich lokal im Browser dokumentieren.",href:"/mein-grow",type:"Seite",keywords:"tagebuch projekt notiz aufgabe lokal speichern"},
  {id:"faq",title:"Häufige Fragen",description:"Antworten zu GROWNAVI, lokalen Daten, Richtwerten und verantwortungsvollem Eigenanbau.",href:"/faq",type:"Seite",keywords:"faq fragen antworten"},
  {id:"rechtliches",title:"Rechtliches & Verantwortung",description:"Hinweise zu Volljährigkeit, Rechtslage, Aufbewahrung und verantwortungsvollem Eigenanbau.",href:"/rechtliches",type:"Seite",keywords:"legal gesetz recht kinder sicherheit"},
  {id:"ausruestung",title:"Ausrüstung für Indoor & Outdoor",description:"Hardware, Messgeräte, Scheren, Lüftung, Sicherheit und Erntezubehör unabhängig erklärt.",href:"/ausruestung",type:"Seite",keywords:"hardware einkauf growzelt messgerät waage"},
];

export const searchIndex:SearchEntry[]=[
  ...pages,
  ...knowledge.map(x=>({id:`wissen-${x.slug}`,title:x.title,description:x.excerpt,href:`/wissen/${x.slug}`,type:"Wissen" as const,keywords:`${x.topic} ${x.phase}`})),
  ...glossaryTerms.map(x=>({id:`glossar-${x.term}`,title:x.term,description:x.explanation,href:`/glossar#${slugify(x.term)}`,type:"Glossar" as const,keywords:`${x.aliases??""} ${x.location??""} ${x.category}`})),
  ...phases.map(x=>({id:`phase-${x.slug}`,title:x.title,description:x.short,href:`/anbauphasen/${x.slug}`,type:"Anbauphase" as const,keywords:`${x.goal} ${x.duration} ${x.traits.join(" ")} ${x.checks.join(" ")}`})),
  ...problems.map(x=>({id:`problem-${x.slug}`,title:x.title,description:x.symptoms,href:`/probleme/${x.slug}`,type:"Problem" as const,keywords:`${x.causes} ${x.urgency}`})),
  ...toolDefinitions.map(x=>({id:`tool-${x.slug}`,title:x.title,description:x.text,href:`/werkzeuge/${x.slug}`,type:"Werkzeug" as const})),
  ...equipment.map(x=>({id:`equipment-${x.id}`,title:x.name,description:x.purpose,href:`/ausruestung`,type:"Ausrüstung" as const,keywords:`${x.watch} ${x.category} ${x.environments.join(" ")} ${x.systems.join(" ")}`})),
];
