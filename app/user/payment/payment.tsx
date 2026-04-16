"use client";

type Payment = {
  course: string;
  amount: number;
  method: string;
  status: "Paid" | "Pending";
  date: string;
};

type PaymentHistoryProps = {
  payments: Payment[];
};

export default function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        Payment History
      </h2>

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
            {payments.map((item, i) => (
              <tr key={i} className="border-t text-sm">
                <td className="p-4 font-medium">{item.course}</td>

                <td className="p-4 text-emerald-600 font-semibold">
                  ৳ {item.amount}
                </td>

                <td className="p-4">{item.method}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Paid"
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
  );
}