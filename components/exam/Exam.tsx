"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";

export default function ExamPage() {
  const router = useRouter();
  const [time, setTime] = useState(12 * 60);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSelect = (qId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: option,
    }));
  };

  const handleFinish = () => {
    const correct = questions.filter(
      (q) => answers[q.id] === q.answer
    ).length;

    const wrong = Object.keys(answers).length - correct;

    const score = Math.round(
      (correct / questions.length) * 100
    );

    localStorage.setItem("examAnswers", JSON.stringify(answers));
    localStorage.setItem(
      "examResult",
      JSON.stringify({
        totalQuestions: questions.length,
        correct,
        wrong,
        score,
      })
    );

    router.push("/result");
  };

  return (
    <section className="max-w-3xl mx-auto bg-white shadow pb-4">
      <div className="p-6 space-y-10">
        {questions.map((q, index) => (
          <div key={q.id}>
            <div className="flex justify-between mb-4">
              <h5>{q.question}</h5>
              <span>
                {index + 1}/{questions.length}
              </span>
            </div>

            {q.options.map((option, i) => (
              <label key={i} className="block border p-3 mb-2">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  checked={answers[q.id] === option}
                  onChange={() => handleSelect(q.id, option)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="text-center pb-6">
        <button
          onClick={handleFinish}
          className="bg-pink-500 hover:bg-pink-600 transition-all text-white px-8 py-3 rounded-md cursor-pointer"
        >
          Finish Exam
        </button>
      </div>
    </section>
  );
}