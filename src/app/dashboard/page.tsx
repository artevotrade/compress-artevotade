'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Image as ImageIcon, ArrowDownToLine, TrendingUp, Zap, Crown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface UserStats {
  totalCompressions: number;
  totalSaved: number; // in bytes
  plan: 'free' | 'pro';
  remainingToday: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<UserStats>({
    totalCompressions: 0,
    totalSaved: 0,
    plan: 'free',
    remainingToday: 20,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      // In production, fetch from API
      setStats({
        totalCompressions: 47,
        totalSaved: 12450000, // ~12MB
        plan: 'free',
        remainingToday: 15,
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 o';
    const k = 1024;
    const sizes = ['o', 'Ko', 'Mo', 'Go'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const planLimits = {
    free: { daily: 20, batch: 20, label: 'Gratuit' },
    pro: { daily: 1000, batch: 100, label: 'Pro' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900">
                Compress<span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">Image</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant={stats.plan === 'pro' ? 'default' : 'secondary'} className="px-4 py-1">
              {stats.plan === 'pro' ? (
                <>
                  <Crown className="w-3 h-3 mr-1" />
                  Plan Pro
                </>
              ) : (
                'Plan Gratuit'
              )}
            </Badge>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/')}
            >
              Retour au site
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Bonjour ! 👋
          </h1>
          <p className="text-slate-600">
            Voici vos statistiques de compression d'images.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">Compressions</span>
                <ImageIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                {loading ? '...' : stats.totalCompressions}
              </div>
              <p className="text-xs text-slate-500 mt-1">images compressées</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">Économisé</span>
                <ArrowDownToLine className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                {loading ? '...' : formatBytes(stats.totalSaved)}
              </div>
              <p className="text-xs text-slate-500 mt-1">de bande passante</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">Restant aujourd'hui</span>
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                {loading ? '...' : stats.remainingToday}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                sur {planLimits[stats.plan].daily} images
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">Plan actuel</span>
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                {planLimits[stats.plan].label}
              </div>
              {stats.plan === 'free' && (
                <Button 
                  size="sm" 
                  className="mt-2 bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => router.push('/#tarifs')}
                >
                  Passer Pro
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Usage Progress */}
        <Card className="border-0 shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Utilisation quotidienne</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Images compressées aujourd'hui</span>
                  <span className="font-medium">
                    {planLimits[stats.plan].daily - stats.remainingToday} / {planLimits[stats.plan].daily}
                  </span>
                </div>
                <Progress 
                  value={((planLimits[stats.plan].daily - stats.remainingToday) / planLimits[stats.plan].daily) * 100} 
                  className="h-3"
                />
              </div>
              
              {stats.plan === 'free' && stats.remainingToday < 5 && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    ⚠️ Vous avez presque atteint votre limite quotidienne. 
                    <Button variant="link" className="px-1 text-amber-800" onClick={() => router.push('/#tarifs')}>
                      Passez au plan Pro
                    </Button>
                    pour 100 images par lot.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/#upload')}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Compresser des images</h3>
                  <p className="text-sm text-slate-500">Optimisez vos PNG, JPEG, WebP</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/api-docs')}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Documentation API</h3>
                  <p className="text-sm text-slate-500">Intégrez notre API REST</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade CTA for free users */}
        {stats.plan === 'free' && (
          <Card className="border-2 border-emerald-500 shadow-lg mt-8 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Passez au plan Pro</h3>
                  <p className="text-emerald-100">
                    100 images par lot • API illimitée • Support prioritaire
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50"
                  onClick={() => router.push('/#tarifs')}
                >
                  Essai gratuit 14 jours
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} CompressImage - Artevotade - Made in France 🇫🇷</p>
        </div>
      </footer>
    </div>
  );
}
