import Link from "next/link";

export default function CategoryPage() {
  const banglaItems = [
    "বাংলা ব্যাকরণ",
    "বাংলা সাহিত্য",
    "সমাস",
    "বাগধারা",
    "এক কথায় প্রকাশ",
    "কারক বিভক্তি",
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="">
          বাংলা MCQ
        </h1>
        <p className="text-gray-500 mt-2">
          বাংলা বিষয়ের MCQ practice শুরু করুন
        </p>
      </div>

      {/* বাংলা MCQ Sets */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banglaItems.map((cat, i) => (
          <Link
            key={i}
            href="/mcq"
            className="border rounded-xl px-4 py-4 hover:bg-blue-50 hover:border-blue-400 transition text-sm font-medium block"
          >
            {cat} MCQ Set {i + 1} • ৩০ মার্কস
          </Link>
        ))}
      </div>
    </section>
  );
}