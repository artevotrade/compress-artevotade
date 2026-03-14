'use client';

import { useRouter } from 'next/navigation';
import { XCircle, ArrowLeft, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Card className="border-0 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <XCircle className="w-12 h-12 text-slate-500" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Paiement annulé
              </h1>
              <p className="text-slate-300">
                Votre paiement n'a pas été finalisé
              </p>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <p className="text-slate-600 mb-4">
                Aucun montant n'a été débité de votre compte. Votre essai gratuit reste disponible.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-800">
                  💡 Vous pouvez toujours utiliser la version gratuite avec 20 images par compression.
                </p>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <Button 
                onClick={() => router.push('/#compress')}
                className="w-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 hover:from-fuchsia-600 hover:via-violet-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold shadow-lg shadow-violet-500/30"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Utiliser la version gratuite
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/#pricing')}
                className="w-full py-6 text-lg border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 font-medium"
              >
                Voir les tarifs
              </Button>
            </div>
            
            {/* Help section */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  Un problème ?{' '}
                  <a href="mailto:contact@artevotade.com" className="text-violet-600 hover:underline font-medium">
                    Contactez-nous
                  </a>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Back button */}
        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')}
            className="text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
