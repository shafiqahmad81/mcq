"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ModelTest() {
  const tests = [
    "51th BCS Bangla",
    "50th BCS Bangla",
    "49th BCS Bangla",
    "47th BCS Bangla",
    "46th BCS Bangla",
    "45th BCS Bangla",
    "44th BCS Bangla",
    "43th BCS Bangla",
    "42th Special BCS Bangla",
    "41th BCS Bangla",
    "40th BCS Bangla",
    "39th BCS Bangla",
    "38th BCS Bangla",
    "37th BCS Bangla",
    "36th BCS Bangla",
    "35th BCS Bangla",
    "34th BCS Bangla",
    "33th BCS Bangla",
    "32th BCS Bangla",
    "31th BCS Bangla",
    "30th BCS Bangla",
    "29th BCS Bangla",
    "28th BCS Bangla",
    "27th BCS Bangla",
    "26th BCS Bangla",
    "25th BCS Bangla",
    "24th BCS Bangla",
    "23th BCS Bangla",
    "22th BCS Bangla",
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tests.length / itemsPerPage);

  const currentTests = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return tests.slice(start, start + itemsPerPage);
  }, [currentPage, tests]);

  return (
    <div className="min-h-screen bg-[#f3f3f3] px-6 py-7 text-[#5c5c5c]">
      <div className="mx-auto max-w-7xl">
        {/* Top Banner */}
        <div className="rounded-2xl border border-gray-300 bg-white py-4 text-center text-2xl shadow-lg md:text-4xl">
          বাংলা বিষয়ের অসংখ্য টেস্ট দিন একদম ফ্রিতে !!!
        </div>

        <h1 className="mt-8 text-center text-3xl md:text-5xl">
          Bangla Model Tests
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Left Table */}
          <div>
            <div className="overflow-hidden border-t border-gray-300 bg-white">
              {currentTests.map((test, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-300 px-4 py-4"
                >
                  <span className="text-lg">{test}</span>
                  <Link
                    href="/exam"
                    className="rounded bg-slate-500 px-3 py-1 text-sm font-semibold text-white"
                  >
                    Try Now
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                className="px-3 py-2 cursor-pointer"
              >
                Previous
              </button>

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

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                className="px-3 py-2 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 text-[18px] leading-10">
            <p>
              Preliminary Bangla Literature is an important subject of the BCS
              exam. The subject covers the Bengali language, the literature of
              that language, and related topics.
            </p>

            <p>
              To perform effectively in this section, one must practice reading
              and writing in Bangla regularly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}