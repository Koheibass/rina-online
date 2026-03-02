import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsArticles, getNewsArticle } from "@/lib/newsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  return { title: article?.title ?? "ニュース" };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="border border-brown-border rounded-md p-6">
        <h1 className="text-lg lg:text-2xl font-bold text-brown mb-2">
          {article.title}
        </h1>
        <div className="text-sm text-brown-light mb-4">
          &quot;{article.date}&quot;
        </div>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={600}
            className="w-full h-auto mb-4"
          />
        )}
        <hr className="border-brown-border mb-4" />
        <div className="text-[13px] lg:text-[15px] text-brown whitespace-pre-line leading-relaxed">
          {article.content}
        </div>
      </div>
      <div className="text-center my-8">
        <Link href="/" className="text-pink-link underline">
          Topに戻る
        </Link>
      </div>
    </div>
  );
}
