// Question bank: Chapter 9 - Regresion lineal (RESUMEN.md lines 790-898; calc ficha S20.4 lines 1765-1789)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[9] = {
  title: 'Regresión lineal',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué es la regresión lineal?', opts: ['Un método causal donde una variable dependiente se relaciona con una o más independientes mediante una ecuación lineal', 'Un algoritmo de clustering jerárquico', 'Un método para clasificar instancias en categorías discretas', 'Una técnica de reducción de dimensionalidad'], a: 0, exp: 'Ver §9.1.' },
        { q: '¿Qué es la variable dependiente en regresión lineal?', opts: ['La que influye en las demás', 'La que se desea pronosticar (su comportamiento depende de las independientes)', 'La que siempre tiene valor constante', 'La que se descarta antes de entrenar'], a: 1, exp: 'Ver §9.1.' },
        { q: '¿Qué es la variable independiente en regresión lineal?', opts: ['La que se desea pronosticar', 'La que nunca afecta el resultado', 'La que influye en la dependiente y es causa de los resultados pasados', 'La que solo aparece en clasificación'], a: 2, exp: 'Ver §9.1.' },
        { q: '¿Qué tipo de salida produce la regresión lineal (a diferencia de la clasificación)?', opts: ['Una salida categórica', 'Una salida binaria únicamente', 'Una salida siempre igual a cero', 'Una salida continua'], a: 3, exp: 'Ver §9.1.' },
        { q: 'En el modelo hθ(x) = θ1·x + θ0, ¿qué representa θ1?', opts: ['La pendiente', 'La intercepción u ordenada al origen', 'El número de observaciones', 'El error cuadrático medio'], a: 0, exp: 'Ver §9.1.' },
        { q: '¿Por dónde pasa siempre la recta de regresión?', opts: ['Por el punto de mayor dispersión', 'Por el centro de la nube de dispersión', 'Por el origen de coordenadas (0,0)', 'Por el valor máximo de y'], a: 1, exp: 'Ver §9.1.' },
        { q: 'Según el resumen, ¿cuál es la cantidad mínima aproximada de observaciones que debería tener el dataset?', opts: ['~10 observaciones', 'No hay mínimo requerido', '~30 observaciones', '~100 observaciones'], a: 2, exp: 'Ver §9.2.' },
        { q: '¿Qué requisito sobre las variables independientes exige el resumen respecto a su relación entre sí?', opts: ['Deben ser todas categóricas', 'Deben estar perfectamente correlacionadas entre sí', 'No hay ningún requisito sobre ellas', 'Poca multicolinealidad: no deben estar fuertemente correlacionadas entre sí'], a: 3, exp: 'Ver §9.2.' },
        { q: '¿Qué indica el coeficiente de determinación (R²)?', opts: ['Porcentualmente el cambio de la variable dependiente respecto a la independiente, entre 0 y 1', 'El signo de la relación entre variables únicamente', 'La tasa de aprendizaje óptima', 'El número de iteraciones del descenso por el gradiente'], a: 0, exp: 'Ver §9.6.' },
        { q: '¿Qué representa la Suma de cuadrados del error (SSE)?', opts: ['La parte de la variabilidad de la variable dependiente que SÍ se explica con el modelo', 'La parte de la variabilidad de la variable dependiente que NO se consigue explicar con el modelo', 'El promedio de los errores absolutos', 'La raíz cuadrada del error cuadrático medio'], a: 1, exp: 'Ver §9.6.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'Con la traza de la cátedra usando los pares {(0,1),(1,3),(2,5),(3,7),(4,9)} (que cumplen y=2x+1), ¿cuántas observaciones n tiene el conjunto?', opts: ['4', '5', '10', '9'], a: 1, exp: 'Ver §9.3: se cuentan los 5 pares dados.' },
        { q: 'Partiendo de θ0=0, θ1=0 (arranque en cero), ¿cuál es el valor de d0 = (1/n)·Σ(θ1·x+θ0−y) para ese conjunto?', opts: ['-25', '5', '-5', '-14'], a: 2, exp: 'Ver §9.3: errores −1,−3,−5,−7,−9 → suma −25, d0 = −25/5 = −5.' },
        { q: 'Con el mismo arranque, ¿cuál es el valor de d1 = (1/n)·Σ(θ1·x+θ0−y)·x?', opts: ['-5', '-70', '14', '-14'], a: 3, exp: 'Ver §9.3: Σ(error·x) = 0−3−10−21−36 = −70; d1 = −70/5 = −14.' },
        { q: 'Con α=0,05, aplicando θ0 ← θ0 − α·d0 sobre el arranque θ0=0, d0=−5, ¿cuál es θ0 tras la primera iteración?', opts: ['0,25', '-0,25', '0,7', '0'], a: 0, exp: 'Ver §9.3: θ0 = 0 − 0,05·(−5) = 0,25.' },
        { q: 'Con α=0,05, aplicando θ1 ← θ1 − α·d1 sobre el arranque θ1=0, d1=−14, ¿cuál es θ1 tras la primera iteración?', opts: ['0,25', '0,7', '-0,7', '1,4'], a: 1, exp: 'Ver §9.3: θ1 = 0 − 0,05·(−14) = 0,7.' },
        { q: '¿Cuál es el coste inicial J(θ) con θ0=θ1=0 (antes de cualquier actualización), usando la fórmula del MSE?', opts: ['0', '25', '16,5', '165'], a: 2, exp: 'Ver §20.4 ficha 18: J = (1²+3²+5²+7²+9²)/(2·5) = 165/10 = 16,5.' },
        { q: 'Según el resumen, ¿a qué valores converge el algoritmo para este dataset exacto?', opts: ['θ0=0, θ1=1', 'θ0=2, θ1=1', 'θ0=0,25, θ1=0,7', 'θ0=1, θ1=2'], a: 3, exp: 'Ver §9.3: converge a θ0=1, θ1=2 → y=2x+1.' },
        { q: '¿Cuál es el valor de J(θ) una vez que el algoritmo converge para este dataset (que cumple y=2x+1 exacto)?', opts: ['0', '16,5', 'No se puede determinar', '1'], a: 0, exp: 'Ver §9.3: con J(θ)=0 el ajuste es perfecto.' },
        { q: 'Usando el modelo ya convergido ŷ = 2x+1, ¿qué predicción da para un nuevo valor x=5?', opts: ['9', '11', '10', '12'], a: 1, exp: 'Ver §9.3: ŷ = 2·5+1 = 11 (aplicación directa del modelo convergido).' },
        { q: 'Si en lugar de α=0,05 se usara α=0,4 (grande) para este mismo dataset, ¿qué señala el resumen que ocurre en cada paso?', opts: ['Converge exactamente en la misma cantidad de pasos', 'El algoritmo se detiene automáticamente sin converger nunca', 'Cada paso se pasa del mínimo y el coste oscila o diverge', 'No hay ninguna diferencia respecto a α pequeña'], a: 2, exp: 'Ver §9.3.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿Qué diferencia a R (coeficiente de correlación) de R² (coeficiente de determinación)?', opts: ['Son exactamente el mismo cálculo', 'R² indica el signo de la relación y R el porcentaje explicado', 'R indica el nivel de asociación y su signo (directa/inversa); R² indica porcentualmente la variabilidad explicada, entre 0 y 1', 'Ninguno de los dos es adimensional'], a: 2, exp: 'Ver §9.6.' },
        { q: '¿Qué diferencia al underfitting del overfitting?', opts: ['Ambos generalizan igual de bien a datos nuevos', 'El overfitting siempre falla también en entrenamiento', 'El underfitting solo ocurre con datasets muy grandes', 'El underfitting no captura la relación entrada-salida (falla en ambos conjuntos); el overfitting se ajusta exactamente al entrenamiento pero falla al generalizar'], a: 3, exp: 'Ver §9.5.' },
        { q: '¿Qué diferencia al EAM/MAE del RECM/RMSE?', opts: ['El MAE promedia los errores absolutos; el RMSE es la raíz del promedio de los errores al cuadrado (0 = ajuste perfecto)', 'Ambos son exactamente el mismo cálculo', 'El RMSE nunca puede valer 0', 'El MAE eleva los errores al cuadrado y el RMSE no'], a: 0, exp: 'Ver §9.6.' },
        { q: '¿Qué diferencia al ERA/RAE del RECR/RRSE?', opts: ['Son la misma fórmula con distinto nombre', 'El RAE es porcentual sobre errores absolutos respecto a la media; el RRSE hace lo mismo pero con la raíz cuadrada de los cuadrados', 'El RRSE no usa la media de los valores observados', 'El RAE se usa solo en clustering'], a: 1, exp: 'Ver §9.6.' },
        { q: 'Según el resumen, ¿qué diferencia hay entre un error absoluto y uno relativo?', opts: ['Ambos son medidas porcentuales', 'El relativo nunca depende del valor real', 'El absoluto es cuánto se desvía el resultado del valor real; el relativo es una medida porcentual en comparación con el valor real', 'El absoluto siempre es mayor que el relativo'], a: 2, exp: 'Ver §9.6.' },
        { q: '¿Qué diferencia hay entre usar una tasa de aprendizaje α pequeña y una α grande?', opts: ['Ambas convergen exactamente igual de rápido', 'α grande siempre es preferible', 'α pequeña siempre diverge', 'α pequeña desciende lento pero es precisa; α grande desciende rápido pero podría pasarse del mínimo o divergir'], a: 3, exp: 'Ver §9.3.' },
        { q: '¿Qué diferencia a la salida de un modelo de regresión de la salida de un modelo de clasificación?', opts: ['La regresión da una salida continua; la clasificación da una salida categórica', 'Ambas dan siempre salidas categóricas', 'La clasificación da salida continua y la regresión categórica', 'No hay ninguna diferencia entre ambas'], a: 0, exp: 'Ver §9.1.' },
        { q: '¿Qué diferencia a la regresión lineal clásica de un árbol de regresión como M5P?', opts: ['M5P nunca puede compararse con la regresión lineal', 'La regresión lineal ajusta una única recta global; M5P (en WEKA, dentro de trees) construye un árbol de regresión/modelo, y en la práctica se comparan sus coeficientes de correlación y errores', 'Ambos son exactamente el mismo algoritmo', 'M5P solo sirve para clasificación categórica'], a: 1, exp: 'Ver §9.7.' },
        { q: '¿Qué diferencia hay en el rendimiento sobre entrenamiento y datos no vistos entre underfitting y overfitting?', opts: ['Ambos rinden igual de bien en ambos conjuntos', 'El overfitting rinde mal en entrenamiento y bien en datos no vistos', 'El underfitting rinde mal tanto en entrenamiento como en datos no vistos; el overfitting rinde muy bien en entrenamiento pero mal en datos no vistos', 'El underfitting solo afecta a los datos no vistos'], a: 2, exp: 'Ver §9.5.' },
        { q: '¿Qué diferencia al algoritmo vectorizado (multivariable) del algoritmo escalar por θj?', opts: ['Ambos son exactamente el mismo procedimiento', 'El escalar usa matrices y el vectorizado no', 'El vectorizado solo funciona con una variable independiente', 'El vectorizado opera con matrices (H=XᵀΘ, D=H−Y, Θ=Θ−α·(1/n)XD); el escalar calcula cada derivada parcial de θj por separado'], a: 3, exp: 'Ver §9.3 y §9.4.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Una inmobiliaria quiere predecir el precio de venta (un valor continuo) de una casa a partir de su superficie y antigüedad. ¿Qué técnica de las vistas es la adecuada?', opts: ['Clustering', 'PRISM', 'Cobweb', 'Regresión lineal'], a: 3, exp: 'Ver §9.1: salida continua, variable dependiente a pronosticar.' },
        { q: 'Un analista arma un dataset de regresión con solo 15 observaciones. Según el resumen, ¿cumple con la cantidad mínima recomendada?', opts: ['No, el resumen recomienda un mínimo de ~30 observaciones', 'Sí, 15 es más que suficiente', 'Solo si las variables son categóricas', 'Sí, porque supera las 10 observaciones'], a: 0, exp: 'Ver §9.2.' },
        { q: 'Un analista detecta que dos de sus variables independientes están correlacionadas en un 95% entre sí. ¿Qué requisito del dataset para regresión lineal se está violando?', opts: ['El de variables continuas', 'El de poca multicolinealidad', 'El de cantidad mínima de datos', 'El de relación lineal'], a: 1, exp: 'Ver §9.2.' },
        { q: 'Un modelo de regresión obtiene un error alto tanto en el conjunto de entrenamiento como en datos nuevos jamás vistos. ¿Qué problema tiene el modelo?', opts: ['Overfitting', 'Multicolinealidad', 'Underfitting', 'Convergencia perfecta'], a: 2, exp: 'Ver §9.5.' },
        { q: 'Un modelo ajusta perfectamente los datos de entrenamiento (error casi 0) pero falla notoriamente al predecir sobre datos nuevos. ¿Qué problema tiene?', opts: ['Underfitting', 'α demasiado pequeña', 'R² fuera de rango', 'Overfitting'], a: 3, exp: 'Ver §9.5.' },
        { q: 'Un equipo elige α=0,001 para el descenso por el gradiente sobre un dataset grande y necesita entrenar rápido. ¿Qué compromiso enfrenta con esa elección?', opts: ['Convergerá de forma precisa pero necesitará muchísimas más iteraciones (lento)', 'Convergerá muy rápido y con riesgo de divergir', 'No convergerá nunca bajo ninguna circunstancia', 'El valor de α no afecta la velocidad de convergencia'], a: 0, exp: 'Ver §9.3.' },
        { q: 'Otro equipo elige α=0,5 (grande) y observa que el coste J(θ) oscila e incluso aumenta entre iteraciones. ¿Qué está ocurriendo?', opts: ['El modelo está en underfitting', 'El descenso se está pasando del mínimo en cada paso; puede estar divergiendo', 'Es el comportamiento normal esperado con cualquier α', 'El dataset tiene multicolinealidad'], a: 1, exp: 'Ver §9.3.' },
        { q: 'Un modelo reporta R²=0,92 sobre un conjunto de prueba. ¿Cómo se interpreta este valor según el resumen?', opts: ['El modelo explica solo el 8% de la variabilidad de la dependiente', 'El coeficiente de correlación R es negativo', 'El modelo explica el 92% de la variabilidad de la variable dependiente; muy cerca de 1, buen ajuste', 'El modelo tiene overfitting garantizado'], a: 2, exp: 'Ver §9.6.' },
        { q: 'Un modelo obtiene RECM/RMSE = 0 exactamente sobre el conjunto de entrenamiento. ¿Qué significa ese valor según la tabla de medidas del resumen?', opts: ['Que el modelo nunca podrá evaluarse', 'Que hubo un error en el cálculo', 'Que el modelo tiene la peor performance posible', 'Que el ajuste es perfecto sobre ese conjunto (RMSE=0 significa ajuste perfecto)'], a: 3, exp: 'Ver §9.6.' },
        { q: 'Un analista compara en WEKA una regresión lineal clásica contra M5P sobre el mismo dataset de precios. ¿Qué debería comparar entre ambos modelos, según el resumen?', opts: ['El coeficiente de correlación y los errores (como RMSE) de cada modelo', 'Únicamente el tiempo de carga del dataset', 'La cantidad de clusters generados por cada uno', 'El valor de κ (Kappa) de cada modelo'], a: 0, exp: 'Ver §9.7.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿La regresión lineal produce una salida CONTINUA o CATEGÓRICA?', opts: ['Continua', 'Categórica', 'Ambas por igual', 'Ninguna de las dos'], a: 0, exp: 'Ver §9.1.' },
        { q: '¿La cantidad mínima recomendada de observaciones es de ~10 o de ~30?', opts: ['~10', '~30', '~100', '~5'], a: 1, exp: 'Ver §9.2.' },
        { q: '¿La regresión lineal requiere ALTA o BAJA multicolinealidad entre las variables independientes?', opts: ['Alta', 'Es indistinto', 'Baja (poca correlación entre ellas)', 'No aplica el concepto de multicolinealidad'], a: 2, exp: 'Ver §9.2.' },
        { q: 'En el descenso por el gradiente, ¿θ0 y θ1 se actualizan de forma SIMULTÁNEA o SECUENCIAL (uno tras otro con el valor ya actualizado del otro)?', opts: ['Secuencial', 'Solo θ1 se actualiza', 'Solo θ0 se actualiza', 'Simultánea'], a: 3, exp: 'Ver §9.3.' },
        { q: 'Con un α grande, ¿existe riesgo de que el algoritmo DIVERJA, o siempre converge más rápido sin riesgo?', opts: ['Sí, existe riesgo real de divergir o pasarse del mínimo', 'Nunca hay riesgo de divergencia', 'Solo diverge si n>100', 'α grande siempre es más preciso'], a: 0, exp: 'Ver §9.3.' },
        { q: '¿El coeficiente de determinación R² tiene un rango FIJO de 0 a 1, o puede tomar cualquier valor según los datos?', opts: ['Puede tomar cualquier valor', 'Tiene un rango fijo entre 0 y 1', 'Va de −1 a 1', 'No tiene un rango definido en el resumen'], a: 1, exp: 'Ver §9.6.' },
        { q: 'Según la tabla de medidas, ¿un valor de RECM/RMSE = 0 significa ajuste PERFECTO o el PEOR ajuste posible?', opts: ['El peor ajuste posible', 'Un valor neutro, ni bueno ni malo', 'Ajuste perfecto', 'No tiene interpretación definida'], a: 2, exp: 'Ver §9.6.' },
        { q: 'La multicolinealidad, ¿se refiere a la correlación entre las variables INDEPENDIENTES entre sí, o entre la independiente y la dependiente?', opts: ['Entre la independiente y la dependiente', 'Entre dos modelos distintos', 'No se relaciona con correlación', 'Entre las variables independientes entre sí'], a: 3, exp: 'Ver §9.2.' },
        { q: 'En hθ(x) = θ1·x + θ0, ¿θ0 es la PENDIENTE o la ORDENADA AL ORIGEN (intercepción)?', opts: ['La ordenada al origen (intercepción); θ1 es la pendiente', 'La pendiente', 'Ambas cosas a la vez', 'Ninguna de las dos'], a: 0, exp: 'Ver §9.1.' },
        { q: 'En la actualización vectorizada, ¿es Θ = Θ − α·(1/n)·XD (con MENOS) o Θ = Θ + α·(1/n)·XD (con MÁS)?', opts: ['Con más (suma)', 'Con menos (resta), igual que en la forma escalar del descenso por el gradiente', 'Depende del signo de D', 'No se actualiza con esa fórmula'], a: 1, exp: 'Ver §9.4.' }
      ]
    }
  ]
};
