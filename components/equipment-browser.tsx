"use client";

import {useEffect,useMemo,useState} from "react";
import {Box,Check,Flower2,Gauge,Lightbulb,Search,Scissors,Scale,ShieldCheck,Sprout,TentTree,Wind,Droplets} from "lucide-react";
import {equipment,EquipmentCategory,EquipmentEnvironment,EquipmentPriority,EquipmentSystem} from "@/lib/equipment";
import {cn} from "@/lib/utils";

const STORAGE_KEY="grownavi_equipment_v1";
const icons={tent:TentTree,light:Lightbulb,wind:Wind,gauge:Gauge,water:Droplets,plant:Sprout,search:Search,shield:ShieldCheck,scissors:Scissors,scale:Scale,box:Box};
const categories=["Alle Kategorien",...new Set(equipment.map(x=>x.category))] as const;
const priorities=["Alle Prioritäten","Grundausstattung","Sinnvoll","Optional"] as const;

export function EquipmentBrowser(){
  const[environment,setEnvironment]=useState<"Alle"|EquipmentEnvironment>("Alle");
  const[system,setSystem]=useState<EquipmentSystem>("Alle Systeme");
  const[category,setCategory]=useState<"Alle Kategorien"|EquipmentCategory>("Alle Kategorien");
  const[priority,setPriority]=useState<"Alle Prioritäten"|EquipmentPriority>("Alle Prioritäten");
  const[query,setQuery]=useState("");
  const[owned,setOwned]=useState<string[]>([]);
  const[ready,setReady]=useState(false);
  useEffect(()=>{try{setOwned(JSON.parse(localStorage.getItem(STORAGE_KEY)??"[]"))}catch{setOwned([])}setReady(true)},[]);
  const toggle=(id:string)=>{const next=owned.includes(id)?owned.filter(x=>x!==id):[...owned,id];setOwned(next);localStorage.setItem(STORAGE_KEY,JSON.stringify(next))};
  const items=useMemo(()=>equipment.filter(item=>
    (environment==="Alle"||item.environments.includes(environment))&&
    (system==="Alle Systeme"||item.systems.includes("Alle Systeme")||item.systems.includes(system))&&
    (category==="Alle Kategorien"||item.category===category)&&
    (priority==="Alle Prioritäten"||item.priority===priority)&&
    `${item.name} ${item.purpose} ${item.category}`.toLowerCase().includes(query.toLowerCase())
  ),[environment,system,category,priority,query]);
  return <>
    <div className="card grid gap-4 p-4 sm:p-6">
      <div className="grid gap-3 lg:grid-cols-[1.2fr_repeat(3,.8fr)]">
        <label className="relative"><Search className="absolute left-4 top-3.5 size-5 text-forest/40"/><span className="sr-only">Ausrüstung suchen</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ausrüstung suchen …" className="min-h-12 w-full rounded-xl border border-forest/15 bg-white pl-12 pr-4"/></label>
        <select aria-label="Anbausystem" value={system} onChange={e=>setSystem(e.target.value as EquipmentSystem)} className="min-h-12 rounded-xl border border-forest/15 bg-white px-3"><option>Alle Systeme</option><option>Erde</option><option>Kokos/Hydro</option></select>
        <select aria-label="Kategorie" value={category} onChange={e=>setCategory(e.target.value as typeof category)} className="min-h-12 rounded-xl border border-forest/15 bg-white px-3">{categories.map(x=><option key={x}>{x}</option>)}</select>
        <select aria-label="Priorität" value={priority} onChange={e=>setPriority(e.target.value as typeof priority)} className="min-h-12 rounded-xl border border-forest/15 bg-white px-3">{priorities.map(x=><option key={x}>{x}</option>)}</select>
      </div>
      <div className="flex flex-wrap gap-2" aria-label="Anbauort">
        {(["Alle","Indoor","Outdoor"] as const).map(x=><button key={x} onClick={()=>setEnvironment(x)} className={cn("min-h-11 rounded-full px-5 text-sm font-bold transition",environment===x?"bg-forest text-cream":"bg-sage/10 hover:bg-sage/20")}>{x}</button>)}
      </div>
    </div>
    <div className="my-6 flex flex-wrap items-center justify-between gap-2 text-sm text-forest/60"><p>{items.length} Gegenstände gefunden</p><p>{ready?`${owned.length} als vorhanden markiert`:"Checkliste wird geladen …"}</p></div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map(item=>{const Icon=icons[item.icon];const has=owned.includes(item.id);return <article className={cn("card flex min-w-0 flex-col p-5",has&&"border-moss/50 bg-sage/10")} key={item.id}>
        <div className="flex items-start justify-between gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sage/15"><Icon className="size-6 text-moss"/></span><span className={cn("rounded-full px-3 py-1 text-xs font-bold",item.priority==="Grundausstattung"?"bg-amber/20":item.priority==="Sinnvoll"?"bg-sage/20":"border border-forest/15")}>{item.priority}</span></div>
        <p className="eyebrow mt-5">{item.category}</p><h2 className="mt-2 text-xl font-bold">{item.name}</h2>
        <p className="mt-3 text-sm leading-6 text-forest/70">{item.purpose}</p>
        <div className="mt-4 rounded-xl bg-sand/35 p-3 text-sm leading-6"><strong>Worauf achten?</strong><span className="mt-1 block text-forest/70">{item.watch}</span></div>
        <div className="mt-4 flex flex-wrap gap-2">{item.environments.map(x=><span className="rounded-full bg-sage/15 px-2.5 py-1 text-xs font-semibold" key={x}>{x}</span>)}</div>
        <button onClick={()=>toggle(item.id)} aria-pressed={has} className={cn("mt-5 flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm font-bold transition",has?"border-moss bg-moss text-white":"border-forest/20 hover:bg-sage/10")}><span className="grid size-5 place-items-center rounded-full border border-current">{has&&<Check className="size-3.5"/>}</span>{has?"Bereits vorhanden":"Als vorhanden markieren"}</button>
      </article>})}
    </div>
    {!items.length&&<div className="card p-8 text-center"><Flower2 className="mx-auto size-8 text-moss"/><h2 className="mt-3 text-xl font-bold">Keine passenden Einträge</h2><p className="mt-2 text-forest/60">Passe Suche oder Filter an.</p></div>}
  </>;
}
