"use client";

import { useEffect, useState } from "react";
import ResultCard from "@/components/result/ResultCard";

export default function ResultPage() {
  const [result, setResult] = useState({
    totalQuestions: 0,
    correct: 0,
    wrong: 0,
    score: 0,
  });

  useEffect(() => {
    const storedResult = localStorage.getItem("examResult");

    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <ResultCard {...result} />
    </section>
  );
}