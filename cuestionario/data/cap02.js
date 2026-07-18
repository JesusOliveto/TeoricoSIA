// Question bank: Chapter 2 - Agentes inteligentes (RESUMEN.md lines 115-175)
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA[2] = {
  title: 'Agentes inteligentes',
  sets: [
    {
      name: 'Definiciones',
      questions: [
        { q: '¿Qué es un agente, según Russell y Norvig (2004)?', opts: ['Un programa que solo actúa sin percibir', 'Cualquier cosa capaz de percibir su medio con sensores y actuar en él con actuadores', 'Un conjunto de reglas condición-acción', 'Una función de utilidad'], a: 1, exp: 'Ver §2.1.' },
        { q: "En un agente de software, ¿qué cumple el rol de 'sensores'?", opts: ['La escritura en pantalla o archivos', 'Los motores', 'Las lecturas de archivos o de la red', 'La memoria RAM'], a: 2, exp: 'Ver §2.1.' },
        { q: "¿Qué es la 'función del agente'?", opts: ['El hardware sobre el que corre el agente', 'Una descripción abstracta que asigna una acción a cada secuencia de percepciones posible', 'El conjunto de sensores físicos', 'La medida de rendimiento del entorno'], a: 1, exp: 'Ver §2.2.' },
        { q: "¿Qué es el 'programa del agente'?", opts: ['La descripción abstracta percepción→acción', 'La medida de éxito del agente', 'La implementación concreta de la función del agente, que corre sobre una arquitectura', 'El cuadro REAS'], a: 2, exp: 'Ver §2.2.' },
        { q: 'Según la fórmula de la cátedra, Agente es igual a:', opts: ['Sensor + Actuador', 'Percepción + Acción', 'Función + Rendimiento', 'Programa + Arquitectura'], a: 3, exp: 'Ver §2.2.' },
        { q: "En el cuadro REAS, ¿qué representa la letra 'S'?", opts: ['Sensores: con qué percibe el agente', 'Sistema operativo del agente', 'Seguridad del entorno', 'Simulación del entorno'], a: 0, exp: 'Ver §2.4.' },
        { q: "¿Qué significa que un agente sea 'racional', según la definición de la cátedra?", opts: ['Que conoce el resultado real de todas sus acciones', 'Que emprende la acción que maximiza su medida de rendimiento, dada la evidencia disponible', 'Que nunca comete errores', 'Que actúa exactamente como lo haría un humano'], a: 1, exp: 'Ver §2.5.' },
        { q: '¿Cuál es la diferencia entre racionalidad y omnisciencia?', opts: ['Son sinónimos exactos', 'La omnisciencia es exclusiva de agentes basados en utilidad', 'El agente racional maximiza el resultado esperado con la información disponible; el omnisciente conocería el resultado real (imposible en la práctica)', 'La racionalidad no depende de las percepciones'], a: 2, exp: 'Ver §2.5.' },
        { q: '¿Qué relación describe la cátedra respecto a la autonomía de un agente?', opts: ['La autonomía no tiene relación con el conocimiento inicial', 'A mayor conocimiento inicial provisto por el diseñador, mayor autonomía', 'A menor conocimiento inicial, menor autonomía', 'A mayor apoyo en el conocimiento inicial del diseñador, menor autonomía; a mayor aprendizaje propio, mayor autonomía'], a: 3, exp: 'Ver §2.5.' },
        { q: '¿Cuál es la definición formal de agente racional citada en la cátedra?', opts: ['Un agente que en cada secuencia de percepciones emprende la acción que maximiza su medida de rendimiento, basándose en las percepciones y decisiones previas almacenadas', 'Un agente que siempre elige la acción más rápida', 'Un agente que nunca almacena percepciones pasadas', 'Un agente que actúa aleatoriamente'], a: 0, exp: 'Ver §2.5.' }
      ]
    },
    {
      name: 'Cálculo',
      questions: [
        { q: 'En el mundo de las aspiradoras, si ambas cuadrículas están limpias, ¿qué acción es la más adecuada según lo discutido en clase?', opts: ['Aspirar de todas formas', 'Moverse a la izquierda', 'No hacer nada, para no gastar energía', 'Moverse a la derecha'], a: 2, exp: 'Cálculo procedimental sobre el ejemplo del mundo de las aspiradoras (capítulo sin fórmulas numéricas). Ver §2.3.' },
        { q: '¿Cuántas acciones posibles tiene el agente en el mundo de las aspiradoras?', opts: ['2', '5', '3', '4'], a: 3, exp: 'Ver §2.3: aspirar, moverse a izquierda, moverse a derecha, no hacer nada.' },
        { q: '¿Qué percibe el agente en cada paso, en el mundo de las aspiradoras?', opts: ['Únicamente si hay suciedad', 'En qué cuadrícula está y si hay suciedad en ella', 'Únicamente en qué cuadrícula está', 'La posición de todos los agentes del entorno'], a: 1, exp: 'Ver §2.3.' },
        { q: '¿Cuántos elementos componen el cuadro REAS para describir un entorno de trabajo?', opts: ['3', '5', '2', '4'], a: 3, exp: 'Ver §2.4: Rendimiento, Entorno, Actuadores, Sensores.' },
        { q: "Para el taxista automático, ¿qué elemento del REAS corresponde a 'volante, acelerador, freno, bocina, pantalla'?", opts: ['Rendimiento', 'Sensores', 'Actuadores', 'Entorno'], a: 2, exp: 'Ver §2.4.' },
        { q: "Para el taxista automático, ¿qué elemento del REAS corresponde a 'cámaras, GPS, velocímetro, sensores del motor, teclado'?", opts: ['Sensores', 'Actuadores', 'Rendimiento', 'Entorno'], a: 0, exp: 'Ver §2.4.' },
        { q: "Para el taxista automático, ¿qué elemento del REAS corresponde a 'calles, tráfico, peatones, clientes, clima'?", opts: ['Actuadores', 'Entorno', 'Sensores', 'Rendimiento'], a: 1, exp: 'Ver §2.4.' },
        { q: "Para el taxista automático, ¿qué elemento del REAS corresponde a 'viaje seguro, rápido, legal, cómodo; maximizar ganancias'?", opts: ['Entorno', 'Actuadores', 'Sensores', 'Rendimiento'], a: 3, exp: 'Ver §2.4.' },
        { q: 'El mundo de las aspiradoras se compone de:', opts: ['Dos cuadrículas: A y B', 'Tres cuadrículas: A, B y C', 'Una única cuadrícula con cuatro zonas', 'Cinco cuadrículas conectadas'], a: 0, exp: 'Ver §2.3.' },
        { q: 'De los 5 tipos de programa de agente, ¿cuál es el de MENOR sofisticación?', opts: ['Agente basado en utilidad', 'Agente que aprende', 'Agente reactivo simple', 'Agente basado en objetivos'], a: 2, exp: 'Ver §2.6: van de menor a mayor sofisticación, comenzando por el reactivo simple.' }
      ]
    },
    {
      name: 'Comparaciones',
      questions: [
        { q: '¿En qué se diferencian la función del agente y el programa del agente?', opts: ['La función es abstracta (percepción→acción); el programa es su implementación concreta sobre una arquitectura', 'Son sinónimos', 'El programa es abstracto y la función es concreta', 'La función solo aplica a robots'], a: 0, exp: 'Ver §2.2.' },
        { q: '¿Qué distingue al agente reactivo simple del agente reactivo basado en modelos?', opts: ['El simple tiene metas y el basado en modelos no', 'Ambos son idénticos', 'El basado en modelos mantiene un estado interno que le permite manejar entornos parcialmente observables; el simple no tiene memoria', 'El basado en modelos no usa reglas condición-acción'], a: 2, exp: 'Ver §2.6.' },
        { q: '¿Qué diferencia al agente basado en objetivos del agente basado en utilidad?', opts: ['El basado en utilidad no tiene modelo del mundo', 'Son el mismo tipo de agente', 'El basado en objetivos solo reacciona a percepciones actuales', 'El basado en utilidad usa una función de utilidad para comparar varios caminos hacia la meta; el basado en objetivos solo persigue metas sin comparar alternativas'], a: 3, exp: 'Ver §2.6.' },
        { q: "¿Cuál es la diferencia clave entre 'racional' y 'omnisciente'?", opts: ['El racional maximiza el resultado esperado con la información disponible; el omnisciente conocería el resultado real de antemano', 'El omnisciente maximiza el resultado esperado; el racional el resultado real', 'No hay diferencia', 'Ambos son imposibles en la práctica'], a: 0, exp: 'Ver §2.5.' },
        { q: '¿Qué diferencia a los sensores de los actuadores?', opts: ['Los sensores permiten percibir el medio; los actuadores permiten actuar sobre él', 'Los actuadores permiten percibir; los sensores permiten actuar', 'Son el mismo componente', 'Los sensores solo existen en robots'], a: 0, exp: 'Ver §2.1.' },
        { q: '¿Qué cumple el rol de actuadores en un humano y en un agente de software, comparativamente?', opts: ['En ambos casos, los ojos', 'En el humano, manos/voz; en el agente de software, la escritura en pantalla o archivos', 'En ambos casos, la escritura en archivos', 'En el humano, oídos; en el agente de software, la lectura de red'], a: 1, exp: 'Ver §2.1.' },
        { q: '¿Cuál es de mayor sofisticación: el agente reactivo simple o el agente que aprende?', opts: ['El reactivo simple', 'Ambos tienen igual sofisticación', 'El agente que aprende', 'Ninguno, la sofisticación no aplica a agentes'], a: 2, exp: 'Ver §2.6.' },
        { q: 'Un agente con mucha autonomía se caracteriza, en comparación con uno de baja autonomía, por:', opts: ['Depender totalmente del conocimiento inicial del diseñador', 'No usar sensores', 'Aprender más de sus propias percepciones y depender menos del conocimiento inicial del diseñador', 'No tener actuadores'], a: 2, exp: 'Ver §2.5.' },
        { q: "En el cuadro REAS, ¿qué diferencia a 'Rendimiento' de 'Entorno'?", opts: ['El Rendimiento describe dónde opera el agente; el Entorno mide el éxito', 'El Rendimiento mide qué es hacerlo bien; el Entorno describe dónde opera el agente', 'Son el mismo concepto', 'Ninguno aplica al taxista automático'], a: 1, exp: 'Ver §2.4.' },
        { q: "Dentro del agente que aprende, ¿qué diferencia al 'elemento de aprendizaje' del 'crítico'?", opts: ['Son el mismo componente', 'El crítico decide las acciones y el elemento de aprendizaje las evalúa', 'Ninguno de los dos existe en la cátedra', 'El elemento de aprendizaje mejora el desempeño; el crítico evalúa el desempeño contra un estándar'], a: 3, exp: 'Ver §2.6.' }
      ]
    },
    {
      name: 'Casos aplicados',
      questions: [
        { q: 'Un termostato que activa la calefacción cuando la temperatura desciende de un umbral fijo, sin recordar historial, ejemplifica un:', opts: ['Agente basado en utilidad', 'Agente que aprende', 'Agente reactivo simple (regla condición-acción)', 'Agente basado en objetivos'], a: 2, exp: 'Ver §2.6.' },
        { q: 'Un robot aspirador que recuerda qué zonas ya limpió, aunque no las vea en este momento, ejemplifica un:', opts: ['Agente reactivo simple', 'Un simple sensor', 'Agente reactivo basado en modelos (mantiene estado interno)', 'Agente omnisciente'], a: 2, exp: 'Ver §2.6.' },
        { q: 'Un GPS que, entre varias rutas posibles hacia el destino, elige la más rápida y barata, ejemplifica un:', opts: ['Agente reactivo simple', 'Agente basado en utilidad', 'Agente reactivo basado en modelos únicamente', 'Ninguno de los tipos vistos'], a: 1, exp: 'Ver §2.6.' },
        { q: 'Un agente de ajedrez que persigue la meta de dar jaque mate, planificando movimientos, ejemplifica un:', opts: ['Agente reactivo simple', 'Agente que solo percibe, sin actuar', 'Un sensor sin actuadores', 'Agente basado en objetivos'], a: 3, exp: 'Ver §2.6.' },
        { q: 'Un sistema de recomendación que mejora sus sugerencias a partir de la retroalimentación del usuario, con un componente que evalúa su propio desempeño, ejemplifica un:', opts: ['Agente reactivo simple', 'Agente basado en objetivos únicamente', 'Agente que aprende (con elemento de aprendizaje y crítico)', 'Un actuador sin sensores'], a: 2, exp: 'Ver §2.6.' },
        { q: 'Para diseñar un robot de reparto de paquetes se especifica: éxito=entregas a tiempo, calles y tráfico, ruedas y brazo, cámaras y GPS. Esto corresponde a completar un:', opts: ['Programa del agente', 'Cuadro REAS', 'Árbol de decisión', 'Modelo de utilidad'], a: 1, exp: 'Ver §2.4.' },
        { q: 'En el mundo de las aspiradoras, si el agente está en la cuadrícula A y detecta suciedad, ¿qué acción corresponde según la tabla percepción→acción?', opts: ['Moverse a la derecha', 'No hacer nada', 'Aspirar', 'Moverse a la izquierda'], a: 2, exp: 'Ver §2.3.' },
        { q: 'Un agente que percibe solo su posición actual y actúa por reglas fijas, sin ningún tipo de memoria ni planificación, corresponde al tipo:', opts: ['Basado en utilidad', 'Que aprende', 'Basado en objetivos', 'Reactivo simple'], a: 3, exp: 'Ver §2.6.' },
        { q: 'Un taxi automático que además de llegar al destino intenta hacerlo de la forma más rápida, segura y barata posible (comparando alternativas) ejemplifica un agente:', opts: ['Reactivo simple', 'Basado en utilidad', 'Sin sensores', 'Sin actuadores'], a: 1, exp: 'Ver §2.5 y §2.6: usa el REAS del taxista y el concepto de utilidad.' },
        { q: 'Un agente de software que solo escribe en pantalla, sin nunca leer archivos ni redes, incumple la definición de agente porque:', opts: ['Le faltaría el componente de sensores (percepción)', 'No es un problema, cumple igual la definición', 'Le sobran actuadores', 'Es un ejemplo perfecto de agente racional'], a: 0, exp: 'Ver §2.1: un agente necesita tanto sensores como actuadores.' }
      ]
    },
    {
      name: 'Trampas de examen',
      questions: [
        { q: '¿Cuántas cuadrículas tiene el mundo de las aspiradoras del ejemplo canónico?', opts: ['Una', 'Tres', 'Dos: A y B', 'Cuatro'], a: 2, exp: 'Ver §2.3.' },
        { q: 'Si ambas cuadrículas del mundo de las aspiradoras están limpias, ¿cuál NO es la respuesta esperada en clase?', opts: ['No hacer nada', 'Ahorrar energía', 'Evitar mover el agente sin necesidad', 'Aspirar de todas formas, para asegurarse'], a: 3, exp: 'Ver §2.3: aspirar sin suciedad es la respuesta incorrecta/trampa.' },
        { q: "¿'Racional' es sinónimo de 'omnisciente' en la definición de la cátedra?", opts: ['Sí, son equivalentes', 'Sí, pero solo para agentes basados en utilidad', 'No, racionalidad ≠ omnisciencia; el omnisciente es imposible en la práctica', 'No aplica, la cátedra no distingue estos términos'], a: 2, exp: 'Ver §2.5.' },
        { q: "¿La fórmula de la cátedra es 'Agente = Programa + Arquitectura' o 'Agente = Función + Sensor'?", opts: ['Agente = Programa + Arquitectura', 'Agente = Función + Sensor', 'Agente = Rendimiento + Entorno', 'Ninguna de las anteriores, no hay fórmula'], a: 0, exp: 'Ver §2.2.' },
        { q: "En el cuadro REAS, ¿la 'R' corresponde a 'Robot' o a 'Rendimiento'?", opts: ['Robot', 'Reglas', 'Racionalidad', 'Rendimiento'], a: 3, exp: 'Ver §2.4: REAS = Rendimiento, Entorno, Actuadores, Sensores.' },
        { q: '¿A mayor conocimiento inicial dado por el diseñador, mayor o menor autonomía tiene el agente?', opts: ['Mayor autonomía', 'No tiene relación', 'Menor autonomía', 'Depende únicamente del entorno'], a: 2, exp: 'Ver §2.5: más conocimiento inicial del diseñador implica menor autonomía.' },
        { q: '¿El agente reactivo simple funciona bien en entornos parcialmente observables?', opts: ['Sí, siempre', 'Sí, pero solo si tiene estado interno', 'No tiene relación con la observabilidad', 'No, solo funciona si el entorno es totalmente observable'], a: 3, exp: 'Ver §2.6.' },
        { q: '¿Cuántos tipos de programas de agente describe la cátedra, de menor a mayor sofisticación?', opts: ['3', '4', '5', '6'], a: 2, exp: 'Ver §2.6: reactivo simple, reactivo basado en modelos, basado en objetivos, basado en utilidad, que aprende.' },
        { q: 'La función de utilidad se usa cuando:', opts: ['Hay varios caminos hacia la meta y se necesita comparar qué tan deseable es cada uno', 'Solo hay un único camino posible hacia la meta', 'El agente no tiene metas', 'El entorno es completamente desconocido'], a: 0, exp: 'Ver §2.6.' },
        { q: "¿El 'crítico', dentro del agente que aprende, decide qué acción tomar?", opts: ['Sí, decide las acciones', 'No, el crítico evalúa el desempeño contra un estándar; decidir es tarea del elemento de actuación', 'El crítico y el generador de problemas son lo mismo', 'El crítico reemplaza al elemento de aprendizaje'], a: 1, exp: 'Ver §2.6.' }
      ]
    }
  ]
};
