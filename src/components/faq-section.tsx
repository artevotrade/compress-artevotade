'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Comment fonctionne la compression ?',
    answer: 'Nous utilisons des algorithmes optimisés pour chaque format d\'image. Pour les PNG, nous appliquons une compression sans perte qui réduit la palette de couleurs. Pour les JPEG et WebP, nous utilisons un encodage intelligent qui préserve la qualité visuelle tout en réduisant significativement la taille du fichier.',
  },
  {
    question: 'Mes images sont-elles conservées ?',
    answer: 'Non. Vos images sont traitées en temps réel et supprimées immédiatement après le téléchargement. Nous ne stockons aucune image sur nos serveurs. Pour les comptes Pro, un historique des compressions (métadonnées uniquement) est conservé 30 jours.',
  },
  {
    question: 'Quelle est la différence entre Gratuit et Pro ?',
    answer: 'Le plan Gratuit permet 20 images par lot avec une qualité standard. Le plan Pro offre 100 images par lot, une API REST illimitée, un ajustement de qualité de 50% à 100%, et un support prioritaire.',
  },
  {
    question: 'Puis-je utiliser le service sans créer de compte ?',
    answer: 'Oui, le plan Gratuit ne nécessite aucune inscription. Vous pouvez compresser vos images immédiatement. Pour accéder aux fonctionnalités Pro et à l\'API, un compte est nécessaire.',
  },
  {
    question: 'Le service est-il conforme au RGPD ?',
    answer: 'Oui. Nous sommes une entreprise française, hébergée en Europe. Vos données ne quittent jamais l\'Union Européenne. Vous pouvez demander la suppression de vos données à tout moment via contact@artevotade.com.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Questions <span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">fréquentes</span>
          </h2>
          <p className="text-slate-500">
            Tout ce que vous devez savoir.
          </p>
        </div>

        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="font-medium text-slate-900 group-hover:text-violet-600 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-400 transition-transform flex-shrink-0',
                    openIndex === index && 'rotate-180 text-violet-600'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'
                )}
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            D'autres questions ?{' '}
            <a
              href="mailto:contact@artevotade.com"
              className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
