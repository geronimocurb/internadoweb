let currentQuestionIndex = 0;
const questions = [
    // Evaluación Inicial
    {
        question: "¿Qué es el triángulo de evaluación pediátrica?",
        answers: [
            "Evaluación de la vía aérea",
            "Evaluación del dolor",
            "Evaluación del desarrollo",
            "Evaluación neurológica"
        ],
        correctAnswer: 0,
        explanation: "El Triángulo de Evaluación Pediátrica es un enfoque rápido para evaluar a los niños en urgencias, que incluye la observación de la apariencia, el trabajo respiratorio y la circulación."
    },
    {
        question: "En la evaluación inicial de urgencias pediátricas, ¿qué se observa primero?",
        answers: [
            "La piel del niño",
            "La vía aérea y respiración",
            "La saturación de oxígeno",
            "La temperatura"
        ],
        correctAnswer: 1,
        explanation: "Se debe observar primero la vía aérea y la respiración del niño, ya que estas son las funciones vitales más urgentes a evaluar en situaciones críticas."
    },
    // Añadir aquí las otras 48 preguntas...
];

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersList = document.getElementById('answers');
    answersList.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => selectAnswer(index));
        answersList.appendChild(li);
    });
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    const answersList = document.getElementById('answers').children;
    for (let i = 0; i < answersList.length; i++) {
        answersList[i].classList.remove('selected');
    }
    answersList[index].classList.add('selected');
    const correct = index === question.correctAnswer;
    const resultMessage = correct ? "¡Correcto!" : "Incorrecto";
    const explanationMessage = question.explanation;
    const sound = new Audio(correct ? 'correcto.mp3' : 'incorrecto.mp3');
    sound.play();
    document.getElementById('result').textContent = `${resultMessage} ${explanationMessage}`;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('next').classList.remove('hidden');
}

document.getElementById('next').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').classList.add('hidden');
        document.getElementById('next').classList.add('hidden');
    } else {
        alert('¡Has terminado el quiz!');
    }
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

loadQuestion();
