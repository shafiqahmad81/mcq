"use client";

import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Page() {
  const payments = [
    { course: "React MCQ", amount: 500, method: "Bkash", status: "Paid", date: "2026-04-10" },
    { course: "Next.js Advanced", amount: 800, method: "Nagad", status: "Paid", date: "2026-04-12" },
    { course: "JavaScript Basics", amount: 300, method: "Card", status: "Pending", date: "2026-04-15" },
  ];

  const stats = [
    { title: "Enrolled Courses", value: 3 },
    { title: "Completed MCQ Sets", value: 12 },
    { title: "Average Score", value: "dynamic" },
  ];

  const courses = [
    { name: "JavaScript Basics", progress: 60 },
    { name: "React MCQ Practice", progress: 55 },
    { name: "Next.js Advanced", progress: 100 },
  ];

  // ✅ Dynamic Average Score
  const avgScore = Math.round(
    courses.reduce((acc, c) => acc + c.progress, 0) / courses.length
  );

  const scoreData = [
    { name: "Avg Score", value: avgScore },
  ];

  return (
    <main className="px-3 py-4 w-full max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="mb-5 text-2xl font-bold text-gray-800">
        Dashboard History
      </h2>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{item.title}</p>

            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              {item.title === "Average Score"
                ? `${avgScore}%`
                : item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          Average Performance
        </h2>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scoreData} barSize={50}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(16, 185, 129, 0.08)" }}
              />
              <Bar
                dataKey="value"
                fill="#10b981"
                radius={[12, 12, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>Overall course performance</span>
          <span className="font-semibold text-emerald-600">
            {avgScore}% Avg
          </span>
        </div>
      </div>

      {/* COURSES + PROFILE */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* COURSES */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="mb-6 text-lg font-semibold">
            Your Courses
          </h2>

          <div className="space-y-5">
            {courses.map((course, index) => (
              <div key={index}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{course.name}</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROFILE */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold">
            Profile
          </h2>

          <div className="flex flex-col items-center text-center">

            <div className="h-20 w-20 rounded-full bg-emerald-500 mb-4" />

            <h3 className="text-lg font-semibold">
              Shafiqul Islam
            </h3>

            <p className="text-sm text-gray-500">
              Frontend Learner
            </p>

            <Link
              href="/user/profile-history"
              className="mt-6 w-full rounded-xl bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-600 text-center"
            >
              Edit Profile
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}