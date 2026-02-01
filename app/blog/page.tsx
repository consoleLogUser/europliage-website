import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog Conseils Metallerie - Guides et Astuces | Europliage',
  description: 'Conseils d\'experts en metallerie: guides decoupe laser, astuces pliage CNC, choix materiaux, normes qualite. Articles techniques par Europliage, expert depuis 1990.',
  keywords: [
    'conseils metallerie',
    'guide decoupe laser',
    'astuces pliage metal',
    'choisir acier inox aluminium',
    'normes metallerie',
    'thermolaquage conseils',
    'blog tolerie industrielle',
  ],
  alternates: {
    canonical: 'https://www.europliage.com/blog',
  },
  openGraph: {
    title: 'Blog Conseils Metallerie | Europliage Expert',
    description: 'Guides et conseils d\'experts en metallerie et tolerie industrielle.',
    url: 'https://www.europliage.com/blog',
  },
};

const blogArticles = [
  {
    slug: 'comment-choisir-materiau-projet-metallerie',
    title: 'Comment choisir le bon materiau pour votre projet metallerie',
    excerpt: 'Acier, inox, aluminium ou galvanise ? Decouvrez les criteres essentiels pour selectionner le materiau adapte a votre projet: resistance, esthetique, budget et durabilite.',
    category: 'Guides',
    image: '/images-europliage/decoupe-laser-acier.jpg',
    readTime: '5 min',
    date: '2025-01-15',
  },
  {
    slug: 'decoupe-laser-vs-decoupe-traditionnelle',
    title: 'Decoupe laser vs decoupe traditionnelle : comparatif complet',
    excerpt: 'Precision, rapidite, cout : toutes les differences entre la decoupe laser et les methodes traditionnelles. Quand privilegier l\'une ou l\'autre ?',
    category: 'Comparatifs',
    image: '/images-europliage/decoupe-laser-acier.jpg',
    readTime: '7 min',
    date: '2025-01-10',
  },
  {
    slug: 'thermolaquage-avantages-entretien',
    title: 'Thermolaquage : avantages et conseils d\'entretien',
    excerpt: 'Pourquoi choisir le thermolaquage pour vos pieces metalliques ? Decouvrez ses avantages (durabilite, esthetique, ecologie) et nos conseils pour l\'entretenir.',
    category: 'Conseils',
    image: '/images-europliage/atelier-1.jpg',
    readTime: '4 min',
    date: '2025-01-05',
  },
  {
    slug: 'precadres-acier-isolation-thermique-ite',
    title: 'Precadres acier : la solution pour l\'isolation thermique ITE',
    excerpt: 'Comment les precadres en acier galvanise ameliorent l\'isolation thermique par l\'exterieur ? Specifications techniques et avantages pour les professionnels du batiment.',
    category: 'Produits',
    image: '/images-europliage/precadre-acier.jpg',
    readTime: '6 min',
    date: '2024-12-20',
  },
  {
    slug: 'pliage-cnc-precision-tolerances',
    title: 'Pliage CNC : comprendre les tolerances et la precision',
    excerpt: 'Qu\'est-ce qui determine la precision d\'un pliage CNC ? Tolerances angulaires, retour elastique, epaisseur : tous les parametres techniques expliques.',
    category: 'Technique',
    image: '/images-europliage/pliage-metal.jpg',
    readTime: '8 min',
    date: '2024-12-15',
  },
  {
    slug: 'couvertines-protection-murets-acroteres',
    title: 'Couvertines : proteger efficacement vos murets et acroteres',
    excerpt: 'Symetriques, asymetriques ou plates : quel type de couvertine choisir ? Guide complet pour proteger vos ouvrages contre les intemperies.',
    category: 'Produits',
    image: '/images-europliage/habillage-facade.jpg',
    readTime: '5 min',
    date: '2024-12-10',
  },
];

const categories = ['Tous', 'Guides', 'Comparatifs', 'Conseils', 'Produits', 'Technique'];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              Blog & Conseils
            </div>
            <h1 className="heading-xl text-white mb-6">
              Expertise <span className="text-gradient">Metallerie</span>
            </h1>
            <p className="text-body-lg text-metal-300">
              Guides pratiques, conseils techniques et actualites du secteur.
              Profitez de plus de 34 ans d'experience en metallerie industrielle.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-metal-800">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'Tous'
                    ? 'bg-blue-500 text-white'
                    : 'bg-metal-800 text-metal-400 hover:bg-metal-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <article
                key={article.slug}
                className="group bg-metal-900/50 rounded-2xl overflow-hidden border border-metal-800 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-metal-500 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-metal-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  >
                    Lire l'article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-section">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-4">
              Restez informe
            </h2>
            <p className="text-metal-300 mb-8">
              Recevez nos derniers articles et conseils directement dans votre boite mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-5 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white placeholder-metal-500 focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
