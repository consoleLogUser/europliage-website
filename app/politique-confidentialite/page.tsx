import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialite - Europliage',
  description: 'Politique de confidentialite et protection des donnees personnelles du site Europliage.com. Information sur la collecte et l\'utilisation de vos donnees.',
  alternates: {
    canonical: 'https://www.europliage.com/politique-confidentialite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
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
              Politique de <span className="text-gradient">Confidentialite</span>
            </h1>
            <p className="text-metal-400">Derniere mise a jour : Janvier 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  EUROPLIAGE SAS s'engage a proteger la vie privee des utilisateurs de son site web
                  www.europliage.com. Cette politique de confidentialite explique comment nous
                  collectons, utilisons et protegeons vos donnees personnelles.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques decrites dans cette politique.
                </p>
              </div>
            </div>

            {/* Responsable traitement */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">1. Responsable du traitement</h2>
              <div className="space-y-4 text-metal-300">
                <p>Le responsable du traitement des donnees personnelles est :</p>
                <p><strong className="text-white">EUROPLIAGE SAS</strong></p>
                <p>ZI secteur D12, Allee des Santonniers</p>
                <p>06700 Saint-Laurent-du-Var, France</p>
                <p>Email : commande@europliage.com</p>
                <p>Telephone : 04 93 19 40 90</p>
              </div>
            </div>

            {/* Donnees collectees */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">2. Donnees collectees</h2>
              <div className="space-y-4 text-metal-300">
                <p>Nous pouvons collecter les types de donnees suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Donnees d'identification :</strong> nom, prenom, adresse email, numero de telephone</li>
                  <li><strong className="text-white">Donnees professionnelles :</strong> nom de l'entreprise, fonction</li>
                  <li><strong className="text-white">Donnees de navigation :</strong> adresse IP, type de navigateur, pages visitees, duree de visite</li>
                  <li><strong className="text-white">Donnees de contact :</strong> messages envoyes via le formulaire de contact</li>
                </ul>
              </div>
            </div>

            {/* Finalites */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">3. Finalites du traitement</h2>
              <div className="space-y-4 text-metal-300">
                <p>Vos donnees personnelles sont collectees pour les finalites suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Repondre a vos demandes de devis et de contact</li>
                  <li>Vous fournir des informations sur nos services et produits</li>
                  <li>Ameliorer notre site web et nos services</li>
                  <li>Realiser des statistiques de frequentation anonymisees</li>
                  <li>Respecter nos obligations legales</li>
                </ul>
              </div>
            </div>

            {/* Base legale */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">4. Base legale du traitement</h2>
              <div className="space-y-4 text-metal-300">
                <p>Le traitement de vos donnees personnelles est fonde sur :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Votre consentement</strong> lorsque vous remplissez un formulaire de contact</li>
                  <li><strong className="text-white">L'execution d'un contrat</strong> ou les mesures precontractuelles pour traiter vos demandes de devis</li>
                  <li><strong className="text-white">Notre interet legitime</strong> pour ameliorer nos services et notre site web</li>
                  <li><strong className="text-white">Une obligation legale</strong> pour respecter la reglementation applicable</li>
                </ul>
              </div>
            </div>

            {/* Destinataires */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">5. Destinataires des donnees</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Vos donnees personnelles sont destinees exclusivement a EUROPLIAGE SAS et ne sont
                  pas transmises a des tiers, sauf :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Aux prestataires techniques intervenant pour l'hebergement et la maintenance du site</li>
                  <li>Aux autorites competentes en cas d'obligation legale</li>
                </ul>
                <p>
                  Nous ne vendons ni ne louons vos donnees personnelles a des tiers.
                </p>
              </div>
            </div>

            {/* Duree conservation */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">6. Duree de conservation</h2>
              <div className="space-y-4 text-metal-300">
                <p>Vos donnees personnelles sont conservees pendant :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Donnees de contact :</strong> 3 ans a compter du dernier contact</li>
                  <li><strong className="text-white">Donnees de navigation :</strong> 13 mois maximum</li>
                  <li><strong className="text-white">Donnees contractuelles :</strong> duree de la relation commerciale + 5 ans (prescriptions legales)</li>
                </ul>
              </div>
            </div>

            {/* Droits */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">7. Vos droits</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Conformement au RGPD et a la loi Informatique et Libertes, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Droit d'acces :</strong> obtenir la confirmation que des donnees vous concernant sont traitees</li>
                  <li><strong className="text-white">Droit de rectification :</strong> faire corriger des donnees inexactes</li>
                  <li><strong className="text-white">Droit a l'effacement :</strong> demander la suppression de vos donnees</li>
                  <li><strong className="text-white">Droit a la limitation :</strong> limiter le traitement de vos donnees</li>
                  <li><strong className="text-white">Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
                  <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos donnees</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous a : commande@europliage.com
                </p>
                <p>
                  Vous disposez egalement du droit d'introduire une reclamation aupres de la CNIL
                  (www.cnil.fr).
                </p>
              </div>
            </div>

            {/* Securite */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">8. Securite des donnees</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees
                  pour assurer la securite et la confidentialite de vos donnees personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des donnees en transit (HTTPS/TLS)</li>
                  <li>Acces restreint aux donnees personnelles</li>
                  <li>Hebergement securise des donnees</li>
                  <li>Mises a jour regulieres de securite</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">9. Cookies</h2>
              <div className="space-y-4 text-metal-300">
                <p>Notre site utilise des cookies pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Cookies techniques :</strong> necessaires au fonctionnement du site</li>
                  <li><strong className="text-white">Cookies analytiques :</strong> mesure d'audience anonymisee</li>
                </ul>
                <p>
                  Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">10. Modifications de la politique</h2>
              <div className="space-y-4 text-metal-300">
                <p>
                  Nous nous reservons le droit de modifier cette politique de confidentialite a tout
                  moment. Les modifications entreront en vigueur des leur publication sur le site.
                  Nous vous encourageons a consulter regulierement cette page.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="glass p-8 rounded-2xl bg-blue-500/10 border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <p className="text-metal-300 mb-6">
                Pour toute question concernant cette politique de confidentialite ou pour exercer
                vos droits, contactez-nous :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:commande@europliage.com" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </a>
                <Link href="/mentions-legales" className="btn-secondary">
                  Mentions legales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
