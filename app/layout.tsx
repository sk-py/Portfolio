import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/theme-switch";
import Footer from "@/components/layout/footer";
import Theming from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://skpy.in"),
  title: {
    default: "Mubashir Shaikh | Full Stack Developer",
    template: "%s | Mubashir Shaikh",
  },
  description: "Full-stack developer based in Mumbai specializing in React, Next.js, Node.js, and PostgreSQL. Building production web and mobile applications.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "Mumbai", "TypeScript", "PostgreSQL"],
  authors: [{ name: "Mubashir Shaikh", url: "https://github.com/sk-py" }],
  creator: "Mubashir Shaikh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://skpy.in",
    title: "Mubashir Shaikh | Full Stack Developer",
    description: "Full-stack developer based in Mumbai specializing in React, Next.js, Node.js, and PostgreSQL.",
    siteName: "Mubashir Shaikh Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Mubashir Shaikh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubashir Shaikh | Full Stack Developer",
    description: "Full-stack developer based in Mumbai specializing in React, Next.js, Node.js, and PostgreSQL.",
    creator: "@shaikh597",
    images: ["/images/preview.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theming>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </Theming>
      </body>
    </html>
  );
}