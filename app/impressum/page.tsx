import type { Metadata } from "next";
import { PageIntro } from "@/components/site-shell";
import { EmailReveal } from "@/components/email-reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von GROWNAVI.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Anbieterkennzeichnung"
        title="Impressum."
        description="Angaben zum Anbieter und zur redaktionell verantwortlichen Person von GROWNAVI."
      />
      <section className="container-page grid max-w-5xl gap-6 md:grid-cols-2">
        <article className="card p-6 sm:p-8">
          <p className="eyebrow">Angaben gemäß § 5 DDG</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Diensteanbieter
          </h2>
          <address className="mt-5 not-italic leading-7 text-forest/75">
            <strong className="text-forest">Stefan Tiedtke</strong>
            <br />
            Herbstweg 3
            <br />
            86899 Landsberg
          </address>
        </article>

        <article className="card p-6 sm:p-8">
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Elektronische Kontaktaufnahme
          </h2>
          <div className="mt-5">
            <EmailReveal />
          </div>
        </article>

        <article className="card p-6 sm:p-8 md:col-span-2">
          <p className="eyebrow">Redaktionelle Verantwortung</p>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Verantwortlich gemäß § 18 Abs. 2 MStV
          </h2>
          <address className="mt-5 not-italic leading-7 text-forest/75">
            <strong className="text-forest">Stefan Tiedtke</strong>
            <br />
            Herbstweg 3
            <br />
            86899 Landsberg
          </address>
        </article>

        <div className="rounded-2xl border border-sage/40 bg-sage/10 p-4 text-sm leading-6 text-forest/70 md:col-span-2">
          Die Inhalte von GROWNAVI dienen der allgemeinen Information und
          Bildung. Sie stellen insbesondere keine Rechtsberatung und keine
          medizinische Beratung dar.
        </div>
      </section>
    </>
  );
}
