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
        learnMore: "Learn More",
        buy: "Buy",
        download: "Download"
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
    },
    home: {
        welcome: {
            hello: "Hello, There!",
            hero: 
                `You are probably here to learn something about me. If you want to, 
                you can take an interactive journey an learn about my previous life. Or 
                you can scroll down and have a look at my CV and projects.`,
            button: "Take the Journey"
        },
        projects: {
            title: "My Work",
            cards: {
                castle: {
                    title: "Castle",
                    subtitle: "macOS Password Manager",
                    status: "Maintained",
                    body: 
                        `Castle is a not cloud-based password manager for macOS. 
                        It's purpose is simplicity and security. The great benefit 
                        of cloud-based password managers is their ability to share 
                        passwords across devices. Castle does not lack this feature! 
                        You can share your passwords simple over your local Wi-Fi. 
                        Of course Castle provides many more features like automatic 
                        backups and multi-user support. Check it out!`
                },
                swc1: {
                    title: "SWC 19/20",
                    subtitle: "Game AI",
                    status: "Finished",
                    body: 
                        `This project is a game AI which competes with other AIs to win the 
                        "Software Challenge" driven by CAU Kiel. My client is written in 
                        TypeScript and is using most of the common algorythms of game theory. 
                        You are right, using TypeScript was a bad idea performancewise (;`
                },
                website: {
                    title: "thorøe.com",
                    subtitle: "Portfolio Website",
                    status: "In Active Development",
                    body: 
                        `You are currently viewing it. This site is written using React, 
                        SCSS and TypeScript. The site is not only my online representation 
                        but also a big playground. I mainly developed it to practice my React skills.`
                },
                quickNote: {
                    title: "Quick Note",
                    subtitle: "Menu Bar Note Taking App",
                    status: "Finished",
                    body: 
                        `A dead simple note-taking app which lives in the macOS menu bar. 
                        It's one of my early projects I wrote to learn Swift. But funnily 
                        enough I'm still using it very often. Maybe you want to download 
                        the app plus source code.`
                },
                quickColor: {
                    title: "Quick Color",
                    subtitle: "Menu Bar Color Picker",
                    status: "Finished",
                    body: 
                        `It the sister of 'Quick Note'. Just another simple menu bar color picker. 
                        Very usefull when you want to use your macOS color pallete in VSCode.`
                },
                escapeRoom: {
                    title: "Escape Room",
                    subtitle: "Internship Project",
                    status: "Not Responsible Anymore",
                    body: 
                        `Unfourtnatly I'm not sure if I am allowed to show pictures or even the 
                        code of 'Escape Room'. Because I don't want to be sued I'm not 
                        doing it. The app was my task when I had my internship at Knowit. 
                        It's the barebone of a SwiftUI application for internal use at Knowit.`
                },
                more: {
                    title: "Many More",
                    subtitle: "Everything Else not Worth Mentioning or Unfinished",
                    status: "In Active Development",
                    body: 
                        `There are so many more apps I wrote to learn different languages. 
                        Mainly Swift and TypeScript but also some Java and C++ stuff.`
                }
            }
        },
        cv: {
            title: "Curriculum Vitae",
            events: {
                birth: {
                    date: "Janurary 2003",
                    title: "Birth",
                    subtitle: "Hello, World!",
                    body: 
                        `Well, I guess it is self explaining. PS: I was born in Kiel (northern Germany) 
                        and I am still living there.`
                }, 
                grammarSchool: {
                    date: "2009 - 2013",
                    title: "Grammar School",
                    body: 
                        `From 2009 until 2013 I attended a small school near 
                        the village I have been living.`
                }, 
                highSchool: {
                    date: "2013 - 2021",
                    title: "High School",
                    subtitle: "It's party time!",
                    body: 
                        `This is what I am stil doing. I am attending the Highschool in Altenholz.
                        My main subject is physic, which 
                        is also the subject my exams will be about in spring 2021.`
                },
                naymspace: {
                    date: "June 2019",
                    title: "Internship at Naymspace",
                    subtitle: "My inspiration for web development.",
                    body: 
                        `In June 2019 I had a short but very nice internship at naymspace. 
                        I enjoied it and discovered my interest in web development and design. 
                        My continous interest in React, TypeScript and all the other web-stuff 
                        started with this internship.`
                },
                knowit: {
                    date: "February 2020",
                    title: "Internship at Knowit",
                    subtitle: "Coding in Norway",
                    body: 
                        `In February 2020 I had a two week internship at Knowit (wish it would have been more weeks). 
                        It was my first contact with a large company and the daily work of developers. 
                        The fact that it was in Norway (remember: I am from Germany) just made it more 
                        exiting for me. I setup an internal SwiftUI applications during my two weeks 
                        at Knowit just in case someone wonders what I was doing there.`
                },
                future: {
                    date: "The Future",
                    title: "Hopefully a lot of interesting stuff.",
                    body: 
                        `I hope I can write much more interesting events of my life down here. In autumn 
                        2021 I will probably add that I started to study and maybe some more exiting internships.`
                }
            }
        }
    }
}

export default english