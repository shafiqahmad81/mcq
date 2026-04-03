interface ResultQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string;
  index: number;
  total: number;
}

export default function ViewResult({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  index,
  total,
}: ResultQuestionProps) {
  return (
    <div className="space-y-4 mb-5 md:pb-10">
      
      {/* Question Header */}
      <div className="flex justify-between">
        <h3 className="text-lg font-medium text-gray-700">
          {question}
        </h3>

        <span className="text-gray-500 w-full max-w-14 flex items-center justify-end">
          {index}/{total}
        </span>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, i) => {
          
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedAnswer;

          let style = "border p-4 flex items-center gap-3";

          if (isCorrect) {
            style += " border-green-500 bg-green-100 text-green-700";
          } else if (isSelected && !isCorrect) {
            style += " border-red-500 bg-red-100 text-red-600";
          } else {
            style += " border-gray-300";
          }

          return (
            <div key={i} className={style}>
              
              <input
                type="checkbox"
                checked={isSelected}
                readOnly
              />

              <span className="flex-1">{option}</span>

              {/* Correct Icon */}
              {isCorrect && (
                <span className="text-green-600 text-xl">✔</span>
              )}

              {/* Wrong Icon */}
              {isSelected && !isCorrect && (
                <span className="text-red-600 text-xl">✖</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}