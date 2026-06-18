import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusai.com'),
  title: "NexusAI - Intelligent AI Agent Platform",
  description: "Build, deploy, and scale AI agents with NexusAI. The most powerful platform for creating autonomous AI workflows that drive business results.",
  keywords: ["AI agents", "automation", "artificial intelligence", "workflow automation", "AI platform"],
  authors: [{ name: "NexusAI" }],
  openGraph: {
    title: "NexusAI - Intelligent AI Agent Platform",
    description: "Build, deploy, and scale AI agents with NexusAI. The most powerful platform for creating autonomous AI workflows.",
    url: "https://nexusai.com",
    siteName: "NexusAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexusAI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI - Intelligent AI Agent Platform",
    description: "Build, deploy, and scale AI agents with NexusAI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
