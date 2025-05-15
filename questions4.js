const questions = [
  {
    question: "Lactante de 15 meses con fiebre de 39,5°C que comienza con una convulsión tónico-clónica generalizada de menos de 5 minutos. No tiene antecedentes ni signos meníngeos. ¿Cuál es la conducta más adecuada?",
    options: [
      "Solicitar TC de cráneo urgente",
      "Iniciar antibióticos empíricos",
      "Observar, controlar fiebre y explicar a los padres",
      "Iniciar fenobarbital profiláctico"
    ],
    answer: 2,
    explanation: "Se trata de una crisis febril simple. No requiere estudios ni medicación anticonvulsivante. La conducta es observación, educación y control térmico."
  },
  {
    question: "Niño de 4 años con fiebre, cefalea intensa, vómitos y rigidez de nuca. Presenta fotofobia y signos meníngeos positivos. ¿Qué estudio es prioritario antes de iniciar antibióticos?",
    options: [
      "Punción lumbar",
      "Tomografía de cráneo",
      "Hemocultivo",
      "Electroencefalograma"
    ],
    answer: 0,
    explanation: "En un paciente sin signos de hipertensión endocraneana, la punción lumbar es prioritaria para confirmar diagnóstico y orientar tratamiento."
  },
  {
    question: "Lactante de 3 meses con fiebre, irritabilidad, rechazo alimentario y fontanela abombada. ¿Qué conducta es prioritaria?",
    options: [
      "Punción lumbar y antibióticos empíricos",
      "Administrar antitérmicos y observar",
      "Indicar paracetamol y reevaluar en 6 horas",
      "Tomografía cerebral antes de estudiar"
    ],
    answer: 0,
    explanation: "Los signos clínicos orientan a meningoencefalitis. En lactantes se debe realizar PL sin demora e iniciar tratamiento antibiótico empírico inmediato."
  },
  {
    question: "Niño de 6 años con fiebre y cefalea, evoluciona con convulsiones focales y somnolencia. ¿Qué complicación neurológica debe sospecharse?",
    options: [
      "Epilepsia benigna",
      "Meningitis bacteriana",
      "Absceso cerebral",
      "Crisis febril simple"
    ],
    answer: 2,
    explanation: "Las convulsiones focales con deterioro del sensorio en el contexto febril deben hacer sospechar una complicación como absceso cerebral."
  },
  {
    question: "Lactante de 2 meses, sin foco clínico aparente, con fiebre de 38,5°C, buen estado general, examen físico normal y sin factores de riesgo. ¿Qué estudio debe realizarse siempre?",
    options: [
      "Radiografía de tórax",
      "Urocultivo por cateterismo",
      "Punción lumbar",
      "Ecografía abdominal"
    ],
    answer: 1,
    explanation: "La infección urinaria es la causa más frecuente de FSF. El urocultivo por cateterismo está indicado en todo menor de 3 meses con fiebre."
  },
  {
    question: "Niña de 5 años con fiebre de 39°C, sin foco clínico evidente. Está en buen estado general, sin comorbilidades, correctamente vacunada. ¿Qué conducta es adecuada?",
    options: [
      "Iniciar antibióticos empíricos",
      "Hospitalización y estudios completos",
      "Control ambulatorio con medidas generales",
      "Solicitar hemocultivo, urocultivo y PL"
    ],
    answer: 2,
    explanation: "En niños mayores de 3 años con FSF y buen estado general, se puede optar por control ambulatorio y observación si no hay signos de alarma."
  },
  {
    question: "Niño de 2 años con fiebre persistente, vómitos, disuria y malestar general. Se sospecha ITU alta. ¿Qué examen es más útil para confirmar el diagnóstico?",
    options: [
      "Tira reactiva de orina",
      "Examen de orina completo",
      "Urocultivo cuantitativo",
      "Ecografía renal"
    ],
    answer: 2,
    explanation: "El diagnóstico definitivo de ITU se basa en el urocultivo con recuento significativo de colonias bacterianas."
  },
  {
    question: "Niña de 7 años con fiebre alta, vómitos y cefalea intensa. Presenta rigidez de nuca y signos de irritación meníngea. ¿Qué antibióticos empíricos están indicados inicialmente?",
    options: [
      "Amoxicilina-clavulánico + azitromicina",
      "Ceftriaxona + vancomicina",
      "Ampicilina + gentamicina",
      "Meropenem + aciclovir"
    ],
    answer: 1,
    explanation: "En niños mayores, la terapia empírica para meningitis incluye ceftriaxona + vancomicina, cubriendo S. pneumoniae resistente y N. meningitidis."
  },
  {
    question: "Lactante de 20 días con fiebre, hipotonía, rechazo alimentario y fontanela normotensa. ¿Cuál es el manejo más adecuado?",
    options: [
      "Antibióticos y antipiréticos orales",
      "Alta con control a las 24 horas",
      "Hospitalización con estudio completo de sepsis",
      "Solo SRO y control térmico"
    ],
    answer: 2,
    explanation: "Todo neonato con fiebre debe ser ingresado para estudio completo de sepsis e iniciar antibióticos intravenosos mientras se esperan cultivos."
  },
  {
    question: "Niño de 3 años con fiebre de 39,2°C, sin foco clínico evidente. Presenta leucocitosis >20.000/mm³ y PCR elevada. ¿Cuál es la siguiente conducta más adecuada?",
    options: [
      "Administrar paracetamol y alta",
      "Realizar urocultivo y hemocultivo",
      "Iniciar antibióticos en domicilio",
      "Realizar punción lumbar y hospitalizar"
    ],
    answer: 1,
    explanation: "Leucocitosis importante con PCR elevada y FSF obliga a descartar bacteriemia oculta o ITU, por lo que deben tomarse cultivos antes de decidir tratamiento."
  }
];
