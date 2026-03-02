import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NewsSection } from "@/components/NewsSection";
import { CourseDetail } from "@/components/CourseDetail";
import { JoinSection } from "@/components/JoinSection";
import { OwnerPhilosophy } from "@/components/OwnerPhilosophy";
import { NotesSection } from "@/components/NotesSection";
import { Footer } from "@/components/Footer";

const otoNakamaFeatures = [
  {
    label: "♩:日々の練習報告",
    description:
      "文字だけでも動画を載せることもOK！報告を載せることが日々の目標にもなり、またいろんな方の演奏を聴いて楽しむこともできます！ ※：動画は現状50MBまで",
  },
  {
    label: "♩:レッスン報告",
    description:
      "レッスンの感想などを報告し合ってモチベーションアップにつなげましょう！",
  },
  {
    label: "♩:独学者の部屋",
    description: "独学だからこそ分かち合える話もできます！",
  },
  {
    label: "♩:チャレンジ企画",
    description:
      "毎月発表されるテーマに沿った作品に、1ヶ月かけてチャレンジしてみましょう！参加不参加は自由！人気の企画です♪",
  },
  {
    label: "♩:音楽なかま作り",
    description:
      "オンラインでの交流ができ、一緒に音楽を楽しむ仲間ができます！",
  },
];

const otoNakamaExtra = (
  <div className="mb-4">
    <div className="bg-cream-footer font-bold py-1 px-2 rounded inline-block mb-1">
      他にも例えば…
    </div>
    <p>
      ♩:演奏会の感想部屋
      <br />
      ♩:本番前の控室
      <br />
      ♩:好きな作曲家や演奏家について語る部屋
      <br />
      ♩:休憩談話室
      <br />
      <br />
      などもあり、いろんなお話ができます！
      <br />
      クラシック音楽を楽しむたくさんの方にご参加いただいてコミュニティを盛り上げていきたいです♪
    </p>
  </div>
);

const otoManabiFeatures = [
  {
    label: "♩:ピアニスト赤星里奈も参加する雑談部屋",
    description:
      "皆さんと一緒にいろんなお話がしたいです！励まし合いながら一緒に音楽ライフを楽しみましょう♪",
  },
  {
    label: "♩:レベル不問！赤星里奈にちょっと質問してみよう！",
    description:
      "ピアノ演奏や練習法、音楽に関わることにおいてわからない部分などがあれば、質問していただけます！ 初心者の方も大歓迎！（文章でも動画でもOK、必ず全てにお答えできるわけではありません。下記に続く）",
  },
  {
    label: "♩:月1回オンライン公開レッスン（アーカイブあり）",
    description:
      "上記の質問部屋でいただいたご質問の中からいくつか選んでライブでお答えします！ （時間が許せば全てのご質問にお答えできますが、たくさんいただいた場合は全てにはお答えできません。ただ他の方のご質問にお答えすることは他の皆さまにとっても役立つものだと思います。）",
  },
  {
    label: "♩:月1回みんなで音楽鑑賞会♪",
    description:
      "赤星里奈がおすすめのクラシック音源をピックアップし、みんなで一緒に聴きましょう♪いろんな音楽と出会い、さまざまな音源を聴くことは、確実にレベルアップに繋がります！",
  },
  {
    label: "♩:演奏したりお茶したり…雑談交流オフ会 参加権（不定期、参加費別途）",
    description:
      "基本的に関西と関東での開催となります。人数が増えてきたら、全国にも行きたいと考えています！ 少人数でいろいろ話せる機会を作りたいです。",
  },
];

const otoManabiExtra = (
  <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed mb-4">
    <p>
      →2023年11月に鎌倉にて、12月に大阪にて第1回オフ会開催しました♪
      <br />
      次回2024年5月～6月頃に、初の試み&quot;アンサンブル交流会&quot;を企画中！
    </p>
    <p className="mt-4">
      その他、赤星里奈による対面レッスンの機会もございます。
      <br />
      現在こちらのコミュニティメンバーのみ対面レッスンが受けられる状況ですので
      <br />
      レッスンご希望の方はぜひご参加ください♪
    </p>
    <div className="mt-4">
      <div className="bg-pink-bg text-pink-accent font-bold py-1 px-2 rounded inline-block mb-1">
        今後の展開予定は…
      </div>
      <p>
        みんなで学ぶ楽典講座や、プロ奏者や講師をお呼びして、コミュニティ限定のセミナー開催など、
        <br />
        より学びに繋がる場にしていきたいと考えています。
        <br />
        →2024年は大木美穂先生によるメンタルトレーニング講座を開講します！！
      </p>
      <p className="mt-4">
        今後の展開によって月会費はおそらく値上げすることとなりますが、既存の会員様は値上げ対象にはなりませんので、
        <br />
        値上げ後も入会時の月会費のままで継続していただくことができます！
        ですので、早いうちに入会されることをオススメします。
      </p>
    </div>
  </div>
);

const otoManabiPreamble = (
  <div className="mb-4 font-bold text-center">
    おとなかまコースの<u>全ての機能</u>に加えて、
  </div>
);

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <main className="grow bg-cream-main px-4 lg:px-20">
        <NewsSection />

        <CourseDetail
          id="friends"
          titleJa="おとなかまコース"
          titleEn="Oto-Nakama"
          features={otoNakamaFeatures}
          extraContent={otoNakamaExtra}
          recommendations={[
            "練習の悩みを気軽に話したい！",
            "音楽愛好家とのつながりが欲しい！",
            "でも公開の場ではあまり話したくない！",
            "練習のモチベーションをアップしたい！",
            "クラシック音楽について深く語り合いたい！",
            "動画をアップしたいけど公開のSNSはコワイ！",
            "わからないことを気軽に相談できる優しい仲間が欲しい！",
          ]}
          planName="♪おとなかまコース"
          price="980円"
          priceUnit="/月"
          buttonHref="#join"
          highlightClass="bg-cream-footer text-brown"
        />

        <CourseDetail
          id="study"
          titleJa="おとまなびコース"
          titleEn="Oto-Manabi"
          preamble={otoManabiPreamble}
          features={otoManabiFeatures}
          extraContent={otoManabiExtra}
          recommendations={[
            "ピアノの悩みを気軽にプロに質問したい！",
            "クラシックのいろんな作品と出会いたい！",
            "赤星里奈の対面レッスンを受けてみたい！",
            "音楽を楽しむだけでなく、技術や知識も向上したい！",
            "クラシック愛好家と繋がれるオフラインお茶会に参加したい！",
            "少人数コミュニティで一人ひとりと親密に平和につながりたい！",
            "上達したい！という思いを持った仲間と共に励まし合いながら頑張りたい！！",
          ]}
          planName="♪おとまなびコース"
          price="3,600円"
          priceUnit="/月"
          buttonHref="#join"
          highlightClass="bg-pink-bg text-pink-accent"
        />

        <JoinSection />
        <OwnerPhilosophy />
        <NotesSection />
      </main>
      <Footer />
    </>
  );
}
