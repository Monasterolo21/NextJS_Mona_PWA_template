import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist } from "next/font/google";

// TODO: change metadata and favicon and REMEMER TO CHANGE ALSO THE ICONS IN PUBLIC FOLDER AND THE MANIFEST.JSON -> THE SIZE OF THE ICON SHOULD FOLLOW THE ONES IN THE EXAMPLE
const APP_NAME = "NextJs_PWA Mona Example";
const APP_DEFAULT_TITLE = "Complete the TODOs!";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  manifest: "/manifest.json",
};

// TODO: change the theme color
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

// TODO: change the font
const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: change lang
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body>
        <Toaster position="top-left" richColors closeButton visibleToasts={2} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
