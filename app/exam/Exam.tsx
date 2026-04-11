"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { Clock } from "lucide-react";

export default function ExamPage() {
  const router = useRouter();
  const [time, setTime] = useState(12 * 60);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShowAnswer = (qId: number) => {
  setShowAnswer((prev) => ({
    ...prev,
    [qId]: !prev[qId],
  }));
};
const handleSelect = (qId: number, option: string) => {
  setAnswers((prev) => {
    const updated = { ...prev };
    updated[qId] = option;
    return updated;
  });
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

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <section className="mx-auto max-w-3xl bg-white pb-4 min-h-screen py-10">
      {/* Timer Header */}
      <div className="sticky top-20 z-30 w-full bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Exam চলছে</h2>

        <div className="rounded-lg bg-red-100 px-4 py-2 font-bold text-red-600 flex items-center gap-2">
          <Clock size={18} /> {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>
      </div>

      <div className="space-y-10 p-6 shadow-md">
        {questions.map((q, index) => (
          <div key={q.id}>
            <div className="mb-4 flex justify-between">
              <h5 className="font-semibold">{q.question}</h5>
              <span>
                {index + 1}/{questions.length}
              </span>
            </div>

            {q.options.map((option, i) => (
              <label
                key={i}
                className="mb-2 block cursor-pointer rounded border p-3 hover:bg-gray-50"
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  checked={answers[q.id] === option}
                  onChange={() => handleSelect(q.id, option)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
            <div className="flex items-center justify-end">
              <button
                onClick={() => handleShowAnswer(q.id)}
                className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                {showAnswer[q.id] ? "Hide Answer" : "Show Answer"}
              </button>
            </div>

            {showAnswer[q.id] && (
              <div className="mt-2 rounded bg-green-50 p-3 text-green-700 font-semibold cursor-pointer">
                Right Answer: {q.answer}
              </div>
            )}
            
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-6">
        <button
          onClick={handleFinish}
          className="rounded-md bg-pink-500 px-8 py-3 text-white font-semibold transition-all hover:bg-pink-600 cursor-pointer"
        >
          Finish Exam
        </button>
      </div>

    </section>
  );
}