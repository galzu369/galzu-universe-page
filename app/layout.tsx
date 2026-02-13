import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
