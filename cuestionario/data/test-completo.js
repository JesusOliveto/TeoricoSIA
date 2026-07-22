// TEST COMPLETO (chapter 18) - curated global exam simulation.
// Stores REFERENCES [chapter, setIndex, questionIndex] into the canonical banks
// (single source of truth, no content duplication). Curated from all 17 chapters
// weighting the exam map (RESUMEN.md section 18) and skipping near-duplicate questions.
// Loaded AFTER cap01-cap17: it resolves refs against window.QUIZ_DATA at load time.
// An unresolved ref is dropped; if a set falls below the validator floor the whole
// chapter is excluded by the app's validation gate, like any broken bank.
window.QUIZ_DATA = window.QUIZ_DATA || {};
(function () {
  var SETS = [
    { name: 'Parcial 1 — conceptos', refs: [
      [1, 3, 0],   // taxi autonomo: actuar racionalmente
      [2, 3, 2],   // GPS que elige ruta: agente basado en utilidad
      [3, 0, 5],   // robustez de un metodo de aprendizaje
      [3, 2, 2],   // supervisado vs no supervisado
      [3, 3, 3],   // videojuego con puntos: refuerzo
      [4, 0, 3],   // nodo raiz del arbol
      [4, 2, 3],   // reglas desde arbol y proceso inverso
      [4, 2, 6],   // subconjunto puro vs 50/50
      [5, 2, 0],   // diferencia clave 1R vs PRISM
      [6, 3, 7],   // use training set 99% vs cross-validation
      [7, 0, 5],   // que es la curva ROC
      [7, 2, 0],   // precision vs recall
      [7, 4, 0],   // accuracy con clases desbalanceadas
      [8, 2, 0],   // K-medias vs EM: tipo de asignacion
      [8, 2, 3],   // MinMax vs StandardScaler
      [8, 3, 3]    // metodo del codo
    ] },
    { name: 'Parcial 1 — cálculo', refs: [
      [4, 1, 0],   // I(3;5) informacion total
      [4, 1, 6],   // entropia ponderada E(Edad)
      [4, 1, 7],   // ganancia G = I - E
      [5, 1, 8],   // PRISM criterio de parada p/t=1
      [7, 1, 0],   // accuracy con matriz dada
      [7, 1, 1],   // TPR con matriz dada
      [7, 1, 9],   // kappa con po y pe dados
      [8, 1, 2],   // K-medias: actualizacion de centroide
      [8, 1, 5],   // MinMaxScaler {2,5,8,10}
      [8, 1, 8]    // distancia euclidea al cuadrado
    ] },
    { name: 'Parcial 2 — conceptos', refs: [
      [9, 2, 0],   // R vs R2
      [9, 3, 2],   // multicolinealidad
      [10, 0, 9],  // tres tipos de neuronas
      [10, 2, 0],  // dendritas/sinapsis -> elemento artificial
      [11, 0, 0],  // que es el modelo de Hopfield
      [11, 0, 9],  // que representa la matriz W
      [11, 3, 0],  // grafo de Hopfield de 4 neuronas
      [12, 0, 7],  // suma ponderada igualada a cero
      [12, 2, 0],  // AND vs XOR: separabilidad lineal
      [12, 3, 5],  // AND de 3 variables si es separable
      [13, 0, 5],  // funciones continuas y diferenciables
      [13, 2, 0],  // perceptron vs backpropagation: capas
      [14, 0, 9],  // winner takes all
      [14, 2, 2],  // funcion sombrero mexicano
      [15, 0, 8],  // tres operadores basicos del AG
      [15, 2, 0],  // seleccion proporcional vs por orden
      [16, 0, 1],  // que es un algoritmo evolucionario
      [17, 2, 1]   // base de conocimiento vs memoria activa
    ] },
    { name: 'Parcial 2 — cálculo', refs: [
      [9, 1, 7],   // J(theta) al converger
      [9, 1, 8],   // prediccion con y=2x+1
      [11, 1, 0],  // peso w12 de W con E1 y E2 dados
      [11, 1, 6],  // capacidad 0,14*N
      [12, 1, 0],  // traza AND: suma ponderada inicial
      [12, 1, 7],  // recta separadora con w dado
      [13, 1, 1],  // suma ponderada de salida
      [13, 1, 3],  // delta y = (d-y)*y*(1-y)
      [14, 1, 0],  // distancia al cuadrado W1 vs W2
      [14, 1, 5],  // actualizacion del ganador alfa=0,5
      [15, 1, 0],  // porcentaje de ruleta 576/total
      [15, 1, 4]   // copias por ranking n=4 Rmin=0,75
    ] },
    { name: 'Trampas de examen', refs: [
      [2, 4, 2],   // racional vs omnisciente
      [3, 4, 3],   // cuantas medidas de actuacion
      [4, 4, 5],   // ID3 casos base: S vacio
      [5, 4, 7],   // PRISM desempate en p/t
      [6, 4, 2],   // cross-validation: k-1 folds entrenan
      [7, 4, 8],   // FOR: fila o columna
      [8, 4, 0],   // K-medias: nominales o numericos
      [9, 4, 5],   // rango de R2
      [10, 4, 3],  // Wij > 0: excitador o inhibidor
      [14, 4, 4],  // gana la menor o mayor distancia
      [15, 4, 1],  // que guarda el cromosoma
      [17, 4, 3]   // quien revela las heuristicas
    ] }
  ];

  function resolve(ref) {
    var ch = window.QUIZ_DATA[ref[0]];
    var set = ch && Array.isArray(ch.sets) ? ch.sets[ref[1]] : null;
    return (set && Array.isArray(set.questions) && set.questions[ref[2]]) || null;
  }

  window.QUIZ_DATA[18] = {
    title: 'TEST COMPLETO — simulacro de examen',
    sets: SETS.map(function (s) {
      return {
        name: s.name,
        questions: s.refs.map(resolve).filter(function (q) { return q !== null; })
      };
    })
  };
})();
