'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Quels sont vos delais de livraison ?',
    answer: 'Nos delais varient selon la complexite du projet. Pour les pieces standards, comptez 5 a 10 jours ouvrables. Pour les projets sur mesure, le delai est communique lors du devis. Nous livrons dans les Alpes-Maritimes (06) et le Var (83).',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Oui, tous nos devis sont gratuits et sans engagement. Envoyez-nous vos plans (DXF, PDF ou gabarits) et recevez votre devis detaille sous 48 heures. Notre bureau d\'etudes peut egalement vous accompagner dans la conception.',
  },
  {
    question: 'Quels materiaux travaillez-vous ?',
    answer: 'Nous travaillons l\'acier (jusqu\'a 25mm), l\'inox 304L et 316L (jusqu\'a 20mm), l\'aluminium (jusqu\'a 12mm) et l\'acier galvanise. Notre atelier est equipe pour la decoupe laser, le pliage CNC, la soudure et le thermolaquage.',
  },
  {
    question: 'Faites-vous des petites series ou uniquement des grandes quantites ?',
    answer: 'Nous realisons aussi bien des pieces unitaires et prototypes que des productions en serie. Notre flexibilite nous permet de nous adapter a tous types de projets, du garde-corps unique aux couvertines en grande quantite.',
  },
  {
    question: 'Proposez-vous le thermolaquage ?',
    answer: 'Oui, notre atelier de thermolaquage integre propose plus de 150 coloris RAL. Dimensions maximales : 3800 x 1700 mm. Finitions disponibles : brillant, mat ou texture fine. Le traitement anti-corrosion est inclus avec une garantie de 10 ans.',
  },
  {
    question: 'Ou etes-vous situes et quelles zones livrez-vous ?',
    answer: 'Notre atelier de 800m2 est situe a Saint-Laurent-du-Var (06700), dans la zone industrielle secteur D12. Nous livrons dans tout le departement des Alpes-Maritimes (06) et du Var (83). Le retrait en atelier est egalement possible.',
  },
];

// JSON-LD Schema pour FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="faq-heading">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10 px-4 sm:px-0">
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal section-label mx-auto w-fit mb-4">
            Questions Frequentes
          </div>
          <h2 id="faq-heading" className="reveal heading-lg text-white mb-6" style={{ transitionDelay: '0.1s' }}>
            Vos <span className="text-gradient">Questions</span>
          </h2>
          <p className="reveal text-body-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
            Retrouvez les reponses aux questions les plus frequentes sur nos services de metallerie.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="reveal glass rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${0.1 * index}s` }}
                role="listitem"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-metal-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal mt-10 text-center" style={{ transitionDelay: '0.5s' }}>
            <p className="text-metal-400 mb-4">
              Vous avez d'autres questions ?
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex"
            >
              <span>Contactez-nous</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
