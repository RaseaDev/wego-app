import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Inter } from "next/font/google";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-latin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wegoyemen.com"),
  title: {
    default: "ويقو تكنولوجي | Wego Technology — موبايلات، مودمات 4G، إكسسوارات وصيانة",
    template: "%s | ويقو تكنولوجي - Wego Technology",
  },
  description:
    "ويقو تكنولوجي — أفضل متجر للتقنيات والإلكترونيات في صنعاء، اليمن. موبايلات، مودمات 4G، إكسسوارات، وخدمات صيانة احترافية. حمّل تطبيقنا الآن!",
  keywords: [
    "Wego Technology",
    "ويقو تكنولوجي",
    "موبايلات اليمن",
    "مودم 4G اليمن",
    "إكسسوارات موبايل",
    "صيانة موبايل صنعاء",
    "تطبيق ويقو تكنولوجي",
    "Wego 4G",
    "Yemen electronics",
    "Sanaa tech store",
    "أفضل متجر إلكترونيات في اليمن",
    "هواتف ذكية صنعاء"
  ],
  authors: [{ name: "Wego Technology", url: "https://wegoyemen.com" }],
  creator: "Wego Technology",
  publisher: "Wego Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "YE-SA",
    "geo.placename": "Sanaa",
    "geo.position": "15.3694;44.1910",
    "ICBM": "15.3694, 44.1910",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_YE",
    alternateLocale: "en_US",
    url: "https://wegoyemen.com",
    siteName: "ويقو تكنولوجي | Wego Technology",
    title: "ويقو تكنولوجي | Wego Technology — التقنية بين يديك",
    description:
      "أفضل متجر للتقنيات والإلكترونيات في اليمن. حمّل تطبيق ويقو تكنولوجي الآن لاكتشاف أحدث الموبايلات.",
    images: [
      {
        url: "/images/شعار ويجو للتطبيق (1).png",
        width: 512,
        height: 512,
        alt: "شعار ويقو تكنولوجي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ويقو تكنولوجي | Wego Technology",
    description: "التقنية بين يديك — موبايلات، مودمات 4G، وصيانة في صنعاء",
    images: ["/images/خلفية للتطبيق copy.png"],
  },
  icons: {
    icon: "/images/شعار ويجو للتطبيق (1).png",
    apple: "/images/شعار ويجو للتطبيق (1).png",
  },
  alternates: {
    canonical: "https://wegoyemen.com",
    languages: {
      ar: "https://wegoyemen.com",
      en: "https://wegoyemen.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "ويقو تكنولوجي | Wego Technology",
    alternateName: "Wego Technology",
    description:
      "أفضل متجر للتقنيات والإلكترونيات في صنعاء، اليمن. موبايلات، مودمات 4G، إكسسوارات وصيانة احترافية.",
    url: "https://wegoyemen.com",
    telephone: "+967-783-313-335",
    address: {
      "@type": "PostalAddress",
      streetAddress: "صنعاء",
      addressLocality: "Sanaa",
      addressCountry: "YE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.3694",
      longitude: "44.1910",
    },
    hasMap: "https://maps.google.com/?q=15.3694,44.1910",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+967-783-313-335",
      contactType: "customer service",
      areaServed: "YE",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: ["https://www.facebook.com/wegoyemen"],
    image: "https://wegoyemen.com/images/شعار ويجو للتطبيق (1).png",
    priceRange: "$$",
    currenciesAccepted: "YER",
    paymentAccepted: "Cash",
    areaServed: "Yemen",
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoKufiArabic.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/*
        Apply notoKufiArabic.className directly to body so next/font
        actually injects the font-face and applies it — not just the CSS var.
        Also apply to html via variable for CSS var usage in custom classes.
      */}
      <body
        className={`${notoKufiArabic.className} antialiased`}
        style={{ background: "#F0F8FC", direction: "rtl", width: "100%", overflowX: "clip" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
