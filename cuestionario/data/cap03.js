// Question bank: Chapter 3 - Aprendizaje automatico - fundamentos (RESUMEN.md lines 176-255)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[3] = {
  title: 'Aprendizaje automático — fundamentos',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: "¿Cuál es la 'fórmula de la cátedra' para el aprendizaje?", opts: ['Aprendizaje = Selección + Adaptación', 'Aprendizaje = Percepción + Acción', 'Aprendizaje = Entrada + Salida', 'Aprendizaje = Datos + Modelo'], a: 0, exp: 'Ver §3.2.' },
        { q: "En la fórmula 'Aprendizaje = Selección + Adaptación', ¿qué es la 'Selección'?", opts: ['El ajuste del modelo cuando hay diferencias significativas', 'La comparación de las características más relevantes mediante Pattern Matching', 'El entrenamiento supervisado', 'La medida de rendimiento del agente'], a: 1, exp: 'Ver §3.2.' },
        { q: "¿Qué es la 'habituación', según la clasificación de aprendizaje animal?", opts: ['Aprender copiando el comportamiento de otro individuo', 'Asociar dos estímulos', 'Aprender en un período crítico temprano', 'Dejar de responder a un estímulo repetido e irrelevante'], a: 3, exp: 'Ver §3.1.' },
        { q: "¿Qué es la 'impronta'?", opts: ['Aprendizaje en un período crítico temprano (p. ej., patitos que siguen a la madre)', 'Repetir lo que funciona y descartar lo que no', 'Copiar el comportamiento de otro individuo', 'Vincular un estímulo con una respuesta'], a: 0, exp: 'Ver §3.1.' },
        { q: '¿Cuál de estas NO es una de las medidas de actuación del aprendizaje automático mencionadas por la cátedra?', opts: ['Generalidad', 'Robustez', 'Popularidad', 'Eficiencia'], a: 2, exp: 'Ver §3.4: son generalidad, robustez, eficacia y eficiencia.' },
        { q: "¿Qué mide la 'robustez' de un método de aprendizaje?", opts: ['Cuántos recursos consume', 'Su capacidad de aplicarse a distintos dominios', 'La calidad de los resultados obtenidos', 'Su capacidad de funcionar correctamente ante ruido, datos incompletos o inconsistentes'], a: 3, exp: 'Ver §3.4.' },
        { q: "¿Qué distingue al aprendizaje 'supervisado' del 'no supervisado'?", opts: ['El supervisado no usa datos; el no supervisado sí', 'El supervisado se entrena con datos etiquetados; el no supervisado no dispone de etiquetas y tiene carácter exploratorio', 'Son sinónimos', 'El no supervisado siempre usa recompensas'], a: 1, exp: 'Ver §3.5 (pregunta de recuperatorio).' },
        { q: '¿Cómo se llama el proceso de comparar las características más relevantes de un objeto con otras conocidas?', opts: ['Adaptación', 'Refuerzo', 'Pattern Matching (cotejamiento)', 'Backpropagation'], a: 2, exp: 'Ver §3.2.' },
        { q: "El aprendizaje 'por refuerzo' se caracteriza por:", opts: ['Usar exclusivamente datos etiquetados', 'No requerir ningún tipo de interacción con el entorno', 'Ser idéntico al aprendizaje supervisado', 'El agente aprende interactuando con el entorno mediante premios y castigos'], a: 3, exp: 'Ver §3.5.' },
        { q: "¿Qué es la 'Adaptación' en la fórmula de la cátedra?", opts: ['El proceso de Pattern Matching', 'La medida de eficiencia del algoritmo', 'El ajuste del modelo del sistema cuando las diferencias detectadas son significativas', 'La clasificación por estrategia de aprendizaje'], a: 2, exp: 'Ver §3.2.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: '¿Cuántos tipos de aprendizaje animal enumera la cátedra como inspiración del aprendizaje automático?', opts: ['5', '6', '7', '4'], a: 2, exp: 'Cálculo por conteo (capítulo sin fórmulas numéricas). Ver §3.1: habituación, asociativo, condicionamiento, prueba y error, latente, imitación, impronta = 7.' },
        { q: '¿Cuál es la PRIMERA de las etapas de la reseña histórica del aprendizaje automático?', opts: ['Renacimiento (1976-1986)', 'Etapa oscura (1965-1976)', 'Desarrollo (1986-actualidad)', 'Entusiasmo inicial (1955-1965)'], a: 3, exp: 'Ver §3.3.' },
        { q: "¿Qué etapa histórica del aprendizaje automático sigue inmediatamente al 'Entusiasmo inicial'?", opts: ['Etapa oscura (1965-1976)', 'Desarrollo (1986-actualidad)', 'Renacimiento (1976-1986)', 'Ninguna, es la última etapa'], a: 0, exp: 'Ver §3.3.' },
        { q: "¿En qué rango de años transcurre la 'Etapa oscura' del aprendizaje automático?", opts: ['1955-1965', '1976-1986', '1965-1976', '1986-actualidad'], a: 2, exp: 'Ver §3.3.' },
        { q: '¿Qué etapa introdujo el aprendizaje conexionista (backpropagation), según la reseña histórica?', opts: ["La etapa 'Entusiasmo inicial'", "La etapa 'Desarrollo (1986-actualidad)'", 'La etapa oscura', 'El renacimiento'], a: 1, exp: 'Ver §3.3.' },
        { q: '¿Cuántas medidas de actuación del aprendizaje automático se mencionan (pregunta de recuperatorio)?', opts: ['3', '5', '4', '6'], a: 2, exp: 'Ver §3.4: generalidad, robustez, eficacia, eficiencia.' },
        { q: '¿Cuántos grandes grupos de aprendizaje por tipo de supervisión describe la cátedra?', opts: ['2', '4', '5', '3'], a: 3, exp: 'Ver §3.5: supervisado, no supervisado y por refuerzo.' },
        { q: "¿Cuántas categorías de clasificación del aprendizaje 'por estrategia' enumera el resumen?", opts: ['6', '4', '3', '5'], a: 0, exp: 'Ver §3.5: deductivo, analógico, inductivo, mediante descubrimiento, algoritmos genéticos, conexionismo = 6.' },
        { q: '¿Qué detalla el resumen como causa de la disminución de interés en la Etapa oscura?', opts: ['No se especifica en detalle, solo se menciona que decae el interés por las limitaciones del perceptrón demostradas por Minsky y Papert', 'La imposibilidad de resolver XOR, detallada extensamente con ejemplos numéricos', 'El alto costo computacional, cuantificado en el resumen', 'La falta de datos etiquetados, medida en porcentaje'], a: 0, exp: 'Ver §3.3.' },
        { q: '¿Cuántas tareas principales resuelve el aprendizaje automático según §3.6?', opts: ['2: clasificación y regresión', '3: clasificación, regresión y clustering', '5, sin especificar cuáles', '4: clasificación, regresión, clustering y refuerzo (optimizar estrategia de acciones)'], a: 3, exp: 'Ver §3.6.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: "¿Qué diferencia a la 'habituación' del 'condicionamiento' como tipos de aprendizaje animal?", opts: ['Son sinónimos exactos', 'El condicionamiento no involucra estímulos', 'La habituación es dejar de responder a un estímulo irrelevante repetido; el condicionamiento es una asociación estímulo-respuesta reforzada', 'La habituación requiere refuerzo explícito'], a: 2, exp: 'Ver §3.1.' },
        { q: "¿Qué diferencia a 'Selección' de 'Adaptación' en la fórmula del aprendizaje?", opts: ['La selección compara características mediante Pattern Matching; la adaptación ajusta el modelo cuando hay diferencias significativas', 'La adaptación compara características mediante Pattern Matching; la selección ajusta el modelo', 'Son el mismo paso', 'Ninguna de las dos aplica al aprendizaje supervisado'], a: 0, exp: 'Ver §3.2.' },
        { q: '¿Cuál es la diferencia central entre aprendizaje supervisado y no supervisado?', opts: ['El no supervisado usa datos etiquetados; el supervisado no', 'Son idénticos en su objetivo', 'El supervisado nunca se usa para clasificación', 'El supervisado usa datos etiquetados; el no supervisado no dispone de etiquetas y es exploratorio'], a: 3, exp: 'Ver §3.5.' },
        { q: '¿Qué distingue al aprendizaje no supervisado del aprendizaje por refuerzo?', opts: ['El no supervisado usa premios y castigos; el refuerzo busca estructura oculta', 'El no supervisado busca estructura oculta sin etiquetas; el refuerzo aprende mediante premios y castigos interactuando con el entorno', 'Ambos requieren datos etiquetados', 'Son exactamente el mismo tipo'], a: 1, exp: 'Ver §3.5.' },
        { q: "¿En qué se diferencian 'generalidad' y 'eficiencia' como medidas de actuación?", opts: ['La generalidad mide la aplicabilidad a distintos dominios; la eficiencia mide los recursos consumidos para lograr el resultado', 'La generalidad mide recursos consumidos; la eficiencia mide aplicabilidad a distintos dominios', 'Son sinónimos', 'Ninguna se aplica al aprendizaje automático'], a: 0, exp: 'Ver §3.4.' },
        { q: "¿Qué diferencia al aprendizaje 'deductivo' del 'inductivo' por estrategia?", opts: ['El inductivo va de lo general a lo particular; el deductivo de ejemplos a reglas', 'Son lo mismo', 'El deductivo se usa solo en clustering', 'El deductivo va de lo general a lo particular; el inductivo va de ejemplos particulares a reglas generales'], a: 3, exp: 'Ver §3.5.' },
        { q: "¿Qué diferencia a la etapa 'Entusiasmo inicial (1955-1965)' de la 'Etapa oscura (1965-1976)'?", opts: ['Ambas describen el mismo período de auge', 'La primera tuvo aprendizaje sin conocimiento de respaldo y perceptrones; en la segunda decae el interés por las limitaciones del perceptrón', 'La etapa oscura es anterior cronológicamente', 'La etapa oscura introdujo el backpropagation'], a: 1, exp: 'Ver §3.3.' },
        { q: "¿Qué distingue a 'clasificación' de 'regresión' como tareas del aprendizaje supervisado?", opts: ['La regresión predice una categoría; la clasificación un valor numérico', 'Son la misma tarea', 'La clasificación predice una categoría; la regresión predice un valor numérico', 'Ninguna es supervisada'], a: 2, exp: 'Ver §3.6.' },
        { q: "¿Qué distingue a 'clustering' de 'clasificación'?", opts: ['El clustering es supervisado y la clasificación no', 'El clustering descubre grupos sin etiquetas (no supervisado); la clasificación predice una categoría a partir de datos etiquetados (supervisado)', 'Son idénticas', 'El clustering solo se usa con refuerzo'], a: 1, exp: 'Ver §3.6 y §3.5.' },
        { q: '¿Qué advertencia hace la cátedra sobre las correlaciones en el aprendizaje no supervisado?', opts: ['Que toda correlación implica causalidad', 'Que dos variables se agrupen o correlacionen no implica causalidad (correlaciones espurias)', 'Que el clustering nunca produce correlaciones', 'Que las correlaciones solo aparecen en aprendizaje supervisado'], a: 1, exp: 'Ver §3.5.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Un perro que asocia el sonido de una campana con la comida y empieza a salivar al oírla, ejemplifica:', opts: ['Condicionamiento', 'Habituación', 'Impronta', 'Aprendizaje mediante descubrimiento'], a: 0, exp: 'Ver §3.1 (ejemplo de Pavlov).' },
        { q: "Un detector de spam entrenado con miles de correos ya etiquetados como 'spam' o 'no spam' ejemplifica aprendizaje:", opts: ['No supervisado', 'Por refuerzo', 'Supervisado', 'Mediante descubrimiento'], a: 2, exp: 'Ver §3.5.' },
        { q: 'Un sistema que agrupa clientes por comportamiento de compra sin conocer previamente ninguna categoría ejemplifica aprendizaje:', opts: ['Supervisado', 'No supervisado (clustering)', 'Por refuerzo', 'Deductivo'], a: 1, exp: 'Ver §3.5 y §3.6.' },
        { q: 'Un agente que aprende a jugar un videojuego recibiendo puntos cuando gana y penalizaciones cuando pierde, sin que se le diga qué acción tomar, ejemplifica aprendizaje:', opts: ['Supervisado', 'No supervisado', 'Analógico', 'Por refuerzo'], a: 3, exp: 'Ver §3.5.' },
        { q: 'Un sistema que descubre que dos variables no relacionadas causalmente aparecen agrupadas en un análisis de clustering debe tener en cuenta:', opts: ['Que la correlación implica causalidad de forma directa', 'El riesgo de correlaciones espurias: agruparse no implica causalidad', 'Que el clustering siempre es supervisado', 'Que esto nunca ocurre en la práctica'], a: 1, exp: 'Ver §3.5.' },
        { q: 'Un algoritmo que predice el precio de una vivienda (un valor numérico continuo) a partir de sus características resuelve una tarea de:', opts: ['Clasificación', 'Clustering', 'Regresión', 'Refuerzo'], a: 2, exp: 'Ver §3.6.' },
        { q: 'Un sistema que deduce nuevo conocimiento a partir de reglas y hechos conocidos, yendo de lo general a lo particular, usa una estrategia:', opts: ['Inductiva', 'Deductiva', 'Por descubrimiento', 'Conexionista'], a: 1, exp: 'Ver §3.5.' },
        { q: 'Un árbol de decisión que generaliza reglas a partir de ejemplos particulares de entrenamiento usa una estrategia:', opts: ['Deductiva', 'Analógica', 'Inductiva', 'Por algoritmos genéticos'], a: 2, exp: 'Ver §3.5.' },
        { q: 'Evaluar un algoritmo de aprendizaje comprobando que sigue funcionando bien aunque los datos de entrada tengan ruido evalúa su:', opts: ['Generalidad', 'Eficiencia', 'Eficacia', 'Robustez'], a: 3, exp: 'Ver §3.4.' },
        { q: 'Un patito recién nacido que sigue a la primera figura en movimiento que ve, en un período crítico temprano, ejemplifica:', opts: ['Impronta', 'Habituación', 'Prueba y error', 'Condicionamiento'], a: 0, exp: 'Ver §3.1.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: "¿La fórmula de la cátedra es 'Aprendizaje = Selección + Adaptación' o 'Aprendizaje = Datos + Reglas'?", opts: ['Aprendizaje = Datos + Reglas', 'Aprendizaje = Percepción + Actuación', 'No existe una fórmula de la cátedra', 'Aprendizaje = Selección + Adaptación'], a: 3, exp: 'Ver §3.2.' },
        { q: '¿Es correcto decir que el aprendizaje no supervisado usa datos etiquetados?', opts: ['Sí, siempre', 'Sí, pero solo parcialmente', 'No, el no supervisado no dispone de datos etiquetados; el supervisado sí', 'No aplica, ambos usan las mismas etiquetas'], a: 2, exp: 'Ver §3.5.' },
        { q: '¿El aprendizaje por refuerzo le indica al agente explícitamente qué acción correcta tomar?', opts: ['No, el agente lo descubre por prueba y error mediante premios y castigos', 'Sí, siempre se le indica la acción correcta', 'Solo en la primera iteración', 'Solo si los datos están etiquetados'], a: 0, exp: 'Ver §3.5.' },
        { q: '¿Cuántas medidas de actuación del aprendizaje automático hay, exactamente (pregunta de recuperatorio)?', opts: ['3: generalidad, robustez y eficacia', '4: generalidad, robustez, eficacia y eficiencia', '5, incluyendo precisión', '2: eficacia y eficiencia'], a: 1, exp: 'Ver §3.4: no omitir ninguna de las cuatro.' },
        { q: "¿'Eficacia' y 'eficiencia' son sinónimos en la clasificación de la cátedra?", opts: ['Sí, son intercambiables', 'No, son opuestos sin relación', 'Sí, ambas miden solo el tiempo de cómputo', 'No: eficacia es la calidad de los resultados; eficiencia son los recursos consumidos para lograrlos'], a: 3, exp: 'Ver §3.4.' },
        { q: "¿El aprendizaje 'analógico' consiste en ir de lo general a lo particular?", opts: ['No, eso es el deductivo; el analógico transfiere soluciones de problemas conocidos a problemas nuevos similares', 'Sí, es la definición exacta', 'No tiene relación con el deductivo', 'Sí, es sinónimo de inductivo'], a: 0, exp: 'Ver §3.5.' },
        { q: '¿A qué tipo de supervisión pertenecen K-medias, Kohonen y Hopfield, según el resumen?', opts: ['Supervisado', 'Por refuerzo', 'No supervisado', 'No están mencionados en el resumen'], a: 2, exp: 'Ver §3.5.' },
        { q: '¿A qué tipo de supervisión pertenecen ID3, C4.5/J48, regresión lineal y perceptrón, según el resumen?', opts: ['No supervisado', 'Por refuerzo', 'Mediante descubrimiento', 'Supervisado'], a: 3, exp: 'Ver §3.5.' },
        { q: '¿Cuántas etapas históricas describe la reseña del aprendizaje automático?', opts: ['3', '5', '4', '6'], a: 2, exp: 'Ver §3.3.' },
        { q: "¿'Habituación' e 'impronta' son el mismo tipo de aprendizaje animal?", opts: ['No: la habituación es dejar de responder a un estímulo irrelevante repetido; la impronta ocurre en un período crítico temprano', 'Sí, son sinónimos', 'Sí, ambas requieren refuerzo', 'No tienen relación con el aprendizaje automático'], a: 0, exp: 'Ver §3.1.' }
      ]
    }
  ]
};
