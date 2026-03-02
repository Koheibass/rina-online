import Image from "next/image";
import Link from "next/link";

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
      {/* Top description */}
      <div className="flex items-center gap-2 justify-center my-6">
        <Image
          src="/images/Gclef.png"
          alt="ト音記号"
          width={30}
          height={60}
          className="w-[5%] max-w-[30px]"
        />
        <p className="text-xs lg:text-[22px] text-brown text-center leading-relaxed">
          クラシック音楽愛好家のためのコミュニティです♪
          <br />
          オンラインでの交流がメインの &quot;おとなかま&quot; コースと､
          <br />
          オフラインでの交流に加えて学びを深める &quot;おとまなび&quot;
          コースがあります。
        </p>
      </div>

      {/* Latest Info */}
      <div className="mt-8">
        <h3 className="text-center text-brown my-4">
          <div className="text-[13px] lg:text-[25px] font-bold">最新情報</div>
          <div className="section-subtitle">News</div>
        </h3>
        <div className="text-[13px] lg:text-[20px] text-brown">
          {newsItems.map((item) => (
            <div key={item.href + item.date} className="mb-2">
              <div className="text-brown-light">
                &quot;{item.date}&quot;
                <small> ({item.day})</small>
              </div>
              <Link
                href={item.href}
                className="text-pink-accent underline decoration-pink-link"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="mt-8">
        <h3 className="text-center text-brown my-4">
          <div className="text-[13px] lg:text-[25px] font-bold">
            おといのちオンラインとは
          </div>
          <div className="section-subtitle">About</div>
        </h3>
        <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed">
          <p>
            　おといのちオンラインは、
            &quot;年齢や性別はもちろん、音楽演奏歴や愛好歴もさまざまなクラシック音楽愛好家が、音楽好きな仲間と出会って語り合える、
            日本一平和なコミュニティ&quot;を目指しています。
          </p>
          <p className="mt-4">
            　ここでは、毎日の気軽な練習報告や、練習中に発見したこと、
            <br />
            好きな音楽について存分に語り合っていただけたら嬉しいです♪
            <br />
            文字だけでも、動画をアップすることもできるので、毎日の進捗報告はもちろん、レッスン前や本番前に励まし合える仲間をつくることができます。
          </p>
          <p className="mt-4">

            そういった投稿を気軽にできるのはもちろん、見るだけでもモチベーションアップに繋がりますし、参加するだけでより一段とあなたの音楽ライフを充実させることができます！
          </p>
        </div>
      </div>
    </section>
  );
}
