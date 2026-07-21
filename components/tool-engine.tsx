"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Save,
  Trash2,
} from "lucide-react";
import { phases } from "@/lib/content";
import {
  buildGrowPlan,
  calculateDLI,
  formatDate,
  isValidDateInput,
} from "@/lib/utils";
import { Badge, Button, Field, Input, Notice, Select, Textarea } from "./ui";
import { LocalStorageNotice } from "./site-shell";
const phaseOptions = phases.map((p, i) => (
  <option value={i} key={p.slug}>
    {p.title}
  </option>
));
function Shell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="container-page py-12 sm:py-16">
        <Link
          href="/werkzeuge"
          className="inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" />
          Alle Werkzeuge
        </Link>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl font-bold sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-forest/70">
          {description}
        </p>
      </header>
      <section className="container-page">
        <LocalStorageNotice />
        <div className="mt-6">{children}</div>
      </section>
    </>
  );
}
const Result = ({
  title,
  children,
  tone = "sage",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "sage" | "amber";
}) => (
  <div
    aria-live="polite"
    className={`rounded-3xl border p-6 ${tone === "amber" ? "border-amber/30 bg-amber/10" : "border-sage/40 bg-sage/10"}`}
  >
    <p className="eyebrow">Ergebnis</p>
    <h2 className="mt-3 font-serif text-3xl font-bold">{title}</h2>
    <div className="mt-4 leading-7 text-forest/75">{children}</div>
  </div>
);

function Planner() {
  const [start, setStart] = useState(new Date().toISOString().slice(0, 10));
  const [setting, setSetting] = useState("indoor");
  const [auto, setAuto] = useState(false);
  const [veg, setVeg] = useState(4);
  const [flower, setFlower] = useState(8);
  const [storageStatus, setStorageStatus] = useState("");
  const [hasSavedPlan, setHasSavedPlan] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("grownavi_plan");
      if (!raw) return;
      const saved = JSON.parse(raw) as Record<string, unknown>;
      if (typeof saved.start === "string" && isValidDateInput(saved.start))
        setStart(saved.start);
      if (saved.setting === "indoor" || saved.setting === "outdoor")
        setSetting(saved.setting);
      if (typeof saved.auto === "boolean") setAuto(saved.auto);
      if (typeof saved.veg === "number") setVeg(saved.veg);
      if (typeof saved.flower === "number") setFlower(saved.flower);
      setHasSavedPlan(true);
      setStorageStatus("Dein zuletzt gespeicherter Plan wurde geladen.");
    } catch {
      localStorage.removeItem("grownavi_plan");
    }
  }, []);
  const hasValidStart = isValidDateInput(start);
  const plan = useMemo(
    () =>
      hasValidStart
        ? buildGrowPlan(start, veg, flower, auto).filter((x) => x.days > 0)
        : [],
    [start, veg, flower, auto, hasValidStart],
  );
  const save = () => {
    localStorage.setItem(
      "grownavi_plan",
      JSON.stringify({
        start,
        setting,
        auto,
        veg,
        flower,
        savedAt: new Date().toISOString(),
      }),
    );
    setHasSavedPlan(true);
    setStorageStatus("Dein Plan wurde lokal in diesem Browser gespeichert.");
  };
  const removeSavedPlan = () => {
    localStorage.removeItem("grownavi_plan");
    setHasSavedPlan(false);
    setStorageStatus("Der lokal gespeicherte Plan wurde gelöscht.");
  };
  return (
    <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
        className="card grid content-start gap-5 p-6"
      >
        <Field
          label="Gewünschtes Startdatum"
          hint={
            hasValidStart
              ? undefined
              : "Bitte Tag, Monat und Jahr vollständig eingeben."
          }
        >
          <Input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            aria-invalid={!hasValidStart}
            required
          />
        </Field>
        <Field label="Anbauort">
          <Select value={setting} onChange={(e) => setSetting(e.target.value)}>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </Select>
        </Field>
        <Field label="Pflanzentyp">
          <Select
            value={auto ? "auto" : "photo"}
            onChange={(e) => setAuto(e.target.value === "auto")}
          >
            <option value="photo">Photoperiodisch</option>
            <option value="auto">Autoflower</option>
          </Select>
        </Field>
        {!auto && (
          <Field label="Geschätzte Wachstumsdauer (Wochen)">
            <Input
              type="number"
              min={2}
              max={16}
              value={veg}
              onChange={(e) => setVeg(Number(e.target.value))}
            />
          </Field>
        )}
        <Field label="Geschätzte Blütedauer (Wochen)">
          <Input
            type="number"
            min={5}
            max={18}
            value={flower}
            onChange={(e) => setFlower(Number(e.target.value))}
          />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="submit">
            <Save className="size-4" />
            Plan lokal speichern
          </Button>
          {hasSavedPlan && (
            <Button
              type="button"
              onClick={removeSavedPlan}
              className="border border-forest/20 bg-transparent text-forest hover:bg-sage/15"
            >
              <Trash2 className="size-4" />
              Gespeicherten Plan löschen
            </Button>
          )}
        </div>
        {storageStatus && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-2xl bg-sage/15 p-3 text-sm font-semibold text-forest"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-moss" />
            {storageStatus}
          </p>
        )}
      </form>
      <div className="space-y-5">
        <Notice>
          Alle Termine sind Schätzungen. Pflanzenentwicklung, Wetter und Genetik
          können den Verlauf verschieben.
        </Notice>
        <div
          className={`card p-6 transition-[background-color,border-color,box-shadow] duration-500 ${
            hasSavedPlan
              ? "border-moss/50"
              : ""
          }`}
          style={
            hasSavedPlan
              ? {
                  backgroundColor: "rgba(143, 174, 145, 0.32)",
                  borderColor: "rgba(71, 107, 82, 0.5)",
                  boxShadow: "0 18px 50px rgba(23, 63, 53, 0.12)",
                }
              : undefined
          }
        >
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold">Deine Zeitleiste</h2>
            <div className="flex flex-wrap justify-end gap-2">
              {hasSavedPlan && <Badge>Persönlicher Grow-Plan</Badge>}
              <Badge>{setting}</Badge>
            </div>
          </div>
          <div className="mt-6 space-y-1">
            {hasValidStart ? (
              plan.map((x, n) => {
                const p = phases[x.index];
                return (
                  <div
                    key={p.slug}
                    className="grid grid-cols-[auto_1fr] gap-4 border-l-2 border-sage/40 py-3 pl-4"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-forest text-xs font-bold text-cream">
                      {n + 1}
                    </span>
                    <div>
                      <b>{p.title}</b>
                      <p className="text-sm text-forest/60">
                        ca. {formatDate(x.from)} – {formatDate(x.to)}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="rounded-2xl bg-amber/10 p-4 text-sm text-forest/70">
                Sobald das Startdatum vollständig ist, erscheint hier deine
                Zeitleiste.
              </p>
            )}
          </div>
        </div>
        {hasValidStart && (
          <Result
            title={`Nächster Schritt: ${phases[plan[0]?.index ?? 0].title}`}
          >
            <p>
              Starte voraussichtlich am {formatDate(start)}. Bereite Standort,
              Hygiene und sichere Aufbewahrung vor. Erinnerung: Termine regelmäßig
              anhand sichtbarer Entwicklung aktualisieren.
            </p>
          </Result>
        )}
      </div>
    </div>
  );
}

function LightPlanner() {
  const [type, setType] = useState("photo"),
    [phase, setPhase] = useState(3),
    [hours, setHours] = useState(18),
    [power, setPower] = useState(200),
    [distance, setDistance] = useState(40),
    [ppfd, setPpfd] = useState(400);
  const dli = calculateDLI(ppfd, hours);
  const warnings = [
    hours > 20
      ? "Sehr lange Beleuchtungsdauer – Erholungs- und Dunkelphase prüfen."
      : "",
    distance < 15
      ? "Sehr geringer Abstand – Herstellerangaben, Wärme und Blattreaktion prüfen."
      : "",
    power > 800 && distance < 30
      ? "Hohe Leistung bei geringem Abstand – Lichtstress möglich."
      : "",
    type === "photo" && phase >= 5 && hours > 14
      ? "Photoperiodische Blüte bei langer Lichtphase ist ungewöhnlich; Lichtplan prüfen."
      : "",
  ].filter(Boolean);
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card grid gap-5 p-6">
        <Field label="Pflanzentyp">
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="photo">Photoperiodisch</option>
            <option value="auto">Autoflower</option>
          </Select>
        </Field>
        <Field label="Wachstumsphase">
          <Select
            value={phase}
            onChange={(e) => setPhase(Number(e.target.value))}
          >
            {phaseOptions}
          </Select>
        </Field>
        <Field label="Beleuchtungsdauer (Stunden)">
          <Input
            type="number"
            min={1}
            max={24}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </Field>
        <Field label="Lampenleistung (W)">
          <Input
            type="number"
            min={1}
            max={2000}
            value={power}
            onChange={(e) => setPower(Number(e.target.value))}
          />
        </Field>
        <Field label="Abstand zur Pflanze (cm)">
          <Input
            type="number"
            min={5}
            max={300}
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </Field>
        <Field
          label="Gemessener PPFD (µmol/m²/s)"
          hint="Optional; eine Wattzahl allein erlaubt keine verlässliche PPFD-Berechnung."
        >
          <Input
            type="number"
            min={0}
            max={3000}
            value={ppfd}
            onChange={(e) => setPpfd(Number(e.target.value))}
          />
        </Field>
      </div>
      <div className="space-y-5">
        <Result
          title={`DLI ca. ${dli.toFixed(1)} mol/m²/Tag`}
          tone={warnings.length ? "amber" : "sage"}
        >
          <p>
            Berechnet aus gemessenem PPFD × {hours} Stunden × 3.600 Sekunden.
            Beurteile zusätzlich Blattwinkel, Farbe, Temperatur und die
            gleichmäßige Ausleuchtung.
          </p>
        </Result>
        {warnings.length ? (
          <Notice warning>
            <ul className="list-disc pl-4">
              {warnings.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Notice>
        ) : (
          <Notice>
            Die Kombination wirkt nicht offensichtlich ungewöhnlich. Vergleiche
            sie trotzdem mit Herstellerangaben und Pflanzenreaktion; Werte sind
            allgemeine Richtwerte.
          </Notice>
        )}
        <div className="card p-6">
          <h2 className="font-serif text-2xl font-bold">Lichtplan</h2>
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-forest/55">An / Aus</dt>
              <dd className="mt-1 font-bold">
                {hours} h / {24 - hours} h
              </dd>
            </div>
            <div>
              <dt className="text-forest/55">Abstand</dt>
              <dd className="mt-1 font-bold">{distance} cm prüfen</dd>
            </div>
            <div>
              <dt className="text-forest/55">Leistung</dt>
              <dd className="mt-1 font-bold">{power} W</dd>
            </div>
            <div>
              <dt className="text-forest/55">Phase</dt>
              <dd className="mt-1 font-bold">{phases[phase].title}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

const symptoms = [
  "Gelbe Blätter",
  "Braune Blattspitzen",
  "Eingerollte Blätter",
  "Flecken",
  "Hängende Blätter",
  "Helle neue Triebe",
  "Verfärbte Blattadern",
  "Langsames Wachstum",
  "Obere Blätter betroffen",
  "Untere Blätter betroffen",
];
function WaterHelp() {
  const [pot, setPot] = useState(11),
    [substrate, setSubstrate] = useState("Erde"),
    [phase, setPhase] = useState(3),
    [temp, setTemp] = useState(25),
    [rh, setRh] = useState(60),
    [feel, setFeel] = useState("mittel"),
    [symptom, setSymptom] = useState("keine");
  const title =
    feel === "schwer"
      ? "Eher warten und erneut prüfen"
      : feel === "leicht"
        ? "Gießbedarf genauer prüfen"
        : "Noch keine eindeutige Tendenz";
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card grid gap-5 p-6">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Topfgröße (L)">
            <Input
              min={0.5}
              max={200}
              type="number"
              value={pot}
              onChange={(e) => setPot(Number(e.target.value))}
            />
          </Field>
          <Field label="Substrat">
            <Select
              value={substrate}
              onChange={(e) => setSubstrate(e.target.value)}
            >
              <option>Erde</option>
              <option>Kokos</option>
              <option>Hydroponisch</option>
            </Select>
          </Field>
        </div>
        <Field label="Phase">
          <Select
            value={phase}
            onChange={(e) => setPhase(Number(e.target.value))}
          >
            {phaseOptions}
          </Select>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Temperatur">
            <Input
              type="number"
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
            />
          </Field>
          <Field label="Luftfeuchte">
            <Input
              type="number"
              value={rh}
              onChange={(e) => setRh(Number(e.target.value))}
            />
          </Field>
        </div>
        <Field label="Topfgefühl / Gewicht">
          <Select value={feel} onChange={(e) => setFeel(e.target.value)}>
            <option value="schwer">Schwer und feucht</option>
            <option value="mittel">Unklar / mittel</option>
            <option value="leicht">Deutlich leicht</option>
          </Select>
        </Field>
        <Field label="Sichtbare Symptome">
          <Select value={symptom} onChange={(e) => setSymptom(e.target.value)}>
            <option value="keine">Keine auffälligen</option>
            <option>Hängende Blätter</option>
            <option>Gelbe Blätter</option>
            <option>Trockene Ränder</option>
          </Select>
        </Field>
      </div>
      <div className="space-y-5">
        <Result title={title} tone={feel === "schwer" ? "amber" : "sage"}>
          <p>
            {feel === "schwer"
              ? "Ein schwerer, feuchter Topf spricht gegen sofortiges Nachgießen. Prüfe Drainage, Geruch und ob das Gewicht in den nächsten 24 Stunden abnimmt."
              : feel === "leicht"
                ? `Ein deutlich leichter ${pot}-Liter-Topf kann auf sinkende Feuchte hinweisen. Prüfe zusätzlich 2–3 cm unter der Oberfläche, Blattspannung und gleichmäßige Durchfeuchtung.`
                : "Vergleiche das Gewicht mit einem sicher durchfeuchteten und einem trockeneren Zustand. Oberfläche allein reicht nicht."}
          </p>
        </Result>
        <Notice warning>
          Nie automatisch nach Kalender gießen. {substrate} reagiert anders als
          andere Substrate; Topfgröße, Wurzelmasse, {temp} °C und {rh} % rF
          verändern den Verbrauch.
        </Notice>
        <div className="card p-6">
          <h2 className="font-bold">Vor dem Gießen prüfen</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Topf anheben und mit dem Vortag vergleichen",
              "Feuchte in Wurzeltiefe statt nur an der Oberfläche prüfen",
              "Drainageöffnungen und Geruch kontrollieren",
              `Symptom „${symptom}“ im Verlauf und an neuen Blättern beobachten`,
            ].map((x) => (
              <li className="flex gap-2" key={x}>
                <CheckCircle2 className="mt-0.5 size-5 text-moss" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Deficiency() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (x: string) =>
    setSelected((s) => (s.includes(x) ? s.filter((y) => y !== x) : [...s, x]));
  const possible = useMemo(() => {
    const r = [
      {
        cause: "Gießfehler",
        score: selected.some(
          (x) => x.includes("Hängende") || x.includes("Gelbe"),
        )
          ? 3
          : 1,
      },
      {
        cause: "Licht- oder Hitzestress",
        score: selected.some(
          (x) => x.includes("Obere") || x.includes("Eingerollte"),
        )
          ? 3
          : 1,
      },
      {
        cause: "pH / Nährstoffverfügbarkeit",
        score: selected.some(
          (x) => x.includes("Adern") || x.includes("Flecken"),
        )
          ? 3
          : 1,
      },
      {
        cause: "Überdüngung",
        score: selected.some((x) => x.includes("Spitzen")) ? 3 : 1,
      },
      {
        cause: "Natürliche Alterung",
        score: selected.some((x) => x.includes("Untere")) ? 2 : 1,
      },
    ];
    return r.sort((a, b) => b.score - a.score);
  }, [selected]);
  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <div className="card p-6">
        <h2 className="font-serif text-2xl font-bold">Was beobachtest du?</h2>
        <p className="mt-2 text-sm text-forest/60">Mehrfachauswahl möglich</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {symptoms.map((x) => (
            <button
              aria-pressed={selected.includes(x)}
              onClick={() => toggle(x)}
              className={`min-h-12 rounded-xl border p-3 text-left text-sm font-semibold ${selected.includes(x) ? "border-moss bg-sage/20" : "border-forest/15 bg-white"}`}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        {selected.length ? (
          <Result title="Mehrere Ursachen prüfen">
            <div className="space-y-4">
              {possible.map((x, i) => (
                <div key={x.cause} className="rounded-xl bg-white/60 p-4">
                  <div className="flex justify-between gap-3">
                    <b>{x.cause}</b>
                    <span className="text-xs font-bold">
                      {i < 2 ? "zuerst prüfen" : "mitprüfen"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm">
                    Kontrollfrage: Passt der zeitliche Verlauf zu deiner letzten
                    Änderung bei Wasser, Licht, Klima oder Nährstoffen?
                  </p>
                </div>
              ))}
            </div>
          </Result>
        ) : (
          <Result title="Symptome auswählen">
            <p>
              Wähle mindestens eine Beobachtung. Die Ausgabe nennt bewusst
              mehrere Hypothesen und keine definitive Diagnose.
            </p>
          </Result>
        )}
        <Notice warning>
          Dringend bei schnellem Fortschritt, Schädlingen oder Schimmelverdacht.
          Verändere nicht mehrere Parameter gleichzeitig; fotografiere dieselben
          Stellen und beobachte neue Triebe.
        </Notice>
      </div>
    </div>
  );
}

function Harvest() {
  const [pistils, setPistils] = useState(0),
    [trichomes, setTrichomes] = useState(0),
    [weeks, setWeeks] = useState(0),
    [uniform, setUniform] = useState(false);
  const score = pistils + trichomes + weeks + (uniform ? 1 : 0);
  const result =
    score <= 2
      ? "Wahrscheinlich noch zu früh"
      : score <= 5
        ? "Nähert sich dem Erntefenster"
        : score <= 7
          ? "Mögliche Erntereife"
          : "Uneinheitliche Reife – weitere Bereiche prüfen";
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card grid gap-5 p-6">
        <Field label="Blütenstempel">
          <Select
            value={pistils}
            onChange={(e) => setPistils(Number(e.target.value))}
          >
            <option value={0}>Überwiegend hell und gerade</option>
            <option value={1}>Gemischt</option>
            <option value={2}>Überwiegend nachgedunkelt</option>
          </Select>
        </Field>
        <Field label="Trichome unter Lupe / Makrokamera">
          <Select
            value={trichomes}
            onChange={(e) => setTrichomes(Number(e.target.value))}
          >
            <option value={0}>Überwiegend klar</option>
            <option value={2}>Gemischt klar / milchig</option>
            <option value={3}>
              Überwiegend milchig, einzelne bernsteinfarben
            </option>
          </Select>
        </Field>
        <Field label="Vergangene Blütezeit">
          <Select
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
          >
            <option value={0}>Unter Genetik-Richtwert</option>
            <option value={1}>Im groben Richtfenster</option>
            <option value={2}>Über Richtwert</option>
          </Select>
        </Field>
        <label className="flex min-h-12 items-center gap-3 rounded-xl border border-forest/15 p-3">
          <input
            type="checkbox"
            checked={uniform}
            onChange={(e) => setUniform(e.target.checked)}
          />{" "}
          Obere und untere Blüten zeigen ähnliche Reife
        </label>
      </div>
      <div className="space-y-5">
        <Result title={result} tone={score < 5 ? "amber" : "sage"}>
          <p>
            Die Einschätzung kombiniert vier Beobachtungen, bleibt aber
            unsicher. Prüfe mehrere Blüten in unterschiedlicher Höhe bei
            neutralem Licht. Zuckerblätter können früher reif wirken als
            Blütenkelche.
          </p>
        </Result>
        <Notice warning>
          Eine Kalenderwoche allein bestimmt keinen Erntetag. Schimmel oder
          stark geschädigte Bereiche separat und besonders vorsichtig bewerten;
          im Zweifel nicht verwenden.
        </Notice>
      </div>
    </div>
  );
}

function Drying() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)),
    [temp, setTemp] = useState(19),
    [rh, setRh] = useState(60),
    [smell, setSmell] = useState("unauffällig"),
    [twigs, setTwigs] = useState("biegsam"),
    [note, setNote] = useState(""),
    [storageStatus, setStorageStatus] = useState(""),
    [hasSavedObservation, setHasSavedObservation] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("grownavi_drying");
      if (!raw) return;
      const saved = JSON.parse(raw) as Record<string, unknown>;
      if (typeof saved.date === "string") setDate(saved.date);
      if (typeof saved.temp === "number") setTemp(saved.temp);
      if (typeof saved.rh === "number") setRh(saved.rh);
      if (typeof saved.smell === "string") setSmell(saved.smell);
      if (typeof saved.twigs === "string") setTwigs(saved.twigs);
      if (typeof saved.note === "string") setNote(saved.note);
      setHasSavedObservation(true);
      setStorageStatus(
        "Deine zuletzt gespeicherte Beobachtung wurde geladen.",
      );
    } catch {
      localStorage.removeItem("grownavi_drying");
    }
  }, []);
  const days = Math.max(
    0,
    Math.floor(
      (Date.now() - new Date(`${date}T12:00:00`).getTime()) / 86400000,
    ),
  );
  const risk =
    rh > 68 || smell === "muffig"
      ? "Schimmelrisiko prüfen"
      : rh < 48 || temp > 24
        ? "Möglicherweise zu schnelle Trocknung"
        : "Verlauf weiter beobachten";
  const save = () => {
    localStorage.setItem(
      "grownavi_drying",
      JSON.stringify({
        date,
        temp,
        rh,
        smell,
        twigs,
        note,
        savedAt: new Date().toISOString(),
      }),
    );
    setHasSavedObservation(true);
    setStorageStatus(
      "Deine Beobachtung wurde lokal in diesem Browser gespeichert.",
    );
  };
  const removeSavedObservation = () => {
    localStorage.removeItem("grownavi_drying");
    setHasSavedObservation(false);
    setStorageStatus("Die lokal gespeicherte Beobachtung wurde gelöscht.");
  };
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save();
        }}
        className="card grid gap-5 p-6"
      >
        <Field label="Erntedatum">
          <Input
            type="date"
            value={date}
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDate(e.target.value)}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Temperatur °C">
            <Input
              type="number"
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
            />
          </Field>
          <Field label="Luftfeuchte %">
            <Input
              type="number"
              value={rh}
              onChange={(e) => setRh(Number(e.target.value))}
            />
          </Field>
        </div>
        <Field label="Geruch">
          <Select value={smell} onChange={(e) => setSmell(e.target.value)}>
            <option>unauffällig</option>
            <option>grasig</option>
            <option value="muffig">muffig / ammoniakartig</option>
          </Select>
        </Field>
        <Field label="Kleine Zweige">
          <Select value={twigs} onChange={(e) => setTwigs(e.target.value)}>
            <option>biegsam</option>
            <option>knicken</option>
            <option>knacken</option>
          </Select>
        </Field>
        <Field label="Tägliche Beobachtung">
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Geruch, Oberfläche, Konsistenz, Auffälligkeiten …"
          />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="submit">
            <Save className="size-4" />
            Beobachtung lokal speichern
          </Button>
          {hasSavedObservation && (
            <Button
              type="button"
              onClick={removeSavedObservation}
              className="border border-forest/20 bg-transparent text-forest hover:bg-sage/15"
            >
              <Trash2 className="size-4" />
              Beobachtung löschen
            </Button>
          )}
        </div>
        {storageStatus && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-2xl bg-sage/15 p-3 text-sm font-semibold text-forest"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-moss" />
            {storageStatus}
          </p>
        )}
      </form>
      <div className="space-y-5">
        <Result
          title={`Tag ${days} · ${risk}`}
          tone={risk.includes("Risiko") ? "amber" : "sage"}
        >
          <p>
            Bei {temp} °C und {rh} % rF sind kleine Zweige aktuell „{twigs}“.
            Werte täglich an mehreren Stellen prüfen; die Oberfläche kann
            trockener sein als das Innere.
          </p>
        </Result>
        <div className="card p-6">
          <h2 className="font-serif text-2xl font-bold">Nächster Schritt</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Geruch und versteckte Stellen täglich kontrollieren",
              "Direkten Luftstrom auf Blüten vermeiden",
              "Bei muffigem Geruch sofort genauer auf Schimmel prüfen",
              "Erst einlagern, wenn die Feuchte gleichmäßig erscheint",
            ].map((x) => (
              <li className="flex gap-2" key={x}>
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-moss" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ToolEngine({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  const tools: Record<string, React.ReactNode> = {
    "grow-planer": <Planner />,
    lichtplaner: <LightPlanner />,
    giesshilfe: <WaterHelp />,
    "mangel-finder": <Deficiency />,
    "ernte-check": <Harvest />,
    trocknungsassistent: <Drying />,
  };
  return (
    <Shell title={title} description={description}>
      {tools[slug]}
    </Shell>
  );
}
