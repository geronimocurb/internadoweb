let currentQuestionIndex = 0;
const questions = [
    {
        question: "¿Qué es el triángulo de evaluación pediátrica?",
        answers: [
            "Evaluación de la vía aérea",
            "Evaluación del dolor",
            "Evaluación del desarrollo",
            "Evaluación neurológica"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la prioridad inicial en el manejo del niño politraumatizado?",
        answers: [
            "Administración de líquidos",
            "Evaluación de la vía aérea",
            "Evaluación neurológica",
            "Radiografía de tórax"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué característica es típica de los exantemas febriles?",
        answers: [
            "Aparecen sin fiebre",
            "Se asocian a dolor muscular",
            "Aparecen en la cara y se extienden hacia el tronco",
            "Solo aparecen en niños mayores de 5 años"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es la causa más común de abdomen agudo en niños?",
        answers: [
            "Apendicitis",
            "Invaginación intestinal",
            "Gastroenteritis",
            "Úlcera péptica"
        ],
        correctAnswer: 0
    },
    {
        question: "En un niño con crisis asmática, ¿cuál es el tratamiento inicial?",
        answers: [
            "Antibióticos",
            "Broncodilatadores de acción corta",
            "Corticosteroides orales",
            "Hidratación intravenosa"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la principal complicación de una neumonía adquirida en la comunidad?",
        answers: [
            "Absceso pulmonar",
            "Neumotórax",
            "Embolia pulmonar",
            "Enfermedad obstructiva crónica"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es lo característico de la bronquiolitis en niños pequeños?",
        answers: [
            "Tos persistente sin fiebre",
            "Dificultad para respirar y sibilancias",
            "Dolor torácico severo",
            "Fiebre alta sin dificultad respiratoria"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la causa más frecuente de convulsiones febril en niños?",
        answers: [
            "Infección del tracto urinario",
            "Meningitis",
            "Fiebre",
            "Hipoglucemia"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el manejo inicial de un niño con meningitis?",
        answers: [
            "Antibióticos intravenosos",
            "Analgésicos orales",
            "Reposo y observación",
            "Antivirales"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la principal causa de fiebre sin foco en niños menores de 2 años?",
        answers: [
            "Infección del tracto urinario",
            "Gastroenteritis",
            "Meningitis",
            "Faringitis"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el principal tipo de lesión en casos de maltrato infantil?",
        answers: [
            "Quemaduras",
            "Fracturas óseas",
            "Lesiones abdominales",
            "Lesiones faciales"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la recomendación para la vigilancia del crecimiento y desarrollo en pediatría?",
        answers: [
            "Evaluar cada 6 meses en la infancia",
            "Realizar pruebas genéticas de rutina",
            "Promover el uso de suplementos vitamínicos",
            "Establecer metas de desarrollo y revisar anualmente"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el esquema recomendado de vacunación para niños menores de 2 años?",
        answers: [
            "Vacunación contra la poliomielitis y sarampión",
            "Vacunación contra el tétanos, sarampión y rubéola",
            "Vacunación contra rotavirus, neumococo y DTP",
            "Vacunación contra la tuberculosis y varicela"
        ],
        correctAnswer: 2
    },
    // Aquí siguen las demás preguntas, para un total de 50.
];

function checkAnswer(answerIndex) {
    const feedback = document.getElementById('feedback');
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "¡Respuesta Correcta!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Respuesta Incorrecta.";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const questionContainer = document.getElementById('question-container');
        const answersContainer = document.getElementById('answers-container');
        const feedback = document.getElementById('feedback');

        questionContainer.innerHTML = `<p>${questions[currentQuestionIndex].question}</p>`;
        answersContainer.innerHTML = questions[currentQuestionIndex].answers.map((answer, index) => 
            `<button class="answer-btn" onclick="checkAnswer(${index})">${answer}</button>`
        ).join('');
        feedback.textContent = '';
    } else {
        alert("¡Quiz completado!");
    }
}

// Función para cambiar entre modo claro y oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
