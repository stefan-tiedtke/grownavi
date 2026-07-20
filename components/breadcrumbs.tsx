import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE_URL = "https://www.grownavi.de";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, BASE_URL).toString(),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Brotkrümelnavigation">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-forest/60">
          {items.map((item, index) => {
            const current = index === items.length - 1;
            return (
              <li className="flex items-center gap-1.5" key={item.href}>
                {index > 0 && (
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                )}
                {current ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-forest"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    className="transition hover:text-forest"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
