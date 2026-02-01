'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  projectType: string;
  material: string;
  thickness: string;
  dimensions: {
    length: string;
    width: string;
  };
  quantity: string;
  services: string[];
  finishing: string;
  urgency: string;
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  };
}

const projectTypes = [
  { id: 'couvertine', name: 'Couvertines', icon: '🏠', description: 'Protection murets et acrotères' },
  { id: 'precadre', name: 'Précadres', icon: '🪟', description: 'Cadres pour menuiseries ITE/ITI' },
  { id: 'habillage', name: 'Habillage Façade', icon: '🏢', description: 'Bardage et parement métallique' },
  { id: 'decoupe', name: 'Découpe Décorative', icon: '✨', description: 'Motifs et pièces décoratives' },
  { id: 'garde-corps', name: 'Garde-corps', icon: '🛡️', description: 'Rambardes et protections' },
  { id: 'tolerie', name: 'Tôlerie Sur Mesure', icon: '⚙️', description: 'Pièces industrielles' },
];

const materials = [
  { id: 'acier', name: 'Acier', description: 'Robuste et économique' },
  { id: 'inox', name: 'Inox 304L/316L', description: 'Résistant à la corrosion' },
  { id: 'aluminium', name: 'Aluminium', description: 'Léger et durable' },
  { id: 'galvanise', name: 'Acier Galvanisé', description: 'Protection anti-corrosion' },
];

const thicknesses: Record<string, string[]> = {
  acier: ['1mm', '1.5mm', '2mm', '3mm', '4mm', '5mm', '6mm', '8mm', '10mm', '15mm', '20mm', '25mm'],
  inox: ['1mm', '1.5mm', '2mm', '3mm', '4mm', '5mm', '6mm', '8mm', '10mm', '15mm', '20mm'],
  aluminium: ['1mm', '1.5mm', '2mm', '3mm', '4mm', '5mm', '6mm', '8mm', '10mm', '12mm'],
  galvanise: ['1mm', '1.5mm', '2mm', '3mm', '4mm', '5mm'],
};

const services = [
  { id: 'decoupe', name: 'Découpe Laser', icon: '⚡' },
  { id: 'pliage', name: 'Pliage CNC', icon: '📐' },
  { id: 'soudure', name: 'Soudure', icon: '🔥' },
  { id: 'thermolaquage', name: 'Thermolaquage', icon: '🎨' },
  { id: 'montage', name: 'Pré-montage Usine', icon: '🔧' },
];

const finishings = [
  { id: 'brut', name: 'Brut (sans finition)', price: 0 },
  { id: 'galvanise', name: 'Galvanisation à froid', price: 15 },
  { id: 'thermolaque-std', name: 'Thermolaquage RAL standard', price: 25 },
  { id: 'thermolaque-spe', name: 'Thermolaquage RAL spécial', price: 35 },
  { id: 'brossage', name: 'Brossage / Satinage', price: 20 },
];

const urgencies = [
  { id: 'standard', name: 'Standard (10-15 jours)', multiplier: 1 },
  { id: 'urgent', name: 'Urgent (5-7 jours)', multiplier: 1.3 },
  { id: 'express', name: 'Express (3-5 jours)', multiplier: 1.5 },
];

export default function QuoteSimulator() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    material: '',
    thickness: '',
    dimensions: { length: '', width: '' },
    quantity: '1',
    services: [],
    finishing: '',
    urgency: 'standard',
    contact: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const updateContact = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  };

  const calculateEstimate = (): { min: number; max: number } => {
    // Base prices per material (€/m²)
    const basePrices: Record<string, number> = {
      acier: 45,
      inox: 85,
      aluminium: 65,
      galvanise: 55,
    };

    // Thickness multipliers
    const thicknessMultiplier = parseFloat(formData.thickness) / 2 || 1;

    // Calculate surface area
    const length = parseFloat(formData.dimensions.length) / 1000 || 0;
    const width = parseFloat(formData.dimensions.width) / 1000 || 0;
    const surface = length * width;
    const quantity = parseInt(formData.quantity) || 1;

    // Base calculation
    let basePrice = (basePrices[formData.material] || 50) * surface * thicknessMultiplier * quantity;

    // Add services
    const servicesCost = formData.services.length * 25 * quantity;

    // Add finishing
    const finishingOption = finishings.find((f) => f.id === formData.finishing);
    const finishingCost = (finishingOption?.price || 0) * surface * quantity;

    // Apply urgency multiplier
    const urgencyOption = urgencies.find((u) => u.id === formData.urgency);
    const urgencyMultiplier = urgencyOption?.multiplier || 1;

    const total = (basePrice + servicesCost + finishingCost) * urgencyMultiplier;

    // Return range
    return {
      min: Math.max(50, Math.round(total * 0.8)),
      max: Math.round(total * 1.2),
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return !!formData.projectType;
      case 2:
        return !!formData.material && !!formData.thickness;
      case 3:
        return !!formData.dimensions.length && !!formData.dimensions.width && !!formData.quantity;
      case 4:
        return !!formData.contact.name && !!formData.contact.email && !!formData.contact.phone;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="heading-lg text-white mb-4">Demande Envoyée !</h2>
        <p className="text-body mb-8">
          Merci pour votre demande. Notre équipe vous recontactera sous 48 heures
          avec un devis détaillé personnalisé.
        </p>
        <div className="glass rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Estimation Indicative</h3>
          <div className="text-3xl font-bold text-gradient">
            {calculateEstimate().min}€ - {calculateEstimate().max}€ HT
          </div>
          <p className="text-sm text-metal-400 mt-2">
            Cette estimation est donnée à titre indicatif. Le devis final sera établi après étude de votre projet.
          </p>
        </div>
        <Link href="/" className="btn-primary inline-flex">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s <= step
                  ? 'bg-blue-500 text-white'
                  : 'bg-metal-800 text-metal-500'
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 4 && (
              <div
                className={`hidden sm:block w-16 md:w-24 lg:w-32 h-1 mx-2 rounded ${
                  s < step ? 'bg-blue-500' : 'bg-metal-800'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="hidden sm:grid grid-cols-4 gap-4 mb-8 text-center">
        <div className={step >= 1 ? 'text-white' : 'text-metal-500'}>Type de projet</div>
        <div className={step >= 2 ? 'text-white' : 'text-metal-500'}>Matériau</div>
        <div className={step >= 3 ? 'text-white' : 'text-metal-500'}>Dimensions</div>
        <div className={step >= 4 ? 'text-white' : 'text-metal-500'}>Contact</div>
      </div>

      {/* Form Content */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        {/* Step 1: Project Type */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Quel type de projet ?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => updateFormData('projectType', type.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formData.projectType === type.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-metal-700 hover:border-metal-600'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{type.icon}</span>
                  <span className="font-semibold text-white block">{type.name}</span>
                  <span className="text-sm text-metal-400">{type.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Material & Thickness */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Choix du matériau</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => {
                      updateFormData('material', mat.id);
                      updateFormData('thickness', '');
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.material === mat.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-metal-700 hover:border-metal-600'
                    }`}
                  >
                    <span className="font-semibold text-white block">{mat.name}</span>
                    <span className="text-sm text-metal-400">{mat.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {formData.material && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Épaisseur</h3>
                <div className="flex flex-wrap gap-2">
                  {thicknesses[formData.material]?.map((t) => (
                    <button
                      key={t}
                      onClick={() => updateFormData('thickness', t)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        formData.thickness === t
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-metal-700 text-metal-400 hover:border-metal-600'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Dimensions & Services */}
        {step === 3 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Dimensions et quantité</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-metal-400 mb-2">Longueur (mm)</label>
                  <input
                    type="number"
                    value={formData.dimensions.length}
                    onChange={(e) =>
                      updateFormData('dimensions', {
                        ...formData.dimensions,
                        length: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Ex: 2000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-metal-400 mb-2">Largeur (mm)</label>
                  <input
                    type="number"
                    value={formData.dimensions.width}
                    onChange={(e) =>
                      updateFormData('dimensions', {
                        ...formData.dimensions,
                        width: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Ex: 500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-metal-400 mb-2">Quantité</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => updateFormData('quantity', e.target.value)}
                    className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services souhaités</h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition-all ${
                      formData.services.includes(service.id)
                        ? 'border-blue-500 bg-blue-500/10 text-white'
                        : 'border-metal-700 text-metal-400 hover:border-metal-600'
                    }`}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Finition</h3>
              <div className="space-y-2">
                {finishings.map((finish) => (
                  <label
                    key={finish.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.finishing === finish.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-metal-700 hover:border-metal-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="finishing"
                        checked={formData.finishing === finish.id}
                        onChange={() => updateFormData('finishing', finish.id)}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="text-white">{finish.name}</span>
                    </div>
                    {finish.price > 0 && (
                      <span className="text-sm text-metal-400">+{finish.price}€/m²</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Délai</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {urgencies.map((urgency) => (
                  <button
                    key={urgency.id}
                    onClick={() => updateFormData('urgency', urgency.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      formData.urgency === urgency.id
                        ? 'border-blue-500 bg-blue-500/10 text-white'
                        : 'border-metal-700 text-metal-400 hover:border-metal-600'
                    }`}
                  >
                    <span className="block">{urgency.name}</span>
                    {urgency.multiplier > 1 && (
                      <span className="text-xs text-orange-400">
                        +{Math.round((urgency.multiplier - 1) * 100)}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Estimate */}
            {formData.dimensions.length && formData.dimensions.width && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-metal-300">Estimation indicative :</span>
                  <span className="text-xl font-bold text-gradient">
                    {calculateEstimate().min}€ - {calculateEstimate().max}€ HT
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Vos coordonnées</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-metal-400 mb-2">Nom / Prénom *</label>
                <input
                  type="text"
                  value={formData.contact.name}
                  onChange={(e) => updateContact('name', e.target.value)}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm text-metal-400 mb-2">Société</label>
                <input
                  type="text"
                  value={formData.contact.company}
                  onChange={(e) => updateContact('company', e.target.value)}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Entreprise SARL"
                />
              </div>
              <div>
                <label className="block text-sm text-metal-400 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  placeholder="jean@exemple.com"
                />
              </div>
              <div>
                <label className="block text-sm text-metal-400 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.contact.phone}
                  onChange={(e) => updateContact('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-metal-400 mb-2">Message / Précisions</label>
                <textarea
                  value={formData.contact.message}
                  onChange={(e) => updateContact('message', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Décrivez votre projet, joignez des plans si possible..."
                />
              </div>
            </div>

            {/* Final Estimate */}
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-metal-400">Projet :</span>
                  <span className="text-white">{projectTypes.find((p) => p.id === formData.projectType)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-metal-400">Matériau :</span>
                  <span className="text-white">{materials.find((m) => m.id === formData.material)?.name} {formData.thickness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-metal-400">Dimensions :</span>
                  <span className="text-white">{formData.dimensions.length} x {formData.dimensions.width} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-metal-400">Quantité :</span>
                  <span className="text-white">{formData.quantity} pièce(s)</span>
                </div>
                <div className="border-t border-metal-700 my-3" />
                <div className="flex justify-between text-lg">
                  <span className="text-white font-semibold">Estimation :</span>
                  <span className="font-bold text-gradient">
                    {calculateEstimate().min}€ - {calculateEstimate().max}€ HT
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-metal-700">
          {step > 1 ? (
            <button
              onClick={() => setStep((step - 1) as Step)}
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep((step + 1) as Step)}
              disabled={!canProceed()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
