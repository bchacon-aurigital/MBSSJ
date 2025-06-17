import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';
import { ContactModalProvider } from './context/ContactModalContext';
import Script from 'next/script';
import { LanguageProvider } from './hooks/useTranslation';
import LanguageSelector from './components/LanguageSelector';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAURO SERGIO BJJ - Academia de Brazilian Jiu Jitsu en Costa Rica",
  description: "Academia de Brazilian Jiu Jitsu en San José, Costa Rica. Mauro Sergio, cinturón negro 5to Dan con +30 años de experiencia. Clases para niños y adultos. ¡Agenda tu sesión!",
  keywords: "jiu jitsu costa rica, brazilian jiu jitsu san jose, academia jiu jitsu pozos, artes marciales costa rica, defensa personal costa rica, jiu jitsu lindora, clases jiu jitsu, mauro sergio bjj, jiu jitsu gracie costa rica, entrenamiento jiu jitsu, submission wrestling, open mat, clases para niños, jiu jitsu fundamentals",
  authors: [{ name: "Mauro Sergio BJJ" }],
  creator: "Mauro Sergio BJJ",
  publisher: "Mauro Sergio BJJ",
  robots: "index, follow",
  googlebot: "index, follow",
  openGraph: {
    title: "MAURO SERGIO BJJ - Academia de Brazilian Jiu Jitsu en Costa Rica",
    description: "Academia de Brazilian Jiu Jitsu en San José, Costa Rica. Mauro Sergio, cinturón negro 5to Dan con +30 años de experiencia. Clases para niños y adultos.",
    url: "https://www.maurosergiobjj.com",
    siteName: "Mauro Sergio BJJ",
    images: [
      {
        url: 'https://www.maurosergiobjj.com/assets/LogoNavbar.svg',
        width: 1200,
        height: 630,
        alt: "Mauro Sergio BJJ Logo - Academia de Brazilian Jiu Jitsu"
      }
    ],
    locale: "es_CR",
    type: "website"
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAURO SERGIO BJJ - Academia de Brazilian Jiu Jitsu en Costa Rica',
    description: 'Academia de Brazilian Jiu Jitsu en San José, Costa Rica. Mauro Sergio, cinturón negro 5to Dan con +30 años de experiencia.',
    images: ['https://www.maurosergiobjj.com/assets/LogoNavbar.svg'],
  },
  alternates: {
    canonical: "https://www.maurosergiobjj.com",
    languages: {
      'es': 'https://www.maurosergiobjj.com/?lang=es',
      'en': 'https://www.maurosergiobjj.com/?lang=en',
    },
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Mauro Sergio Brazilian Jiu Jitsu",
  "description": "Academia de Brazilian Jiu Jitsu en San José, Costa Rica. Mauro Sergio, cinturón negro 5to Dan con más de 30 años de experiencia.",
  "url": "https://www.maurosergiobjj.com",
  "telephone": "+506-8850-4416",
  "email": "maurodeoliveirajj@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mall Terrazas de Lindora, Sótano 2",
    "addressLocality": "Pozos",
    "addressRegion": "San José",
    "addressCountry": "CR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.9281",
    "longitude": "-84.0907"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "06:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "06:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/maurosergiobjj",
    "https://www.facebook.com/maurosergiobjj"
  ],
  "founder": {
    "@type": "Person",
    "name": "Mauro Sergio",
    "description": "Cinturón negro 5to Dan con más de 30 años de experiencia en Brazilian Jiu Jitsu"
  },
  "sport": "Brazilian Jiu Jitsu",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Tatami Profesional",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Duchas y Vestuarios",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Área de Espera para Padres",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parqueo Gratis",
      "value": true
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-400CSDTYKH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-400CSDTYKH');
          `}
        </Script>
        
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F80000" />
        <meta name="msapplication-TileColor" content="#F80000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/LogoNavbar.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preload" href="/assets/LogoNavbar.svg" as="image" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ContactModalProvider>
            <LoadingProvider>
              {children}
            </LoadingProvider>
            <LanguageSelector />
          </ContactModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}