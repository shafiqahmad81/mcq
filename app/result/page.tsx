import ResultCard from "../../components/result/ResultCard"

export default function ResultPage() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      
      <ResultCard
        totalQuestions={20}
        correct={15}
        wrong={5}
        score={75}
        timeTaken="11:42"
      />

    </section>
  )
}