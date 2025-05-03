// app/layout.tsx
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SplashScreen from "@/components/Screens/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showSplash, setShowSplash] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setShowSplash(false);
    }
  }, [isHome]);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000] text-white`}>
        {showSplash && isHome ? (
          <SplashScreen onAnimationComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <Navbar />
            <main className="min-h-screen pt-20">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
