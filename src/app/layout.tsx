import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://compress.artevotrade.com'),
  title: {
    default: 'CompressImage - Compression d\'images en ligne | ArtevoTrade LLC',
    template: '%s | CompressImage - ArtevoTrade',
  },
  description: 'Compressez vos images PNG, JPEG et WebP jusqu\'à 70% sans perte de qualité. Service pour les pays francophones, conforme RGPD, par ArtevoTrade LLC.',
  keywords: ['compression image', 'réduire taille image', 'optimiser image', 'RGPD', 'francophone', 'artevotrade', 'compresser image'],
  authors: [{ name: 'ArtevoTrade LLC' }],
  creator: 'ArtevoTrade LLC',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CompressImage - Compression d\'images en ligne | ArtevoTrade LLC',
    description: 'Compressez vos images jusqu\'à 70% sans perte de qualité. Service pour les pays francophones par ArtevoTrade LLC.',
    url: 'https://compress.artevotrade.com',
    siteName: 'CompressImage - ArtevoTrade',
    type: 'website',
    locale: 'fr_FR',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CompressImage - ArtevoTrade LLC',
    description: 'Compressez vos images jusqu\'à 70% sans perte de qualité. Service pour les pays francophones.',
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
