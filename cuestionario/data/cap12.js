// Question bank: Chapter 12 - Perceptron (RESUMEN.md lines 1052-1129; calc ficha S20.5 lines 1790-1841, ficha 24)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[12] = {
  title: 'Perceptrón',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Quién inventó el Perceptrón, según la cátedra?', opts: ['Frank Rosenblatt (1957-1958, Cornell Aeronautical Laboratory)', 'Marvin Minsky', 'Warren McCulloch', 'Donald Hebb'], a: 0, exp: 'Ver §12.1.' },
        { q: '¿Qué imita el Perceptrón según la cátedra?', opts: ['A un árbol de decisión', 'A una neurona: toma la suma ponderada de sus entradas y aplica un umbral ajustable', 'A un algoritmo de clustering', 'A una tabla de verdad sin procesamiento'], a: 1, exp: 'Ver §12.1.' },
        { q: '¿Cómo son las conexiones del Perceptrón en cuanto a dirección?', opts: ['Bidireccionales', 'Laterales de inhibición', 'Unidireccionales (feedforward)', 'Recurrentes'], a: 2, exp: 'Ver §12.1.' },
        { q: '¿Para qué tipo de problemas es ideal el Perceptrón?', opts: ['Cualquier problema no lineal', 'Solo problemas de regresión', 'Solo problemas de clustering', 'Problemas linealmente separables'], a: 3, exp: 'Ver §12.1.' },
        { q: '¿Qué tipo de entrenamiento usa el Perceptrón?', opts: ['Supervisado', 'No supervisado', 'Por refuerzo', 'Semi-supervisado'], a: 0, exp: 'Ver §12.1.' },
        { q: '¿Qué representa x0 en la función suma del Perceptrón?', opts: ['La primera entrada real del problema', 'La entrada de umbral/bias, siempre igual a 1', 'El resultado de la función escalón', 'La tasa de aprendizaje'], a: 1, exp: 'Ver §12.2.' },
        { q: '¿Qué función de salida (activación) usa el Perceptrón?', opts: ['Función sigmoide', 'Tangente hiperbólica', 'Función escalón', 'Función lineal sin umbral'], a: 2, exp: 'Ver §12.2.' },
        { q: '¿Qué se obtiene al igualar la suma ponderada a cero?', opts: ['El valor de la tasa de aprendizaje óptima', 'El número de pasadas necesarias para converger', 'La derivada de la función de activación', 'La ecuación de la recta (superficie de decisión) que separa las clases'], a: 3, exp: 'Ver §12.2.' },
        { q: '¿Cuáles son dos ejemplos de compuertas linealmente separables mencionadas en el resumen?', opts: ['AND y OR', 'XOR y XNOR', 'NAND y NOR únicamente', 'Ninguna compuerta lo es'], a: 0, exp: 'Ver §12.2.' },
        { q: 'En Δw = η·(d−y)·x, ¿qué representa η?', opts: ['La salida deseada', 'La tasa de aprendizaje', 'La salida obtenida', 'El vector de entrada'], a: 1, exp: 'Ver §12.3.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'En la traza de la cátedra para el AND (w inicial=[0,0,0], η=0,5, orden (0,0)→0, (0,1)→0, (1,0)→0, (1,1)→1), ¿cuál es la suma ponderada para el patrón (1,1) en la primera pasada?', opts: ['0,5', '0', '1', '-1'], a: 1, exp: 'Ver §20.5 ficha 24: suma=w0·1+w1·1+w2·1=0 con w=[0,0,0].' },
        { q: 'Con esa suma=0 exactamente para (1,1), ¿cuál es la salida y según la función escalón (y=1 solo si suma>0)?', opts: ['1', '-1', '0', 'Indeterminado'], a: 2, exp: 'Ver §12.2: suma=0 no es estrictamente mayor a 0, así que y=0.' },
        { q: 'Como d=1 y y=0 para (1,1), hay error. Aplicando Δw=η·(d−y)·x con η=0,5 y x=[1,1,1], ¿cuál es Δw?', opts: ['[1; 1; 1]', '[-0,5; -0,5; -0,5]', '[0; 0; 0]', '[0,5; 0,5; 0,5]'], a: 3, exp: 'Ver §20.5 ficha 24.' },
        { q: 'Tras aplicar ese ajuste, ¿cuál es el vector de pesos w al finalizar la primera pasada completa?', opts: ['[0,5; 0,5; 0,5]', '[0; 0; 0]', '[1; 1; 1]', '[-0,5; 0,5; 0,5]'], a: 0, exp: 'Ver §12.3.' },
        { q: 'En la segunda pasada, para el patrón (0,0) con w=[0,5; 0,5; 0,5], ¿cuál es la salida y?', opts: ['0', '1 (y hay error, porque d=0)', '-1', '0,5'], a: 1, exp: 'Ver §12.2 y §12.3: suma=0,5>0, así que y=1.' },
        { q: '¿Cuántas pasadas completas necesita este ejemplo del AND para converger (error 0 en los cuatro patrones)?', opts: ['4', '5', '6', '10'], a: 2, exp: 'Ver §12.3.' },
        { q: '¿Cuál es el vector de pesos final w al converger, según la traza de la cátedra?', opts: ['[0; 1; 0,5]', '[-0,5; 1; 1]', '[1; -1; 0,5]', '[-1; 1; 0,5]'], a: 3, exp: 'Ver §12.3 y §20.5 ficha 24.' },
        { q: 'Con w=[-1; 1; 0,5], ¿cuál es la ecuación de la recta separadora w0+w1x1+w2x2=0?', opts: ['x1+0,5x2−1=0', '−x1+0,5x2+1=0', 'x1−0,5x2−1=0', '0,5x1+x2−1=0'], a: 0, exp: 'Ver §20.5 ficha 24.' },
        { q: 'Verificando el punto (1,1) en esa recta (suma=−1+1·1+0,5·1), ¿qué resultado y qué clase asigna la red?', opts: ['−0,5 → clase 0', '0,5 → clase 1 (correcto, AND(1,1)=1)', '0 → clase 0', '1,5 → clase 1'], a: 1, exp: 'Ver §12.3.' },
        { q: 'Verificando el punto (0,1) en la misma recta (suma=−1+1·0+0,5·1), ¿qué clase asigna la red?', opts: ['Clase 1 (suma=0,5>0)', 'Clase 1 (suma=1)', 'Clase 0 (suma=−0,5, no es mayor a 0)', 'No se puede evaluar'], a: 2, exp: 'Ver §12.3: coincide con AND(0,1)=0.' },
        { q: 'Con Wk = [1 8 6], error εk = 2, α = 0,5 y entrada Xk = [3 1 8], ¿qué vector resulta de aplicar Wk+1 = Wk + α·εk·Xk?', opts: ['[2,5 8,5 10]', '[4 9 14]', '[7 10 22]', '[4 9 22]'], a: 1, exp: 'Ver §12.3: α·εk = 0,5·2 = 1, entonces Wk+1 = [1+3, 8+1, 6+8] = [4 9 14]. En la notación del resumen εk es (d − y): la regla es Δw = α·(d−y)·x. Errores típicos: olvidar εk da [2,5 8,5 10]; olvidar α da [7 10 22].' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿Qué diferencia hay entre resolver el AND y el XOR con un Perceptrón simple?', opts: ['Ambos son resolubles de la misma manera', 'El XOR es más fácil de resolver que el AND', 'El AND es linealmente separable y resoluble; el XOR no lo es, no existe ninguna recta que separe sus clases', 'Ninguno de los dos es resoluble con un Perceptrón'], a: 2, exp: 'Ver §12.2 y §12.4.' },
        { q: '¿Qué diferencia hay entre el caso "no hay error" (d=y) y el caso "hay error" (d≠y) durante el entrenamiento?', opts: ['En ambos casos se ajustan los pesos por igual', 'Solo se ajustan los pesos cuando d=y', 'Los pesos nunca cambian durante el entrenamiento', 'Solo cuando hay error (d≠y) se ajustan los pesos; si d=y, w permanece igual'], a: 3, exp: 'Ver §12.3.' },
        { q: '¿Qué diferencia hay entre el hiperplano del OR de n variables y el del AND de n variables?', opts: ['El OR usa x1+...+xn−0,5=0 (0 solo en el origen); el AND usa x1+...+xn−(n−0,5)=0 (1 solo en (1,...,1))', 'Ambos usan exactamente la misma ecuación', 'El AND no tiene ningún hiperplano que lo separe', 'El OR no es linealmente separable'], a: 0, exp: 'Ver §12.4.' },
        { q: '¿Qué diferencia hay entre un Perceptrón de 2 entradas y uno de 3 o más entradas en cuanto a la superficie de decisión?', opts: ['En ambos casos es siempre una recta', 'Con 2 entradas la superficie es una recta en el plano; con 3 o más, es un hiperplano', 'Con 3 o más entradas ya no existe superficie de decisión', 'Con 2 entradas es un hiperplano y con 3 una recta'], a: 1, exp: 'Ver §12.4.' },
        { q: '¿Qué diferencia hay entre el hiperplano del AND de 2 variables (x1+x2−1,5=0) y el del AND de 3 variables (x1+x2+x3−2,5=0)?', opts: ['Ambos usan el mismo término independiente sin importar n', 'El de 3 variables no tiene término independiente', 'El término independiente cambia según n (n−0,5), acorde a la cantidad de variables de la compuerta', 'El de 2 variables no es válido según la cátedra'], a: 2, exp: 'Ver §12.4.' },
        { q: '¿Qué diferencia hay entre el paso 1 (inicializar pesos) y el paso 3 (ajustar pesos si hay error) del algoritmo de entrenamiento?', opts: ['Ambos pasos ocurren una sola vez', 'El paso 3 ocurre antes que el paso 1', 'No hay ninguna diferencia entre ambos pasos', 'El paso 1 ocurre una sola vez al inicio con valores aleatorios; el paso 3 se repite cada vez que hay un error durante el entrenamiento'], a: 3, exp: 'Ver §12.3.' },
        { q: '¿Qué diferencia hay entre usar un único Perceptrón para el XOR y combinar dos perceptrones (AND y OR) para resolverlo?', opts: ['Un único Perceptrón falla siempre ante el XOR; dos perceptrones combinados sí pueden resolverlo, aunque con el inconveniente de no poder ajustar bien los pesos entre ellos', 'Un único Perceptrón siempre resuelve el XOR sin problema', 'Dos perceptrones combinados nunca pueden resolver el XOR', 'No hay ninguna diferencia entre ambos enfoques'], a: 0, exp: 'Ver §12.4.' },
        { q: '¿Qué diferencia hay entre el criterio de la función escalón cuando suma>0 y cuando suma≤0 (incluyendo suma=0)?', opts: ['Si suma=0 la salida siempre es 1', 'Si suma>0 la salida es 1; si suma≤0 (incluido suma=0 exacto) la salida es 0', 'La función escalón nunca depende del signo de la suma', 'Si suma>0 la salida es 0'], a: 1, exp: 'Ver §12.2.' },
        { q: '¿Qué diferencia hay entre el caso y=1,d=1 (o y=0,d=0) y el caso y≠d durante el entrenamiento?', opts: ['Ambos casos requieren el mismo ajuste de pesos', 'El primer caso siempre requiere ajuste', 'En el primer caso no hay error y w no cambia; en el segundo hay error y se aplica Δw=η(d−y)x', 'El segundo caso nunca requiere ajuste'], a: 2, exp: 'Ver §12.3.' },
        { q: '¿Qué diferencia hay entre la condición de parada del algoritmo al entrenar con el AND y al entrenar con el XOR?', opts: ['Ambos casos convergen en la misma cantidad de pasadas', 'Con el XOR el algoritmo converge más rápido que con el AND', 'Ninguno de los dos casos converge nunca', 'Con el AND el algoritmo converge (termina) tras varias pasadas; con el XOR nunca termina, los pesos giran en círculos'], a: 3, exp: 'Ver §12.3 y §12.4.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Se quiere diseñar un Perceptrón simple para resolver la compuerta OR de 2 entradas. ¿Es posible?', opts: ['No, el OR nunca es linealmente separable', 'Solo es posible con 3 o más entradas', 'No, se necesita backpropagation', 'Sí, el OR es linealmente separable'], a: 3, exp: 'Ver §12.2.' },
        { q: 'Un ingeniero necesita resolver el XOR con un único Perceptrón simple. ¿Es posible?', opts: ['No, se necesitan al menos dos perceptrones combinados (o backpropagation)', 'Sí, siempre que se ajuste bien η', 'Sí, con suficientes pasadas de entrenamiento', 'Sí, si se usa un umbral distinto de 0'], a: 0, exp: 'Ver §12.4.' },
        { q: 'Un desarrollador entrena un Perceptrón sobre un dataset y, tras muchísimas pasadas, el error nunca llega a 0 con ningún conjunto de pesos. ¿Qué explicación da la cátedra para este comportamiento?', opts: ['El valor de η siempre está mal elegido', 'El problema no es linealmente separable (no existe ninguna recta/hiperplano que separe las clases)', 'Los datos deben tener un error de carga', 'El Perceptrón nunca puede fallar en converger'], a: 1, exp: 'Ver §12.4.' },
        { q: 'Aplicando el hiperplano del AND de 3 variables x1+x2+x3−2,5=0 al punto (1,1,1), ¿qué resultado y qué clase se obtiene?', opts: ['−0,5 → clase 0', '0 → clase 0', '0,5 → clase 1 (correcto, AND(1,1,1)=1)', '2,5 → clase 1'], a: 2, exp: 'Ver §12.4.' },
        { q: 'Aplicando el mismo hiperplano x1+x2+x3−2,5=0 al punto (1,1,0), ¿qué resultado y qué clase se obtiene?', opts: ['0,5 → clase 1', '2 → clase 1', '0 → clase 0', '−0,5 → clase 0 (correcto, AND(1,1,0)=0)'], a: 3, exp: 'Ver §12.4.' },
        { q: 'Un estudiante afirma que "el AND de 3 variables NO es linealmente separable porque el único caso con salida 1 es cuando todas las entradas son 1". ¿Es correcto este razonamiento según la cátedra?', opts: ['No: un único punto positivo en un vértice del cubo siempre puede separarse con un hiperplano; el AND de n variables SÍ es linealmente separable', 'Sí, ese razonamiento es correcto según la teoría estándar', 'Es correcto solo si n es mayor a 3', 'El AND nunca es linealmente separable para ningún n'], a: 0, exp: 'Ver §12.4.' },
        { q: 'Se presenta al Perceptrón ya entrenado con w=[-1; 1; 0,5] (el ejemplo del AND) el patrón (1,0). ¿Cuál es la salida?', opts: ['1 (suma=1,5)', '0 (suma=−1+1+0=0, no mayor a 0; coincide con AND(1,0)=0)', '-1', '0,5'], a: 1, exp: 'Ver §12.3.' },
        { q: 'Un analista necesita una salida 1 solo cuando exactamente una de dos entradas vale 1 (comportamiento XOR). ¿Qué arquitectura mínima necesita, según la cátedra?', opts: ['Un único Perceptrón con umbral ajustado', 'Un Perceptrón con más entradas alcanza', 'Dos perceptrones combinados (o backpropagation), no un único Perceptrón simple', 'Ninguna arquitectura puede resolver esto'], a: 2, exp: 'Ver §12.4.' },
        { q: 'Al graficar los puntos de una tabla de verdad de 2 variables, un ingeniero observa que ninguna recta puede separar las dos clases. ¿Qué tabla de verdad clásica genera este patrón, según la cátedra?', opts: ['AND', 'OR', 'NAND', 'XOR (o su negación, XNOR)'], a: 3, exp: 'Ver §12.4.' },
        { q: 'Un diseñador quiere resolver el OR de 4 variables con un único Perceptrón simple. ¿Es posible?', opts: ['Sí, el OR de n variables siempre es linealmente separable (0 solo en el origen)', 'No, el OR de más de 2 variables nunca es separable', 'Solo es posible con exactamente 2 variables', 'No, se necesita backpropagation'], a: 0, exp: 'Ver §12.4.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿El Perceptrón usa función de activación ESCALÓN o SIGMOIDE?', opts: ['Escalón', 'Sigmoide', 'Tangente hiperbólica', 'Lineal sin umbral'], a: 0, exp: 'Ver §12.2.' },
        { q: '¿El Perceptrón es MONOCAPA o MULTICAPA?', opts: ['Multicapa', 'Monocapa', 'Depende del problema', 'No tiene capas definidas'], a: 1, exp: 'Ver §12.1.' },
        { q: '¿Las conexiones del Perceptrón son UNIDIRECCIONALES o BIDIRECCIONALES?', opts: ['Bidireccionales', 'Laterales de inhibición', 'Unidireccionales', 'Recurrentes'], a: 2, exp: 'Ver §12.1.' },
        { q: '¿El entrenamiento del Perceptrón es SUPERVISADO o NO SUPERVISADO?', opts: ['No supervisado', 'Por refuerzo', 'No requiere entrenamiento', 'Supervisado'], a: 3, exp: 'Ver §12.1.' },
        { q: 'Si la suma ponderada da exactamente 0, ¿la salida escalón es 1 o 0?', opts: ['0 (la condición exige suma estrictamente mayor a 0)', '1', '-1', 'Indeterminado'], a: 0, exp: 'Ver §12.2.' },
        { q: '¿Puede un Perceptrón simple resolver el XOR: SÍ o NO?', opts: ['Sí, siempre', 'No', 'Sí, pero solo con η grande', 'Sí, pero solo con más de 100 pasadas'], a: 1, exp: 'Ver §12.4.' },
        { q: '¿El AND de n variables ES o NO ES linealmente separable?', opts: ['NO es linealmente separable', 'Depende de si n es par o impar', 'SÍ es linealmente separable', 'Solo lo es para n=2'], a: 2, exp: 'Ver §12.4.' },
        { q: '¿El OR de n variables ES o NO ES linealmente separable?', opts: ['NO es linealmente separable', 'Solo lo es para n=2', 'Depende del orden de las entradas', 'SÍ es linealmente separable'], a: 3, exp: 'Ver §12.4.' },
        { q: 'En Δw=η·(d−y)·x, ¿se ajustan los pesos SIEMPRE en cada patrón, o SOLO CUANDO HAY ERROR (d≠y)?', opts: ['Solo cuando hay error (d≠y)', 'Siempre, en cada patrón presentado', 'Solo al final de cada pasada completa', 'Nunca se ajustan automáticamente'], a: 0, exp: 'Ver §12.3.' },
        { q: 'Con el AND de 2 entradas y η=0,5 arrancando en w=[0,0,0], ¿el algoritmo CONVERGE (termina) o NUNCA TERMINA?', opts: ['Nunca termina', 'Converge (termina en 6 pasadas)', 'Termina, pero solo con más de 100 pasadas', 'No se puede determinar'], a: 1, exp: 'Ver §12.3.' }
      ]
    }
  ]
};
