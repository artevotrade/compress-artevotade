'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState<{
    email?: string;
    plan?: string;
  } | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const isDemo = searchParams.get('demo');
    
    // Simulate loading and then show success
    const timer = setTimeout(() => {
      if (sessionId || isDemo) {
        setSessionDetails({
          email: 'votre@email.com',
          plan: 'Pro',
        });
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 flex items-center justify-center p-4">
        <Card className="border-0 shadow-xl max-w-lg w-full">
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-violet-600 animate-spin mx-auto mb-4" />
            <p className="text-slate-600">Vérification de votre paiement...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Card className="border-0 shadow-xl overflow-hidden">
          {/* Success header */}
          <div className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-violet-600" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Paiement réussi !
              </h1>
              <p className="text-violet-100">
                Bienvenue chez CompressImage - Artevotade
              </p>
            </div>
          </div>
          
          <CardContent className="p-8">
            {/* Plan details */}
            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 text-lg px-6 py-2 mb-4 border border-violet-200">
                <Sparkles className="w-4 h-4 mr-1" />
                Plan Pro
              </Badge>
              <div className="bg-gradient-to-r from-slate-50 to-violet-50 rounded-xl p-6 space-y-3 border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Essai gratuit</span>
                  <span className="font-bold text-violet-600">14 jours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Prix après essai</span>
                  <span className="font-semibold">9€/mois</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Images par lot</span>
                  <span className="font-semibold">100 images</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">API</span>
                  <span className="font-bold text-emerald-600">Illimitée</span>
                </div>
              </div>
            </div>
            
            {/* Email notification */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-emerald-800 text-center font-medium">
                ✓ Un email de confirmation a été envoyé à votre adresse email.
              </p>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-slate-900 mb-3 text-center">
                Vos avantages Pro
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>100 images/lot</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>API illimitée</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Support prioritaire</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Sans watermark</span>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <Button 
              onClick={() => router.push('/')}
              className="w-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 hover:from-fuchsia-600 hover:via-violet-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold shadow-lg shadow-violet-500/30"
            >
              Commencer à compresser
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-xs text-slate-500 text-center mt-4">
              Annulez à tout moment depuis votre espace client
            </p>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <div className="text-center mt-6 text-sm text-slate-500">
          <p>Une question ? <a href="mailto:contact@artevotade.com" className="text-violet-600 hover:underline font-medium">contact@artevotade.com</a></p>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 flex items-center justify-center p-4">
      <Card className="border-0 shadow-xl max-w-lg w-full">
        <CardContent className="p-12 text-center">
          <Loader2 className="w-12 h-12 text-violet-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Chargement...</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
}
