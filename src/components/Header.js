import Image from "next/image";

export default function Header() {
  const navItems = [
    { label: "關於我們", href: "#about" },
    { label: "最新消息", href: "#news" },
    { label: "永續財務資訊", href: "#information" },
    { label: "中心研究成果", href: "#research" },
    { label: "永續財務相關連結", href: "#links" },
  ];

  return (
    <header className="sticky top-0 z-100 bg-white border-b-2 border-gray-200 py-6">
      <div className="w-full px-16 flex justify-between items-center">
        {/* 左側：Logo 和文字 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/sfc_logo.png"
              alt="SFC Logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>
              國立政治大學商學院永續財務決策研究中心
            </h1>
            <p className="text-sm text-gray-600" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              NCCUC Sustainable Finance Center
            </p>
          </div>
        </div>

        {/* 右側：導航菜單 */}
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base text-gray-700 no-underline transition-colors duration-300 hover:text-green-600 hover:font-semibold whitespace-nowrap"
              style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
