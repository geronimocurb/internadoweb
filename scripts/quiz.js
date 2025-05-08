const preguntas = [
  {
    pregunta: "¿Cuál es la causa más frecuente de abdomen agudo en niños?",
    opciones: ["Apendicitis aguda", "Intususcepción", "Gastroenteritis", "Peritonitis"],
    respuesta: 0,
    explicacion: "La apendicitis aguda es la causa quirúrgica más común de abdomen agudo en la infancia."
  },
  {
    pregunta: "¿Qué hallazgo en un niño politraumatizado indica compromiso neurológico severo?",
    opciones: ["Llanto constante", "Glasgow 6", "Vómitos", "Palidez"],
    respuesta: 1,
    explicacion: "Un Glasgow de 6 indica un compromiso neurológico severo y requiere atención urgente."
  }
];

let preguntaActual = 0;
const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const feedbackElem = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  questionElem.textContent = pregunta.pregunta;
  optionsElem.innerHTML = "";
  feedbackElem.textContent = "";

  pregunta.opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => elegirRespuesta(i);
    optionsElem.appendChild(btn);
  });
}

function elegirRespuesta(indice) {
  const pregunta = preguntas[preguntaActual];
  const correcta = indice === pregunta.respuesta;
  feedbackElem.textContent = correcta
    ? "¡Correcto! " + pregunta.explicacion
    : "Incorrecto. " + pregunta.explicacion;
  (correcta ? correctSound : wrongSound).play();
}

nextBtn.onclick = () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    questionElem.textContent = "¡Fin del quiz!";
    optionsElem.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

mostrarPregunta();
