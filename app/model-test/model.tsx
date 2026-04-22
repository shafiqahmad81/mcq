"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import profileImage from "../../assets/image/young.jpg"

export default function ModelPage() {
  const tests = [
    "51th BCS Bangla",
    "50th BCS Bangla",
    "49th BCS Bangla",
    "47th BCS Bangla",
    "46th BCS Bangla",
    "45th BCS Bangla",
    "44th BCS Bangla Bangla Bangla Bangla",
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

  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState("");

  // 🔥 FILTERED DATA
  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      test.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, tests]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredTests.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filteredTests.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredTests.length;
    setItemOffset(newOffset);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setItemOffset(0);
  };

  return (
    <div className="min-h-screen bg-white py-8 md:py-12 text-black">
      <div className="container">
        <div className="rounded-2xl border border-gray-300 bg-white px-2 py-3 md:py-4 text-center shadow-lg ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">বাংলা বিষয়ের অসংখ্য টেস্ট দিন একদম ফ্রিতে !!!</h1>
        </div>
        <h2 className="mt-6 md:mt-8 text-center text-2xl md:text-3xl">
          Bangla Model Tests
        </h2>

        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search MCQ..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full max-w-md border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}
          <div>
            <div className="overflow-hidden border-t border-gray-300 bg-white">
              {currentItems.map((test, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b gap-2 border-gray-300 px-2 sm:px-4 py-2 sm:py-4"
                >
                  <span className="text-base sm:text-lg">{test}</span>

                  <Link
                    href="/exam"
                    className="rounded bg-pink-500 px-3 py-1 text-sm font-semibold text-white transition-all hover:bg-pink-700 min-w-20"
                  >
                    Try Now
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}


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
          </div>

          {/* RIGHT */}

          <div className="space-y-6 text-[17px] leading-8 text-gray-700">

            <p className="border-l-4 border-pink-500 pl-4 text-sm sm:text-base">
              <span className="font-semibold text-black">Preliminary Bangla Literature </span>
              is an important subject of the BCS exam. It focuses on Bengali language,
              literature, and related linguistic topics that are frequently asked in exams.
            </p>

            <div className="w-50 h-50 overflow-hidden mx-auto">
              <Image
                src={profileImage}
                alt="profileImage"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="border-l-4 border-pink-500 pl-4 text-sm sm:text-base">
              To perform effectively in this section, consistent practice of reading,
              writing, and understanding Bangla literature is essential. Regular practice
              improves both speed and accuracy in the exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}