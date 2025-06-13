import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';
import { ContactModalProvider } from './context/ContactModalContext';
import Script from 'next/script';

export const metadata = {
  title: '',
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
      <body>
        <ContactModalProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ContactModalProvider>
      </body>
    </html>
  );
}