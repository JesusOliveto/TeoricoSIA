// Question bank: Chapter 1 - Introduccion a la Inteligencia Artificial (RESUMEN.md lines 58-114)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[1] = {
  title: 'Introducción a la Inteligencia Artificial',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: 'Según la definición de la RAE citada en la cátedra, ¿qué es la inteligencia?', opts: ['La capacidad para entender o aprender, y para resolver problemas', 'La capacidad de percibir el entorno mediante sensores', 'La capacidad de actuar exclusivamente por instinto', 'La capacidad de almacenar grandes volúmenes de datos'], a: 0, exp: 'Definición RAE citada en la cátedra. Ver §1.1.' },
        { q: '¿Cuáles son los dos grandes grupos de definiciones de IA que distingue la cátedra?', opts: ['Supervisado y no supervisado', 'Relacionadas con procesos mentales (pensar) y relacionadas con la conducta (actuar)', 'Simbólico y conexionista', 'Racional y omnisciente'], a: 1, exp: 'Ver §1.2 ¿Qué es la IA?.' },
        { q: "La definición de Haugeland (1985), 'lograr que las computadoras piensen... máquinas con mentes', pertenece a:", opts: ['El grupo relacionado con la conducta (actuar)', 'El enfoque de agentes racionales', 'El grupo relacionado con los procesos mentales (pensar)', 'Ninguno de los dos grupos'], a: 2, exp: "Ver §1.2: Haugeland es un ejemplo del grupo 'pensar'." },
        { q: "La definición de Rich y Knight (1991), sobre 'tareas que por el momento los humanos hacen mejor', pertenece a:", opts: ['El grupo relacionado con la conducta (actuar)', 'El grupo relacionado con los procesos mentales (pensar)', 'La racionalidad limitada', 'El aprendizaje supervisado'], a: 0, exp: "Ver §1.2: Rich y Knight ejemplifican el grupo 'actuar'." },
        { q: "¿Quién definió la IA como 'el estudio del diseño (y desarrollo) de agentes inteligentes'?", opts: ['Haugeland (1985)', 'Rich y Knight (1991)', 'McCulloch y Pitts (1943)', 'Poole (1998)'], a: 3, exp: 'Ver §1.2.' },
        { q: '¿Qué enfoque adopta principalmente la materia, según el cruce de dimensiones de Russell y Norvig?', opts: ['Sistemas que piensan como humanos', 'Sistemas que actúan racionalmente (agentes racionales)', 'Sistemas que piensan racionalmente', 'Sistemas que actúan como humanos'], a: 1, exp: 'Ver §1.2: la materia adopta la visión de agentes racionales.' },
        { q: 'El enfoque de Russell y Norvig cruza las dimensiones pensar/actuar con:', opts: ['Supervisado/no supervisado', 'Determinista/estocástico', 'Como humanos / racionalmente', 'Sintáctico/semántico'], a: 2, exp: 'Ver §1.2.' },
        { q: '¿Cuántos grandes grupos de definiciones de IA describe la cátedra?', opts: ['Tres', 'Cuatro', 'Uno', 'Dos'], a: 3, exp: 'Ver §1.2: pensar y conducta.' },
        { q: 'La definición de Poole (1998) enfatiza:', opts: ['El diseño y desarrollo de agentes inteligentes', 'Máquinas con mentes en el sentido literal', 'Tareas que los humanos hacen mejor', 'La capacidad de resolver problemas de la RAE'], a: 0, exp: 'Ver §1.2.' },
        { q: '¿Qué grupo de definiciones de IA agrupa a Rich y Knight (1991) y a Poole (1998)?', opts: ['Procesos mentales (pensar)', 'Conducta (actuar)', 'Aprendizaje supervisado', 'Agentes reactivos'], a: 1, exp: "Ver §1.2: ambas definiciones pertenecen al grupo 'conducta'." }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'Ordene cronológicamente las etapas históricas de la IA vistas en clase: ¿cuál es la PRIMERA?', opts: ['Nacimiento', 'Inicios', 'Sistemas expertos y resurgimiento', 'Realidad y pérdida de interés'], a: 0, exp: 'Cálculo cronológico (capítulo sin fórmulas numéricas). Ver §1.4.' },
        { q: "¿Cuál es la etapa histórica que sigue inmediatamente a 'Nacimiento'?", opts: ['Realidad y pérdida de interés', 'Inicios', 'Sistemas expertos y resurgimiento', 'Nacimiento'], a: 1, exp: 'Ver §1.4: orden Nacimiento → Inicios → Realidad y pérdida de interés → Sistemas expertos.' },
        { q: '¿Cuál es la ÚLTIMA de las 4 etapas históricas de la IA vistas en clase?', opts: ['Nacimiento', 'Inicios', 'Sistemas expertos y resurgimiento', 'Realidad y pérdida de interés'], a: 2, exp: 'Ver §1.4.' },
        { q: "¿En qué etapa histórica se ubica el 'Teórico Lógico' (Logic Theorist)?", opts: ['Sistemas expertos y resurgimiento', 'Nacimiento', 'Inicios', 'Realidad y pérdida de interés'], a: 1, exp: 'Ver §1.4: Logic Theorist se sitúa en la etapa de Nacimiento.' },
        { q: '¿En qué etapa histórica se ubica el programa de damas de Samuel?', opts: ['Nacimiento', 'Realidad y pérdida de interés', 'Sistemas expertos y resurgimiento', 'Inicios'], a: 3, exp: 'Ver §1.4: el programa de damas de Samuel corresponde a la etapa de Inicios.' },
        { q: '¿En qué etapa histórica se ubica el sistema experto R1 de McDermott?', opts: ['Sistemas expertos y resurgimiento', 'Inicios', 'Nacimiento', 'Realidad y pérdida de interés'], a: 0, exp: 'Ver §1.4.' },
        { q: '¿Cuántas ciencias fundamentales de la IA enumera el resumen de la cátedra?', opts: ['6', '8', '5', '10'], a: 1, exp: 'Ver §1.3: Filosofía, Matemáticas, IO y Economía, Neurociencia, Psicología, Ingeniería computacional, Teoría de Control y Cibernética, Lingüística (8 en total).' },
        { q: '¿En qué año se realizó la conferencia de Dartmouth que da nombre al campo de la IA?', opts: ['1943', '1979', '1956', '1982'], a: 2, exp: 'Ver §1.4.' },
        { q: '¿En qué año McCulloch y Pitts propusieron las primeras redes neuronales?', opts: ['1956', '1982', '1965', '1943'], a: 3, exp: 'Ver §1.4.' },
        { q: '¿Aproximadamente cuánto dinero ahorraba el sistema R1 a DEC por año?', opts: ['4 millones de dólares', '400 mil dólares', '40 millones de dólares', '4 mil millones de dólares'], a: 2, exp: 'Ver §1.4.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: "¿En qué se diferencian las definiciones de IA 'relacionadas con procesos mentales' y las 'relacionadas con la conducta'?", opts: ['Las primeras buscan que las máquinas piensen (máquinas con mentes); las segundas, que actúen (realicen tareas que los humanos hacen mejor)', 'Sinónimas de la teoría de agentes', 'Solo aplican a robots físicos', 'No hay diferencia, son sinónimas'], a: 0, exp: 'Ver §1.2: un grupo se centra en el pensar, el otro en el actuar.' },
        { q: "¿Qué diferencia a la etapa 'Realidad y pérdida de interés' de la etapa 'Sistemas expertos y resurgimiento'?", opts: ['La primera trajo el nacimiento del campo, la segunda su nombre', 'La primera fue un período de recorte de fondos por promesas incumplidas; la segunda trajo éxitos comerciales como R1', 'Ambas describen exactamente el mismo período', 'La primera es posterior a la segunda'], a: 1, exp: 'Ver §1.4.' },
        { q: "Respecto a la pregunta '¿reemplazar o acompañar al humano?', ¿qué postura favorece la cátedra?", opts: ['Reemplazar completamente al humano', 'Ninguna de las dos, evita el tema', 'Acompañar al humano (el humano dirige, la IA asiste)', 'Depende del costo del sistema'], a: 2, exp: 'Ver §1.6.' },
        { q: '¿Qué plantea James Gosling como pregunta clave al comparar un chatbot de recetas con un sistema médico?', opts: ['Cuál de los dos es más rentable', 'Cuál tolerancia al error estamos dispuestos a aceptar en cada caso', 'Cuál de los dos usa más datos de entrenamiento', 'Cuál de los dos es más antiguo'], a: 1, exp: 'Ver §1.6.' },
        { q: "Rich y Knight (1991) y Poole (1998) comparten el grupo 'conducta (actuar)', pero se diferencian en que:", opts: ['Rich y Knight hablan de tareas que hoy hacen mejor los humanos; Poole habla del diseño de agentes inteligentes', "Rich y Knight son del grupo 'pensar' y Poole del grupo 'actuar'", 'Ambos son idénticos en formulación', 'Poole es anterior cronológicamente a Rich y Knight'], a: 0, exp: 'Ver §1.2.' },
        { q: "El SRGP/GPS y el programa de damas de Samuel pertenecen ambos a la etapa 'Inicios', pero:", opts: ['Ambos son sistemas expertos comerciales', 'El SRGP es un resolutor general de problemas; el programa de Samuel aprende específicamente a jugar mejor a las damas', 'El programa de Samuel es anterior al Logic Theorist', 'El SRGP fue creado por Samuel'], a: 1, exp: 'Ver §1.4.' },
        { q: '¿Cuál aporta específicamente lógica formal, probabilidad y computabilidad como ciencia fundamental de la IA?', opts: ['Filosofía', 'Ninguna de las dos', 'Matemáticas', 'Ambas por igual, sin distinción'], a: 2, exp: 'Ver §1.3.' },
        { q: '¿Qué distingue el aporte de la Neurociencia del aporte de la Psicología a la IA?', opts: ['Ambas estudian exclusivamente el lenguaje', 'La Psicología inspira el conexionismo y la Neurociencia estudia cómo piensan los humanos', 'La Neurociencia inspira el conexionismo (cómo procesa información el cerebro); la Psicología estudia cómo piensan y actúan los humanos', 'No tienen relación con la IA'], a: 2, exp: 'Ver §1.3.' },
        { q: '¿Cuál de las cuatro combinaciones pensar/actuar como humanos/racionalmente adopta principalmente la materia?', opts: ['Pensar como humanos', 'Pensar racionalmente', 'Actuar como humanos', 'Actuar racionalmente'], a: 3, exp: 'Ver §1.2.' },
        { q: "¿Qué diferencia al 'sesgo algorítmico' del problema de 'seguridad' en los LLM, según §1.6?", opts: ['Son exactamente el mismo problema', 'El sesgo algorítmico es un problema de hardware', 'La seguridad no está relacionada con los LLM', 'El sesgo algorítmico amplifica prejuicios sociales de los datos; la seguridad se refiere a riesgos como inyección de prompts y jailbreaks'], a: 3, exp: 'Ver §1.6.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Un taxi autónomo elige la ruta más rápida y segura posible dado el tráfico actual. Esto ejemplifica mejor:', opts: ['Actuar racionalmente, el enfoque que adopta la materia', 'Pensar como humano', 'El invierno de la IA', 'Un sistema experto de los años 80'], a: 0, exp: 'Ver §1.2.' },
        { q: '¿En qué aplicación de la IA se enmarca un sistema de diagnóstico por imágenes en un hospital?', opts: ['Robótica', 'Entretenimiento', 'Medicina', 'Biología'], a: 2, exp: 'Ver §1.5.' },
        { q: '¿En qué caso es más crítica la tolerancia al error: un chatbot de recetas de cocina o un sistema de diagnóstico médico?', opts: ['En el chatbot de recetas', 'En el sistema médico', 'En ninguno, ambos son igual de críticos', 'Depende únicamente del costo de desarrollo'], a: 1, exp: 'Ver §1.6 (pregunta de Gosling).' },
        { q: 'Un modelo de lenguaje al que se le inyectan instrucciones ocultas para que genere contenido malicioso ejemplifica:', opts: ['Sesgo algorítmico', 'Una aplicación en biología', 'El invierno de la IA', "El 'lado oscuro' de seguridad de los LLM (inyección de prompts/jailbreaks)"], a: 3, exp: 'Ver §1.6.' },
        { q: 'Un modelo de lenguaje que reproduce estereotipos de género presentes en sus datos de entrenamiento ejemplifica:', opts: ['Fuga de datos', 'Jailbreak', 'Sesgo algorítmico', 'Impronta'], a: 2, exp: 'Ver §1.6.' },
        { q: 'DEC ahorraba ~40 millones de dólares al año usando un sistema para configurar pedidos de computadoras. Este caso corresponde a:', opts: ['El sistema experto R1, etapa de Sistemas expertos y resurgimiento', 'El SRGP, etapa de Inicios', 'El Logic Theorist, etapa de Nacimiento', 'Una aplicación de robótica'], a: 0, exp: 'Ver §1.4.' },
        { q: 'Un programa que juega a las damas y termina jugando mejor que su propio creador ejemplifica:', opts: ['El sistema R1 de McDermott', 'El programa de Samuel, etapa de Inicios', 'El Logic Theorist', 'La conferencia de Dartmouth'], a: 1, exp: 'Ver §1.4.' },
        { q: 'Un asistente de IA que propone un diagnóstico pero deja la decisión final al médico ejemplifica la postura de la cátedra de:', opts: ['Reemplazar al humano', 'Ignorar el rol del humano', 'Acompañar al humano', 'Maximizar solo el rendimiento económico'], a: 2, exp: 'Ver §1.6.' },
        { q: 'Un sistema de IA que predice cómo se pliega una proteína corresponde a la aplicación en:', opts: ['Gestión de la información', 'Biología', 'Educación', 'Entretenimiento'], a: 1, exp: 'Ver §1.5.' },
        { q: 'Un motor de IA que controla el comportamiento de los enemigos en un videojuego corresponde a la aplicación en:', opts: ['Entretenimiento', 'Medicina', 'Robótica', 'Gestión de la información'], a: 0, exp: 'Ver §1.5.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: "Trampa: confundir el 'Teórico Lógico' (Logic Theorist) con el SRGP. ¿Cuál fue el primer programa que demostraba teoremas?", opts: ['El SRGP (General Problem Solver)', 'El programa de damas de Samuel', 'El Teórico Lógico (Logic Theorist), de Newell y Simon', 'El sistema R1'], a: 2, exp: 'Ver §1.4: no confundir con el SRGP, que es posterior.' },
        { q: '¿En qué etapa histórica ocurrió la conferencia de Dartmouth (1956)?', opts: ["En 'Inicios'", "En 'No hacer nada'", "En 'Sistemas expertos y resurgimiento'", "En 'Nacimiento'"], a: 3, exp: 'Ver §1.4: Dartmouth pertenece a la etapa de Nacimiento, no a Inicios.' },
        { q: '¿La cátedra favorece reemplazar o acompañar al humano con la IA?', opts: ['Reemplazar, siempre que sea posible', 'Ninguna postura, es indiferente', 'Reemplazar solo en medicina', 'Acompañar: el humano dirige, la IA asiste'], a: 3, exp: "Ver §1.6: cuidado con marcar 'reemplazar', es la opción incorrecta." },
        { q: '¿Quiénes propusieron las primeras redes neuronales (1943), antecedente de la IA?', opts: ['McCulloch y Pitts', 'Newell y Simon', 'Rich y Knight', 'Minsky y Papert'], a: 0, exp: 'Ver §1.4: no confundir con Minsky y Papert, quienes en los 60 demostraron limitaciones del perceptrón (tema de otro capítulo).' },
        { q: '¿R1, el primer sistema experto comercial, fue un fracaso o un éxito?', opts: ['Un fracaso, se abandonó rápido', 'Un éxito: ahorraba ~40 millones de dólares al año a DEC', 'Nunca se implementó realmente', 'Fue un prototipo académico sin uso comercial'], a: 1, exp: 'Ver §1.4: fue el primer sistema experto comercial exitoso.' },
        { q: "La definición de Haugeland (1985) sobre 'máquinas con mentes' pertenece al grupo:", opts: ['Conducta (actuar)', 'Ninguno de los grupos mencionados', 'Procesos mentales (pensar)', 'Aprendizaje por refuerzo'], a: 2, exp: "Ver §1.2: no confundir con el grupo 'conducta', al que pertenecen Rich y Knight y Poole." },
        { q: '¿La IA es una ciencia aislada o interdisciplinaria, según §1.3?', opts: ['Es exclusivamente una rama de la Ingeniería computacional', 'Es interdisciplinaria, se apoya en 8 ciencias distintas', 'Es exclusivamente una rama de la Matemática', 'Es una rama de la Lingüística únicamente'], a: 1, exp: 'Ver §1.3.' },
        { q: "El 'invierno de la IA' (etapa 'Realidad y pérdida de interés'), ¿fue la primera o la tercera etapa histórica?", opts: ['La primera', 'La segunda', 'La cuarta', 'La tercera'], a: 3, exp: 'Ver §1.4: orden Nacimiento, Inicios, Realidad y pérdida de interés, Sistemas expertos.' },
        { q: '¿Quién plantea la pregunta sobre la tolerancia al error ante la IA generativa?', opts: ['James Gosling', 'Alan Turing', 'John McCarthy', 'Arthur Samuel'], a: 0, exp: 'Ver §1.6.' },
        { q: '¿Qué significa la sigla SRGP?', opts: ['Sistema de Razonamiento General Probabilístico', 'Solucionador de Problemas de Propósito General', 'Sistema de Reglas de Gestión de Problemas', 'Solucionador de Redes de Gran Profundidad'], a: 1, exp: 'Ver §1.4.' }
      ]
    }
  ]
};
