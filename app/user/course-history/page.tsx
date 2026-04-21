"use client";

import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    progress: 80,
    status: "Ongoing",
    image: "/course1.jpg",
  },
  {
    id: 2,
    title: "React & Next.js Mastery",
    progress: 100,
    status: "Completed",
    image: "/course2.jpg",
  },
  {
    id: 3,
    title: "Tailwind CSS Advanced",
    progress: 45,
    status: "Ongoing",
    image: "/course3.jpg",
  },
];

export default function CourseHistory() {
  return (
    <div className="lg:p-6 w-full">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Course History</h1>

      {/* Course List */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl bg-white shadow-sm border p-4 hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{course.title}</h3>

              {/* Status */}
              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  course.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {course.status}
              </span>

              {/* Progress */}
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

              {/* Button */}
              <button className="mt-4 w-full rounded-lg bg-emerald-500 py-2 text-sm text-white hover:bg-emerald-600 transition cursor-pointer">
                Continue Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}