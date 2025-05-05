import type { Metadata } from "next";
import "@/src/css/globals.tailwind.css";
import { inter } from "@/src/fonts";

export const metadata: Metadata = {
  title: "Dimas Fahmi | Web Developer",
  description: "Get in touch with me and let's work together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
