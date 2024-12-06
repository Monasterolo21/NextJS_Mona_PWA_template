import type { Metadata } from "next";
import "./globals.css";

// TODO: change metadata and favicon
export const metadata: Metadata = {
  title: "Mona's NextJs Template",
  description: "Using docker, PWA and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: change lang
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
