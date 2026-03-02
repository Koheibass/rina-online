import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export function OwnerPhilosophy() {
  return (
    <section className="mb-8 lg:mb-16">
      <SectionTitle
        title="オンラインコミュニティ開設にあたって"
        subtitle="Philosophy"
        id="thought"
      />

      {/* Profile intro */}
      <div className="lg:flex gap-8 mb-8">
        <div className="lg:w-[400px] shrink-0">
          <Image
            src="/images/biography.webp"
            alt="赤星里奈"
            width={400}
            height={500}
            className="w-full lg:w-[400px] rounded-[10px]"
          />
        </div>
        <div className="mt-4 lg:mt-0 lg:pl-5">
          <div className="text-2xl text-brown">
            赤星 里奈
            <span className="font-cursive text-lg ml-2">Rina Akaboshi</span>
          </div>
          <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed mt-4">
            <p>
              皆さま、初めまして。
              クラシック音楽愛好家コミュニティ&quot;おといのちオンライン&quot;
              オーナーの赤星里奈です。
              このたびはご訪問くださり、誠にありがとうございます。
            </p>
            <p className="mt-4">
              わたしはこれまで、クラシック音楽を専門的に学んできました。
              音楽高校、音楽大学、ドイツの国立音楽大学院を修了し、
              自分の周りにはプロ、またはプロを目指す学生しかいない、
              という環境で長く過ごしてきました。
            </p>
            <p className="mt-4">
              そんな中、自分の手の故障がきっかけで発信活動を始め、
              ありがたいことに約4万人の登録者さんとYouTubeを通して
              出会うことができました。
              これまでたくさんのコメントやご意見をお寄せいただく中で、
              感じたことがあります。
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy part 1 */}
      <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed mb-8">
        <p>
          それは、「クラシック音楽の愛好家同士が繋がれる場所がない」ということです。
        </p>
        <p className="mt-4">
          はっきり言って、クラシック音楽は世間的にはまだまだマイナーな存在で、日常の中でクラシック愛好家と出会える場面は、
          残念ながらそう多くはありません。
        </p>
        <p className="mt-4">
          ですが、音楽を楽しみ志すうえで、音楽を語り合える仲間の存在は、
          大変貴重で大切なものだと、わたし自身感じています。
        </p>
        <p className="mt-4">
          わたしの音楽人生は、いつも音楽仲間に支えられて歩んできました。
          もし仲間がいなかったら、ここまで頑張れていたか、自分でもわかりません。
        </p>
      </div>

      {/* Philosophy part 2 with photo */}
      <div className="lg:flex gap-8 mb-8">
        <div className="lg:w-[400px] shrink-0">
          <Image
            src="/images/Mphoto3.jpg"
            alt="赤星里奈"
            width={400}
            height={500}
            className="w-full lg:w-[400px] rounded-[10px]"
          />
        </div>
        <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed mt-4 lg:mt-0 lg:pl-5">
          <p>
            せっかく自分の中の学びや、楽しかった瞬間、
            うまくいった演奏やそうでない演奏をシェアしたくても、
            気軽にそれらを共有できる場所が、今の公開SNS上にはないんじゃないかな？
            と感じ、このコミュニティを開設してみよう！と思い至りました。
          </p>
          <p className="mt-4">
            クラシック音楽を楽しむには、まずは知識！と思われがちですが、
          </p>
          <p className="mt-4">
            &quot;好きな曲を自分で弾くことが楽しい！&quot;
            <br />
            &quot;好きな曲を聴くことが楽しい！&quot;
          </p>
          <p className="mt-4">
            という気持ちがまず何より大切だとわたしは感じます。
          </p>
          <p className="mt-4">
            そんな気持ちを大事にシェアしあえる仲間と、
            &quot;おとなかま&quot;を通して出会い、
            より充実した音楽ライフを送る人が増え、
            クラシックを愛する輪が大きくなっていったなら、
            そんなに嬉しいことはありません。
          </p>
        </div>
      </div>

      {/* Philosophy conclusion */}
      <div className="text-[13px] lg:text-[20px] text-brown leading-relaxed">
        <p>
          「クラシック音楽仲間を作りたかったら、おといのちオンラインに行けば大丈夫だよ！」
        </p>
        <p className="mt-4">
          とみんなが自信を持って言えるような、
          日本一平和で優しいコミュニティにしていけたら…と思っています。
        </p>
        <p className="mt-4">
          そしてより知識も深めてみたいな、と思われた方は、
          人数限定にはなりますが&quot;おとまなび&quot;にもぜひ遊びにきてください♪
          初心者さんも大歓迎します。
        </p>
        <p className="mt-4">
          音楽仲間との新しい出会いが、皆さまの人生の新しい彩りとなることを願って…
        </p>
        <p className="mt-4 text-right">
          おといのちオンライン オーナー　赤星 里奈
        </p>
      </div>
    </section>
  );
}
