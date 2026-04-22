"use client";

import { useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/image/image1.jpg";
import ReactPaginate from "react-paginate";

const courses = [
    { id: 1, title: "Complete Web Development", progress: 80, status: "Ongoing", image: Image1 },
    { id: 2, title: "React & Next.js Mastery", progress: 100, status: "Completed", image: Image1 },
    { id: 3, title: "Tailwind CSS Advanced", progress: 45, status: "Ongoing", image: Image1 },
    { id: 4, title: "JavaScript Mastery", progress: 70, status: "Ongoing", image: Image1 },
    { id: 5, title: "Node.js API Mastery", progress: 60, status: "Ongoing", image: Image1 },
    { id: 6, title: "MongoDB Basics", progress: 90, status: "Completed", image: Image1 },
    { id: 7, title: "TypeScript Guide", progress: 50, status: "Ongoing", image: Image1 },
    { id: 8, title: "Next.js Advanced", progress: 100, status: "Completed", image: Image1 },
];

export default function CourseHistory() {
    const [itemOffset, setItemOffset] = useState(0);

    const perPage = 3;

    const endOffset = itemOffset + perPage;
    const currentItems = courses.slice(itemOffset, endOffset);

    const pageCount = Math.ceil(courses.length / perPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * perPage) % courses.length;
        setItemOffset(newOffset);

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="py-6 lg:px-6 w-full">

            {/* TITLE */}
            <h1 className="text-2xl font-bold mb-6">
                Course History
            </h1>

            {/* GRID */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {currentItems.map((course) => (
                    <div
                        key={course.id}
                        className="rounded-2xl bg-white shadow-sm border border-black/10 p-4 hover:shadow-md transition"
                    >

                        {/* IMAGE */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="mt-4">
                            <h3 className="font-semibold text-lg">
                                {course.title}
                            </h3>

                            <span
                                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${course.status === "Completed"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-yellow-100 text-yellow-600"
                                    }`}
                            >
                                {course.status}
                            </span>

                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Progress</span>
                                    <span>{course.progress}%</span>
                                </div>

                                <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                            </div>

                            <button className="mt-4 w-full rounded-lg bg-emerald-500 py-2 text-sm text-white hover:bg-emerald-600 transition cursor-pointer">
                                Continue Course
                            </button>
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

        </div>
    );
}