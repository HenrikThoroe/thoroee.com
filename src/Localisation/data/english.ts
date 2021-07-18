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
    sidebar: {
        products: "Products",
        legal: "Legal",
        dataProtection: "Data Protection",
        legalDisclosure: "Legal Disclosure"
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
    captcha: {
        title: "Are you a robot?",
        input: {
            message: "Please enter the result of 4 + 2 into the circle.",
            button: "That's It"
        },
        success: {
            message: "Thank you for your feedback. It's on the way!",
            button: "Done"
        },
        fail: {
            message: 
                `Oh! It seems that is not the correct answer. 
                Please remember to not enter anything into the wrong shapes.`,
            button: "Retry"
        }
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
                flyde: {
                    title: "flyde",
                    subtitle: "The Compiler and Workflow Tool for C++ Written in Dart",
                    status: "My current main project",
                    body: 
                        `SWC 20/21 showed me how embarrassing the compilation of C++ projects can be. 
                        Working in VSCode, we decided to use g++ directly. Without a not-so-small Python 
                        CLI for compilation, it would have been a real pain. flyde is going for this 
                        problem in a modern and new way. Only a small config file is required to get 
                        a multi-threaded, cached, and fast compilation. But the best thing is that 
                        flyde supports local builds as well as a dedicated build server. User authentication 
                        is inclusive. But that's not all! You can define workflows and even use Python 
                        for automation. This way unit tests, benchmarks, and even deployment are 
                        nothing but one file away.`
                },
                swc2: {
                    title: "SWC 20/21",
                    subtitle: "Game AI written in C++",
                    status: "Finished",
                    body: 
                        `A project which brought me forward in so many aspects, 
                        I cannot even count! It's a game-playing AI for a game 
                        called "Blokus". Written in C++, it's optimized at every 
                        line of code. The goal of this project was to learn about 
                        the low level of programming. And it did not fail in 
                        this aspect. SIMD, caching, memory management, and multi-threading 
                        are just a few keywords involved in this app. Furthermore, it 
                        has so many exciting 'sidequests'. How to optimize the 
                        calculation of possible moves? How to find the best one? 
                        How to minimize branching in Alpha-Beta search? And finally, 
                        how to implement a neural network from scratch without any 
                        libraries in plain C++ using SIMD? Just a few questions which 
                        had to be answered. It was an exciting journey! All this 
                        would have not been possible without the very much appreciated 
                        help of Coronon. Check out his GitHub.`
                },
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
                edudocs: {
                    title: "EduDocs",
                    subtitle: "Markdown to PDF with LaTeX",
                    status: "Has Been Fun",
                    body: 
                        `EduDocs is a command-line application that helps me writing documents 
                        for school and especially for math. It converts Markdown files to PDF 
                        and, as an extra, renders code sections as LaTeX. Because plain LaTeX 
                        is difficult to read and write in my opinion, it is possible to use 
                        functions and macros instead of their LaTeX equivalent. For more Infos 
                        see the GitHub page.`
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
                    status: "Maintained",
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
                        the app.`
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
    },
    download: {
        title: "Download Center",
        message: 
            `Your download should have started automatically. If not, please click "Download Manually". 
            You can continue to your previous page whenever you want.`,
        download: "Download Manually",
        back: "Back to Last Page",
        labels: {
            edudocs: {
                node: "EduDocs for Node",
                mac: "EduDocs for Mac",
                win: "EduDocs for Windows",
                linux: "EduDocs for Linux"
            }
        }
    },
    dataProtection: {
        title: "Data Protection Declaration",
        atAGlance: {
            title: "1. Privacy at a glance",
            sec1: {
                t: "General Information",
                b: 
                    `The following notes provide a simple overview of what happens to your personal 
                    information when you visit my website. Personal data is any data that personally 
                    identifies you. Detailed information on the subject of data protection can be 
                    found in my privacy policy listed under this text.`
            },
            sec2: {
                t: "Data collection on my website",
                h1: "Who is responsible for the data collection on this website?",
                b1: 
                    `The data processing on this website is carried out by the website operator. Its contact 
                    details can be found in the imprint of this website.`,
                h2: "How do I collect your data?",
                b2: 
                    `Your data will be collected on the one hand, that you tell me this. This may be e.g. 
                    to trade data that you enter in a contact form. Other data will be collected 
                    automatically when visiting the website through my IT systems. These are above 
                    all technical data (for example Internet browser, operating system or time of 
                    the page call). The collection of this information occurs automatically 
                    as soon as you enter my website.`,
                h3: "What do I use your data for?",
                b3: 
                    `Part of the data is collected to ensure a flawless provision of the website. 
                    Other data can be used to analyze your user behavior.`,
                h4: "What rights do you have regarding your data?",
                b4: 
                    `At any time you have the right to obtain free information about the origin, 
                    recipient and purpose of your stored personal data. You also have a right to 
                    request the correction, blocking or deletion of this data. For this purpose 
                    as well as for further questions about data protection you can contact me at 
                    any time at the address given in the imprint. Furthermore, you have a right of 
                    appeal to the competent supervisory authority. In addition, you have the right to 
                    request the restriction of the processing of your personal data in certain circumstances. 
                    Details can be found in the privacy policy under "Right to restriction of processing".`
            }
        },
        information: {
            title: "2. General information and mandatory information",
            sec1: {
                t: "Data protection",
                b1: 
                    `The operator of these pages takes the protection of your personal data very seriously. 
                    I treat your personal data confidentially and in accordance with the statutory data 
                    protection regulations and this privacy policy. If you use this website, various 
                    personal data will be collected. Personal information is information that personally 
                    identifies you. This privacy policy explains what information I collect and what I use 
                    it for. It also explains how and for what purpose this happens. I point out that data 
                    transmission over the Internet (for example, when communicating via e-mail) may be vulnerable. 
                    A complete protection of the data from access by third parties is not possible.`
            },
            sec2: {
                t: "Note to the responsible body",
                b1: 
                    `The responsible body for data processing on this website is:`,
                l1: {
                    i1: "Henrik Thorøe",
                    i2: "Strandstraße 10",
                    i3: "24229 Schwedeneck",
                    i4: "Germany",
                    i5: "info (-at-) thoroee.com (Note: Replace ' (-at-) ' with @; no whitespaces)"
                },
                b2: 
                    `The responsible body is the natural or legal person who decides, alone or 
                    together with others, about the purposes and means of processing of 
                    personal data (eg names, e-mail addresses, etc.).`
            },
            sec3: {
                t: "Revocation of your consent to data processing",
                b1: 
                    `Many data processing operations are only possible with your express consent. 
                    You can revoke an already given consent at any time. For this an informal 
                    message by e-mail to me is enough. The legality of the data processing 
                    carried out until the revocation remains unaffected by the revocation.`
            },
            sec4: {
                t: "Right to object to data collection in special cases and direct mail (Article 21 GDPR)",
                b1: 
                    `If the data processing on the basis of Art. 6 para. 1 lit. e or f GDPA, you have the right 
                    at any time to object to the processing of your personal data for reasons that arise 
                    from your particular situation; this also applies to profiling based on these provisions. 
                    The respective legal basis on which the processing is based can be found in this Privacy 
                    Policy. If you file an objection, I will no longer process your personal data, unless I 
                    can establish compelling legitimate grounds for processing that outweigh your interests, 
                    rights and freedoms or the processing is for the purpose of enforcing, pursuing or defending 
                    legal claims ( Objection according to Art. 21 Abs. 1 GDPA). If your personal data are processed 
                    to operate direct mail, you have the right to object at any time to the processing of personal 
                    data for the purpose of such advertising; this also applies to profiling insofar as it is 
                    associated with such direct mail. If you object, your personal data will then no longer be 
                    used for the purpose of direct advertising (objection under Art. 21 (2) GDPR).`
            },
            sec5: {
                t: "Right of appeal to the competent supervisory authority",
                b1: 
                    `You have the right to have data that I automatically process on the basis of your 
                    consent or in fulfillment of a contract, in itself or to a third party in a standard, 
                    machine-readable format. If you require the direct transfer of the data to another 
                    person in charge, this will only be done to the extent technically feasible.`
            },
            sec6: {
                t: "Right to data portability",
                b1: 
                    `You have the right to have data that we process on the basis of your consent or in 
                    fulfillment of a contract, in itself or to a third party in a standard, machine-readable 
                    format. If you require the direct transfer of the data to another person in charge, this 
                    will only be done to the extent technically feasible.`
            },
            sec7: {
                t: "SSL or TLS encryption",
                b1: 
                    `This site uses, for security reasons and to protect the transmission of confidential content, 
                    such as orders or requests that you send to me as a site operator, an SSL or. TLS encryption. 
                    An encrypted connection is indicated by the browser's address bar changing from "http: //" to 
                    "https: //" and the lock icon in your browser bar. If SSL or TLS encryption is enabled, the 
                    data you submit to me can not be read by third parties.`
            },
            sec8: {
                t: "Information, blocking, deletion and correction",
                b1: 
                    `Within the scope of the applicable legal provisions, you have the right at any time to provide 
                    free information about your stored personal data, their origin and recipient and the purpose 
                    of the data processing and, if necessary, a right to correct, block or delete this data. 
                    For this purpose as well as for further questions on the subject of personal data, you 
                    can always contact me at the address.`
            },
            sec9: {
                t: "Right to restriction of processing",
                b1: 
                    `You have the right to request the restriction of the processing of your personal data. 
                    You can contact me at any time at the address given in the imprint. The right to 
                    restrict processing exists in the following`,
                l1: {
                    i1: 
                        `If you deny the accuracy of your personal information I hold, it usually takes me 
                        time to verify it. For the duration of the audit you have the right to request the 
                        restriction of the processing of your personal data.`,
                    i2: 
                        `If the processing of your personal data is unlawful, you may request the restriction of 
                        data processing instead of deletion.`,
                    i3: 
                        `If I no longer need your personal information, but you need it to exercise, defend 
                        or assert a claim, you have the right to request that your personal information be 
                        restricted instead of being deleted.`,
                    i4: 
                        `If you have filed an objection pursuant to Art. 21 (1) GDPR, a balance must be made 
                        between your interests and my interests. As long as it is not clear whose interests 
                        prevail, you have the right to demand the restriction of the processing of your personal data.`
                },
                b2: 
                    `If you have restricted the processing of your personal data, these data may only be 
                    used with your consent or for the purpose of asserting, exercising or defending 
                    legal claims or protecting the rights of another natural or legal person or for 
                    important public interest the European Union or a Member State.`
            }
        },
        dataCollection: {
            title: "3. Data collection on my website",
            sec1: {
                t: "Cookies",
                b1: 
                    `The internet pages partly use so-called cookies. Cookies do not harm your computer and do 
                    not contain viruses. Cookies are used to make my offer more user-friendly, effective and 
                    secure. Cookies are small text files that are stored on your computer and stored by your 
                    browser. Some of the cookies I use are so-called "session cookies". They are automatically 
                    deleted after your visit. Other cookies remain stored on your device until you delete them. 
                    These cookies allow me to recognize your browser the next time you visit. You can set your 
                    browser so that you are informed about the setting of cookies and cookies only in individual 
                    cases allow, the acceptance of cookies for certain cases or generally exclude and activate 
                    the automatic deletion of cookies when closing the browser. Disabling cookies may limit the 
                    functionality of this website. Cookies required to carry out the electronic communication 
                    process or to provide certain functions desired by you (eg shopping cart function) are 
                    processed on the basis of Art. 6 para. 1 lit. f GDPA saved. The website operator has a 
                    legitimate interest in the storage of cookies for the technically correct and optimized 
                    provision of its services. If other cookies (such as cookies for analyzing your browsing 
                        behavior) are stored, they will be treated separately in this privacy declaration.`
            },
            sec2: {
                t: "Server-Log-Files",
                b1: 
                    `The provider of the pages automatically collects and stores information in so-called server log 
                    files, which your browser automatically transmits to me. These are:`,
                l1: {
                    i1: "Browser type and browser version",
                    i2: "Used operating system",
                    i3: "Referrer URL",
                    i4: "Host name of the accessing computer",
                    i5: "Time of the server request",
                    i6: "IP address"
                },
                b2: 
                    `There is no merge of this data with other data sources. The collection of this data is based 
                    on Art. 6 para. 1 lit. f DSGVO. The website operator has a legitimate interest in the 
                    technically error-free presentation and the optimization of its website - for this purpose, 
                    the server log files must be recorded.`
            },
            sec3: {
                t: "Contact form",
                b1: 
                    `If you send me inquiries via the contact form, your details from the inquiry form, 
                    including the contact details you provided there, will be stored with me for 
                    the purpose of processing the request and in case of follow-up questions. I will 
                    not share this information without your consent. The processing of the data entered 
                    into the contact form takes place exclusively on the basis of your consent (Art. 6 (1) 
                    lit. DSGVO). You can revoke this consent at any time. For this an informal message by 
                    e-mail to me is enough. The legality of the data processing operations carried out until 
                    the revocation remains unaffected by the revocation. The information you provide in the 
                    contact form will remain with me until you ask me to delete it, revoke your consent to 
                    storage, or delete the data storage purpose (for example, after your request has been processed). 
                    Mandatory statutory provisions - especially retention periods - remain unaffected.`
            },
            sec4: {
                t: "Inquiry by e-mail, telephone or fax",
                b1:
                    `If you contact me by e-mail, telephone or fax, your request will be stored and processed 
                    by me for the purpose of processing your request, including any resulting personal data 
                    (name, request). I will not share this information without your consent. The processing of 
                    this data is based on Art. 6 para. 1 lit. b DSGVO, if your request is related to the performance 
                    of a contract or is required to carry out pre-contractual action. In all other cases, the processing 
                    is based on your consent (Article 6 (1) f DSGVO) and / or on our legitimate interests (Article 6 (1) 
                    (f) GDPR), since I have a legitimate interest in the effective Processing of the requests addressed 
                    to me. The data you send to me via contact requests will remain with me until you ask me to delete 
                    them, revoke your consent to their storage or the purpose for data storage ceases to apply (eg after 
                    completion of your request). Mandatory statutory provisions - in particular statutory retention 
                    periods - remain unaffected.`
            }
        },
        analysis: {
            title: "4. Analysis tools and advertising",
            sec1: {
                t: "1&1 Web Analytics",
                b1:
                    `This website uses the analytics services provided by 1&1-Webanalytics. Provider 
                    is the 1&1 Internet SE, Elgendorfer Straße 57, D - 56410 Montabaur. In the context 
                    of the analyzes with 1&1 u. a. Visitor traffic and behavior (eg, number of pageviews, 
                    duration of a website visit, bounce rates), traffic sources (that is, which page 
                    visitors come from), visitor locations, and technical data (browser and operating 
                    system versions). For this purpose 1&1 stores in particular the following data:`,
                l1: {
                    i1: "Referrer (previously visited website)",
                    i2: "Requested website or file",
                    i3: "Browser type and browser version",
                    i4: "Used operating system",
                    i5: "Used device type",
                    i6: "Time of access",
                    i7: "IP address in anonymous form (used only to determine the location of access)"
                },
                b2: 
                    `According to 1&1, the data collection is completely anonymised so that it can not be traced 
                    back to individual persons. Cookies are not stored by 1&1 Webanalytics. The storage and analysis 
                    of the data is based on Art. 6 para. 1 lit. f DSGVO. The website operator has a legitimate interest 
                    in the statistical analysis of user behavior in order to optimize both its website and its advertising. 
                    Further information on data collection and processing by 1&1-Webanalytics can be found on the following 
                    links:`,
                l2: {
                    i1: "https://hosting.1und1.de/hilfe/online-marketing/",
                    i2: "https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/",
                    i3: "https://hosting.1und1.de/terms-gtc/terms-privacy/"
                }
            }
        },
        settings: {
            title: "Settings",
            cookies: {
                enable: "Enable Cookies",
                disable: "Disable Cookies"
            }
        },
        remarks: {
            title: "Remarks",
            k1: "Source",
            v1: "e-recht24.de"
        }
    },
    legalDisclosure: {
        title: "Legal Disclosure",
        h1: "According to § 5 TMG",
        l1: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Germany"
        },
        h2: "Responsible for the content",
        l2: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Germany"
        },
        h3: "Contact",
        l3: {
            i1: {
                k: "E-Mail",
                v: "info (-at-) thoroee.com (Note: Replace ' (-at-) ' with @; no whitespaces)"
            },
            i2: {
                k: "Internet",
                v: "thoroee.com"
            }
        },
        h4: "Liability for content",
        b4: 
            `As a service provider we are responsible according to § 7 Abs.1 TMG for own contents on these 
            sides according to the general laws. According to §§ 8 to 10 TMG, however, we as a service 
            provider are not obligated to monitor transmitted or stored third-party information or to 
            investigate circumstances that indicate an illegal activity. Obligations to remove or block 
            the use of information under general law remain unaffected. However, liability in this regard 
            is only possible from the moment of knowledge of a specific infringement. Upon notification of 
            appropriate violations, we will remove this content immediately.`,
        h5: "Liability for links",
        b5: 
            `Our offer contains links to external websites of third parties over whose contents we have no influence. 
            Therefore, we can not assume any liability for these external contents. The content of the linked pages 
            is always the responsibility of the respective provider or operator of the pages. The linked pages were 
            checked for possible legal violations at the time of linking. Illegal content was not recognizable at the 
            time of linking. However, a permanent content control of the linked pages is not reasonable without concrete 
            evidence of a violation of law. Upon notification of violations, we will remove such links immediately.`,
        h6: "Copyright",
        b6: 
            `The content and works on these pages created by the site operators are subject to German copyright law. 
            The duplication, processing, distribution and any kind of exploitation outside the limits of copyright 
            require the written consent of the respective author or creator. Downloads and copies of this site are 
            for private, non-commercial use only. As far as the contents on this side were not created by the operator, 
            the copyrights of third parties are considered. In particular contents of third parties are marked as such. 
            Should you still be aware of a copyright infringement, we ask for a note. Upon notification of violations, 
            we will remove such content immediately.`,
        h7: "Remarks",
        l7: {
            i1: {
                k: "Source",
                v: "e-recht24.de"
            },
            i2: {
                k: "Legal Notice",
                v: "All legal notices on this site are based solely on German law."
            }
        }
    },
    castleDataProtection: {
        title: "Data Protection Declaration",
        h1: "Provider of Castle",
        l1: {
            i1: "Henrik Thorøe",
            i2: "Strandstraße 10",
            i3: "24229 Schwedeneck",
            i4: "Germany (Schleswig-Holstein)"
        },
        h2: "Contact",
        l2: {
            i1: {
                k: "E-Mail",
                v: "info (-at-) thoroee.com (Note: Replace ' (-at-) ' with @; no whitespaces)"
            },
            i2: {
                k: "Internet",
                v: "thoroee.com"
            }
        },
        h3: "Which data is processed and stored by Castle?",
        b3: 
            `All information accessible by Castle is stored and processed locally on your computer or on 
            locations selected by the user. Castle has access to all information enterd by the user. That 
            includes name, forename, passwords, credit card information, files, bank account information 
            and e-mail addresses. A transfer of personal information to a third party is not intended. 
            Collecting of the information happens only with consent of the user and never unnoticed.`,
        h4: "How to delete my personal information?",
        b4: 
            `To delete all user data you have to delete the requested user in 'Preferences'. To delete all 
            left fragments of your personal data you have to delete all backups too. You can find the backup 
            locations in 'Preferences' -> 'Backups'.`,
        h5: "What is this data for?",
        b5: 
            `Because Castle is a password manager it is necessary to ask for information like passwords or usernames. 
            Personal data like name or forename is necessary to provide the multiple-user service. All data is collected 
            to provide the best possible user experience and is never used for comercial purposes like advertisement. It 
            is also impossible for the provider of Castle to access your data because it is stored locally on your computer 
            or on a backup location selected by the user.`,
        h6: "How is this information used?",
        b6: 
            `All data that is accessible for Castle is stored and evaluated locally on your computer. 
            The AES256 algorythm is used to decrypt the data using random or user selected passwords stored 
            in Apples 'Keychain' service. A transfer of this data to a third party is not intended and 
            contradicts Castle's principles of data security. All passwords which are required to encrypt 
            your data are stored in the the 'Keychain' service provided by Apple. The provider of Castle 
            does not take responsibility for any comercial or private damage if Apple's 'Keychain' may 
            have security gaps. Please understand that the 'Keychain' and Castle are not provided and 
            developed by the same person or organisation. The provider of Castle does not have any 
            influence on the developing of the 'Keychain'.`,
        h7: "Who has access to my data?",
        b7: 
            `Only you and persons who have access to your Castle account have access to your personal data. 
            To access your account your self choosen masterpassword is required. This fact excludes all 
            persons you did not pass your password and did not have stolen your password. If a stranger 
            and / or criminal should have stolen or guessed your password Castle does not take any responsibility 
            for possible comercial or private damage.`,
        h8: "How secure is my data?",
        b8: 
            `Castle's first priority is to secure your data. To provide the best possible security Castle uses 
            techniques like AES256. However, every electronic storage or processing technic is not 100% secure. 
            Castle has also no influence to Apple's 'Keychain', which is declared as secure place for user data 
            by Apple. Castle cannot guarantee that the masterpassword of the user is secure and not passed to 
            criminals. Please understand that the provider of Castle does not take any responsibility for 
            possible comercial or private damage if your data gets compromised.`,
    },
    castleWebClientFaq: {
        title: "Web Client FAQ",
        q1: {
            q: "What is the web client?",
            a: 
                `The web client allows you to access Castle from any device in your home network (your Wi-Fi). 
                Prerequisite is that you know your master-password and have Castle running on a Mac. The Mac 
                has to connect to the same Wi-Fi as the device you want to use for the web client. Using the 
                web client you can access your passwords from another Mac, a Windows PC, your iPhone or Android 
                device and so on. And that only by purchasing one copy of Castle which runs on your Mac.`
        },
        q2: {
            q: "Why is the web client special?",
            a: 
                `Other than most password managers Castle is running locally on your device. So your passwords are 
                stored only locally on your device too! That makes your password less vulnerable. But this method 
                has also one big disadvantage: You can not access your passwords from anywhere. They stuck on your 
                device. This problem is solved by the Castle Web Client. The name of this service might be mistaken 
                because it is no real "web" client. It is a webpage that downloads your password over the local network 
                (Wi-Fi) using JavaScript. So your data never leaves your network! While the data is exchanged between 
                the web application and Castle it is encrypted with your password and a pin displayed by Castle. That 
                means an attacker has to see your Mac and know your master-password! Not very likely!`
        },
        q3: {
            q: "How To: Installation",
            a: {
                b: 
                    `You do not really install the web client. You can handle it just like a normal webpage. 
                    But of course there are some tricks to make your life easier:`,
                l1: {
                    t: "iOS",
                    i1: "Open the webpage ( thoroee.com/castle/ )",
                    i2: "Touch the share button (bottom center)",
                    i3: `Touch "Add to Home Screen"`,
                    i4: "You can use it like a native app!"
                },
                l2: {
                    t: "Most Desktop OS (Windows 10, Linux, macOS, ...)",
                    i1: "Open the webpage ( thoroee.com/castle/ )",
                    i2: "Add the page to your favourites or create a desktop shortcut"
                }
            }
        },
        q4: {
            q: "How To: Connect with Castle",
            a: {
                b1: `To connect against Castle and view your passwords in the browser you have to do some steps:`,
                l1: {
                    i1: "Open the webpage ( thoroee.com/castle/ )",
                    i2: `Enter the hostname which is displayed by Castle in the 'Local Server' tab`,
                    i3: "Enter your Castle username",
                    i4: "Enter your Castle master-password",
                    i5: 
                        `If you are using your browser (Safari, Chrome Firefox, ...) the first time to 
                        connet with Castle you need to install the SSL certificate`,
                    i6: "Press the 'Connect' button"
                },
                b2: 
                    `If you entered correct values and installed the SSL certificate you will see a box 
                    (mobile) or multiple boxes (desktop). You have to enter the PIN code which is also 
                    displayed by Castle in the 'Local Server' tab. You are done!`
            }
        },
        q5: {
            q: "Security",
            a: 
                `The security of your passwords is ensured by custom algorithms. Your passwords are sent to the web client 
                encrypted with your master-password and the PIN code. That is why an attacker has to know your master-password 
                and the PIN code which is displayed by Castle and not sent as plain text in any situation. That causes 
                that an attacker has to see your Mac in order to know the PIN and get your passwords (assuming he knows 
                    your master-password).`
        },
        q6: {
            q: "What is the SSL certificate?",
            a: 
                `The connection between the web client and Castle is using HTTPS because of browser restrictions. 
                Even though the data exchange between Castle and the client requires no HTTPS all modern 
                browser interdict an, in their mind, insecure HTTP connection. In most cases, it is a good 
                decision to prevent an insecure HTTP connection but in this special use case, it is unnecessary. 
                To bypass this problem Castle uses HTTPS with a self-signed certificate. This allows Castle to use 
                HTTPS. But again most browsers do not want self-signed certificates because of security reasons. 
                That is why you have to open a page served by Castle which is signed with the self-signed certificate. 
                When you do this you say the browser "Please accept this certificate. It is secure". After you have 
                done so the web client will be able to connect against Castle.`
        },
        q7: {
            q: "If I press 'Connect' I get an error message.",
            a: {
                b: 
                    `This problem could have multiple reasons. A common one is that you do not have installed the 
                    SSL certificate. To install the certificate press 'Install SSL Certificate'. Another reason 
                    could be that you`,
                l1: {
                    i1: "Did not enter the hostname correctly",
                    i2: "Did not enter the username correctly",
                    i3: "Did not enter the password correctly"
                }
            }
        }
    },
    cookieMessage: {
        title: "This Site is Using Cookies",
        message: 
            `Please accept the usage of those sweeties.
            They allow this site to remember your language and theme.
            They do not track you ;)`,
        allow: "Yummy!",
        deny: "Nope. I am on a diet."
    }
}

export default english