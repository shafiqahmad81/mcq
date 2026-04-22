"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReactPaginate from "react-paginate";

export default function McqHistoryPage() {
  const completedMcqs = [
    { id: 1, title: "JavaScript Basics MCQ", total: 50, score: 42, date: "2026-04-10" },
    { id: 2, title: "React Practice Test", total: 50, score: 35, date: "2026-04-12" },
    { id: 3, title: "Next.js Advanced MCQ", total: 50, score: 45, date: "2026-04-15" },
    { id: 4, title: "HTML CSS Basics", total: 40, score: 38, date: "2026-04-16" },
    { id: 5, title: "Node.js MCQ", total: 60, score: 50, date: "2026-04-17" },
    { id: 6, title: "MongoDB Test", total: 30, score: 25, date: "2026-04-18" },
    { id: 7, title: "TypeScript MCQ", total: 40, score: 35, date: "2026-04-19" },
    { id: 8, title: "CSS Advanced MCQ", total: 40, score: 32, date: "2026-04-20" },
  ];

  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState("");

  const perPage = 4;

  // filter
  const filteredMcqs = completedMcqs.filter((mcq) =>
    mcq.title.toLowerCase().includes(search.toLowerCase())
  );

  const endOffset = itemOffset + perPage;
  const currentItems = filteredMcqs.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filteredMcqs.length / perPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % filteredMcqs.length;
    setItemOffset(newOffset);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="lg:px-6 py-6 w-full">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Completed MCQ History
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search MCQ..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setItemOffset(0);
        }}
        className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg mb-6 outline-pink-500"
      />

      {/* LIST */}
      <div className="space-y-4">
        {currentItems.map((mcq) => (
          <div
            key={mcq.id}
            className="border border-black/10 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-semibold">{mcq.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{mcq.date}</p>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-emerald-600">
                  {mcq.score} / {mcq.total}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/view"
                className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          previousLabel="< Prev"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex items-center gap-2 select-none"
          pageLinkClassName="block px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 transition"
          activeLinkClassName="bg-pink-500 text-white border-pink-500"
          previousLinkClassName="block px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 transition"
          nextLinkClassName="block px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 transition"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>

    </main>
  );
}