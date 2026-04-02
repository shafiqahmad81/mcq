const questions = [
  {
    id: 1,
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup", "Hyperlinks Text"],
    answer: 0,
  },
];

export default function McqPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">MCQ Test</h2>
      {questions.map((q) => (
        <div key={q.id} className="border rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="font-semibold mb-4">{q.question}</h3>
          <div className="space-y-3">
            {q.options.map((op, i) => (
              <label key={i} className="block border p-3 rounded-xl cursor-pointer hover:bg-pink-50">
                <input type="radio" name={`q-${q.id}`} className="mr-2" />
                {op}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}