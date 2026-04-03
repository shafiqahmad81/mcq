
import ViewResult from "@/components/vewresult/VewResult";
import { questions } from "@/data/questions";

export default function ViewPage() {
const answers: Record<number, string> = {
  1: "নিউক্লিয়াস",
  2: "৩টি",
};

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