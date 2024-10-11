import { drugAbuseAwarenessQuiz } from "@/app/data/";
import { cn } from "@/lib/utils";
import Correct from "@/public/correct.svg";
import Score from "@/public/score.svg";
import Slipped from "@/public/slipped.svg";
import Image from "next/image";
import { useState } from "react";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const currentQuestion = drugAbuseAwarenessQuiz[currentQuestionIndex];
  const [score, setCalculateScore] = useState<number>(0);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? "" : answer));
  };

  const handleSubmit = () => {
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setCalculateScore((prevScore) => prevScore + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < drugAbuseAwarenessQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 pl-8 pt-12">
      {!showAnswer && (
        <>
          {currentQuestionIndex < drugAbuseAwarenessQuiz.length && (
            <>
              <h3 className="text-3xl font-semibold text-white">
                {currentQuestionIndex + 1}. {currentQuestion?.questionTitle}
              </h3>

              <div>
                {currentQuestion?.options.map((option) => (
                  <div
                    key={option}
                    className={cn(
                      "text-md my-4 w-10/12 cursor-pointer rounded-lg bg-white p-4 text-gray-800 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110",
                      {
                        "bg-gray-800 text-white": selectedAnswer === option,
                      },
                    )}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {currentQuestionIndex < drugAbuseAwarenessQuiz.length && (
        <div>
          {!showAnswer && (
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={cn(
                  "mt-4 rounded bg-black px-4 py-2 text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110",
                  {
                    "cursor-not-allowed bg-gray-400 text-white":
                      !selectedAnswer,
                  },
                )}
              >
                Submit 🔥
              </button>
            </div>
          )}
        </div>
      )}

      {currentQuestionIndex === drugAbuseAwarenessQuiz.length && (
        <>
          <div className="flex items-center justify-center gap-12 rounded-2xl bg-white p-16 text-gray-700 shadow-2xl">
            <Image src={Score} alt="score" width={200} height={200} />
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">
                {score} / {drugAbuseAwarenessQuiz.length}
              </h2>
              <p className="text-sm font-semibold">Score</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setCurrentQuestionIndex(0)}
              className="mt-4 rounded bg-black px-4 py-2 text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Try Again 🔥
            </button>
          </div>
        </>
      )}

      {showAnswer && (
        <div className="flex flex-col gap-6 text-white">
          <div className="flex flex-col items-center text-3xl font-semibold">
            {" "}
            {currentQuestion.correctAnswer === selectedAnswer ? (
              <div className="flex items-center gap-4">
                <Image src={Correct} alt="correct" width={300} height={300} />
                Congratulations, you got it right! 😃
              </div>
            ) : (
              <div className="flex items-center pb-8">
                <Image src={Slipped} alt="slipped" width={200} height={200} />
                Unfortunately, you got it wrong this time 😪
              </div>
            )}
          </div>

          <p className="flex flex-col justify-start gap-2 rounded-2xl bg-white p-4 text-lg text-gray-700">
            <p>
              The answer is{" "}
              <span className="font-bold text-black">
                {currentQuestion.correctAnswer}
              </span>
            </p>
            <p className="italic">{currentQuestion.answerExplanation}</p>
          </p>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="mt-4 rounded bg-black px-4 py-2 text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Next 🔥
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
