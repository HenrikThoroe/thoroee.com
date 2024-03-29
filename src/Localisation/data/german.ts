import { BaseType } from "./english";

const german: BaseType = {
    general: {
        dark: "Dunkles Theme",
        light: "Helles Theme",
        find: "Finden",
        search: "Suchen",
        submit: "Senden",
        currentLanguage: "Deutsch",
        learnMore: "Erfahre Mehr",
        letsgo: "Loslegen",
        buy: "Kaufen",
        download: "Download"
    },
    sidebar: {
        products: "Produkte",
        legal: "Rechtliches",
        dataProtection: "Datenschutz",
        legalDisclosure: "Impressum"
    },
    links: {
        about: {
            href: "/",
            name: "Über Mich"
        },
        feedback: {
            href: "/feedback",
            name: "Feedback"
        },
        github: {
            href: "https://github.com",
            name: "GitHub"
        },
        castle: {
            href: "/castle",
            name: "Castle"
        },
        terms: {
            href: "/",
            name: "Datenschutzrichtline"
        }
    },
    feedback: {
        title: "Sag Hallo",
        subject: "Betreff",
        email: "Deine EMail",
        message: "Nachricht",
        agree: "Durch das Absenden stimme ich folgendem zu: "
    },
    captcha: {
        title: "Bist du ein Roboter?",
        input: {
            message: "Bitte schreibe das Ergebnis von 4 + 2 in den Kreis.",
            button: "Das ist es!"
        },
        success: {
            message: "Vielen Dank für dein Feedback. Es ist auf dem Weg!",
            button: "Fertig"
        },
        fail: {
            message: 
                `Oh! Es sieht so aus, als wäre dies nicht die richtige Antwort.
                Bitte denke daran, nur in die richtige Form das Ergebnis zu schreiben.`,
            button: "Neuer Versuch"
        }
    },
    productPages: {
        castle: {
            welcome: {
                castle: "Castle",
                passwordManager: "Passwort Manager",
                title: "Castle. Entwickelt für höchste Sicherheit.",
                heroText: 
                    `Großartige Produkte sind durch ihre Einfachheit definiert. Castle folgt exakt einer Regel: 
                    Es sind deine Daten, also sollst du auch volle Kontrolle über sie haben. Die meisten 
                    Passwort Manager lassen sich in zwei Gruppen einteilen. Entweder sie sind online oder offline. 
                    Online Passwort Manager haben den großen Vorteil, dass die gepeicherten Passwörter von überall 
                    für dich zugänglich sind. Offline Passwort Manager hingegen, speichern deine Daten auf deinem Gerät. Du 
                    musst also keiner Firma vertrauen, dass deine Daten wirklich nur von dir gelesen werden können. 
                    Castle verbindet beide Welten! Deine Passwörter werden offline auf deinem Gerät gespeichert, 
                    aber durch den Passwort Server kannst du sie über dein lokales WLAN mit all deinen Geräten teilen. 
                    Dabei verlassen sie niemals den Bereich deines WLANs.`
            },
            sharing: {
                title: "Passwörter zu teilen war nie so privat.",
                passwordServer: "Passwort Server",
                passwordServerBody: 
                    `Der lokale Server erlaubt dir, deine Passwörter mit anderen Geräten zu teilen. 
                    Anders als bei Cloud-Services gelangen sie dabei nicht ins Internet. 
                    Keine Cloud, nur du und deine Passwörter.`,
                webClient: "Web Client",
                webClientBody: 
                    `Der Web Client ist deine Verbindung zu Castle. Es steht zwar Web drauf 
                    und es ist sogar eine Webseite, aber alle sensitiven Daten werden lokal 
                    über dein WLAN ausgetauscht. Deine Passwörter gelangen also nicht ins Internet 
                    und bleiben demnach immer genau da, wo du auch bist.`
            },
            features: {
                title: "Alle Werkzeuge, die du für deine Passwörter brauchst, direkt an deiner Seite.",
                backups: {
                    title: "Backups",
                    body: 
                        `Backups sind essentiell, um deine Passwörter nicht zu verlieren. Aus diesem Grund bietet Castle 
                        ein eigenes Backup Feature. Natürlich kannst du selbst entscheiden, wo deine Passwörter gespeichert 
                        werden sollen. Du kannst außerdem aus verschiedenen Optionen wählen, die bestimmen, wie häufig deine Backups 
                        aktualisiert werden sollen. Täglich, wöchentlich, monatlich, ... Alles ist möglich.`
                },
                multiUser: {
                    title: "Mehrere Benutzer",
                    body: 
                        `Manchmal benutzen mehrere Personen einen Mac. Zum Beispiel der "Familien Mac". In diesem Szenario 
                        könnte es sein, dass du deine persönlichen Passwörter trotzdem nicht gleich mit all den anderen 
                        Benutzern teilen möchtest. Oder du willst einfach deine beruflichen von deinen privaten Logins trennen. 
                        In jedem Fall bietet Castle dir mit der Möglichkeit von mehreren Benutzern ein mächtiges Werkzeug, um 
                        deine Wünsche umzusetzen.`
                },
                menuBar: {
                    title: "Menüleistenicon",
                    body: 
                        `Erreiche einfach und schnell alle deine Passwörter über die Menüleiste. Durch einen Klick steht dir der 
                        Schnellzugriff auf alle deine Logins, Bezahlmethoden und Gerätepasswörter zur Verfügung. Natürlich 
                        kannst du auch die grundlegensten Funktionen von Castle steuern. Zum Beispiel kannst du ein neues 
                        Passwort generieren, Castle beenden oder den Benutzer wechseln.`
                },
                safari: {
                    title: "Safari Erweiterung",
                    body: 
                        `Der Großteil deiner Passwörter ist wahrscheinlich im Internet zuhause. Deswegen ist die Möglichkeit 
                        deine Passwörter direkt aus Safari zu erreichen ein großer Vorteil. Du kannst sogar neue Accounts direkt 
                        aus Safari heraus erstellen.`
                },
                overview: {
                    title: "Überblick",
                    body: 
                        `Den Überblick über den Sicherheitsstand deiner Passwörter zu behalten, kann eine sehr 
                        langweilige Aufgabe sein. Zum Glück übernimmt das Castle für dich. Über das Überblicksfenster 
                        erfährst du schnell Informationen, wie deine durchschnittliche Passwortstärke, aber auch 
                        nützlichere Daten, wie schwache oder doppelt benutzte Passwörter. Castle wird dich außerdem auch darüber 
                        informieren, welche Passwörter zu schwach sind und demnach geändert werden sollten.`
                }
            },
            presentation: {
                title: "Interessiert?",
                text: "Willst du Castle ausprobieren? Du kannst sie im Mac App Store für gerade mal 9,99€ runterladen.",
                buy: "Zum Mac App Store",
                viewDataProtection: "Datenschutzrichtlinie ansehen"
            }
        }
    },
    home: {
        welcome: {
            hello: "Hallo, wie geht's denn so?",
            hero: 
                `Du bist wahrscheinlich hier, um etwas über mich zu erfahren. Wenn du willst, kannst du 
                eine interaktive Reise durch mein bisheriges Leben nehmen. Oder du kannst weiter scrollen und 
                ein paar meiner Projekte und meinen Lebenslauf sehen.`,
            button: "Auf die Reise gehen"
        },
        projects: {
            title: "Meine Arbeit",
            cards: {
                flyde: {
                    title: "flyde",
                    subtitle: "The Compiler and Workflow Tool for C++",
                    status: "My current main project",
                    body: 
                        `SWC 20/21 hat gezeigt wie anstrengend der Compilation Prozess für C++ 
                        sein kann. Da wir in VSCode gearbeitet haben, entschieden wir uns dafür 
                        g++ direkt zu verwenden. Ohne eine gar nicht mal so kleine Automatisierungs 
                        Software in Python, wäre es ein ernstes Problem geworden. flyde geht dieses 
                        Problem in einem modernen Weg an. Nur eine kleine Konfigurationsdatei ist notwendig, 
                        um ein Projekt multi-threaded, schnell und mit Cache zu kompilieren. Lokale Builds 
                        werden genau so unterstützt wie dezidierte Build-Server. Benutzer Authentifizierung inklusive. 
                        Aber das ist noch nicht alles! Workflows und eigene Python Skripte erlauben einfaches und 
                        schnelles Unit Testing, benchmarken oder Deployment. Alles nur wenige Dateien entfernt.`
                },
                swc2: {
                    title: "SWC 20/21",
                    subtitle: "Spiele KI in in C++",
                    status: "Fertig",
                    body: 
                        `Ein Projekt, das mich in so vielen Aspekten voran gebracht hat,
                        dass ich sie nicht mal mehr zählen kann. Es handelt sich um 
                        eine KI für das Spiel "Blokus". Geschrieben in C++, ist es 
                        in jeder Zeile optimiert. Das Ziel des Projekt war es das low level 
                        des Programmierens zu lernen. Und es hat sicherlich nicht in diesem 
                        Aspekt versagt! SIMD, caching, memory management, und multi-threading 
                        sind nur ein paar Keywords in diesem Projekt. Auch gab es unglaublich 
                        viele spannende 'sidequests'. Wie kann man die Berechnung möglicher 
                        Züge beschleunigen? Wie findet man den besten? Wie kann man 
                        Branching in der Alpha-Beta Suche minimieren? Und endlich, wie 
                        kann man ein neuronales Netzwerk ohne Dritt-Libraries 'from scratch' 
                        in C++ implementieren? Dies sind nur einige Fragen die beantwortet 
                        werden mussten. Es war eine aufregende Reise! All dies wäre aber nicht 
                        möglich gewesen ohne die tatkräftige Hilfe von Coronon. Ein Blick auf 
                        sein GitHub lohnt sich.`
                },
                castle: {
                    title: "Castle",
                    subtitle: "macOS Passwort Manager",
                    status: "Maintained",
                    body: 
                        `Castle ist ein nicht Cloud basierter Passwort Manager, der für Einfachheit 
                        und Sicherheit entwickelt wurde. Der große Vorteil von Cloud basierten Passwort 
                        Managern ist die Möglichkeit seine Passwörter von all seinen Geräten zu ereichen.
                        Castle fehlt dieses Feature nicht! Du kannst deine Passwörter einfach über das WLAN teilen.
                        Natürlich stellt Castle auch viele weitere Features zur Verfügung, wie automatische Backups oder mehrere 
                        Benutzer. Probier es aus!`
                },
                edudocs: {
                    title: "EduDocs",
                    subtitle: "Markdown zu PDF mit LaTeX",
                    status: "In aktiver Entwicklung",
                    body: 
                        `EduDocs ist eine Command Line App, die mir hilft, Dokumente für die Schule und vor Allem für Mathe zu schreiben.
                        Die App konvertiert Markdown Dateien zu PDF und, als ein Extra, rendert die Codeblöcke als LaTeX.
                        Da ich LaTeX als schwierig zu lesen und zu schreiben ansehe, unterstützt EduDocs Funktionen und Macros, die ihre 
                        LaTeX Äquivalente ersetzen können. Für mehr Infos, siehe GitHub Link.`
                },
                swc1: {
                    title: "SWC 19/20",
                    subtitle: "Spiel KI",
                    status: "Fertig",
                    body: 
                        `Dieses Projekt ist eine Spiel KI, die gegen andere KIs antritt, um die "Software Challenge" zu gewinnen. 
                        Die Challenge wird von der CAU Kiel ausgetragen und ist deutschlandweit. Mein Client ist in 
                        TypeScript geschrieben und benutzt die meisten gewöhnlichen Algorythmen aus der Spieltheorie.
                        Uns ja, es war eine blöde Idee TypeScript zu verwenden aus Performancesicht (;`
                },
                website: {
                    title: "thorøe.com",
                    subtitle: "Portfolio Webseite",
                    status: "Maintained",
                    body: 
                        `Dieses Projekt siehst du dir gerade an. Die Seite wurde mit React, TypeScript und SCSS erstellt. Sie 
                        ist nicht nur meine Onlinedarstellung, sondern auch eine große Spielwiese für mich. Ich habe 
                        sie hauptsächlich geschrieben, um meine React Skills auszubauen.`
                },
                quickNote: {
                    title: "Quick Note",
                    subtitle: "Notiz App in der Menüleiste",
                    status: "Fertig",
                    body: 
                        `Ein super einfache Notiz App, die in der macOS Menüleiste lebt.
                        Sie ist eines meiner ersten Projekte, das ich entwickelt habe, um Swift zu lernen.
                        Lustigerweise benutze ich sie trotzdem noch ziemlich häufig. Vielleicht willst du sie auch 
                        mal ausprobieren. Die Binary kannst du dir runterladen.`
                },
                quickColor: {
                    title: "Quick Color",
                    subtitle: "Farbpicker in der Menüleiste",
                    status: "Fertig",
                    body: 
                        `Die Schwester von Quick Note. Es ist eine einfacher Farbpicker in der Menüleiste.
                        Die App ist sehr hilfreich, wenn man z.B. in VSCode seine macOS Farbpaletten benutzen möchte.`
                },
                escapeRoom: {
                    title: "Escape Room",
                    subtitle: "Praktikumsprojekt",
                    status: "Nicht mehr verantwortlich",
                    body: 
                        `Leider bin ich mir nicht sicher, ob ich Bilder oder sogar den Code zeigen darf.
                        Weil ich es vorziehen würde nicht verklagt zu werden, mache ich es lieber nicht.
                        Ich habe diese App entwickelt, während ich mein Praktikum bei Knowit hatte. 
                        Sie ist das Gerüst für eine SwiftUI App, die intern verwendet werden soll.`
                },
                more: {
                    title: "Viele Mehr",
                    subtitle: "Alles andere, was nicht fertig oder nicht groß genug ist.",
                    status: "In aktiver Entwicklung",
                    body: 
                        `In den Jahren, in denen ich schon programmiere habe ich einen ganzen Haufen 
                        an Projekten gestartet. Hauptsächlich in Swift und TypeScript, aber auch einige 
                        in Java und C++.`
                }
            }
        },
        cv: {
            title: "Lebenslauf",
            events: {
                birth: {
                    date: "Januar 2003",
                    title: "Geburt",
                    subtitle: "Hallo, Welt!",
                    body: 
                        `Ich glaube das ist relativ selbsterklärend. PS: Ich wurde in Kiel (SH) 
                        geboren und lebe dort immer noch. `
                }, 
                grammarSchool: {
                    date: "2009 - 2013",
                    title: "Grundschule",
                    body: 
                        `Von 2009 bis 2013 habe ich eine kleine Schule direkt in meinem 
                        Nachbarort besucht.`
                }, 
                highSchool: {
                    date: "2013 - 2021",
                    title: "Gymnasium",
                    subtitle: "It's party time!",
                    body: 
                        `Da bin ich immernoch dabei. Ich besuche ein Gymnasium in Altenholz. Mein 
                        Hauptfach ist Physik, was dementsprechend auch Abiturrelevant für mich ist. Mein Abitur 
                        werde ich 2021 machen.`
                },
                naymspace: {
                    date: "Juni 2019",
                    title: "Praktikum bei Naymspace",
                    subtitle: "Meine Inspiration für Webentwicklung.",
                    body: 
                        `Im Juni 2019 hatte ich ein kurzes, aber sehr interesantes Praktikum bei Naymspace.
                        Durch dieses Praktikum habe ich mein Interesse für Webtechnologien wie TypeScript, React
                        und alles, was dazu gehört, entdeckt.`
                },
                knowit: {
                    date: "Februar 2020",
                    title: "Praktikum bei Knowit",
                    subtitle: "Coden in Norwegen",
                    body: 
                        `Im Februar 2020 hatte ich ein zweiwöchiges Praktikum bei Knowit 
                        (Ich hätte mir gewünscht, es wäre länger). Es war mein erster Kontakt mit einem 
                        größeren Unternehmen und dem Entwickleralltag. Die Tatsache, dass es in Norwegen war, 
                        hat es für mich nur noch interessanter gemacht. Ich habe während des Praktikums eine SwiftUI 
                        App erstellt, nur für den Fall, dass sich jemand fragt, was ich dort gemacht habe.`
                },
                abi: {
                    date: "Juni 2021",
                    title: "Abitur",
                    subtitle: "Jetzt geht's los",
                    body: 
                        `Endlich, nach 12 Jahren Leid und Schmerz (nur Spaß) bin ich frei. 
                        Mein Schnitt von 1,1 macht mich da auch nicht besonders traurig.`
                },
                university: {
                    date: "Oktober 2021",
                    title: "Informatik am KIT",
                    subtitle: "Aus Leidenschaft wird ein Abschluss",
                    body: 
                        `Im Oktober 2021 habe ich endlich mein Informatik Studium am 
                        KIT begonnen, eine der führenden Universitäten direkt nach London, Paris und München 
                        in Karlsruhe. Ich bin hochmotiviert mehr über meine favorisierte Wissenschaft zu lernen.`
                },
                future: {
                    date: "Die Zukunft",
                    title: "Hoffentlich viele interessante Dinge.",
                    body: 
                        `Ich hoffe ich kann noch viel mehr aufregende Dinge über mein Leben hier hin schreiben. 
                        Im Herbst 2021 werde ich sehr wahrscheinlich hinzufügen, dass ich mein Studium begonnen habe. 
                        Ich würde mich auch freuen, noch viele Praktika in meinen Lebenslauf schreiben zu können.`
                }
            }
        }
    },
    download: {
        title: "Download Center",
        message: 
            `Dein Download sollte automatisch gestartet haben. Falls nicht klicke bitte "Manuell Runterladen".
            Du kannst jederzeit zu deiner vorherigen Seite zurückkehren.`,
        download: "Manuell runterladen",
        back: "Zurück zur vorherigen Seite",
        labels: {
            edudocs: {
                node: "EduDocs für Node",
                mac: "EduDocs für Mac",
                win: "EduDocs für Windows",
                linux: "EduDocs für Linux"
            }
        }
    },
    dataProtection: {
        title: "Datenschutzerklärung",
        atAGlance: {
            title: "1. Datenschutz auf einen Blick",
            sec1: {
                t: "Allgemeine Hinweise",
                b: 
                    `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                    Daten passiert, wenn Sie meine Website besuchen. Personenbezogene Daten sind alle Daten, 
                    mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
                    Datenschutz entnehmen Sie meiner unter diesem Text aufgeführten Datenschutzerklärung.`
            },
            sec2: {
                t: "Datenerfassung auf meiner Website",
                h1: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
                b1: 
                    `Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.`,
                h2: "Wie erfasse ich Ihre Daten?",
                b2: 
                    `Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich 
                    z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                    beim Besuch der Website durch meine IT-Systeme erfasst. Das sind vor allem technische Daten 
                    (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung 
                    dieser Daten erfolgt automatisch, sobald Sie meine Website betreten.`,
                h3: "Wofür nutze ich Ihre Daten?",
                b3: 
                    `Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.`,
                h4: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
                b4: 
                    `Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                    Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema 
                    Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an mich wenden. 
                    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem 
                    haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
                    personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung 
                    unter „Recht auf Einschränkung der Verarbeitung“.`
            }
        },
        information: {
            title: "2. Allgemeine Hinweise und Pflichtinformationen",
            sec1: {
                t: "Datenschutz",
                b1: 
                    `Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandel Ihre 
                    personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                    sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene 
                    personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich 
                    identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten 
                    ich erhebe und wofür ich sie nutze. Sie erläutert auch, wie und zu welchem Zweck das geschieht. 
                    Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per 
                    E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff 
                    urch Dritte ist nicht möglich.`
            },
            sec2: {
                t: "Hinweis zur verantwortlichen Stelle",
                b1: 
                    `Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:`,
                l1: {
                    i1: "Henrik Thorøe",
                    i2: "Strandstraße 10",
                    i3: "24229 Schwedeneck",
                    i4: "Deutschland",
                    i5: "info (-at-) thoroee.com (Anmerkung: ersetze ' (-at-) ' mit @; keine Leerzeichen)"
                },
                b2: 
                    `Die verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                    anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, 
                    E-Mail-Adressen o. Ä.) entscheidet.`
            },
            sec3: {
                t: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
                b1: 
                    `Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                    Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine 
                    formlose Mitteilung per E-Mail an mich. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                    Datenverarbeitung bleibt vom Widerruf unberührt.`
            },
            sec4: {
                t: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
                b1: 
                    `Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie 
                    jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die 
                    Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf 
                    diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung 
                    beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werde ich Ihre 
                    betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, ich kann zwingende 
                    schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten 
                    überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von 
                    Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten 
                    verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen 
                    die Verarbeitung betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; 
                    dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn 
                    Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der 
                    Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).`
            },
            sec5: {
                t: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
                b1: 
                    `Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
                    ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht 
                    besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.`
            },
            sec6: {
                t: "Recht auf Datenübertragbarkeit",
                b1: 
                    `Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines 
                    Vertrags automatisiert verarbeite, an sich oder an einen Dritten in einem gängigen, 
                    maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der 
                    Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.`
            },
            sec7: {
                t: "SSL- bzw. TLS-Verschlüsselung",
                b1: 
                    `Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie 
                    zum Beispiel Bestellungen oder Anfragen, die Sie an mich als Seitenbetreiber senden, 
                    eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                    dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem 
                    Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert 
                    ist, können die Daten, die Sie an mich übermitteln, nicht von Dritten mitgelesen werden.`
            },
            sec8: {
                t: "Auskunft, Sperrung, Löschung und Berichtigung",
                b1: 
                    `Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser 
                    Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich 
                    jederzeit unter der im Impressum angegebenen Adresse an mich wenden.`
            },
            sec9: {
                t: "Recht auf Einschränkung der Verarbeitung",
                b1: 
                    `Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                    zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse 
                    an mich wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:`,
                l1: {
                    i1: 
                        `Wenn Sie die Richtigkeit Ihrer bei mir gespeicherten personenbezogenen Daten bestreiten, 
                        benötige ich in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben 
                        Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.`,
                    i2: 
                        `Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können 
                        Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.`,
                    i3: 
                        `Wenn ich Ihre personenbezogenen Daten nicht mehr benötige, Sie sie jedoch zur Ausübung, 
                        Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, 
                        statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.`,
                    i4: 
                        `Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung 
                        wischen Ihren und meinen Interessen vorgenommen werden. Solange noch nicht feststeht, 
                        wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung 
                        Ihrer personenbezogenen Daten zu verlangen.`
                },
                b2: 
                    `Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – 
                    von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung 
                    oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder 
                    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen 
                    Union oder eines Mitgliedstaats verarbeitet werden.`
            }
        },
        dataCollection: {
            title: "3. Datenerfassung auf meiner Website",
            sec1: {
                t: "Cookies",
                b1: 
                    `Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
                    Schaden an und enthalten keine Viren. Cookies dienen dazu, mein Angebot nutzerfreundlicher, 
                    effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner 
                    abgelegt werden und die Ihr Browser speichert. Einige der von mir verwendeten Cookies sind 
                    so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere 
                    Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen 
                    es mir, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, 
                    dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die 
                    Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen 
                    der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die 
                    Funktionalität dieser Website eingeschränkt sein. Cookies, die zur Durchführung des elektronischen 
                    Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen 
                    (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                    gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies 
                    zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies 
                    (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser 
                    Datenschutzerklärung gesondert behandelt.`
            },
            sec2: {
                t: "Server-Log-Dateien",
                b1: 
                    `Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                    Server-Log-Dateien, die Ihr Browser automatisch an mich übermittelt. Dies sind:`,
                l1: {
                    i1: "Browsertyp und Browserversion",
                    i2: "verwendetes Betriebssystem",
                    i3: "Referrer URL",
                    i4: "Hostname des zugreifenden Rechners",
                    i5: "Uhrzeit der Serveranfrage",
                    i6: "IP-Adresse"
                },
                b2: 
                    `Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der 
                    Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                    Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.`
            },
            sec3: {
                t: "Kontaktformular",
                b1: 
                    `Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den 
                    Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung 
                    weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich 
                    auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung 
                    jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an mich. Die Rechtmäßigkeit 
                    der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von 
                    Ihnen im Kontaktformular eingegebenen Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, 
                    Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt 
                    (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – 
                    insbesondere Aufbewahrungsfristen – bleiben unberührt.`
            },
            sec4: {
                t: "Anfrage per E-Mail, Telefon oder Telefax",
                b1:
                    `Wenn Sie mich per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage 
                    inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum 
                    Zwecke der Bearbeitung Ihres Anliegens bei mir gespeichert und verarbeitet. Diese 
                    Daten gebe ich nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten 
                    erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der 
                    Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung 
                    (Art. 6 Abs. 1 lit. f DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 
                    1 lit. f DSGVO), da ich ein berechtigtes Interesse an der effektiven Bearbeitung der 
                    an mich gerichteten Anfragen habe. Die von Ihnen an mich per Kontaktanfragen übersandten 
                    Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur 
                    Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
                    abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere 
                    gesetzliche Aufbewahrungsfristen – bleiben unberührt.`
            }
        },
        analysis: {
            title: "4. Analyse-Tools und Werbung",
            sec1: {
                t: "1&1 Web Analytics",
                b1:
                    `Diese Website nutzt die Analysedienste von 1&1-Webanalytics. Anbieter ist die 1&1 Internet SE, 
                    Elgendorfer Straße 57, D – 56410 Montabaur. Im Rahmen der Analysen mit 1&1 können u. a. 
                    Besucherzahlen und –verhalten (z. B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs, 
                    Absprungraten), Besucherquellen (d. h., von welcher Seite der Besucher kommt), Besucherstandorte 
                    sowie technische Daten (Browser- und Betriebssystemversionen) analysiert werden. Zu diesem 
                    Zweck speichert 1&1 insbesondere folgende Daten:`,
                l1: {
                    i1: "Referrer (zuvor besuchte Webseite)",
                    i2: "angeforderte Webseite oder Datei",
                    i3: "Browsertyp und Browserversion",
                    i4: "verwendetes Betriebssystem",
                    i5: "verwendeter Gerätetyp",
                    i6: "Uhrzeit des Zugriffs",
                    i7: "IP-Adresse in anonymisierter Form (wird nur zur Feststellung des Orts des Zugriffs verwendet)"
                },
                b2: 
                    `Die Datenerfassung erfolgt laut 1&1 vollständig anonymisiert, sodass sie nicht zu 
                    einzelnen Personen zurückverfolgt werden kann. Cookies werden von 1&1- Webanalytics 
                    nicht gespeichert. Die Speicherung und Analyse der Daten erfolgt auf Grundlage von 
                    Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der 
                    statistischen Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine 
                    Werbung zu optimieren. Weitere Informationen zur Datenerfassung und Verarbeitung durch 
                    1&1-Webanalytics entnehmen Sie folgenden Links:`,
                l2: {
                    i1: "IP address in anonymous form (used only to determine the location of access)",
                    i2: "https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/",
                    i3: "https://hosting.1und1.de/terms-gtc/terms-privacy/"
                }
            }
        },
        settings: {
            title: "Einstellungen",
            cookies: {
                enable: "Cookies erlauben",
                disable: "Cookies löschen"
            }
        },
        remarks: {
            title: "Anmerkungen",
            k1: "Quelle",
            v1: "e-recht24.de"
        }
    },
    legalDisclosure: {
        title: "Impressum",
        h1: "Angaben gemäß §5 TMG",
        l1: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Deutschland"
        },
        h2: "Verantwortlicher für den Inhalt",
        l2: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Deutschland"
        },
        h3: "Kontakt",
        l3: {
            i1: {
                k: "E-Mail",
                v: "info (-at-) thoroee.com (Anmerkung: ersetze ' (-at-) ' mit @; keine Leerzeichen)"
            },
            i2: {
                k: "Internet",
                v: "thoroee.com"
            }
        },
        h4: "Haftung für Inhalte",
        b4: 
            `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch 
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur 
            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben 
            hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis 
            einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
            werden wir diese Inhalte umgehend entfernen.`,
        h5: "Haftung für Links",
        b5: 
            `Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.`,
        h6: "Urheberrecht",
        b6: 
            `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
            der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. 
            Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
            gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf 
            eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.`,
        h7: "Anmerkungen",
        l7: {
            i1: {
                k: "Quelle",
                v: "e-recht24.de"
            },
            i2: {
                k: "Rechtliche Hinweise",
                v: "Sämtliche rechtliche Hinweise auf dieser Seite beziehen ausschließlich auf das deutsche Recht."
            }
        }
    },
    castleDataProtection: {
        title: "Datenschutzerklärung",
        h1: "Anbieter von Castle",
        l1: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Deutschland (Schleswig-Holstein)"
        },
        h2: "Kontakt",
        l2: {
            i1: {
                k: "E-Mail",
                v: "info (-at-) thoroee.com (Anmerkung: ersetze ' (-at-) ' mit @; keine Leerzeichen)"
            },
            i2: {
                k: "Internet",
                v: "thoroee.com"
            }
        },
        h3: "Welche Daten werden von Castle verarbeitet?",
        b3: 
            `Sämtliche Daten, auf die Castle Zugriff hat, werden nur lokal auf dem Computer, auf dem Castle läuft, 
            oder auf vom Benuzter geschwünschten externen Speicherorten verarbeitet und verschlüsselt gespeichert. 
            Castle hat Zugriff auf alle Informationen, die vom Benutzer eingegeben werden. Dazu zählen Name, 
            Nachname, Passwörter, Kreditkarteninformationen, Dateien, Bankkontoinformationen und E-Mail Adressen. 
            Die Weitergabe dieser Informationen an dritte ist nicht vorgesehen. Die Eingabe dieser Daten geschieht 
            nur unter Einwilligung des Benutzers und unter keinen Umständen unbemerkt.`,
        h4: "Wie können diese Daten gelöscht werden?",
        b4: 
            `Um alle Daten zu löschen, muss der gewünschte Account unter Einstellungen gelöscht werden. 
            Um sämtliche Datenreste zu entfernen, müssen auch noch sämtliche Backups unter Enstellungen -> 
            Backups gelöscht werden. Ich, als Anbieter von Castle, habe keinen Zugriff auf ihre persönlichen 
            Daten und kann diese dementsprechend auch nicht löschen.`,
        h5: "Wozu werden diese Daten erhoben?",
        b5: 
            `Da Castle ein Passwortmanager ist, ist es unumgänglich, dass Daten wie Passwörter erfragt werden. 
            Personenbezogene Daten, wie Name oder Vorname, sind erforderlich, um den Service von mehreren Konten 
            in einer App anbieten zu können. Alle erhobenen Daten dienen ihrer Benutzererfahrung und werden nicht 
            komerziell verwendet. Auch ist es unmöglich für den Anbieter der App ihre Daten einzusehen oder zu 
            verarbeiten, da sie nur auf ihrem Computer oder von ihnen ausgewählten Backup Speicherorten verfügbar sind.`,
        h6: "Was passiert mit diesen Daten?",
        b6: 
            `Sämtliche Daten, die Castle zur Verfügung stehen, werden lokal oder auf vom Benuzter ausgewählten 
            Speicherorten gespeichert. Die Verschlüsselung geschieht mit zufälligen oder vom Benutzer angegeben 
            Passwörtern mithilfe des AES256 Algorhythmus. Eine Weitergabe dieser Daten an Dritte ist nicht vorgesehen
            und wiederspricht Castles Grundsätzen der Datensicherheit. Die Passwörter, die zur Verschlüsselung 
            notwendig sind, werden in dem von Apple Inc. bereitgestellten 'Schlüsselbund' gespeichert und dort 
            mihilfe des Administratorpassworts verschlüsselt. Die Verantwortliche Person hinter Castle übernimmt 
            keine Verantwortung für etwaigen persönlichen oder komerziellen Schaden, falls Apples 'Schlüsselbund' 
            Sicherheitslücken aufweisen sollte. Bitte haben sie Verständnis, dass der 'Schlüsselbund' und Castle 
            nicht von der selben Person entwickelt wurden und der Anbieter von Castle somit keinen Einfluss auf 
            den 'Schlüsselbund' hat.`,
        h7: "Wer hat Zugriff auf meine Daten?",
        b7: 
            `Zugriff auf ihre Daten haben ausschließlich sie und Personen, die Zugriff auf ihren Account bei Castle haben. 
            Dazu zählen lediglich Personen, die ihr Passwort kennen. Dies schließt sämtliche Personen aus, denen sie 
            ihr Passwort nicht weitergegeben haben und die nicht auf andersartige Weise an ihr Passwort gekommen sind. 
            Falls sie ihr Passwort an Fremde und / oder Kriminelle weitergeben sollten oder ihr Passwort von Dritten 
            geklaut oder erraten werden sollte, übernimmt der Anbieter von Castle keine Verantwortung für entstandenen 
            persönlichen oder finanziellen Schaden, da kein technisches Versagen vorlag. Sollten Daten durch technisches 
            oder menschliches Versagen gestohlen werden, übernimmt der Anbieter von Castle keine juristische Verantwortung 
            für entstandenen persönlichen oder finanziellen Schaden.`,
        h8: "Wie sicher sind meine Daten?",
        b8: 
            `Es ist die oberste Priorität von Castle ihre Daten zu schützen. Um die größtmögliche Sicherheit ihrer 
            Daten zu erreichen, benutzt Castle Techniken wie AES256. Allerdings sind keine elektronischen 
            Datenspeicherungsprozesse oder Datenverarbeitungsprozesse zu 100% sicher. Auch hat Castle keinen 
            Einfluss auf die Sicherheit ihrer Passwörter in Apples 'Schlüsselbund', der von Apple als sicher 
            Speicherort für Benutzerdaten angegeben wird. Auch kann Castle nicht garantieren, dass sie ein sicheres 
            Passwort zur Verschlüsselung angeben und dieses nicht an Kriminelle weitergeben. Bitte haben sie Verständnis, 
            dass der Anbieter von Castle aus den angeführten Gründen keine juristische Verantwortung für die Sicherheit 
            ihrer persönlichen Daten übernimmt.`,
    },
    castleWebClientFaq: {
        title: "Web Client FAQ",
        q1: {
            q: "Was ist der Web-Client?",
            a: 
                `Der Web-Client ermöglicht es ihnen, Castle von jedem Gerät aus zu benutzen, das in ihrem 
                lokelen Netzwerk (WLAN) ist. Vorausgesetz, dass sie ihre Castle Login Daten (Benutzername und Passwort) 
                kennen und physischen Zugriff auf den Mac haben, auf welchem Castle läuft. Der Mac muss ausserdem mit 
                dem gleichen Netzwerk (WLAN) wie das Gerät, mit dem sie auf Castle zugreifen wollen, verbunden sein.`
        },
        q2: {
            q: "Warum ist der Web-Client besonders?",
            a: 
                `Anders als die meisten Passwort Manager, speichert Castle ihre Daten nur auf ihrem Gerät. 
                Das macht sie zwar schwer angreifbar, hat aber auch einen großen Nachteil: Sie können nicht 
                von jedem Gerät über das Internet auf ihre Daten zugreifen. Dieses Problem versucht der 
                Web-Client so gut es geht zu lösen. Er ist eine Webseite, die mithilfe von JavaScript die 
                Daten zwischen der Seite und Castle austauscht. Dadurch bleiben ihre Daten immer in ihrem 
                Netzwerk (sprich bei ihnen Zuhause), aber sie können trotzdem mit jedem Gerät auf ihre Daten 
                zugreifen. Der Austausch ist natürlich auch verschlüsselt. Und zwar mit ihrem Masterpasswort 
                und einem PIN Code, der direkt von Castle angezeigt wird. Deshalb muss ein Angreifer, um ihre 
                Daten stehlen zu können, Castle sehen können. Also direkt vor ihrem Mac sizten. Nicht sehr 
                wahrscheinlich, oder?`
        },
        q3: {
            q: "How To: Installation",
            a: {
                b: 
                    `Sie müssen den Web Client nicht wirklich installieren. Es handelt sich um eine normale Webseite, 
                    aber natürlich gibt es ein paar Tricks, um sich das Leben einfacher zu machen:`,
                l1: {
                    t: "iOS",
                    i1: "Öffnen sie die Webseite ( thoroee.com/castle/ )",
                    i2: "Berühren sie die 'Teilen' Schaltfläche (Unten Mitte)",
                    i3: `Berühren sie 'Zum Home Screen hinzufügen'`,
                    i4: "Sie können die Seite jetzt wie eine echte App verwenden!"
                },
                l2: {
                    t: "Die meisten Desktop Betriebssysteme (Windows 10, Linux, macOS, ...)",
                    i1: "Öffnen sie die Webseite ( thoroee.com/castle/ )",
                    i2: "Fügen sie die Seite zu ihren Favoriten hinzu."
                }
            }
        },
        q4: {
            q: "How To: Mit Castle verbinden",
            a: {
                b1: `Um sich mit Castle zu verbinden und ihre Passwörter ansehen zu können, müssen sie ein paar Schritte erledigen:`,
                l1: {
                    i1: "Öffnen sie die Webseite ( thoroee.com/castle/ )",
                    i2: `Geben sie unter 'Hostname' den Namen ihres Macs an (Siehe Castle 'Lokaler Server' tab)`,
                    i3: "Geben sie unter 'Username' ihren Castle Benutzernamen ein",
                    i4: "Geben sie unter 'Password' ihr Castle Masterpasswort ein",
                    i5: 
                        `Wenn sie sich mit ihrem Browser zum ersten Mal mit Castle verbinden, müssen sie das SSL Zertifikat 
                        installieren.`,
                    i6: "Klicken sie die 'Connect' Schaltfläche"
                },
                b2: 
                    `Wenn sie die passenden Werte eingegeben haben, werden sie eine (mobile Geräte) oder mehrere 
                    Boxen sehen, in die sie den Pin eingeben müssen, der von Castle angezeigt wird. Fertig!`
            }
        },
        q5: {
            q: "Sicherheit",
            a: 
                `Die Sicherheit ihrer Daten wird durch interne Algorhythmen sichergestellt. Ihre Passwörter 
                werden verschlüsselt zur Web-Anwendung geschickt. Dafür werden ihr Masterpasswort und der 
                PIN Code verwendet. Deshalb müsste ein Angreifer nicht nur ihr Masterpasswort kennen, sondern 
                auch den direkt von Castle angezeigten PIN. Dafür wiederum müsste er direkt vor ihrem Mac sitzen.`
        },
        q6: {
            q: "Was ist ein SSL Zertifikat?",
            a: 
                `Castle verwendet aufgrund von Browsereinschränkungen für die Verbindung zwischen der Host-Anwendung 
                (Castle) und dem Web-Client HTTPS. Obwohl die sichere Verbindung in diesem Fall kein HTTPS voraussetzt, 
                verhindern moderne Browser die Verbindung mittels HTTP. Dies ist in den meisten Fällen eine sehr gute 
                Entscheidung, in diesem speziellen aber eigentlich nicht notwendig. Um dieses Problem zu umgehen, setzt 
                auch Castle auf HTTPS. Dafür benutzt es allerdings ein selbst signiertes Zertifikat. Browser verhindern 
                auch in diesem Fall den Verbindungsaufbau, da selbst signierte Zertifikate potenziell unsicher sind. 
                Aus diesem Grund müssen sie eine Seite in ihrem Browser öffen, die von Castle bereit gestellt wird und 
                selbst signiert ist. Wenn sie bei der sich öffnenden Warnung, dass dies unsicher sei, auf trotzdem öffnen 
                klicken, sagen sie dem Browser: "Dieses Zertifikat ist OK. Du kannst es akzeptieren".`
        },
        q7: {
            q: "Wenn ich auf 'Connect' klicke, kriege ich eine Fehlermeldung.",
            a: {
                b: 
                    `Dieses Problem kann mehrere Ursachen haben. Versichern sie sich zuerst, dass sie das SSL Zertifikat 
                    installiert haben. Ansonsten prüfen sie bitte ob sie folgende Werte richtig eingegeben haben:`,
                l1: {
                    i1: "Der Gerätename unter 'Hostname'",
                    i2: "Den Benutzernamen unter 'Username'",
                    i3: "Das Passwort unter 'Password'"
                }
            }
        }
    },
    cookieMessage: {
        title: "Diese Seite verwendet Cookies",
        message: 
            `Bitte erlaube die Benutzung von diesen Süßigkeiten. Sie erlauben der Seite, 
            sich an deine Sprache und dein Theme zu erinnern. Sie tracken dich nicht ;)`,
        allow: "Lecker!",
        deny: "Nein, ich bin auf Diät."
    }
}

export default german