import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { StepBox } from "./StepBox";
import { OrangeButton } from "./OrangeButton";
import { VimeoEmbed } from "./VimeoEmbed";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function JoinSection() {
  return (
    <section className="mb-8 lg:mb-16">
      <SectionTitle title="ご入会までの流れ" subtitle="Flow" id="join" />

      <StepBox title="Step1 Discord登録">
        <p className="text-[13px] lg:text-[20px] text-brown">
          Discordアプリをダウンロード
        </p>
        <div className="my-2 text-[13px] lg:text-[20px] text-brown">
          <div className="flex items-center gap-2 mb-2">
            　iOSの方→
            <a href={EXTERNAL_LINKS.iosApp} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/ioswhite.svg"
                alt="App Store"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            　Androidの方→
            <a href={EXTERNAL_LINKS.androidApp} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/google-play-badge.png"
                alt="Google Play で手に入れよう"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
        <p className="text-[13px] lg:text-[20px] text-brown mt-4">
          ダウンロード後、以下のボタンよりアクセスし、Discordにログイン、
          または会員登録をお願いします。
          <br />
          <br />
          ※必ず以下のリンクからアクセスしてください。
        </p>
        <div className="text-center mt-4">
          <OrangeButton href={EXTERNAL_LINKS.discord} external>
            こちらから
          </OrangeButton>
        </div>
      </StepBox>

      <StepBox title="Step2 お支払い">
        <p className="text-[13px] lg:text-[20px] text-brown">
          以下のボタンより、お支払い手続きをお願いします。
          <br />
          その際に、必ず氏名（姓名）を入力してください。
          （このあとお名前が必要になります）
        </p>
        <div className="text-center mt-4">
          <OrangeButton href="/payment">お支払いへ</OrangeButton>
        </div>
      </StepBox>

      <StepBox title="Step3 DM送信">
        <p className="text-[13px] lg:text-[20px] text-brown">
          お支払い時にご入力いただいたお名前を、あかぼしりな宛にDiscord内のDMで必ず送信してください。
          <br />
          その後24時間以内に、ご参加可能となります。
          <br />
          ぜひ最初は自己紹介からお気軽に書き込んでみてください♪
        </p>
      </StepBox>

      <div className="mt-8">
        <SectionTitle title="ご入会＆ご退会方法解説動画" subtitle="Join" />
        <VimeoEmbed src={EXTERNAL_LINKS.vimeoVideo} title="説明動画" />
        <p className="text-[13px] lg:text-[20px] text-brown mt-4">
          ※動画内は旧ホームページデザインになっています。入会方法でお困りの方は
          <a href={EXTERNAL_LINKS.email} className="font-bold underline">
            こちら (info@rina-akaboshi.com)
          </a>
          までご連絡ください。
        </p>
      </div>
    </section>
  );
}
