import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  UserCheck,
  Clock,
  Mail,
  ArrowLeft,
  FileText,
  Trash2,
  Edit,
  Download
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de CompressImage - Artevotade - Comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  alternates: {
    canonical: 'https://compress.artevotade.com/confidentialite',
  },
};

export default function ConfidentialitePage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-slate-300 text-lg">
            Protection de vos données personnelles conformément au RGPD
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700">
              <Shield className="w-3 h-3 mr-1" />
              RGPD Compliant
            </Badge>
            <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
              🇫🇷 Données hébergées en Europe
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              1. Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              La présente politique de confidentialité décrit comment <strong>CompressImage - Artevotade</strong> 
              (ci-après « nous », « notre » ou « le site ») collecte, utilise et protège les données 
              personnelles de ses utilisateurs dans le respect du Règlement Général sur la Protection 
              des Données (RGPD) et de la loi Informatique et Libertés.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">
                🔒 Engagement de confidentialité
              </p>
              <p className="text-emerald-700 text-sm mt-2">
                Nous nous engageons à protéger la vie privée de nos utilisateurs et à traiter leurs 
                données personnelles de manière transparente et sécurisée.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Collecte des données */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-600" />
              2. Collecte des données personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Nous collectons les données personnelles suivantes :
            </p>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Données fournies directement</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Nom et prénom (pour les comptes Pro)</li>
                  <li>Adresse email (pour la création de compte et le support)</li>
                  <li>Informations de paiement (gérées par Stripe, nous ne stockons pas les données bancaires)</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Données collectées automatiquement</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Données de connexion (date et heure)</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Images uploadées</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Les images uploadées sont traitées temporairement</li>
                  <li>Les images sont supprimées automatiquement après traitement</li>
                  <li>Aucune image n'est conservée sur nos serveurs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Utilisation des données */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-600" />
              3. Utilisation des données
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les données collectées sont utilisées pour les finalités suivantes :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  Service principal
                </h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                  <li>Compression des images</li>
                  <li>Gestion des comptes utilisateurs</li>
                  <li>Fourniture des fonctionnalités Pro</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  Amélioration du service
                </h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                  <li>Analyse statistique anonymisée</li>
                  <li>Détection des problèmes techniques</li>
                  <li>Optimisation des performances</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  Communication
                </h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                  <li>Réponses aux demandes de support</li>
                  <li>Notifications importantes du service</li>
                  <li>Newsletter (avec consentement)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Sécurité
                </h4>
                <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                  <li>Protection contre les abus</li>
                  <li>Détection des activités suspectes</li>
                  <li>Respect des conditions d'utilisation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-emerald-600" />
              4. Politique de cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Notre site utilise des cookies pour améliorer votre expérience de navigation.
            </p>
            
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800">Cookies essentiels</h4>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Toujours actifs</Badge>
                </div>
                <p className="text-sm text-slate-600">
                  Nécessaires au fonctionnement du site (session, sécurité).
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800">Cookies analytiques</h4>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Avec consentement</Badge>
                </div>
                <p className="text-sm text-slate-600">
                  Permettent d'analyser l'utilisation du site de manière anonyme.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800">Cookies de préférence</h4>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Avec consentement</Badge>
                </div>
                <p className="text-sm text-slate-600">
                  Mémorisent vos préférences (langue, thème, etc.).
                </p>
              </div>
            </div>
            
            <Separator />
            
            <p className="text-slate-600">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via les 
              paramètres de votre navigateur ou notre bandeau de consentement.
            </p>
          </CardContent>
        </Card>

        {/* Droits RGPD */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-600" />
              5. Vos droits RGPD
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Eye className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit d'accès</h4>
                  <p className="text-sm text-slate-600">
                    Obtenir une copie de vos données personnelles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Edit className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit de rectification</h4>
                  <p className="text-sm text-slate-600">
                    Corriger vos données inexactes ou incomplètes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Trash2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit à l'effacement</h4>
                  <p className="text-sm text-slate-600">
                    Demander la suppression de vos données.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Download className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit à la portabilité</h4>
                  <p className="text-sm text-slate-600">
                    Récupérer vos données dans un format standard.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <Lock className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit à la limitation</h4>
                  <p className="text-sm text-slate-600">
                    Limiter le traitement de vos données.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <FileText className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">Droit d'opposition</h4>
                  <p className="text-sm text-slate-600">
                    S'opposer au traitement de vos données.
                  </p>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Comment exercer vos droits ?</h4>
              <p className="text-blue-700 text-sm">
                Envoyez votre demande par email à :{' '}
                <a href="mailto:contact@artevotade.com" className="font-medium underline">
                  contact@artevotade.com
                </a>
              </p>
              <p className="text-blue-700 text-sm mt-2">
                Nous nous engageons à répondre dans un délai d'un mois.
              </p>
            </div>
            
            <p className="text-sm text-slate-500">
              Vous avez également le droit de déposer une réclamation auprès de la CNIL 
              (Commission Nationale de l'Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                www.cnil.fr
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Durée de conservation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              6. Durée de conservation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités 
              pour lesquelles elles ont été collectées :
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">Données de compte</h4>
                  <p className="text-sm text-slate-600">Jusqu'à la suppression du compte</p>
                </div>
                <Badge variant="outline">Durée du compte</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">Images uploadées</h4>
                  <p className="text-sm text-slate-600">Supprimées immédiatement après traitement</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">0 jour</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">Logs de connexion</h4>
                  <p className="text-sm text-slate-600">Pour des raisons de sécurité</p>
                </div>
                <Badge variant="outline">12 mois</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-800">Données de paiement</h4>
                  <p className="text-sm text-slate-600">Gérées par Stripe</p>
                </div>
                <Badge variant="outline">Selon Stripe</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sécurité */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              7. Sécurité des données
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
              protéger vos données personnelles :
            </p>
            
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Chiffrement SSL/TLS de toutes les communications</li>
              <li>Hébergement sécurisé chez Vercel (certifications ISO 27001, SOC 2)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
              <li>Sauvegardes régulières des données</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <Mail className="w-5 h-5" />
              8. Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Pour toute question relative à la protection de vos données personnelles :
            </p>
            <div className="mt-4">
              <p><strong>Email :</strong> <a href="mailto:contact@artevotade.com" className="text-emerald-600 hover:underline">contact@artevotade.com</a></p>
            </div>
          </CardContent>
        </Card>

        {/* Modifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              9. Modifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur cette page. 
              Nous vous informerons de tout changement important par email ou notification sur le site.
            </p>
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
