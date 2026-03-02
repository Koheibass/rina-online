import { Metadata } from "next";
import Link from "next/link";
import { HeaderSimple } from "@/components/HeaderSimple";
import { Footer } from "@/components/Footer";
import { PriceBox } from "@/components/PriceBox";
import { EXTERNAL_LINKS, COURSES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "おといのち公式 - お支払い",
};

export default function PaymentPage() {
  return (
    <>
      <HeaderSimple />
      <main className="grow bg-cream-main px-4 lg:px-20">
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
            <div>
              <h3 className="text-center text-brown my-4">
                <div className="text-lg lg:text-xl font-bold">
                  {COURSES.otoNakama.name}
                </div>
                <div className="section-subtitle">About</div>
              </h3>
              <div className="text-center text-sm lg:text-base text-brown mb-4">
                ＼ 練習内容などを共有できてモチベーションアップ！ ／
              </div>
              <PriceBox
                planName={COURSES.otoNakama.planName}
                price={COURSES.otoNakama.price}
                priceUnit={COURSES.otoNakama.priceUnit}
                buttonHref={EXTERNAL_LINKS.squareOtoNakama}
                buttonText="入会する"
                external
              />
            </div>
            <div>
              <h3 className="text-center text-brown my-4">
                <div className="text-lg lg:text-xl font-bold">
                  {COURSES.otoManabi.name}
                </div>
                <div className="section-subtitle">About</div>
              </h3>
              <div className="text-center text-sm lg:text-base text-brown mb-4">
                ＼ オフ会でより濃く繋がれる♪学びのコンテンツ多数！／
              </div>
              <PriceBox
                planName={COURSES.otoManabi.planName}
                price={COURSES.otoManabi.price}
                priceUnit={COURSES.otoManabi.priceUnit}
                buttonHref={EXTERNAL_LINKS.squareOtoManabi}
                buttonText="入会する"
                external
              />
            </div>
          </div>
          <div className="text-center my-8">
            <Link href="/" className="text-pink-link underline">
              Topに戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
