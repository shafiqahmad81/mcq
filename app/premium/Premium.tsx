"use client";
import { useState } from "react";
import CourseImage from "../../assets/image/primaryteachercourse.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Premium() {
    const [activeTab, setActiveTab] = useState("info");
    const courseContent = [
        "প্রাথমিক শিক্ষক নিয়োগ মডেল টেস্ট-১",
        "প্রাথমিক শিক্ষক নিয়োগ মডেল টেস্ট-২",
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
                <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                    {/* Left */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            প্রাথমিক শিক্ষক নিয়োগ প্রস্তুতি
                        </h1>
                        <p className="mt-3 text-sm text-gray-500">
                            Categories: শিক্ষক নিয়োগ প্রস্তুতি
                        </p>

                        <Image 
                            src={CourseImage}
                            alt="CourseImage"
                            width={848}
                            height={478}
                            className="mt-6 w-full rounded-lg object-cover"
                        />

                        {/* Tabs */}
                        <div className="mt-8 flex gap-8 border-b text-sm font-medium">
                            <button onClick={() => setActiveTab("info")} className={`pb-1 mb-3 ${activeTab === "info" ? "border-b-2 border-emerald-600 text-emerald-600" : "text-gray-500"}`}>
                                Course Info
                            </button>
                            <button onClick={() => setActiveTab("reviews")} className={`pb-1 mb-3 ${activeTab === "reviews" ? "border-b-2 border-emerald-600 text-emerald-600" : "text-gray-500"}`}>
                                Reviews
                            </button>
                        </div>

                        {/* About */}
                        {activeTab === "info" ? (
                            <>
                                <div className="mt-8">
                                    <h3>About Course</h3>
                                    <p className="mt-4 text-base sm:text-lg text-black">
                                        প্রাথমিক শিক্ষক নিয়োগ পরীক্ষার চারটি বিষয় বাংলা, গণিত, ইংরেজি ও
                                        সাধারণ জ্ঞান থেকে প্রশ্ন আসবে। চারটি বিষয়ে ২০টি করে ৮০টি
                                        নৈর্ব্যক্তিক প্রশ্ন থাকবে। সময় ১ ঘন্টা। প্রতিটি প্রশ্নের মান ১।
                                        আর প্রতিটি ভুলের জন্য ০.২৫ নম্বর কাটা যাবে। এই কোর্সে বিগত বছরের
                                        প্রশ্ন এবং পূর্ণাঙ্গ মডেল টেস্ট বারবার প্র্যাকটিস করা যাবে।
                                    </p>
                                </div>

                                <div className="mt-10">
                                    <h3>What Will You Learn?</h3>
                                    <ul className="mt-4 list-disc space-y-1 pl-6 text-base sm:text-lg text-black">
                                        <li>বাংলা, গণিত, ইংরেজি ও সাধারণ জ্ঞান</li>
                                        <li>৮০টি MCQ প্রশ্ন অনুশীলন</li>
                                        <li>মডেল টেস্ট ও বিগত বছরের প্রশ্ন</li>
                                    </ul>
                                </div>

                                {/* <section className="mt-10">
                                    <h3 >Course Content</h3>

                                    <div className="mt-4 overflow-hidden rounded-xl border bg-white">
                                        <div className="flex items-center justify-between bg-gray-50 px-5 py-4 font-semibold">
                                            <span>পূর্ণাঙ্গ মডেল টেস্ট</span>
                                            <span>⌃</span>
                                        </div>

                                        <div className="divide-y">
                                            {courseContent.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between px-5 py-4 text-gray-700"
                                                >
                                                    <span>{item}</span>
                                                    <Lock size={18} className="text-gray-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section> */}
                            </>
                        ) : (
                            <>
                                <div className="mt-8 rounded-xl border bg-white p-6">
                                    <h3>Student Reviews</h3>
                                    <div className="mt-4 space-y-2 divide-y divide-gray-300">
                                        <div className="pb-2">
                                            <p className="font-semibold">Shafiqul Islam</p>
                                            <p className="mt-2 text-gray-600">খুবই ভালো কোর্স। MCQ practice এর জন্য perfect.</p>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold">Rahim</p>
                                            <p className="mt-2 text-gray-600">Model test গুলো অনেক helpful ছিল।</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <aside className="space-y-6">
                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold">৳50.00</span>
                                <span className="text-gray-400 line-through">৳300.00</span>
                            </div>
                            <div>
                                <Link href="/payment" className="text-center mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 block">
                                    Purchase
                                </Link>
                            </div>
                            <p className="mt-5 text-sm text-gray-500">
                                May 12, 2025 Last Updated
                            </p>
                        </div>


                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <h4>Requirements</h4>
                            <p className="mt-4 text-base sm:text-lg text-black">
                                প্রাথমিক শিক্ষক নিয়োগ পরীক্ষায় চারটি বিষয় বাংলা, গণিত, ইংরেজি ও সাধারণ জ্ঞান অংশ থেকে প্রশ্ন আসে। চারটি বিষয়ে ২০টি করে ৮০টি নৈর্ব্যক্তিক প্রশ্ন থাকে। সময় ১ ঘণ্টা। প্রতিটি প্রশ্নের মান ১। আর প্রতিটি ভুলের জন্য ০.২৫ নম্বর কাটা যাবে। এই কোর্সে প্রাথমিক শিক্ষক নিয়োগ পরীক্ষার বিগত বছরের প্রশ্ন থেকে মডেল টেস্ট এবং পূর্ণাঙ্গ মডেল টেস্ট ধারাবাহিকভাবে আপলোড করা হবে।
                            </p>
                        </div>

                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <h4>Audience</h4>
                            <p className="mt-4 text-base sm:text-lg text-black">
                                প্রাথমিক শিক্ষক নিয়োগ পরীক্ষায় চারটি বিষয় বাংলা, গণিত, ইংরেজি ও সাধারণ জ্ঞান অংশ থেকে প্রশ্ন আসে। চারটি বিষয়ে ২০টি করে ৮০টি নৈর্ব্যক্তিক প্রশ্ন থাকে। সময় ১ ঘণ্টা। প্রতিটি প্রশ্নের মান ১। আর প্রতিটি ভুলের জন্য ০.২৫ নম্বর কাটা যাবে। এই কোর্সে প্রাথমিক শিক্ষক নিয়োগ পরীক্ষার বিগত বছরের প্রশ্ন থেকে মডেল টেস্ট এবং পূর্ণাঙ্গ মডেল টেস্ট ধারাবাহিকভাবে আপলোড করা হবে।
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
