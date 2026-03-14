'use client';

import { useState } from 'react';
import { Check, Loader2, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const plans = [
  {
    id: 'free',
    name: 'Gratuit',
    price: '0',
    description: 'Pour découvrir le service',
    features: [
      '20 images par lot',
      'PNG, JPEG, WebP',
      'Qualité standard',
      'Sans inscription',
    ],
    cta: 'Commencer',
    popular: false,
    gradient: 'from-slate-500 to-slate-600',
    accentColor: 'slate',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '9',
    description: 'Pour les professionnels',
    features: [
      '100 images par lot',
      'API REST illimitée',
      'Qualité ajustable',
      'Support prioritaire',
      'Historique 30 jours',
    ],
    cta: 'Essai gratuit 14 jours',
    popular: true,
    gradient: 'from-fuchsia-500 via-violet-600 to-indigo-600',
    accentColor: 'violet',
  },
  {
    id: 'enterprise',
    name: 'Entreprise',
    price: null,
    description: 'Solutions sur mesure',
    features: [
      'Volume illimité',
      'API haute performance',
      'Serveur dédié France',
      'SLA 99.9%',
      'Account manager',
    ],
    cta: 'Nous contacter',
    popular: false,
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
  },
];

export function PricingSection() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePlanAction = async (planId: string) => {
    if (planId === 'free') {
      document.getElementById('compress')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (planId === 'enterprise') {
      window.location.href = 'mailto:contact@artevotade.com?subject=Demande%20devis%20Entreprise%20-%20CompressImage';
      return;
    }

    if (planId === 'pro') {
      setLoading(planId);

      try {
        const response = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan: 'pro' }),
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error);

        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        }
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Erreur');
        setLoading(null);
      }
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-fuchsia-500" />
            <span className="text-sm font-medium text-violet-700">Tarifs simples et transparents</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choisissez votre
            <span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent"> formule</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Pas de surprise. Commencez gratuitement, passez au Pro si vous en avez besoin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl border-2 bg-white p-8 transition-all
                ${plan.popular
                  ? 'border-violet-400 shadow-xl shadow-violet-500/20 scale-105 z-10'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }
              `}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-violet-500/40">
                    <Sparkles className="w-4 h-4" />
                    Populaire
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${plan.popular ? 'bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent' : 'text-slate-900'}`}>
                      {plan.price}€
                    </span>
                    <span className="text-slate-500">/mois</span>
                  </div>
                ) : (
                  <span className={`text-3xl font-bold ${plan.popular ? 'bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent' : 'text-slate-900'}`}>
                    Sur devis
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-fuchsia-100 to-violet-100' 
                        : plan.accentColor === 'amber'
                          ? 'bg-amber-100'
                          : 'bg-slate-100'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.popular 
                          ? 'text-violet-600' 
                          : plan.accentColor === 'amber'
                            ? 'text-amber-600'
                            : 'text-slate-500'
                      }`} />
                    </div>
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={() => handlePlanAction(plan.id)}
                disabled={loading === plan.id}
                className={`w-full h-12 text-base font-semibold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 hover:from-fuchsia-600 hover:via-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/30'
                    : plan.accentColor === 'amber'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {loading === plan.id ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Redirection...
                  </>
                ) : (
                  plan.cta
                )}
              </Button>

              {plan.id === 'pro' && (
                <p className="text-xs text-slate-400 text-center mt-4">
                  Essai gratuit 14 jours • Sans engagement
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-2 bg-gradient-to-r from-violet-50 to-fuchsia-50 px-4 py-2 rounded-full border border-violet-100">
            <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium text-violet-700">Paiement sécurisé Stripe</span>
          </span>
          <span className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-100">
            <span className="text-lg">🇫🇷</span>
            <span className="text-sm font-medium text-blue-700">Hébergé en France</span>
          </span>
          <span className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-100">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-emerald-700">Conforme RGPD</span>
          </span>
        </div>
      </div>
    </section>
  );
}
