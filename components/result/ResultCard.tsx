"use client";

import Link from "next/link";

interface ResultCardProps {
  totalQuestions: number;
  correct: number;
  wrong: number;
  score: number;
}

export default function ResultCard({
  totalQuestions,
  correct,
  wrong,
  score,
}: ResultCardProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-green-600 text-white text-center py-4">
        <h2 className="text-xl font-semibold">Exam Result</h2>
      </div>

      <div className="p-8 space-y-6">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-green-600">
            {score}%
          </h3>
          <p className="text-gray-500 mt-2">Your Final Score</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <h4>{totalQuestions}</h4>
            <p>Total Questions</p>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-green-600">{correct}</h4>
            <p>Correct</p>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-red-500">{wrong}</h4>
            <p>Wrong</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/view"
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Review Answers
          </Link>

          <Link
            href="/exam"
            className="bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}