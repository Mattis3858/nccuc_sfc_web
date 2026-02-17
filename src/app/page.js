import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      {/* Banner 區塊 */}
      <div className="w-full relative h-[320px] sm:h-[420px] md:h-[520px]">
        <Image
          src="/nasa-Q1p7bh3SHj8-unsplash.jpg"
          alt="Sustainable finance earth view"
          fill
          priority
          className="object-cover"
        />
        {/* 如需在 Banner 上加標題，可取消下列註解 */}
        {/*
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
          >
            國立政治大學商學院永續財務決策研究中心
          </h1>
        </div>
        */}
      </div>

      {/* 後續內容區塊（目前暫留） */}
      <section className="w-full max-w-5xl px-6 py-12">
        <p className="mt-4 text-gray-500">Testing</p>
      </section>
    </main>
  );
}