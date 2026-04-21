"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

  // STATE
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const perPage = 4;

  const filteredMcqs = completedMcqs.filter((mcq) =>
    mcq.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMcqs.length / perPage);

  const start = (currentPage - 1) * perPage;

  const paginatedMcqs = filteredMcqs.slice(start, start + perPage);

  return (
    <main className="lg:px-6 py-6 w-full">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Completed MCQ History
      </h1>

      {/* SEARCH BOX */}
      <form className="mb-6">
        <input
          type="text"
          placeholder="Search MCQ..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </form>

      {/* LIST */}
      <div className="space-y-4">
        {paginatedMcqs.map((mcq) => (
          <div
            key={mcq.id}
            className="border border-black/10 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              {/* LEFT */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {mcq.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Date: {mcq.date}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-sm text-gray-600">Score</p>
                <p className="text-xl font-bold text-emerald-600">
                  {mcq.score} / {mcq.total}
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-4">
              <Link
                href="/view"
                className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                View Details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex flex-wrap items-center justify-end gap-2">

        {/* Previous */}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.max(p - 1, 1))
          }
          className="px-3 py-2 cursor-pointer"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded px-4 py-2 shadow cursor-pointer ${
                currentPage === page
                  ? "border border-gray-400 bg-white"
                  : "bg-transparent"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((p) =>
              Math.min(p + 1, totalPages)
            )
          }
          className="px-3 py-2 cursor-pointer"
        >
          Next
        </button>

      </div>

    </main>
  );
}