import type { Metadata } from "next";
import StoreProvider from "providers/StoreProvider";
import { openSans } from "styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-slate-500`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
