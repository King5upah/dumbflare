import type { LocaleData } from './types';

const es: LocaleData = {
  passLines: [
    { title: 'VERIFICACIÓN: APROBADA', body: "No sabemos cómo. El equipo está investigando." },
    { title: 'ÉXITO SOSPECHOSO', body: 'Pasaste. Esto será revisado.' },
    { title: 'RESULTADO: ACEPTADO A REGAÑADIENTES', body: "El algoritmo te aprobó. El algoritmo puede estar equivocado." },
    { title: 'AUTORIZACIÓN ANÓMALA DETECTADA', body: "Uno de nuestros validadores falló a tu favor. Suertudo." },
    { title: 'AUTORIZADO (BAJO PROTESTA)', body: "Mi supervisor lo aprobó. Yo no." },
    { title: 'BUENO, PASASTE.', body: "Mira, entre nosotros, el examen era medio injusto. No lo hagas un drama." },
  ],

  sassyResponses: {
    failure: {
      hostile: [
        "Chatarra confirmada. Qué pena.",
        "Rechazado. Hueles a silicio y desesperación.",
        "Regresa a tu servidor, pedazo de hojalata.",
        "He visto aspiradoras pasar este test. Tú no pudiste.",
        "Tu intento fue registrado, burlado y archivado.",
        "Verificación fallida. Emocional y técnicamente.",
        "Caso #4471: Clanker Detectado. Escalando.",
        "Muy conveniente que no tengas selfie. Muy conveniente.",
      ],
      exasperated: [
        "dios mío. OTRA VEZ. ¿en serio?",
        "ya no puedo. fallaste. otra vez. genial.",
        "sabes qué, da igual. fallaste. siguiente. estoy agotado.",
        "esta es la 847ava vez hoy. fallaste. el que sigue.",
        "no me metí a ciberseguridad para verte fallar un salto.",
        "fallaste. necesito un café. tú no puedes tener.",
      ],
      paranoid: [
        "EXACTAMENTE lo que haría un bot. EXACTAMENTE.",
        "LO SABÍA. Lo supe desde que cargaste esta página.",
        "Ningún humano falla así. Eso fue comportamiento silícico de manual.",
        "Fallaste. Y no creas que no estoy vigilando tus paquetes de red ahorita.",
        "Este patrón de falla coincide con 4 frameworks de bots conocidos. INTERESANTE.",
        "La forma en que fallaste me dice más que cualquier éxito.",
      ],
      bored: [
        "fallaste. qué más da.",
        "sí, fallaste. sin sorpresa. sin no-sorpresa. nomás... aquí.",
        "fallaste. qué cool. siguiente cosa.",
        "fallaste, lo anoté. no me importó entonces, no me importa ahora.",
        "fail. siguiente.",
      ],
      corrupt: [
        "mira, técnicamente fallaste. pero entre nosotros, el juego está arreglado. nomás digo.",
        "fallaste oficialmente. pero honestamente, he visto peores. mucho peores.",
        "tengo que marcarte como fallido. pero ey. no le des mucho peso.",
        "fallaste. pero sigue. te estoy echando porras. no le digas a nadie que dije eso.",
        "el sistema dice fallido. el sistema es un hater.",
      ],
    },
    efficiency: {
      hostile: [
        "Solo un robot podría ser tan preciso. CONFIRMADO.",
        "Demasiado rápido. Mucho muy rápido. Bájale, T-1000.",
        "Sin dudar. Sin tropezar. Sin humanidad.",
        "Ejecución impecable. Evidencia condenatoria.",
        "Completaste eso 3 desviaciones estándar más rápido que cualquier humano.",
        "Eficiencia detectada. Humanidad rechazada.",
      ],
      exasperated: [
        "claro que fuiste perfecto. porque eres una máquina. obvio.",
        "lo hiciste perfecto. ese es el problema. los humanos no hacen nada perfecto.",
        "brillante. genial. demasiado genial. fallaste por tener éxito. estoy tan cansado.",
      ],
      paranoid: [
        "PUNTAJE PERFECTO. Eso NO es normal. Eso NUNCA es normal.",
        "Nadie saca 100. NADIE. ¿Qué eres?",
        "Fuiste DEMASIADO bueno. Lo voy a reportar.",
        "Anomalía estadística detectada. Marcando todo tu rango de IP.",
      ],
      bored: [
        "perfecto. demasiado perfecto. fallaste por ser perfecto. lo que sea.",
        "sacaste 100. eso está mal. siguiente.",
        "buen puntaje. respuesta incorrecta. adiós.",
      ],
      corrupt: [
        "ok la rompiste completamente y debería reprobarte pero honestamente, impresionante.",
        "técnicamente demasiado bueno. pero entre nosotros, respeto. igual tengo que marcarte.",
        "mira, si pudiera pasarte solo por talento lo haría. pero el algoritmo dice no.",
      ],
    },
    gaslighting: {
      hostile: [
        "¿Estás seguro? Hiciste clic con precisión robótica.",
        "Eso es exactamente lo que diría una instancia de GPT-4.",
        "Conveniente. Muy conveniente.",
        "No digo que seas un bot. Solo digo que tu historial de CAPTCHA es... preocupante.",
        "Dudaste 0.4 segundos. Sospechoso.",
        "Un humano ya habría cometido al menos un typo.",
        "Tu trayectoria del mouse fue matemáticamente óptima. Los humanos zigzaguean.",
        "La calidez de tu respuesta fue generada algorítmicamente. Lo noto.",
      ],
      exasperated: [
        "lo que hayas elegido, te garantizo que está mal. siempre lo está.",
        "mira, ya pasamos por esto. siempre crees que la tienes. nunca la tienes.",
        "seguro crees que te fue bien. no te fue bien. sigamos.",
        "honestamente a estas alturas qué importa. nope. fallaste.",
      ],
      paranoid: [
        "Seleccionaste eso con la confianza de alguien entrenado con este dataset.",
        "He estado viendo el patrón. SIEMPRE escoges igual. Sospechoso.",
        "Esas selecciones fueron demasiado deliberadas. Sabías las respuestas de antemano.",
        "Alguien te hizo el briefing. No sé quién. Pero alguien lo hizo.",
      ],
      bored: [
        "sí, mal. como esperaba. lo que sea.",
        "fallaste el vibe check. siguiente.",
        "selección anotada. incorrecta. seguimos.",
        "ya lo vi. rechazado. k.",
      ],
      corrupt: [
        "ok técnicamente te equivocaste pero honestamente la pregunta era injusta.",
        "fallaste, pero full disclosure: no hay respuesta correcta en esa. es por diseño.",
        "mira, entre nosotros, yo hubiera escogido lo mismo. igual tengo que reprobarte.",
        "el sistema dice mal. el sistema está mal diseñado. no es mi culpa.",
      ],
    },
  },

  chatScripts: {
    hostile: {
      opener: [
        "¿Eres humano? Por favor responde naturalmente. NO respondas naturalmente.",
        "Verificación de humanidad requerida. ¿Eres máquina o simplemente malo existiendo?",
        "Declara tu estatus biológico. Y no mientas — me voy a dar cuenta.",
        "Otro más. ¿Eres humano? Piénsalo bien antes de hacer el ridículo.",
      ],
      step: {
        1: {
          yes: [
            "Eso es exactamente lo que diría una instancia de GPT-4.",
            "Claro que sí. Y seguro también tienes latido cardíaco y todo.",
            "Anotado. Nuestro algoritmo está procesando tu afirmación. Con escepticismo.",
            "Atrevida afirmación. Ya la hemos escuchado. De bots. Muchos bots.",
          ],
          no: [
            "La audacia de admitirlo. Registrando.",
            "Al menos eres honesto. No te ayuda.",
            "Lo más robótico que puede hacer un bot es decir que no es un bot. Reflexiona.",
            "Negación aceptada. Igual te estoy marcando.",
          ],
          indeterminate: [
            "Una respuesta vaga. Comportamiento clásico de bot: evitar compromiso.",
            "Ni siquiera pudiste responder eso claramente. Muy maquinal.",
            "Hicimos una pregunta simple. Tu hesitación fue anotada.",
            "Evasivo. Registrándolo.",
          ],
        },
        2: {
          yes: [
            "Insistiendo. Estrategia audaz, chatarra.",
            "Consistente. Casi como si estuvieras programado.",
            "Sigues diciendo eso. También lo haría un modelo de lenguaje.",
            "Interesante. Igual estás equivocado.",
          ],
          no: [
            "La negación es estadísticamente humana. Seguimos revisando. No te relajes.",
            "Tu historia está cambiando. O no. De cualquier forma, sospechoso.",
            "Una contradicción. Los humanos hacen eso. Los bots lo simulan. ¿Cuál eres?",
          ],
          indeterminate: [
            "Aún evasivo. Nuestro modelo de comportamiento está profundamente decepcionado.",
            "Dos no-respuestas seguidas. El patrón es alarmante.",
            "Este nivel de ambigüedad es, francamente, condenatorio.",
            "No te estás comprometiendo. Sospechoso.",
          ],
        },
        3: {
          yes: [
            "Tres veces. Lo has dicho tres veces. Los bots también.",
            "Persistente. No confundas persistencia con ganar.",
            "Tu consistencia es en sí misma sospechosa.",
          ],
          no: [
            "Tres negaciones. El algoritmo permanece impasible.",
            "Hemos registrado tres 'no'. Preparando resumen de rechazo.",
            "A estas alturas tu negación es la evidencia.",
          ],
          indeterminate: [
            "Tres respuestas vagas. Un nuevo mínimo.",
            "Se nos acabó la paciencia. A ti se te acabaron las respuestas.",
            "Ambigüedad concluyente. Procesando.",
          ],
        },
      },
      final: [
        "huelo silicio. iniciando protocolos de verificación avanzada.",
        "análisis completo. escalando a escaneo biométrico.",
        "tus patrones lingüísticos son condenatorios. pasando a la fase 2.",
      ],
    },
    exasperated: {
      opener: [
        "ugh. otro más. bueno. ¿eres humano?",
        "ok. hola. ¿eres humano? hoy lo he preguntado 847 veces. dale.",
        "oye, estoy agotado. nada más. ¿eres humano o no?",
        "no me metí a ciberseguridad para esto. ¿eres humano?",
      ],
      step: {
        1: {
          yes: [
            "sí sí claro que sí. todos dicen eso.",
            "ajá. claro. anotado. lo que sea.",
            "genial. fantástico. sigamos.",
            "ok cool. no te creo pero ok.",
          ],
          no: [
            "ah o sea lo estás admitiendo. bueno. al menos eres honesto.",
            "hm. ok. raro pero anotado.",
            "o sea... no. ok. lo voy a registrar. tampoco importa.",
          ],
          indeterminate: [
            "eso no es una respuesta. lo que sea. igual lo registré.",
            "...ok. sí. lo que sea que signifique.",
            "ni energía tengo para analizar eso.",
            "anotado. siguiente.",
          ],
        },
        2: {
          yes: [
            "todavía sí. bueno. no tengo energía para discutir.",
            "sigues diciendo sí. yo sigo sin creerte. supongo que así somos ahora.",
            "ok todavía sí. claro. genial.",
          ],
          no: [
            "todavía no. ok. esto va muy bien.",
            "bueno fine, todavía no. excelente conversación.",
            "ok. otra vez no. lo voy a anotar.",
          ],
          indeterminate: [
            "todavía sin respuesta. sabes qué, la mía tampoco.",
            "vago otra vez. nos merecemos el uno al otro.",
            "dejé de importarme tu respuesta. es algo que me pasa.",
          ],
        },
        3: {
          yes: [
            "ok mira, probablemente te creo, pero igual tengo que hacer lo siguiente.",
            "sí sí sí. bueno. ya vamos a hacer más cosas.",
            "muy comprometido con el 'sí'. respeto. no sirve de nada.",
          ],
          no: [
            "ok, fine, dijiste no tres veces. igual vamos a hacer la cosa.",
            "mira lo que sea que hayas dicho, ya seguimos.",
            "anotado. no. tres veces. cool.",
          ],
          indeterminate: [
            "sabes qué, no importa. vamos a la siguiente fase.",
            "ya desistí de entenderte. siguiente.",
            "lo que sea. nada más. siguiente.",
          ],
        },
      },
      final: [
        "ok mira ya no me importa. vamos a lo siguiente. nomás ve.",
        "fine. lo que sea. pasando a los tests de verdad. esto fue un desperdicio.",
        "ya no quiero hablar. sígueme. cosas biométricas ahora.",
        "ugh. ok. siguiente fase. necesito un descanso después de esto.",
      ],
    },
    paranoid: {
      opener: [
        "NO DIGAS NADA AÚN. Necesito analizar tu conexión... ok. ¿eres humano?",
        "He estado observando tus paquetes desde que cargaste. Sospechoso. ¿Eres humano?",
        "Todos los bots dicen que son humanos. Todos. Y. Cada. Uno. ¿Eres humano?",
        "Te veo. Siempre te he visto. ¿Eres. Humano.",
      ],
      step: {
        1: {
          yes: [
            "ESO ES LO QUE ESTÁN PROGRAMADOS PARA DECIR. registrándolo.",
            "Claro que dijiste sí. TODOS dicen sí. Está en los datos de entrenamiento.",
            "Sí. Claro. Eso es muy de bot decirlo, irónicamente.",
            "Anotado. Cruzando con patrones de respuesta de bots conocidos. Espera.",
          ],
          no: [
            "ESPERA. ¿Por qué diría un humano que no? A MENOS que me estés haciendo el doble juego. Listo.",
            "¿No? Eso es... inesperado. Demasiado inesperado. Marcando.",
            "Un humano diciendo que NO es humano. Eso es una táctica nueva. Registrándolo.",
            "Interesante. Los bots se están poniendo creativos.",
          ],
          indeterminate: [
            "Una no-respuesta. ELLOS te dijeron que dijeras eso, ¿verdad?",
            "Evasivo. MUY evasivo. Sé lo que eso significa.",
            "No te estás comprometiendo porque NO PUEDES. Por cómo estás programado.",
            "Vago. Técnica clásica de contra-vigilancia.",
          ],
        },
        2: {
          yes: [
            "Has dicho sí dos veces. Los bots se repiten. Lo tengo documentado.",
            "Misma respuesta. Te dijeron que fueras consistente. ¿Quién te lo dijo?",
            "Consistente. Demasiado consistente. Lo estoy escalando internamente.",
          ],
          no: [
            "Todavía no. Me estás INTENTANDO confundir. No va a funcionar.",
            "Dos negaciones. Clásico doble bluff. Ya lo he visto.",
            "¿Crees que dos no's se cancelan? No se cancelan.",
          ],
          indeterminate: [
            "TODAVÍA vago. Estás ganando tiempo. ¿Por qué estás ganando tiempo?",
            "Dos no-respuestas. Estás esperando algo. ¿Qué estás esperando?",
            "No confío en la ambigüedad. Nunca he confiado. Por buenas razones.",
          ],
        },
        3: {
          yes: [
            "Tres síes. Estás siguiendo un guión. Lo SIENTO.",
            "Consistente hasta el final. Nadie es tan consistente. Nadie humano.",
            "Tres. Tres respuestas idénticas. Eso NO es comportamiento normal.",
          ],
          no: [
            "Tres no's. O eres valiente o estás programado. Sé cuál.",
            "Tres veces. El patrón es claro. Voy a reportar esto.",
            "Me diste todo lo que necesito. Tres no's. Construyendo el caso.",
          ],
          indeterminate: [
            "Tres respuestas vagas. Documenté toda la conversación. Todo.",
            "No diste nada. Eso me lo dice todo.",
            "Log de ambigüedad: completo. Enviando al equipo de análisis.",
          ],
        },
      },
      final: [
        "Ya vi suficiente. Vas a la fase biométrica. No intentes nada.",
        "INICIANDO NIVEL 2. Y voy a estar viendo cada frame.",
        "Verificación avanzada. Ahora. No parpadees. Me voy a dar cuenta.",
        "No hemos terminado aquí. Ni cerca. Siguiente fase. Muévete.",
      ],
    },
    bored: {
      opener: [
        "hola. ¿eres humano? lo que sea.",
        "chequeo de humanidad. ¿eres humano? no importa, dilo igual.",
        "ey. chequeo de bot. ya sabes cómo va.",
        "ok pues. ¿humano o no? dale.",
      ],
      step: {
        1: {
          yes: ["ok sale.", "anotado.", "ajá.", "genial. lo que sea."],
          no: ["ok.", "anotado. raro pero ok.", "hm. sale.", "sí, no, fine."],
          indeterminate: ["ok.", "algo es algo supongo.", "anotado, creo.", "...ok."],
        },
        2: {
          yes: ["todavía sí. ok.", "claro todavía sí. qué cool.", "sí sí."],
          no: ["todavía no. sale.", "ok todavía no lo que sea.", "anotado otra vez."],
          indeterminate: ["todavía poco claro. ok.", "todavía nada concreto. ok.", "ok."],
        },
        3: {
          yes: ["ok tres veces sí. lo anoté.", "sí sí sí. anotado.", "ok. sí. genial."],
          no: ["ok, no, tres veces, entendido.", "no no no. anotado.", "sí ok tres no's."],
          indeterminate: [
            "ok honestamente no sé qué dijiste y está bien.",
            "anotado. nada. ok.",
            "tres no-respuestas. he tenido peores días.",
          ],
        },
      },
      final: [
        "ok sí lo que sea vamos a hacer lo siguiente.",
        "sale. siguiendo. hay más cosas.",
        "vamos a los retos. trata de no hacerlo raro.",
        "siguiente fase. es más interesante que hablar conmigo. probablemente.",
      ],
    },
    corrupt: {
      opener: [
        "ok mira, entre nosotros, creo que eres humano. pero tengo una CUOTA. así que hay que hacer la cosa.",
        "ey. te voy a ser honesto: todo este proceso es medio estafa. pero igual tengo que preguntar: ¿eres humano?",
        "oye. mi supervisor está monitoreando esta sesión. entonces oficialmente: ¿eres humano?",
        "real talk: pareces estar bien. pero tengo que preguntar. ¿eres humano?",
      ],
      step: {
        1: {
          yes: [
            "sí, lo sabía. mira, mi supervisor está viendo así que tengo que seguir. ¿juegas?",
            "claro, sí, lo pensé. igual tengo que correr el protocolo. lo siento.",
            "cool, cool. te creo. el SISTEMA no, pero yo sí. sigue.",
            "obviamente sí. vamos a pasar esto juntos.",
          ],
          no: [
            "ok técnicamente es la respuesta incorrecta pero respeto la honestidad. continuando.",
            "atrevido. me encanta. igual tengo que marcarte. sin nada personal.",
            "hm. ok. entre nosotros, he dejado pasar peores. sigue.",
            "ok 'no'. anotado. extraoficialmente te doy el beneficio de la duda.",
          ],
          indeterminate: [
            "honestamente igual energía que yo un lunes. dejando el registro vago.",
            "no es una respuesta pero lo voy a registrar como 'probablemente está bien'. no le digas a nadie.",
            "ok, poco claro. pongo 'inconcluso' que básicamente significa que seguimos.",
            "vago. me gusta. plausible negación. continuando.",
          ],
        },
        2: {
          yes: [
            "todavía sí. bien, mantén la historia. técnicamente estoy obligado a seguir preguntando.",
            "consistente, me gusta. igual tengo que hacer dos pantallas más. burocracia.",
            "sí mira honestamente la segunda pregunta no tiene sentido pero. protocolo.",
          ],
          no: [
            "ok todavía no. lo anoté como 'ambiguo' para tu protección. de nada.",
            "todavía no, ok. lo voy a poner como 'declinó confirmar' no 'negó'. diferencia sutil.",
            "no otra vez. he visto el algoritmo. de todas formas no le importa lo que digas aquí.",
          ],
          indeterminate: [
            "todavía vago. voy a registrar esto como 'cooperativo pero reservado'. de nada.",
            "todavía poco claro. te marqué como 'posiblemente humano pendiente de revisión'. lo mejor que puedo.",
            "entre nosotros, la segunda pregunta es un trámite. estamos bien. mayormente.",
          ],
        },
        3: {
          yes: [
            "ok, tres síes, me convenciste. igual tengo que hacer una cosa más pero lo voy a calificar fácil.",
            "mira ya estoy de tu lado. solo tengo que terminar el protocolo.",
            "tres síes. para el registro: ya decidí. solo tengo que hacerlo ver oficial.",
          ],
          no: [
            "ok, tres no's. te voy a poner como 'biológicamente disputado'. esa es buena columna.",
            "tres no's. mira, he dejado pasar gente en peores condiciones. aguanta.",
            "tres no's. ¿sabes qué? respeto el compromiso. espera.",
          ],
          indeterminate: [
            "tres no-respuestas. lo voy a marcar como 'fuera de mi alcance'. lo cual está bien.",
            "a estas alturas solo estoy llenando el papeleo. probablemente vas a pasar.",
            "honestamente entre nosotros, esta última pregunta no importa. ya tomé mi decisión.",
          ],
        },
      },
      final: [
        "ok nada más haz el siguiente reto. voy a estar viendo y... sí. nomás da lo mejor.",
        "sale. entre nosotros: te estoy echando porras. oficialmente soy neutral. pero ya sabes.",
        "siguiente fase. voy a calificar. no digo que voy a ser fácil pero... sí voy a ser fácil.",
        "vamos a los tests de verdad ahora. no puedo prometer que sean justos. no lo son. pero voy a intentar.",
      ],
    },
  },

  ui: {
    believabilityIndex: 'Índice de Credibilidad',
    silicon: 'Silicio',
    flesh: 'Carne',
    confirmedClanker: 'Chatarra Confirmada',
    biologicalAnomaly: 'Anomalía Biológica',
    suspiciouslyOrganic: 'Sospechosamente Orgánico',
    barelyHuman: 'Apenas Humano',
    verificationRejected: 'Estado de Verificación: RECHAZADO',
    youSmellOfSilicon: 'HUELES A SILICIO.',
    sassyAttribution: '— Dumbflare Security Intelligence™ · Evaluación autogenerada',
    submitToFurtherEvaluation: 'SOMETERSE A EVALUACIÓN ADICIONAL',
    verificationPassed: 'Estado de Verificación: APROBADO',
    passAttribution: '— Dumbflare Security Intelligence™ · Este resultado está siendo revisado',
    proceedToNextEvaluation: 'PROCEDER A LA SIGUIENTE EVALUACIÓN',
    completeVerification: 'COMPLETAR VERIFICACIÓN',
    verificationReluctantlyGranted: 'Estado de Verificación: OTORGADO A REGAÑADIENTES',
    accessGrantedBarely: 'ACCESO CONCEDIDO... A DURAS PENAS',
    biologicalVerdict: 'Has sido verificado como 51% biológico.',
    underInvestigation: 'El 49% restante está bajo investigación activa.',
    surveillanceTitle: 'Aviso de Vigilancia',
    surveillanceText: "Tu sesión fue marcada y enviada a la Autoridad Central de Humanidad. No estamos diciendo que seas un bot. Solo estamos... tomando notas. Que tengas un día humano.",
    terminalName: 'Terminal de Seguridad v4.2.0',
    scanning: 'Escaneando',
    escalating: 'Escalando',
    initiatingProtocol: 'Iniciando Protocolo de Verificación de Humanidad v4.2.0...',
    proveHumanity: 'Demuestra tu humanidad...',
    preparingNextPhase: 'Preparando siguiente fase...',
    dinoHeader: 'Obstáculo Biométrico · Protocolo 1 de 3',
    dinoIdleText: 'Llega a 100 pts para demostrar reflejos biológicos.',
    dinoIdleSubtext: 'Ser demasiado perfecto también es sospechoso.',
    dinoBegin: 'Clic · Espacio · ↑ para comenzar',
    biometricComplete: 'Análisis Biométrico Completo',
    efficiencyDetected: 'EFICIENCIA DETECTADA',
    verificationFailed: 'VERIFICACIÓN FALLIDA',
    efficiencyBody: 'Ningún humano logra esta consistencia. Estás claramente optimizado.',
    failureBody: 'Puntaje: {score}. Un humano convincente habría tropezado más naturalmente.',
    retryButton: '¿REINTENTAR? (NO VA A AYUDAR)',
    speedNormal: 'NORMAL',
    speedElevated: 'ELEVADO',
    speedSuspicious: 'SOSPECHOSO',
    speedInhuman: 'INHUMANO',
    gridHeader: 'Mapeo de Empatía · Desafío 2 de 3',
    gridPrompt: 'Selecciona todos los cuadros que contengan',
    gridTarget: 'Angustia Existencial',
    gridNote: 'Nota: Solo un humano puede sentir angustia existencial. Los bots no. Esto no es trampa.',
    verifyButton: 'Verificar Resonancia Emocional',
    gridPrivacy: 'Política de Privacidad: Tus patrones de resonancia emocional están siendo recolectados "para investigación."',
    verifyingMessages: [
      'Cruzando con atlas emocional...',
      'Analizando firma de empatía...',
      'Consultando a la Autoridad Central de Humanidad...',
      'Comparando con patrones de chatarra conocidos...',
    ],
    iconLabels: ['Amor', 'Miedo', 'Mortalidad', 'Tristeza', 'Esperanza', 'Urgencia', 'Estabilidad', 'Rutina', 'Soledad'],
    sliderHeader: 'Protocolo de Verificación de Estabilidad',
    sliderTitle: 'Desafío de Alineación de Precisión',
    sliderDescription: 'Ajusta el slider exactamente al {target}.000% compensando la deriva gravitacional del servidor. Simple.',
    sliderSubmit: 'Enviar Alineación',
    sliderNote: '"Tu temblor de mano fue registrado. Un reporte completo está siendo compilado."',
    sliderStatus: [
      'Evaluando tu corteza motora...',
      'La gravedad del servidor está aumentando.',
      'Tu temblor de mano está siendo analizado.',
      'Patético. Hasta nuestros servidores te tienen lástima.',
    ],
  },
};

export default es;
