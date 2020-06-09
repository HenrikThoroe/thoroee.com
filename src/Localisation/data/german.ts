import { BaseType } from "./english";

const german: BaseType = {
    general: {
        dark: "Dunkles Theme",
        light: "Helles Theme",
        find: "Finden",
        search: "Suchen",
        submit: "Senden",
        currentLanguage: "Deutsch"
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
                    body: ``
                },
                multiUser: {
                    title: "Mehrere Benutzer",
                    body: ``
                },
                menuBar: {
                    title: "Menüleistenicon",
                    body: ``
                },
                safari: {
                    title: "Safari Erweiterung",
                    body: ``
                },
                overview: {
                    title: "Überblick",
                    body: ``
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