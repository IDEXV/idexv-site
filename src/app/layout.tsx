import React from "react";
import localFont from "next/font/local";
import "./root.css";
import { Metadata } from "next";

const mainFont = localFont({
  src: "./CascadiaMono.woff2",
  variable: "--monospace-font",
});

export const metadata: Metadata = {
  title: "IDEXV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.variable}>{children}</body>
    </html>
  );
}
