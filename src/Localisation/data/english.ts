export type BaseType = typeof english

const english = {
    general: {
        dark: "Dark Theme",
        light: "Light Theme",
        find: "Find",
        search: "Search",
        submit: "Submit",
        currentLanguage: "English"
    },
    links: {
        about: {
            href: "/",
            name: "About Me"
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
            name: "Terms and Conditions"
        }
    },
    feedback: {
        title: "Say Hello",
        subject: "Subject",
        email: "Your Email",
        message: "Message",
        agree: "By submitting I agree to the "
    },
    productPages: {
        castle: {
            welcome: {
                castle: "Castle",
                passwordManager: "Password Manager",
                title: "Castle. Designed for highest security.",
                heroText: 
                    `Great products are made out from simplicity. Castle follows exactly one rule: 
                    It’s your data, so you have full controll about it. Most password managers can be 
                    put into one group. They are offline or online ones. Onlines password managers have 
                    the great benefit that users can access their passwords from everywhere, while 
                    offline password managers are more private because you do not have to trust a 
                    company that they do not read your passwords. Castle combines both worlds! Your 
                    passwords are always offline on your device, but you can still share them very
                    easy over your local network (Wi-Fi).`
            },
            sharing: {
                title: "Sharing passwords has never been so private.",
                passwordServer: "Password Server",
                passwordServerBody: 
                    `The local server allows you to share 
                    your data across devices. But unlike other services 
                    your passwords stay right where you are. No cloud, 
                    no third party, only you and your passwords.`,
                webClient: "Web Client",
                webClientBody: 
                    `The web client is your connection to Castle. 
                    It might be a website, but all sensitive data is 
                    securely received from Castle over your local Wi-Fi. 
                    You can use all your devices with internet connection 
                    to access your Castle passwords. The passwords will not 
                    leave the place you are.`
            },
            features: {
                title: "Every tool to control your data right at your side.",
                backups: {
                    title: "Backups",
                    body: ``
                },
                multiUser: {
                    title: "Multiple Users",
                    body: ``
                },
                menuBar: {
                    title: "Menu Bar Icon",
                    body: ``
                },
                safari: {
                    title: "Safari Extension",
                    body: ``
                },
                overview: {
                    title: "Overview",
                    body: ``
                }
            },
            presentation: {
                title: "Interested?",
                text: "Do you want to test out Castle? Buy it on the Mac App Store for only $9.99.",
                buy: "Buy on Mac App Store",
                viewDataProtection: "View Data Protection Declaration"
            }
        }
    }
}

export default english