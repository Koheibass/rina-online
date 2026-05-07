import { EXTERNAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-section-bg border-t border-cream-border">
      <div className="max-w-4xl mx-auto px-4 py-10 lg:py-14 text-center">
        <div className="font-heading text-primary text-xl lg:text-2xl font-black mb-4">
          おといのちオンライン
        </div>
        <p className="text-text-light text-sm mb-6">
          クラシック音楽を愛するすべての人のためのコミュニティ
        </p>
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a
            href={EXTERNAL_LINKS.email}
            className="text-text-light hover:text-primary transition-colors no-underline"
          >
            お問い合わせ
          </a>
          <a
            href={EXTERNAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-primary transition-colors no-underline"
          >
            Discord
          </a>
        </div>
        <div className="text-xs text-text-light">&copy; 2026 Rina Akaboshi</div>
      </div>
    </footer>
  );
}
