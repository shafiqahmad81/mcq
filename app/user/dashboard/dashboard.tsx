export default function Dashboard() {

    const stats = [
        { title: "Enrolled Courses", value: 3 },
        { title: "Completed MCQ Sets", value: 12 },
        { title: "Average Score", value: "89%" },
        { title: "Certificates", value: 2 },
    ];

    const courses = [
        { name: "JavaScript Basics", progress: 80 },
        { name: "React MCQ Practice", progress: 55 },
        { name: "Next.js Advanced", progress: 30 },
    ];

    return (
        <div>

            {/* STATS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                            {item.value}
                        </h3>
                    </div>
                ))}
            </div>

            {/* COURSES + PROFILE */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
                    <h2 className="mb-6 text-lg font-semibold sm:text-xl">
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
                                        className="h-3 rounded-full bg-emerald-500"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-6 text-lg font-semibold sm:text-xl">
                        Profile
                    </h2>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 h-20 w-20 rounded-full bg-emerald-500" />

                        <h3 className="text-lg font-semibold">
                            Shafiqul Islam
                        </h3>

                        <p className="text-sm text-gray-500">
                            Frontend Learner
                        </p>

                        <button className="mt-6 w-full rounded-xl bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-600">
                            Edit Profile
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}