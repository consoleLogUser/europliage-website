'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const pathNameMap: Record<string, string> = {
  '': 'Accueil',
  'services': 'Services',
  'produits': 'Produits',
  'realisations': 'Realisations',
  'a-propos': 'A Propos',
  'contact': 'Contact',
  'mentions-legales': 'Mentions Legales',
  'politique-confidentialite': 'Politique de Confidentialite',
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Ne pas afficher sur la page d'accueil
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' },
    ...pathSegments.map((segment, index) => ({
      name: pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: '/' + pathSegments.slice(0, index + 1).join('/'),
    })),
  ];

  // Schema.org BreadcrumbList JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.europliage.com${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* UI Breadcrumbs */}
      <nav
        aria-label="Fil d'Ariane"
        className="py-4 px-4 sm:px-0"
      >
        <ol
          className="flex items-center flex-wrap gap-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-metal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}

                {isLast ? (
                  <span
                    className="text-blue-400 font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-metal-400 hover:text-blue-400 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
