import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import SmoothScroll from "@/components/smooth-scroll";
import AppReadyProvider from "@/components/app-ready-provider";

const SITE_URL = "https://dogwalking.pages.dev";
const SITE_NAME = "Heyford Walks";
const SITE_DESCRIPTION =
  "Professional, trusted dog walking across London — daily walks, GPS-tracked routes, and photo updates after every visit.";
// Dedicated share-card photo (distinct from the hero's own image), cropped to
// the standard 1200x630 OG dimensions, since there's no branded share image yet.
const OG_IMAGE = "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&h=630&fit=crop&crop=faces,entropy&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "dog walking London",
    "dog walker",
    "pet care London",
    "dog walking service",
    "London dog walkers",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F4EB",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: OG_IMAGE,
  priceRange: "££",
  areaServed: {
    "@type": "City",
    name: "London",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are self-loaded via a single combined @import in globals.css;
            preconnecting here shaves the DNS/TLS handshake off that request. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
            data-custom-data='{"appName": "Brittalent", "version": "1.0.0", "greeting": "hi"}'
          />
          <AppReadyProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </AppReadyProvider>
          <VisualEditsMessenger />
      </body>
    </html>
  );
}
