export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-16 py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          聯絡我們
        </h1>

        <p
          className="leading-8 text-gray-700 text-justify"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          （此處可放置聯絡資訊，例如中心地址、聯絡電話、電子郵件信箱，以及聯絡窗口姓名與職稱。未來亦可新增聯絡表單或地圖嵌入，方便外界與中心聯繫。）
        </p>
      </section>
    </main>
  );
}

