import { HeaderSimple } from "@/components/HeaderSimple";
import { Footer } from "@/components/Footer";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSimple />
      <main className="grow px-4 lg:px-20 bg-cream-main">{children}</main>
      <Footer />
    </>
  );
}
