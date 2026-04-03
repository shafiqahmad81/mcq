"use client";

import { useState, useEffect } from "react";
import { questions } from "../../data/questions";
import ResultCard from "../../components/result/ResultCard";

export default function Exam() {
  const [time, setTime] = useState(12 * 60);
  const [answers, setAnswers] = useState<any>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleSelect = (qId: number, option: string) => {
    setAnswers({
      ...answers,
      [qId]: option,
    });
  };

  // Finish Exam
  const handleFinish = () => {
    setShowResult(true);
  };

  // Calculate Result
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.answer
  ).length;

  const wrongAnswers = Object.keys(answers).length - correctAnswers;

  const score = Math.round(
    (correctAnswers / questions.length) * 100
  );

  // Show Result
  if (showResult) {
    return (
      <ResultCard
        totalQuestions={questions.length}
        correct={correctAnswers}
        wrong={wrongAnswers}
        score={score}
        timeTaken={formatTime(time)}
      />
    );
  }

  return (
    <section className="max-w-3xl mx-auto bg-white shadow pb-4">
      
      {/* Header */}
      <div className="text-center py-3 border-b bg-gray-100">
        Exam will end after {formatTime(time)}
      </div>

      {/* Questions */}
      <div className="p-6 space-y-10">
        {questions.map((q, index) => (
          <div key={q.id}>
            
            <div className="flex justify-between mb-4">
              <h4 className="font-medium">
                {q.question}
              </h4>

              <span className="w-full max-w-14">
                {index + 1} / {questions.length}
              </span>
            </div>

            <div className="space-y-3">
              {q.options.map((option, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 border p-2 sm:p-3 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    checked={answers[q.id] === option}
                    onChange={() => handleSelect(q.id, option)}
                  />

                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Finish Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleFinish}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold shadow-md transition cursor-pointer"
        >
          Finish Exam
        </button>
      </div>

    </section>
  );
}