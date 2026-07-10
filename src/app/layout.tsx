import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import SmoothScroll from "@/components/smooth-scroll";
import AppReadyProvider from "@/components/app-ready-provider";

export const metadata: Metadata = {
  title: "Brittalent - The AI Compliance Firewall",
  description: "Brittalent enforces SEC, FINRA, and firm policies on every message in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
