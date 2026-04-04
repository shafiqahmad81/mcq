"use client";

import { useEffect, useState } from "react";
import ViewResult from "@/components/viewresult/ViewResult";
import { questions } from "@/data/questions";

export default function ViewPage() {
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