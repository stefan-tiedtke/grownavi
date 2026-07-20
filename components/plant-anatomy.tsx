import Image from "next/image";

const plantLabels = [
  [
    "1",
    "Wurzeln",
    "Verankern die Pflanze und nehmen Wasser sowie gelöste Mineralstoffe auf.",
  ],
  [
    "2",
    "Hauptstamm",
    "Die zentrale tragende Sprossachse verbindet Wurzeln, Blätter und Blütenstände.",
  ],
  [
    "3",
    "Nodie",
    "An diesem Knoten treffen Stamm, Blattstiel und Seitentrieb zusammen.",
  ],
  [
    "4",
    "Internodie",
    "Der Stammabschnitt zwischen zwei aufeinanderfolgenden Nodien.",
  ],
  [
    "5",
    "Fächerblatt",
    "Das große, lang gestielte Blatt mit mehreren schmalen, gezackten Blattfingern.",
  ],
  [
    "6",
    "Seitentrieb",
    "Eine seitliche Sprossachse mit eigenen Blättern, Knoten und Blütenständen.",
  ],
  [
    "7",
    "Cola",
    "Der größere obere Blütenstand an der Spitze eines kräftigen Triebs.",
  ],
] as const;

const flowerLabels = [
  [
    "8",
    "Bud / Blütenstand",
    "Eine dichte Gruppe vieler kleiner weiblicher Einzelblüten.",
  ],
  [
    "9",
    "Zuckerblatt",
    "Ein kleines, häufig stark mit Trichomen besetztes Blatt im Blütenstand.",
  ],
  [
    "10",
    "Narbenäste",
    "Die hellen bis bernsteinfarbenen fadenförmigen Teile, die aus den Einzelblüten ragen.",
  ],
  [
    "11",
    "Trichome",
    "Feine Drüsen mit Stiel und rundlichem Kopf; in der Vergrößerung besonders deutlich sichtbar.",
  ],
  [
    "12",
    "Hüllblatt / Braktee",
    "Das kleine harzreiche Blattorgan, das eine weibliche Einzelblüte umschließt.",
  ],
] as const;

const plantMarkers = [
  { number: "1", left: "50%", top: "91%" },
  { number: "2", left: "50%", top: "72%" },
  { number: "3", left: "50%", top: "60%" },
  { number: "4", left: "50%", top: "52%" },
  { number: "5", left: "25%", top: "42%" },
  { number: "6", left: "66%", top: "58%" },
  { number: "7", left: "50%", top: "10%" },
] as const;

const flowerMarkers = [
  { number: "8", left: "35%", top: "35%" },
  { number: "9", left: "75%", top: "51%" },
  { number: "10", left: "49%", top: "15%" },
  { number: "11", left: "77%", top: "82%" },
  { number: "12", left: "36%", top: "68%" },
] as const;

function Marker({
  number,
  left,
  top,
}: {
  number: string;
  left: string;
  top: string;
}) {
  return (
    <span
      style={{ left, top }}
      className="absolute grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-cream bg-red-600 text-xs font-bold text-white shadow-lg sm:size-10 sm:text-sm"
      aria-hidden="true"
    >
      {number}
    </span>
  );
}

function Legend({
  items,
}: {
  items: ReadonlyArray<readonly [string, string, string]>;
}) {
  return (
    <ol className="grid gap-3 p-5 sm:p-6">
      {items.map(([number, name, description]) => (
        <li className="flex gap-3 rounded-2xl bg-sage/10 p-3" key={number}>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
            {number}
          </span>
          <span>
            <strong className="block">{name}</strong>
            <span className="mt-0.5 block text-sm leading-5 text-forest/60">
              {description}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function PlantAnatomy() {
  return (
    <section>
      <div className="mb-6">
        <p className="eyebrow">Pflanzenkarte</p>
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
          Wo befindet sich was?
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-forest/70">
          Die erste Illustration zeigt den Aufbau einer blühenden weiblichen
          Cannabispflanze. In der zweiten Ansicht kannst du einen Bud mit
          Zuckerblättern, Narben und Drüsentrichomen aus der Nähe betrachten.
        </p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <figure className="card overflow-hidden">
          <figcaption className="border-b border-forest/10 p-5 sm:p-6">
            <p className="eyebrow">Gesamtansicht</p>
            <h3 className="mt-2 font-serif text-2xl font-bold">
              Die Cannabispflanze
            </h3>
          </figcaption>
          <div className="relative aspect-[2/3] bg-[#fbf8ef]">
            <Image
              src="/images/glossar/cannabispflanze-anatomie.png"
              alt="Botanische Illustration einer blühenden weiblichen Cannabispflanze mit Wurzeln, Hauptstamm, Seitentrieben, gezackten Fächerblättern und mehreren Blütenständen"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
            {plantMarkers.map((marker) => (
              <Marker key={marker.number} {...marker} />
            ))}
          </div>
          <Legend items={plantLabels} />
        </figure>

        <figure className="card overflow-hidden">
          <figcaption className="border-b border-forest/10 p-5 sm:p-6">
            <p className="eyebrow">Makroansicht</p>
            <h3 className="mt-2 font-serif text-2xl font-bold">
              Die Cannabisblüte
            </h3>
          </figcaption>
          <div className="relative aspect-square bg-[#fbf8ef]">
            <Image
              src="/images/glossar/cannabisbluete-trichome.png"
              alt="Botanische Makroillustration einer weiblichen Cannabisblüte mit Bud, gezackten Zuckerblättern, hellen Narbenästen und deutlich sichtbaren gestielten Drüsentrichomen"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
            {flowerMarkers.map((marker) => (
              <Marker key={marker.number} {...marker} />
            ))}
          </div>
          <Legend items={flowerLabels} />
        </figure>
      </div>
    </section>
  );
}
