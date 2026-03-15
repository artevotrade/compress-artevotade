'use client';

import { useCallback } from 'react';
import { ArrowRight, Minimize2, Shield, Zap, Sparkles, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UploadZone } from '@/components/upload-zone';
import { PricingSection } from '@/components/pricing-section';
import { FaqSection } from '@/components/faq-section';

export default function HomePage() {
  const scrollToUpload = useCallback(() => {
    const compressSection = document.getElementById('compress');
    if (compressSection) {
      const headerOffset = 80;
      const elementPosition = compressSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToPricing = useCallback(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const headerOffset = 80;
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all">
              <Minimize2 className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Compress<span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">Image</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 tracking-wider uppercase">by Artevotade</span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">
              Fonctionnalités
            </a>
            <button onClick={scrollToPricing} className="text-sm text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">
              Tarifs
            </button>
            <a href="/api-docs" className="text-sm text-slate-600 hover:text-fuchsia-600 transition-colors font-medium">
              API
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="/dashboard" className="text-sm text-slate-600 hover:text-slate-900 transition-colors hidden sm:block font-medium">
              Connexion
            </a>
            <Button
              onClick={scrollToUpload}
              className="bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:from-fuchsia-600 hover:to-violet-700 text-white text-sm h-9 px-5 shadow-lg shadow-violet-500/30 font-medium"
            >
              Essayer gratuit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background decorations - more colorful */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-fuchsia-50 via-violet-100 to-transparent rounded-full blur-3xl opacity-80 -z-10" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-100 via-fuchsia-100 to-violet-100 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-50 via-violet-50 to-indigo-50 border border-violet-200 rounded-full mb-8 shadow-sm">
            <span className="flex items-center gap-1.5 text-xs font-medium bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
              Nouveau : API REST disponible
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Compressez vos images
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              en un clic.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Réduisez la taille de vos images jusqu'à <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">70%</span> sans perte visible.
            Service français, conforme RGPD, hébergé en Europe.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={scrollToUpload}
              className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 hover:from-fuchsia-600 hover:via-violet-700 hover:to-indigo-700 text-white h-14 px-10 text-base shadow-xl shadow-violet-500/30 font-semibold"
            >
              Compresser maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToPricing}
              className="h-14 px-10 text-base border-2 border-violet-200 text-violet-700 hover:text-violet-900 hover:bg-violet-50 hover:border-violet-300 font-medium"
            >
              Voir les tarifs
            </Button>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 rounded-full">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="font-medium text-amber-700">Compression instantanée</span>
            </span>
            <span className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1.5 rounded-full">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="font-medium text-emerald-700">Conforme RGPD</span>
            </span>
            <span className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1.5 rounded-full">
              <span className="text-lg">🇫🇷</span>
              <span className="font-medium text-blue-700">Made in France</span>
            </span>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="compress" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Glissez vos images ici
            </h2>
            <p className="text-slate-500">
              PNG, JPEG, WebP — jusqu'à 20 images, 20 Mo chacune
            </p>
          </div>
          <UploadZone />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Un service pensé pour les professionnels exigeants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl border-2 border-slate-100 bg-white hover:border-fuchsia-200 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-100 to-violet-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                  <Minimize2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Compression intelligente</h3>
                <p className="text-slate-500 leading-relaxed">
                  Algorithmes optimisés pour chaque format. Réduction jusqu'à 70% avec une qualité préservée.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl border-2 border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Conformité RGPD</h3>
                <p className="text-slate-500 leading-relaxed">
                  Images supprimées automatiquement. Aucune donnée conservée, hébergement en France.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl border-2 border-slate-100 bg-white hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">API pour développeurs</h3>
                <p className="text-slate-500 leading-relaxed">
                  Intégrez la compression dans votre workflow. API REST simple et documentation claire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">70%</div>
              <div className="text-violet-200 text-sm font-medium">Réduction moyenne</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-violet-200 text-sm font-medium">Images compressées</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-violet-200 text-sm font-medium">RGPD conforme</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">0.5s</div>
              <div className="text-violet-200 text-sm font-medium">Temps moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <Image className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Prêt à commencer ?</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Compressez vos images
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              dès maintenant
            </span>
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Commencez gratuitement, sans inscription.
          </p>
          <Button
            size="lg"
            onClick={scrollToUpload}
            className="bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:from-fuchsia-400 hover:to-violet-500 text-white h-14 px-10 text-base shadow-xl shadow-violet-500/30 font-semibold"
          >
            Essayer maintenant
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Minimize2 className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight">
                    Compress<span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Image</span>
                  </span>
                  <span className="text-[10px] text-slate-500 -mt-1 tracking-wider uppercase">by Artevotade</span>
                </div>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Service de compression d'images développé en France par <span className="text-violet-400 font-medium">Artevotade</span>.
                Conforme RGPD, hébergé en Europe.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white">Légal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/mentions-legales" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/confidentialite" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="/cgu" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                    CGU
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:contact@artevotade.com" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                    contact@artevotade.com
                  </a>
                </li>
                <li>
                  <a href="/api-docs" className="text-slate-400 hover:text-fuchsia-400 transition-colors">
                    Documentation API
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Artevotade - CompressImage</p>
            <p className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center text-sm">🇫🇷</span>
              Hébergé en France
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
