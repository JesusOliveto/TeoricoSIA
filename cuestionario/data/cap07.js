// Question bank: Chapter 7 - Evaluacion de clasificadores (RESUMEN.md lines 500-647; calc ficha S20.2 lines 1722-1743)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[7] = {
  title: 'Evaluación de clasificadores',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué permite visualizar la matriz de confusión?', opts: ['El tiempo de entrenamiento del modelo', 'El desempeño de un algoritmo de aprendizaje supervisado', 'La cantidad de clusters óptima', 'La correlación entre atributos'], a: 1, exp: 'Ver §7.1.' },
        { q: 'En la matriz de confusión con dos clases, ¿dónde quedan los aciertos (TP y TN)?', opts: ['Fuera de la diagonal principal', 'En la diagonal principal', 'Solo en la primera fila', 'Solo en la primera columna'], a: 1, exp: 'Ver §7.1.' },
        { q: '¿Qué mide la Exactitud (Accuracy)?', opts: ['El porcentaje de predicciones correctas sobre el total', 'La capacidad de detectar los casos positivos', 'La probabilidad de falsa alarma', 'La concordancia entre dos evaluadores'], a: 0, exp: 'Ver §7.2.' },
        { q: '¿Qué mide el TPR (Recall/Sensibilidad)?', opts: ['El porcentaje de predicciones correctas sobre el total', 'La capacidad de discriminar los casos negativos', 'La capacidad de detectar los casos positivos o relevantes', 'La proporción de falsa alarma'], a: 2, exp: 'Ver §7.2.' },
        { q: '¿Qué mide la Precisión (Precision)?', opts: ['El porcentaje de las predicciones positivas que son correctas', 'El porcentaje del total que es correcto', 'La capacidad de detectar positivos reales', 'La concordancia entre evaluadores'], a: 0, exp: 'Ver §7.2.' },
        { q: '¿Qué es la curva ROC?', opts: ['Un gráfico bidimensional con FPR en el eje X y TPR en el eje Y que muestra el compromiso entre beneficio y coste', 'Una tabla de confusión con más de dos clases', 'Un algoritmo de clustering', 'Una medida de concordancia entre evaluadores'], a: 0, exp: 'Ver §7.3.' },
        { q: '¿Qué representa el AUC (área bajo la curva ROC)?', opts: ['El número de clusters óptimo', 'La proporción de instancias mal clasificadas únicamente', 'El tiempo de ejecución del algoritmo', 'En un único valor, el rendimiento del clasificador; útil para comparar clasificadores'], a: 3, exp: 'Ver §7.4.' },
        { q: '¿Qué informa el MCC (Coeficiente de Correlación de Matthews)?', opts: ['El tiempo de convergencia del modelo', 'Solo la exactitud del modelo', 'La calidad de la clasificación de las clases; es una medida equilibrada incluso con clases desbalanceadas', 'La cantidad óptima de folds para cross-validation'], a: 2, exp: 'Ver §7.5.' },
        { q: '¿Qué mide la Estadística de Kappa (Kappa de Cohen)?', opts: ['El área bajo la curva ROC', 'La proporción de instancias positivas cubiertas', 'La varianza intra-cluster', 'La concordancia entre dos muestras categóricas dependientes (por ejemplo, dos evaluadores)'], a: 3, exp: 'Ver §7.7.' },
        { q: '¿En qué rango de valores se mueve el MCC?', opts: ['Entre 0 y 100', 'Entre 0 y 1 únicamente', 'No tiene límites definidos', 'Entre −1 y +1'], a: 3, exp: 'Ver §7.5.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'Con TP=40, FN=10, FP=20, TN=130 (total=200), ¿cuál es la Exactitud (Accuracy)?', opts: ['0,85', '0,80', '0,867', '0,667'], a: 0, exp: 'Ver §7.2: (40+130)/200 = 0,85.' },
        { q: 'Con la misma matriz (TP=40, FN=10, FP=20, TN=130), ¿cuál es el TPR (Recall)?', opts: ['0,85', '0,867', '0,80', '0,133'], a: 2, exp: 'Ver §7.2: 40/(40+10) = 0,80.' },
        { q: '¿Cuál es el TNR (Especificidad) de esa matriz?', opts: ['0,80', '0,867', '0,133', '0,071'], a: 1, exp: 'Ver §7.2: 130/(130+20) = 0,867.' },
        { q: '¿Cuál es el FPR de esa matriz?', opts: ['0,133', '0,85', '0,80', '0,071'], a: 0, exp: 'Ver §7.2: 20/(20+130) = 0,133.' },
        { q: '¿Cuál es el FOR de esa matriz?', opts: ['0,133', '0,667', '0,071', '0,85'], a: 2, exp: 'Ver §7.2: 10/(10+130) = 0,071.' },
        { q: '¿Cuál es la Precisión de esa matriz?', opts: ['0,80', '0,133', '0,85', '0,667'], a: 3, exp: 'Ver §7.2: 40/(40+20) = 0,667.' },
        { q: '¿Cuál es el F-measure (media armónica de precisión y recall) de esa matriz?', opts: ['0,85', '0,727', '0,667', '0,80'], a: 1, exp: 'Ver §7.2: 2·(0,667·0,80)/(0,667+0,80) = 0,727.' },
        { q: '¿Cuál es el MCC de esa matriz (TP=40, TN=130, FP=20, FN=10)?', opts: ['0,44', '0,85', '0,63', '0,727'], a: 2, exp: 'Ver §20.2 ficha 12: MCC = (40·130 − 20·10)/√(60·50·150·140) ≈ 0,63.' },
        { q: 'En el ejemplo de Kappa (2 médicos evalúan depresión en 50 personas, coinciden en 36), ¿cuál es po (concordancia observada)?', opts: ['0,50', '0,44', '0,72', '0,23'], a: 2, exp: 'Ver §7.7: po = 36/50 = 0,72.' },
        { q: 'Con po=0,72 y pe=0,50 (evaluador 1: 50% "no deprimido", evaluador 2: 46%), ¿cuál es el valor exacto de κ?', opts: ['0,50', '0,4 (redondeado por la cátedra)', '0,72', '0,44 (valor exacto)'], a: 3, exp: 'Ver §7.7: κ = (0,72−0,50)/(1−0,50) = 0,44.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿Qué diferencia a la Precisión del Recall (TPR)?', opts: ['Son el mismo cálculo con distinto nombre', 'La Precisión se lee por columna (predicho positivo); el Recall se lee por fila (real positivo)', 'El Recall se lee por columna y la Precisión por fila', 'Ninguna de las dos usa la matriz de confusión'], a: 1, exp: 'Ver §7.2.' },
        { q: '¿Qué diferencia al TPR del TNR?', opts: ['TPR mide la capacidad de detectar positivos reales; TNR mide la capacidad de discriminar negativos reales', 'Son el mismo valor siempre', 'TNR se calcula sobre las predicciones positivas', 'TPR nunca se usa con matrices desbalanceadas'], a: 0, exp: 'Ver §7.2.' },
        { q: '¿Qué diferencia al FPR del FOR?', opts: ['Son exactamente la misma fórmula', 'El FOR se calcula sobre los positivos reales', 'El FPR se lee por fila de los negativos reales (FP/(FP+TN)); el FOR se lee por columna de lo predicho negativo (FN/(FN+TN))', 'El FPR no depende de TN'], a: 2, exp: 'Ver §7.2.' },
        { q: '¿En qué se diferencian el área ROC del área PRC?', opts: ['Son idénticas en todos los casos', 'ROC usa TPR vs FPR y es preferible con clases balanceadas; PRC usa precisión vs recall y es preferible con fuerte desbalance de clases', 'PRC nunca se usa en clasificación', 'ROC solo aplica a más de dos clases'], a: 1, exp: 'Ver §7.4 y §7.6.' },
        { q: '¿Qué diferencia a la Exactitud del MCC como métricas ante un dataset desbalanceado?', opts: ['Ambas son igual de confiables con desbalance', 'El MCC es más engañoso que la Exactitud', 'Ninguna de las dos se ve afectada por el desbalance', 'La Exactitud puede ser engañosa con desbalance (ej. 99% clasificando todo como sano); el MCC es una medida equilibrada que funciona bien incluso desbalanceado'], a: 3, exp: 'Ver §7.2 y §7.5.' },
        { q: '¿Qué diferencia a Kappa de la Exactitud como medidas?', opts: ['Son la misma métrica', 'Kappa mide concordancia entre dos evaluadores comparando contra el azar; la Exactitud mide aciertos totales sin descontar el azar', 'La Exactitud descuenta la concordancia por azar y Kappa no', 'Kappa solo se usa en clustering'], a: 1, exp: 'Ver §7.7.' },
        { q: '¿Qué diferencia a la fórmula "de cátedra" de la fórmula "corroborada" del MCC?', opts: ['No hay diferencia, ambas son iguales', 'La fórmula corroborada excluye TN', 'La cátedra incluye TN y la corroborada no', 'La cátedra menciona TP, FP y FN; la fórmula corroborada usa las cuatro celdas de la matriz, incluyendo TN'], a: 3, exp: 'Ver §7.5.' },
        { q: 'En el ejemplo de la matriz de confusión (TP=40, FN=10, FP=20, TN=130), ¿qué diferencia numérica hay entre TPR (0,80) y TNR (0,867)?', opts: ['Son la misma explicación', 'TPR es mayor que TNR en este ejemplo', 'TNR es mayor, porque el modelo discrimina algo mejor los sanos que detecta los enfermos', 'No se pueden comparar entre sí'], a: 2, exp: 'Ver §7.2.' },
        { q: '¿Qué diferencia hay entre el cálculo del TPR de una clase y su FPR en una matriz de más de dos clases?', opts: ['El TPR es el elemento de la diagonal sobre la suma de su fila; el FPR es la suma de su columna menos la diagonal, sobre la suma de las filas de las otras clases', 'Ambos se calculan igual en matrices multiclase', 'El FPR se calcula sobre la fila y el TPR sobre la columna', 'Ninguno de los dos se puede calcular con más de dos clases'], a: 0, exp: 'Ver §7.2.' },
        { q: '¿Qué diferencia hay entre "explicar" un valor de Exactitud y un valor de Precisión en un examen?', opts: ['Son la misma explicación', 'La Precisión se explica sobre el total y la Exactitud sobre lo predicho positivo', 'Ninguna de las dos requiere interpretación en un examen', 'La Exactitud se explica como "% correcto del total"; la Precisión se explica como "% correcto de lo que el modelo predijo como positivo"'], a: 3, exp: 'Ver §7.2.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Un sistema de detección de spam sobre 100 correos da la matriz: TP=30 (spam detectado), FN=5 (spam no detectado), FP=10 (correo normal marcado como spam), TN=55 (correo normal correctamente dejado pasar). ¿Cuál es la Exactitud del sistema?', opts: ['0,75', '0,85', '0,857', '0,65'], a: 1, exp: 'Ver §7.2: (30+55)/100 = 0,85.' },
        { q: 'Con la misma matriz de spam, ¿cuál es el TPR (Recall), es decir, qué proporción del spam real detecta?', opts: ['0,846', '0,75', '0,857 (detecta el 85,7% del spam real)', '0,85'], a: 2, exp: 'Ver §7.2: 30/(30+5) = 0,857.' },
        { q: '¿Cuál es la Precisión del sistema (de lo que marcó como spam, cuánto era realmente spam)?', opts: ['0,857', '0,85', '0,154', '0,75'], a: 3, exp: 'Ver §7.2: 30/(30+10) = 0,75.' },
        { q: '¿Cuál es el TNR (especificidad): qué proporción de los correos normales se dejan pasar correctamente?', opts: ['0,154', '0,846', '0,75', '0,857'], a: 1, exp: 'Ver §7.2: 55/(55+10) = 0,846.' },
        { q: '¿Cuál es el FPR: qué proporción de correos normales termina marcada como spam por error?', opts: ['0,846', '0,75', '0,154', '0,85'], a: 2, exp: 'Ver §7.2: 10/(10+55) = 0,154.' },
        { q: '¿Cuál es el F-measure combinando Precisión (0,75) y Recall (0,857) del sistema de spam?', opts: ['0,80', '0,846', '0,857', '0,75'], a: 0, exp: 'Ver §7.2: 2·(0,75·0,857)/(0,75+0,857) = 0,80.' },
        { q: 'El equipo de desarrollo, preocupado por el desbalance (55 correos normales contra 35 spam), decide reportar solo la Exactitud (0,85) como métrica de éxito. Según el resumen, ¿qué riesgo tiene esta decisión?', opts: ['Ninguno, la Exactitud siempre es suficiente', 'La Exactitud puede ser engañosa en datasets poco equilibrados; conviene complementarla con TPR, Precisión o MCC', 'El riesgo es que la Exactitud subestima siempre el rendimiento real', 'El riesgo solo aplica a más de dos clases'], a: 1, exp: 'Ver §7.2: advertencia sobre exactitud en datasets desbalanceados.' },
        { q: 'Si se quisiera graficar el compromiso entre beneficio (TP) y coste (FP) de este clasificador de spam variando su umbral de decisión, ¿qué herramienta del resumen es la adecuada?', opts: ['El coeficiente de Kappa', 'La curva ROC (FPR en X, TPR en Y)', 'El método del codo', 'La matriz de confusión de más de dos clases únicamente'], a: 1, exp: 'Ver §7.3.' },
        { q: 'Dos médicos evalúan si 100 pacientes tienen una enfermedad y coinciden en 80 casos (po=0,80); el azar esperado calculado es pe=0,50. ¿Cuál es su Kappa?', opts: ['0,30', '0,80', '0,50', '0,60'], a: 3, exp: 'Ver §7.7: κ = (0,80−0,50)/(1−0,50) = 0,60.' },
        { q: 'Con TP=30, TN=55, FP=10, FN=5, ¿cuál es el MCC del sistema de spam (redondeado a dos decimales)?', opts: ['0,60', '0,85', '0,68', '0,75'], a: 2, exp: 'Ver §20.2 ficha 12: MCC = (30·55 − 10·5)/√(40·35·65·60) ≈ 0,68.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿La Exactitud es SIEMPRE una buena métrica, incluso con clases muy desbalanceadas?', opts: ['Sí, siempre es la mejor métrica', 'No: con datasets poco equilibrados puede ser engañosa (ej. 99% de exactitud sin detectar ningún enfermo)', 'Solo es mala con más de 2 clases', 'Es mala únicamente cuando hay menos de 100 instancias'], a: 1, exp: 'Ver §7.2.' },
        { q: '¿El TPR se lee por FILA o por COLUMNA de la matriz de confusión?', opts: ['Por columna', 'Por diagonal', 'Por fila (de los positivos reales)', 'No depende de filas ni columnas'], a: 2, exp: 'Ver §7.2.' },
        { q: '¿La Precisión se lee por FILA o por COLUMNA de la matriz de confusión?', opts: ['Por columna (de lo predicho positivo)', 'Por fila', 'Por diagonal', 'Es indistinto'], a: 0, exp: 'Ver §7.2.' },
        { q: 'En el eje X de la curva ROC, ¿va el FPR o el TPR?', opts: ['El TPR', 'Ninguno de los dos, va la Exactitud', 'El FPR', 'El MCC'], a: 2, exp: 'Ver §7.3.' },
        { q: '¿La fórmula "de cátedra" del MCC (que solo menciona TP, FP, FN) es la fórmula matemáticamente completa?', opts: ['Sí, es la fórmula exacta y completa', 'No: la fórmula corroborada usa las cuatro celdas, incluyendo TN, aunque la cátedra a veces solo menciona tres', 'No existe ninguna fórmula corroborada', 'El MCC no usa ninguna celda de la matriz'], a: 1, exp: 'Ver §7.5.' },
        { q: '¿El valor exacto de Kappa en el ejemplo de los dos médicos es 0,44 o 0,4?', opts: ['0,4, y es el único valor válido', 'Ambos son incorrectos', '0,44 es el redondeo y 0,4 el valor exacto', '0,44 es el valor exacto; 0,4 es el redondeo que usa el anexo de la cátedra'], a: 3, exp: 'Ver §7.7.' },
        { q: '¿El MCC se mueve entre 0 y 1, o entre −1 y +1?', opts: ['Entre 0 y 1', 'Entre 0 y 100', 'Entre −1 y +1', 'No tiene rango definido'], a: 2, exp: 'Ver §7.5.' },
        { q: '¿El área PRC es preferible a ROC cuando hay clases balanceadas o cuando hay fuerte desbalance?', opts: ['Cuando hay clases balanceadas', 'Cuando hay fuerte desbalance de clases', 'Nunca es preferible a ROC', 'Solo con matrices de más de 10 clases'], a: 1, exp: 'Ver §7.6.' },
        { q: '¿El FOR se calcula sobre la fila de los negativos reales o sobre la columna de lo predicho negativo?', opts: ['Sobre la fila de los negativos reales', 'Sobre la diagonal principal', 'Sobre la columna de lo predicho negativo', 'Es indistinto, da el mismo resultado'], a: 2, exp: 'Ver §7.2.' },
        { q: '¿Kappa mide la concordancia entre dos evaluadores DESCONTANDO el azar, o SIN descontarlo?', opts: ['Sin descontar el azar (es lo mismo que la Exactitud)', 'Kappa no tiene relación con el azar', 'Descuenta el azar solo si pe=0', 'Descontando la concordancia esperada por azar (pe)'], a: 3, exp: 'Ver §7.7.' }
      ]
    }
  ]
};
