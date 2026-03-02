import type { Metadata } from "next";
import { Castoro, Noto_Serif_JP, Parisienne } from "next/font/google";
import "./globals.css";

const castoro = Castoro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-castoro",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-noto-serif-jp",
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
      className={`${castoro.variable} ${notoSerifJP.variable} ${parisienne.variable}`}
    >
      <body className="font-serif">
        <div className="flex flex-col relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
