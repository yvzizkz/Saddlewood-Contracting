import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/lib/auth/auth-provider';


// Load DM Sans - sleek modern sans-serif for body text
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

// Load JetBrains Mono for code/technical elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400'],
});

// Load Cormorant Garamond - refined serif for premium headings
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Scottsdale Luxury Home Remodeling & Custom Builds | Saddlewood Contracting',
  description: "Scottsdale's trusted luxury remodeling contractor since 2007. Kitchen & bath renovations, whole-home remodels, custom builds. Free consultation: (480) 999-6100.",
  keywords: 'Scottsdale general contractor, home remodel Scottsdale, McCormick Ranch contractor, Gainey Ranch remodel, kitchen remodeling Scottsdale, bathroom renovation Scottsdale, luxury home remodeling, custom home builder Scottsdale, Paradise Valley contractor',
  authors: [{ name: 'Saddlewood Contracting' }],
  creator: 'Saddlewood Contracting',
  publisher: 'Saddlewood Contracting',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
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
    title: 'Scottsdale Luxury Home Remodeling & Custom Builds | Saddlewood Contracting',
    description: "Scottsdale's trusted luxury remodeling contractor since 2007. Kitchen & bath renovations, whole-home remodels, custom builds. Free consultation: (480) 999-6100.",
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
    title: 'Scottsdale Luxury Home Remodeling & Custom Builds | Saddlewood Contracting',
    description: "Scottsdale's trusted luxury remodeling contractor since 2007. Kitchen & bath renovations, whole-home remodels, custom builds. Free consultation: (480) 999-6100.",
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
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}>
      <head>
        {/* Saddlewood Contracting favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        
        {/* iOS/macOS specific icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Windows tile icon */}
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#0B0D0F" />
        
        {/* Schema.org structured data - GeneralContractor */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "Saddlewood Contracting LLC",
              "url": "https://saddlewoodcontracting.com",
              "logo": "https://saddlewoodcontracting.com/images/logo.png",
              "image": "https://saddlewoodcontracting.com/images/hero-project.jpg",
              "telephone": "+14809996100",
              "email": "info@saddlewoodcontracting.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85258",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5550",
                "longitude": "-111.9250"
              },
              "areaServed": [
                { "@type": "Place", "name": "McCormick Ranch, Scottsdale, AZ" },
                { "@type": "Place", "name": "Gainey Ranch, Scottsdale, AZ" },
                { "@type": "Place", "name": "Paradise Valley, AZ" },
                { "@type": "Place", "name": "North Scottsdale, AZ" },
                { "@type": "Place", "name": "Phoenix, AZ" }
              ],
              "description": "Saddlewood Contracting is a licensed general contractor serving McCormick Ranch, Gainey Ranch, and Scottsdale since 2007. Full home remodels, kitchen and bathroom renovations, custom new builds, HVAC, electrical, and plumbing.",
              "foundingDate": "2007",
              "priceRange": "$$$",
              "paymentAccepted": "Cash, Check, Credit Card",
              "openingHours": "Mo-Fr 07:00-17:00",
              "sameAs": [
                "https://www.facebook.com/SaddlewoodAZ/",
                "https://www.instagram.com/saddlewood_contracting/"
              ],
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "ROC #305762 - General Contracting" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "ROC #350714 - HVAC Systems" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "ROC #350715 - Electrical" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "ROC #350716 - Plumbing" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Remodeling & Construction Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Complete Home Remodels", "description": "Whole-home transformations including structural changes, layout redesign, and full interior renovation." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Renovations", "description": "Custom kitchen remodeling including cabinetry, countertops, appliances, and layout redesign." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Renovations", "description": "Luxury bathroom transformations including walk-in showers, custom tile, fixtures, and spa-inspired design." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom New Construction", "description": "Ground-up luxury home construction in Scottsdale, from architecture coordination through final inspection." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC, Electrical & Plumbing", "description": "Full-service mechanical systems work under dedicated ROC licenses." } }
                ]
              }
            })
          }}
        />
        
        {/* GoHighLevel Form Script */}
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </head>
      <body className="flex flex-col min-h-screen bg-obsidian text-silver-light">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          
          {/* GoHighLevel Chat Widget */}
          <script 
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6939cccae9d476259f5f6719"
          />
        </AuthProvider>
      </body>
    </html>
  );
}
