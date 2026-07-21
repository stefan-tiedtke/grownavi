"use client";
import { useEffect, useRef, useState } from "react";
import {
  Download,
  FlaskConical,
  Leaf,
  PencilLine,
  Plus,
  Save,
  Trash2,
  Upload,
  Droplets,
} from "lucide-react";
import {
  exportProjects,
  GrowProject,
  importProjects,
  loadProjects,
  saveProjects,
} from "@/lib/storage";
import { formatDate } from "@/lib/utils";
import { phases } from "@/lib/content";
import { Badge, Button, Field, Input, Select } from "./ui";
const id = () => crypto.randomUUID();
export function GrowJournal() {
  const [projects, setProjects] = useState<GrowProject[]>([]),
    [activeId, setActiveId] = useState(""),
    [ready, setReady] = useState(false),
    [entry, setEntry] = useState(""),
    [kind, setKind] = useState<"Notiz" | "Gießen" | "Düngung" | "Phase">(
      "Notiz",
    ),
    [taskText, setTaskText] = useState(""),
    [showProjectIndicatorHint, setShowProjectIndicatorHint] = useState(false),
    [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const p = loadProjects();
    setProjects(p);
    setActiveId(p[0]?.id ?? "");
    setReady(true);
  }, []);
  const commit = (next: GrowProject[]) => {
    setProjects(next);
    saveProjects(next);
  };
  const active = projects.find((x) => x.id === activeId);
  const update = (changes: Partial<GrowProject>) =>
    active &&
    commit(
      projects.map((x) => (x.id === active.id ? { ...x, ...changes } : x)),
    );
  const create = () => {
    const p: GrowProject = {
      id: id(),
      name: "Mein neuer Grow",
      genetics: "",
      startDate: new Date().toISOString().slice(0, 10),
      setting: "Indoor",
      phase: 0,
      climate: [],
      entries: [],
      tasks: [
        { id: id(), text: "Standort und Rechtslage prüfen", done: false },
      ],
    };
    commit([...projects, p]);
    setActiveId(p.id);
    setShowProjectIndicatorHint(true);
  };
  const addEntry = () => {
    if (!active || entry.trim().length < 3) {
      setError("Bitte notiere mindestens drei Zeichen.");
      return;
    }
    update({
      entries: [
        ...active.entries,
        { id: id(), date: new Date().toISOString(), note: entry.trim(), kind },
      ],
    });
    setEntry("");
    setError("");
  };
  const addTask = () => {
    const text = taskText.trim();
    if (!active || !text) return;
    update({
      tasks: [...active.tasks, { id: id(), text, done: false }],
    });
    setTaskText("");
  };
  const download = () => {
    const blob = new Blob([exportProjects(projects)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `grownavi-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const readFile = async (file?: File) => {
    if (!file) return;
    try {
      const imported = importProjects(await file.text());
      commit(imported);
      setActiveId(imported[0]?.id ?? "");
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Import fehlgeschlagen.");
    }
  };
  const remove = (pid: string) => {
    if (
      !confirm(
        "Dieses Projekt und alle lokalen Einträge wirklich löschen? Dies kann nicht rückgängig gemacht werden.",
      )
    )
      return;
    const next = projects.filter((x) => x.id !== pid);
    commit(next);
    setActiveId(next[0]?.id ?? "");
  };
  const deleteAll = () => {
    if (
      !confirm(
        "Alle lokalen Grow-Daten endgültig löschen? Ein Export ist die einzige Wiederherstellungsmöglichkeit.",
      )
    )
      return;
    commit([]);
    setActiveId("");
  };
  if (!ready)
    return <div className="card p-8">Lokale Daten werden geladen …</div>;
  return (
    <div className="grid gap-6 lg:grid-cols-[.28fr_.72fr]">
      <aside className="space-y-4">
        <div className="card p-4">
          <Button className="w-full" onClick={create}>
            <Plus className="size-4" />
            Projekt anlegen
          </Button>
          <div className="mt-4 grid gap-2">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`rounded-xl border p-3 text-left ${p.id === activeId ? "border-moss bg-sage/15" : "border-forest/10 bg-white"}`}
              >
                <b className="block">{p.name}</b>
                <span className="text-xs text-forest/55">
                  {p.demo ? "Beispieldaten · " : ""}
                  {phases[p.phase]?.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="card grid gap-2 p-4">
          <Button
            className="bg-moss"
            onClick={download}
            disabled={!projects.length}
          >
            <Download className="size-4" />
            JSON exportieren
          </Button>
          <input
            ref={fileRef}
            className="sr-only"
            type="file"
            accept="application/json"
            onChange={(e) => readFile(e.target.files?.[0])}
          />
          <Button
            className="border border-forest/20 bg-white text-forest hover:bg-sage/10"
            onClick={() => fileRef.current?.click()}
          >
            <Upload className="size-4" />
            JSON importieren
          </Button>
          <Button
            className="bg-transparent text-red-800 hover:bg-red-50"
            onClick={deleteAll}
            disabled={!projects.length}
          >
            <Trash2 className="size-4" />
            Alle Daten löschen
          </Button>
        </div>
      </aside>
      <div>
        {showProjectIndicatorHint && (
          <div
            role="status"
            className="mb-6 flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-forest"
          >
            <p className="flex items-start gap-3">
              <span
                className="mt-2 size-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_0_3px_rgba(220,38,38,0.15)]"
                aria-hidden="true"
              />
              <span>
                <strong>Dein Grow-Projekt ist jetzt aktiv.</strong> Der rote
                Punkt am Menüpunkt „Mein Grow“ zeigt dir, dass aktuell ein
                eigenes Projekt in deinem Grow-Tagebuch besteht. Wenn du dein
                letztes Projekt löschst, verschwindet der Punkt wieder.
              </span>
            </p>
            <button
              type="button"
              onClick={() => setShowProjectIndicatorHint(false)}
              className="shrink-0 rounded-full px-2 font-bold text-forest/60 transition hover:bg-white hover:text-forest"
              aria-label="Hinweis schließen"
            >
              Schließen
            </button>
          </div>
        )}
        {!active ? (
          <div className="card grid min-h-80 place-items-center p-8 text-center">
            <div>
              <Leaf className="mx-auto size-10 text-moss" />
              <h2 className="mt-4 font-serif text-3xl font-bold">
                Noch kein Grow-Projekt
              </h2>
              <p className="mt-2 text-forest/60">
                Lege ein Projekt an oder importiere deine JSON-Sicherung.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  {active.demo && <Badge>Beispielprojekt</Badge>}
                  <label
                    className="mt-3 flex items-center gap-2 text-sm font-bold text-forest"
                    htmlFor={`project-name-${active.id}`}
                  >
                    <PencilLine className="size-4 text-moss" />
                    Projektname
                  </label>
                  <Input
                    id={`project-name-${active.id}`}
                    className="mt-2 border-moss/30 bg-white px-4 font-serif text-2xl font-bold focus:border-moss sm:text-3xl"
                    value={active.name}
                    onChange={(e) => update({ name: e.target.value })}
                  />
                  <p className="mt-2 text-xs leading-5 text-forest/55">
                    {active.name === "Mein neuer Grow"
                      ? "Klicke in das Feld und überschreibe „Mein neuer Grow“ mit deinem eigenen Projektnamen."
                      : "Du kannst den Projektnamen jederzeit direkt in diesem Feld ändern."}{" "}
                    Änderungen werden automatisch lokal gespeichert.
                  </p>
                  <Input
                    aria-label="Sorte oder Genetik"
                    className="mt-1 border-0 bg-transparent p-0 text-forest/60"
                    value={active.genetics}
                    placeholder="Sorte oder Genetik"
                    onChange={(e) => update({ genetics: e.target.value })}
                  />
                </div>
                <Button
                  className="bg-transparent text-red-800 hover:bg-red-50"
                  onClick={() => remove(active.id)}
                >
                  <Trash2 className="size-4" />
                  {active.demo ? "Demo entfernen" : "Projekt löschen"}
                </Button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Field label="Startdatum">
                  <Input
                    type="date"
                    value={active.startDate}
                    onChange={(e) => update({ startDate: e.target.value })}
                  />
                </Field>
                <Field label="Anbauart">
                  <Select
                    value={active.setting}
                    onChange={(e) =>
                      update({
                        setting: e.target.value as "Indoor" | "Outdoor",
                      })
                    }
                  >
                    <option>Indoor</option>
                    <option>Outdoor</option>
                  </Select>
                </Field>
                <Field label="Aktuelle Phase">
                  <Select
                    value={active.phase}
                    onChange={(e) => {
                      const phase = Number(e.target.value);
                      update({
                        phase,
                        entries: [
                          ...active.entries,
                          {
                            id: id(),
                            date: new Date().toISOString(),
                            kind: "Phase",
                            note: `Phase gewechselt zu ${phases[phase].title}.`,
                          },
                        ],
                      });
                    }}
                  >
                    {phases.map((p, i) => (
                      <option value={i} key={p.slug}>
                        {p.title}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-sage/20">
                <div
                  className="h-full bg-amber transition-all"
                  style={{ width: `${(active.phase + 1) * 10}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-forest/55">
                Lebenszyklus-Fortschritt: {(active.phase + 1) * 10} %
              </p>
            </div>
            <div className="card p-6">
              <h2 className="font-serif text-2xl font-bold">Offene Aufgaben</h2>
              <div className="mt-5 space-y-2">
                {active.tasks.map((t) => (
                  <label
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-sage/10 p-3"
                    key={t.id}
                  >
                    <input
                      type="checkbox"
                      checked={t.done}
                      onChange={() =>
                        update({
                          tasks: active.tasks.map((x) =>
                            x.id === t.id ? { ...x, done: !x.done } : x,
                          ),
                        })
                      }
                    />
                    <span className={t.done ? "line-through opacity-50" : ""}>
                      {t.text}
                    </span>
                  </label>
                ))}
              </div>
              <form
                className="mt-4 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  addTask();
                }}
              >
                <Input
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                  placeholder="Neue Aufgabe benennen …"
                  aria-label="Name der neuen Aufgabe"
                />
                <Button type="submit" disabled={!taskText.trim()}>
                  <Plus className="size-4" />
                  Aufgabe ergänzen
                </Button>
              </form>
            </div>
            <div className="card p-6">
              <h2 className="font-serif text-2xl font-bold">
                Neuer Tagebucheintrag
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-[auto_1fr_auto]">
                <Select
                  aria-label="Eintragsart"
                  value={kind}
                  onChange={(e) => setKind(e.target.value as typeof kind)}
                >
                  <option>Notiz</option>
                  <option>Gießen</option>
                  <option>Düngung</option>
                  <option>Phase</option>
                </Select>
                <Input
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Was hast du beobachtet oder getan?"
                />
                <Button onClick={addEntry}>
                  <Save className="size-4" />
                  Speichern
                </Button>
              </div>
              {error && (
                <p role="alert" className="mt-3 text-sm font-bold text-red-800">
                  {error}
                </p>
              )}
            </div>
            <div className="card p-6">
              <h2 className="font-serif text-2xl font-bold">
                Aktivitäts-Timeline
              </h2>
              {active.entries.length ? (
                <div className="mt-6 space-y-5">
                  {[...active.entries].reverse().map((e) => (
                    <article
                      key={e.id}
                      className="grid grid-cols-[auto_1fr] gap-4"
                    >
                      <span className="grid size-10 place-items-center rounded-full bg-sage/20">
                        {e.kind === "Gießen" ? (
                          <Droplets className="size-5" />
                        ) : e.kind === "Düngung" ? (
                          <FlaskConical className="size-5" />
                        ) : (
                          <Leaf className="size-5" />
                        )}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <b>{e.kind}</b>
                          <span className="text-xs text-forest/50">
                            {formatDate(e.date)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-forest/70">
                          {e.note}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-forest/55">
                  Noch keine Einträge vorhanden.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
