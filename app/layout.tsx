import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "AI Demos | Red Hat AI",
  description: "Interactive AI demos powered by Red Hat OpenShift AI.",
  icons: {
    icon: `${basePath}/images/favicon.ico`,
    apple: `${basePath}/images/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
