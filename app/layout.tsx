import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakob Engelhardt",
  description: "Head of Product at Buena. Building products at the intersection of AI and health.",
  keywords: ["product", "AI", "health", "startup", "Berlin"],
  authors: [{ name: "Jakob Engelhardt" }],
  openGraph: {
    title: "Jakob Engelhardt",
    description: "Head of Product at Buena. Building products at the intersection of AI and health.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
