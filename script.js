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
// script.js (preguntas 1 a 10)

const questions = [
    // 1. Evaluación inicial en urgencias
    {
        question: "¿Cuál es el objetivo principal del Triángulo de Evaluación Pediátrica (TEP)?",
        answers: [
            "Diagnosticar enfermedades específicas",
            "Decidir la necesidad de antibióticos",
            "Evaluar rápidamente la condición clínica del niño",
            "Determinar la edad del paciente"
        ],
        correctAnswer: 2,
        explanation: "El TEP permite una evaluación rápida y visual del estado del niño para categorizar la urgencia."
    },
    {
        question: "¿Qué componentes forman el Triángulo de Evaluación Pediátrica?",
        answers: [
            "Apariencia, respiración, circulación",
            "Conciencia, respiración, temperatura",
            "Color de piel, frecuencia cardíaca, presión arterial",
            "Actividad, alimentación, sueño"
        ],
        correctAnswer: 0,
        explanation: "El TEP evalúa apariencia, trabajo respiratorio y circulación cutánea."
    },

    // 2. Niño politraumatizado
    {
        question: "¿Cuál es la causa más frecuente de politrauma en niños?",
        answers: [
            "Heridas por arma blanca",
            "Accidentes de tránsito",
            "Caídas de altura",
            "Accidentes deportivos"
        ],
        correctAnswer: 1,
        explanation: "Los accidentes de tránsito son la principal causa de trauma grave en pediatría."
    },
    {
        question: "¿Cuál es la prioridad en el manejo inicial del niño politraumatizado?",
        answers: [
            "Revisión secundaria",
            "Control de temperatura",
            "Evaluación neurológica",
            "Vía aérea con control cervical"
        ],
        correctAnswer: 3,
        explanation: "El manejo del ABC incluye primero asegurar la vía aérea con estabilización cervical."
    },

    // 3. Exantemas febriles
    {
        question: "¿Cuál es una característica típica del exantema por sarampión?",
        answers: [
            "Inicio en tronco, confluente desde el comienzo",
            "Rash pruriginoso vesicular",
            "Inicia en cara y progresa caudalmente",
            "Respeta palmas y plantas"
        ],
        correctAnswer: 2,
        explanation: "El exantema del sarampión comienza en la cara y progresa hacia abajo."
    },
    {
        question: "¿Cuál de las siguientes vacunas previene un exantema febril?",
        answers: [
            "DTP",
            "BCG",
            "Triple viral",
            "Neumocócica conjugada"
        ],
        correctAnswer: 2,
        explanation: "La vacuna triple viral previene sarampión, rubéola y parotiditis."
    },

    // 4. Abdomen agudo / invaginación
    {
        question: "¿Cuál es el síntoma más frecuente de la invaginación intestinal en niños?",
        answers: [
            "Hematoquecia",
            "Dolor abdominal paroxístico",
            "Vómitos biliosos persistentes",
            "Diarrea crónica"
        ],
        correctAnswer: 1,
        explanation: "El dolor abdominal súbito, intermitente y paroxístico es típico de invaginación."
    },
    {
        question: "¿Qué hallazgo ecográfico es característico de invaginación intestinal?",
        answers: [
            "Signo de la diana o donut",
            "Imagen en panal",
            "Gas libre intraabdominal",
            "Masa hiperecogénica fija"
        ],
        correctAnswer: 0,
        explanation: "El signo de la diana o donut en ecografía es característico de invaginación."
    }
];
// script.js (preguntas 1 a 30 acumuladas)

const questions = [
    // 1. Evaluación inicial en urgencias
    {
        question: "¿Cuál es el objetivo principal del Triángulo de Evaluación Pediátrica (TEP)?",
        answers: [
            "Diagnosticar enfermedades específicas",
            "Decidir la necesidad de antibióticos",
            "Evaluar rápidamente la condición clínica del niño",
            "Determinar la edad del paciente"
        ],
        correctAnswer: 2,
        explanation: "El TEP permite una evaluación rápida y visual del estado del niño para categorizar la urgencia."
    },
    {
        question: "¿Qué componentes forman el Triángulo de Evaluación Pediátrica?",
        answers: [
            "Apariencia, respiración, circulación",
            "Conciencia, respiración, temperatura",
            "Color de piel, frecuencia cardíaca, presión arterial",
            "Actividad, alimentación, sueño"
        ],
        correctAnswer: 0,
        explanation: "El TEP evalúa apariencia, trabajo respiratorio y circulación cutánea."
    },

    // 2. Niño politraumatizado
    {
        question: "¿Cuál es la causa más frecuente de politrauma en niños?",
        answers: [
            "Heridas por arma blanca",
            "Accidentes de tránsito",
            "Caídas de altura",
            "Accidentes deportivos"
        ],
        correctAnswer: 1,
        explanation: "Los accidentes de tránsito son la principal causa de trauma grave en pediatría."
    },
    {
        question: "¿Cuál es la prioridad en el manejo inicial del niño politraumatizado?",
        answers: [
            "Revisión secundaria",
            "Control de temperatura",
            "Evaluación neurológica",
            "Vía aérea con control cervical"
        ],
        correctAnswer: 3,
        explanation: "El manejo del ABC incluye primero asegurar la vía aérea con estabilización cervical."
    },

    // 3. Exantemas febriles
    {
        question: "¿Cuál es una característica típica del exantema por sarampión?",
        answers: [
            "Inicio en tronco, confluente desde el comienzo",
            "Rash pruriginoso vesicular",
            "Inicia en cara y progresa caudalmente",
            "Respeta palmas y plantas"
        ],
        correctAnswer: 2,
        explanation: "El exantema del sarampión comienza en la cara y progresa hacia abajo."
    },
    {
        question: "¿Cuál de las siguientes vacunas previene un exantema febril?",
        answers: [
            "DTP",
            "BCG",
            "Triple viral",
            "Neumocócica conjugada"
        ],
        correctAnswer: 2,
        explanation: "La vacuna triple viral previene sarampión, rubéola y parotiditis."
    },

    // 4. Abdomen agudo / invaginación
    {
        question: "¿Cuál es el síntoma más frecuente de la invaginación intestinal en niños?",
        answers: [
            "Hematoquecia",
            "Dolor abdominal paroxístico",
            "Vómitos biliosos persistentes",
            "Diarrea crónica"
        ],
        correctAnswer: 1,
        explanation: "El dolor abdominal súbito, intermitente y paroxístico es típico de invaginación."
    },
    {
        question: "¿Qué hallazgo ecográfico es característico de invaginación intestinal?",
        answers: [
            "Signo de la diana o donut",
            "Imagen en panal",
            "Gas libre intraabdominal",
            "Masa hiperecogénica fija"
        ],
        correctAnswer: 0,
        explanation: "El signo de la diana o donut en ecografía es característico de invaginación."
    },

    // 5. Asma / Crisis asmática
    {
        question: "¿Cuál es el tratamiento de primera línea para una crisis asmática moderada en pediatría?",
        answers: [
            "Antibióticos de amplio espectro",
            "Salbutamol inhalado",
            "Corticoides endovenosos",
            "Adrenalina intramuscular"
        ],
        correctAnswer: 1,
        explanation: "El salbutamol inhalado es el broncodilatador de elección en crisis asmática leve a moderada."
    },
    {
        question: "¿Qué hallazgo clínico indica una crisis asmática grave?",
        answers: [
            "Uso de músculos accesorios y silencio auscultatorio",
            "Sibilancias dispersas y taquipnea leve",
            "Aumento del apetito",
            "Fiebre moderada"
        ],
        correctAnswer: 0,
        explanation: "El uso de músculos accesorios y el silencio auscultatorio indican una obstrucción severa de las vías aéreas."
    },

    // 6. Infecciones de piel y tejidos blandos
    {
        question: "¿Cuál es el agente etiológico más frecuente en celulitis pediátrica?",
        answers: [
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Haemophilus influenzae",
            "Pseudomonas aeruginosa"
        ],
        correctAnswer: 1,
        explanation: "Staphylococcus aureus es la causa más común de celulitis en niños."
    },
    {
        question: "¿Qué indica la presencia de fluctuación en una lesión cutánea infecciosa?",
        answers: [
            "Eritema",
            "Necrosis",
            "Presencia de pus acumulado",
            "Infección viral"
        ],
        correctAnswer: 2,
        explanation: "La fluctuación sugiere un absceso, es decir, acumulación de pus bajo la piel."
    },

    // 7. Gastroenteritis aguda
    {
        question: "¿Cuál es la principal causa de diarrea aguda en niños menores de 5 años?",
        answers: [
            "Salmonella",
            "Rotavirus",
            "Giardia lamblia",
            "Escherichia coli"
        ],
        correctAnswer: 1,
        explanation: "Rotavirus es la causa viral más frecuente de gastroenteritis en lactantes y preescolares."
    },
    {
        question: "¿Cuál es el tratamiento inicial recomendado para la deshidratación leve por diarrea aguda?",
        answers: [
            "Reposo absoluto y ayuno",
            "Rehidratación oral con sales de rehidratación oral",
            "Antibióticos empíricos",
            "Suero intravenoso de inmediato"
        ],
        correctAnswer: 1,
        explanation: "La rehidratación oral con SRO es el pilar del tratamiento en deshidratación leve a moderada."
    },

    // 8. Neumonía adquirida en la comunidad
    {
        question: "¿Cuál es el signo clínico más sensible para neumonía en niños menores de 5 años?",
        answers: [
            "Tos persistente",
            "Estertores crepitantes",
            "Fiebre alta",
            "Taquipnea"
        ],
        correctAnswer: 3,
        explanation: "La taquipnea es el signo clínico más sensible y útil para el diagnóstico de neumonía en menores de 5 años."
    },
    {
        question: "¿Qué complicación grave puede presentar una neumonía bacteriana mal tratada?",
        answers: [
            "Faringitis",
            "Otitis",
            "Derrame pleural o empiema",
            "Candidiasis"
        ],
        correctAnswer: 2,
        explanation: "El empiema es una acumulación de pus en el espacio pleural y una complicación de neumonía bacteriana."
    }
];
// script.js (preguntas 1 a 50 acumuladas)

const questions = [
    // 1 a 30 (omitidas aquí por brevedad; ya están cargadas en tu archivo)

    // 9. Bronquiolitis
    {
        question: "¿Cuál es el agente etiológico más frecuente de bronquiolitis?",
        answers: [
            "Virus de la influenza",
            "Adenovirus",
            "Virus sincicial respiratorio (VSR)",
            "Parainfluenza"
        ],
        correctAnswer: 2,
        explanation: "El VSR es el virus más comúnmente implicado en bronquiolitis en lactantes."
    },
    {
        question: "¿Cuál es el tratamiento de elección para la bronquiolitis leve?",
        answers: [
            "Broncodilatadores",
            "Corticoides inhalados",
            "Oxigenoterapia y soporte",
            "Antibióticos"
        ],
        correctAnswer: 2,
        explanation: "La bronquiolitis se maneja con medidas de soporte, principalmente oxigenoterapia si hay hipoxia."
    },

    // 10. Convulsiones / Crisis febril
    {
        question: "¿Cuál es el rango de edad típico de las convulsiones febriles?",
        answers: [
            "0 a 6 meses",
            "6 meses a 5 años",
            "5 a 10 años",
            "Recién nacidos"
        ],
        correctAnswer: 1,
        explanation: "Las convulsiones febriles ocurren usualmente entre los 6 meses y 5 años de edad."
    },
    {
        question: "¿Qué característica define una convulsión febril simple?",
        answers: [
            "Duración mayor a 15 minutos",
            "Focalización neurológica",
            "Una sola crisis en 24 horas",
            "Presencia de vómitos"
        ],
        correctAnswer: 2,
        explanation: "La convulsión febril simple es generalizada, dura menos de 15 minutos y ocurre una sola vez en 24 horas."
    },

    // 11. Meningoencefalitis
    {
        question: "¿Cuál es un signo clínico clásico de meningitis en lactantes?",
        answers: [
            "Kernig positivo",
            "Rigidez de nuca",
            "Fontanela abombada",
            "Fotofobia"
        ],
        correctAnswer: 2,
        explanation: "En lactantes, la fontanela abombada es un signo importante de hipertensión endocraneana."
    },
    {
        question: "¿Qué estudio se debe realizar ante sospecha de meningoencefalitis?",
        answers: [
            "Ecografía transfontanelar",
            "Punción lumbar",
            "Electroencefalograma",
            "Radiografía de cráneo"
        ],
        correctAnswer: 1,
        explanation: "La punción lumbar permite obtener LCR para confirmar el diagnóstico."
    },

    // 12. Fiebre sin foco / ITU
    {
        question: "¿Qué germen es la causa más frecuente de ITU en pediatría?",
        answers: [
            "Enterobacter cloacae",
            "Staphylococcus saprophyticus",
            "Escherichia coli",
            "Proteus mirabilis"
        ],
        correctAnswer: 2,
        explanation: "Escherichia coli es el principal patógeno en infecciones urinarias pediátricas."
    },
    {
        question: "¿Qué método diagnóstico es más adecuado para confirmar ITU en menores de 2 años?",
        answers: [
            "Tira reactiva de orina",
            "Cultivo de orina por sondaje vesical",
            "Urocultivo por bolsa colectora",
            "Ecografía renal"
        ],
        correctAnswer: 1,
        explanation: "El sondaje permite obtener una muestra estéril para cultivo confiable."
    },

    // 13. Lesiones e injurias
    {
        question: "¿Cuál es el principal riesgo de una quemadura extensa en un niño?",
        answers: [
            "Dolor severo",
            "Deshidratación y shock",
            "Fiebre",
            "Hiperglucemia"
        ],
        correctAnswer: 1,
        explanation: "La pérdida de líquidos puede llevar a hipovolemia y shock."
    },
    {
        question: "¿Qué se debe hacer ante una mordedura de perro que rompe piel en un niño?",
        answers: [
            "Aplicar alcohol y vendar",
            "Administrar antibióticos y considerar vacuna antitetánica",
            "Aplicar hielo",
            "Dejar sin tratamiento"
        ],
        correctAnswer: 1,
        explanation: "Las mordeduras pueden infectarse fácilmente y requieren profilaxis antibiótica."
    },

    // 14. Maltrato y abuso
    {
        question: "¿Cuál es una señal de posible abuso físico en un niño?",
        answers: [
            "Moretones en rodillas y codos",
            "Relato coherente con lesiones",
            "Lesiones en diferentes etapas de evolución",
            "Dolor abdominal leve"
        ],
        correctAnswer: 2,
        explanation: "Lesiones en distintas etapas sugieren episodios repetidos de agresión."
    },
    {
        question: "¿Qué se debe hacer ante sospecha de abuso sexual en pediatría?",
        answers: [
            "Esperar confirmación del niño antes de actuar",
            "Informar al equipo de salud y activar el protocolo",
            "Llamar a los padres y discutirlo",
            "Realizar interrogatorio exhaustivo al niño"
        ],
        correctAnswer: 1,
        explanation: "Ante sospecha, se debe informar y activar los protocolos correspondientes de protección."
    },

    // 15. Crecimiento y desarrollo / inmunizaciones
    {
        question: "¿Qué parámetro se usa comúnmente para vigilar el crecimiento?",
        answers: [
            "Peso solo",
            "Estatura solamente",
            "Perímetro torácico",
            "Peso, talla y perímetro cefálico"
        ],
        correctAnswer: 3,
        explanation: "Se evalúan peso, talla y perímetro cefálico en relación con la edad."
    },
    {
        question: "¿A qué edad se administra la primera dosis de vacuna triple viral en Uruguay?",
        answers: [
            "2 meses",
            "6 meses",
            "12 meses",
            "18 meses"
        ],
        correctAnswer: 2,
        explanation: "La primera dosis de triple viral (SRP) se administra al año de vida."