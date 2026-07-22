"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect,useMemo,useRef,useState} from "react";
import {ArrowRight,Search,X} from "lucide-react";
import {searchIndex,type SearchEntry} from "@/lib/search-index";

const normalize=(value:string)=>value.toLocaleLowerCase("de").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9äöüß]+/g," ").trim();
const searchable=(item:SearchEntry)=>normalize(`${item.title} ${item.description} ${item.keywords??""} ${item.type}`);
const rankedSearch=(query:string)=>{
  const needle=normalize(query);if(needle.length<2)return[];
  const words=needle.split(" ").filter(Boolean);
  return searchIndex.map(item=>{const title=normalize(item.title),haystack=searchable(item);if(!words.every(word=>haystack.includes(word)))return null;let score=0;if(title===needle)score+=100;if(title.startsWith(needle))score+=50;if(title.includes(needle))score+=25;words.forEach(word=>{if(title.includes(word))score+=8});return{item,score}}).filter((x):x is {item:SearchEntry;score:number}=>Boolean(x)).sort((a,b)=>b.score-a.score||a.item.title.localeCompare(b.item.title,"de")).slice(0,10).map(x=>x.item);
};

export function GlobalSearch(){
  const router=useRouter();
  const[open,setOpen]=useState(false),[query,setQuery]=useState(""),[selected,setSelected]=useState(0);
  const inputRef=useRef<HTMLInputElement>(null);
  const results=useMemo(()=>rankedSearch(query),[query]);
  useEffect(()=>setSelected(0),[query]);
  useEffect(()=>{const onKey=(event:KeyboardEvent)=>{const target=event.target as HTMLElement|null;const typing=target?.matches("input, textarea, select, [contenteditable='true']");if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();setOpen(value=>!value)}else if(event.key==="/"&&!typing){event.preventDefault();setOpen(true)}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
  const close=()=>{setOpen(false);setQuery("")};
  return <Dialog.Root open={open} onOpenChange={value=>{setOpen(value);if(!value)setQuery("")}}>
    <Dialog.Trigger asChild><button type="button" className="flex min-h-10 w-full items-center gap-3 rounded-full border border-forest/15 bg-white/60 px-4 text-left text-sm text-forest/60 shadow-sm transition hover:border-moss/40 hover:bg-white sm:w-72" aria-label="Website durchsuchen" title="Suchen (⌘ K)"><Search className="size-[17px] shrink-0 text-moss"/><span className="flex-1">Website durchsuchen …</span><kbd className="hidden rounded-md border border-forest/15 bg-cream/70 px-1.5 py-0.5 font-sans text-[10px] font-bold sm:inline">⌘ K</kbd></button></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#071b16]/70 backdrop-blur-sm data-[state=open]:animate-in"/>
      <Dialog.Content onOpenAutoFocus={event=>{event.preventDefault();inputRef.current?.focus()}} className="fixed inset-0 z-[100] flex flex-col bg-cream outline-none sm:inset-x-4 sm:bottom-auto sm:top-[8vh] sm:mx-auto sm:max-h-[84vh] sm:max-w-3xl sm:rounded-[2rem] sm:border sm:border-forest/15 sm:shadow-2xl">
        <div className="flex items-center gap-3 border-b border-forest/10 p-4 sm:p-5"><Search className="size-5 shrink-0 text-moss"/><input ref={inputRef} value={query} onChange={event=>setQuery(event.target.value)} onKeyDown={event=>{if(!results.length)return;if(event.key==="ArrowDown"){event.preventDefault();setSelected(value=>(value+1)%results.length)}else if(event.key==="ArrowUp"){event.preventDefault();setSelected(value=>(value-1+results.length)%results.length)}else if(event.key==="Enter"){event.preventDefault();const result=results[selected];if(result){close();router.push(result.href)}}}} role="combobox" aria-expanded={results.length>0} aria-autocomplete="list" aria-activedescendant={results.length?`search-result-${selected}`:undefined} aria-controls="global-search-results" className="min-h-12 min-w-0 flex-1 border-0 bg-transparent text-lg font-semibold outline-none placeholder:text-forest/40" placeholder="Wonach suchst du?" aria-label="Gesamte Website durchsuchen" autoComplete="off"/><Dialog.Close className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-sage/15" aria-label="Suche schließen"><X className="size-5"/></Dialog.Close></div>
        <Dialog.Title className="sr-only">GROWNAVI durchsuchen</Dialog.Title><Dialog.Description className="sr-only">Tippe mindestens zwei Zeichen. Passende Inhalte erscheinen sofort.</Dialog.Description>
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
          {query.trim().length<2?<div className="grid min-h-56 place-items-center text-center"><div><Search className="mx-auto size-9 text-moss"/><h2 className="mt-4 font-serif text-2xl font-bold">Sofort finden, ruhig weiterlesen.</h2><p className="mt-2 max-w-md text-sm leading-6 text-forest/60">Gib mindestens zwei Buchstaben ein. Die Suche bleibt vollständig in deinem Browser.</p><div className="mt-5 flex flex-wrap justify-center gap-2">{["Trichome","Gießen","Schimmel","Autoflower","Growzelt"].map(term=><button key={term} onClick={()=>setQuery(term)} className="rounded-full bg-sage/15 px-3 py-2 text-sm font-bold hover:bg-sage/25">{term}</button>)}</div></div></div>:
          results.length?<div>
            <div className="mb-5 rounded-2xl border border-moss/25 bg-sage/15 p-4"><p className="eyebrow">Direkte Antwort</p><h2 className="mt-2 text-xl font-bold">{results[0].title}</h2><p className="mt-2 text-sm leading-6 text-forest/70">{results[0].description}</p><Link href={results[0].href} onClick={close} className="mt-3 inline-flex items-center gap-2 text-sm font-bold">Mehr dazu <ArrowRight className="size-4"/></Link></div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-forest/50" aria-live="polite">{results.length} passende Ergebnisse</p><div className="grid gap-2" id="global-search-results" role="listbox">{results.map((item,index)=><Link href={item.href} onClick={close} onMouseEnter={()=>setSelected(index)} id={`search-result-${index}`} role="option" aria-selected={selected===index} key={item.id} className={`group flex items-center gap-4 rounded-2xl border bg-white/70 p-4 transition ${selected===index?"border-moss/40 bg-sage/15":"border-forest/10 hover:border-moss/30 hover:bg-sage/10"}`}><div className="min-w-0 flex-1"><span className="eyebrow">{item.type}</span><h3 className="mt-1 truncate font-bold">{item.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-5 text-forest/60">{item.description}</p></div><ArrowRight className="size-5 shrink-0 transition group-hover:translate-x-1"/></Link>)}</div>
          </div>:<div className="grid min-h-56 place-items-center text-center"><div><h2 className="font-serif text-2xl font-bold">Nichts Passendes gefunden</h2><p className="mt-2 text-sm text-forest/60">Versuche einen kürzeren oder allgemeineren Begriff.</p></div></div>}
        </div>
        <div className="hidden border-t border-forest/10 px-6 py-3 text-xs text-forest/50 sm:flex sm:justify-between"><span>↑ ↓ Ergebnisse ansehen · Enter öffnen</span><span>Esc schließen</span></div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
