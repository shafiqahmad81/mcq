export default function PaymentPage() {
    const payments = [
        {
            id: 1,
            course: "JavaScript Basics",
            amount: 300,
            status: "Paid",
            date: "2026-04-10",
            method: "Bkash",
        },
        {
            id: 2,
            course: "React MCQ Practice",
            amount: 500,
            status: "Paid",
            date: "2026-04-12",
            method: "Nagad",
        },
        {
            id: 3,
            course: "Next.js Advanced",
            amount: 800,
            status: "Pending",
            date: "2026-04-15",
            method: "Card",
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Payment History
                        </h1>
                        <p className="text-sm text-gray-500">
                            All your course payments are listed below
                        </p>
                    </div>

                    {/* Table Card */}
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-sm text-gray-600">
                                <tr>
                                    <th className="p-4">Course</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">Method</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {payments.map((item) => (
                                    <tr key={item.id} className="border-t text-sm">
                                        <td className="p-4 font-medium">{item.course}</td>
                                        <td className="p-4 text-emerald-600 font-semibold">
                                            ৳ {item.amount}
                                        </td>
                                        <td className="p-4">{item.method}</td>

                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "Paid"
                                                        ? "bg-emerald-100 text-emerald-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>

                                        <td className="p-4 text-gray-500">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}