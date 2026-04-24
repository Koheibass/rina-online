import Image from "next/image";
import Link from "next/link";
import DiscordNews from "./DiscordNews";

const newsItems = [
  {
    date: "2024.02.17",
    day: "Sat",
    href: "/news/20240217",
    title: "【おとまなび】アンサンブル交流会開催決定！！",
  },
  {
    date: "2024.01.21",
    day: "Sat",
    href: "/news/20240121",
    title:
      '"メンタルトレーニング研究家 大木美穂先生による特別講座"　開講決定!!',
  },
  {
    date: "2023.09.18",
    day: "Mon",
    href: "/",
    title:
      'クラシック愛好家のためのオンラインコミュニティ"おといのちオンライン"開設のお知らせ',
  },
];

export function NewsSection() {
  return (
    <section className="mb-8">
      {/* Catchcopy */}
      <div className="text-center my-10 lg:my-14">
        <div className="flex items-center gap-2 justify-center mb-4">
          <Image
            src="/images/Gclef.png"
            alt="ト音記号"
            width={30}
            height={60}
            className="w-[5%] max-w-[30px]"
          />
        </div>
        <h2 className="text-lg lg:text-3xl font-bold text-text-heading mb-3 leading-snug">
          ひとりで楽しむ音楽から、
          <br />
          みんなで楽しむ音楽へ。
        </h2>
        <p className="text-sm lg:text-lg text-text-light leading-relaxed">
          練習の悩みも、感動も、全部シェアできる場所。
          <br />
          クラシック音楽を愛する仲間が、ここで待っています。
        </p>
      </div>

      {/* Latest Info */}
      <div className="mt-10 bg-white rounded-2xl shadow-card p-6 lg:p-10 border border-cream-border">
        <h3 className="text-center text-text-heading mb-6">
          <div className="text-[14px] lg:text-[22px] font-bold">最新情報</div>
          <div className="section-subtitle">News</div>
        </h3>
        <DiscordNews />
        <div className="text-[13px] lg:text-[18px] text-text-main">
          {newsItems.map((item) => (
            <div key={item.href + item.date} className="mb-3 pb-3 border-b border-cream-border last:border-b-0">
              <div className="text-text-light text-xs lg:text-sm">
                {item.date}
                <small className="ml-1">({item.day})</small>
              </div>
              <Link
                href={item.href}
                className="text-primary hover:text-primary-dark underline decoration-pink-light transition-colors"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="mt-8 bg-white rounded-2xl shadow-card p-6 lg:p-10 border border-cream-border">
        <h3 className="text-center text-text-heading mb-6">
          <div className="text-[14px] lg:text-[22px] font-bold">
            おといのちオンラインとは
          </div>
          <div className="section-subtitle">About</div>
        </h3>

        <div className="text-center mb-6">
          <span className="inline-block gradient-coral text-white text-sm lg:text-base font-bold px-5 py-2 rounded-full">
            日本一平和なクラシック音楽コミュニティを目指して
          </span>
        </div>

        <div className="text-[13px] lg:text-[18px] text-text-main leading-relaxed">
          <p>
            おといのちオンラインは、年齢や性別はもちろん、音楽演奏歴や愛好歴もさまざまなクラシック音楽愛好家が、
            音楽好きな仲間と出会って語り合えるコミュニティです。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
            <div className="bg-section-bg rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">&#x1f3b5;</div>
              <div className="font-bold text-text-heading mb-1">気軽に練習報告</div>
              <p className="text-sm text-text-light">文字でも動画でも、毎日の練習をシェア</p>
            </div>
            <div className="bg-section-bg rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">&#x1f91d;</div>
              <div className="font-bold text-text-heading mb-1">仲間と出会える</div>
              <p className="text-sm text-text-light">同じ想いを持つ音楽愛好家とつながる</p>
            </div>
            <div className="bg-section-bg rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">&#x1f512;</div>
              <div className="font-bold text-text-heading mb-1">安心の非公開空間</div>
              <p className="text-sm text-text-light">公開SNSが苦手な方も安心して参加</p>
            </div>
          </div>

          <p>
            毎日の進捗報告はもちろん、レッスン前や本番前に励まし合える仲間をつくることができます。
            参加するだけで、あなたの音楽ライフがより一段と充実します！
          </p>

          <div className="text-center mt-8">
            <a
              href="#friends"
              className="inline-block gradient-coral text-white font-bold text-sm lg:text-base px-8 py-3 rounded-full shadow-button no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              コースを見てみる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
