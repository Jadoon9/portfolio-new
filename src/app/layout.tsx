import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahzeb Jadoon - Front-End Developer | React & Next.js Specialist",
  description: "Experienced Front-End Developer with 5+ years specializing in React.js, Next.js, TypeScript, and modern front-end ecosystems. Building beautiful, performant web applications.",
  keywords: ["Front-End Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Shahzeb Jadoon" }],
  creator: "Shahzeb Jadoon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahzebjadoon.dev",
    title: "Shahzeb Jadoon - Front-End Developer",
    description: "Experienced Front-End Developer with 5+ years specializing in React.js, Next.js, TypeScript, and modern front-end ecosystems.",
    siteName: "Shahzeb Jadoon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzeb Jadoon - Front-End Developer",
    description: "Experienced Front-End Developer with 5+ years specializing in React.js, Next.js, TypeScript, and modern front-end ecosystems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
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
