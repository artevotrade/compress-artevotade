import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://compress.artevotade.com'),
  title: {
    default: 'CompressImage - Compression d\'images en ligne | Artevotade',
    template: '%s | CompressImage - Artevotade',
  },
  description: 'Compressez vos images PNG, JPEG et WebP jusqu\'à 70% sans perte de qualité. Service français, conforme RGPD, par Artevotade.',
  keywords: ['compression image', 'réduire taille image', 'optimiser image', 'RGPD', 'France', 'artevotade'],
  authors: [{ name: 'Artevotade' }],
  creator: 'Artevotade',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CompressImage - Compression d\'images en ligne | Artevotade',
    description: 'Compressez vos images jusqu\'à 70% sans perte de qualité. Service français par Artevotade.',
    url: 'https://compress.artevotade.com',
    siteName: 'CompressImage - Artevotade',
    type: 'website',
    locale: 'fr_FR',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CompressImage - Artevotade',
    description: 'Compressez vos images jusqu\'à 70% sans perte de qualité. Service français.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased bg-white text-zinc-900">
        {children}
        <Toaster position="bottom-right" className="font-sans" />
      </body>
    </html>
  );
}
