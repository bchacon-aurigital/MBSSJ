import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';
import { ContactModalProvider } from './context/ContactModalContext';
import Script from 'next/script';
import { LanguageProvider } from './hooks/useTranslation';
import LanguageSelector from './components/LanguageSelector';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAURO SERGIO BJJ - Academia de Brazilian Jiu Jitsu",
  description: "Academia de Brazilian Jiu Jitsu en Costa Rica. Mauro Sergio, 5to Dan cinturón negro con más de 30 años de experiencia. Clases para todas las edades.",
  keywords: "",
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: './',
        width: 1200,
        height: 630,
        alt: ""
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: ""
  }
};

const schemaData = {
  "@context": "",
  "@type": "",
  "name": "",
  "description": "",
  "telephone": "",
  "address": {
    "@type": "",
    "streetAddress": "",
    "addressLocality": "",
    "addressRegion": "",
    "postalCode": "",
    "addressCountry": ""
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "",
    "",
    ""
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
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