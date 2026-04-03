import ExamCard from "@/components/examcard/Examcard";
import Link from "next/link";

export default function ExamDetails() {
  return (
    <section className="container mx-auto py-12 max-w-4xl">
      
      {/* Badge */}
      <div className="text-center mb-3">
        <span className="border border-red-500 text-red-500 px-2 py-1 text-sm">
          মডেল টেস্ট
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        বাংলা মডেল টেস্ট-৮ | ২০ নম্বর
      </h1>

      {/* Description */}
      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          mcq.com.bd ওয়েবসাইটে রেজিস্ট্রেশন করলে প্যাকেজ অনুযায়ী আপনি পাবেন 
          রেজিস্ট্রেশনের দিন থেকে ১ মাস/৩ মাস/৬ মাস/ এক বছর নিয়মিত মডেল টেস্ট 
          অংশগ্রহণের সুযোগ। নিচের প্যাকেজ গুলোতে রেজিস্ট্রেশন করতে ক্লিক করুন
        </p>

        <ul className="space-y-2 text-red-500 font-medium">
          <li>
            <Link className="hover:text-black transition-all" href={"#"}>১ মাসের রেজিস্ট্রেশন ফি ৩০ টাকা</Link>
          </li>
          <li>
            <Link className="hover:text-black transition-all" href={"#"}>১ মাসের রেজিস্ট্রেশন ফি ৩০ টাকা</Link>
          </li>
          <li>
            <Link className="hover:text-black transition-all" href={"#"}>১ মাসের রেজিস্ট্রেশন ফি ৩০ টাকা</Link>
          </li>
          <li>
            <Link className="hover:text-black transition-all" href={"#"}>১ মাসের রেজিস্ট্রেশন ফি ৩০ টাকা</Link>
          </li>
        </ul>
      </div>

      {/* Exam Card */}
      <ExamCard
        title="বাংলা মডেল টেস্ট-৮"
        marks={20}
        duration={12}
      />

    </section>
  );
}