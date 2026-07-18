import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { toolDefinitions } from "@/lib/tools";
import { ToolEngine } from "@/components/tool-engine";
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
  return { title: t?.title, description: t?.text };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = toolDefinitions.find((x) => x.slug === slug);
  if (!t) notFound();
  return <ToolEngine slug={slug} title={t.title} description={t.text} />;
}
