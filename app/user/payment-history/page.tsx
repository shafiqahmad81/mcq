"use client";

const payments = [
  {
    id: "TXN12345",
    course: "Web Development",
    amount: 2500,
    status: "Paid",
    date: "2026-04-20",
  },
  {
    id: "TXN12346",
    course: "React Mastery",
    amount: 1800,
    status: "Pending",
    date: "2026-04-18",
  },
  {
    id: "TXN12347",
    course: "Tailwind Advanced",
    amount: 1200,
    status: "Failed",
    date: "2026-04-15",
  },
];

export default function PaymentHistory() {
  return (
    <div className="lg:p-6 w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Payment History</h2>

      {/* Desktop Table */}
      <div className="block overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Transaction</th>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((item) => (
              <tr key={item.id} className="border-t border-black/10 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{item.id}</td>
                <td className="px-4 py-3">{item.course}</td>
                <td className="px-4 py-3">৳ {item.amount}</td>
                <td className="px-4 py-3 text-gray-500">{item.date}</td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      {/* <div className="md:hidden space-y-4">
        {payments.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.course}</h3>

              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  item.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : item.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Transaction: {item.id}
            </p>

            <div className="mt-3 flex justify-between text-sm">
              <span>৳ {item.amount}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}