import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { organizationJsonLd } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preston Developers | Preston Is Built Better | Premium Real Estate Hyderabad",
  description:
    "Preston Is Built Better. Preston Developers creates landmark residential and commercial destinations for the future of Hyderabad — founder-led, design-driven, built for long-term value.",
  metadataBase: new URL("https://prestondevelopers.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] text-[var(--fg)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--bg)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
