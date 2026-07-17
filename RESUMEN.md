# RESUMEN — Sistemas Inteligentes Artificiales

> Resumen integral de la materia, construido a partir de: slides del cursado nuevo (clases 0 a 9 + anexos), slides del cursado viejo (como respaldo), los dos resúmenes previos (`SIA_Resumen_Parcial_1.pdf` y `SIA_Resumen_Parcial_2.pdf`), la guía "De dónde estudiar", la bibliografía de la cátedra y los parciales/recuperatorios 2023.

## Convención de notación

- **Texto sin marca** = contenido fiel al material de la cátedra (slides, anexos, resúmenes), sin conflicto con la teoría estándar.
- **📖 Cátedra** = lo que dice textualmente el material de la cátedra, en los puntos donde difiere de la teoría corroborada.
- **✅ Corroborado** = corrección o ampliación verificada con la bibliografía estándar, que difiere de (o no figura en) el material de la cátedra.

Cuando aparecen ambas marcas juntas, **estudiá la versión ✅** y tené presente la 📖 por si el enunciado o el corrector siguen la letra de las slides: desarrollar la justificación completa en la hoja te cubre en ambos casos.

Además: los **diagramas** están en Mermaid (se renderizan en GitHub y en VS Code con la extensión *Markdown Preview Mermaid Support*), y cada fórmula o algoritmo tiene su **pseudocódigo paso a paso** con los números del ejemplo como traza — el mismo desarrollo "fórmula → pasos → resultado" que hay que escribir a mano en el parcial.

## Mapa de la materia

| Parcial | Clases | Temas | Bibliografía de apoyo |
|---|---|---|---|
| **1er parcial** | 0–3 + anexos | Introducción a la IA, agentes inteligentes, aprendizaje automático, árboles de decisión (ID3), cálculo de la información, 1R y PRISM, WEKA, métricas de evaluación, Kappa, clustering (K-means, EM, Cobweb), normalización/escalado | Russell & Norvig caps. 1 y 2; "Aprendizaje Automático" caps. 1–3; VERA_kuaa_Ferrante (K-medias) |
| **2do parcial** | 4–9 | Regresión lineal, redes neuronales (Hopfield, Perceptrón, Backpropagation, Kohonen), algoritmos genéticos, algoritmos evolucionarios, AG paralelos, sistemas expertos | Ponce Cruz caps. 3 y 4; "Los mapas auto-organizados de Kohonen (SOM)" |

---

# PARTE I — PRIMER PARCIAL

## 1. Introducción a la Inteligencia Artificial

### 1.1 ¿Qué es la inteligencia?

Preguntas disparadoras: ¿es la capacidad para responder preguntas?, ¿la habilidad para enfrentar nuevas situaciones?, ¿la habilidad para resolver problemas?

**Definición RAE**: es la capacidad para entender o aprender, como así también la capacidad para resolver problemas.

### 1.2 ¿Qué es la IA?

Existen **dos grandes grupos de definiciones**:

1. **Relacionadas con procesos mentales** (pensar):
   - "Lograr que las computadoras piensen… máquinas con mentes, en el más amplio sentido literal" (Haugeland, 1985).
2. **Relacionadas con la conducta** (actuar):
   - "El estudio de cómo lograr que las computadoras realicen tareas que, por el momento, los humanos hacen mejor" (Rich y Knight, 1991).
   - "Es el estudio del diseño (y desarrollo) de agentes inteligentes" (Poole, 1998).

En el enfoque de Russell y Norvig estas dos dimensiones se cruzan con otras dos: sistemas que piensan/actúan **como humanos** vs. sistemas que piensan/actúan **racionalmente**. La materia adopta principalmente la visión de **agentes racionales** (actuar racionalmente).

### 1.3 Ciencias fundamentales de la IA

La IA es interdisciplinaria; se apoya en:

- **Filosofía**: lógica, razonamiento, mente/cuerpo, origen del conocimiento.
- **Matemáticas**: lógica formal, probabilidad, computabilidad, algoritmos.
- **Investigación Operativa y Economía**: teoría de la decisión, utilidad, optimización.
- **Neurociencia**: cómo procesa la información el cerebro (inspiración del conexionismo).
- **Psicología**: cómo piensan y actúan los humanos (psicología cognitiva).
- **Ingeniería computacional**: el hardware y software que hacen posible la IA.
- **Teoría de Control y Cibernética**: sistemas que se autorregulan (retroalimentación).
- **Lingüística**: relación entre lenguaje y pensamiento (procesamiento de lenguaje natural).

### 1.4 Orígenes e historia de la IA

Etapas vistas en clase:

1. **Nacimiento**: teoría de autómatas, primeras redes neuronales (McCulloch y Pitts, 1943), el "Teórico Lógico" (Logic Theorist de Newell y Simon, primer programa que demostraba teoremas). La conferencia de Dartmouth (1956) da nombre al campo.
2. **Inicios**: el SRGP (Solucionador de Problemas de Propósito General / General Problem Solver de Newell y Simon) y el programa de **juego de damas** de Samuel (que aprendía a jugar mejor que su creador).
3. **Realidad y pérdida de interés** ("invierno de la IA"): las promesas exageradas no se cumplen, los problemas reales resultan intratables (explosión combinatoria), se recortan los fondos.
4. **Sistemas expertos y resurgimiento**: sistemas basados en conocimiento de dominio específico. El sistema **R1** (McDermott, 1982), usado por DEC para configurar pedidos de computadoras, fue el primer sistema experto comercial exitoso (ahorraba ~40 millones de dólares al año).

### 1.5 Aplicaciones de la IA

Robótica, medicina (diagnóstico, imágenes), educación, entretenimiento (videojuegos), gestión de la información, biología (plegado de proteínas), etc.

### 1.6 Reflexiones del cursado nuevo (clase 0)

El cursado nuevo dedica una clase a debatir el uso responsable de la IA:

- **¿Reemplazar o acompañar al humano?** La postura de la cátedra favorece el enfoque que **acompaña** al humano (el humano dirige, la IA asiste).
- **Confianza en los resultados**: James Gosling plantea la pregunta clave ante la IA generativa: *"¿cuál es la tolerancia al error que estamos dispuestos a aceptar?"* — no es lo mismo un chatbot de recetas que un sistema médico.
- **Sesgo algorítmico**: los modelos de lenguaje generativo heredan y amplifican sesgos sociales presentes en sus datos de entrenamiento (representación social distorsionada).
- **Seguridad**: los LLM tienen un "lado oscuro": inyección de prompts, jailbreaks, generación de contenido malicioso, fugas de datos.

---

## 2. Agentes inteligentes

### 2.1 Definición

> "Es cualquier cosa capaz de **percibir** su medio con la ayuda de **sensores** y **actuar** en ese medio utilizando **actuadores**" (Russell y Norvig, 2004).

Ejemplos: un humano (ojos/oídos como sensores; manos/voz como actuadores), un robot (cámaras; motores), un agente de software (lecturas de archivos/red; escritura en pantalla/archivos).

```mermaid
graph LR
    A[Agente<br>programa + arquitectura] -- acciones vía actuadores --> E[Entorno]
    E -- percepciones vía sensores --> A
```

### 2.2 Función del agente vs. programa del agente

- **Función del agente**: descripción **abstracta** que asigna una acción a cada secuencia de percepciones posible (matemáticamente, una tabla percepción → acción).
- **Programa del agente**: la **implementación** concreta de esa función, que corre sobre una arquitectura.
- **Agente = Programa + Arquitectura**.

### 2.3 El mundo de las aspiradoras

Ejemplo canónico: dos cuadrículas (A y B), la aspiradora percibe en qué cuadrícula está y si hay suciedad; acciones: aspirar, moverse a izquierda/derecha, no hacer nada. Su función de agente se puede tabular (percepción → acción). Pregunta típica de clase: ¿qué debería hacer si ambas cuadrículas están limpias? (p. ej., no hacer nada para no gastar energía).

### 2.4 Cuadro REAS

Siempre que se modele un agente se debe especificar un cuadro **REAS** (en inglés PEAS) para describir el **entorno de trabajo** de la forma más completa posible:

- **R**endimiento: medida de éxito (¿qué es "hacerlo bien"?).
- **E**ntorno: dónde opera el agente.
- **A**ctuadores: con qué actúa.
- **S**ensores: con qué percibe.

Ejemplo — **taxista automático**:

| Elemento | Descripción |
|---|---|
| Rendimiento | Viaje seguro, rápido, legal, cómodo; maximizar ganancias |
| Entorno | Calles, tráfico, peatones, clientes, clima |
| Actuadores | Volante, acelerador, freno, bocina, pantalla |
| Sensores | Cámaras, GPS, velocímetro, sensores del motor, teclado |

### 2.5 Agente racional y racionalidad

- **Racionalidad = "hacer lo correcto"**: emprender la acción que **maximice la medida de rendimiento**, dada la evidencia disponible.
- Definición formal: *"En cada posible secuencia de percepciones, un agente racional deberá emprender aquella acción que maximice su medida de rendimiento, basándose en las percepciones y decisiones anteriores que mantiene almacenadas."*
- **Racionalidad ≠ Omnisciencia**: el agente racional maximiza el resultado *esperado* con la información que tiene; el omnisciente conocería el resultado *real* de sus acciones (imposible en la práctica).
- **Autonomía**: el agente posee **menor autonomía** cuanto **más se apoya en el conocimiento inicial** proporcionado por su diseñador, y mayor autonomía cuanto más aprende de sus propias percepciones.

### 2.6 Tipos de programas de agente

De menor a mayor sofisticación:

1. **Agente reactivo simple**: actúa solo según la percepción actual, mediante reglas condición-acción ("si el auto de adelante frena, frenar"). No tiene memoria. Solo funciona si el entorno es totalmente observable.
2. **Agente reactivo basado en modelos**: mantiene un **estado interno** (modelo del mundo) que le permite manejar entornos parcialmente observables: sabe cómo evoluciona el mundo y cómo lo afectan sus acciones.
3. **Agente basado en objetivos**: además del modelo del mundo, tiene **metas** que describen situaciones deseables; elige acciones que lo acercan a la meta (implica búsqueda y planificación).
4. **Agente basado en utilidad**: cuando hay varios caminos hacia la meta, una **función de utilidad** permite comparar qué tan "deseable" es cada estado (más rápido, más seguro, más barato) y elegir el de mayor utilidad esperada.
5. **Agente que aprende**: agrega componentes que le permiten mejorar con la experiencia: **elemento de aprendizaje** (mejora), **elemento de actuación** (decide), **crítico** (evalúa el desempeño contra un estándar) y **generador de problemas** (propone acciones exploratorias).

---

## 3. Aprendizaje automático — fundamentos

### 3.1 El aprendizaje animal como inspiración

Tipos de aprendizaje animal vistos en clase:

- **Habituación**: dejar de responder a un estímulo repetido e irrelevante.
- **Asociativo**: vincular dos estímulos o un estímulo con una respuesta.
- **Condicionamiento**: asociación estímulo-respuesta reforzada (Pavlov, Skinner).
- **Prueba y error**: repetir lo que funciona, descartar lo que no.
- **Latente**: se aprende sin refuerzo aparente y se manifiesta después.
- **Imitación**: copiar el comportamiento de otro individuo.
- **Impronta**: aprendizaje en período crítico temprano (p. ej., patitos que siguen a la madre).

### 3.2 ¿Qué es el aprendizaje automático?

Metáfora habitual: resolver problemas es un tipo de aprendizaje que consiste, una vez resuelto un tipo de problema, en **ser capaz de reconocer la situación problemática y reaccionar usando la estrategia aprendida**.

Se busca que un agente tome decisiones sobre el curso más apropiado para resolver un problema y **modifique esas decisiones cuando las condiciones lo requieran**: sistemas capaces de **adaptarse dinámicamente**.

**Fórmula de la cátedra:**

> **Aprendizaje = Selección + Adaptación**

- **Selección**: las características más relevantes de un objeto se comparan con otras conocidas mediante un proceso de cotejamiento (**Pattern Matching**).
- **Adaptación**: cuando las diferencias son significativas, el sistema **adapta su modelo** según el resultado del cotejamiento.

### 3.3 Reseña histórica del aprendizaje automático

1. **Entusiasmo inicial (1955–1965)**: aprendizaje sin conocimiento de respaldo, *neural modelling* (perceptrones), aprendizaje evolutivo.
2. **Etapa oscura (1965–1976)**: adquisición simbólica de conceptos, adquisición del lenguaje; decae el interés (limitaciones del perceptrón demostradas por Minsky y Papert).
3. **Renacimiento (1976–1986)**: exploración de diferentes estrategias, *knowledge-intensive learning*, primeras aplicaciones exitosas.
4. **Desarrollo (1986–actualidad)**: aprendizaje conexionista (backpropagation), sistemas multiestrategia, comparaciones experimentales.

### 3.4 Medidas de actuación del aprendizaje automático

**(Pregunta de recuperatorio)** Las principales medidas de actuación son:

- **Generalidad**: capacidad del método de aplicarse a distintos dominios/problemas (no solo al que fue diseñado).
- **Robustez**: capacidad de funcionar correctamente ante ruido, datos incompletos o inconsistentes.
- **Eficacia**: qué tan bien resuelve la tarea (calidad de los resultados).
- **Eficiencia**: cuántos recursos (tiempo, cómputo, datos) consume para lograrlo.

### 3.5 Clasificación del aprendizaje automático

**Por estrategia de aprendizaje:**

- **Deductivo**: de lo general a lo particular; deduce nuevo conocimiento a partir de reglas y hechos conocidos.
- **Analógico**: transfiere soluciones de problemas conocidos a problemas nuevos similares.
- **Inductivo**: de ejemplos particulares a reglas generales (árboles de decisión, la mayoría del ML actual).
- **Mediante descubrimiento**: explora y descubre regularidades sin guía externa.
- **Algoritmos genéticos**: evolución de poblaciones de soluciones.
- **Conexionismo**: redes neuronales artificiales.

**Por tipo de supervisión (los dos/tres grandes grupos — pregunta de recuperatorio):**

1. **Supervisado**: el algoritmo se entrena con un **histórico de datos etiquetados** y "aprende" a asignar la etiqueta de salida adecuada a un nuevo valor (predice la salida). Se usa típicamente para **clasificación** y **regresión**.
   - Ejemplos: detector de spam, árboles de decisión (**ID3, C4.5, J48**), regresión lineal, perceptrón, backpropagation.
2. **No supervisado**: **no se dispone de datos etiquetados**; se conocen las entradas pero no hay salida asociada. Tiene **carácter exploratorio**: busca estructura oculta en los datos.
   - Ejemplos: **clustering o agrupamiento** (K-means, EM, Cobweb), redes de Kohonen, Hopfield.
   - ⚠️ Cuidado con las **correlaciones espurias**: que dos variables se agrupen o correlacionen no implica causalidad.
3. **Por refuerzo**: el agente aprende interactuando con el entorno mediante **premios y castigos** (recompensas); no se le dice qué acción es correcta, lo descubre por prueba y error.

```mermaid
graph TD
    ML[Aprendizaje automático] --> S[Supervisado<br>datos etiquetados]
    ML --> NS[No supervisado<br>sin etiquetas, exploratorio]
    ML --> RF[Por refuerzo<br>premios y castigos]
    S --> C[Clasificación:<br>ID3, C4.5/J48, 1R, PRISM,<br>Perceptrón, Backpropagation]
    S --> RG[Regresión:<br>regresión lineal, M5P]
    NS --> CL[Clustering:<br>K-medias, EM, Cobweb]
    NS --> RN[Redes:<br>Kohonen, Hopfield]
```

### 3.6 ¿Qué tareas resuelve?

Según la pregunta que se quiera responder es el tipo de algoritmo a usar: ¿predecir una categoría? → clasificación (supervisado); ¿predecir un valor numérico? → regresión (supervisado); ¿descubrir grupos? → clustering (no supervisado); ¿optimizar una estrategia de acciones? → refuerzo.

---

## 4. Árboles de decisión (TDIDT)

### 4.1 Concepto

TDIDT = *Top-Down Induction of Decision Trees* (inducción descendente de árboles de decisión). Familia desarrollada desde los años 60: CLS (Hunt, 1966), **ID3 (Quinlan, 1979)**, CART (Breiman, 1984), ACLS, ASSISTANT, **C4.5 (Quinlan, 1993)** y su implementación en WEKA, **J48**.

- El aprendizaje de árboles es **sencillo, fácil de implementar y poderoso**; es el ejemplo clásico de aprendizaje **supervisado inductivo**.
- Un árbol recibe un objeto o situación descrita por un **conjunto de atributos** y regresa una **decisión** (la clase).

### 4.2 Partes constitutivas (pregunta de parcial)

- **Nodo raíz**: el atributo con mayor ganancia de información; punto de entrada del árbol.
- **Nodos internos**: cada uno corresponde a una **prueba sobre un atributo**.
- **Ramas (arcos)**: etiquetadas con los **posibles valores** del atributo del nodo del que salen.
- **Hojas**: especifican el **valor de la clase** (la decisión final).

### 4.3 Reglas de decisión (pregunta de parcial)

Para obtener las reglas de un árbol se recorre **cada camino desde la raíz hasta cada hoja**, conjugando con AND las condiciones (atributo = valor) de cada rama atravesada; la hoja da el consecuente:

```
SI atributo1 = valor1 Y atributo2 = valor2 ... ENTONCES Clase = C
```

Se genera **una regla por hoja**, de manera ordenada (típicamente de izquierda a derecha). El conjunto de reglas es equivalente al árbol.

**Proceso inverso (construir el árbol a partir de reglas)** — también se toma en examen:

1. Elegir como **raíz** uno de los atributos que aparecen en las reglas (conviene el que aparece en más reglas).
2. **Ramificar** por cada valor posible del atributo.
3. En cada rama, continuar con el siguiente atributo mencionado en las reglas que siguen vigentes por ese camino.
4. Los caminos cubiertos por una regla terminan en una **hoja con su clase**; todos los caminos **no cubiertos** por ninguna regla terminan en la clase del "SINO" (clase por defecto).
5. Verificar que **cada regla original corresponda a al menos un camino** raíz→hoja del árbol.

### 4.4 Algoritmo ID3 (pseudocódigo de la cátedra)

```
R = conjunto de atributos no clasificadores
C = atributo clasificador
S = conjunto de entrenamiento

ID3(R, C, S):
  Si S está vacío:
      devolver un único nodo con valor "falla"
  Si todos los registros de S tienen el mismo valor para C:
      devolver un único nodo con dicho valor
  Si R está vacío:
      devolver un único nodo con el valor más frecuente de C en S
  Si R no está vacío:
      D ← atributo con mayor GANANCIA entre los atributos de R
      Sean {d1..dm} los valores del atributo D
      Sean {S1..Sm} los subconjuntos de S correspondientes a cada dj
      devolver un árbol con raíz D y arcos d1..dm que van a los subárboles
          ID3(R−{D}, C, S1), ID3(R−{D}, C, S2), ..., ID3(R−{D}, C, Sm)
```

La clave del algoritmo es **elegir en cada paso el atributo con mayor ganancia de información**.

### 4.5 Cálculo de la información: información total, entropía y ganancia

**(Ejercicio seguro de parcial — cae siempre)**

La cantidad de información, medida en **bits**, producida por la ocurrencia de un evento es **inversa a la probabilidad** de ocurrencia de dicho evento:

$$I(P(V_1), ..., P(V_n)) = -\sum_{i=1}^{n} P(V_i) \cdot \log_2 P(V_i)$$

Para un problema de dos clases con **p** ejemplos positivos y **n** negativos:

**1) Información total de la tabla:**

$$I(p;n) = -\frac{p}{p+n}\log_2\frac{p}{p+n} - \frac{n}{p+n}\log_2\frac{n}{p+n}$$

**2) Entropía de un atributo A** (promedio ponderado de la información de cada valor del atributo):

$$E(A) = \sum_{i=1}^{v} \frac{p_i+n_i}{p+n} \cdot I(p_i;n_i)$$

donde el atributo A tiene $v$ valores posibles y $p_i, n_i$ son los positivos/negativos del subconjunto con el valor $i$.

**3) Ganancia del atributo A:**

$$G(A) = I(p;n) - E(A)$$

**Ejemplo completo (tabla león / no león):**

| Peludo | Edad | Tamaño | Clase |
|---|---|---|---|
| SÍ | VIEJO | GRANDE | LEÓN |
| NO | JOVEN | GRANDE | NO LEÓN |
| SÍ | JOVEN | MEDIANO | LEÓN |
| SÍ | VIEJO | PEQUEÑO | NO LEÓN |
| SÍ | JOVEN | PEQUEÑO | NO LEÓN |
| SÍ | JOVEN | GRANDE | LEÓN |
| NO | JOVEN | PEQUEÑO | NO LEÓN |
| NO | VIEJO | GRANDE | NO LEÓN |

p = 3 (LEÓN), n = 5 (NO LEÓN):

- **Información total**: $I(3;5) = -\frac{3}{8}\log_2\frac{3}{8} - \frac{5}{8}\log_2\frac{5}{8} = 0{,}531 + 0{,}424 = 0{,}9544$ bits
  (📖 el PDF de la cátedra escribe "0,531 + 0,884" por un typo en el segundo término; ✅ el valor correcto es 0,424 — el resultado final 0,9544 coincide en ambos)

- **Atributo Peludo**:
  - SÍ: $p_1=3, n_1=2 \Rightarrow I(3;2) = 0{,}971$
  - NO: $p_2=0, n_2=3 \Rightarrow I(0;3) = 0$ (subconjunto puro → información nula)
  - $E(peludo) = \frac{5}{8}(0{,}971) + \frac{3}{8}(0) = 0{,}607$
  - $G(peludo) = 0{,}9544 - 0{,}607 = 0{,}3475$

- **Atributo Edad**:
  - VIEJO: $I(1;2) = 0{,}918$; JOVEN: $I(2;3) = 0{,}971$
  - $E(edad) = \frac{3}{8}(0{,}918) + \frac{5}{8}(0{,}971) = 0{,}951$
  - $G(edad) = 0{,}9544 - 0{,}951 = 0{,}0033$

- **Atributo Tamaño**:
  - GRANDE: $I(2;2) = 1$; MEDIANO: $I(1;0) = 0$; PEQUEÑO: $I(0;3) = 0$
  - $E(tamaño) = \frac{4}{8}(1) + \frac{1}{8}(0) + \frac{3}{8}(0) = 0{,}5$
  - $G(tamaño) = 0{,}9544 - 0{,}5 = 0{,}4544$

**Escala de ganancia**: G(tamaño) = 0,4544 > G(peludo) = 0,3475 > G(edad) = 0,0033 → **Tamaño es la raíz del árbol** y se repite el proceso recursivamente en cada rama.

Interpretación útil: un subconjunto **puro** (todos de la misma clase) tiene información 0 (no aporta incertidumbre); un subconjunto 50/50 tiene información 1 bit (máxima incertidumbre). La ganancia mide **cuánta incertidumbre elimina** conocer el valor del atributo.

**Árbol resultante** (aplicando ID3 recursivamente: en la rama GRANDE, Peludo es el atributo de mayor ganancia; MEDIANO y PEQUEÑO ya son puros):

```mermaid
graph TD
    T{Tamaño} -->|GRANDE| P{Peludo}
    T -->|MEDIANO| L1[LEÓN]
    T -->|PEQUEÑO| N1[NO LEÓN]
    P -->|SÍ| L2[LEÓN]
    P -->|NO| N2[NO LEÓN]
```

Reglas equivalentes (una por hoja, §4.3): `SI Tamaño=GRANDE Y Peludo=SÍ → LEÓN` · `SI Tamaño=GRANDE Y Peludo=NO → NO LEÓN` · `SI Tamaño=MEDIANO → LEÓN` · `SI Tamaño=PEQUEÑO → NO LEÓN`.

**La fórmula como procedimiento** (pseudocódigo con la traza del ejemplo):

```
FUNCIÓN informacion(p, n):                     // I(p;n)
    total ← p + n
    resultado ← 0
    PARA cada cantidad c en {p, n}:
        SI c > 0:                              // un subconjunto puro aporta 0
            prob ← c / total
            resultado ← resultado − prob · log2(prob)
    DEVOLVER resultado                         // informacion(3, 5) = 0,9544

ALGORITMO ganancia(atributo A):
    p ← positivos de la tabla                  // 3 LEÓN
    n ← negativos de la tabla                  // 5 NO LEÓN
    total ← informacion(p, n)                  // I(3;5) = 0,9544
    entropia ← 0
    PARA cada valor v de A:                    // Tamaño: GRANDE, MEDIANO, PEQUEÑO
        Sv ← ejemplos con A = v                // GRANDE: 4 casos (2 LEÓN, 2 NO LEÓN)
        pv ← positivos de Sv;  nv ← negativos de Sv
        entropia ← entropia + |Sv|/(p+n) · informacion(pv, nv)
                                               // E(Tamaño) = 4/8·I(2;2) + 1/8·I(1;0) + 3/8·I(0;3)
                                               //           = 0,5·1 + 0 + 0 = 0,5
    DEVOLVER total − entropia                  // G(Tamaño) = 0,9544 − 0,5 = 0,4544
```

Se repite `ganancia` para cada atributo y **el de mayor valor es la raíz**; en cada rama se vuelve a aplicar el mismo procedimiento sobre el subconjunto correspondiente (sin el atributo ya usado).

---

## 5. Algoritmos generadores de reglas: 1R y PRISM

### 5.1 Algoritmo 1R

Genera un **árbol de decisión de un solo nivel**, o visto de otra manera, una regla de decisión que evalúa **un solo atributo**: `SI atributo_i = valorA ENTONCES Clase = C`.

```
Para cada atributo:
    Para cada valor del atributo, crear una regla:
        1. Contar las ocurrencias de cada clase
        2. Encontrar la clase más frecuente
        3. Crear la regla que asigne esa clase al par atributo-valor
    Calcular la proporción de error del conjunto de reglas del atributo
Elegir el conjunto de reglas con la MENOR proporción de error
```

La proporción de error se determina contando los errores sobre los datos de entrenamiento: las instancias que **no** pertenecen a la clase mayoritaria de cada regla. Cada atributo genera un conjunto de reglas (una por valor); gana el atributo cuyo conjunto tenga menos errores. En WEKA es el clasificador **OneR**.

### 5.2 Algoritmo PRISM ("separa y reinarás")

Método de **cobertura**: toma cada una de las clases y busca la manera de **cubrir todas las instancias que pertenecen a ella excluyendo las que no**. Cada regla se construye **condición por condición**, eligiendo siempre la condición que maximiza la **precisión p/t** (p = instancias positivas cubiertas; t = total de instancias cubiertas).

```
Para cada clase C:
    Inicializar E con todas las instancias del conjunto
    Mientras E contenga instancias de la clase C:
        Crear una regla R con antecedente vacío que predice C
        Repetir hasta que R sea perfecta (o no haya más atributos):
            Para cada atributo A no mencionado en R y cada valor v:
                Considerar agregar la condición A=v al antecedente
            Seleccionar A y v que MAXIMICEN p/t
            (empates: elegir la condición con mayor p)
            Agregar A=v a R
        Eliminar de E las instancias cubiertas por R
```

**Ejemplo (tabla león)** — construcción de la primera regla para la clase LEÓN:

Se evalúa p/t de cada condición candidata: Peludo=SÍ → 3/5 = 0,6; Peludo=NO → 0/3 = 0; Edad=VIEJO → 1/3 = 0,33; Edad=JOVEN → 2/5 = 0,4; Tamaño=GRANDE → 2/4 = 0,5; **Tamaño=MEDIANO → 1/1 = 1** ✓; Tamaño=PEQUEÑO → 0/3 = 0.

Se elige Tamaño=MEDIANO (mayor p/t). ✅ Según el criterio estándar de PRISM, la regla ya es perfecta (p/t = 1) y se detiene aquí: `SI Tamaño=MEDIANO ENTONCES Clase=LEÓN` (cubre 1 caso). 📖 El anexo de la cátedra continúa agregando condiciones hasta `SI Tamaño=MEDIANO Y Peludo=SÍ Y Edad=JOVEN ENTONCES Clase=LEÓN`; si el corrector sigue la letra del anexo, mostrá ese desarrollo. Se eliminan los casos cubiertos y se repite: en la segunda pasada se llega a `SI Peludo=SÍ Y Tamaño=GRANDE ENTONCES Clase=LEÓN` (cuando un atributo restante tiene igual p/t para todos sus valores, la regla queda como está). Luego se continúa igual para la clase NO LEÓN.

**Diferencia clave**: 1R elige *un* atributo y clasifica todo con él (simple, rápido, sorprendentemente competitivo); PRISM genera reglas exactas por clase mediante cobertura sucesiva.

---

## 6. WEKA

### 6.1 Qué es

Software de aprendizaje automático **de código abierto** desarrollado por la Universidad de Waikato (Nueva Zelanda). Accesible por interfaz gráfica, consola o API Java. Permite hacer ML **sin programar**: reglas de asociación, agrupación (clustering), clasificación, regresión, manipulación de datos y combinación de modelos. Versión estable usada: 3.8.

### 6.2 Formato ARFF

Los archivos de WEKA son de tipo **.arff**: una cabecera que declara los atributos y su tipo, y una sección `@data` con las instancias:

```
@attribute outlook {sunny, overcast, rainy}   ← atributo nominal
@attribute temperature numeric                ← atributo numérico
@attribute play {yes, no}                     ← clase
@data
sunny,85,85,FALSE,no
...
```

### 6.3 Los cuatro entornos de trabajo

1. **Simple CLI**: consola para invocar directamente los paquetes de WEKA con Java.
2. **Explorer**: entorno visual principal (pestañas Preprocess, Classify, Cluster, Associate, Select attributes, Visualize).
3. **Experimenter**: automatización de tareas para experimentos a gran escala (comparar varios algoritmos sobre varios datasets).
4. **KnowledgeFlow**: proyectos de minería de datos mediante flujos de información (diagramas de bloques).

### 6.4 Modos de evaluación en Classify

- **Use training set**: evalúa sobre los mismos datos con que entrenó (optimista, tiende a sobreestimar).
- **Cross-validation** (k *folds*): divide el dataset en k partes; entrena con k−1 y evalúa con la restante, rotando; promedia los resultados. Es el método más robusto con pocos datos.
- **Supplied test set**: evalúa con un archivo de prueba independiente.
- **Percentage split**: separa un porcentaje para test.

---

## 7. Evaluación de clasificadores (métricas de WEKA)

### 7.1 Matriz de confusión

Herramienta que permite **visualizar el desempeño** de un algoritmo de aprendizaje supervisado. Con dos clases:

|  | Predicho Positivo | Predicho Negativo |
|---|---|---|
| **Real Positivo** | TP (verdadero positivo) | FN (falso negativo) |
| **Real Negativo** | FP (falso positivo) | TN (verdadero negativo) |

Los aciertos (TP y TN) quedan en la **diagonal principal**; los errores (FP y FN) fuera de ella.

### 7.2 Métricas derivadas (fórmulas + interpretación)

| Métrica | Fórmula | Qué mide |
|---|---|---|
| **Exactitud (Accuracy)** | $(TP+TN)/(TP+FN+FP+TN)$ | Porcentaje de predicciones correctas sobre el total |
| **TPR / Recall / Sensibilidad / Cobertura** | $TP/(TP+FN)$ | Capacidad de detectar los casos positivos o relevantes |
| **TNR / Especificidad (Specificity)** | $TN/(TN+FP)$ | Capacidad de discriminar correctamente los casos negativos |
| **FPR (False Positive Rate)** | $FP/(FP+TN)$ | Probabilidad de "falsa alarma" |
| **FOR (False Omission Rate)** | $FN/(FN+TN)$ | Predicciones negativas incorrectas sobre el total de predicciones negativas |
| **Precisión (Precision)** | $TP/(TP+FP)$ | Porcentaje de las predicciones positivas que son correctas |
| **F-measure** | $2 \cdot \frac{Precision \cdot Cobertura}{Precision + Cobertura}$ | Caracteriza con un único valor la bondad del clasificador (media armónica de precisión y cobertura) |

**Advertencia clave sobre la exactitud** (cae en los parciales): en conjuntos de datos **poco equilibrados no es una métrica útil**. Si se intenta predecir una enfermedad rara y el algoritmo clasifica a **todos** como sanos, puede tener 99% de exactitud y ser **totalmente inútil** (no detecta ni un enfermo).

En matrices de más de dos clases: el TPR de una clase es el elemento de la diagonal dividido por la suma de su **fila**; el FPR es la suma de su **columna** menos la diagonal, dividida por la suma de las filas de las otras clases.

**Ejemplo completo de cálculo** (test de una enfermedad sobre 200 personas; fila = clase real, columna = predicción; "enfermo" como clase positiva):

|  | Pred. Enfermo | Pred. Sano |
|---|---|---|
| **Real Enfermo** | TP = 40 | FN = 10 |
| **Real Sano** | FP = 20 | TN = 130 |

- Exactitud = (40+130)/200 = **0,85** → el modelo acierta el 85% del total de casos.
- TPR = 40/(40+10) = **0,80** → detecta el 80% de los enfermos reales.
- TNR = 130/(130+20) = **0,867** → discrimina correctamente el 86,7% de los sanos.
- FPR = 20/(20+130) = **0,133** → el 13,3% de los sanos son "falsa alarma".
- FOR = 10/(10+130) = **0,071** → el 7,1% de las predicciones "sano" son en realidad enfermos.
- Precisión = 40/(40+20) = **0,667** → de los que el modelo marca como enfermos, el 66,7% lo son.
- F-measure = 2·(0,667·0,80)/(0,667+0,80) = **0,727**.

**Cómo interpretar cada medida en un examen** (siempre piden "explique qué significa el valor obtenido"):

- *Exactitud X*: "el modelo clasifica correctamente el X% del total de casos" (+ advertencia de desbalance si aplica).
- *TPR X*: "el modelo detecta el X% de los casos positivos reales" (capacidad de detectar casos relevantes).
- *TNR X*: "el modelo discrimina correctamente el X% de los casos negativos".
- *FPR X*: "la probabilidad de que una predicción positiva sea una falsa alarma sobre el total de negativos es X%".
- *FOR X*: "el X% de las predicciones negativas son incorrectas (positivos omitidos)".
- *Precisión X*: "de todo lo que el modelo predijo como positivo, el X% es correcto".

**Todas las métricas paso a paso** (pseudocódigo con la traza del ejemplo):

```
ALGORITMO metricas(matriz de confusión):
    TP, FN, FP, TN ← celdas de la matriz       // 40, 10, 20, 130
    total ← TP + FN + FP + TN                  // 200

    Exactitud ← (TP + TN) / total              // 170/200  = 0,85
    TPR       ← TP / (TP + FN)                 //  40/50   = 0,80   (fila de los positivos reales)
    TNR       ← TN / (TN + FP)                 // 130/150  = 0,867  (fila de los negativos reales)
    FPR       ← FP / (FP + TN)                 //  20/150  = 0,133
    FOR       ← FN / (FN + TN)                 //  10/140  = 0,071  (columna "predicho negativo")
    Precisión ← TP / (TP + FP)                 //  40/60   = 0,667  (columna "predicho positivo")

    F ← 2·Precisión·TPR / (Precisión + TPR)    // 2·0,667·0,80/1,467 = 0,727 (media armónica)
    MCC ← (TP·TN − FP·FN) /
          √((TP+FP)·(TP+FN)·(TN+FP)·(TN+FN))   // 5000/√(60·50·150·140) = 5000/7937 = 0,63
```

Truco para no perderse: TPR y TNR se leen por **fila** (lo real); Precisión y FOR se leen por **columna** (lo predicho).

### 7.3 Curva ROC (Receiver Operating Characteristic)

- En problemas complejos un clasificador aumentará el número de TP **a costa de incrementar también los FP**. Se busca un clasificador que incremente TP a un ritmo (mucho) mayor que FP.
- Gráfico **bidimensional**: eje X = **FPR**, eje Y = **TPR**. Muestra el **compromiso entre beneficio (TP) y coste (FP)**.
- La diagonal representa un clasificador aleatorio; cuanto más se "abomba" la curva hacia la esquina superior izquierda, mejor.

```
 TPR
 1,0 | *(0;1) ideal    . . . . *
     |        . . * '
     |    . '                      curva ROC de un buen
     |  .'             /           clasificador (AUC → 1)
     | .             /
     |.            /    diagonal: clasificador aleatorio
     |.          /      (TPR = FPR, AUC = 0,5)
     |.        /
 0,0 +------/------------------ FPR
     0,0                     1,0
```

### 7.4 AUC / ROC Area

El **área bajo la curva ROC** representa en un **único valor** el rendimiento del clasificador. Mientras más cercano a 1, mejor. Útil para **comparar clasificadores** entre sí.

### 7.5 MCC (Coeficiente de Correlación de Matthews)

Informa la **calidad de la clasificación de las clases**. Es considerada una **medida equilibrada** (funciona bien incluso con clases desbalanceadas).

- 📖 **Cátedra**: "se tienen en cuenta los valores TP, FP y FN".
- ✅ **Corroborado**: la fórmula real usa **las cuatro celdas** de la matriz (incluye TN):

$$MCC = \frac{TP \cdot TN - FP \cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$$

Da valores entre −1 y +1: +1 = predicción perfecta, 0 = azar, −1 = desacuerdo total.

### 7.6 Área PRC (Precisión vs. Recall)

Dice **cómo es el comportamiento de cada clase** usando precisión vs. recall. Igual que ROC: más cercano a 1, mejor. Indica en qué porcentaje los clasificadores se comportan de manera correcta (preferible a ROC cuando hay fuerte desbalance de clases).

### 7.7 Estadística de Kappa (Kappa de Cohen)

Es una medida de **concordancia entre dos muestras categóricas dependientes**; se utiliza para saber si las mediciones de **dos evaluadores concuerdan** (la variable evaluada debe ser **nominal**). Es una medida de la **fiabilidad** con la que dos evaluadores miden lo mismo. En WEKA compara el clasificador contra un clasificador aleatorio.

$$\kappa = \frac{p_o - p_e}{1 - p_e}$$

- $p_o$ = concordancia **observada** (proporción de casos donde ambos evaluadores coinciden).
- $p_e$ = concordancia **esperada por azar**: para cada categoría, se multiplica la proporción con que cada evaluador la asigna, y se suman esos productos.

**Ejemplo de la cátedra** (2 médicos evalúan depresión en 50 personas): coinciden en 36 de 50 → $p_o = 0{,}72$. Evaluador 1 dice "no deprimido" al 50% y evaluador 2 al 46% → azar "no deprimido" = 0,5 × 0,46 = 0,23; azar "deprimido" = 0,5 × 0,54 = 0,27 → $p_e = 0{,}23 + 0{,}27 = 0{,}50$. Entonces $\kappa = (0{,}72-0{,}50)/(1-0{,}50)$ (✅ valor exacto: **0,44**; 📖 el anexo lo redondea a 0,4).

```
ALGORITMO kappa:
    po ← coincidencias entre evaluadores / total          // 36/50 = 0,72
    PARA cada categoría c:
        pe_c ← proporción(evaluador1 dice c) · proporción(evaluador2 dice c)
                                               // "no deprimido": 0,50 · 0,46 = 0,23
                                               // "deprimido":    0,50 · 0,54 = 0,27
    pe ← Σ pe_c                                // 0,23 + 0,27 = 0,50
    DEVOLVER (po − pe) / (1 − pe)              // (0,72 − 0,50) / (1 − 0,50) = 0,44
```

**Interpretación (Landis & Koch, 1977):**

| κ | Concordancia |
|---|---|
| < 0 | Pobre (peor que el azar) |
| 0,00 – 0,20 | Leve |
| 0,21 – 0,40 | Aceptable |
| 0,41 – 0,60 | Moderada |
| 0,61 – 0,80 | Considerable |
| 0,81 – 1,00 | Casi perfecta |

---

## 8. Clustering (aprendizaje no supervisado)

### 8.1 Concepto y aplicaciones

Agrupar instancias **sin etiquetas** por similitud. Aplicaciones vistas: **segmentación de mercado**, **análisis de redes sociales**, **análisis de datos astronómicos**. En WEKA: pestaña *Cluster*; algoritmos relevantes: **K-means (SimpleKMeans)**, **EM** y **Cobweb**.

### 8.2 K-means (K-medias)

**Idea**: agrupa objetos en **k grupos (clusters)** basándose en sus características, **minimizando la suma de distancias entre cada objeto y el centroide (semilla)** de su cluster.

**Algoritmo (paso a paso):**

1. Comenzamos con los datos.
2. Plantamos las k semillas (centroides iniciales, usualmente al azar).
3. Asignamos cada dato a la semilla más cercana.
4. Desplazamos las semillas al centro (media) de cada grupo.
5. Repetimos 3–4 hasta que **los centroides ya no se mueven** o **no hay cambios en la asignación**.

```mermaid
graph TD
    A[1. Datos] --> B[2. Plantar k semillas al azar]
    B --> C[3. Asignar cada dato a la semilla más cercana]
    C --> D[4. Mover cada semilla a la media de su grupo]
    D --> E{¿Los centroides<br>se movieron?}
    E -->|Sí| C
    E -->|No| F[Convergió: clusters finales]
```

**Formulación**: los objetos son vectores reales de $d$ dimensiones; se construyen k grupos $S=\{S_1,...,S_k\}$ minimizando $\sum_{i=1}^{k}\sum_{x_j \in S_i} \lVert x_j - \mu_i \rVert^2$.

**Características (lista de parcial):**

- Solo **datos numéricos**.
- Usa **distancia cuadrática** (euclídea al cuadrado).
- **Requiere normalización** de los datos.
- **Admite ruido**.
- Produce agrupaciones **fijas y disjuntas** (cada punto pertenece a exactamente un cluster).
- **Depende mucho de las semillas** iniciales (puede converger a soluciones distintas).
- Está basado en los **grafos o diagramas de Voronoi**: cada centroide define una región de Voronoi (el conjunto de puntos más cercanos a él que a cualquier otro centroide); las fronteras son las mediatrices entre semillas.
- Nota de la cátedra: **no usar con k > 25**.

**¿Cómo elegir k? — Método del codo:**

- Utiliza la **distancia media de las observaciones a su centroide** (varianza intra-cluster).
- Cuanto más grande es k, la varianza intra-cluster **tiende a disminuir**; cuanto menor la distancia intra-cluster, más **compactos** los clusters.
- Se busca el valor de k que satisfaga que **un incremento de k no mejore sustancialmente** la distancia media intra-cluster (el "codo" de la curva).

**K-medias paso a paso** (pseudocódigo con una traza 1D para ver el algoritmo desnudo):

```
ALGORITMO k_medias(datos, k):                  // traza: datos {1,2,3,10,11,12}, k = 2
    centroides ← k datos elegidos al azar      // supongamos {3, 10}
    REPETIR:
        PARA cada dato x:                      // 3. asignación
            asignar x al centroide con menor distancia²
                                               // {1,2,3} van con 3 · {10,11,12} van con 10
        PARA cada grupo g:                     // 4. actualización
            centroide(g) ← media de los datos de g
                                               // media{1,2,3} = 2 · media{10,11,12} = 11
    HASTA que los centroides no cambien        // 2ª vuelta: mismas asignaciones,
                                               // mismas medias → convergió
    DEVOLVER centroides y grupos               // {2, 11} con grupos {1,2,3} y {10,11,12}
```

### 8.3 EM (Expectation-Maximization)

**Mejora K-medias usando gaussianas**: en lugar de asignaciones duras, cada dato tiene un **grado de pertenencia** probabilístico a cada cluster (campanas de Gauss).

**Características (lista de parcial):**

- Mejora K-medias con **gaussianas**.
- Permite un número de clases **NO fijo**.
- Agrupaciones **NO disjuntas** (un dato puede pertenecer parcialmente a varios clusters).
- **Calcula las semillas con estadística** (media y varianza).
- Solo valores **numéricos**.
- **Requiere normalización**.

**Conceptos de la campana de Gauss** (preguntas de la cátedra):

- La **media** se encuentra en el **centro** de la campana.
- La **desviación estándar** se ubica en el **punto de inflexión** de la curva.
- La intersección de coordenadas de un dato con la curva da su **grado de pertenencia**: mientras más alta la Y, más alto el grado de pertenencia al conjunto.

**Los dos pasos del algoritmo:**

- **Esperanza (E)**: cálculo del **grado de pertenencia** de cada dato a cada gaussiana (probabilidad de pertenecer a cada una, donde μ es el centroide de la gaussiana).
- **Maximización (M)**: se **recalculan la media y la varianza** de cada gaussiana para que se ubiquen en el centro de su conjunto de datos.
- Termina cuando las medias/varianzas son **muy similares al paso anterior**.

```mermaid
graph LR
    E[Paso E: calcular el grado de<br>pertenencia de cada dato<br>a cada gaussiana] --> M[Paso M: recalcular la media<br>y la varianza de cada gaussiana]
    M --> C{¿μ y σ casi iguales<br>al paso anterior?}
    C -->|No| E
    C -->|Sí| F[Fin]
```

**(Pregunta de final)** La **matriz de pesos $W_k$ representa conocimiento**: se calcula con la probabilidad de pertenencia del dato al conjunto.

**Ajuste del número de clases:**

- Opción 1: crear k clases iniciales, correr EM, eliminar clases cuyo aporte (según la fórmula de coste) sea bajo comparado con las demás; si no hay que quitar ninguna, terminar.
- Opción 2: crear un número de nuevas clases; si una tiene **varianza casi nula** se quita; si dos tienen **medias y varianzas muy similares** se quita una de ellas. El **coste es un parámetro más** que depende de los datos del problema.

### 8.4 Cobweb

- Algoritmo de **clustering jerárquico** e **incremental**: realiza las agrupaciones **instancia a instancia**.
- Durante la ejecución se forma un **árbol de clasificación**: las **hojas** representan los clusters y el **nodo raíz** engloba todos los datos. Se comienza con un único nodo raíz; las instancias se agregan una a una y el árbol se actualiza en cada paso; encontrar el mejor lugar para una instancia nueva **puede requerir reconstruir todo el árbol**.
- Usa la medida **category utility** para guiar el aprendizaje y determinar la pertenencia de cada instancia a un grupo: valores altos = **alta similitud intra-grupo y baja similitud entre grupos**.
- Es sensible a dos parámetros:
  - **Acuity**: medida de error de un nodo; controla el **factor de ramificación**.
  - **Cut-off**: evita el **crecimiento desmesurado** del número de clusters (poda).

### 8.5 Normalización y escalado

Al usar cualquier algoritmo de clustering es **buena idea normalizar** los datos, porque los grupos se forman **a partir de distancias**: si hay atributos con escalas muy diferentes, **los de escala mayor dominarán las distancias**.

- **Normalizar**: lograr que los valores de cada atributo estén en **escalas similares**.
- **Escalado (Feature Scaling / MinMaxScaler)**: transforma los valores para confinarlos en un rango $[a,b]$, típicamente $[0,1]$ o $[-1,1]$:

$$x' = \frac{x - x_{min}}{x_{max} - x_{min}}$$

  Ejemplo: para los valores {2, 5, 8, 10} → min = 2, max = 10 → escalados: 0; 0,375; 0,75; 1. El mínimo siempre queda en 0 y el máximo en 1.

```
PARA cada x en {2, 5, 8, 10}:                  // min = 2, max = 10, rango = 8
    x' ← (x − min) / (max − min)
// 2 → (2−2)/8 = 0  ·  5 → 3/8 = 0,375  ·  8 → 6/8 = 0,75  ·  10 → 8/8 = 1
```

  **Qué significa escalar con este método** (pregunta de examen): transformar los valores para confinarlos en un rango fijo [0,1], de modo que atributos con escalas muy distintas queden comparables y ninguno domine las distancias.

- **Escalado estándar (StandardScaler) / normalización estadística**: a cada dato se le **resta la media** y se lo **divide por la desviación típica**, de forma que todas las características compartan una misma media (0) y desviación (1):

$$x' = \frac{x - \mu}{\sigma}$$

**Limitaciones señaladas por la cátedra**: el método min-max **no es adecuado para datos estables** ni para datos que presentan **variaciones como picos** (outliers comprimen todo el resto del rango).

---

# PARTE II — SEGUNDO PARCIAL

## 9. Regresión lineal

### 9.1 Concepto

Método **causal** en el que una variable conocida como **dependiente** está relacionada con una o más variables **independientes** por medio de una **ecuación lineal**.

- **Variable dependiente**: la que se desea **pronosticar** (su comportamiento depende de las independientes).
- **Variable independiente**: la que **influye** en la dependiente y por ende es causa de los resultados obtenidos en el pasado.
- La salida es **continua** (a diferencia de la clasificación, que produce categorías).

**El modelo** (la recta de regresión pasa siempre por el centro de la nube de dispersión):

$$\hat{y} = ax + b \qquad \equiv \qquad h_\theta(x) = \theta_1 x + \theta_0$$

donde $\theta_1$ (o $a$) es la **pendiente** y $\theta_0$ (o $b$) la **intercepción u ordenada al origen**; $\hat{y}$ es la estimación de $y$ según el modelo.

### 9.2 ¿Cómo debe ser el dataset? (pregunta de parcial)

1. **Relación lineal** entre las variables.
2. **Suficientes datos** (mínimo ~30 observaciones).
3. Variables **continuas**.
4. **Poca multicolinealidad** (las independientes no deben estar fuertemente correlacionadas entre sí).

### 9.3 Función a minimizar y descenso por el gradiente (pregunta de parcial)

El algoritmo se basa en **minimizar el Error Cuadrático Medio (MSE)** siguiendo el principio del **descenso por el gradiente**, que busca minimizar la **función coste** $J(\theta)$:

$$MSE = J(\theta) = \frac{1}{2n}\sum_{i=1}^{n}\left(\hat{y}^{(i)} - y^{(i)}\right)^2 = \frac{1}{2n}\sum_{i=1}^{n}\left(h_\theta(x^{(i)}) - y^{(i)}\right)^2$$

Se buscan valores de $\theta_i$ para los que $h_\theta(x)$ se acerque lo máximo posible a los $y$ de los ejemplos. La regla de actualización, **repetir hasta converger**:

$$\theta_j \Leftarrow \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)$$

El mínimo se alcanza cuando $\frac{\partial}{\partial \theta_j} J(\theta) = 0$ (se calculan las derivadas parciales en cada punto hasta encontrar el mínimo de la función).

**Tasa de aprendizaje α:**

- **α pequeña**: desciende lento; tarda más pero es preciso.
- **α grande**: desciende rápido; tarda poco pero podría pasarse del mínimo e incluso **divergir**.

**Derivadas parciales** (resultado del desarrollo):

$$\frac{\partial}{\partial \theta_0} J(\theta) = \frac{1}{n}\sum_{i=1}^{n}\left[h_\theta(x^{(i)}) - y^{(i)}\right]$$

$$\frac{\partial}{\partial \theta_1} J(\theta) = \frac{1}{n}\sum_{i=1}^{n}\left[h_\theta(x^{(i)}) - y^{(i)}\right]\cdot x^{(i)}$$

**Algoritmo**: mientras los θ sigan cambiando, calcular ambas derivadas y actualizar $\theta_0$ y $\theta_1$ simultáneamente con la regla anterior.

**El descenso por el gradiente como procedimiento** (traza con datos que cumplen y = 2x + 1 exacto; el algoritmo debe descubrirlo):

```
ALGORITMO regresion_lineal(pares (x, y)):      // {(0,1), (1,3), (2,5), (3,7), (4,9)}
    θ0 ← 0;  θ1 ← 0;  α ← 0,05                 // arranque en cero, tasa de aprendizaje
    REPETIR hasta converger:
        // derivadas parciales evaluadas con los θ actuales
        d0 ← (1/n) · Σ (θ1·x + θ0 − y)         // promedio de los errores h(x) − y
        d1 ← (1/n) · Σ (θ1·x + θ0 − y) · x     // errores ponderados por x
        // actualización SIMULTÁNEA de ambos parámetros
        θ0 ← θ0 − α · d0
        θ1 ← θ1 − α · d1
    DEVOLVER θ0, θ1                            // converge a θ0 = 1, θ1 = 2 → y = 2x + 1
                                               // con J(θ) = 0: ajuste perfecto, MSE mínimo
```

Sobre α: con α grande (p. ej. 0,4) cada paso **se pasa del mínimo** y el coste oscila o diverge; con α muy chica (0,001) converge igual pero necesita muchísimas más iteraciones — ese es el compromiso de la tasa de aprendizaje descrito arriba.

### 9.4 Algoritmo vectorizado (múltiples variables)

Con X = matriz donde cada ejemplo es una fila y cada columna un atributo (sin olvidar la fila para el **BIAS**), Θ = vector columna de parámetros, Y = vector columna de salidas conocidas:

- **Salida**: $H = X^T \Theta$
- **Error**: $D = H - Y$
- **Coste**: $J = \frac{1}{2n} D^T D$
- **Actualización**: $\Theta = \Theta - \alpha \cdot \frac{1}{n} X D$
- **Condición de parada**: $|j_t - j_{t-1}| < \varepsilon$ ó $|\Theta_t - \Theta_{t-1}| < \varepsilon$

### 9.5 Underfitting y Overfitting

- **Underfitting (subajuste)**: el modelo **no es capaz de capturar** la relación entre entrada y salida → alto índice de errores tanto en entrenamiento como en datos no vistos.
- **Overfitting (sobreajuste)**: el modelo **se ajusta exactamente a los datos de entrenamiento** → no puede hacer predicciones precisas sobre ningún dato distinto del de entrenamiento.

### 9.6 Medidas a tener en cuenta (preguntas de parcial)

**Coeficiente de correlación (R)**: medida que indica el **nivel de asociación** entre las variables dependiente e independiente. Es **adimensional**:

- $R = 0$: variables independientes.
- $R = 1$: relación lineal exacta.
- $R > 0$: relación **directa** (al aumentar x, aumenta y).
- $R < 0$: relación **inversa** (al aumentar una, disminuye la otra).

**Coeficiente de determinación (R²)**: medida que indica **porcentualmente el cambio** de la variable dependiente respecto a la independiente. Da valores **entre 0 y 1**; mientras más cerca de 1, mejor (mayor proporción de la variabilidad explicada por el modelo).

| Medida | Descripción |
|---|---|
| **Error Absoluto Medio (EAM / MAE)** | Promedio de la suma de los errores absolutos entre valores predichos y observados |
| **Raíz del Error Cuadrático Medio (RECM / RMSE)** | Raíz cuadrada del promedio de los errores al cuadrado. **Un valor 0 significa ajuste perfecto** |
| **Error Relativo Absoluto (ERA / RAE)** | Porcentaje que relaciona la suma de los errores de predicción respecto de la suma de las diferencias entre la media y los valores observados |
| **Raíz del Error Cuadrático Relativo (RECR / RRSE)** | Igual que el anterior pero con raíz cuadrada de los cuadrados |
| **Suma de cuadrados del error (SSE)** | La parte de la variabilidad de la variable dependiente que **no** conseguimos explicar con el modelo |
| **Error estándar** | Cuantifica cuánto se apartan los valores de la media de la población |

Diferencia absoluto vs. relativo: el **absoluto** es cuánto se desvía el resultado del valor real; el **relativo** es una medida porcentual en comparación con el valor real.

### 9.7 Árboles de regresión

Para salida continua también existen árboles: en WEKA, el algoritmo **M5P** (dentro de *trees*) construye árboles de regresión/modelo. En la práctica se comparan el coeficiente de correlación y los errores contra la regresión lineal clásica.

---

## 10. Redes neuronales — fundamentos

### 10.1 El modelo conexionista

Rama de la IA que **toma como modelo la mente humana**, intentando simular por computadora el funcionamiento del cerebro. Se inspira en una forma "primitiva" de representación del conocimiento y el razonamiento: **la neurona y sus relaciones**. Muchas neuronas conectadas en varias **capas** dan un potencial enorme para resolver casi cualquier tipo de problema.

### 10.2 La neurona biológica (pregunta de parcial)

Partes principales y funcionamiento:

- **Dendritas**: **reciben** señales de entrada desde otras células a través de los puntos de conexión llamados **sinapsis**.
- **Soma (cuerpo celular)**: **combina e integra** las señales (procesa) y emite señales de salida. Cuerpo más o menos esférico de 5 a 10 micras.
- **Axón**: **transporta** las señales de salida a los terminales axónicos (rama principal que se ramifica en su extremo).
- **Terminales sinápticos/axónicos**: **distribuyen** la información a un nuevo conjunto de neuronas (liberan neurotransmisores).

Funcionamiento (aclaración informal de la cátedra): las señales que llegan por las dendritas pueden ser **excitatorias o inhibitorias**; si la **suma ponderada** de éstas, realizada en el cuerpo, **supera el umbral de activación** en tiempo suficiente, la neurona **se dispara** enviando un impulso por su axón.

Datos: el cerebro humano tiene ~10¹⁵ conexiones. Las señales son de dos tipos: **eléctrica** (generada por la neurona, viaja por el axón) y **química** (entre terminales axónicos de una neurona y dendritas de otra).

### 10.3 Elementos de una red neuronal artificial

Una RNA está compuesta por:

- Un **gran número de elementos muy simples** que procesan de modo similar a las neuronas.
- Un **gran número de conexiones con "pesos"** entre los elementos: **los pesos codifican el conocimiento de la red**.

**Tres tipos de neuronas:**

| Tipo | Función |
|---|---|
| **De entrada** | Reciben los estímulos externos (relacionadas con el aparato sensorial) |
| **Ocultas** | Generan el procesado y la representación interna de la información |
| **De salida** | Dan la respuesta del sistema |

### 10.4 La neurona artificial (equivalencia con la biológica — pregunta de parcial)

| Neurona biológica | Neurona artificial |
|---|---|
| Dendritas / sinapsis | Entradas $x_i$ con pesos $w_{ij}$ |
| Soma (integración) | Suma ponderada $\sum_i w_{ij} x_i$ |
| Umbral de disparo | Función de activación $g(\cdot)$ |
| Axón / terminales | Salida $y_j$ hacia otras neuronas |

Funcionamiento (con j = neurona observada, i = neurona conectada):

- Cada conexión tiene un **peso numérico** que determina la fuerza y el signo de la conexión: si $W_{ij} > 0$ es **excitadora**; si $W_{ij} < 0$ es **inhibidora**; si $W_{ij} = 0$ **no hay conexión**.
- Cada unidad primero calcula la **suma ponderada de sus entradas**: $suma_j = \sum_{i=0}^{n} w_{ij}\, x_i$.
- Luego aplica una **función de activación g** a esa suma para producir la salida: $y_j = g(suma_j)$.
- La función de activación **habilita** (salida cerca de +1) la unidad cuando se dan las entradas adecuadas y la **desactiva** en caso contrario.

```
  x0 = 1 ───w0──╮
  x1 ─────w1────┤
  x2 ─────w2────┼──▶  Σ = Σ wi·xi  ──▶  g(Σ)  ──▶  y
   ⋮            │     (soma:            (umbral /      (axón: salida
  xn ─────wn────╯     integración)      activación)     hacia otras neuronas)
 (dendritas con
  pesos sinápticos)
```

---

## 11. Modelo de Hopfield

### 11.1 Qué es

Una **memoria asociativa** (analogía física de la memoria): memoriza patrones y, ante una entrada parecida (incluso **parcial o incompleta**), evoluciona hasta el patrón almacenado más similar.

### 11.2 Características (lista de parcial — cae siempre)

- Red neuronal **monocapa**.
- Suele manejar valores de **[1, −1]** (bipolares).
- La salida de cada nodo **se conecta a todos los demás** (red totalmente conectada).
- Conexiones **multidireccionales** (simétricas: $w_{ij} = w_{ji}$).
- **No se permiten conexiones de una neurona consigo misma** → la **diagonal principal de W es 0**.
- La red **siempre converge** a la solución de uno de los patrones aprendidos, aun con información parcial en la entrada.
- Usa función de activación **tipo escalón** para el modelo discreto.
- Aprendizaje **no supervisado de tipo Hebbiano**: $\Delta w_{ij} = y_i \cdot y_j$.
- Muy buena para **reconocer patrones**.
- **Capacidad**: se estima empíricamente que **cada 7 neuronas se puede almacenar 1 patrón**; regla general: $\text{cantidad de patrones} = 0{,}14 \cdot N$ (N = cantidad de neuronas).

**Gráfico correcto de una red de Hopfield de 4 neuronas** (para el ejercicio "¿el gráfico es correcto?"): todas conectadas con todas, ninguna consigo misma —

```mermaid
graph LR
    N1((N1)) --- N2((N2))
    N1 --- N3((N3))
    N1 --- N4((N4))
    N2 --- N3
    N2 --- N4
    N3 --- N4
```

Con N neuronas debe haber $\binom{N}{2} = N(N-1)/2$ conexiones (aquí 6): si falta alguna, o si aparece un lazo de una neurona a sí misma, el gráfico es **incorrecto**.

### 11.3 Funcionamiento

- Consiste en **memorizar varios patrones** como si de una memoria se tratase.
- Si se presenta a la entrada alguna de las informaciones almacenadas, la red **evoluciona hasta estabilizarse** en ella.
- Puede evolucionar a la salida **más parecida** pese a recibir entradas parciales o incompletas.
- La información de entrada debe codificarse como **vector**; cada neurona recibe **un elemento** del vector.

### 11.4 Aprendizaje (cálculo de la matriz W)

El mecanismo es **no supervisado u off-line**: la red calcula la matriz de pesos W a partir de un conjunto de patrones de ejemplo que se pretende que memorice, y luego entra en funcionamiento.

$$W = \sum_{k=1}^{m} E_k^T E_k - m \cdot I$$

Se calcula el producto de cada patrón (vector fila) por su transpuesta, se suman todos los productos y **se resta la identidad** (multiplicada por la cantidad de patrones) **porque las neuronas no pueden conectarse consigo mismas** → todos los elementos de la diagonal principal quedan en **0**.

**(Pregunta de parcial)** ¿Qué significa la matriz W? Representa las **conexiones sinápticas entre las neuronas** y determina la **fuerza de esas conexiones** (es donde reside el conocimiento de la red). ¿Qué significa que la diagonal sea 0? Que **no se permite la conexión de una neurona consigo misma**: por eso toda posición con i = j vale siempre 0.

### 11.5 Funcionamiento (reconocimiento)

Dado un patrón de prueba T:

1. Calcular $T \cdot W$.
2. Aplicar la función de activación **escalón** al resultado (positivo → 1, negativo → −1).
3. Si la salida **es igual a la entrada**, la red **convergió** (reconoció el patrón).
4. Si es distinta, tomar la salida como nueva entrada y **repetir** hasta estabilizarse. La red converge al patrón de entrenamiento más parecido.

**Ejemplo de la cátedra**: con patrones de 4 componentes, para T1 se obtiene F(6,6,6,−6) = [1,1,1,−1] = T1 → convergió en un paso. Para T2 = [−1,−1,−1,−1]: primera pasada da [−1,−1,−1,1] ≠ entrada; segunda pasada da otra vez [−1,−1,−1,1] → convergió al patrón E2 = [−1,−1,−1,1] (reconoció la entrada ruidosa como E2).

**Hopfield paso a paso** (aprendizaje + reconocimiento, con la traza del ejemplo):

```
ALGORITMO aprender(patrones E1..Em):           // E1 = [1,1,1,−1] · E2 = [−1,−1,−1,1]
    W ← Σ Ek^T · Ek − m·I                      // fuera de la diagonal: W[i][j] = Σ Ek[i]·Ek[j]
                                               //        [ 0  2  2 −2]
                                               //  W  =  [ 2  0  2 −2]
                                               //        [ 2  2  0 −2]
                                               //        [−2 −2 −2  0]   ← diagonal en 0

ALGORITMO recordar(entrada T):
    REPETIR:
        salida ← escalón(T · W)                // componente > 0 → 1 · componente < 0 → −1
        SI salida = T: DEVOLVER T              // salida = entrada → convergió
        T ← salida                             // si no, realimentar y repetir

// recordar([1,1,1,−1]):    T·W = (6, 6, 6, −6) → [1,1,1,−1] = entrada → E1 en 1 paso
// recordar([−1,−1,−1,−1]): 1ª pasada → [−1,−1,−1,1] ≠ entrada → realimentar
//                          2ª pasada → [−1,−1,−1,1] = entrada → convergió a E2
//                          (reconoció la entrada ruidosa como el patrón más parecido)
```

**Cómo se usa la capacidad en la práctica** (método, no memorizar casos):

- *Verificar un gráfico de red de Hopfield*: chequear que **todas** las neuronas estén conectadas con todas las demás y que **ninguna** se conecte consigo misma.
- *De neuronas a patrones*: una red de N nodos almacena aproximadamente $0{,}14 \cdot N$ patrones.
- *De patrones a neuronas* (despejar N): para almacenar P patrones, $N = P / 0{,}14$, **redondeando hacia arriba a entero** (la cantidad de neuronas debe ser un número entero; una cantidad fraccionaria de patrones no es almacenable como tal, pero el despeje indica cuántas neuronas cubrirían esa capacidad).

---

## 12. Perceptrón

### 12.1 Características

- Inventado por **Frank Rosenblatt** (✅ en **1957–1958**, Cornell Aeronautical Laboratory; 📖 las slides citan 1962, que es el año de su libro *Principles of Neurodynamics*). Fue **uno de los primeros modelos neuronales**.
- **Imita a una neurona**: toma la **suma ponderada de sus entradas** y envía a la salida un **1** si la suma es más grande que algún **valor umbral ajustable** (de otro modo devuelve 0, o −1 según la convención).
- Conexiones **unidireccionales** (feedforward).
- **Ideal para problemas linealmente separables**.
- Entrenamiento **supervisado**.

### 12.2 Modo de cálculo

- **Función suma ponderada**: $suma = \sum_{i=0}^{n} w_i x_i$ (con $x_0 = 1$ como entrada de umbral/bias).
- **Función salida** (escalón): $y = 1$ si $suma > 0$; $y = 0$ (o −1) en caso contrario.
- Igualando la suma a cero se obtiene la **ecuación de la recta** (superficie de decisión): para dos entradas, $w_0 + w_1 x_1 + w_2 x_2 = 0$ define la recta que separa las dos clases en el plano.

Ejemplos linealmente separables: compuertas **AND** y **OR** (existe una recta que separa los 0 de los 1).

**Topología de un perceptrón de 2 entradas** (la que se pide graficar en los parciales):

```
  x0 = 1 ───w0──╮
  x1 ─────w1────┼──▶  Σ  ──▶  escalón  ──▶  y ∈ {0, 1}
  x2 ─────w2────╯
```

### 12.3 Algoritmo de entrenamiento (pregunta de parcial)

1. **Inicializar** los pesos con valores aleatorios (pequeños).
2. Para cada patrón de entrada, **calcular la salida**.
3. Si hay error, **ajustar los pesos**: $\Delta w = \eta \cdot (d - y) \cdot x$ (donde d = salida deseada, y = salida obtenida, η/α = tasa de aprendizaje).
4. **Repetir** hasta la convergencia (error 0 sobre el conjunto de entrenamiento).

En el ejemplo de la cátedra se usa una tasa de apreciación α = 0,5, se entrenan los primeros patrones y se testea con los restantes: cuando el error es 0 para todos los patrones de entrenamiento, termina el proceso.

**El algoritmo paso a paso** (traza con la compuerta AND de 2 entradas):

```
ALGORITMO entrenar_perceptron(patrones):       // AND: (0,0)→0 (0,1)→0 (1,0)→0 (1,1)→1
    w ← [0, 0, 0]                              // 1. inicializar (w0 = umbral/bias, x0 = 1)
    η ← 0,5                                    //    tasa de aprendizaje
    MIENTRAS alguna pasada tenga errores:      // 4. repetir hasta convergencia
        PARA cada patrón (x, d):
            y ← escalón(Σ wi·xi)               // 2. calcular la salida
            SI y ≠ d:                          // 3. hay error → ajustar cada peso
                w ← w + η · (d − y) · x
    DEVOLVER w

// Con el AND converge en 6 pasadas a w = [−1; 1; 0,5]
// → recta separadora: 1·x1 + 0,5·x2 − 1 = 0
//   (verificación: (1,1) da 1+0,5−1 = 0,5 > 0 → 1 ✓; los otros tres dan ≤ 0 → 0 ✓)
// Con el XOR el MIENTRAS no termina NUNCA: la recta no existe y los
// pesos giran en círculos — esa es la falla del Perceptrón, hecha algoritmo.
```

### 12.4 El problema XOR — cuándo falla el Perceptrón (pregunta de parcial)

- El Perceptrón **falla ante problemas que NO son linealmente separables**. El caso emblemático es la compuerta **XOR**: no existe ninguna recta que separe los puntos {(0,1),(1,0)} de {(0,0),(1,1)}.

```
  x2
  1 |  ●(0,1)        ○(1,1)       ● = clase 1     ○ = clase 0
    |
    |       ¿recta?  ← imposible: cualquier recta que deje
    |                  a los dos ● del mismo lado, deja
    |                  también a un ○ (y viceversa)
  0 |  ○(0,0)        ●(1,0)
    +──────────────────── x1
       0             1
```
- **Método general para analizar una tabla de verdad de n variables**: ubicar los $2^n$ puntos en el (hiper)cubo unitario, marcar la clase de cada uno y analizar si existe una **recta (2D) o hiperplano (3D+)** $w_0 + w_1x_1 + \dots + w_nx_n = 0$ que separe perfectamente los 1 de los 0. Si existe, la tabla es resoluble con un Perceptrón simple y la topología es un perceptrón de n entradas + bias con esos pesos; si no existe, hay que justificar por qué ningún plano puede separar las clases.
- ✅ **Corroborado — casos de referencia**: el **OR de n variables ES linealmente separable** (salida 0 solo en el origen; sirve el hiperplano $x_1+\dots+x_n-0{,}5=0$) y el **AND de n variables también ES linealmente separable** (salida 1 solo en (1,…,1); sirve $x_1+\dots+x_n-(n-0{,}5)=0$; para n=3: $x_1+x_2+x_3-2{,}5=0$). Un único punto positivo ubicado en un vértice del cubo **siempre** puede separarse con un plano. Las únicas funciones booleanas de referencia NO separables son **XOR y su negación (XNOR)**.
- 📖 **Cátedra**: en el resumen previo quedó registrada como respuesta esperada que "el AND de 3 variables NO es linealmente separable porque el único caso con salida 1 es cuando todas las entradas son 1". ✅ Ese razonamiento es incorrecto según la teoría estándar (ver punto anterior). Si un enunciado presenta una tabla distinta del AND puro, no asumas nada: aplicá el método del hiperplano a esa tabla concreta y dejá el desarrollo completo en la hoja.

**Solución al XOR con dos perceptrones**: la salida del primer perceptrón (AND con pesos 1,0; 1,0; umbral −1,5) sirve como entrada del segundo (OR con pesos 1,0; 1,0; umbral −0,5) mediante una **conexión contrapesada muy negativa** (−9,0). **El inconveniente**: el algoritmo de aprendizaje del perceptrón **no puede ajustar correctamente los pesos entre los perceptrones** (no sabe repartir el error hacia atrás) → se necesita **backpropagation**.

---

## 13. Redes multicapa — Backpropagation

### 13.1 Estructura

El objetivo es tomar una masa relativamente "amorfa" de elementos similares a las neuronas y **enseñarles a realizar cualquier tipo de tarea**: las redes multicapa permiten calcular "cualquier cosa" (aproximadores universales).

- Capas: **entrada → oculta(s) → salida** (puede haber más de una oculta).
- $W1_{ij}$: pesos entre la capa de **entrada y la oculta**.
- $W2_{ij}$: pesos entre la capa **oculta y la de salida**.
- Las activaciones "**saltan**" desde la capa de entrada hacia la oculta y de ésta hacia la de salida.
- **El conocimiento de la red está codificado en los pesos** de las conexiones.
- Los niveles de activación de la capa de salida determinan la **salida de la red**.

```mermaid
graph LR
    subgraph Entrada
        x1((x1)); x2((x2)); b1((bias))
    end
    subgraph Oculta
        h1((h1)); h2((h2)); b2((bias))
    end
    subgraph Salida
        y((y))
    end
    x1 -- W1 --> h1; x1 --> h2; x2 --> h1; x2 --> h2; b1 --> h1; b1 --> h2
    h1 -- W2 --> y; h2 --> y; b2 --> y
```

### 13.2 Cantidad de nodos ocultos

Es **difícil de determinar**: no existe una regla única y muchas veces se hace **empíricamente**. Ideas:

- Mantener el número de neuronas por capa **lo más bajo posible** (cada neurona es costo de procesamiento extra).
- **Regla de Baum-Haussler**:

$$N_{oculta} \leq \frac{N_{entren} \cdot E_{tolerable}}{N_{entrada} + N_{salida}}$$

donde $N_{entren}$ = número de patrones de entrenamiento, $E_{tolerable}$ = error deseado de la red, $N_{entrada}$ y $N_{salida}$ = número de nodos de entrada y de salida.
  - ✅ **Corroborado**: la regla original de Baum y Haussler (1989) usa la **suma** en el denominador (es la forma escrita arriba).
  - 📖 **Cátedra**: en la transcripción de las slides el separador del denominador es ambiguo y podría leerse como producto ($N_{entrada} \cdot N_{salida}$).

### 13.3 Funciones de activación (pregunta de parcial)

- El Perceptrón usa **escalón**; Backpropagation necesita funciones **continuas y diferenciables** (para poder derivar el error):
- **Sigmoide**: $salida = \frac{1}{1+e^{-suma}}$ → produce valores entre **0 y 1** (salidas "probabilísticas").
  - Si suma = 0 → salida = **0,5**; si la suma crece → tiende a **1**; si decrece → tiende a **0**.
- **Tangente hiperbólica**: produce valores entre **−1 y 1**.
- ¿Por qué éstas? Porque son **continuas y diferenciables**, requisito para propagar el error mediante derivadas.

```
escalon(s)  = 1 si s > 0; si no, 0             // Perceptrón — NO diferenciable (salta)
sigmoide(s) = 1 / (1 + e^(−s))                 // 0 a 1 — continua y diferenciable
tanh(s)                                        // −1 a 1 — misma forma de S

// Traza de la sigmoide:
//   sigmoide(0)   = 1/(1+e⁰)  = 1/2   = 0,5   → suma 0 cae justo en el medio
//   sigmoide(10)  = 1/(1+e⁻¹⁰) ≈ 0,9999       → satura hacia 1
//   sigmoide(−10) = 1/(1+e¹⁰)  ≈ 0,0000       → satura hacia 0

// La derivada de la sigmoide se expresa con su propia salida:
//   g'(s) = g(s) · (1 − g(s))  → por eso los deltas de backprop usan y·(1−y)
```

### 13.4 Funcionamiento simplificado del algoritmo (pregunta de parcial)

- Comienza con un conjunto de **pesos aleatorios**.
- La red **ajusta sus pesos cada vez que ve un par entrada/salida**.
- Cada par requiere **dos etapas**:
  1. **Paso hacia adelante**: se presenta un ejemplo de entrada y se permite que las activaciones se propaguen hasta alcanzar la capa de salida.
  2. **Paso hacia atrás**: la salida actual de la red se **compara con la salida objetivo** y se calcula el **error estimado** de las unidades de salida; se **ajustan los pesos** asociados a las unidades de salida para reducir esos errores; se **deriva el error estimado** de la capa de salida hacia las capas ocultas; por último, los errores se **propagan hacia atrás** hasta las conexiones procedentes de las unidades de entrada.

```mermaid
graph TD
    A[Pesos aleatorios iniciales] --> B[Paso adelante: propagar activaciones<br>entrada → oculta → salida]
    B --> C[Comparar salida con objetivo:<br>calcular el error]
    C --> D[Paso atrás: ajustar W2,<br>derivar el error a la oculta,<br>ajustar W1]
    D --> E{¿Error aceptable<br>en todos los pares?}
    E -->|No| B
    E -->|Sí| F[Red entrenada]
```

### 13.5 Algoritmo detallado (pasos iniciales según la cátedra)

1. Sea A = nº de unidades de entrada, C = nº de unidades de salida; **elegir B** = nº de unidades ocultas. Las capas de entrada y oculta poseen **una unidad extra usada como umbral** (bias).
2. **Inicializar los pesos** con valores aleatorios entre **−0,1 y 0,1**: $w1_{ij}$ y $w2_{ij}$.
3. Inicializar las activaciones de las unidades umbral (**nunca deben cambiar**): $x_0 = 1$ y $h_0 = 1$.
4. Elegir un par entrada/salida y asignar los niveles de activación a las unidades de entrada; propagar hacia adelante, calcular el error en la salida, retropropagar los errores ajustando primero $w2$ y luego $w1$; repetir con todos los pares hasta que el error sea aceptable.

**Backpropagation como procedimiento** — la red 2-2-1 que resuelve el XOR (lo que el Perceptrón solo no puede):

```
ALGORITMO backpropagation(pares (x, d)):       // XOR: (0,0)→0 (0,1)→1 (1,0)→1 (1,1)→0
    W1, W2 ← pesos aleatorios pequeños         // red 2-2-1 con bias en entrada y oculta
    REPETIR hasta que el error sea aceptable:
        PARA cada par (x, d):
            // ---- paso hacia adelante ----
            h ← sigmoide(W1 · x)               // activaciones de la capa oculta
            y ← sigmoide(W2 · h)               // salida de la red
            // ---- paso hacia atrás ----
            δy ← (d − y) · y·(1−y)             // error de salida · derivada de la sigmoide
            δh[i] ← δy · W2[i] · h[i]·(1−h[i]) // el error se DERIVA hacia cada oculta
                                               // (proporcional al peso que la conecta)
            W2 ← W2 + α · δy · h               // ajustar primero W2 (oculta→salida)...
            W1 ← W1 + α · δh · x               // ...y después W1 (entrada→oculta)

// Entrenada, la red responde ≈0 · ≈1 · ≈1 · ≈0: resolvió el XOR.
// El delta usa y·(1−y) porque la sigmoide es diferenciable — con la
// función escalón este paso sería imposible (no hay derivada).
```

Nota: según los pesos iniciales, la red puede caer en un **mínimo local** (las salidas quedan clavadas cerca de 0,5 y el error no baja más) — un fenómeno propio del descenso por gradiente que el Perceptrón no tiene; el límite del Perceptrón es otro (la separabilidad lineal).

### 13.6 Perceptrón vs. Backpropagation (comparación de parcial)

| Perceptrón | Perceptrón multicapa + Backpropagation |
|---|---|
| Monocapa (sin ocultas) | **Múltiples capas ocultas** |
| Solo problemas **linealmente separables** | Resuelve problemas **no lineales** |
| Función de activación **escalón** | **Sigmoide / tangente hiperbólica** (continuas y diferenciables) |
| Ajuste de pesos directo con el error | El error se **propaga hacia atrás** capa por capa |
| Supervisado | Supervisado |

---

## 14. Redes competitivas — Red de Kohonen

### 14.1 Fundamento biológico

- Basada en el principio de que en el cerebro **hay neuronas que se organizan en zonas** (mapas bidimensionales); p. ej., en el sistema auditivo hay una organización según la frecuencia.
- Parte de esa organización es **genéticamente heredada**, pero gran parte **se origina mediante el aprendizaje**.
- T. Kohonen presentó en **1982** una red con comportamiento similar: capaz de **formar mapas de características** como el cerebro humano.
- Aplicaciones: **reconocimiento de voz** y de **texto manuscrito**.

### 14.2 Variantes

- **LVQ (Learning Vector Quantization)**: para vectores de entrada de **una sola dimensión**.
- **TPM (Topology Preserving Map) o SOM (Self-Organizing Map)**: para vectores de entrada **bidimensionales o incluso tridimensionales** (en TPM).

### 14.3 Estructura y características (lista de parcial)

- Red **bicapa**: N neuronas de **entrada** y M de **salida**.
- Cada una de las N entradas se conecta con las M salidas mediante conexiones **feedforward**.
- Entre las neuronas de salida existen **conexiones laterales de inhibición** (peso negativo): cada neurona tiene **influencia sobre sus vecinas**. El valor de los pesos feedforward $w_{ij}$ durante el aprendizaje **depende de esas interacciones laterales**.
- Trabaja con **valores reales**.
- La función de activación de las neuronas de salida es de tipo **continua, lineal o sigmoidal**.
- Aprendizaje **no supervisado de tipo competitivo**, **off-line**: las neuronas de salida **compiten por activarse** y **solo una permanece activa** ante una determinada entrada (la **ganadora** / *winner takes all*).
- Divide el espacio en **vecindades**.

```mermaid
graph LR
    subgraph Entrada [Capa de entrada - N neuronas]
        e1((e1)); e2((e2))
    end
    subgraph Salida [Capa de salida - M neuronas]
        s1((s1)); s2((s2)); s3((s3))
    end
    e1 --> s1; e1 --> s2; e1 --> s3
    e2 --> s1; e2 --> s2; e2 --> s3
    s1 -. inhibición lateral .- s2
    s2 -. inhibición lateral .- s3
```

### 14.4 La función "sombrero mexicano" (pregunta de parcial)

La influencia de cada neurona de salida sobre las demás se modela con una función de tipo **sombrero mexicano** (ondícula de Ricker): representa la **influencia lateral** de la neurona p sobre la neurona j. Sus ejes son: **interacción lateral (Y)** vs. **distancia entre neuronas (X)** — excita fuertemente a las vecinas cercanas, inhibe a las intermedias y no afecta a las lejanas.

La salida de una neurona j ante un vector de entrada $E_k$ combina la parte feedforward y las interacciones laterales; la red **evoluciona hasta alcanzar un estado estable donde solo hay una neurona activa**.

### 14.5 Funcionamiento

Durante el funcionamiento, ante una entrada se calcula $\lVert E_k - W_j \rVert$, una **medida de la diferencia entre el vector de entrada y el vector de pesos** de las conexiones que llegan a cada neurona j: se pretende **encontrar el dato aprendido más parecido al de entrada** para averiguar qué neurona se activará.

### 14.6 Algoritmo de aprendizaje (pregunta de parcial)

1. **Inicializar los pesos** $w_{ij}$ con valores aleatorios pequeños y **fijar la zona inicial de vecindad** entre las neuronas de salida.
2. **Presentar una entrada** $E_k$ cuyas componentes son valores continuos.
3. **Determinar la neurona vencedora**: aquella j cuyo vector de pesos $W_j$ sea **el más parecido a la entrada** $E_k$; para ello se calculan las **distancias** entre ambos vectores, una por cada neurona de salida.
4. Una vez localizada la vencedora j*, **actualizar los pesos** de las conexiones feedforward que llegan a **dicha neurona y a sus vecinas** (acercándolos a la entrada).
5. **Repetir** hasta que los pesos se estabilicen y tiendan a un valor de error pequeño, **o por lo menos iterar un mínimo de 500 veces**.

**La competencia como procedimiento** (2 neuronas de salida "mapean" solas las 2 zonas de los datos, sin etiquetas):

```
ALGORITMO competencia_kohonen(datos):          // datos en dos zonas: cerca de (0,1; 0,1)
                                               // y cerca de (0,9; 0,9)
    W ← M vectores de pesos aleatorios         // 1. un vector por neurona de salida
    REPETIR al menos 500 veces:                // 5. mínimo de iteraciones
        e ← una entrada al azar                // 2. presentar una entrada
        ganadora ← neurona j con menor ||e − Wj||     // 3. competencia: gana la
                                               //    del vector de pesos más parecido
        Wganadora ← Wganadora + α · (e − Wganadora)   // 4. acercar sus pesos a la
                                               //    entrada (y los de sus VECINAS,
                                               //    según el sombrero mexicano)

// Al final cada vector de pesos queda en el centro de una zona:
// una neurona terminó cerca de (0,1; 0,15) y la otra cerca de (0,9; 0,85).
// La red "mapeó" los grupos sin recibir ninguna etiqueta.
```

---

## 15. Algoritmos Genéticos (AG)

### 15.1 Origen y definición

- 📖 **Cátedra**: las primeras ideas surgieron de la tesis de J. D. Bagley (1967), que 'influyó' en J. H. Holland, pionero de los AG. ✅ **Corroborado**: la relación es la inversa — Bagley fue doctorando de Holland; su tesis de 1967 (donde se acuñó el término 'algoritmo genético') se escribió bajo la supervisión de Holland, quien es el creador y pionero de los AG.
- Un sistema biológico eficiente desarrolla **estrategias exitosas de adaptación** para lograr su supervivencia: sobreviven los más aptos.
- Los AG **simulan la evolución de una población de individuos** mediante un **proceso iterativo** aplicado sobre un conjunto de estructuras. Cada estructura está compuesta de características que definen la **aptitud** del individuo en su entorno.
- Pueden concebirse como **métodos de optimización**: encontrar el máximo (o el valor más cercano al máximo) de una **función de aptitud** f asignada a cada individuo: $f(x_0) = \max_{x \in X} f(x)$.

### 15.2 Tabla de equivalencias genéticas (pregunta de parcial)

| Sistemas naturales | Algoritmos genéticos |
|---|---|
| **Cromosoma** | Individuo o estructura (una solución potencial, típicamente codificada en binario) |
| **Gen** | Característica o atributo |
| **Alelo** | Valor en una posición determinada |
| **Locus** | Posición en la estructura |
| **Genotipo** | Conjunto de genes o estructuras (potencial solución) |
| **Fenotipo** | Aptitud del individuo (resultado de pasar el cromosoma por la función de aptitud) |

### 15.3 Principios (selección natural de Darwin)

Se basa en la **selección natural**: los individuos que mejor se adaptan sobreviven; en cada generación debe heredarse la mejor configuración genética posible; los rasgos que favorecen el éxito deben estar más representados.

1. Los individuos de una población **tienen diferencias** (evitar la endogamia).
2. Las variaciones **pueden heredarse**.
3. Los organismos pueden tener **más descendientes de los que pueden sobrevivir** con los recursos disponibles.
4. Las variaciones que aumentan el éxito reproductivo tienen **mayor oportunidad de transmitirse**.

### 15.4 Aplicaciones y ventajas

- Resuelven **problemas complejos de forma rápida y eficiente**.
- Utilizan **muy poca información específica del problema**.
- Son **extensibles**: es fácil modificar o incorporar conocimiento en los operadores genéticos.
- Muy buenos para **problemas de optimización**: tamaño de enlaces en una red de comunicaciones, procesamiento de imágenes, reconocimiento de patrones.

### 15.5 Algoritmo simple

1. **Generar la población inicial** creando individuos aleatoriamente.
2. Cada generación se crea a partir de la anterior aplicando **tres operadores básicos**: **Selección, Cruza y Mutación**.
3. El proceso iterativo prosigue hasta cumplir alguna **condición de parada/corte**.
4. Al final, se elige el **mejor cromosoma** mediante la función de aptitud.

Aclaraciones de la cátedra: todo individuo seleccionado **se reemplaza por su sucesor** después de la cruza y mutación; los individuos **no seleccionados mueren inmediatamente**. No es obligatorio aplicar mutación en cada generación.

```mermaid
graph TD
    A[Población inicial aleatoria] --> B[Evaluar la aptitud<br>de cada individuo]
    B --> C{¿Condición<br>de corte?}
    C -->|Sí| G[Devolver el mejor cromosoma]
    C -->|No| D[Selección]
    D --> E[Cruza]
    E --> F[Mutación]
    F --> B
```

### 15.6 Métodos de selección

Dos familias: **proporcionales** (eligen según la aptitud relativa al resto de la población) y **basados en el orden** (confeccionan una tabla ordenada por aptitud).

**a) Ruleta (RWS, Goldberg 1989)** — proporcional:
A cada individuo se le asigna una **ranura de tamaño proporcional a su aptitud**; se "lanza una bolilla" tantas veces como individuos se quiera seleccionar. Ejemplo: individuo con aptitud 576 sobre un total de 1170 → 49,2% de la ruleta.

**b) Control del número esperado** — proporcional:
Se define $C_i = \frac{f_i}{\bar{f}}$ (aptitud del individuo dividido la aptitud promedio de la población), que determina la **cantidad de copias** a asignar a cada individuo. Nota de la cátedra: es determinante el **redondeo**: si los decimales son > 0,5 se suma 1.

**c) Elitista**:
Los métodos anteriores **no garantizan** preservar a los mejores (pueden ser reemplazados por sus hijos durante la cruza). El elitismo **preserva los mejores m individuos** de la generación actual incluyéndolos directamente en la siguiente. **Siempre se usa en combinación con otras variantes** (usarlo solo genera endogamia).

**d) Por ranking** — basado en el orden:
La población se ordena en forma **descendente por aptitud**; cada individuo recibe una cantidad de copias que **solo depende de su posición** en la tabla. Con n = tamaño de población y $R_{min} \in (0,1)$ = copias esperadas del **peor**:

$$copias(i) = R_{min} + 2\,\frac{(n-i)(1-R_{min})}{(n-1)}$$

- El **mejor** individuo recibe $2 - R_{min}$ copias; el **peor** recibe $R_{min}$.
- $(n-i)$ = inversión de la posición (valor alto → mejor posición); $(1-R_{min})$ = rango disponible a distribuir; $(n-1)$ = normalización por tamaño de población.
- Restricciones: $0 < R_{min}$ (el peor debe tener alguna chance) y $R_{min} < 1$ (si no, no habría diferencia entre individuos).

### 15.7 Métodos de cruza

- **Cruza simple (un punto)**: se elige **al azar** uno de los $l-1$ posibles puntos de cruza y se **intercambian los segmentos** entre los dos padres, generando dos hijos. Ej. con k=3: `XYY|XY` × `YYX|XX` → `XYYXX` y `YYXXY`.
- **Cruza multipunto**: el cromosoma se considera un **anillo** y se eligen **n puntos de cruza aleatorios**. La cruza simple es el caso particular n=1.
- **Cruza binomial**: para cada posición del hijo, se define $P_0$ = probabilidad de heredar el alelo **del padre** y $1-P_0$ = probabilidad de heredarlo **de la madre**.

**Selección y cruza paso a paso** (con los ejemplos de las slides como traza):

```
ALGORITMO ranking(población, Rmin):            // traza: n = 4, Rmin = 0,75
    ordenar la población por aptitud descendente
    PARA cada posición i de 1 a n:
        copias(i) ← Rmin + 2·(n−i)·(1−Rmin)/(n−1)

// i=1 (mejor): 0,75 + 2·3·0,25/3 = 1,25  = 2 − Rmin
// i=2:         0,75 + 2·2·0,25/3 = 1,08
// i=3:         0,75 + 2·1·0,25/3 = 0,92
// i=4 (peor):  0,75 + 0          = 0,75  = Rmin
// Σ copias = 4 = n → la población mantiene su tamaño

RULETA:  ranura(individuo) ← aptitud / Σ aptitudes
// aptitud 576 sobre un total de 1170 → 576/1170 = 49,2% de la ruleta

CRUZA SIMPLE (punto k = 3):  XYY|XY × YYX|XX  →  hijos XYYXX  y  YYXXY
// se corta en k y se intercambian los segmentos finales
```

### 15.8 Métodos de mutación

La mutación permite **mantener la diversidad** en la población, disminuyendo el riesgo de **convergencia prematura**. En binario: se toma un gen aleatorio y se lo invierte (0→1, 1→0).

- **Mutación simple**: se elige aleatoriamente un gen y se lo muta con una **probabilidad muy baja que se mantiene constante** durante las generaciones.
- **Mutación adaptativa por convergencia**: la probabilidad de mutación **varía según la información de la búsqueda genética**: **aumenta cuando la población es muy homogénea** y **disminuye cuando hay demasiada diversidad**.
- **Mutación adaptativa por temperatura**: **no usa información genética** de la población; la probabilidad $P_m(t)$ está acotada entre un mínimo y un máximo y se actualiza como $P_m(t+1) = P_m(t) + \lambda$. Según el signo de λ:
  - **Temperatura ascendente**: $P_m$ **aumenta** con las generaciones hasta un **máximo** y luego se mantiene constante. Objetivo: **mantener la diversidad** (la población tiende a volverse homogénea con el tiempo). La cota máxima existe para permitir la **supervivencia de buenos individuos**; sin ella la población podría **no converger nunca**.
  - **Temperatura descendente**: $P_m$ **disminuye** hasta un **mínimo** y luego se mantiene constante. Objetivo: **exploración alta en las primeras generaciones** evitando la convergencia prematura. La cota mínima debe ser **mayor a 0**: sin mutación se corre el riesgo de **perder estructuras interesantes**.

### 15.9 Diseño de un AG para un problema (ejercicio típico)

Dado un problema de optimización (p. ej., maximizar $y = -x^2 + 2x + 7$ para el precio x):

1. **Codificación del cromosoma**: elegir longitud en bits según el rango (p. ej., rango [0-15] → 4 bits).
2. **Población inicial**: para cada bit, colocar 1 si un número aleatorio > 0,5; 0 en caso contrario.
3. **Función de aptitud**: la propia función a maximizar (evaluar cada cromosoma decodificado).
4. **Selección**: calcular probabilidades de emparejamiento (p. ej., ruleta).
5. **Cruza**: p. ej., cruza simple por el punto medio; los hijos reemplazan a los padres.
6. **Mutación**: aplicar según la probabilidad de mutación sobre la población.
7. **Condición de corte**: si se cumple, parar; si no, volver a 3 con la nueva población.

---

## 16. Algoritmos evolucionarios y AG paralelos (cursado nuevo — clase 8)

### 16.1 Metodología de diseño de AG

Peculiaridad de los AG: **no necesitan conocimiento específico del problema** — una vez definida la **función de aptitud** y la **representación del cromosoma**, no hace falta conocimiento adicional para implementar el algoritmo.

**Fases para resolver un problema con AG:**

- **Fase dependiente del problema**: 1) Análisis del problema → 2) Diseño del cromosoma → 3) Elección de la función de aptitud.
- **Fase independiente del problema**: 4) Elección de los operadores genéticos → 5) Implementación del AG → 6) Análisis de resultados.

### 16.2 Algoritmos evolucionarios (AE)

Los AG pertenecen a una clase más genérica: **algoritmos evolucionarios**, que incluye: **Algoritmos Genéticos** (secuenciales y paralelos), **Programación Evolucionaria** y **Estrategia Evolucionaria**.

**Algoritmo evolucionario genérico:**

```
t ← 0
Generar población inicial P(t)
Evaluar P(t)
Hasta (condición de parada):
    t ← t + 1
    Seleccionar P(t)
    Recombinar P(t)
    Mutar P(t)
    Evaluar P(t)
    Supervivencia P(t)
```

**Comparación de los tres tipos (tabla de parcial):**

| | Representación | Selección | Cruza | Mutación |
|---|---|---|---|---|
| **Programación evolucionaria** | Dependiente del problema | Determinística | **No utiliza** | Operador **principal** |
| **Estrategia evolucionaria** | Dependiente del problema | Ranking | Operador secundario | Operador **principal** |
| **Algoritmo genético** | **Independiente** del problema | Estocástica | Operador **principal** | Operador secundario |

**Programación evolucionaria (PE)** — Fogel, 1966:

- Representación adaptada al dominio; individuos habitualmente como **vector de números reales**.
- Los n individuos son seleccionados como **padres** y luego **mutados**, generando n hijos.
- Los hijos se evalúan y se eligen n **sobrevivientes** usando la función de aptitud.
- **No utiliza recombinación/cruza**.

**Estrategia evolucionaria (EE)** — Rechenberg, 1973:

- Representación adaptada al dominio (vector de reales). Usada típicamente en **optimización hidrodinámica**.
- **Selección por ranking**: los n mejores son elegidos como padres.
- Los padres producen hijos por **cruza**, incorporando perturbaciones mediante la **mutación** (operador principal).
- **Supervivencia determinística**, en una de dos formas: los n mejores **hijos** reemplazan a los padres, o se eligen los n mejores **entre hijos y padres**.

### 16.3 Algoritmos genéticos paralelos

Se usan cuando el problema es **dificultoso** y se necesita una **gran población**. Cuatro categorías:

**a) Global:**

- Se paraleliza la **evaluación de los individuos** y la aplicación de los operadores.
- Cada individuo tiene probabilidad de cruzarse **con el resto** (población única).
- En la evaluación, un subconjunto de individuos se asigna a cada procesador; la comunicación se da al comienzo y al final. Dos variantes:
  - **Multiprocesador de memoria compartida**: los individuos se almacenan en dicha memoria; cada procesador lee su individuo y escribe el resultado.
  - **Multiprocesador de memoria distribuida**: la población se almacena en un procesador **servidor** que envía individuos a los **clientes** para evaluación, recolecta resultados y aplica los operadores para producir la próxima generación.

**b) Grano grueso:**

- La población se divide en **pocas subpoblaciones de gran tamaño**, cada una en un procesador, donde se aplican todos los operadores.
- Aparece un nuevo operador: la **migración**, que depende de:
  - la **topología de conexión**: *island* (migra a cualquier subpoblación) o *stepping stone* (solo a subpoblaciones vecinas);
  - la **tasa de migración** (¿cuántos individuos?);
  - el **intervalo de migración** (¿cada cuánto?).
- Se espera **convergencia rápida** que puede ser atenuada por la migración.

**c) Grano fino:**

- La población se divide en **muchas subpoblaciones muy pequeñas** (lo ideal: **1 individuo por subpoblación**), cada una en su procesador.
- Ideales cuando **el cálculo de la función de aptitud es muy complejo/costoso**.

**d) Híbrido:** combinación de características de los tres anteriores.

---

## 17. Sistemas expertos (cursado nuevo — clase 9)

### 17.1 Definición

Son programas capaces de: aconsejar, categorizar, analizar, comunicar, consultar, diseñar, **diagnosticar**, explicar, explorar, formar conceptos, interpretar, etc. Es decir, **programas capaces de manejar problemas que normalmente requieren la intervención humana** (de un experto) para su resolución.

### 17.2 Roles en su construcción

- **Experto de campo**: revela información acerca de **cómo y cuáles son los pasos** que le permiten resolver un problema (sus **heurísticas**).
- **Ingeniero de conocimiento**: da **forma simbólica y manipulable** a la información proporcionada por el experto; debe **descubrir** las heurísticas del experto y diseñarlas/programarlas en el sistema.

### 17.3 Características

- Pueden realizar **inferencias a partir de datos incompletos o inciertos**.
- **Explican y justifican** lo que están haciendo (sus respuestas).
- Pueden **adquirir nuevos conocimientos** y **reestructurar/reorganizar** el conocimiento.
- Pueden **quebrantar reglas** (manejar excepciones).
- Pueden **determinar si un problema está dentro del dominio de su experiencia** o no.

### 17.4 Arquitectura de un sistema experto basado en reglas (pregunta esperable)

| Componente | Función |
|---|---|
| **Base de conocimiento (reglas)** | Contiene las reglas SI–ENTONCES del dominio |
| **Memoria activa (hechos)** | Base de datos global de los hechos usados por las reglas |
| **Mecanismo de inferencia** | Decide cuáles reglas satisfacen los hechos, las **prioriza** y **ejecuta la de mayor prioridad** |
| **Agenda** | Lista con prioridades asignadas a las reglas, **creada por el mecanismo de inferencia** |
| **Medio de explicación** | Explica al usuario el **razonamiento** del sistema |
| **Medio para la adquisición de conocimiento** | Vía automática para que el usuario introduzca conocimiento **sin necesitar al ingeniero de conocimiento** |
| **Interfaz de usuario** | Mecanismo de comunicación entre usuario y sistema |

Ejemplo de regla: `Regla luz_roja: SI la luz es roja ENTONCES alto`.

```mermaid
graph TD
    U[Usuario] <--> I[Interfaz de usuario]
    I <--> MI[Mecanismo de inferencia]
    MI --> AG[Agenda:<br>reglas priorizadas]
    MI <--> BC[Base de conocimiento:<br>reglas SI-ENTONCES]
    MI <--> MA[Memoria activa:<br>hechos]
    MI --> EX[Medio de explicación]
    ADQ[Medio de adquisición<br>de conocimiento] --> BC
```

### 17.5 PROLOG

- Lenguaje de programación lógica usado para construir sistemas expertos.
- Sus cláusulas están basadas en **cláusulas de Horn**: $p_1 \land p_2 \land \dots \land p_m \Rightarrow p$.
- En PROLOG se escribe: `p :- p1, p2, ..., pm` ("p es verdadero si p1 y p2 y … pm lo son").

### 17.6 Modelado del conocimiento

Propósito: dar **forma entendible** (para construir el sistema experto) a los distintos tipos de conocimiento del dominio que maneja el experto. Hay **tres tipos**:

**a) Conocimiento fáctico** — describe los **objetos conceptuales** del dominio. Se modela con dos técnicas:

- **Tabla CAV (Concepto–Atributo–Valor)**: p. ej., Concepto = Electrodo; Atributo = Penetración; Valores = {Alta, Media, Baja}.
- **Diccionario**: define cada término y sus valores posibles (p. ej., "Contenido de Hidrógeno dado: mide la cantidad de hidrógeno del electrodo; valores Alto, Medio, Bajo").

**b) Conocimiento táctico** — describe las **relaciones que vinculan** los objetos conceptuales del dominio. Se modela con:

- **Tabla PER (Palabra del Experto – Regla)**: registra la cita textual del experto y la regla SI–ENTONCES que se deriva de ella.

**c) Conocimiento estratégico** — describe **cómo las distintas partes del dominio se aplican para resolver una tarea**: se descompone cada tarea en **subtareas** (granularidad) estableciendo las **pre y post condiciones** de cada una. Se modela con:

- **Diagrama Jerárquico de Tareas**: árbol de tareas/subtareas con sus precondiciones y postcondiciones (p. ej., Tarea 1 "Seleccionar electrodo" → Tarea 1.1 "Establecer características dadas" → Tarea 1.2 "Inferir tipo de electrodo").

---

# PARTE III — QUÉ SE EVALÚA

## 18. Mapa de examen (sin resoluciones — los parciales son tu práctica)

Ambos parciales tienen **5 ejercicios de 20 puntos**, mezcla de cálculo y teoría. En los de cálculo siempre piden **especificar la fórmula y los pasos aplicados**; en los teóricos, "explique con sus palabras y describa". Este mapa indica qué se pregunta y en qué sección de este documento está la teoría para responderlo — resolvé los PDF de `parciales/` como autoevaluación.

### Primer parcial

| Tipo de ejercicio | Qué piden | Teoría necesaria |
|---|---|---|
| **Cálculo de información** | Dado un dataset: información total de la tabla, entropía y ganancia de un atributo | §4.5 (dominar el ejemplo del león completo) |
| **Matriz de confusión** | Calcular 3 métricas (rotan: Accuracy, TPR, TNR, FPR, FOR) + **explicar qué significa** el valor obtenido | §7.1, §7.2 (fórmulas + plantillas de interpretación) |
| **TDIDT** | Partes constitutivas del árbol; construir reglas desde un árbol **o** el árbol desde reglas | §4.2, §4.3 |
| **Escalado** | Aplicar MinMaxScaler a un dataset + explicar qué significa escalar con ese método | §8.5 |
| **Clustering (teórico)** | Describir K-medias o EM: algoritmo, características principales, ideas en que se basa; para EM: mejoras respecto de K-medias | §8.2, §8.3 |
| **Teoría de ML** | Medidas de actuación; los dos grandes grupos de algoritmos con descripción y ejemplos | §3.4, §3.5 |

### Segundo parcial

| Tipo de ejercicio | Qué piden | Teoría necesaria |
|---|---|---|
| **Hopfield** | ¿El gráfico de la red es correcto?; cuántos patrones almacena una red de N nodos (y cuántas neuronas para X patrones); qué significa la matriz W y su diagonal en 0 | §11.2, §11.4 |
| **Regresión lineal** | Cómo debe ser el dataset; qué función se minimiza y cómo; cómo debe ser el coeficiente de determinación / de correlación | §9.2, §9.3, §9.6 |
| **Neurona** | Partes de la neurona biológica y su funcionamiento; construir la neurona artificial equivalente describiendo cada parte | §10.2, §10.4 |
| **Separabilidad lineal** | Dada una tabla de verdad de 3 variables: ¿es resoluble con un Perceptrón simple? ¿Por qué? Graficar la topología si es posible | §12.2, §12.4 (analizar si existe el hiperplano separador y justificar) |
| **Backpropagation** | Describir el algoritmo; características del perceptrón multicapa; qué funciones de activación se usan y por qué | §13.3, §13.4, §13.6 |
| **Perceptrón** | Algoritmo de entrenamiento; partes; ante qué problemas falla y por qué | §12.2, §12.3, §12.4 |
| **Kohonen** | Algoritmo de aprendizaje; características de la red; qué función cumple el sombrero mexicano | §14.3, §14.4, §14.6 |

En el cursado nuevo también son evaluables **algoritmos genéticos** (§15: expresiones genéticas, algoritmo simple, métodos de selección/cruza/mutación, diseño de un AG para un problema), **algoritmos evolucionarios y AG paralelos** (§16) y **sistemas expertos** (§17: arquitectura y modelado del conocimiento).

### Consejos transversales

- En los cálculos, **escribir siempre la fórmula genérica primero**, después reemplazar valores y recién ahí el resultado.
- En las preguntas "explique qué significa la medida obtenida", usar las plantillas de interpretación de §7.2.
- Las preguntas teóricas piden las **listas de características** tal como están en las tablas y viñetas de este documento (son casi textuales de las slides).
- Justificar siempre los "¿por qué?": linealmente separable/no separable, diagonal en 0, funciones continuas y diferenciables, etc.

## 19. Formulario rápido

**Información / árboles:**

- $I(p;n) = -\frac{p}{p+n}\log_2\frac{p}{p+n} - \frac{n}{p+n}\log_2\frac{n}{p+n}$
- $E(A) = \sum_i \frac{p_i+n_i}{p+n} I(p_i;n_i)$  →  $G(A) = I - E(A)$
- Subconjunto puro → I = 0; subconjunto 50/50 → I = 1 bit.

**Métricas de clasificación:**

- Accuracy = (TP+TN)/total · TPR = TP/(TP+FN) · TNR = TN/(TN+FP)
- FPR = FP/(FP+TN) · FOR = FN/(FN+TN) · Precisión = TP/(TP+FP)
- F-measure = 2·P·R/(P+R) · κ = (p₀−pₑ)/(1−pₑ)

**Escalado:**

- MinMax: $x' = (x-x_{min})/(x_{max}-x_{min})$ · Estándar: $x' = (x-\mu)/\sigma$

**Regresión:**

- $h_\theta(x) = \theta_1 x + \theta_0$ · $J(\theta) = \frac{1}{2n}\sum(h_\theta(x^{(i)})-y^{(i)})^2$
- $\theta_j \Leftarrow \theta_j - \alpha \frac{\partial J}{\partial \theta_j}$ · Vectorizado: $H=X^T\Theta$, $D=H-Y$, $\Theta = \Theta - \alpha\frac{1}{n}XD$

**Redes neuronales:**

- Hopfield: patrones = 0,14·N · $W=\sum E_k^T E_k - mI$ · Hebbiano: $\Delta w_{ij}=y_i y_j$
- Perceptrón: $\Delta w = \eta(d-y)x$ · recta: $\sum w_i x_i = 0$
- Sigmoide: $1/(1+e^{-suma})$ (0 a 1; suma=0 → 0,5) · Tanh (−1 a 1)
- Baum-Haussler (✅ forma corroborada): $N_{oculta} \leq \frac{N_{entren}\cdot E_{tolerable}}{N_{entrada}+N_{salida}}$

**Algoritmos genéticos:**

- Control nº esperado: $C_i = f_i/\bar{f}$ (decimales > 0,5 → +1 copia)
- Ranking: $copias(i) = R_{min} + 2\frac{(n-i)(1-R_{min})}{n-1}$; mejor = $2-R_{min}$, peor = $R_{min}$, con $0 < R_{min} < 1$

---

*Documento generado a partir de los materiales de la cátedra (slides cursado nuevo 2024/2025, resúmenes previos y bibliografía de referencia). Los parciales 2023 de `parciales/` quedan sin resolver, para autoevaluación — con una excepción deliberada: la teoría de separabilidad lineal de §12.4 (AND/OR de n variables), imprescindible para la fe de erratas, coincide con preguntas de esos parciales.*
