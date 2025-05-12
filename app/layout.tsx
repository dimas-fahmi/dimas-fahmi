"use client";

import "@/src/css/globals.tailwind.css";
import { inter } from "@/src/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased max-w-[1440px] m-auto`}>
        {children}
      </body>
    </html>
  );
}
