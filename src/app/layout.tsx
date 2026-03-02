import type { Metadata } from "next";
import { Castoro, Shippori_Mincho, Parisienne } from "next/font/google";
import "./globals.css";

const castoro = Castoro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-castoro",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-shippori-mincho",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: {
    default: "おといのちオンライン公式ホームページ",
    template: "%s | おといのちオンライン",
  },
  description: "楽しいよ♫",
  openGraph: {
    url: "https://oto-inochi.com/",
    type: "website",
    title: "おといのちオンライン公式ホームページ",
    description: "楽しいよ♫",
    siteName: "公式",
    images: [{ url: "https://oto-inochi.com/images/Top1.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${castoro.variable} ${shipporiMincho.variable} ${parisienne.variable}`}
    >
      <body className="font-serif">
        <div className="flex flex-col relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
