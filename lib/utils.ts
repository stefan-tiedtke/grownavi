import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const formatDate = (date: Date | string) => new Intl.DateTimeFormat("de-DE",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(date));

/** DLI in mol/m²/day from PPFD in µmol/m²/s and photoperiod in hours. */
export const calculateDLI=(ppfd:number,hours:number)=>(ppfd*hours*3600)/1_000_000;
export function isValidDateInput(value:string){
  const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if(!match)return false;
  const [,year,month,day]=match.map(Number);
  const date=new Date(year,month-1,day,12);
  return date.getFullYear()===year&&date.getMonth()===month-1&&date.getDate()===day;
}
export const addDays=(date:string,days:number)=>{const d=new Date(`${date}T12:00:00`);d.setDate(d.getDate()+days);return d;};
export function buildGrowPlan(start:string,vegWeeks:number,flowerWeeks:number,auto=false){
  if(!isValidDateInput(start))return [];
  const durations=auto?[3,7,14,7,0,flowerWeeks*7,7,1,10,21]:[3,7,14,vegWeeks*7,7,flowerWeeks*7,7,1,10,21];
  let elapsed=0;return durations.map((days,index)=>{const from=addDays(start,elapsed);elapsed+=days;return {index,from,to:addDays(start,elapsed),days};});
}
