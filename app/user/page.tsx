"use client";

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
  // ✅ Courses
  const courses = [
    { name: "JavaScript Basics", progress: 60 },
    { name: "React MCQ Practice", progress: 55 },
    { name: "Next.js Advanced", progress: 100 },
  ];

  // ✅ Avg Score
  const avgScore =
    courses.length > 0
      ? Math.round(
          courses.reduce((acc, c) => acc + c.progress, 0) /
            courses.length
        )
      : 0;

  // ✅ Stats
  const stats = [
    { title: "Enrolled Courses", value: courses.length },
    { title: "Completed MCQ Sets", value: 12 },
    { title: "Average Score", value: `${avgScore}%` },
  ];

  // ✅ Area Chart Data
  const areaData = [
    {
      name: "JavaScript",
      progress: 60,
      practice: 40,
      score: 65,
    },
    {
      name: "React",
      progress: 55,
      practice: 50,
      score: 70,
    },
    {
      name: "Next.js",
      progress: 100,
      practice: 80,
      score: 90,
    },
  ];

  return (
    <main className="px-3 py-4 w-full max-w-6xl mx-auto">
      {/* TITLE */}
      <h2 className="mb-5 text-2xl font-bold text-gray-800">
        Dashboard History
      </h2>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-800">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* STACKED AREA CHART */}
      <div className="mt-6 rounded-2xl border bg-white p-3 sm:p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold text-gray-800">
          Course Analytics
        </h2>

        <div className="h-40 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={areaData}
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