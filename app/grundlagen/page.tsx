import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CloudSun,
  Dna,
  Droplets,
  Flower2,
  Leaf,
  Lightbulb,
  TestTube2,
  Warehouse,
  Wrench,
} from "lucide-react";
import { PageIntro } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Grundlagen des Cannabis-Anbaus",
  description:
    "Anbauarten, Genetik, Beleuchtung, Klima, Wasser, Nährstoffe und Pflanzenpflege beim Cannabis-Eigenanbau verständlich erklärt.",
  alternates: { canonical: "/grundlagen" },
};
const topics = [
  {
    title: "Ausrüstung für Indoor & Outdoor",
    icon: Wrench,
    text: "Growzelt, Messgeräte, Scheren, Lüftung, Sicherheit und Erntezubehör unabhängig erklärt.",
    href: "/ausruestung",
  },
  {
    title: "Anbauarten & Substrate",
    icon: Warehouse,
    text: "Indoor, Outdoor, Gewächshaus, Erde, Kokos und hydroponische Systeme im ehrlichen Vergleich.",
    href: "/wissen/indoor-oder-outdoor",
  },
  {
    title: "Genetik & Pflanzenarten",
    icon: Flower2,
    text: "Photoperiodisch, Autoflower, feminisiert, regulär sowie Genotyp und Phänotyp.",
    href: "/wissen/autoflower-oder-photoperiodisch",
  },
  {
    title: "Sortenkunde & Terpene",
    icon: Dna,
    text: "Indica, Sativa, Hybrid, Aromaprofile, Wirkungsfaktoren und bekannte Klassiker kritisch erklärt.",
    href: "/sortenkunde",
  },
  {
    title: "Beleuchtung",
    icon: Lightbulb,
    text: "LED, Abstand, Photoperiode, PPFD, DLI und sichtbare Lichtreaktionen.",
    href: "/wissen/licht-verstehen",
  },
  {
    title: "Klima & Luft",
    icon: CloudSun,
    text: "Temperatur, relative Feuchte, VPD, Abluft und Tag-Nacht-Unterschiede.",
    href: "/wissen/klima-und-vpd",
  },
  {
    title: "Wasser",
    icon: Droplets,
    text: "Topfgewicht, Wasserqualität, pH, EC und Drain ohne starre Gießpläne.",
    href: "/wissen/richtig-giessen",
  },
  {
    title: "Nährstoffe",
    icon: TestTube2,
    text: "Makro- und Mikronährstoffe, organisch oder mineralisch, Über- und Unterversorgung.",
    href: "/wissen/naehrstoffe",
  },
  {
    title: "Pflanzenpflege",
    icon: Leaf,
    text: "Umtopfen, sanftes Training, Stützen, Hygiene und gute Dokumentation.",
    href: "/wissen/hygiene",
  },
];
export default function Page() {
  return (
    <div className="reading-page">
      <PageIntro
        eyebrow="Solides Fundament"
        title="Grundlagen, die Zusammenhänge sichtbar machen."
        description="Keine Rezepte, sondern verständliche Prinzipien für bessere Beobachtungen und bewusstere Entscheidungen."
      />
      <section className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((x) => (
          <Link
            href={x.href}
            className="card group p-6 transition hover:-translate-y-1"
            key={x.title}
          >
            <x.icon className="size-8 text-moss" />
            <h2 className="mt-8 text-xl font-bold">{x.title}</h2>
            <p className="mt-3 text-sm leading-6 text-forest/65">{x.text}</p>
            <ArrowRight className="mt-7 size-5 transition group-hover:translate-x-1" />
          </Link>
        ))}
      </section>
    </div>
  );
}
