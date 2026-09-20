import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aakashtutlani.me"
  ),

  title: "Aakash Tutlani's Portfolio",

  description:
    "Software developer building full-stack applications, AI systems, backend services, and mobile experiences.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    title: "Aakash Tutlani — Portfolio",
    description:
      "Software developer building full-stack applications, AI systems, backend services, and mobile experiences.",
    url: "https://aakashtutlani.me",
    siteName: "Aakash Tutlani",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 576,
        type: "image/jpeg",
        alt: "Aakash Tutlani — Software Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aakash Tutlani — Portfolio",
    description:
      "Software developer building full-stack applications, AI systems, backend services, and mobile experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}