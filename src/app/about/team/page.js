export default function AboutTeamPage() {
  return (
    <main className="flex flex-col items-center justify-start px-16 py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          團隊介紹
        </h1>

        <p
          className="leading-8 text-gray-700 text-justify"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          （此處可放置中心成員名單、職稱、專長與照片等資訊，例如主任、副主任、研究員、助理與行政團隊介紹，未來可再補上詳細內容與版面設計。）
        </p>
      </section>
    </main>
  );
}

