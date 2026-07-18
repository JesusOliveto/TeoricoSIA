// Question bank: Chapter 6 - WEKA (RESUMEN.md lines 465-499)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[6] = {
  title: 'WEKA',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué es WEKA?', opts: ['Un lenguaje de programación para IA', 'Software de aprendizaje automático de código abierto desarrollado por la Universidad de Waikato', 'Una base de datos relacional', 'Un framework de redes neuronales de Google'], a: 1, exp: 'Ver §6.1.' },
        { q: '¿Cómo se puede acceder a WEKA?', opts: ['Solo por interfaz gráfica', 'Solo por consola', 'Por interfaz gráfica, consola o API Java', 'Únicamente mediante llamadas REST'], a: 2, exp: 'Ver §6.1.' },
        { q: '¿Qué tipo de tareas de ML permite hacer WEKA sin programar?', opts: ['Solo clasificación', 'Reglas de asociación, clustering, clasificación, regresión, manipulación de datos y combinación de modelos', 'Solo regresión lineal', 'Solo redes neuronales'], a: 1, exp: 'Ver §6.1.' },
        { q: '¿Qué extensión tienen los archivos de datos nativos de WEKA?', opts: ['.csv', '.json', '.xml', '.arff'], a: 3, exp: 'Ver §6.2.' },
        { q: 'En un archivo ARFF, ¿qué contiene la cabecera?', opts: ['Los resultados del modelo entrenado', 'Declara los atributos y su tipo', 'Solo comentarios', 'Las instancias de test'], a: 1, exp: 'Ver §6.2.' },
        { q: '¿Qué sección de un archivo ARFF contiene las instancias?', opts: ['@header', '@instances', '@data', '@rows'], a: 2, exp: 'Ver §6.2.' },
        { q: '¿Qué entorno de WEKA es una consola para invocar directamente los paquetes con Java?', opts: ['Explorer', 'KnowledgeFlow', 'Experimenter', 'Simple CLI'], a: 3, exp: 'Ver §6.3.' },
        { q: '¿Qué entorno de WEKA automatiza experimentos a gran escala comparando varios algoritmos sobre varios datasets?', opts: ['Experimenter', 'Explorer', 'Simple CLI', 'KnowledgeFlow'], a: 0, exp: 'Ver §6.3.' },
        { q: '¿Qué entorno de WEKA permite construir proyectos de minería de datos mediante diagramas de bloques (flujos de información)?', opts: ['Simple CLI', 'Explorer', 'KnowledgeFlow', 'Experimenter'], a: 2, exp: 'Ver §6.3.' },
        { q: '¿Qué modo de evaluación en Classify evalúa sobre los mismos datos con que se entrenó el modelo?', opts: ['Cross-validation', 'Use training set', 'Percentage split', 'Supplied test set'], a: 1, exp: 'Ver §6.4.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'En el ejemplo de cabecera ARFF del resumen (outlook, temperature, play), ¿cuántos atributos totales declara (incluyendo la clase)?', opts: ['2', '4', '3', '5'], a: 2, exp: 'Cálculo por conteo (capítulo sin fórmulas numéricas). Ver §6.2: outlook, temperature y play.' },
        { q: 'Con Cross-validation k=10 folds, ¿en qué porcentaje aproximado del dataset se entrena en cada iteración?', opts: ['50%', '10%', '100%', '90%'], a: 3, exp: 'Cálculo procedimental sobre k-1 folds. Ver §6.4: entrena con k−1 de 10 = 9 folds = 90%.' },
        { q: 'Con Cross-validation k=5, ¿qué porcentaje del dataset se usa para evaluar (test) en cada una de las 5 iteraciones?', opts: ['80%', '20%', '5%', '100%'], a: 1, exp: 'Cálculo procedimental: 1/5 folds = 20%. Ver §6.4.' },
        { q: 'Un dataset de 200 instancias se evalúa con Percentage split del 70%. ¿Cuántas instancias se destinan a entrenamiento?', opts: ['60', '200', '140', '70'], a: 2, exp: 'Cálculo aritmético simple: 70% de 200 = 140. Ver §6.4.' },
        { q: 'Sobre ese mismo dataset de 200 instancias con Percentage split del 70%, ¿cuántas instancias quedan para test?', opts: ['140', '60', '70', '30'], a: 1, exp: 'Cálculo aritmético simple: 30% de 200 = 60. Ver §6.4.' },
        { q: '¿Cuántos entornos de trabajo distintos tiene WEKA según el resumen (Simple CLI, Explorer, Experimenter, KnowledgeFlow)?', opts: ['3', '6', '4', '5'], a: 2, exp: 'Cálculo por conteo. Ver §6.3.' },
        { q: '¿Cuántas pestañas tiene el entorno Explorer (Preprocess, Classify, Cluster, Associate, Select attributes, Visualize)?', opts: ['6', '4', '5', '8'], a: 0, exp: 'Cálculo por conteo. Ver §6.3.' },
        { q: '¿Cuántos modos de evaluación distintos ofrece la pestaña Classify (Use training set, Cross-validation, Supplied test set, Percentage split)?', opts: ['3', '5', '4', '2'], a: 2, exp: 'Cálculo por conteo. Ver §6.4.' },
        { q: '¿Cuál es la versión estable de WEKA mencionada en el resumen?', opts: ['3.8', '2.9', '4.0', '3.6'], a: 0, exp: 'Cálculo por lectura directa del dato. Ver §6.1.' },
        { q: 'Con Cross-validation k=4 folds, ¿cuántas iteraciones de entrenamiento/evaluación se realizan en total (rotando la parte de test)?', opts: ['1', '8', '2', '4'], a: 3, exp: 'Cálculo procedimental: se realizan tantas iteraciones como folds. Ver §6.4.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿Qué diferencia a Explorer de Experimenter?', opts: ['Son el mismo entorno con distinto nombre', 'Explorer es el entorno visual principal para tareas individuales; Experimenter automatiza comparaciones de varios algoritmos sobre varios datasets', 'Experimenter no permite comparar algoritmos', 'Explorer solo sirve para clustering'], a: 1, exp: 'Ver §6.3.' },
        { q: '¿Qué diferencia a Simple CLI de KnowledgeFlow?', opts: ['Ambos son idénticos, solo cambia el nombre', 'KnowledgeFlow es una consola de texto y Simple CLI usa diagramas', 'Simple CLI no existe en WEKA', 'Simple CLI es una consola de texto para invocar paquetes con Java; KnowledgeFlow es un entorno de diagramas de bloques para flujos de información'], a: 3, exp: 'Ver §6.3.' },
        { q: '¿Qué diferencia a Use training set de Cross-validation como modos de evaluación?', opts: ['Use training set evalúa sobre los mismos datos de entrenamiento (optimista); Cross-validation divide en k partes y rota entrenamiento/evaluación (más robusto)', 'Cross-validation es más optimista que Use training set', 'Son exactamente el mismo modo', 'Use training set requiere un archivo de test separado'], a: 0, exp: 'Ver §6.4.' },
        { q: '¿Qué diferencia a Supplied test set de Percentage split?', opts: ['Ambos requieren un archivo externo', 'Percentage split no separa nada, usa todo el dataset', 'Supplied test set usa un archivo de prueba independiente; Percentage split separa un porcentaje del mismo dataset para test', 'Son sinónimos del mismo modo'], a: 2, exp: 'Ver §6.4.' },
        { q: '¿Qué diferencia a un atributo nominal de uno numérico en un archivo ARFF?', opts: ['No hay diferencia de sintaxis', 'El nominal declara una lista de valores posibles entre llaves; el numérico se declara con la palabra clave numeric', 'El numérico se declara entre llaves', 'El nominal nunca puede ser la clase'], a: 1, exp: 'Ver §6.2.' },
        { q: '¿Por qué Cross-validation se considera más robusto que Use training set con pocos datos?', opts: ['Porque usa menos datos en total', 'Porque no requiere ningún dato de entrenamiento', 'No es más robusto, es simplemente más rápido', 'Porque promedia resultados de varias particiones entrenamiento/evaluación en lugar de evaluar sobre los mismos datos de entrenamiento'], a: 3, exp: 'Ver §6.4.' },
        { q: '¿Qué diferencia hay entre acceder a WEKA por interfaz gráfica y por Simple CLI?', opts: ['La interfaz gráfica ofrece pestañas visuales (Explorer); Simple CLI requiere invocar los paquetes directamente con comandos Java', 'Son exactamente el mismo modo de acceso', 'Simple CLI no permite clasificación', 'La interfaz gráfica no permite clustering'], a: 0, exp: 'Ver §6.1 y §6.3.' },
        { q: '¿En qué se diferencian las pestañas Classify y Cluster del Explorer?', opts: ['Son la misma pestaña', 'Cluster requiere siempre una clase etiquetada', 'Classify se usa para aprendizaje supervisado (con clase conocida); Cluster para aprendizaje no supervisado (sin etiquetas)', 'Classify no permite evaluar modelos'], a: 2, exp: 'Ver §6.3.' },
        { q: '¿Qué diferencia a la cabecera de un archivo ARFF de la sección @data?', opts: ['Ambas contienen lo mismo', '@data declara los tipos de atributo', 'La cabecera contiene las instancias', 'La cabecera declara la estructura (atributos y tipos); @data contiene las instancias concretas'], a: 3, exp: 'Ver §6.2.' },
        { q: '¿Qué diferencia a Percentage split con 70% de otro con 90%?', opts: ['Con 70% se reserva más para test que con 90%; con 90% se reserva más para entrenamiento', 'Ambos dejan el mismo porcentaje para test', 'El de 90% no se puede usar sobre datasets pequeños', 'El porcentaje no afecta la proporción de train/test'], a: 0, exp: 'Ver §6.4.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Un analista tiene un dataset pequeño (50 instancias) y quiere una estimación robusta del rendimiento del modelo sin desperdiciar datos en un test set separado. ¿Qué modo de evaluación en Classify es más apropiado?', opts: ['Use training set', 'Cross-validation', 'Percentage split del 90%', 'Ninguno, WEKA no permite evaluar con pocos datos'], a: 1, exp: 'Ver §6.4: cross-validation es el método más robusto con pocos datos.' },
        { q: 'Un usuario quiere comparar 5 algoritmos de clasificación distintos sobre 3 datasets diferentes de forma automatizada. ¿Qué entorno de WEKA usaría?', opts: ['Simple CLI', 'Explorer', 'Experimenter', 'KnowledgeFlow'], a: 2, exp: 'Ver §6.3.' },
        { q: 'Un usuario quiere diseñar visualmente un flujo de procesamiento de datos con varios bloques conectados (carga, filtrado, clasificación). ¿Qué entorno usaría?', opts: ['KnowledgeFlow', 'Simple CLI', 'Experimenter', 'Explorer, pestaña Classify'], a: 0, exp: 'Ver §6.3.' },
        { q: 'Se tiene un archivo con la cabecera "@attribute outlook {sunny, overcast, rainy}" y "@attribute play {yes, no}". ¿Qué tipo de atributos son outlook y play?', opts: ['Ambos son numéricos', 'outlook es numérico y play es nominal', 'Ninguno de los dos es válido en ARFF', 'Ambos son nominales (declarados con una lista de valores entre llaves)'], a: 3, exp: 'Ver §6.2.' },
        { q: 'Un usuario tiene un archivo separado con instancias nuevas para probar un modelo ya entrenado. ¿Qué modo de evaluación en Classify debería usar?', opts: ['Use training set', 'Percentage split', 'Supplied test set', 'Cross-validation'], a: 2, exp: 'Ver §6.4.' },
        { q: 'Un usuario abre WEKA y quiere primero explorar y preprocesar sus datos antes de clasificar o agrupar. ¿En qué pestaña del Explorer empezaría?', opts: ['Visualize', 'Cluster', 'Classify', 'Preprocess'], a: 3, exp: 'Ver §6.3.' },
        { q: 'Un usuario tiene un dataset de segmentación de clientes SIN etiquetas de clase y quiere descubrir grupos naturales. ¿Qué pestaña del Explorer usaría?', opts: ['Classify', 'Cluster', 'Associate', 'Select attributes'], a: 1, exp: 'Ver §6.3.' },
        { q: 'Se evalúa un modelo con Use training set y da 99% de exactitud, pero al usar Cross-validation da solo 65%. ¿Qué explica mejor esta diferencia?', opts: ['El modelo mejoró durante la evaluación', 'Use training set es optimista porque evalúa sobre los mismos datos con que entrenó; Cross-validation da una estimación más realista', 'Cross-validation siempre subestima el rendimiento sin motivo', 'Son errores de WEKA, ambos deberían dar el mismo valor'], a: 1, exp: 'Ver §6.4.' },
        { q: 'Un usuario necesita invocar un clasificador de WEKA directamente desde un script batch sin abrir ninguna ventana gráfica. ¿Qué entorno usaría?', opts: ['Explorer', 'Experimenter', 'Simple CLI', 'KnowledgeFlow'], a: 2, exp: 'Ver §6.3.' },
        { q: 'Al preparar un archivo ARFF para WEKA, un usuario declara "@attribute play {yes, no}" como último atributo. ¿Qué representa típicamente el último atributo declarado en un archivo de clasificación?', opts: ['La clase a predecir', 'Un identificador único de instancia', 'Un atributo numérico auxiliar', 'Un comentario del dataset'], a: 0, exp: 'Ver §6.2.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿WEKA es software de código ABIERTO o PROPIETARIO/comercial?', opts: ['Propietario', 'Código abierto', 'Depende de la versión', 'Comercial con licencia paga'], a: 1, exp: 'Ver §6.1.' },
        { q: '¿Los archivos de WEKA son de tipo .csv o .arff?', opts: ['.csv', '.txt', '.arff', '.data'], a: 2, exp: 'Ver §6.2.' },
        { q: '¿Cross-validation entrena con k−1 folds y evalúa con 1, o entrena con 1 fold y evalúa con k−1?', opts: ['Entrena con 1 fold y evalúa con k−1', 'Entrena con k−1 folds y evalúa con el fold restante, rotando', 'Entrena y evalúa siempre con todos los folds a la vez', 'No usa folds, es lo mismo que Percentage split'], a: 1, exp: 'Ver §6.4.' },
        { q: '¿Cuál de los cuatro entornos de WEKA es el ideal para experimentos a gran escala comparando varios algoritmos: Explorer o Experimenter?', opts: ['Explorer', 'Ambos son igual de apropiados', 'Ninguno de los dos sirve para eso', 'Experimenter'], a: 3, exp: 'Ver §6.3.' },
        { q: '¿La sección @data de un ARFF contiene la declaración de atributos o las instancias concretas?', opts: ['Las instancias concretas', 'La declaración de atributos', 'Comentarios de documentación', 'El nombre del dataset únicamente'], a: 0, exp: 'Ver §6.2.' },
        { q: '¿"Use training set" da una estimación OPTIMISTA o PESIMISTA del rendimiento del modelo?', opts: ['Pesimista', 'Ninguna, es siempre exacta', 'Optimista (tiende a sobreestimar)', 'Depende del tamaño del dataset, nunca es sesgada'], a: 2, exp: 'Ver §6.4.' },
        { q: '¿Cuántos entornos de trabajo tiene WEKA: 3 o 4?', opts: ['3', '4', '5', '2'], a: 1, exp: 'Ver §6.3.' },
        { q: '¿La pestaña Cluster del Explorer se usa para aprendizaje SUPERVISADO o NO SUPERVISADO?', opts: ['Supervisado', 'Ninguno de los dos, es solo visualización', 'Ambos por igual', 'No supervisado'], a: 3, exp: 'Ver §6.3.' },
        { q: 'En un atributo ARFF nominal, ¿los valores posibles se declaran entre llaves {} o entre corchetes []?', opts: ['Entre llaves {}', 'Entre corchetes []', 'Entre paréntesis ()', 'No se declaran, se infieren automáticamente'], a: 0, exp: 'Ver §6.2.' },
        { q: '¿WEKA fue desarrollado por la Universidad de Waikato (Nueva Zelanda) o el MIT?', opts: ['El MIT', 'La Universidad de Stanford', 'La Universidad de Waikato (Nueva Zelanda)', 'Google Research'], a: 2, exp: 'Ver §6.1.' }
      ]
    }
  ]
};
