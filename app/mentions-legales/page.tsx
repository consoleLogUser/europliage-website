import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Legales - Europliage SAS',
  description: 'Mentions legales du site Europliage.com. Informations sur l\'editeur, l\'hebergeur et les conditions d\'utilisation du site web.',
  alternates: {
    canonical: 'https://www.europliage.com/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-metal-950 to-metal-900">
      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour a l'accueil
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mentions <span className="text-gradient">Legales</span>
            </h1>
            <p className="text-metal-400">Derniere mise a jour : Janvier 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Editeur */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">1. Editeur du site</h2>
              <div className="space-y-4 text-metal-300">
                <p><strong className="text-white">Raison sociale :</strong> EUROPLIAGE SAS</p>
                <p><strong className="text-white">Forme juridique :</strong> Societe par Actions Simplifiee (SAS)</p>
                <p><strong className="text-white">Capital social :</strong> 50 000 euros</p>
                <p><strong className="text-white">SIRET :</strong> 379 087 976</p>
                <p><strong className="text-white">RCS :</strong> Antibes 379 087 976</p>
                <p><strong className="text-white">Siege social :</strong> ZI secteur D12, Allee des Santonniers, 06700 Saint-Laurent-du-Var, France</p>
                <p><strong className="text-white">Telephone :</strong> 04 93 19 40 90</p>
                <p><strong className="text-white">Email :</strong> commande@europliage.com</p>
                <p><strong className="text-white">Directeur de la publication :</strong> Le President de la societe</p>
              </div>
            </div>

            {/* Hebergeur */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">2. Hebergement</h2>
              <div className="space-y-4 text-metal-300">
                <p>Le site www.europliage.com est heberge par :</p>
                <p><strong className="text-white">Vercel Inc.</strong></p>
                <p>440 N Barranca Ave #4133</p>
                <p>Covina, CA 91723, USA</p>
                <p>Site web : vercel.com</p>
              </div>
            </div>

            {/* Propriete intellectuelle */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">3. Propriete intellectuelle</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  L'ensemble de ce site releve de la legislation francaise et internationale sur le droit d'auteur
                  et la propriete intellectuelle. Tous les droits de reproduction sont reserves, y compris pour
                  les documents telechargeables et les representations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support electronique quel qu'il soit est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos figurant sur ce site sont des marques deposees. Toute reproduction totale
                  ou partielle de ces marques ou de ces logos effectuee a partir des elements du site sans
                  l'autorisation expresse d'EUROPLIAGE est prohibee.
                </p>
              </div>
            </div>

            {/* Donnees personnelles */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">4. Protection des donnees personnelles</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Conformement a la loi Informatique et Libertes du 6 janvier 1978 modifiee et au Reglement
                  General sur la Protection des Donnees (RGPD), vous disposez d'un droit d'acces, de
                  rectification, de suppression et d'opposition aux donnees personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter par email a l'adresse :
                  commande@europliage.com ou par courrier a l'adresse du siege social.
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos donnees, consultez notre{' '}
                  <Link href="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 underline">
                    politique de confidentialite
                  </Link>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">5. Cookies</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Le site www.europliage.com peut etre amene a utiliser des cookies pour ameliorer
                  l'experience utilisateur et realiser des statistiques de visites. Vous pouvez
                  configurer votre navigateur pour refuser les cookies.
                </p>
                <p>
                  Les cookies utilises sont principalement des cookies techniques necessaires au bon
                  fonctionnement du site et des cookies de mesure d'audience anonymises.
                </p>
              </div>
            </div>

            {/* Responsabilite */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">6. Limitation de responsabilite</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  EUROPLIAGE s'efforce d'assurer au mieux l'exactitude et la mise a jour des informations
                  diffusees sur ce site. Toutefois, EUROPLIAGE ne peut garantir l'exactitude, la precision
                  ou l'exhaustivite des informations mises a disposition sur ce site.
                </p>
                <p>
                  EUROPLIAGE decline toute responsabilite pour toute imprecision, inexactitude ou omission
                  portant sur des informations disponibles sur ce site, ainsi que pour tous dommages
                  resultant d'une intrusion frauduleuse d'un tiers.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">7. Droit applicable</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Les presentes mentions legales sont soumises au droit francais. En cas de litige,
                  les tribunaux francais seront seuls competents.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="glass p-8 rounded-2xl bg-blue-500/10 border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <p className="text-metal-300 mb-6">
                Pour toute question concernant ces mentions legales, vous pouvez nous contacter :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:commande@europliage.com" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </a>
                <Link href="/contact" className="btn-secondary">
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
