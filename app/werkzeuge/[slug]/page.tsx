import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { toolDefinitions } from "@/lib/tools";
import { ToolEngine } from "@/components/tool-engine";
import { Breadcrumbs } from "@/components/breadcrumbs";
export function generateStaticParams() {
  return toolDefinitions.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = toolDefinitions.find((x) => x.slug === slug);
  return {
    title: t ? `${t.title} für den Cannabis-Anbau` : undefined,
    description: t?.text,
    alternates: { canonical: `/werkzeuge/${slug}` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = toolDefinitions.find((x) => x.slug === slug);
  if (!t) notFound();
  return (
    <>
      <div className="container-page pt-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", href: "/" },
            { name: "Werkzeuge", href: "/werkzeuge" },
            { name: t.title, href: `/werkzeuge/${slug}` },
          ]}
        />
      </div>
      <ToolEngine slug={slug} title={t.title} description={t.text} />
    </>
  );
}
