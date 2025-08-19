import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Nikhil Gangaram",
  description: "Professional Nerd - Robotics, AI, and Research",
  icons: {
    icon: "/assets/dino.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVZE867TNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVZE867TNM');
          `}
        </Script>
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}