import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer, Header, LegalGate } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grownavi.de"),
  title: {
    default: "Cannabis anbauen – Vom Samen bis zur Ernte | GROWNAVI",
    template: "%s | GROWNAVI",
  },
  description:
    "Verständliche Begleitung und lokale Werkzeuge für verantwortungsvollen, legalen privaten Cannabis-Eigenanbau.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "GROWNAVI",
    title: "Cannabis anbauen – Vom Samen bis zur Ernte | GROWNAVI",
    description:
      "Wissen, Planung und Tagebuch für legalen privaten Eigenanbau.",
  },
};
export const viewport: Viewport = {
  themeColor: "#173f35",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main id="hauptinhalt">{children}</main>
        <Footer />
        <LegalGate />
      </body>
    </html>
  );
}
