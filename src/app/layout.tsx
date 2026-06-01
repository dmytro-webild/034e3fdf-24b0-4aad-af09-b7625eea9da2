import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Delfin Restaurant - Exquisite Dining in Tetovo',
  description: 'Experience culinary excellence at Delfin, a top-rated restaurant in Tetovo. Discover our gourmet menu, delightful ambiance, and exceptional service. Make your reservation today!',
  keywords: ["Delfin, restaurant, Tetovo, fine dining, gourmet food, Macedonian cuisine, outdoor seating, cocktails, kids menu, reservation"],
  openGraph: {
    "title": "Delfin Restaurant - Exquisite Dining in Tetovo",
    "description": "Experience culinary excellence at Delfin, a top-rated restaurant in Tetovo. Discover our gourmet menu, delightful ambiance, and exceptional service. Make your reservation today!",
    "url": "https://www.delfinrestaurant.com",
    "siteName": "Delfin Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/portrait-young-young-woman-sitting-modern-cafe_171337-17121.jpg",
        "alt": "Elegant restaurant interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Delfin Restaurant - Exquisite Dining in Tetovo",
    "description": "Experience culinary excellence at Delfin, a top-rated restaurant in Tetovo. Discover our gourmet menu, delightful ambiance, and exceptional service. Make your reservation today!",
    "images": [
      "http://img.b2bpic.net/free-photo/portrait-young-young-woman-sitting-modern-cafe_171337-17121.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
