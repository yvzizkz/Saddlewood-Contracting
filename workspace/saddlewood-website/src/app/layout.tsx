import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/lib/auth/auth-provider';
import dynamic from 'next/dynamic';

// Import WelcomeScreen with dynamic loading and disable SSR
// This ensures the welcome screen works properly with localStorage
const WelcomeScreen = dynamic(() => import('@/components/WelcomeScreen'), { 
  ssr: false 
});

// Load Inter font (replacing Geist)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// Load Roboto Mono font (replacing Geist Mono)
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Saddlewood Contracting – 18 Years AZ HVAC, Electrical & Plumbing',
  description: 'Trusted HVAC, electrical, plumbing, and remodeling services in Arizona for over 18 years. Licensed and insured professionals serving Phoenix and beyond.',
  keywords: 'HVAC, air conditioning, heating, electrical, plumbing, remodeling, home services, Phoenix, Arizona, contractor, home improvement',
  authors: [{ name: 'Saddlewood Contracting' }],
  creator: 'Saddlewood Contracting',
  publisher: 'Saddlewood Contracting',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://saddlewoodcontracting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saddlewood Contracting – Professional Home Services',
    description: 'Trusted HVAC, electrical, plumbing, and remodeling services in Arizona since 2007. Licensed and insured professionals for all your home needs.',
    url: 'https://saddlewoodcontracting.com',
    siteName: 'Saddlewood Contracting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saddlewood Contracting - Professional Home Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saddlewood Contracting – Professional Home Services',
    description: 'Trusted HVAC, electrical, plumbing, and remodeling services in Arizona since 2007.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          {/* Welcome Screen with company mission animation */}
          <WelcomeScreen />
          
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
