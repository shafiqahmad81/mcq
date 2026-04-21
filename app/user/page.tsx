"use client";

import Link from "next/link";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export default function Page() {
    const courses = [
        { name: "JavaScript Basics", progress: 60, practice: 40, score: 65 },
        { name: "React MCQ Practice", progress: 55, practice: 50, score: 70 },
        { name: "Next.js Advanced", progress: 100, practice: 80, score: 90 },
        { name: "TypeScript Master", progress: 75, practice: 60, score: 85 },
        { name: "Node.js API", progress: 40, practice: 30, score: 50 },
        { name: "Node.js API1", progress: 20, practice: 90, score: 980 },
        { name: "Node.js API23", progress: 40, practice: 30, score: 50 },
        { name: "Node.js API1234", progress: 100, practice: 50, score: 50 },
        { name: "Node.js API56", progress: 40, practice: 30, score: 50 },
    ];

    const avgScore =
        courses.length > 0
            ? Math.round(
                courses.reduce((acc, c) => acc + c.progress, 0) /
                courses.length
            )
            : 0;

    const stats = [
        {
            title: "Enrolled Courses",
            value: courses.length,
            href: "/user/course-history",
        },
        {
            title: "Completed MCQ Sets",
            value: 12,
            href: "/user/mcq-history",
        },
        {
            title: "Average Score",
            value: `${avgScore}%`,
            href: "#",
        },
    ];

    return (
        <main className="px-3 py-4 w-full max-w-6xl mx-auto">

            <h2 className="mb-5 text-2xl font-bold text-gray-800">
                Dashboard History
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                    <Link href={item.href}
                        key={index}
                        className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-800">
                            {item.value}
                        </h3>
                    </Link>
                ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-3 sm:p-6 shadow-sm">
                <h2 className="mb-5 text-lg font-semibold text-gray-800">
                    Course Analytics
                </h2>

                <div className="h-40 sm:h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={courses}
                            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="progress"
                                stackId="1"
                                stroke="#6366f1"
                                fill="#6366f1"
                            />
                            <Area
                                type="monotone"
                                dataKey="practice"
                                stackId="1"
                                stroke="#10b981"
                                fill="#10b981"
                            />
                            <Area
                                type="monotone"
                                dataKey="score"
                                stackId="1"
                                stroke="#f59e0b"
                                fill="#f59e0b"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </main>
    );
}