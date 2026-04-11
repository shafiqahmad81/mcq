"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import ViewResult from "./ViewResult";

export default function Page() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const storedAnswers = localStorage.getItem("examAnswers");

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  return (
    <section className="max-w-3xl mx-auto bg-white shadow p-6">
      {questions.map((q, index) => (
        <ViewResult
          key={q.id}
          question={q.question}
          options={q.options}
          correctAnswer={q.answer}
          selectedAnswer={answers[q.id]}
          index={index + 1}
          total={questions.length}
        />
      ))}
    </section>
  );
}