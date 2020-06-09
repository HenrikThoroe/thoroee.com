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
        letsgo: "Loslegen"
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
    }
}

export default german