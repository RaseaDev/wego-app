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
  title: "ويجو يمن | Wego Yemen — موبايلات، مودمات 4G، إكسسوارات وصيانة",
  description:
    "ويجو يمن — أفضل متجر للتقنيات والإلكترونيات في صنعاء، اليمن. موبايلات، مودمات 4G، إكسسوارات، وخدمات صيانة احترافية. حمّل تطبيقنا الآن!",
  keywords: [
    "Wego Yemen",
    "ويجو يمن",
    "موبايلات اليمن",
    "مودم 4G اليمن",
    "إكسسوارات موبايل",
    "صيانة موبايل صنعاء",
    "تطبيق ويجو",
    "Wego 4G",
    "Yemen electronics",
    "Sanaa tech store",
  ],
  authors: [{ name: "Wego Yemen", url: "https://wegoyemen.com" }],
  creator: "Wego Yemen",
  publisher: "Wego Yemen",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ar_YE",
    alternateLocale: "en_US",
    url: "https://wegoyemen.com",
    siteName: "ويجو يمن | Wego Yemen",
    title: "ويجو يمن | Wego Yemen — التقنية بين يديك",
    description:
      "أفضل متجر للتقنيات والإلكترونيات في اليمن. حمّل تطبيق ويجو الآن.",
    images: [
      {
        url: "/images/شعار ويجو للتطبيق (1).png",
        width: 512,
        height: 512,
        alt: "شعار ويجو يمن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ويجو يمن | Wego Yemen",
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
    name: "ويجو يمن | Wego Yemen",
    alternateName: "Wego Yemen",
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
    hasMap: "https://maps.google.com/?q=Sanaa,+Yemen",
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
      >
        {children}
      </body>
    </html>
  );
}
