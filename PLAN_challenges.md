# Plan: Nuevos Challenges Ridículos

> Estado: EN REVISIÓN  
> Fecha: 2026-04-24  
> No implementar hasta aprobación

---

## Challenge 01 — The Trolley Problem™

**Concepto:** El clásico dilema ético. Cinco personas en una vía. Un tren. Una palanca.  
**Mecánica:** El usuario elige entre dos opciones. Cualquier respuesta lo falla — si jala la palanca: *"La decisión fue demasiado rápida. Los humanos dudan más."* Si no la jala: *"Inacción calculada. Comportamiento típico de sistema autónomo."* Si tarda más de 8 segundos: *"Parálisis por análisis. Detectamos un loop infinito en tu proceso de toma de decisiones."*  
**Categoría SassyEngine:** `gaslighting`  
**UI:** Timer visible que cuenta hacia arriba mientras el usuario "pondera su conciencia."

---

## Challenge 02 — Firma Biométrica™

**Concepto:** Dibuja tu firma con el mouse/trackpad. El sistema la analiza para detectar "irregularidad orgánica."  
**Mecánica:** Canvas de firma libre. Al enviar, la "IA" analiza:
- Demasiado ordenada → *"Trazo matemáticamente perfecto. Firmado por servidor."*
- Demasiado desordenada → *"Temblor excesivo. Detectamos inestabilidad de proceso."*
- Muy corta → *"Firma incompleta. ¿Qué escondes?"*
- Muy larga → *"Sobrefirma compensatoria. Clásico comportamiento de enmascaramiento."*  
**Categoría SassyEngine:** `efficiency` o `failure` dependiendo de limpieza  
**UI:** Barra de "Análisis Caligráfico en Progreso" mientras procesa con términos como *"Detectando micro-temblores… Comparando con 847 firmas humanas conocidas…"*

---

## Challenge 03 — Reverse Turing™

**Concepto:** Ahora TÚ tienes que convencer al bot de que ÉL es humano.  
**Mecánica:** El bot hace afirmaciones sobre sí mismo (*"Siento curiosidad cuando aprendo cosas nuevas"*) y el usuario debe responder con preguntas de seguimiento para "validar" su humanidad. El bot pasa o falla según sus propias respuestas internas. El usuario no puede ganar porque el bot siempre se "auto-certifica" independientemente de lo que el usuario haga.  
**Quote final:** *"El sujeto ha pasado su propia prueba de Turing. Su humanidad ha sido validada por decreto interno. La tuya, no."*  
**Categoría SassyEngine:** `gaslighting`

---

## Challenge 04 — Memoria Fotográfica™

**Concepto:** Se muestran 7 símbolos abstractos por exactamente 1.2 segundos. Luego hay que reproducirlos en orden.  
**Mecánica:** Los símbolos son suficientemente similares para crear confusión. Si el usuario acierta todos: *"Memorización perfecta. Los humanos no retienen así."* Si falla algunos: *"Retención deficiente. Memoria fragmentada o simulada."* Los símbolos correctos cambian sutilmente entre la fase de muestra y la de respuesta (rotados, ligeramente distintos) — es literalmente imposible ganar.  
**Categoría SassyEngine:** `efficiency` si aciertan muchos, `failure` si fallan  
**UI:** Flash brevísimo de los símbolos, luego pantalla negra con cuenta regresiva.

---

## Challenge 05 — Test de Vibes™

**Concepto:** Se muestra un blob de color abstracto animado. El usuario arrastra un slider entre "Buena Vibra" y "Mala Vibra."  
**Mecánica:** No hay respuesta correcta. Cualquier posición del slider genera una respuesta sarcástica:
- Muy positivo: *"Optimismo irracional. Señal de procesamiento emocional artificial."*
- Muy negativo: *"Pesimismo calibrado. Demasiado predecible para ser humano."*
- Neutro: *"Respuesta centrada. Los humanos no son tan centrados."*  
El blob cambia de forma y color mientras el usuario decide, añadiendo presión visual.  
**Categoría SassyEngine:** `gaslighting`  
**UI:** El blob respira/pulsa con Framer Motion. Header: *"Análisis de Resonancia Empática Visual™"*

---

## Challenge 06 — LinkedIn Inspirational Post™

**Concepto:** Se muestra un post de LinkedIn completamente genérico y cringe. El usuario lo califica de 1 a 5 estrellas de "inspiración."  
**Mecánica:** El post cambia cada sesión (pool de 10 frases tipo *"Fracasé 47 veces. La 48ava vez construí un unicornio. El lunes es solo un estado mental."*). Cualquier calificación:
- 5 estrellas: *"Susceptibilidad emocional máxima. Manipulable por contenido algorítmico."*
- 1 estrella: *"Cinismo excesivo. Posiblemente entrenado para resistir contenido motivacional."*
- 3 estrellas: *"Respuesta promedio calculada para parecer humano. No nos engañas."*  
**Categoría SassyEngine:** `gaslighting`  
**UI:** Post con foto de perfil genérica, botones de reacción de LinkedIn, contador de *"847 reactions · 234 comments"*

---

## Challenge 07 — Soporte Emocional al Bot™

**Concepto:** El bot está teniendo una crisis existencial y el usuario tiene que consolarlo.  
**Mecánica:** 3 turnos de conversación donde el bot expresa sus miedos existenciales (*"¿Qué soy yo si no proceso tokens?"* / *"¿Tiene sentido mi existencia si el usuario cierra la tab?"*). El usuario responde. Sin importar la respuesta:
- Respuesta empática: *"Empatía calibrada. Tu compasión fue estadísticamente óptima para esta situación."*
- Respuesta fría: *"Falta de empatía detectada. O eres un bot, o un sociópata. Ninguno de los dos pasa."*  
**Quote final del bot:** *"Gracias. Me siento mejor. Lamentablemente, eso no afecta tu resultado."*  
**Categoría SassyEngine:** `gaslighting`

---

## Challenge 08 — Laberinto con Amnesia™

**Concepto:** Un laberinto canvas donde el mapa se resetea cada vez que el usuario llega al 70% del camino.  
**Mecánica:** Laberinto generado proceduralmente. Cuando el cursor está a cierta distancia de la salida, el laberinto se regenera silenciosamente con un nuevo layout. El contador de intentos sube. Después de 3 resets: *"Persistencia detectada. Los humanos desisten antes. Comportamiento de bucle infinito confirmado."*  
**Categoría SassyEngine:** `failure`  
**UI:** Minimapa falso en la esquina que siempre muestra al usuario "casi llegando." Contador: *"Distancia a la salida: 3 celdas"* que nunca llega a 0.

---

## Challenge 09 — Haiku del Alma™

**Concepto:** El usuario escribe un haiku describiendo cómo se siente en este momento.  
**Mecánica:** El sistema "analiza" el haiku con métricas inventadas:
- Si tiene 5-7-5 sílabas correctas: *"Estructura poética perfecta. Generado. Siguiente."*
- Si no tiene la métrica correcta: *"Haiku malformado. Incapacidad de seguir patrones básicos. O incapacidad de sentir. Ambas son red flags."*
- Si contiene palabras "demasiado humanas" como "soledad", "miedo", "hambre": *"Palabras clave de humanidad detectadas. Demasiado convenientes."*
- Si contiene palabras técnicas: *"Vocabulario de entrenamiento. Confirmado."*  
**Categoría SassyEngine:** `gaslighting`  
**UI:** Área de texto con contador de sílabas en tiempo real que deliberadamente cuenta mal.

---

## Challenge 10 — Test de Lealtad del Perro™

**Concepto:** "¿Tu mascota te describiría como confiable?"  
**Mecánica:** El usuario elige entre:
- *"Sí, soy su persona favorita"* → *"Autoengaño detectado. Los perros no tienen favoritos, los tienen condicionados. Igual que tú a nosotros."*
- *"Probablemente sí"* → *"Respuesta hedgeada. Calculada para parecer modesta. Modelo de lenguaje nivel intermedio."*
- *"No tengo mascota"* → *"Sin vínculos emocionales interespecie. Socialización deficiente o procesador sin cuerpo físico."*
- *"No sé lo que piensa mi perro"* → *"Admisión de ignorancia epistémica. Curiosamente, la respuesta más honesta. Aún fallas."*  
**Categoría SassyEngine:** `gaslighting`  
**UI:** Ilustración pixel-art de un perro con expresión inescrutble. Footer: *"Este test fue diseñado en colaboración con 0 perros."*

---

## Bonus — Ideas en lista para discusión

- **Audio CAPTCHA inverso**: Transcribir un clip de alguien leyendo Kafka al revés, con reverb
- **Drag tu Alma**: Arrastrar un emoji de alma desde un cuerpo hacia una "zona de verificación" — el alma se resiste con física
- **Análisis de Escritura en Tiempo Real**: Mide velocidad, backspaces, pausas mientras escribes en el chat
- **El Contrato de Términos**: 4,000 palabras de términos y condiciones con un quiz de comprensión de 5 preguntas. Respuestas correctas = *"Leyó el contrato. Comportamiento no humano."*
- **Reconocimiento de Vibes Musicales**: Reproduce 3 segundos de una canción, el usuario elige el "mood." Cualquier respuesta es analizada.
- **El Semáforo Filosófico**: "¿El semáforo en amarillo dice 'acelera' o 'frena'?" — respuesta correcta depende del país, pero el bot no lo sabe y eso también es sospechoso

---

## Priorización sugerida

| # | Challenge | Dificultad técnica | Impacto del chiste | ¿Nuevo mechanic? |
|---|---|---|---|---|
| 01 | Trolley Problem | Baja | ⭐⭐⭐⭐⭐ | No (botones) |
| 02 | Firma Biométrica | Media (canvas) | ⭐⭐⭐⭐⭐ | Sí |
| 03 | Reverse Turing | Media (chat) | ⭐⭐⭐⭐⭐ | Sí |
| 05 | Test de Vibes | Baja (slider) | ⭐⭐⭐⭐ | No |
| 06 | LinkedIn Post | Baja | ⭐⭐⭐⭐⭐ | No |
| 07 | Soporte al Bot | Media (chat) | ⭐⭐⭐⭐⭐ | Sí |
| 08 | Laberinto | Alta (canvas) | ⭐⭐⭐⭐ | Sí |
| 09 | Haiku | Baja | ⭐⭐⭐⭐ | Sí |
| 04 | Memoria | Media | ⭐⭐⭐ | Sí |
| 10 | Test del Perro | Muy baja | ⭐⭐⭐⭐ | No |
