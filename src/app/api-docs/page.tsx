import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Key, 
  Zap, 
  Clock, 
  ArrowLeft,
  Terminal,
  Copy,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Documentation API',
  description: 'API de compression d\'images CompressImage - Artevotade - Intégrez la compression d\'images dans vos applications.',
  alternates: {
    canonical: 'https://compress.artevotade.com/api-docs',
  },
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
  <div className="relative">
    <div className="absolute top-2 right-2 flex items-center gap-2">
      <Badge variant="outline" className="text-xs bg-slate-800 text-slate-300 border-slate-700">
        {language}
      </Badge>
    </div>
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
      <code>{code}</code>
    </pre>
  </div>
);

export default function ApiDocsPage() {
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Documentation API</h1>
          </div>
          <p className="text-slate-300 text-lg">
            Intégrez la compression d'images CompressImage - Artevotade dans vos applications
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
              REST API
            </Badge>
            <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700">
              Plan Pro uniquement
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
              <Zap className="w-5 h-5 text-emerald-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              L'API CompressImage - Artevotade vous permet de compresser des images par programmation. 
              Elle est accessible uniquement avec un abonnement <strong>Pro</strong>.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">
                💡 URL de base
              </p>
              <code className="text-emerald-700 text-sm mt-2 block">
                https://compress.artevotade.com/api
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-emerald-600" />
              Authentification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              L'API utilise une authentification par clé API (Bearer Token). 
              Incluez votre clé dans l'en-tête <code className="bg-slate-100 px-2 py-0.5 rounded">Authorization</code> de chaque requête.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-slate-800">Obtenir votre clé API</h4>
              <ol className="list-decimal list-inside text-slate-600 space-y-1">
                <li>Connectez-vous à votre compte Pro</li>
                <li>Accédez à « Paramètres » → « API »</li>
                <li>Générez ou copiez votre clé API</li>
              </ol>
            </div>

            <CodeBlock 
              language="Header"
              code={`Authorization: Bearer ci_live_xxxxxxxxxxxxxxxxxxxx`}
            />

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-amber-800 font-medium">Sécurité</p>
                  <p className="text-amber-700 text-sm mt-1">
                    Ne partagez jamais votre clé API. Si elle est compromise, 
                    régénérez-la immédiatement depuis votre espace client.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Endpoints */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-600" />
              Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* POST /compress */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  POST
                </Badge>
                <code className="text-slate-800 font-mono">/compress</code>
              </div>
              
              <p className="text-slate-600 mb-4">
                Compresse une image et retourne l'image compressée.
              </p>

              <h4 className="font-semibold text-slate-800 mb-3">Paramètres</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 font-semibold text-slate-800">Paramètre</th>
                      <th className="text-left p-3 font-semibold text-slate-800">Type</th>
                      <th className="text-left p-3 font-semibold text-slate-800">Requis</th>
                      <th className="text-left p-3 font-semibold text-slate-800">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-mono text-sm text-emerald-600">file</td>
                      <td className="p-3 text-slate-600">File</td>
                      <td className="p-3"><Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">Oui</Badge></td>
                      <td className="p-3 text-slate-600">Image à compresser (PNG, JPEG, WebP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-sm text-emerald-600">quality</td>
                      <td className="p-3 text-slate-600">Integer</td>
                      <td className="p-3"><Badge variant="outline" className="text-xs bg-slate-50 text-slate-600 border-slate-200">Non</Badge></td>
                      <td className="p-3 text-slate-600">Qualité (1-100). Défaut: 80</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-sm text-emerald-600">format</td>
                      <td className="p-3 text-slate-600">String</td>
                      <td className="p-3"><Badge variant="outline" className="text-xs bg-slate-50 text-slate-600 border-slate-200">Non</Badge></td>
                      <td className="p-3 text-slate-600">Format de sortie (jpeg, png, webp)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-semibold text-slate-800 mb-3">Réponse</h4>
              <CodeBlock 
                language="JSON"
                code={`{
  "success": true,
  "data": {
    "originalSize": 2048576,
    "compressedSize": 614400,
    "compressionRatio": 70,
    "format": "jpeg",
    "width": 1920,
    "height": 1080
  },
  "image": "base64_encoded_image_data..."
}`}
              />
            </div>

            <Separator />

            {/* Errors */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">Codes d'erreur</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">400</Badge>
                  <span className="text-slate-600">Paramètres invalides ou fichier manquant</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">401</Badge>
                  <span className="text-slate-600">Clé API invalide ou manquante</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">413</Badge>
                  <span className="text-slate-600">Fichier trop volumineux (max 50 Mo)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">429</Badge>
                  <span className="text-slate-600">Limite de requêtes dépassée</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              Limites de requêtes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Les limites dépendent de votre plan d'abonnement :
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">Plan Gratuit</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    API non accessible
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-3">Plan Pro</h4>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    1000 requêtes/jour
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    100 requêtes/minute
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    50 Mo max par image
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-600" />
              Exemples de code
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* cURL */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                cURL
              </h4>
              <CodeBlock 
                language="bash"
                code={`curl -X POST https://compress.artevotade.com/api/compress \\
  -H "Authorization: Bearer ci_live_xxxxxxxxxxxxxxxxxxxx" \\
  -F "file=@image.png" \\
  -F "quality=80" \\
  -o compressed.jpg`}
              />
            </div>

            {/* JavaScript */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                JavaScript (Fetch)
              </h4>
              <CodeBlock 
                language="javascript"
                code={`const FormData = require('form-data');
const fs = require('fs');

const formData = new FormData();
formData.append('file', fs.createReadStream('image.png'));
formData.append('quality', '80');

const response = await fetch('https://compress.artevotade.com/api/compress', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ci_live_xxxxxxxxxxxxxxxxxxxx',
  },
  body: formData
});

const result = await response.json();
console.log('Compression:', result.data.compressionRatio + '%');`}
              />
            </div>

            {/* Python */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Python
              </h4>
              <CodeBlock 
                language="python"
                code={`import requests

url = "https://compress.artevotade.com/api/compress"
headers = {"Authorization": "Bearer ci_live_xxxxxxxxxxxxxxxxxxxx"}

with open("image.png", "rb") as f:
    files = {"file": f}
    data = {"quality": 80}
    
    response = requests.post(url, headers=headers, files=files, data=data)
    result = response.json()
    
    print(f"Compression: {result['data']['compressionRatio']}%")
    
    # Save compressed image
    import base64
    with open("compressed.jpg", "wb") as out:
        out.write(base64.b64decode(result["image"]))`}
              />
            </div>
          </CardContent>
        </Card>

        {/* SDK */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Copy className="w-5 h-5 text-emerald-600" />
              SDK officiel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Un SDK JavaScript/TypeScript officiel est disponible pour une intégration simplifiée :
            </p>
            
            <CodeBlock 
              language="bash"
              code={`npm install @compressimage/sdk`}
            />
            
            <CodeBlock 
              language="typescript"
                code={`import { CompressImage } from '@compressimage/sdk';

const client = new CompressImage({
  apiKey: 'ci_live_xxxxxxxxxxxxxxxxxxxx'
});

const result = await client.compress({
  file: './image.png',
  quality: 80,
  format: 'jpeg'
});

console.log('Saved:', result.compressionRatio + '%');
await result.save('./compressed.jpg');`}
            />
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <Key className="w-5 h-5" />
              Support API
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Pour toute question technique ou problème avec l'API :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email :</strong> <a href="mailto:contact@artevotade.com" className="text-emerald-600 hover:underline">contact@artevotade.com</a></p>
              <p><strong>Réponse :</strong> Sous 24h ouvrées</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center py-8">
          <p className="text-slate-600 mb-4">
            Prêt à intégrer l'API ?
          </p>
          <Link href="/#tarifs">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Passer au plan Pro
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
