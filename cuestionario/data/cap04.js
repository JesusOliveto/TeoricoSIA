// Question bank: Chapter 4 - Arboles de decision (TDIDT) (RESUMEN.md lines 256-418; calc ficha S20.1 lines 1688-1721)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[4] = {
  title: 'Árboles de decisión (TDIDT)',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué significa la sigla TDIDT?', opts: ['Top-Down Induction of Decision Trees (inducción descendente de árboles de decisión)', 'Total Data Inference Decision Tree', 'Tree-Driven Inductive Data Training', 'Top-Down Inference of Data Trees'], a: 0, exp: 'Ver §4.1.' },
        { q: '¿Quién propuso el algoritmo ID3 y en qué año?', opts: ['Breiman, 1984', 'Hunt, 1966', 'Quinlan, 1979', 'Quinlan, 1993'], a: 2, exp: 'Ver §4.1.' },
        { q: '¿Qué implementación de WEKA corresponde al algoritmo C4.5 (Quinlan, 1993)?', opts: ['CART', 'J48', 'CLS', 'ID3'], a: 1, exp: 'Ver §4.1.' },
        { q: "En un árbol de decisión, ¿qué representa el 'nodo raíz'?", opts: ['La prueba sobre un atributo cualquiera', 'El valor de la clase final', 'El atributo con mayor ganancia de información, punto de entrada del árbol', 'Una rama etiquetada con un valor'], a: 2, exp: 'Ver §4.2 (pregunta de parcial).' },
        { q: "¿Qué representa un 'nodo interno' en un árbol de decisión?", opts: ['Una prueba sobre un atributo', 'El valor final de la clase', 'El atributo de mayor ganancia únicamente', 'El conjunto de entrenamiento completo'], a: 0, exp: 'Ver §4.2.' },
        { q: "¿Qué etiquetan las 'ramas (arcos)' de un árbol de decisión?", opts: ['El valor de la clase', 'Nada, no llevan etiqueta', 'El nombre del algoritmo usado', 'Los posibles valores del atributo del nodo del que salen'], a: 3, exp: 'Ver §4.2.' },
        { q: "¿Qué especifican las 'hojas' de un árbol de decisión?", opts: ['El valor de la clase (la decisión final)', 'El atributo de mayor ganancia', 'Una prueba sobre un atributo', 'El conjunto de entrenamiento'], a: 0, exp: 'Ver §4.2.' },
        { q: '¿Quién propuso CLS, uno de los antecesores de la familia TDIDT, y en qué año?', opts: ['Quinlan, 1979', 'Hunt, 1966', 'Breiman, 1984', 'Quinlan, 1993'], a: 1, exp: 'Ver §4.1.' },
        { q: '¿Quién propuso el algoritmo CART y en qué año?', opts: ['Breiman, 1984', 'Hunt, 1966', 'Quinlan, 1979', 'Quinlan, 1993'], a: 0, exp: 'Ver §4.1.' },
        { q: 'El aprendizaje de árboles de decisión es el ejemplo clásico de aprendizaje:', opts: ['No supervisado exploratorio', 'Por refuerzo', 'Supervisado inductivo', 'Supervisado deductivo'], a: 2, exp: 'Ver §4.1.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'En el ejemplo león/no león (p=3, n=5), ¿cuál es la Información total I(p;n) de la tabla?', opts: ['0,5', '1', '0,9544 bits', '0,3475'], a: 2, exp: 'Ver §4.5: I(3;5) = 0,9544 bits.' },
        { q: 'En el ejemplo león/no león, ¿cuál es la entropía E(Tamaño)?', opts: ['0,607', '0,951', '0,4544', '0,5'], a: 3, exp: 'Ver §4.5: E(tamaño) = 4/8·I(2;2) + 1/8·I(1;0) + 3/8·I(0;3) = 0,5.' },
        { q: 'En el ejemplo león/no león, ¿cuál es la ganancia G(Tamaño)?', opts: ['0,0033', '0,4544', '0,3475', '0,607'], a: 1, exp: 'Ver §4.5: G(Tamaño) = 0,9544 − 0,5 = 0,4544.' },
        { q: '¿Qué atributo del ejemplo león/no león tiene la MAYOR ganancia de información y por lo tanto se elige como raíz?', opts: ['Peludo', 'Edad', 'Clase', 'Tamaño'], a: 3, exp: 'Ver §4.5: G(Tamaño)=0,4544 > G(Peludo)=0,3475 > G(Edad)=0,0033.' },
        { q: 'Cuando un subconjunto es completamente puro (todos los ejemplos de la misma clase), por ejemplo I(0;3), ¿cuánto vale su información?', opts: ['1 bit', '0,5 bits', '0 bits (no aporta incertidumbre)', 'No se puede calcular'], a: 2, exp: 'Ver §4.5: un subconjunto puro tiene información 0.' },
        { q: 'Cuando la mitad de los ejemplos son positivos y la mitad negativos, por ejemplo I(2;2), ¿cuánto vale I(p;n)?', opts: ['0 bits', '1 bit (máxima incertidumbre)', '0,5 bits', '2 bits'], a: 1, exp: 'Ver §4.5: caso 50/50, máxima incertidumbre.' },
        { q: 'Para el atributo Edad del ejemplo león/no león, con VIEJO: I(1;2)=0,918 (peso 3/8) y JOVEN: I(2;3)=0,971 (peso 5/8), ¿cuál es aproximadamente E(Edad)?', opts: ['0,951', '0,5', '1', '0,3475'], a: 0, exp: 'Ver §4.5: E(edad) = 3/8·(0,918) + 5/8·(0,971) ≈ 0,951.' },
        { q: 'Dado I(p;n) = I(3;5) = 0,9544 y E(Edad) = 0,951, ¿cuál es la ganancia G(Edad)?', opts: ['0,4544', '0,3475', '0,0033', '1,905'], a: 2, exp: 'Ver §4.5: G(Edad) = 0,9544 − 0,951 = 0,0033 (la ganancia más baja de las tres).' },
        { q: 'Para el atributo Peludo, con SÍ: I(3;2)=0,971 (peso 5/8) y NO: I(0;3)=0 (peso 3/8), ¿cuál es E(Peludo)?', opts: ['0,971', '0,3475', '0,607', '0,9544'], a: 2, exp: 'Ver §4.5: E(peludo) = 5/8·(0,971) + 3/8·(0) = 0,607.' },
        { q: 'En la fórmula de precisión de una regla en PRISM (p/t), si una condición cubre 4 instancias totales y 4 son positivas, ¿cuál es su precisión p/t?', opts: ['0', '0,5', '4', '1 (regla perfecta)'], a: 3, exp: 'Ver §20.1 ficha 4 (PRISM): p/t = 1 cuando todas las instancias cubiertas son positivas.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿Qué diferencia al nodo raíz de una hoja en un árbol de decisión?', opts: ['La hoja es el punto de entrada y la raíz la decisión final', 'Son el mismo concepto', 'El nodo raíz es el atributo de mayor ganancia (punto de entrada); la hoja especifica la decisión final (clase)', 'Ninguno de los dos aparece en un árbol de decisión'], a: 2, exp: 'Ver §4.2.' },
        { q: 'En el ejemplo león/no león, ordenando de mayor a menor ganancia, ¿cuál es el orden correcto?', opts: ['Edad > Peludo > Tamaño', 'Peludo > Tamaño > Edad', 'Tamaño > Peludo > Edad', 'Tamaño > Edad > Peludo'], a: 2, exp: 'Ver §4.5: G(Tamaño)=0,4544 > G(Peludo)=0,3475 > G(Edad)=0,0033.' },
        { q: '¿En qué se diferencian ID3 y C4.5?', opts: ['C4.5 es anterior a ID3', 'Ambos fueron propuestos por Breiman', 'Son exactamente el mismo algoritmo con distinto nombre', 'ID3 fue propuesto por Quinlan en 1979; C4.5, también de Quinlan, en 1993 (y se implementa como J48 en WEKA)'], a: 3, exp: 'Ver §4.1.' },
        { q: "¿Qué diferencia al proceso de 'obtener reglas desde un árbol' del proceso 'inverso' (construir el árbol desde reglas)?", opts: ['Son el mismo procedimiento', 'El proceso inverso no requiere elegir una raíz', 'El primero no produce una regla por hoja', 'El primero recorre cada camino raíz→hoja conjugando condiciones con AND; el segundo elige un atributo como raíz y ramifica según los valores mencionados en las reglas'], a: 3, exp: 'Ver §4.3.' },
        { q: '¿Qué diferencia a la Información total I(p;n) de la Entropía E(A) de un atributo?', opts: ['Son el mismo cálculo', 'I(p;n) mide la incertidumbre de toda la tabla; E(A) es el promedio ponderado de la información de cada valor de un atributo específico', 'E(A) mide la tabla completa; I(p;n) mide por atributo', 'Ninguna se usa en el algoritmo ID3'], a: 1, exp: 'Ver §4.5.' },
        { q: '¿Cómo se relacionan la Entropía E(A) y la Ganancia G(A) de un atributo?', opts: ['G(A) = I(p;n) − E(A): la ganancia es la información total menos la entropía del atributo', 'E(A) = I(p;n) − G(A)', 'No tienen relación matemática', 'G(A) = E(A) + I(p;n)'], a: 0, exp: 'Ver §4.5.' },
        { q: "¿Qué diferencia a un subconjunto 'puro' de uno '50/50' en términos de información?", opts: ['Ambos tienen información 1 bit', 'El puro tiene información 0 (sin incertidumbre); el 50/50 tiene información 1 bit (máxima incertidumbre)', 'El puro tiene información 1 bit; el 50/50 tiene 0', 'Ambos tienen información 0,5 bits siempre'], a: 1, exp: 'Ver §4.5.' },
        { q: '¿Qué algoritmo es cronológicamente anterior: ID3 (Quinlan) o CART (Breiman)?', opts: ['CART (1984) es anterior a ID3 (1979)', 'Ambos se publicaron el mismo año', 'ID3 (1979) es anterior a CART (1984)', 'No se puede determinar con los datos del resumen'], a: 2, exp: 'Ver §4.1.' },
        { q: '¿Qué diferencia al atributo elegido como raíz (Tamaño) del de menor ganancia (Edad) en el ejemplo león/no león?', opts: ['Edad reduce más incertidumbre que Tamaño', 'Ambos reducen exactamente la misma incertidumbre', 'Edad no tiene ganancia calculable', 'Tamaño reduce más la incertidumbre de la clase (G=0,4544) que Edad (G=0,0033), casi irrelevante'], a: 3, exp: 'Ver §4.5.' },
        { q: "¿Qué diferencia a una regla derivada de una hoja ('SI...ENTONCES Clase=C') de la clase 'SINO' (por defecto)?", opts: ['Son el mismo tipo de regla', 'La regla SI...ENTONCES corresponde a un camino cubierto del árbol; el SINO cubre los caminos NO cubiertos por ninguna regla al reconstruir el árbol', "El 'SINO' nunca se usa en TDIDT", "La regla SI...ENTONCES es la clase por defecto"], a: 1, exp: 'Ver §4.3.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: '¿Qué devuelve ID3 cuando el conjunto de entrenamiento S llega vacío a un nodo?', opts: ['Un nodo con el valor más frecuente de C', 'El atributo de mayor ganancia', "Un único nodo con valor 'falla'", 'Un árbol vacío sin nodos'], a: 2, exp: "Ver §4.4: ID3(R,C,S) con S vacío devuelve nodo 'falla'." },
        { q: 'En un nodo de ID3, todos los registros de S tienen el mismo valor para el atributo clasificador C. ¿Qué hace el algoritmo?', opts: ['Devuelve un único nodo con dicho valor (hoja pura)', 'Sigue ramificando por todos los atributos restantes', "Devuelve 'falla'", 'Elige el atributo de menor ganancia'], a: 0, exp: 'Ver §4.4.' },
        { q: 'En un nodo de ID3, el conjunto de atributos R está vacío pero S tiene valores mixtos de C. ¿Qué devuelve el algoritmo?', opts: ["Un nodo con el valor 'falla'", 'Un nodo con el valor más frecuente de C en S', 'Sigue buscando un atributo en R', 'Un árbol completamente vacío'], a: 1, exp: 'Ver §4.4.' },
        { q: 'Para el árbol final del ejemplo león/no león, ¿cuántas reglas se obtendrían (una por hoja)?', opts: ['2', '3', '5', '4'], a: 3, exp: 'Ver §4.3 y §4.5: el árbol tiene 4 hojas (GRANDE+Peludo=SÍ, GRANDE+Peludo=NO, MEDIANO, PEQUEÑO).' },
        { q: 'Una tabla tiene p=4 positivos y n=4 negativos (mitad y mitad). ¿Cuál es aproximadamente su información total I(p;n)?', opts: ['0 bits', '1 bit', '0,5 bits', '2 bits'], a: 1, exp: 'Ver §4.5: caso 50/50, análogo a I(2;2)=1 del ejemplo del resumen.' },
        { q: "Un subconjunto de una tabla tiene 0 positivos y 3 negativos (todos 'NO LEÓN'). ¿Cuál es su información?", opts: ['1 bit', '0,5 bits', '0,9544 bits', '0 bits (subconjunto puro)'], a: 3, exp: 'Ver §4.5: análogo a I(0;3)=0 del ejemplo del resumen.' },
        { q: "Dado un conjunto de reglas 'SI Tamaño=MEDIANO ENTONCES LEÓN' y 'SI Tamaño=GRANDE Y Peludo=SÍ ENTONCES LEÓN', si se reconstruye el árbol, ¿qué atributo conviene elegir como raíz?", opts: ['Peludo, porque aparece en más reglas', 'Tamaño, porque aparece en más reglas', 'Un atributo aleatorio, no importa', 'No se puede construir el árbol con esta información'], a: 1, exp: 'Ver §4.3: conviene elegir el atributo que aparece en más reglas.' },
        { q: 'Un camino del árbol de decisión no está cubierto por ninguna de las reglas originales al reconstruirlo. ¿En qué clase debe terminar?', opts: ["En la clase del 'SINO' (clase por defecto)", 'Debe eliminarse ese camino', 'En la clase más rara del conjunto', 'El árbol queda inválido'], a: 0, exp: 'Ver §4.3.' },
        { q: 'Se calcula la ganancia de tres atributos: G(A)=0,05, G(B)=0,62, G(C)=0,30. ¿Cuál se elige como raíz del árbol según ID3?', opts: ['A, por tener el valor más bajo', 'C', 'B, por tener la mayor ganancia', 'Cualquiera, ID3 no usa la ganancia para elegir'], a: 2, exp: 'Ver §4.4: ID3 elige el atributo con mayor ganancia.' },
        { q: "Aplicando la traza de la función informacion(p,n) del pseudocódigo: si p=0 y n=5, ¿qué hace el bucle 'PARA cada cantidad c en {p,n}' con c=0?", opts: ['Suma 1 al resultado', 'Genera un error de división', "No suma nada, porque la condición 'SI c > 0' descarta ese término", 'Multiplica el resultado por 0'], a: 2, exp: 'Ver §4.5: el pseudocódigo salta los términos con c=0 (log2(0) no está definido; un subconjunto puro aporta 0).' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: "El PDF de la cátedra escribe '0,531 + 0,884' en el cálculo de I(3;5). ¿Cuál es el valor CORRECTO del segundo término?", opts: ['0,884, tal como figura en el PDF', '0,971', '0,607', '0,424 (hay un typo en el PDF; el resultado final 0,9544 coincide)'], a: 3, exp: 'Ver §4.5: la cátedra aclara el typo mientras el resultado final 0,9544 es correcto en ambos.' },
        { q: '¿El nodo raíz de un árbol de decisión es el atributo con MENOR o MAYOR ganancia de información?', opts: ['El de menor ganancia', 'Es indistinto, cualquiera sirve', 'El de mayor ganancia', 'El primero alfabéticamente'], a: 2, exp: 'Ver §4.2 y §4.4.' },
        { q: "Un subconjunto 'puro' (todos de la misma clase), ¿tiene información MÁXIMA o NULA?", opts: ['Nula (0 bits)', 'Máxima (1 bit)', 'Depende del tamaño del subconjunto', 'Siempre 0,5 bits'], a: 0, exp: 'Ver §4.5: cuidado con invertir esta relación.' },
        { q: "En el ejemplo león/no león, ¿el atributo 'Edad' es el que MÁS o el que MENOS ganancia aporta?", opts: ['El que más ganancia aporta (G=0,9544)', 'El que menos ganancia aporta (G=0,0033), casi irrelevante', 'Aporta la misma ganancia que Tamaño', 'No se puede calcular su ganancia'], a: 1, exp: 'Ver §4.5: no confundir Edad (mínima ganancia) con Tamaño (máxima ganancia).' },
        { q: '¿La fórmula de Ganancia es G(A) = I(p;n) + E(A) o G(A) = I(p;n) − E(A)?', opts: ['G(A) = I(p;n) + E(A)', 'G(A) = E(A) − I(p;n)', 'G(A) = I(p;n) − E(A)', 'G(A) = I(p;n) × E(A)'], a: 2, exp: 'Ver §4.5: es una resta, no una suma.' },
        { q: "¿Qué devuelve ID3 si S está vacío: un nodo con el valor más frecuente de C, o un nodo 'falla'?", opts: ['Un nodo con el valor más frecuente de C', "Un nodo 'falla'", 'Un árbol vacío sin ningún nodo', 'Continúa ramificando indefinidamente'], a: 1, exp: "Ver §4.4: 'falla' es para S vacío; 'más frecuente' es para R vacío." },
        { q: "¿Qué devuelve ID3 si R (atributos) está vacío pero S no lo está: un nodo 'falla', o un nodo con el valor más frecuente de C en S?", opts: ["Un nodo 'falla'", 'Sigue buscando un atributo', 'Un árbol vacío', 'Un nodo con el valor más frecuente de C en S'], a: 3, exp: 'Ver §4.4: no confundir con el caso de S vacío.' },
        { q: '¿Cuántas reglas se generan por hoja del árbol: una por hoja, o una por nodo interno?', opts: ['Una por nodo interno', 'Una por atributo', 'Solo una regla para todo el árbol', 'Una por hoja'], a: 3, exp: 'Ver §4.3.' },
        { q: 'Al reconstruir un árbol desde reglas, ¿conviene elegir como raíz el atributo que aparece en MENOS reglas o en MÁS reglas?', opts: ['En más reglas', 'En menos reglas', 'Es indistinto', 'El que no aparece en ninguna regla'], a: 0, exp: 'Ver §4.3.' },
        { q: '¿C4.5 y J48 son algoritmos completamente distintos y no relacionados?', opts: ['Sí, no tienen relación', 'No: J48 es la implementación de C4.5 en WEKA', 'J48 es anterior a C4.5', 'C4.5 es la implementación de ID3 en WEKA'], a: 1, exp: 'Ver §4.1.' },
        { q: 'Según el algoritmo J48, ¿qué técnica se utiliza para determinar los atributos del árbol?', opts: ['La cobertura de reglas (aciertos/total), como en PRISM', 'La distancia euclídea entre los atributos', 'La ganancia de información, basada en la entropía', 'El grado de pertenencia a cada gaussiana'], a: 2, exp: 'Ver §4.1 y §4.5: J48 es la implementación en WEKA de C4.5 (familia TDIDT); en cada nodo se elige el atributo con mayor ganancia de información, calculada a partir de la entropía.' }
      ]
    }
  ]
};
