import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Articles data
const articles: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  relatedArticles: string[];
}> = {
  'comment-choisir-materiau-projet-metallerie': {
    title: 'Comment choisir le bon materiau pour votre projet metallerie',
    excerpt: 'Acier, inox, aluminium ou galvanise ? Decouvrez les criteres essentiels pour selectionner le materiau adapte.',
    content: [
      'Le choix du materiau est une etape cruciale dans tout projet de metallerie. Il determine non seulement l\'esthetique finale, mais aussi la durabilite, la resistance et le cout de votre realisation.',
      '## L\'Acier : polyvalence et robustesse',
      'L\'acier reste le materiau de reference en metallerie industrielle. Disponible en differentes epaisseurs (de 0.5mm a 25mm dans notre atelier), il offre un excellent rapport qualite-prix. Points forts : grande resistance mecanique, facilite de soudure, large gamme d\'epaisseurs. A privilegier pour : structures porteuses, garde-corps, precadres, pieces industrielles.',
      '## L\'Inox : durabilite et esthetique',
      'L\'acier inoxydable (304L ou 316L) est ideal pour les environnements exigeants. Le 316L resiste particulierement bien aux environnements marins et chimiques. Points forts : resistance a la corrosion, aspect moderne, facilite d\'entretien. A privilegier pour : cuisine professionnelle, milieu medical, exterieur bord de mer, pieces decoratives haut de gamme.',
      '## L\'Aluminium : legerete et design',
      'Trois fois plus leger que l\'acier, l\'aluminium est parfait pour les applications ou le poids compte. Points forts : legerete, resistance naturelle a la corrosion, facilite de mise en forme. A privilegier pour : enseignes, habillages facade, menuiseries, pieces de grandes dimensions.',
      '## L\'Acier Galvanise : protection longue duree',
      'Le zingage offre une protection durable contre la corrosion, ideale pour les utilisations exterieures. Points forts : excellente resistance aux intemperies, duree de vie prolongee, cout maitrise. A privilegier pour : couvertines, elements de toiture, structures exterieures.',
      '## Tableau comparatif',
      'Voici un resume des caracteristiques principales de chaque materiau pour vous aider dans votre choix.',
      '## Notre conseil',
      'Chez Europliage, notre bureau d\'etudes vous accompagne gratuitement dans le choix du materiau optimal pour votre projet. N\'hesitez pas a nous contacter pour un devis personnalise incluant nos recommandations techniques.',
    ],
    category: 'Guides',
    image: '/images-europliage/decoupe-laser-acier.jpg',
    readTime: '5 min',
    date: '2025-01-15',
    author: 'Equipe Europliage',
    relatedArticles: ['decoupe-laser-vs-decoupe-traditionnelle', 'thermolaquage-avantages-entretien'],
  },
  'decoupe-laser-vs-decoupe-traditionnelle': {
    title: 'Decoupe laser vs decoupe traditionnelle : comparatif complet',
    excerpt: 'Precision, rapidite, cout : toutes les differences entre la decoupe laser et les methodes traditionnelles.',
    content: [
      'La decoupe laser a revolutionne l\'industrie metallurgique. Mais est-elle toujours le meilleur choix ? Comparons objectivement les deux approches.',
      '## La decoupe laser : precision au dixieme',
      'Notre machine de decoupe laser atteint une precision de 0.1mm, permettant des decoupes complexes impossibles avec les methodes traditionnelles. Avantages : precision extreme, pas de contact avec la piece, pas de bavures, motifs complexes possibles, reproductibilite parfaite.',
      '## La decoupe traditionnelle (cisaille)',
      'La cisaille reste pertinente pour les decoupes droites simples sur de grandes series. Avantages : cout inferieur sur grandes quantites, rapidite sur coupes droites, pas de zone affectee thermiquement.',
      '## Quand choisir le laser ?',
      'Privilegiez la decoupe laser pour : les motifs decoratifs et complexes, les pieces de precision, les prototypes et petites series, les materiaux fins (moins de 3mm).',
      '## Quand choisir la cisaille ?',
      'La cisaille est adaptee pour : les decoupes droites repetitives, les grandes series standardisees, les budgets serres sur pieces simples.',
      '## Chez Europliage',
      'Nous disposons des deux technologies et vous conseillons la solution optimale selon votre projet. Devis gratuit sous 48h.',
    ],
    category: 'Comparatifs',
    image: '/images-europliage/decoupe-laser-acier.jpg',
    readTime: '7 min',
    date: '2025-01-10',
    author: 'Equipe Europliage',
    relatedArticles: ['comment-choisir-materiau-projet-metallerie', 'pliage-cnc-precision-tolerances'],
  },
  'thermolaquage-avantages-entretien': {
    title: 'Thermolaquage : avantages et conseils d\'entretien',
    excerpt: 'Pourquoi choisir le thermolaquage pour vos pieces metalliques ?',
    content: [
      'Le thermolaquage est devenu la reference pour la finition des pieces metalliques. Decouvrez pourquoi et comment l\'entretenir.',
      '## Qu\'est-ce que le thermolaquage ?',
      'Le thermolaquage (ou peinture poudre) consiste a appliquer une poudre de resine sur le metal, puis a la cuire au four a 180-200°C. La poudre fusionne et forme un film protecteur homogene.',
      '## Les 5 avantages du thermolaquage',
      '1. Durabilite exceptionnelle : resistance aux UV, intemperies et chocs. 2. Ecologique : pas de solvants, zero COV. 3. Esthetique : plus de 150 coloris RAL disponibles chez Europliage. 4. Uniformite : epaisseur constante meme sur les angles. 5. Economique : moins de dechets que la peinture liquide.',
      '## Finitions disponibles',
      'Chez Europliage, nous proposons trois finitions : brillante (aspect laque), mate (aspect sobre), texturee (masque les imperfections).',
      '## Conseils d\'entretien',
      'Le thermolaquage necessite peu d\'entretien. Nettoyez simplement a l\'eau savonneuse une a deux fois par an. Evitez les produits abrasifs et les nettoyeurs haute pression a moins de 30cm.',
      '## Notre garantie',
      'Europliage garantit ses finitions thermolaquees 10 ans contre le decollement et l\'ecaillage.',
    ],
    category: 'Conseils',
    image: '/images-europliage/atelier-1.jpg',
    readTime: '4 min',
    date: '2025-01-05',
    author: 'Equipe Europliage',
    relatedArticles: ['comment-choisir-materiau-projet-metallerie', 'couvertines-protection-murets-acroteres'],
  },
  'precadres-acier-isolation-thermique-ite': {
    title: 'Precadres acier : la solution pour l\'isolation thermique ITE',
    excerpt: 'Comment les precadres en acier galvanise ameliorent l\'isolation thermique par l\'exterieur.',
    content: [
      'L\'isolation thermique par l\'exterieur (ITE) est devenue incontournable avec les nouvelles normes energetiques. Les precadres acier jouent un role crucial dans cette technique.',
      '## Qu\'est-ce qu\'un precadre ?',
      'Un precadre est un cadre metallique installe avant la pose des menuiseries. Il permet de reporter la fenetre au nu exterieur du mur, eliminant les ponts thermiques au niveau des tableaux.',
      '## Pourquoi l\'acier galvanise ?',
      'Nous fabriquons nos precadres en acier 15/10 galvanise a froid pour : une resistance mecanique optimale, une protection anti-corrosion longue duree, une compatibilite avec tous types de menuiseries.',
      '## Specifications techniques Europliage',
      'Epaisseur : 1.5mm (15/10). Traitement : galvanisation a froid. Assemblage : soude en usine. Dimensions : sur mesure selon vos plans. Options : pattes de fixation, bouchons d\'etancheite.',
      '## Avantages de nos precadres',
      'Fabrication 100% en interne : controle qualite total. Delais rapides : 5 a 10 jours ouvrables. Sur mesure : adaptation a toutes configurations. Livraison : 06 et 83.',
      '## Demandez votre devis',
      'Envoyez-nous vos plans et recevez un devis detaille sous 48h.',
    ],
    category: 'Produits',
    image: '/images-europliage/precadre-acier.jpg',
    readTime: '6 min',
    date: '2024-12-20',
    author: 'Equipe Europliage',
    relatedArticles: ['comment-choisir-materiau-projet-metallerie', 'couvertines-protection-murets-acroteres'],
  },
  'pliage-cnc-precision-tolerances': {
    title: 'Pliage CNC : comprendre les tolerances et la precision',
    excerpt: 'Qu\'est-ce qui determine la precision d\'un pliage CNC ?',
    content: [
      'Le pliage CNC offre une precision remarquable, mais plusieurs parametres influencent le resultat final. Comprendre ces facteurs vous aidera a mieux specifier vos pieces.',
      '## Qu\'est-ce que le pliage CNC ?',
      'Le pliage CNC (Commande Numerique par Calculateur) utilise une presse plieuse pilotee par ordinateur. Les parametres de pliage sont programmes pour une reproductibilite parfaite.',
      '## Les facteurs de precision',
      'Plusieurs elements influencent la precision finale : l\'epaisseur du materiau, le type de materiau (acier, inox, alu), la longueur de pliage, l\'angle demande, le sens de laminage.',
      '## Tolerances standards',
      'Chez Europliage, nous garantissons : tolerance angulaire de +/- 0.5 degre, tolerance dimensionnelle de +/- 0.5mm, reproductibilite serie parfaite.',
      '## Le retour elastique',
      'Apres pliage, le metal tend a "revenir" legerement. Nos programmes CNC compensent automatiquement ce phenomene pour atteindre l\'angle exact demande.',
      '## Notre parc machines',
      'Europliage dispose de presses plieuses jusqu\'a 320 tonnes et 4 metres de longueur utile, permettant de traiter la majorite des projets.',
      '## Conseil de conception',
      'Pour optimiser vos pieces pliees, respectez un rayon interieur minimum egal a l\'epaisseur du materiau et prevoyez des ailes suffisantes pour la prise d\'outil.',
    ],
    category: 'Technique',
    image: '/images-europliage/pliage-metal.jpg',
    readTime: '8 min',
    date: '2024-12-15',
    author: 'Equipe Europliage',
    relatedArticles: ['decoupe-laser-vs-decoupe-traditionnelle', 'comment-choisir-materiau-projet-metallerie'],
  },
  'couvertines-protection-murets-acroteres': {
    title: 'Couvertines : proteger efficacement vos murets et acroteres',
    excerpt: 'Quel type de couvertine choisir ? Guide complet.',
    content: [
      'Les couvertines sont essentielles pour proteger les parties horizontales des ouvrages maconnes. Decouvrez comment choisir le modele adapte.',
      '## Qu\'est-ce qu\'une couvertine ?',
      'Une couvertine est un element de protection metallique pose sur le dessus des murets, acroteres et appuis pour evacuer les eaux de pluie et proteger la maconnerie.',
      '## Les 3 types de couvertines',
      'Couvertine symetrique : debords egaux de chaque cote, aspect equilibre. Couvertine asymetrique : debord plus important d\'un cote, pour rejeter l\'eau dans une direction. Couvertine plate : profil simple pour les murets fins.',
      '## Materiaux disponibles',
      'Chez Europliage : aluminium laque (150+ coloris RAL), acier galvanise, acier prelaque.',
      '## Comment dimensionner ?',
      'La largeur developpee doit couvrir l\'epaisseur du mur plus les debords souhaites (minimum 3cm de chaque cote). La pente recommandee est de 3 a 5%.',
      '## Fixation et etancheite',
      'Nous preconisons une fixation par pattes invisibles et un joint silicone en partie superieure pour l\'etancheite.',
      '## Fabrication sur mesure',
      'Toutes nos couvertines sont fabriquees sur mesure selon vos cotes exactes. Devis gratuit sous 48h.',
    ],
    category: 'Produits',
    image: '/images-europliage/habillage-facade.jpg',
    readTime: '5 min',
    date: '2024-12-10',
    author: 'Equipe Europliage',
    relatedArticles: ['thermolaquage-avantages-entretien', 'precadres-acier-isolation-thermique-ite'],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: 'Article non trouve',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image }],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.europliage.com${article.image}`,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Europliage',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Europliage',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.europliage.com/images-europliage/logo-europliage.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen">
        {/* Hero */}
        <header className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-metal-950 via-metal-950/80 to-metal-950/60" />
          </div>

          <div className="container-custom relative z-10 px-4">
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-400 mb-6 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour au blog
              </Link>

              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
                {article.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-metal-400">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container-custom px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert prose-lg max-w-none">
                {article.content.map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-metal-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  Besoin d'un devis pour votre projet ?
                </h3>
                <p className="text-metal-300 mb-6">
                  Notre equipe vous repond sous 48h avec un devis detaille et personnalise.
                </p>
                <Link href="/contact" className="btn-primary">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Share */}
                <div className="p-6 bg-metal-900/50 rounded-xl border border-metal-800">
                  <h3 className="text-lg font-bold text-white mb-4">Partager</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-metal-800 rounded-lg flex items-center justify-center text-metal-400 hover:bg-blue-500 hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-metal-800 rounded-lg flex items-center justify-center text-metal-400 hover:bg-blue-500 hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="p-6 bg-metal-900/50 rounded-xl border border-metal-800">
                  <h3 className="text-lg font-bold text-white mb-4">Articles similaires</h3>
                  <div className="space-y-4">
                    {article.relatedArticles.map((relatedSlug) => {
                      const related = articles[relatedSlug];
                      if (!related) return null;
                      return (
                        <Link
                          key={relatedSlug}
                          href={`/blog/${relatedSlug}`}
                          className="block text-metal-400 hover:text-blue-400 transition-colors"
                        >
                          {related.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact */}
                <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/30">
                  <h3 className="text-lg font-bold text-white mb-2">Une question ?</h3>
                  <p className="text-metal-400 text-sm mb-4">
                    Nos experts vous repondent
                  </p>
                  <a href="tel:+33493194090" className="text-blue-400 font-bold">
                    04 93 19 40 90
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
