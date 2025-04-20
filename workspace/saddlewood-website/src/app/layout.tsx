import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import '@/styles/high-contrast.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/lib/auth/auth-provider';
import { AccessibilityProvider } from '@/lib/accessibility-context';
import { FloatingAccessibilityToggle } from '@/components/AccessibilityToggle';
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
  description: 'Trusted HVAC, electrical, plumbing, and remodeling services in Arizona for over 18 years. Licensed and insured.',
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
          <AccessibilityProvider>
            {/* Welcome Screen with company mission animation */}
            <WelcomeScreen />
            
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            
            {/* Floating accessibility toggle button */}
            <FloatingAccessibilityToggle />
          </AccessibilityProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
