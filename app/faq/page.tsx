

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "এই প্ল্যাটফর্মটি কীভাবে কাজ করে?",
    answer:
      "এখানে MCQ, কোর্স এবং মডেল টেস্টের মাধ্যমে আপনি চাকরি প্রস্তুতি নিতে পারবেন।",
  },
  {
    id: 2,
    question: "আমি কি ফ্রি ব্যবহার করতে পারবো?",
    answer:
      "হ্যাঁ, কিছু কনটেন্ট ফ্রি থাকবে এবং প্রিমিয়াম কোর্স আলাদা থাকবে।",
  },
  {
    id: 3,
    question: "MCQ history কোথায় দেখা যাবে?",
    answer:
      "আপনার ড্যাশবোর্ডের MCQ History সেকশনে সব পরীক্ষার রেজাল্ট দেখা যাবে।",
  },
  {
    id: 4,
    question: "Course progress কীভাবে কাজ করে?",
    answer:
      "আপনি যত ভিডিও/লেসন complete করবেন, progress bar তত update হবে।",
  },
];

export default function Page() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 sm:py-10">

      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5 sm:mb-8 text-center">
            Frequently Asked Questions
          </h1>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border border-black/10 rounded-xl sm:rounded-2xl bg-white shadow-sm overflow-hidden"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex gap-1 items-center justify-between p-3 sm:p-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  <p
                    className={`px-5 text-gray-600 text-xs sm:text-sm transition-all duration-300 ease-in-out ${isOpen
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}