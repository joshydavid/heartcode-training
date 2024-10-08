import { drugAbuseAwarenessQuiz } from "@/app/data/";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatedModalDemo } from "./AnimatedModal";
import { ModalTrigger } from "./ui/animated-modal";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const currentQuestion = drugAbuseAwarenessQuiz[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? "" : answer));
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < drugAbuseAwarenessQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You've completed the quiz!");
    }
  };

  return (
    <div className="flex flex-col gap-4 pl-8 pt-12">
      <h3 className="text-3xl font-semibold text-white">
        {currentQuestionIndex + 1}. {currentQuestion.questionTitle}
      </h3>

      <div>
        {currentQuestion.options.map((option) => (
          <div
            key={option}
            className={cn(
              "text-md mb-4 cursor-pointer rounded-lg bg-white p-4 text-black",
              {
                "bg-black text-white": selectedAnswer === option,
              },
            )}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div>
        {!showAnswer && (
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
            >
              Submit
            </button>
            {/* <AnimatedModalDemo>
              <ModalTrigger
                className="group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black"
                // onClick={handleSubmit}
              >
                <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                  Submit
                </span>
                <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0">
                  🔥
                </div>
              </ModalTrigger>
            </AnimatedModalDemo> */}
          </div>
        )}
      </div>

      {showAnswer && (
        <div className="">
          {currentQuestion.correctAnswer === selectedAnswer
            ? "Congratulations! You got it right"
            : "Unfortunately, you got it wrong this time."}
          <p>
            Correct Answer: <strong>{currentQuestion.correctAnswer}</strong>
          </p>
          <p>{currentQuestion.answerExplanation}</p>
          <button
            onClick={handleNext}
            className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
