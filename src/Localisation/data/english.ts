export type BaseType = typeof english

const english = {
    general: {
        dark: "Dark Theme",
        light: "Light Theme",
        find: "Find",
        search: "Search",
        submit: "Submit",
        currentLanguage: "English",
        letsgo: "Let's Go",
        learnMore: "Learn More"
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
                    body: 
                        `Backups are essential to keep your passwords save. Castle provides a dedicated backup feature, 
                        which allows you to have multiple copies of your password at different locations. Of course 
                        you can choose the place where you want to save your data freely. You can choose from multiple options 
                        regarding of how frequently you want your backups to be created. Daily, weekly, monthly, ... 
                        Everything is possible.`
                },
                multiUser: {
                    title: "Multiple Users",
                    body: 
                        `Sometimes multiple persons are using a single device. For example the "family Mac". In those szenarios 
                        you would maybe prefer not to share your passwords. Or you just want to keep your work and private 
                        passwords separated. Anyway Castle's multi user functionality is a powerful tool to manage your passwords.`
                },
                menuBar: {
                    title: "Menu Bar Icon",
                    body: 
                        `Quickly acces your passwords and user names using the menu bar icon. 
                        When you expand it you will be able to access all of your logins, payment methods and device passwords. 
                        Also basic actions like creating a new random password, quitting Castle or changing the current 
                        user are available within the menu bar.`
                },
                safari: {
                    title: "Safari Extension",
                    body: 
                        `Probably most of your logins are related to a website. That is why being able to access your 
                        passwords straight from Safari is a great benefit to speed up your daily routine. 
                        You can even create new logins using only the Safari extension. `
                },
                overview: {
                    title: "Overview",
                    body: 
                        `To keep track of the security state of all your logins can be quite an anoying task. 
                        Fortunately Castle does this job for you. The overview panel provides information like 
                        your avarage password strength but also more practical information like weak or duplicated passwords. 
                        If Castle encounters a weak password the related login will be marked so you quickly see 
                        which passwords should be replaced with stronger ones.`
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