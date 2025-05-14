import q1 from "./questions1.js";
import q2 from "./questions2.js";
import q3 from "./questions3.js";
import q4 from "./questions4.js";
import q5 from "./questions5.js";
import q6 from "./questions6.js";
import q7 from "./questions7.js";

const allQuestions = [
  ...q1,
  ...q2,
  ...q3,
  ...q4,
  ...q5,
  ...q6,
  ...q7
];

// Mezcla aleatoria de preguntas
for (let i = allQuestions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
}

export default allQuestions;
