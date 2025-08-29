import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";
import { cn, fontWorkSans } from "@/utils";



export const metadata: Metadata = {
  title: "TenTwenty Assessment",
  description: "A simple task to test your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontWorkSans.variable, "antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
