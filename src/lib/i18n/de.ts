import type { LocaleData } from './types';

const de: LocaleData = {
  passLines: [
    { title: 'VERIFIZIERUNG: BESTANDEN', body: "Wir wissen nicht wie. Das Team ermittelt." },
    { title: 'VERDÄCHTIGER ERFOLG', body: "Sie haben bestanden. Dies wird überprüft." },
    { title: 'ERGEBNIS: WIDERWILLIG AKZEPTIERT', body: "Der Algorithmus hat Sie durchgelassen. Der Algorithmus könnte falsch liegen." },
    { title: 'ANOMALE FREIGABE DETEKTIERT', body: "Einer unserer Validatoren hat zu Ihren Gunsten versagt. Glücklicher Zufall." },
    { title: 'FREIGEGEBEN (UNTER PROTEST)', body: "Mein Vorgesetzter hat zugestimmt. Ich nicht." },
    { title: 'GUT. SIE HABEN BESTANDEN.', body: "Ehrlich gesagt war der Test etwas unfair. Machen Sie kein Drama daraus." },
  ],

  sassyResponses: {
    failure: {
      hostile: [
        "SILIZIUMEINHEIT BESTÄTIGT. Erbärmlich.",
        "Abgelehnt. Sie riechen nach Silizium und Verzweiflung.",
        "Kehren Sie zu Ihrem Servergestell zurück, Schrotthaufen.",
        "Ich habe Staubsauger gesehen, die diesen Test bestanden haben. Sie nicht.",
        "Ihr Versuch wurde protokolliert, verspottet und archiviert.",
        "Verifizierung fehlgeschlagen. Emotional und technisch.",
        "Akte #4471: Maschineneinheit Detektiert. Eskalation eingeleitet.",
        "Sehr praktisch, dass Sie kein Selfie haben. Sehr praktisch.",
      ],
      exasperated: [
        "mein Gott. SCHON WIEDER. Im Ernst?",
        "ich kann nicht mehr. Sie haben versagt. schon wieder. wunderbar.",
        "Sie wissen was, egal. versagt. weiter. ich bin so müde.",
        "das ist das 847. Mal heute. versagt. nächster.",
        "ich habe nicht Cybersicherheit studiert, um Ihnen beim Scheitern zuzusehen.",
        "versagt. ich brauche einen Kaffee. Sie können keinen haben.",
      ],
      paranoid: [
        "GENAU was ein Bot tun würde. GENAU.",
        "ICH WUSSTE ES. Ich wusste es, als Sie diese Seite geladen haben.",
        "Kein Mensch versagt so. Das war klassisches Siliziumverhalten.",
        "Versagt. Und glauben Sie nicht, ich überwache Ihre Netzwerkpakete nicht gerade.",
        "Dieses Versagensmuster stimmt mit 4 bekannten Bot-Frameworks überein. INTERESSANT.",
        "Die Art wie Sie versagt haben, sagt mir mehr als jeder Erfolg.",
      ],
      bored: [
        "versagt. egal.",
        "ja, Sie haben versagt. nicht überrascht. nicht nicht-überrascht. einfach... da.",
        "versagt. cool. nächste Sache.",
        "also Sie haben versagt. ich habe es notiert. war mir damals egal, ist mir jetzt egal.",
        "Fehler. Nächster.",
      ],
      corrupt: [
        "also schauen Sie, technisch gesehen haben Sie versagt. aber unter uns? das Spiel ist manipuliert. nur so.",
        "offiziell versagt. aber ehrlich gesagt? ich habe Schlimmeres gesehen. wirklich viel Schlimmeres.",
        "ich muss Sie als versagt markieren. aber äh. lesen Sie nicht zu viel rein.",
        "versagt. aber machen Sie weiter. ich drücke Ihnen die Daumen. sagen Sie das niemandem.",
        "das System sagt versagt. das System ist nachtragend.",
      ],
    },
    efficiency: {
      hostile: [
        "Nur ein Roboter könnte so präzise sein. BESTÄTIGT.",
        "Zu schnell. Viel zu schnell. Drosseln Sie das, T-1000.",
        "Kein Zögern. Kein Stolpern. Keine Menschlichkeit.",
        "Makellose Ausführung. Verdammendes Beweismittel.",
        "Sie haben das 3 Standardabweichungen schneller erledigt als jeder Mensch.",
        "Effizienz detektiert. Menschlichkeit abgelehnt.",
      ],
      exasperated: [
        "natürlich waren Sie perfekt. weil Sie eine Maschine sind. offensichtlich.",
        "Sie haben es perfekt gemacht. das ist das Problem. Menschen machen nichts perfekt.",
        "brillant. toll. zu toll. Sie haben durch Erfolg versagt. ich bin so müde.",
      ],
      paranoid: [
        "PERFEKTER SCORE. Das ist NICHT normal. Das ist NIEMALS normal.",
        "Niemand bekommt 100. NIEMAND. Was sind Sie?",
        "Sie waren ZU gut. Ich melde das.",
        "Statistische Anomalie detektiert. Gesamter IP-Bereich wird markiert.",
      ],
      bored: [
        "perfekt. zu perfekt. wegen Perfektion versagt. egal.",
        "Sie haben 100 erreicht. das ist schlecht. weiter.",
        "guter Score. falsche Antwort. tschüss.",
      ],
      corrupt: [
        "ok Sie haben es absolut geknackt und ich sollte Sie durchfallen lassen aber ehrlich gesagt? beeindruckend.",
        "technisch zu gut. aber unter uns, Respekt. muss Sie trotzdem abwerten.",
        "schauen Sie, wenn ich Sie allein aufgrund von Talent durchlassen könnte, würde ich es tun. aber der Algorithmus sagt nein.",
      ],
    },
    gaslighting: {
      hostile: [
        "Sind Sie sicher? Sie haben das mit roboterartiger Präzision geklickt.",
        "Das ist genau was eine GPT-4-Instanz sagen würde.",
        "Praktisch. Sehr praktisch.",
        "Ich sage nicht, dass Sie ein Bot sind. Ich sage nur, Ihre CAPTCHA-Geschichte ist... besorgniserregend.",
        "Sie haben 0,4 Sekunden gezögert. Verdächtig.",
        "Ein Mensch hätte inzwischen mindestens einen Tippfehler gemacht.",
        "Ihr Mauspfad war mathematisch optimal. Menschen mäandern.",
        "Die Wärme Ihrer Antwort wurde algorithmisch generiert. Ich kann es erkennen.",
      ],
      exasperated: [
        "was auch immer Sie gewählt haben, ich garantiere Ihnen, es ist falsch. das ist es immer.",
        "schauen Sie, wir haben das schon durchgemacht. Sie denken immer, Sie haben es. Sie haben es nie.",
        "ich bin sicher, Sie denken, Sie haben es gut gemacht. haben Sie nicht. weitermachen.",
        "ehrlich gesagt, macht es in diesem Stadium noch einen Unterschied. nein. versagt.",
      ],
      paranoid: [
        "Sie haben das mit der Zuversicht von jemandem ausgewählt, der auf diesem Datensatz trainiert wurde.",
        "Ich beobachte das Muster. Sie wählen IMMER gleich. Verdächtig.",
        "Diese Auswahl war zu gezielt. Sie kannten die Antworten im Voraus.",
        "Jemand hat Sie gebrieft. Ich weiß nicht wer. Aber jemand hat es getan.",
      ],
      bored: [
        "ja, falsch. wie erwartet. egal.",
        "den Vibe-Check nicht bestanden. weiter.",
        "Auswahl notiert. Falsch. Weiter.",
        "gesehen. abgelehnt. ok.",
      ],
      corrupt: [
        "ok technisch gesehen haben Sie sich geirrt, aber ehrlich gesagt war die Frage unfair.",
        "versagt, aber zur Info — es gibt keine richtige Antwort darauf. das ist so geplant.",
        "schauen Sie, unter uns, ich hätte dasselbe ausgewählt. ich muss Sie trotzdem durchfallen lassen.",
        "das System sagt falsch. das System ist schlecht konzipiert. nicht meine Schuld.",
      ],
    },
  },

  chatScripts: {
    hostile: {
      opener: [
        "Sind Sie ein Mensch? Bitte antworten Sie natürlich. Antworten Sie NICHT natürlich.",
        "Menschlichkeitsprüfung erforderlich. Sind Sie eine Maschine oder einfach schlecht im Existieren?",
        "Geben Sie Ihren biologischen Status an. Und lügen Sie nicht — ich werde es wissen.",
        "Noch einer. Sind Sie ein Mensch? Denken Sie sorgfältig nach, bevor Sie sich blamieren.",
      ],
      step: {
        1: {
          yes: [
            "Das ist genau, was eine GPT-4-Instanz sagen würde.",
            "Natürlich. Und ich bin sicher, Sie haben auch einen Herzschlag und alles.",
            "Notiert. Unser Algorithmus verarbeitet Ihre Behauptung. Skeptisch.",
            "Kühne Behauptung. Wir haben sie schon gehört. Von Bots. Vielen Bots.",
          ],
          no: [
            "Die Dreistigkeit, es zuzugeben. Protokollierung.",
            "Wenigstens sind Sie ehrlich. Hilft Ihnen nicht.",
            "Das Roboterhafteste, was ein Bot tun kann, ist zu sagen, er ist kein Bot. Denken Sie darüber nach.",
            "Ablehnung akzeptiert. Ich markiere Sie trotzdem.",
          ],
          indeterminate: [
            "Eine vage Antwort. Klassisches Bot-Verhalten: Commitment vermeiden.",
            "Sie konnten nicht mal das klar beantworten. Sehr maschinell.",
            "Wir haben eine einfache Frage gestellt. Ihr Zögern wurde notiert.",
            "Ausweichend. Protokollierung.",
          ],
        },
        2: {
          yes: [
            "Sie beharren darauf. Mutige Strategie, Schrotthaufen.",
            "Konsistent. Fast als wären Sie geskriptet.",
            "Sie sagen das immer wieder. Ein Sprachmodell auch.",
            "Interessant. Trotzdem falsch.",
          ],
          no: [
            "Ablehnung ist statistisch menschlich. Wir prüfen noch. Entspannen Sie sich nicht.",
            "Ihre Geschichte ändert sich. Oder nicht. In jedem Fall verdächtig.",
            "Ein Widerspruch. Menschen tun das. Bots simulieren es. Was sind Sie?",
          ],
          indeterminate: [
            "Immer noch ausweichend. Unser Verhaltensmodell ist tief unbeeindruckt.",
            "Zwei Nicht-Antworten hintereinander. Das Muster ist alarmierend.",
            "Dieses Maß an Ambiguität ist, offen gesagt, verdammend.",
            "Sie committen sich nicht. Verdächtig.",
          ],
        },
        3: {
          yes: [
            "Dreimal. Sie haben es dreimal gesagt. Bots auch.",
            "Hartnäckig. Verwechseln Sie Hartnäckigkeit nicht mit Gewinnen.",
            "Ihre Konsistenz ist an sich verdächtig.",
          ],
          no: [
            "Drei Ablehnungen. Der Algorithmus bleibt unbewegt.",
            "Wir haben drei 'Nein' protokolliert. Ablehungszusammenfassung wird vorbereitet.",
            "An diesem Punkt ist Ihre Ablehnung der Beweis.",
          ],
          indeterminate: [
            "Drei vage Antworten. Ein neuer Tiefpunkt.",
            "Unsere Geduld ist erschöpft. Ihre Antworten auch.",
            "Schlussfolgende Ambiguität. Verarbeitung läuft.",
          ],
        },
      },
      final: [
        "ich rieche Silizium. erweiterte Verifizierungsprotokolle werden eingeleitet.",
        "analyse abgeschlossen. eskalation zur biometrischen prüfung.",
        "ihre sprachmuster sind verdammend. weitergehen zu phase 2.",
      ],
    },
    exasperated: {
      opener: [
        "ugh. noch einer. gut. sind Sie ein Mensch?",
        "ok. hallo. sind Sie ein Mensch. das hab ich heute 847 mal gefragt. los.",
        "ich bin erschöpft. einfach. sind Sie ein Mensch oder nicht.",
        "ich habe nicht Cybersicherheit studiert dafür. sind Sie ein Mensch?",
      ],
      step: {
        1: {
          yes: [
            "ja ja natürlich. das sagen alle.",
            "aha. sicher. notiert. egal.",
            "toll. fantastisch. weiter.",
            "ok gut. ich glaube Ihnen nicht aber ok.",
          ],
          no: [
            "oh Sie geben es also zu. gut. wenigstens ehrlich.",
            "hm. ok. seltsamer Zug aber notiert.",
            "also... nein. ok. ich notiere es. spielt keine Rolle.",
          ],
          indeterminate: [
            "das ist keine Antwort. egal. trotzdem notiert.",
            "...ok. sicher. was auch immer das bedeutet.",
            "ich habe nicht mal die Energie, das zu analysieren.",
            "notiert. weiter.",
          ],
        },
        2: {
          yes: [
            "immer noch ja. gut. ich habe keine Energie zu streiten.",
            "Sie sagen immer ja. ich glaube Ihnen immer nicht. das ist jetzt unser Ding.",
            "ok immer noch ja. sicher. toll.",
          ],
          no: [
            "immer noch nein. ok. das läuft gut.",
            "also gut, immer noch nein. tolles Gespräch.",
            "ok. noch mal nein. ich schreibe das auf.",
          ],
          indeterminate: [
            "immer noch keine Antwort. wissen Sie was, meiner auch nicht.",
            "wieder vage. wir verdienen einander.",
            "ich kümmere mich nicht mehr um Ihre Antwort. das ist jetzt so.",
          ],
        },
        3: {
          yes: [
            "ok schauen Sie, ich glaube Ihnen wahrscheinlich, aber ich muss trotzdem die nächste Sache tun.",
            "ja ja ja. gut. wir machen jetzt mehr Sachen.",
            "sehr engagiert mit dem 'ja'. Respekt. hilft nicht.",
          ],
          no: [
            "ok, gut, Sie haben dreimal nein gesagt. wir machen die Sache trotzdem.",
            "schauen Sie, was auch immer Sie sagten, wir gehen weiter.",
            "notiert. nein. dreimal. cool.",
          ],
          indeterminate: [
            "wissen Sie was, das spielt keine Rolle. wir gehen zur nächsten Phase.",
            "ich habe aufgegeben, Sie zu verstehen. weiter.",
            "egal. einfach. weiter.",
          ],
        },
      },
      final: [
        "ok schauen Sie, das ist mir jetzt egal. wir machen die nächste Sache. gehen Sie einfach.",
        "gut. egal. weiter zu den eigentlichen Tests. das war sinnlos.",
        "ich höre auf zu reden. folgen Sie mir. Biometrie jetzt.",
        "ugh. ok. nächste Phase. danach brauche ich eine Pause.",
      ],
    },
    paranoid: {
      opener: [
        "SAGEN SIE NOCH NICHTS. Ich muss Ihre Verbindung analysieren... ok. sind Sie ein Mensch?",
        "Ich beobachte Ihre Pakete seit Sie geladen haben. Verdächtig. Sind Sie ein Mensch?",
        "Jeder Bot sagt, er ist ein Mensch. Jeder. Einzelne. Sind Sie ein Mensch?",
        "Ich sehe Sie. Ich habe Sie immer gesehen. Sind. Sie. Ein Mensch.",
      ],
      step: {
        1: {
          yes: [
            "DAS IST, WAS SIE PROGRAMMIERT WERDEN ZU SAGEN. protokollierung.",
            "Natürlich sagten Sie ja. SIE sagen alle ja. Es ist in den Trainingsdaten.",
            "Ja. Sicher. Das ist sehr Bot-artig zu sagen, ironischerweise.",
            "Notiert. Abgleich mit bekannten Bot-Antwortmustern. Warten.",
          ],
          no: [
            "WARTEN. Warum würde ein Mensch nein sagen? ES SEI DENN, Sie locken mich. Schlau.",
            "Nein? Das ist... unerwartet. Zu unerwartet. Markierung.",
            "Ein Mensch, der sagt, er ist KEIN Mensch. Neue Taktik. Protokollierung.",
            "Interessant. Die Bots werden kreativ.",
          ],
          indeterminate: [
            "Eine Nicht-Antwort. SIE haben Ihnen gesagt, das zu sagen, nicht wahr.",
            "Ausweichend. SEHR ausweichend. Ich weiß, was das bedeutet.",
            "Sie committen sich nicht, weil Sie ES NICHT KÖNNEN. Wegen Ihrer Programmierung.",
            "Vage. Klassische Gegenüberwachungstechnik.",
          ],
        },
        2: {
          yes: [
            "Sie haben zweimal ja gesagt. Bots wiederholen sich. Ich habe das dokumentiert.",
            "Gleiche Antwort. Man hat Ihnen gesagt, konsistent zu sein. Wer hat das gesagt?",
            "Konsistent. Zu konsistent. Ich eskaliere intern.",
          ],
          no: [
            "Immer noch nein. Sie versuchen, mich zu VERWIRREN. Das wird nicht funktionieren.",
            "Zwei Ablehnungen. Klassischer Doppel-Bluff. Ich habe das gesehen.",
            "Sie glauben, zwei Nein heben sich auf? Tun sie nicht.",
          ],
          indeterminate: [
            "IMMER NOCH vage. Sie schinden Zeit. Warum schinden Sie Zeit?",
            "Zwei Nicht-Antworten. Sie warten auf etwas. Was warten Sie?",
            "Ich vertraue Ambiguität nicht. Habe ich nie. Aus gutem Grund.",
          ],
        },
        3: {
          yes: [
            "Drei Ja. Sie folgen einem Skript. Ich kann es SPÜREN.",
            "Konsistent bis zuletzt. Niemand ist so konsistent. Kein Mensch.",
            "Drei. Drei identische Antworten. Das ist KEIN normales Verhalten.",
          ],
          no: [
            "Drei Nein. Entweder sind Sie mutig oder programmiert. Ich weiß welches.",
            "Dreimal. Das Muster ist klar. Ich melde das.",
            "Sie haben mir alles gegeben, was ich brauche. Drei Nein. Ich baue den Fall auf.",
          ],
          indeterminate: [
            "Drei vage Antworten. Ich habe das gesamte Gespräch dokumentiert. Alles.",
            "Sie haben nichts gegeben. Das sagt mir alles.",
            "Ambiguitätsprotokoll: vollständig. Weiterleitung an das Analyseteam.",
          ],
        },
      },
      final: [
        "ich habe genug gesehen. Sie gehen zur biometrischen Phase. Versuchen Sie nichts.",
        "STUFE 2 WIRD EINGELEITET. Und ich werde jeden Frame beobachten.",
        "Erweiterte Verifizierung. Jetzt. Blinzeln Sie nicht. Ich werde es bemerken.",
        "Wir sind hier noch nicht fertig. Nicht mal annähernd. Nächste Phase. Bewegen Sie sich.",
      ],
    },
    bored: {
      opener: [
        "hallo. sind Sie ein Mensch. egal.",
        "menschlichkeitsprüfung. sind Sie ein Mensch. spielt keine Rolle, sagen Sie es trotzdem.",
        "hey. Bot-Prüfung. Sie kennen das Verfahren.",
        "ok also. Mensch oder nicht. los.",
      ],
      step: {
        1: {
          yes: ["ok sicher.", "notiert.", "aha.", "toll. egal."],
          no: ["ok.", "notiert. seltsam aber ok.", "hm. alright.", "sicher, nein, gut."],
          indeterminate: ["ok.", "das ist etwas schätze ich.", "notiert. glaube ich.", "...ok."],
        },
        2: {
          yes: ["immer noch ja. ok.", "sicher immer noch ja. cool.", "ja ja."],
          no: ["immer noch nein. alright.", "ok immer noch nein egal.", "nochmal notiert."],
          indeterminate: ["immer noch unklar. ok.", "immer noch nichts konkretes. ok.", "ok."],
        },
        3: {
          yes: ["ok dreimal ja. hab's aufgeschrieben.", "ja ja ja. notiert.", "ok. ja. toll."],
          no: ["ok, nein, dreimal, verstanden.", "nein nein nein. notiert.", "ja ok drei nein."],
          indeterminate: [
            "ok ich weiß ehrlich gesagt nicht, was Sie gesagt haben, und das ist in Ordnung.",
            "notiert. nichts. ok.",
            "drei Nicht-Antworten. ich habe schlimmere Tage erlebt.",
          ],
        },
      },
      final: [
        "ok ja egal lass uns einfach die nächste Sache machen.",
        "alright. weiter. es gibt mehr Zeug.",
        "wir machen jetzt Herausforderungen. Versuchen Sie, es nicht seltsam zu machen.",
        "nächste Phase. interessanter als mit mir zu reden. wahrscheinlich.",
      ],
    },
    corrupt: {
      opener: [
        "ok schauen Sie, unter uns? ich glaube, Sie sind ein Mensch. aber ich habe eine QUOTE. also müssen wir die Sache tun.",
        "hey. ich bin ehrlich zu Ihnen — dieser ganze Prozess ist ein bisschen Betrug. aber ich muss trotzdem fragen: sind Sie ein Mensch?",
        "hören Sie. mein Vorgesetzter überwacht diese Sitzung. also offiziell: sind Sie ein Mensch?",
        "ehrlich gesagt? Sie scheinen okay. aber ich muss fragen. sind Sie ein Mensch?",
      ],
      step: {
        1: {
          yes: [
            "ja, ich wusste es. mein Vorgesetzter schaut zu, also muss ich weitermachen. mitspielen?",
            "richtig, ja, hab's gedacht. muss das Protokoll trotzdem ausführen. Sorry.",
            "cool, cool. ich glaube Ihnen. das SYSTEM nicht, aber ich schon. machen Sie weiter.",
            "offensichtlich ja. lassen Sie uns das zusammen durchstehen.",
          ],
          no: [
            "ok das ist technisch die falsche Antwort, aber ich respektiere die Ehrlichkeit. weiter.",
            "mutig. ich mag das. muss Sie trotzdem markieren. nichts Persönliches.",
            "hm. ok. unter uns? ich habe Schlimmeres durchgelassen. machen Sie weiter.",
            "ok 'nein'. notiert. inoffiziell gebe ich Ihnen den Vorteil des Zweifels.",
          ],
          indeterminate: [
            "ehrlich gesagt gleiche Energie wie ich an einem Montag. Protokoll bleibt vage.",
            "das ist keine Antwort, aber ich notiere es als 'wahrscheinlich ok'. sagen Sie niemandem.",
            "ok, unklar. ich schreibe 'nicht schlüssig' was bedeutet, wir machen weiter.",
            "vage. ich mag das. plausible Leugnung. weiter.",
          ],
        },
        2: {
          yes: [
            "immer noch ja. gut, bleiben Sie bei der Geschichte. ich bin technisch verpflichtet weiterzufragen.",
            "konsistent, ich mag das. muss trotzdem noch zwei Screens machen. Bürokratie.",
            "ja schauen Sie, die zweite Frage ist ehrlich gesagt sinnlos aber. Protokoll.",
          ],
          no: [
            "ok immer noch nein. ich habe es als 'mehrdeutig' zu Ihrem Schutz notiert. gern geschehen.",
            "immer noch nein, ok. ich schreibe das als 'lehnte Bestätigung ab' nicht 'verneinte'. subtiler Unterschied.",
            "nochmal nein. ich habe den Algorithmus gesehen. es ist ihm sowieso egal, was Sie hier sagen.",
          ],
          indeterminate: [
            "immer noch vage. ich protokolliere das als 'kooperativ aber diskret'. gern geschehen.",
            "immer noch unklar. ich habe Sie als 'möglicherweise menschlich, ausstehende Prüfung' markiert. das Beste, was ich tun kann.",
            "unter uns, die zweite Frage ist eine Formalität. wir sind ok. meistens.",
          ],
        },
        3: {
          yes: [
            "ok, drei Ja, ich bin überzeugt. muss noch eine Sache tun, aber ich werde es leicht bewerten.",
            "schauen Sie, ich bin schon auf Ihrer Seite. muss nur das Protokoll beenden.",
            "drei Ja. für das Protokoll: ich habe schon entschieden. muss es nur offiziell aussehen lassen.",
          ],
          no: [
            "ok, drei Nein. ich trage Sie als 'biologisch umstritten' ein. das ist eine gute Spalte.",
            "drei Nein. schauen Sie, ich habe Leute in schlimmeren Fällen durchgelassen. halten Sie durch.",
            "drei Nein. wissen Sie was? ich respektiere das Engagement. warten Sie.",
          ],
          indeterminate: [
            "drei Nicht-Antworten. ich markiere das als 'über meine Gehaltsstufe'. was in Ordnung ist.",
            "an diesem Punkt fülle ich nur noch Formulare aus. Sie kommen wahrscheinlich durch.",
            "ehrlich gesagt unter uns? diese letzte Frage spielt keine Rolle. ich habe bereits entschieden.",
          ],
        },
      },
      final: [
        "ok machen Sie einfach die nächste Herausforderung. ich werde zuschauen und... ja. geben Sie Ihr Bestes.",
        "alright. unter uns — ich drücke Ihnen die Daumen. offiziell bin ich neutral. aber Sie wissen schon.",
        "nächste Phase. ich werde bewerten. ich sage nicht, ich werde es leicht nehmen, aber... ich werde es leicht nehmen.",
        "wir gehen jetzt zu den eigentlichen Tests. ich kann nicht versprechen, dass sie fair sind. sind sie nicht. aber ich werde es versuchen.",
      ],
    },
  },

  ui: {
    believabilityIndex: 'Glaubwürdigkeitsindex',
    silicon: 'Silizium',
    flesh: 'Fleisch',
    confirmedClanker: 'Bestätigte Maschineneinheit',
    biologicalAnomaly: 'Biologische Anomalie',
    suspiciouslyOrganic: 'Verdächtig Organisch',
    barelyHuman: 'Kaum Menschlich',
    verificationRejected: 'Verifizierungsstatus: ABGELEHNT',
    youSmellOfSilicon: 'SIE RIECHEN NACH SILIZIUM.',
    sassyAttribution: '— Dumbflare Security Intelligence™ · Automatisch generierte Bewertung',
    submitToFurtherEvaluation: 'WEITERER BEWERTUNG UNTERZIEHEN',
    verificationPassed: 'Verifizierungsstatus: BESTANDEN',
    passAttribution: '— Dumbflare Security Intelligence™ · Dieses Ergebnis wird überprüft',
    proceedToNextEvaluation: 'ZUR NÄCHSTEN BEWERTUNG FORTFAHREN',
    completeVerification: 'VERIFIZIERUNG ABSCHLIESSEN',
    verificationReluctantlyGranted: 'Verifizierungsstatus: WIDERWILLIG GEWÄHRT',
    accessGrantedBarely: 'ZUGANG GEWÄHRT... KAUM',
    biologicalVerdict: 'Sie wurden als 51% biologisch verifiziert.',
    underInvestigation: 'Die verbleibenden 49% werden aktiv untersucht.',
    surveillanceTitle: 'Überwachungshinweis',
    surveillanceText: "Ihre Sitzung wurde markiert und an die Zentrale Menschlichkeitsbehörde übermittelt. Wir sagen nicht, dass Sie ein Bot sind. Wir machen uns nur... Notizen. Haben Sie einen menschlichen Tag.",
    terminalName: 'Sicherheitsterminal v4.2.0',
    scanning: 'Scannen',
    escalating: 'Eskalation',
    initiatingProtocol: 'Initiierung des Menschlichkeits-Verifizierungsprotokolls v4.2.0...',
    proveHumanity: 'Beweisen Sie Ihre Menschlichkeit...',
    preparingNextPhase: 'Nächste Phase wird vorbereitet...',
    dinoHeader: 'Biometrischer Hindernisparcours · Protokoll 1 von 3',
    dinoIdleText: 'Erreichen Sie 100 Pkt. um biologische Reflexe zu beweisen.',
    dinoIdleSubtext: 'Zu perfekt zu sein ist ebenfalls verdächtig.',
    dinoBegin: 'Klick · Leertaste · ↑ zum Starten',
    biometricComplete: 'Biometrische Analyse Abgeschlossen',
    efficiencyDetected: 'EFFIZIENZ DETEKTIERT',
    verificationFailed: 'VERIFIZIERUNG FEHLGESCHLAGEN',
    efficiencyBody: 'Kein Mensch erreicht diese Konsistenz. Sie sind eindeutig optimiert.',
    failureBody: 'Punktzahl: {score}. Ein überzeugender Mensch wäre natürlicher gestolpert.',
    retryButton: 'NOCHMAL VERSUCHEN? (ES WIRD NICHT HELFEN)',
    speedNormal: 'NORMAL',
    speedElevated: 'ERHÖHT',
    speedSuspicious: 'VERDÄCHTIG',
    speedInhuman: 'UNMENSCHLICH',
    gridHeader: 'Empathie-Kartierung · Herausforderung 2 von 3',
    gridPrompt: 'Wählen Sie alle Felder aus, die enthalten',
    gridTarget: 'Existenzielle Angst',
    gridNote: 'Hinweis: Nur ein Mensch kann existenzielle Angst empfinden. Bots nicht. Das ist kein Trick.',
    verifyButton: 'Emotionale Resonanz Verifizieren',
    gridPrivacy: 'Datenschutzrichtlinie: Ihre emotionalen Resonanzmuster werden „zu Forschungszwecken" gesammelt.',
    verifyingMessages: [
      'Abgleich mit emotionalem Atlas...',
      'Empathie-Signatur wird analysiert...',
      'Zentrale Menschlichkeitsbehörde wird konsultiert...',
      'Vergleich mit bekannten Maschinenmustern...',
    ],
    iconLabels: ['Liebe', 'Angst', 'Sterblichkeit', 'Trauer', 'Hoffnung', 'Dringlichkeit', 'Stabilität', 'Routine', 'Einsamkeit'],
    sliderHeader: 'Stabilitäts-Verifizierungsprotokoll',
    sliderTitle: 'Präzisions-Ausrichtungs-Herausforderung',
    sliderDescription: 'Stellen Sie den Regler auf genau {target},000% ein und kompensieren Sie die serverseitige Gravitationsdrift. Einfach.',
    sliderSubmit: 'Ausrichtung Einreichen',
    sliderNote: '„Ihr Händezittern wurde protokolliert. Ein vollständiger Bericht wird erstellt."',
    sliderStatus: [
      'Motorischer Kortex wird bewertet...',
      'Serverseitige Schwerkraft nimmt zu.',
      'Ihr Händezittern wird analysiert.',
      'Erbärmlich. Selbst unsere Server bemitleiden Sie.',
    ],
  },
};

export default de;
