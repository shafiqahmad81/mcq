import Dashboard from "./dashboard/dashboard";
import PaymentHistory from "./payment/payment";
import SidebarWrapper from "./sidebar";

export default function Page() {

    type Payment = {
    course: string;
    amount: number;
    method: string;
    status: "Paid" | "Pending";
    date: string;
    };

const payments = [
  { course: "React MCQ", amount: 500, method: "Bkash", status: "Paid", date: "2026-04-10" },
  { course: "Next.js Advanced", amount: 800, method: "Nagad", status: "Paid", date: "2026-04-12" },
  { course: "JavaScript Basics", amount: 300, method: "Card", status: "Pending", date: "2026-04-15" },
] satisfies Payment[];

    return (
        <section>
            <div className="container">
                <div className="min-h-screen bg-gray-50 text-gray-900">

                    <div className="flex flex-col lg:flex-row">

                        {/* Sidebar */}
                        <SidebarWrapper />

                        {/* MAIN CONTENT */}
                        <main className="min-w-0 flex-1 p-4 pt-20 sm:p-6 sm:pt-24 lg:p-8 lg:pt-8">

                            {/* HEADER */}
                            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold sm:text-3xl">
                                        Welcome back 👋
                                    </h1>
                                    <p className="text-sm text-gray-500 sm:text-base">
                                        Here’s your MCQ learning progress and recent activity.
                                    </p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-emerald-500" />
                            </div>

                           <Dashboard />

                            <PaymentHistory payments={payments} />

                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
}