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
                    status: "In aktiver Entwicklung",
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
                        mal ausprobieren. Den Code und die Binary kannst dir runterladen.`
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
    }
}

export default german