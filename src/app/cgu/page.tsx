import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FileText, 
  Users, 
  CreditCard, 
  AlertTriangle,
  Scale, 
  XCircle,
  Gavel,
  ArrowLeft,
  CheckCircle,
  XIcon
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Conditions générales d\'utilisation',
  description: 'CGU de CompressImage - Artevotade - Conditions d\'utilisation du service de compression d\'images en ligne.',
  alternates: {
    canonical: 'https://compress.artevotade.com/cgu',
  },
};

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
          <p className="text-slate-300 text-lg">
            CGU du service CompressImage - Artevotade
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
              🇫🇷 Juridiction française
            </Badge>
            <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700">
              Version 1.0
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Préambule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Préambule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'utilisation 
              du service de compression d'images en ligne <strong>CompressImage - Artevotade</strong> (ci-après « le Service »).
            </p>
            <p className="text-slate-600">
              En utilisant le Service, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas 
              ces conditions, vous ne devez pas utiliser le Service.
            </p>
          </CardContent>
        </Card>

        {/* Objet */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Article 1 - Objet du service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              CompressImage - Artevotade est un service en ligne permettant de compresser des images aux formats 
              PNG, JPEG et WebP. Le Service offre :
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">Plan Gratuit</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Jusqu'à 10 images par jour
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Taille max : 5 Mo par image
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Formats : PNG, JPEG, WebP
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Sans inscription
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-3">Plan Pro (9,99€/mois)</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Images illimitées
                  </li>
                  <li className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Taille max : 50 Mo par image
                  </li>
                  <li className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Compression par lots
                  </li>
                  <li className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Accès API
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conditions d'accès */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Article 2 - Conditions d'accès
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Le Service est accessible à toute personne physique disposant de la capacité juridique. 
              Pour les utilisateurs mineurs, l'accord d'un représentant légal est requis.
            </p>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Pour le plan Pro, vous devez :</h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Créer un compte avec une adresse email valide</li>
                <li>Fournir des informations exactes et complètes</li>
                <li>Accepter les présentes CGU et la politique de confidentialité</li>
                <li>Régler l'abonnement mensuel</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Utilisation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Article 3 - Conditions d'utilisation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              L'utilisateur s'engage à utiliser le Service de manière licite et conforme aux présentes CGU.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Utilisations autorisées
                </h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Compression d'images dont vous détenez les droits</li>
                  <li>Utilisation personnelle ou professionnelle</li>
                  <li>Intégration via API (plan Pro uniquement)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <XIcon className="w-4 h-4 text-red-500" />
                  Utilisations interdites
                </h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Compression d'images illicites ou offensantes</li>
                  <li>Utilisation à des fins de piratage ou d'attaque</li>
                  <li>Tentative de contourner les limitations du plan gratuit</li>
                  <li>Revente du Service sans autorisation</li>
                  <li>Utilisation automatisée abusive (bots, scrapers)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plans et tarifs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-600" />
              Article 4 - Plans et tarifs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-800">Caractéristique</th>
                    <th className="text-center p-3 font-semibold text-slate-800">Gratuit</th>
                    <th className="text-center p-3 font-semibold text-emerald-800">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 text-slate-600">Prix</td>
                    <td className="p-3 text-center text-slate-600">0€</td>
                    <td className="p-3 text-center text-emerald-700 font-medium">9,99€/mois</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-600">Images/jour</td>
                    <td className="p-3 text-center text-slate-600">10</td>
                    <td className="p-3 text-center text-emerald-700">Illimité</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-600">Taille max/image</td>
                    <td className="p-3 text-center text-slate-600">5 Mo</td>
                    <td className="p-3 text-center text-emerald-700">50 Mo</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-600">Essai gratuit</td>
                    <td className="p-3 text-center text-slate-600">-</td>
                    <td className="p-3 text-center text-emerald-700">14 jours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Modalités de paiement (Plan Pro)</h4>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Paiement sécurisé via Stripe</li>
                <li>Facture envoyée par email automatiquement</li>
                <li>Renouvellement automatique chaque mois</li>
                <li>Annulation possible à tout moment</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Responsabilités */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-emerald-600" />
              Article 5 - Responsabilités
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Responsabilités de CompressImage - Artevotade</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Fournir un Service fonctionnel et accessible</li>
                  <li>Assurer la sécurité des données personnelles</li>
                  <li>Maintenir la qualité de compression annoncée</li>
                  <li>Offrir un support technique pour les plans Pro</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Responsabilités de l'utilisateur</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Utiliser le Service de manière conforme</li>
                  <li>Garder la confidentialité de ses identifiants</li>
                  <li>Respecter les droits de propriété intellectuelle</li>
                  <li>Signaler tout dysfonctionnement</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>Limitation de responsabilité :</strong> CompressImage - Artevotade ne saurait être tenu responsable 
                des dommages indirects, pertes de données ou préjudices financiers résultant de l'utilisation du Service.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Propriété intellectuelle */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600" />
              Article 6 - Propriété intellectuelle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les images compressées restent la propriété exclusive de l'utilisateur. CompressImage - Artevotade 
              ne revendique aucun droit sur les images traitées.
            </p>
            <Separator />
            <p className="text-slate-600">
              Le Service (interface, logo, code source, algorithmes) est la propriété exclusive de 
              CompressImage - Artevotade et est protégé par le droit de la propriété intellectuelle.
            </p>
          </CardContent>
        </Card>

        {/* Résiliation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-emerald-600" />
              Article 7 - Résiliation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Par l'utilisateur</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Résiliation possible à tout moment depuis l'espace client</li>
                  <li>L'accès au Service Pro reste actif jusqu'à la fin de la période facturée</li>
                  <li>Aucun remboursement partiel n'est effectué</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Par CompressImage - Artevotade</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>En cas de non-respect des CGU</li>
                  <li>En cas d'utilisation frauduleuse</li>
                  <li>Avec un préavis de 30 jours pour les utilisateurs Pro</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modification des CGU */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Article 8 - Modification des CGU
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              CompressImage - Artevotade se réserve le droit de modifier les présentes CGU à tout moment. 
              Les utilisateurs seront informés des modifications par email ou notification sur le site.
            </p>
            <p className="text-slate-600">
              La poursuite de l'utilisation du Service après modification vaut acceptation des nouvelles CGU.
            </p>
          </CardContent>
        </Card>

        {/* Juridiction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gavel className="w-5 h-5 text-emerald-600" />
              Article 9 - Juridiction et droit applicable
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les présentes CGU sont régies par le droit français.
            </p>
            <p className="text-slate-600">
              En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, 
              les parties s'engagent à rechercher une solution amiable.
            </p>
            <p className="text-slate-600">
              À défaut d'accord amiable dans un délai de 30 jours, les tribunaux français seront 
              seuls compétents pour connaître du litige.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <FileText className="w-5 h-5" />
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Pour toute question relative aux présentes CGU :
            </p>
            <div className="mt-4">
              <p><strong>Contact :</strong> <a href="mailto:contact@artevotade.com" className="text-emerald-600 hover:underline">contact@artevotade.com</a></p>
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
