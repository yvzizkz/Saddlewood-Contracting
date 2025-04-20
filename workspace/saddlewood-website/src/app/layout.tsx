import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/lib/auth/auth-provider';
import { ThemeProvider } from '@/lib/theme-context';
import dynamic from 'next/dynamic';

// Import components with dynamic loading and disable SSR
// This ensures components work properly with localStorage and browser APIs
const WelcomeScreen = dynamic(() => import('@/components/WelcomeScreen'), { 
  ssr: false 
});

// Dynamic import for loading animation to use browser APIs
const LoadingAnimation = dynamic(() => import('@/components/LoadingAnimation'), {
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
  description: 'Trusted HVAC, electrical, plumbing, and remodeling services in Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Fountain Hills, and surrounding areas. Licensed professionals with 18+ years experience.',
  keywords: 'HVAC, air conditioning, heating, electrical, plumbing, remodeling, home services, Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Fountain Hills, Arizona, contractor, home improvement',
  authors: [{ name: 'Saddlewood Contracting' }],
  creator: 'Saddlewood Contracting',
  publisher: 'Saddlewood Contracting',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/logo-enhanced.svg' },
    ],
  },
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
    title: 'Saddlewood Contracting – Professional Home Services Throughout the Valley',
    description: 'Trusted HVAC, electrical, plumbing, and remodeling services serving Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Fountain Hills, and surrounding areas since 2007. Licensed and insured professionals.',
    url: 'https://saddlewoodcontracting.com',
    siteName: 'Saddlewood Contracting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/brand-splash.svg',
        width: 1200,
        height: 630,
        alt: 'Saddlewood Contracting - Professional Home Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saddlewood Contracting – Professional Home Services',
    description: 'Trusted home services throughout the Valley - Phoenix, Paradise Valley, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Fountain Hills, and surrounding areas since 2007.',
    images: ['/images/brand-splash.svg'],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="flex flex-col min-h-screen theme-transition">
        <ThemeProvider>
          <AuthProvider>
            {/* Construction-themed loading animation */}
            <LoadingAnimation />
            
            {/* Welcome Screen with company mission animation */}
            <WelcomeScreen />
            
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
