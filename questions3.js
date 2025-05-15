const questions = [
  {
    question: "Un lactante de 1 año presenta diarrea acuosa abundante y vómitos. Está irritable, con ojos hundidos, mucosas secas y tiempo de llenado capilar de 3 segundos. ¿Cuál es el plan de rehidratación inicial recomendado?",
    options: [
      "SRO 10 mL/kg por cada deposición",
      "SRO 50 mL/kg en 4 horas",
      "SRO 100 mL/kg en 4 horas",
      "Rehidratación IV con solución 90: 100 mL/kg en 4 horas"
    ],
    answer: 2,
    explanation: "La deshidratación moderada se trata con SRO 100 mL/kg en 4 horas si no hay contraindicaciones para la vía oral."
  },
  {
    question: "Lactante de 8 meses con diarrea con moco y sangre, fiebre, decaimiento y aspecto tóxico. ¿Qué conducta es correcta?",
    options: [
      "Indicar probióticos y observación domiciliaria",
      "Solicitar coprocultivo y comenzar antibiótico empírico",
      "Iniciar metronidazol y suspender lactancia",
      "Administrar sólo solución de rehidratación oral"
    ],
    answer: 1,
    explanation: "Diarrea disentérica con aspecto tóxico amerita iniciar antibiótico empírico y solicitar coprocultivo. En nuestro medio, se cubre principalmente Shigella."
  },
  {
    question: "Niño de 5 años, con diarrea aguda y vómitos. Permanece alerta, acepta líquidos por boca y tiene buen estado general. ¿Qué manejo es el más adecuado?",
    options: [
      "Hospitalización para hidratación IV",
      "Ayuno completo y reintroducción progresiva",
      "Hidratación con SRO y continuar alimentación habitual",
      "Administrar antiemético y suspender alimentos sólidos"
    ],
    answer: 2,
    explanation: "En gastroenteritis sin deshidratación, se indica hidratación oral con SRO y mantener la alimentación habitual para favorecer la recuperación."
  },
  {
    question: "Niño de 3 años con fiebre alta, taquipnea, tiraje intercostal y crépitos basales derechos. SatO₂: 93%. ¿Cuál es el tratamiento empírico recomendado?",
    options: [
      "Azitromicina oral",
      "Amoxicilina oral 80-100 mg/kg/día",
      "Amoxicilina-clavulánico IV",
      "Ceftriaxona IM 50 mg/kg/día"
    ],
    answer: 1,
    explanation: "La neumonía adquirida en la comunidad en niños pequeños se trata con amoxicilina oral en altas dosis. La cobertura de neumococo es prioritaria."
  },
  {
    question: "Un niño de 7 años tratado por neumonía presenta persistencia de fiebre, dolor torácico y derrame pleural en Rx. ¿Cuál es la complicación más probable?",
    options: [
      "Bronquitis obliterante",
      "Empiema",
      "Asma posinfecciosa",
      "Fibrosis pulmonar"
    ],
    answer: 1,
    explanation: "El empiema es una complicación común de la neumonía bacteriana, especialmente por neumococo. Debe sospecharse ante fiebre persistente y derrame."
  },
  {
    question: "Lactante de 10 meses con bronquiolitis. Presenta tiraje intercostal, SatO₂: 89%, alimentación oral disminuida. ¿Qué indicación es correcta?",
    options: [
      "Alta con salbutamol domiciliario",
      "Inicio de antibióticos por sospecha bacteriana",
      "Internación para oxigenoterapia y apoyo alimentario",
      "Nebulización con budesonida"
    ],
    answer: 2,
    explanation: "En bronquiolitis moderada-severa con SatO₂ < 90% y mala alimentación, se indica internación para oxígeno y soporte. No hay evidencia para corticoides ni antibióticos."
  },
  {
    question: "Lactante de 6 meses con primer episodio de sibilancias y rinorrea. ¿Qué hallazgo clínico orienta más a bronquiolitis y no a asma?",
    options: [
      "Antecedente familiar de atopia",
      "Tos seca persistente",
      "Inicio posterior a un cuadro catarral",
      "Buena respuesta a salbutamol"
    ],
    answer: 2,
    explanation: "La bronquiolitis típicamente se inicia tras una infección viral con rinorrea. A diferencia del asma, no responde bien a broncodilatadores."
  },
  {
    question: "En un paciente con bronquiolitis leve, ¿cuál de las siguientes medidas es innecesaria según las guías clínicas?",
    options: [
      "Oxigenoterapia si SatO₂ < 92%",
      "Uso de salbutamol nebulizado de prueba",
      "Aspiración nasal con solución fisiológica",
      "Monitoreo clínico ambulatorio"
    ],
    answer: 1,
    explanation: "No se recomienda el uso rutinario de salbutamol en bronquiolitis. Solo puede considerarse una prueba terapéutica en algunos casos, pero no es estándar."
  },
  {
    question: "Lactante de 2 meses con diagnóstico de bronquiolitis en domicilio, presenta pausas de apnea y dificultad respiratoria progresiva. ¿Cuál es la principal preocupación?",
    options: [
      "Sobreinfección bacteriana",
      "Hipoxemia leve",
      "Insuficiencia respiratoria inminente",
      "Deshidratación leve"
    ],
    answer: 2,
    explanation: "Las pausas de apnea y dificultad respiratoria progresiva en lactantes con bronquiolitis indican riesgo de insuficiencia respiratoria y requieren evaluación urgente e internación."
  },
  {
    question: "Lactante con bronquiolitis que requiere internación y presenta dificultad respiratoria leve-moderada, sin indicación de ventilación. ¿Qué medida es apropiada?",
    options: [
      "Oxigenoterapia con cánula nasal",
      "Intubación orotraqueal urgente",
      "Corticoides sistémicos",
      "Broncodilatadores de rutina"
    ],
    answer: 0,
    explanation: "En bronquiolitis con dificultad respiratoria leve o moderada, la oxigenoterapia con cánula nasal es el soporte adecuado. La mayoría de los casos no requieren medicamentos."
  }
];
