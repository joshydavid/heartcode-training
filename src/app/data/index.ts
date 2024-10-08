export interface iDrugAbuseAwarenessQuiz {
  id: number;
  questionTitle: string;
  options: string[];
  correctAnswer: string;
  answerExplanation: string;
}

const drugAbuseAwarenessQuiz: iDrugAbuseAwarenessQuiz[] = [
  {
    id: 1,
    questionTitle:
      "What are the most common signs of drug abuse in an individual?",
    options: [
      "Unexplained weight loss",
      "Changes in behavior or mood",
      "Financial problems",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    answerExplanation:
      "Drug abuse often leads to various symptoms, including unexplained weight loss, behavioral changes, mood swings, and financial difficulties.",
  },
  {
    id: 2,
    questionTitle:
      "Which of the following substances is classified as a stimulant?",
    options: ["Heroin", "Cocaine", "Alcohol", "LSD"],
    correctAnswer: "Cocaine",
    answerExplanation:
      "Cocaine is a powerful stimulant that increases alertness, energy, and heart rate. Heroin is a depressant, alcohol is a depressant, and LSD is a hallucinogen.",
  },
  //   {
  //     id: 3,
  //     questionTitle:
  //       "What is the primary reason people become addicted to drugs?",
  //     options: [
  //       "Lack of willpower",
  //       "Changes in brain chemistry caused by the drug",
  //       "Poor parenting",
  //       "Peer pressure alone",
  //     ],
  //     correctAnswer: "Changes in brain chemistry caused by the drug",
  //     answerExplanation:
  //       "Addiction is primarily a result of the changes in brain chemistry caused by repeated drug use, which can lead to physical and psychological dependence.",
  //   },
  //   {
  //     id: 4,
  //     questionTitle:
  //       "Which age group is at the highest risk of experimenting with drugs?",
  //     options: [
  //       "Children under 12",
  //       "Teenagers (13-19)",
  //       "Adults over 40",
  //       "Elderly (65+)",
  //     ],
  //     correctAnswer: "Teenagers (13-19)",
  //     answerExplanation:
  //       "Teenagers are typically at the highest risk of experimenting with drugs due to factors such as peer pressure, curiosity, and the developmental stage of the brain.",
  //   },
  //   {
  //     id: 5,
  //     questionTitle:
  //       "What is the best way to help someone struggling with drug abuse?",
  //     options: [
  //       "Confront them aggressively",
  //       "Encourage them to seek professional help",
  //       "Ignore the problem and hope it goes away",
  //       "Handle the situation without involving others",
  //     ],
  //     correctAnswer: "Encourage them to seek professional help",
  //     answerExplanation:
  //       "The most effective way to help someone with a drug problem is to guide them toward professional treatment options, like counseling or rehabilitation programs.",
  //   },
];

export { drugAbuseAwarenessQuiz };
