// Question bank: Chapter 10 - Redes neuronales - fundamentos (RESUMEN.md lines 899-960; calc ficha S20.5 lines 1790-1841, ficha 21)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[10] = {
  title: 'Redes neuronales — fundamentos',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué es el modelo conexionista?', opts: ['Una técnica de clustering jerárquico', 'Una rama de la IA que toma como modelo la mente humana, simulando el funcionamiento del cerebro', 'Un método causal para pronosticar valores continuos', 'Un algoritmo de reglas tipo 1R'], a: 1, exp: 'Ver §10.1.' },
        { q: '¿En qué se inspira el modelo conexionista como forma "primitiva" de representación del conocimiento?', opts: ['En árboles de decisión', 'En tablas de verdad', 'En la neurona y sus relaciones', 'En matrices de confusión'], a: 2, exp: 'Ver §10.1.' },
        { q: '¿Qué potencial aporta tener muchas neuronas conectadas en varias capas, según el resumen?', opts: ['Ninguno adicional respecto a una sola neurona', 'Solo sirve para clasificación binaria', 'Reduce la capacidad de cómputo del sistema', 'Un potencial enorme para resolver casi cualquier tipo de problema'], a: 3, exp: 'Ver §10.1.' },
        { q: '¿Qué función cumplen las dendritas en la neurona biológica?', opts: ['Reciben señales de entrada desde otras células a través de las sinapsis', 'Transportan la señal de salida', 'Integran y procesan las señales', 'Liberan neurotransmisores hacia otras neuronas'], a: 0, exp: 'Ver §10.2.' },
        { q: '¿Qué función cumple el soma (cuerpo celular)?', opts: ['Recibe señales externas únicamente', 'Combina e integra las señales (procesa) y emite señales de salida', 'Transporta la señal hacia los terminales axónicos', 'Distribuye información a un nuevo conjunto de neuronas'], a: 1, exp: 'Ver §10.2.' },
        { q: '¿Qué función cumple el axón?', opts: ['Recibe señales de otras células', 'Combina las señales entrantes', 'Transporta las señales de salida a los terminales axónicos', 'Determina el umbral de activación'], a: 2, exp: 'Ver §10.2.' },
        { q: '¿Qué función cumplen los terminales sinápticos/axónicos?', opts: ['Reciben señales de entrada por las dendritas', 'Integran y procesan las señales entrantes', 'Fijan el número de capas de la red', 'Distribuyen la información a un nuevo conjunto de neuronas liberando neurotransmisores'], a: 3, exp: 'Ver §10.2.' },
        { q: 'Según el resumen, ¿aproximadamente cuántas conexiones tiene el cerebro humano?', opts: ['~10¹⁵', '~10³', '~10⁹', '~10²'], a: 0, exp: 'Ver §10.2.' },
        { q: '¿Qué codifican los pesos de las conexiones en una red neuronal artificial (RNA)?', opts: ['El número de capas de la red', 'El conocimiento de la red', 'El tiempo de entrenamiento', 'La cantidad de neuronas de salida'], a: 1, exp: 'Ver §10.3.' },
        { q: '¿Cuáles son los tres tipos de neuronas de una RNA según el resumen?', opts: ['De entrenamiento, de validación y de prueba', 'Excitatorias, inhibidoras y neutras', 'De entrada, ocultas y de salida', 'Convolucionales, recurrentes y densas'], a: 2, exp: 'Ver §10.3.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'Una neurona artificial j tiene bias x0=1 con peso w0j=1, y entradas x1=2 (peso w1j=−1), x2=3 (peso w2j=2). ¿Cuál es su suma ponderada sumaj = Σ wij·xi?', opts: ['3', '-5', '5', '6'], a: 2, exp: 'Ver §20.5 ficha 21: 1·1 + (−1)·2 + 2·3 = 1−2+6 = 5.' },
        { q: 'Con esa misma neurona (sumaj=5) y una función de activación tipo escalón (positivo → se dispara), ¿la neurona se activa?', opts: ['No, porque 5 es negativo', 'No se puede determinar sin más datos', 'Solo si x0 fuera distinto de 1', 'Sí, porque sumaj=5 > 0, supera el umbral'], a: 3, exp: 'Ver §10.4: sumaj > 0 → se dispara.' },
        { q: 'Con los mismos pesos (w0j=1, w1j=−1, w2j=2) pero nuevas entradas x1=1, x2=−4, ¿cuál es el nuevo sumaj?', opts: ['-8', '8', '-6', '1'], a: 0, exp: 'Ver §20.5 ficha 21: 1·1 + (−1)·1 + 2·(−4) = 1−1−8 = −8.' },
        { q: 'Con sumaj=-8 (negativo) y activación escalón, ¿la neurona se dispara?', opts: ['Sí, siempre se dispara', 'No, no supera el umbral de activación (sumaj < 0)', 'Se dispara solo si x0=1', 'No se puede saber sin la función g explícita'], a: 1, exp: 'Ver §10.4.' },
        { q: 'Si una conexión tiene peso Wij=-3, ¿qué tipo de conexión es según el resumen?', opts: ['Excitadora', 'No hay conexión', 'Inhibidora', 'Neutra'], a: 2, exp: 'Ver §10.4: Wij < 0 → inhibidora.' },
        { q: 'Si una conexión tiene peso Wij=4, ¿qué tipo de conexión es?', opts: ['Inhibidora', 'No hay conexión', 'Depende del valor de xi', 'Excitadora'], a: 3, exp: 'Ver §10.4: Wij > 0 → excitadora.' },
        { q: 'Si Wij=0 entre dos neuronas i y j, ¿qué significa?', opts: ['Que no hay conexión entre esas dos neuronas', 'Que la conexión es fuertemente excitadora', 'Que la conexión es fuertemente inhibidora', 'Que xi siempre vale 0'], a: 0, exp: 'Ver §10.4.' },
        { q: 'En la fórmula sumaj = Σ(i=0 a n) wij·xi, ¿qué representa x0?', opts: ['La salida de la neurona', 'El término de bias, fijo en 1', 'El peso más grande de la red', 'El número total de neuronas'], a: 1, exp: 'Ver §20.5 ficha 21.' },
        { q: 'En yj = g(sumaj), ¿qué rol cumple g?', opts: ['Es el número de entradas de la neurona', 'Es el peso del bias', 'Es la función de activación que produce la salida de la neurona a partir de la suma ponderada', 'Es la cantidad de capas ocultas'], a: 2, exp: 'Ver §10.4 y §20.5 ficha 21.' },
        { q: 'Si todos los pesos wij de una neurona valen 0, ¿cuánto vale sumaj sin importar las entradas xi?', opts: ['Siempre 1', 'Depende de las entradas', 'Indefinido', 'Siempre 0'], a: 3, exp: 'Ver §20.5 ficha 21: sin conexiones con peso, la suma ponderada es 0.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿A qué elemento artificial corresponden las dendritas/sinapsis biológicas?', opts: ['A la función de activación g(·)', 'A la salida yj', 'Al soma', 'A las entradas xi con pesos wij'], a: 3, exp: 'Ver §10.4.' },
        { q: '¿A qué elemento artificial corresponde el soma (integración) biológico?', opts: ['A la suma ponderada Σi wij·xi', 'A las entradas xi', 'Al axón', 'A los terminales sinápticos'], a: 0, exp: 'Ver §10.4.' },
        { q: '¿A qué elemento artificial corresponde el umbral de disparo biológico?', opts: ['A la entrada x0 (bias)', 'A la función de activación g(·)', 'Al peso wij', 'A la salida yj'], a: 1, exp: 'Ver §10.4.' },
        { q: '¿A qué elemento artificial corresponden el axón y sus terminales?', opts: ['A la suma ponderada', 'A la función de activación', 'A la salida yj hacia otras neuronas', 'A las entradas xi'], a: 2, exp: 'Ver §10.4.' },
        { q: '¿Qué diferencia a la señal eléctrica de la señal química en la neurona biológica?', opts: ['Ambas son idénticas y viajan por el mismo medio', 'La química viaja por el axón y la eléctrica entre neuronas', 'Ninguna de las dos participa en la transmisión de señales', 'La eléctrica es generada por la neurona y viaja por el axón; la química ocurre entre terminales axónicos de una neurona y dendritas de otra'], a: 3, exp: 'Ver §10.2.' },
        { q: '¿Qué diferencia a las neuronas de entrada de las neuronas ocultas?', opts: ['Las de entrada reciben los estímulos externos; las ocultas generan el procesado y la representación interna de la información', 'Ambas generan la respuesta final del sistema', 'Las ocultas reciben los estímulos externos y las de entrada procesan internamente', 'No existe diferencia funcional entre ellas'], a: 0, exp: 'Ver §10.3.' },
        { q: '¿Qué diferencia a las neuronas ocultas de las neuronas de salida?', opts: ['Ambas reciben los estímulos externos por igual', 'Las ocultas generan la representación interna; las de salida dan la respuesta del sistema', 'Las de salida generan solo representación interna', 'No hay diferencia entre ambas'], a: 1, exp: 'Ver §10.3.' },
        { q: '¿Qué diferencia a una conexión excitadora de una inhibidora?', opts: ['Ambas tienen siempre peso 0', 'La inhibidora tiene Wij > 0 y la excitadora Wij < 0', 'La excitadora tiene Wij > 0; la inhibidora tiene Wij < 0', 'No depende del signo del peso'], a: 2, exp: 'Ver §10.4.' },
        { q: '¿Qué diferencia hay entre lo que codifican los pesos de las conexiones y lo que hacen las neuronas por sí solas?', opts: ['Las neuronas codifican todo el conocimiento y los pesos no aportan nada', 'Ambos son exactamente lo mismo', 'Los pesos solo determinan el número de capas', 'Los pesos codifican el conocimiento de la red; las neuronas son elementos simples que procesan de modo similar a las biológicas'], a: 3, exp: 'Ver §10.3.' },
        { q: '¿Qué diferencia hay entre la cantidad de conexiones del cerebro humano (~10¹⁵) y la definición de una RNA como "gran número de elementos simples con conexiones con pesos"?', opts: ['La RNA imita a pequeña escala la idea biológica de muchísimas conexiones simples que en conjunto dan gran capacidad de procesamiento', 'No guardan ninguna relación entre sí', 'La RNA siempre tiene más conexiones que el cerebro humano', 'El cerebro humano no tiene conexiones, solo neuronas aisladas'], a: 0, exp: 'Ver §10.1 y §10.2.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'En un examen piden mapear las "dendritas" de la neurona biológica al concepto equivalente en una neurona artificial. ¿Qué se debe responder?', opts: ['Las entradas xi con sus pesos wij', 'La función de activación g(·)', 'La salida yj', 'El número de capas ocultas'], a: 0, exp: 'Ver §10.4.' },
        { q: 'Una capa de red recibe directamente lecturas de sensores de temperatura del mundo externo, sin procesarlas previamente. ¿Qué tipo de neurona es esta?', opts: ['Neurona oculta', 'Neurona de entrada', 'Neurona de salida', 'Ninguna de las anteriores'], a: 1, exp: 'Ver §10.3.' },
        { q: 'Una capa intermedia de la red genera una representación interna abstracta de los datos, sin recibir estímulos externos directamente ni dar la respuesta final. ¿Qué tipo de neurona es?', opts: ['Neurona de entrada', 'Neurona de salida', 'Neurona oculta', 'Neurona sensorial'], a: 2, exp: 'Ver §10.3.' },
        { q: 'La última capa de una red da directamente la clasificación final del sistema al usuario. ¿Qué tipo de neurona es?', opts: ['Neurona de entrada', 'Neurona oculta', 'Ninguna, esa capa no tiene tipo definido', 'Neurona de salida'], a: 3, exp: 'Ver §10.3.' },
        { q: 'Un diseñador observa que entre dos neuronas específicas Wij=0. ¿Qué puede concluir sobre esa relación?', opts: ['Que no hay conexión entre esas dos neuronas', 'Que la conexión es muy fuerte', 'Que la conexión es inhibidora', 'Que xi siempre vale 1'], a: 0, exp: 'Ver §10.4.' },
        { q: 'Se necesita que una entrada particular inhiba (desactive) a una neurona cuando está presente. ¿Qué signo debe tener el peso de esa conexión?', opts: ['Positivo', 'Negativo', 'Cero', 'El signo no influye en la activación'], a: 1, exp: 'Ver §10.4: Wij < 0 → inhibidora.' },
        { q: 'Un estudiante afirma en el examen que "las neuronas por sí solas almacenan el conocimiento aprendido, no los pesos de las conexiones". ¿Es correcto según el resumen?', opts: ['Sí, es exactamente lo que dice el resumen', 'Es correcto solo para las neuronas de salida', 'No: son los pesos de las conexiones los que codifican el conocimiento de la red', 'El resumen no menciona dónde reside el conocimiento'], a: 2, exp: 'Ver §10.3.' },
        { q: 'Un estudiante de biología pregunta cómo viaja la información entre dos neuronas distintas (no dentro de una misma neurona). ¿Qué tipo de señal es?', opts: ['Eléctrica, igual que dentro del axón', 'No hay transmisión de información entre neuronas distintas', 'Mecánica, por presión', 'Química, mediante neurotransmisores liberados por los terminales sinápticos'], a: 3, exp: 'Ver §10.2.' },
        { q: 'Para explicarle a un compañero por qué muchas neuronas conectadas en capas dan "un potencial enorme" para resolver problemas, ¿qué idea central del resumen debería usar?', opts: ['Que la combinación de muchos elementos simples conectados en capas multiplica la capacidad de procesamiento del sistema', 'Que cada neurona individual ya resuelve cualquier problema por sí sola', 'Que las capas no aportan ninguna ventaja sobre una sola neurona', 'Que el potencial depende únicamente del bias x0'], a: 0, exp: 'Ver §10.1.' },
        { q: 'Se pide justificar por qué el bias x0 se fija siempre en 1 en la fórmula sumaj = Σ(i=0 a n) wij·xi. ¿Cuál es la explicación correcta?', opts: ['Porque x0 representa una entrada externa variable como las demás', 'Porque x0=1 es el término de bias que permite desplazar el umbral de activación mediante su peso w0j, sin depender de una entrada externa', 'Porque x0 nunca participa en el cálculo de la suma', 'Porque x0 siempre debe ser mayor que el resto de las entradas'], a: 1, exp: 'Ver §10.4 y §20.5 ficha 21.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿Las dendritas ENVÍAN señales de salida o las RECIBEN de otras células?', opts: ['Las envían', 'Las reciben', 'Ni una cosa ni la otra', 'Depende del tipo de neurona'], a: 1, exp: 'Ver §10.2.' },
        { q: '¿El axón RECIBE señales de entrada o TRANSPORTA la señal de salida?', opts: ['Recibe señales de entrada', 'Integra y procesa las señales', 'Transporta la señal de salida hacia los terminales axónicos', 'Libera neurotransmisores directamente'], a: 2, exp: 'Ver §10.2.' },
        { q: '¿El soma se encarga de INTEGRAR las señales o de TRANSPORTARLAS hacia otras neuronas?', opts: ['De transportarlas', 'De ninguna de las dos cosas', 'De liberar neurotransmisores', 'De integrarlas (combinar y procesar)'], a: 3, exp: 'Ver §10.2.' },
        { q: '¿Un peso Wij > 0 es EXCITADOR o INHIBIDOR?', opts: ['Excitador', 'Inhibidor', 'Neutro', 'No tiene efecto sobre la neurona'], a: 0, exp: 'Ver §10.4.' },
        { q: '¿Un peso Wij < 0 es EXCITADOR o INHIBIDOR?', opts: ['Excitador', 'Inhibidor', 'Neutro', 'Depende de xi'], a: 1, exp: 'Ver §10.4.' },
        { q: '¿Es el CONOCIMIENTO de la red el que codifican los PESOS, o son las NEURONAS las que lo codifican?', opts: ['Las neuronas', 'Ninguno de los dos', 'Los pesos de las conexiones', 'El número de capas'], a: 2, exp: 'Ver §10.3.' },
        { q: '¿El bias x0 suele estar FIJO en 1, o VARÍA como las demás entradas?', opts: ['Varía igual que las demás entradas', 'Siempre vale 0', 'Depende de la cantidad de capas', 'Está fijo en 1'], a: 3, exp: 'Ver §10.4 y §20.5 ficha 21.' },
        { q: 'La señal entre los terminales axónicos de una neurona y las dendritas de otra, ¿es ELÉCTRICA o QUÍMICA?', opts: ['Química', 'Eléctrica', 'Ninguna de las dos', 'Ambas simultáneamente y en igual medida'], a: 0, exp: 'Ver §10.2.' },
        { q: 'La señal que viaja por el axón dentro de una misma neurona, ¿es ELÉCTRICA o QUÍMICA?', opts: ['Química', 'Eléctrica', 'No hay señal dentro del axón', 'Depende del tipo de neurona'], a: 1, exp: 'Ver §10.2.' },
        { q: 'En el procesamiento de una neurona, ¿se calcula primero la SUMA PONDERADA o se aplica primero la FUNCIÓN DE ACTIVACIÓN?', opts: ['Primero la función de activación', 'Se aplican simultáneamente sin orden', 'Primero la suma ponderada; luego se le aplica la función de activación', 'Ninguna de las dos se calcula en una neurona'], a: 2, exp: 'Ver §10.4.' }
      ]
    }
  ]
};
