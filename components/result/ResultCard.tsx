import Link from "next/link"

interface ResultCardProps {
  totalQuestions: number
  correct: number
  wrong: number
  score: number
  timeTaken?: string
}

export default function ResultCard({
  totalQuestions,
  correct,
  wrong,
  score,
  timeTaken = "10:32",
}: ResultCardProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-4">
        <h2 className="text-xl font-semibold">Exam Result</h2>
      </div>

      {/* Body */}
      <div className="p-8 space-y-6">

        {/* Score */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-green-600">
            {score}%
          </h3>
          <p className="text-gray-500 mt-2">
            Your Final Score
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          
          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold">
              {totalQuestions}
            </h4>
            <p className="text-sm text-gray-500">
              Total Questions
            </p>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-green-600">
              {correct}
            </h4>
            <p className="text-sm text-gray-500">
              Correct
            </p>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-red-500">
              {wrong}
            </h4>
            <p className="text-sm text-gray-500">
              Wrong
            </p>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold">
              {timeTaken}
            </h4>
            <p className="text-sm text-gray-500">
              Time Taken
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          
          <Link href={"view"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Review Answers
          </Link>

          <Link href={"exam"} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Try Again
          </Link>

        </div>

      </div>
    </div>
  )
}