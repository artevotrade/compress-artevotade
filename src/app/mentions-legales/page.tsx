import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Building2, 
  Mail, 
  Globe, 
  Server, 
  Scale, 
  Shield, 
  FileText,
  ArrowLeft,
  MapPin,
  Flag
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de CompressImage - ArtevoTrade LLC. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation du service.',
  alternates: {
    canonical: 'https://compress.artevotrade.com/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mentions légales</h1>
          <p className="text-slate-300 text-lg">
            Informations légales concernant le service CompressImage par ArtevoTrade LLC
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border border-blue-500/30">
              🇺🇸 Entreprise américaine
            </Badge>
            <Badge className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-300 border border-violet-500/30">
              🌍 Service francophone
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Éditeur */}
        <Card className="border-2 border-slate-100 hover:border-violet-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              1. Éditeur du site
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Le service <strong>CompressImage</strong> est édité par :
            </p>
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl p-5 space-y-2 border border-violet-100">
              <p><strong>Raison sociale :</strong> ArtevoTrade LLC</p>
              <p><strong>Forme juridique :</strong> Limited Liability Company (LLC)</p>
              <p><strong>État d'immatriculation :</strong> New Mexico, États-Unis</p>
              <p><strong>Siège social :</strong> 1209 Mountain Road PL NE, Ste N, Albuquerque, NM 87110, USA</p>
              <p><strong>Droit applicable :</strong> État du New Mexico, États-Unis</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4" />
              <span><strong>Contact :</strong> <a href="mailto:contact@artevotrade.com" className="text-violet-600 hover:underline">contact@artevotrade.com</a></span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Globe className="w-4 h-4" />
              <span><strong>Site web :</strong> https://compress.artevotrade.com</span>
            </div>
            <p className="text-sm text-slate-500 italic">
              Directeur de la publication : Le gérant d'ArtevoTrade LLC
            </p>
          </CardContent>
        </Card>

        {/* Zone de service */}
        <Card className="border-2 border-slate-100 hover:border-blue-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Flag className="w-5 h-5 text-white" />
              </div>
              2. Zone de service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              CompressImage est un service destiné aux <strong>pays francophones</strong>. 
              Notre service est disponible dans les régions suivantes :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🇫🇷 Europe francophone</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• France métropolitaine</li>
                  <li>• Belgique</li>
                  <li>• Suisse</li>
                  <li>• Luxembourg</li>
                  <li>• Monaco</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">🌍 Autres régions francophones</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Canada (Québec)</li>
                  <li>• Afrique francophone</li>
                  <li>• Antilles françaises</li>
                  <li>• Océan Indien</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hébergeur */}
        <Card className="border-2 border-slate-100 hover:border-emerald-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              3. Hébergeur du site
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Le site est hébergé par :
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 space-y-2 border border-emerald-100">
              <p><strong>Vercel Inc.</strong></p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> https://vercel.com</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Hébergement sécurisé avec certificat SSL/TLS</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Serveurs européens (Paris, France - région CDG1)</span>
            </div>
          </CardContent>
        </Card>

        {/* Propriété intellectuelle */}
        <Card className="border-2 border-slate-100 hover:border-amber-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              4. Propriété intellectuelle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
              est la propriété exclusive d'ArtevoTrade LLC ou de ses partenaires et est protégé par les lois 
              américaines et internationales relatives à la propriété intellectuelle.
            </p>
            <Separator />
            <p className="text-slate-600">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
              autorisation écrite préalable d'ArtevoTrade LLC.
            </p>
          </CardContent>
        </Card>

        {/* Données personnelles */}
        <Card className="border-2 border-slate-100 hover:border-blue-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              5. Protection des données personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables 
              en matière de protection des données, nous nous engageons à protéger les données personnelles 
              de nos utilisateurs.
            </p>
            <Separator />
            <div className="space-y-3">
              <p className="text-slate-600">
                <strong>Responsable de traitement :</strong> ArtevoTrade LLC
              </p>
              <p className="text-slate-600">
                <strong>Finalités du traitement :</strong>
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Fourniture du service de compression d'images</li>
                <li>Gestion des comptes utilisateurs</li>
                <li>Amélioration du service</li>
                <li>Communication commerciale (avec consentement)</li>
              </ul>
            </div>
            <Separator />
            <p className="text-slate-600">
              Pour plus d'informations sur la collecte et le traitement de vos données personnelles, 
              veuillez consulter notre{' '}
              <Link href="/confidentialite" className="text-violet-600 hover:underline font-medium">
                Politique de confidentialité
              </Link>.
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="border-2 border-slate-100 hover:border-pink-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              6. Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En continuant à naviguer sur ce site, vous acceptez leur utilisation.
            </p>
            <p className="text-slate-600">
              Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre{' '}
              <Link href="/confidentialite" className="text-violet-600 hover:underline font-medium">
                Politique de confidentialité
              </Link>.
            </p>
          </CardContent>
        </Card>

        {/* Droit applicable */}
        <Card className="border-2 border-slate-100 hover:border-indigo-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              7. Droit applicable et juridiction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les présentes mentions légales sont régies par le droit de l'État du New Mexico, États-Unis. 
              En cas de litige et à défaut d'accord amiable, les tribunaux compétents de l'État du New Mexico 
              seront seuls compétents.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Note pour les utilisateurs européens :</strong> Conformément au RGPD, vous disposez 
                de droits spécifiques concernant vos données personnelles. Pour les exercer, contactez-nous 
                à <a href="mailto:contact@artevotrade.com" className="text-violet-600 hover:underline">contact@artevotrade.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-2 border-violet-200 bg-gradient-to-r from-violet-50 to-fuchsia-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-violet-700">
              <Mail className="w-5 h-5" />
              8. Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email :</strong> <a href="mailto:contact@artevotrade.com" className="text-violet-600 hover:underline">contact@artevotrade.com</a></p>
              <p><strong>Adresse :</strong> 1209 Mountain Road PL NE, Ste N, Albuquerque, NM 87110, USA</p>
            </div>
          </CardContent>
        </Card>

        {/* Last update */}
        <p className="text-center text-sm text-slate-500">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  );
}
