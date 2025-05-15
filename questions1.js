const questions = [
  {
    question: "Un lactante de 8 meses llega a la emergencia con fiebre de 39,5°C, irritabilidad y llanto débil. El triángulo de evaluación pediátrica (TEP) muestra aspecto general anormal, trabajo respiratorio aumentado y circulación de la piel con moteado. ¿Cuál es la conducta inmediata más adecuada?",
    options: [
      "Administrar paracetamol y reevaluar en 30 minutos",
      "Tomar signos vitales y realizar una historia clínica completa",
      "Iniciar evaluación secundaria antes de actuar",
      "Activar código de emergencia y comenzar ABC primario"
    ],
    answer: 3,
    explanation: "El TEP indica compromiso en las tres áreas (apariencia, respiración y circulación), lo que clasifica al paciente como en estado crítico. Se debe activar el equipo de emergencia e iniciar ABC inmediatamente."
  },
  {
    question: "Un niño de 5 años es atropellado. Está consciente, con sangrado nasal leve y una fractura evidente de fémur. Al aplicar el TEP, se encuentra pálido, taquicárdico y con tiempo de llenado capilar prolongado. ¿Cuál es el diagnóstico más probable?",
    options: [
      "Shock hipovolémico",
      "Shock distributivo",
      "Shock cardiogénico",
      "Hipoxia por TCE"
    ],
    answer: 0,
    explanation: "La taquicardia y el llenado capilar prolongado en un politrauma sugieren hipovolemia, especialmente con una fractura de fémur, que puede provocar sangrado significativo."
  },
  {
    question: "Durante una evaluación en sala de urgencias, un niño de 4 años presenta somnolencia, respuesta al dolor, y signos de dificultad respiratoria severa. ¿Cuál es la prioridad en su manejo inicial?",
    options: [
      "Administrar solución salina al 0,9%",
      "Realizar punción lumbar",
      "Asegurar vía aérea y administrar oxígeno",
      "Esperar a que despierte espontáneamente"
    ],
    answer: 2,
    explanation: "La somnolencia con dificultad respiratoria indica una amenaza a la vida. La prioridad es asegurar la vía aérea y administrar oxígeno antes de continuar con otros estudios."
  },
  {
    question: "Niño de 6 años con politraumatismo cerrado por caída de altura. Presenta TA baja, taquicardia y distensión abdominal. ¿Qué diagnóstico debe considerarse prioritariamente?",
    options: [
      "Hemorragia intracraneana",
      "Fractura de pelvis",
      "Hemoperitoneo",
      "Taponamiento cardíaco"
    ],
    answer: 2,
    explanation: "La distensión abdominal con signos de shock sugiere una hemorragia intraabdominal, como un hemoperitoneo, común tras traumatismo abdominal cerrado."
  },
  {
    question: "Un niño de 10 años ingresa por accidente en moto sin casco. Está inconsciente, con glasgow 6, pupilas anisocóricas. ¿Cuál es la principal prioridad en este caso?",
    options: [
      "Tomografía urgente",
      "Administrar manitol",
      "Intubación orotraqueal y soporte ABC",
      "Evaluación neurológica detallada"
    ],
    answer: 2,
    explanation: "Ante un TCE grave con bajo Glasgow y anisocoria, se debe proteger la vía aérea e iniciar manejo del ABC antes de estudios por imágenes."
  },
  {
    question: "Un niño de 7 años consulta por fiebre de 3 días, malestar general, y un exantema que comenzó en la cara y se extendió al tronco. Presenta adenopatías retroauriculares. ¿Cuál es el diagnóstico más probable?",
    options: [
      "Sarampión",
      "Rubeola",
      "Escarlatina",
      "Roseola"
    ],
    answer: 1,
    explanation: "La rubeola cursa con fiebre, exantema centrífugo y adenopatías retroauriculares. Es importante notificar por tratarse de una enfermedad de declaración obligatoria."
  },
  {
    question: "Lactante de 1 año con fiebre alta seguida de aparición súbita de exantema rosado en tronco y cuello. ¿Cuál es la causa más probable?",
    options: [
      "Enterovirus",
      "Virus del sarampión",
      "Roseola (HHV-6)",
      "Parvovirus B19"
    ],
    answer: 2,
    explanation: "La roseola se caracteriza por fiebre alta por 3 días que desaparece súbitamente y da lugar a un exantema súbito. Es típica de lactantes menores de 2 años."
  },
  {
    question: "Un niño de 6 años consulta por fiebre, dolor de garganta y exantema que al tacto se siente como papel de lija, con lengua aframbuesada. ¿Qué agente es el más probable?",
    options: [
      "Virus de Epstein-Barr",
      "Estreptococo beta-hemolítico del grupo A",
      "Coxsackie A16",
      "Staphylococcus aureus"
    ],
    answer: 1,
    explanation: "La escarlatina por Streptococcus pyogenes presenta fiebre, faringoamigdalitis, exantema en papel de lija y lengua aframbuesada. Es una infección bacteriana común en edad escolar."
  },
  {
    question: "Niña de 3 años con fiebre moderada y aparición de lesiones vesiculosas en distintas fases evolutivas en torso, cuero cabelludo y extremidades. ¿Cuál es el diagnóstico más probable?",
    options: [
      "Herpangina",
      "Varicela",
      "Síndrome boca-mano-pie",
      "Rickettsiosis"
    ],
    answer: 1,
    explanation: "La varicela presenta vesículas en distintas fases, distribuidas centrífugamente, con posible afectación de mucosas. Es altamente contagiosa."
  },
  {
    question: "Adolescente con fiebre, exantema maculopapular en cara y extremidades, artralgias en manos, sin compromiso respiratorio. No tiene antecedentes vacunales completos. ¿Cuál sería una medida diagnóstica útil?",
    options: [
      "Serología para parvovirus B19",
      "Detección de IgM para rubéola",
      "Hemocultivo y PCR",
      "Detección rápida de estreptococo"
    ],
    answer: 1,
    explanation: "La rubéola en adolescentes no vacunados puede cursar con fiebre, exantema y artralgias. Confirmar con serología IgM específica."
  }
];
