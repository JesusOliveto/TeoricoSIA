// Question bank: Chapter 13 - Redes multicapa - Backpropagation (RESUMEN.md lines 1130-1253; calc ficha S20.5 lines 1790-1841, fichas 25-27)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[13] = {
  title: 'Redes multicapa — Backpropagation',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Cuáles son las capas típicas de una red multicapa entrenada con backpropagation?', opts: ['Solo entrada y salida', 'Entrada, oculta(s) y salida', 'Solo capas ocultas', 'Entrada, memoria y salida'], a: 1, exp: 'Ver §13.1.' },
        { q: '¿Qué representan los pesos W1 en la red?', opts: ['Las conexiones entre la capa oculta y la de salida', 'El umbral de cada neurona', 'Las conexiones entre la capa de entrada y la oculta', 'La tasa de aprendizaje de la red'], a: 2, exp: 'Ver §13.1.' },
        { q: '¿Qué representan los pesos W2 en la red?', opts: ['Las conexiones entre la capa de entrada y la oculta', 'El error total de la red', 'El número de neuronas ocultas', 'Las conexiones entre la capa oculta y la de salida'], a: 3, exp: 'Ver §13.1.' },
        { q: '¿Dónde está codificado el conocimiento de la red, según la cátedra?', opts: ['En los pesos de las conexiones', 'En la cantidad de capas ocultas', 'En el valor de α únicamente', 'En las activaciones de la capa de entrada'], a: 0, exp: 'Ver §13.1.' },
        { q: '¿Qué determina la salida de la red?', opts: ['El valor inicial aleatorio de los pesos', 'Los niveles de activación de la capa de salida', 'La cantidad de pares de entrenamiento', 'El valor de la tasa de aprendizaje'], a: 1, exp: 'Ver §13.1.' },
        { q: '¿Qué tipo de funciones de activación necesita Backpropagation, a diferencia del Perceptrón?', opts: ['Solo funciones escalón', 'Funciones discretas no derivables', 'Funciones continuas y diferenciables (para poder derivar el error)', 'No necesita ninguna función de activación'], a: 2, exp: 'Ver §13.3.' },
        { q: '¿Entre qué rango de valores produce resultados la función sigmoide?', opts: ['Entre −1 y 1', 'Entre −∞ y +∞', 'Entre 0 y 100', 'Entre 0 y 1'], a: 3, exp: 'Ver §13.3.' },
        { q: '¿Entre qué rango de valores produce resultados la tangente hiperbólica?', opts: ['Entre −1 y 1', 'Entre 0 y 1', 'Entre 0 y 100', 'Entre −∞ y 0'], a: 0, exp: 'Ver §13.3.' },
        { q: '¿Cuántas etapas requiere cada par entrada/salida durante el entrenamiento?', opts: ['Una sola etapa', 'Dos: paso hacia adelante y paso hacia atrás', 'Tres etapas', 'Cuatro etapas'], a: 1, exp: 'Ver §13.4.' },
        { q: '¿En qué consiste el "paso hacia atrás" del algoritmo?', opts: ['Propagar las activaciones desde la entrada hasta la salida', 'Inicializar los pesos con valores aleatorios', 'Comparar la salida con el objetivo, calcular el error y ajustar los pesos propagándolo hacia las capas anteriores', 'Elegir la cantidad de neuronas ocultas'], a: 2, exp: 'Ver §13.4.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'En un paso hacia adelante ya completado para un par de entrenamiento tipo XOR (x1=1, x2=0, d=1) en una red 2-2-1, las activaciones ocultas resultan h1=0,5 y h2=0,5 porque cada suma ponderada dio exactamente 0. Usando g(s)=1/(1+e−s), ¿qué valor confirma g(0)?', opts: ['1', '0', '0,5', 'e'], a: 2, exp: 'Ver §13.3 y §20.5 ficha 25: g(0)=1/(1+e⁰)=1/2=0,5.' },
        { q: 'Con los pesos oculta→salida w20=0 (bias), w21=0,4 y w22=−0,4, y h1=h2=0,5, ¿cuál es la suma ponderada de la neurona de salida?', opts: ['0,4', '0,8', '-0,4', '0'], a: 3, exp: 'Ver §20.5 ficha 21: suma=0·1+0,4·0,5+(−0,4)·0,5=0,2−0,2=0.' },
        { q: 'Con esa suma=0 en la neurona de salida, ¿cuál es la salida y de la red (usando sigmoide)?', opts: ['0,5', '0', '1', '0,25'], a: 0, exp: 'Ver §13.3: g(0)=0,5.' },
        { q: 'Con d=1 e y=0,5, ¿cuál es δy = (d−y)·y·(1−y)?', opts: ['0,25', '0,125', '0,5', '0,0625'], a: 1, exp: 'Ver §20.5 ficha 26: (1−0,5)·0,5·(1−0,5)=0,5·0,25=0,125.' },
        { q: 'Con δy=0,125 y el peso w21=0,4 (h1→salida), ¿cuál es δh1 = δy·w21·h1·(1−h1)?', opts: ['0,05', '0,025', '0,0125', '0,25'], a: 2, exp: 'Ver §20.5 ficha 26: 0,125·0,4·0,5·0,5=0,0125.' },
        { q: 'Con δy=0,125 y el peso w22=−0,4 (h2→salida), ¿cuál es δh2 = δy·w22·h2·(1−h2)?', opts: ['0,0125', '-0,05', '0,05', '-0,0125'], a: 3, exp: 'Ver §20.5 ficha 26: 0,125·(−0,4)·0,5·0,5=−0,0125.' },
        { q: 'Con δy=0,125 (ya calculado), α=1 (elegida para este ejemplo) y h0=1 (bias oculto), aplicando W2 ⇐ W2+α·δy·h partiendo de w20=0, ¿cuál es el nuevo w20?', opts: ['0,125', '0,0625', '1', '0'], a: 0, exp: 'Ver §20.5 ficha 26: Δw20=1·0,125·1=0,125.' },
        { q: 'Con δy=0,125, α=1, h1=0,5 y w21=0,4 antes del ajuste, ¿cuál es el nuevo w21 tras W2 ⇐ W2+α·δy·h?', opts: ['0,4125', '0,4625', '0,3375', '0,5'], a: 1, exp: 'Ver §20.5 ficha 26: 0,4+1·0,125·0,5=0,4+0,0625=0,4625.' },
        { q: 'Con δh1=0,0125 (ya calculado), x0=1 (bias de entrada), α=1 y el peso bias→h1 en W1 antes del ajuste = 0,1, ¿cuál es su nuevo valor tras W1 ⇐ W1+α·δh·x?', opts: ['0,0875', '0,125', '0,1125', '0,1'], a: 2, exp: 'Ver §20.5 ficha 26: 0,1+1·0,0125·1=0,1125.' },
        { q: 'Según el algoritmo detallado de la cátedra, en el paso hacia atrás, ¿qué matriz de pesos se ajusta PRIMERO?', opts: ['W1 (entrada→oculta)', 'Ambas al mismo tiempo', 'Ninguna, se ajustan en la siguiente pasada', 'W2 (oculta→salida)'], a: 3, exp: 'Ver §13.5: se ajusta primero W2 y después W1.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: 'Comparando Perceptrón y Backpropagation, ¿en cuántas capas difiere su estructura?', opts: ['Ambos usan exactamente la misma cantidad de capas', 'El Perceptrón usa más capas ocultas que Backpropagation', 'Ninguno de los dos tiene capas definidas', 'El Perceptrón es monocapa (sin ocultas); Backpropagation usa múltiples capas ocultas'], a: 3, exp: 'Ver §13.6.' },
        { q: '¿Qué diferencia hay entre los tipos de problemas que resuelve cada uno?', opts: ['El Perceptrón solo resuelve problemas linealmente separables; Backpropagation resuelve problemas no lineales', 'Ambos resuelven exactamente los mismos problemas', 'Backpropagation solo resuelve problemas lineales', 'El Perceptrón resuelve cualquier problema no lineal'], a: 0, exp: 'Ver §13.6.' },
        { q: '¿Qué diferencia hay entre la función de activación de cada uno?', opts: ['Ambos usan la función escalón', 'El Perceptrón usa escalón; Backpropagation usa sigmoide o tangente hiperbólica (continuas y diferenciables)', 'Backpropagation usa escalón y el Perceptrón sigmoide', 'Ninguno de los dos usa función de activación'], a: 1, exp: 'Ver §13.6.' },
        { q: '¿Qué diferencia hay en cómo se ajustan los pesos en cada uno?', opts: ['Ambos ajustan los pesos exactamente de la misma manera', 'Backpropagation ajusta los pesos sin usar el error', 'En el Perceptrón el ajuste es directo con el error; en Backpropagation el error se propaga hacia atrás capa por capa', 'El Perceptrón propaga el error hacia atrás y Backpropagation no'], a: 2, exp: 'Ver §13.6.' },
        { q: '¿Qué tienen en común el Perceptrón y Backpropagation en cuanto al tipo de entrenamiento?', opts: ['El Perceptrón es supervisado y Backpropagation no supervisado', 'Ambos son no supervisados', 'Solo Backpropagation es supervisado', 'Ambos son supervisados'], a: 3, exp: 'Ver §13.6.' },
        { q: '¿Qué diferencia hay entre los pesos W1 y W2 de una red backpropagation?', opts: ['W1 conecta entrada con oculta; W2 conecta oculta con salida', 'Ambos conectan los mismos pares de capas', 'W2 conecta entrada con oculta y W1 oculta con salida', 'No existe diferencia entre ambos'], a: 0, exp: 'Ver §13.1.' },
        { q: '¿Qué diferencia hay entre el paso hacia adelante y el paso hacia atrás?', opts: ['Ambos pasos hacen exactamente lo mismo', 'El paso hacia adelante propaga activaciones de entrada a salida; el paso hacia atrás compara la salida con el objetivo y ajusta los pesos propagando el error', 'El paso hacia atrás propaga activaciones y el hacia adelante ajusta pesos', 'El paso hacia adelante solo ocurre una vez en todo el entrenamiento'], a: 1, exp: 'Ver §13.4.' },
        { q: '¿Qué diferencia hay entre la sigmoide y la tangente hiperbólica en cuanto a su rango de salida?', opts: ['Ambas producen el mismo rango de valores', 'La tangente hiperbólica va de 0 a 1 y la sigmoide de −1 a 1', 'La sigmoide va de 0 a 1; la tangente hiperbólica va de −1 a 1', 'Ninguna de las dos tiene un rango definido'], a: 2, exp: 'Ver §13.3.' },
        { q: '¿Qué diferencia hay entre δy y δh en el algoritmo de backpropagation?', opts: ['Ambos se calculan de manera idéntica sin relación entre sí', 'δh se calcula antes que δy', 'δy se calcula a partir de δh', 'δy es el error de la neurona de salida; δh se deriva de δy hacia cada neurona oculta, proporcional al peso que la conecta'], a: 3, exp: 'Ver §13.5 y §20.5 ficha 26.' },
        { q: '¿Qué diferencia hay entre el mínimo local de Backpropagation y la limitación de separabilidad lineal del Perceptrón?', opts: ['El mínimo local es un fenómeno propio del descenso por gradiente que el Perceptrón no tiene; el límite del Perceptrón es la separabilidad lineal, una limitación distinta', 'Ambas son exactamente la misma limitación', 'El Perceptrón también puede caer en un mínimo local', 'Backpropagation también está limitado a problemas linealmente separables'], a: 0, exp: 'Ver §13.5.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Se necesita resolver el problema XOR, que no es linealmente separable. ¿Qué arquitectura mínima de backpropagation lo resuelve, según la cátedra?', opts: ['Una red 2-2-1 (2 entradas, 2 ocultas, 1 salida)', 'Una red de una sola capa (sin ocultas)', 'Un Perceptrón simple con más entradas', 'No es posible resolver el XOR con backpropagation'], a: 0, exp: 'Ver §13.5.' },
        { q: 'Un desarrollador inicializa los pesos con valores aleatorios pequeños entre −0,1 y 0,1, tal como indica el algoritmo. ¿Es esto correcto?', opts: ['No, deben inicializarse siempre en exactamente 0', 'Sí, así lo indica el paso 2 del algoritmo detallado', 'No, deben inicializarse entre −1 y 1', 'Los pesos no se inicializan, se calculan directamente'], a: 1, exp: 'Ver §13.5.' },
        { q: 'Durante el entrenamiento, las salidas de la red quedan clavadas cerca de 0,5 y el error deja de bajar pese a seguir iterando. ¿Qué fenómeno describe esto, según la cátedra?', opts: ['La separabilidad lineal del problema', 'Un error de inicialización de W1 exclusivamente', 'Un mínimo local', 'La convergencia exitosa del algoritmo'], a: 2, exp: 'Ver §13.5.' },
        { q: 'Para elegir el número de neuronas ocultas con Baum-Haussler, con Nentren=100, Etolerable=0,05, Nentrada=4 y Nsalida=1, ¿cuál es la cota Noculta?', opts: ['Noculta ≤ 5', 'Noculta ≤ 20', 'Noculta ≤ 0,05', 'Noculta ≤ 1 (100·0,05 / (4+1) = 1)'], a: 3, exp: 'Ver §20.5 ficha 27.' },
        { q: 'Con Nentren=200, Etolerable=0,1, Nentrada=3 y Nsalida=2, ¿cuál es la cota Noculta según Baum-Haussler?', opts: ['Noculta ≤ 4 (200·0,1 / (3+2) = 4)', 'Noculta ≤ 20', 'Noculta ≤ 2', 'Noculta ≤ 0,1'], a: 0, exp: 'Ver §20.5 ficha 27.' },
        { q: 'Un diseñador decide usar la función escalón como activación en una red multicapa entrenada con backpropagation, para mantener coherencia con el Perceptrón. ¿Es correcto según la cátedra?', opts: ['Sí, es la opción recomendada', 'No, Backpropagation necesita funciones continuas y diferenciables; la escalón no lo es', 'Sí, siempre que se use tangente hiperbólica también', 'Es indistinto qué función de activación se use'], a: 1, exp: 'Ver §13.3.' },
        { q: 'Un equipo repite el entrenamiento con todos los pares de entrada/salida hasta que el error resulta aceptable en todos ellos, no solo en uno. ¿Coincide esto con el algoritmo de la cátedra?', opts: ['No, basta con un solo par para terminar el entrenamiento', 'No, el algoritmo nunca verifica el error de todos los pares', 'Sí, se repite con todos los pares hasta que el error sea aceptable', 'Solo se verifica el error del último par presentado'], a: 2, exp: 'Ver §13.5.' },
        { q: 'Se detecta que la suma ponderada de una neurona de salida es 10. Usando la sigmoide, ¿a qué valor se aproxima su activación, según la traza de la cátedra?', opts: ['Exactamente 1', '0,5', '≈0,0001 (satura hacia 0)', '≈0,9999 (satura hacia 1)'], a: 3, exp: 'Ver §13.3.' },
        { q: 'Ahora la suma ponderada de esa neurona es −10. ¿A qué valor se aproxima su activación?', opts: ['≈0,0000 (satura hacia 0)', '≈0,9999 (satura hacia 1)', 'Exactamente 0,5', 'Exactamente −1'], a: 0, exp: 'Ver §13.3.' },
        { q: 'Un equipo entrena una red y el error deja de reducirse notablemente pese a no ser 0, aunque los pesos siguen cambiando levemente en cada iteración. ¿Qué le sugeriría verificar la cátedra como posible causa?', opts: ['Que el problema no es linealmente separable', 'Que la red cayó en un mínimo local', 'Que los pesos se inicializaron en exactamente 0', 'Que la red tiene demasiadas pocas capas de entrada'], a: 1, exp: 'Ver §13.5.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿Backpropagation necesita funciones de activación CONTINUAS Y DIFERENCIABLES, o puede usar la función ESCALÓN igual que el Perceptrón?', opts: ['La función escalón, igual que el Perceptrón', 'Continuas y diferenciables (NO la función escalón)', 'Cualquier función, incluso discretas', 'No necesita ninguna función de activación'], a: 1, exp: 'Ver §13.3.' },
        { q: '¿La sigmoide da valores entre 0 y 1, o entre −1 y 1?', opts: ['Entre −1 y 1', 'Entre −∞ y +∞', 'Entre 0 y 1 (la tangente hiperbólica es la que va de −1 a 1)', 'Entre 0 y 100'], a: 2, exp: 'Ver §13.3.' },
        { q: '¿g(0) en la función sigmoide es 0,5 o 1?', opts: ['1', '0', 'Indefinido', '0,5'], a: 3, exp: 'Ver §13.3 y §20.5 ficha 25.' },
        { q: 'En el paso hacia atrás, ¿se ajusta PRIMERO W2 (oculta→salida) o PRIMERO W1 (entrada→oculta)?', opts: ['Primero W2, después W1', 'Primero W1, después W2', 'Ambas al mismo tiempo, sin orden definido', 'Ninguna se ajusta durante el paso hacia atrás'], a: 0, exp: 'Ver §13.5.' },
        { q: '¿La derivada de la sigmoide se expresa como g\'(s)=g(s)·(1−g(s)), o mediante una fórmula totalmente independiente de g(s)?', opts: ['Mediante una fórmula independiente de g(s)', 'Como g(s)·(1−g(s)), usando la propia salida de la sigmoide', 'Como 1−g(s) únicamente', 'La sigmoide no tiene derivada'], a: 1, exp: 'Ver §13.3 y §20.5 ficha 25.' },
        { q: '¿Los pesos se inicializan en exactamente 0, o con valores aleatorios pequeños entre −0,1 y 0,1?', opts: ['En exactamente 0', 'Con valores aleatorios entre −1 y 1', 'Con valores aleatorios pequeños entre −0,1 y 0,1', 'Con el valor de la tasa de aprendizaje'], a: 2, exp: 'Ver §13.5.' },
        { q: '¿Las unidades umbral x0 y h0 CAMBIAN durante el entrenamiento, o PERMANECEN FIJAS en 1?', opts: ['Cambian en cada pasada junto con los demás pesos', 'Solo x0 permanece fija, h0 cambia', 'Solo h0 permanece fija, x0 cambia', 'Permanecen fijas en 1, nunca deben cambiar'], a: 3, exp: 'Ver §13.5.' },
        { q: 'En la regla de Baum-Haussler, ¿el denominador corroborado es una SUMA (Nentrada+Nsalida), o un PRODUCTO?', opts: ['Una suma (corroborada); el producto es solo una lectura ambigua de las slides', 'Un producto (Nentrada·Nsalida)', 'Ni suma ni producto: una resta', 'El denominador siempre vale 1'], a: 0, exp: 'Ver §13.2 y §20.5 ficha 27.' },
        { q: '¿Caer en un mínimo local es un problema propio del PERCEPTRÓN, o del DESCENSO POR GRADIENTE de Backpropagation?', opts: ['Del Perceptrón únicamente', 'Del descenso por gradiente de Backpropagation', 'De ambos por igual', 'No es un problema mencionado por la cátedra'], a: 1, exp: 'Ver §13.5.' },
        { q: '¿La fórmula δy usa (d−y) o (y−d)?', opts: ['(y−d): salida obtenida menos salida deseada', '(d+y)', '(d−y): salida deseada menos salida obtenida', 'Ninguna de las dos: usa solo y'], a: 2, exp: 'Ver §20.5 ficha 26: invertir el signo invertiría el sentido del ajuste.' }
      ]
    }
  ]
};
