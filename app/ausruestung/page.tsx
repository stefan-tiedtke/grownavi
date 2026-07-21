import type {Metadata} from "next";
import {EquipmentBrowser} from "@/components/equipment-browser";
import {PageIntro} from "@/components/site-shell";
import {Notice} from "@/components/ui";

export const metadata:Metadata={title:"Cannabis-Grow-Ausrüstung für Indoor und Outdoor",description:"Unabhängige Ausstattungsübersicht und lokale Checkliste für Indoor- und Outdoor-Cannabisanbau: Anbauraum, Klima, Pflege, Sicherheit, Ernte und Trocknung.",alternates:{canonical:"/ausruestung"}};
export default function Page(){return <div className="reading-page"><PageIntro eyebrow="Sinnvoll statt überladen" title="Ausrüstung für Indoor & Outdoor." description="Finde heraus, was du wirklich brauchst, worauf du beim Einsatz achten solltest und welche Ausstattung optional bleiben kann."/><section className="container-page"><Notice>Diese Übersicht nennt bewusst keine Marken oder Shops. Deine Markierungen werden ausschließlich lokal in diesem Browser gespeichert.</Notice><div className="mt-8"><EquipmentBrowser/></div></section></div>}
