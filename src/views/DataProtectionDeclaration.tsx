import Document from "../components/Document";
import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function AtAGlance() {
    return (
        <Document.Section>
            <Document.FirstHeadline>1. Privacy at a glance</Document.FirstHeadline>

            <Document.SecondHeadline>General information</Document.SecondHeadline>

            <Document.Paragraph>
                The following notes provide a simple overview of what happens to your personal information when 
                you visit my website. Personal data is any data that personally identifies you. Detailed information 
                on the subject of data protection can be found in my privacy policy listed under this text.
            </Document.Paragraph>

            <Document.SecondHeadline>Data collection on my website</Document.SecondHeadline>

            <Document.ThirdHeadline>Who is responsible for the data collection on this website?</Document.ThirdHeadline>

            <Document.Paragraph>
                The data processing on this website is carried out by the website operator. 
                Its contact details can be found in the imprint of this website.
            </Document.Paragraph>

            <Document.ThirdHeadline>How do I collect your data?</Document.ThirdHeadline>

            <Document.Paragraph>
                Your data will be collected on the one hand, that you tell me this. 
                This may be e.g. to trade data that you enter in a contact form. 
                Other data will be collected automatically when visiting the website through my IT systems. 
                These are above all technical data (for example Internet browser, operating system or time of the page call). 
                The collection of this information occurs automatically as soon as you enter my website.
            </Document.Paragraph>

            <Document.ThirdHeadline>What do I use your data for?</Document.ThirdHeadline>

            <Document.Paragraph>
                Part of the data is collected to ensure a flawless provision of the website. 
                Other data can be used to analyze your user behavior.
            </Document.Paragraph>

            <Document.ThirdHeadline>What rights do you have regarding your data?</Document.ThirdHeadline>

            <Document.Paragraph>
                At any time you have the right to obtain free information about the origin, recipient and purpose 
                of your stored personal data. You also have a right to request the correction, blocking or deletion 
                of this data. For this purpose as well as for further questions about data protection you can contact
                 me at any time at the address given in the imprint. Furthermore, you have a right of appeal to the 
                 competent supervisory authority. In addition, you have the right to request the restriction of the 
                 processing of your personal data in certain circumstances. Details can be found in the privacy policy 
                 under "Right to restriction of processing".
            </Document.Paragraph>
        </Document.Section>
    )
}

function GeneralInformation() {
    return (
        <Document.Section>
            <Document.FirstHeadline>2. General information and mandatory information</Document.FirstHeadline>

            <Document.SecondHeadline>Data protection</Document.SecondHeadline>

            <Document.Paragraph>
                The operator of these pages takes the protection of your personal data very seriously. 
                I treat your personal data confidentially and in accordance with the statutory data protection 
                regulations and this privacy policy. If you use this website, various personal data will be collected. 
                Personal information is information that personally identifies you. This privacy policy explains what 
                information I collect and what I use it for. It also explains how and for what purpose this happens. 
                I point out that data transmission over the Internet (for example, when communicating via e-mail) 
                may be vulnerable. A complete protection of the data from access by third parties is not possible.
            </Document.Paragraph>

            <Document.SecondHeadline>Note to the responsible body</Document.SecondHeadline>

            <Document.Paragraph>
                The responsible body for data processing on this website is:
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>Henrik Thorøe</Document.ListItem>
                <Document.ListItem>Strandstraße 10</Document.ListItem>
                <Document.ListItem>24229 Schwedeneck</Document.ListItem>
                <Document.ListItem>Germany</Document.ListItem>
                <Document.ListItem>info@thoroee.com</Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                The responsible body is the natural or legal person who decides, alone or together with others, about the purposes 
                and means of processing of personal data (eg names, e-mail addresses, etc.).
            </Document.Paragraph>

            <Document.SecondHeadline>Revocation of your consent to data processing</Document.SecondHeadline>

            <Document.Paragraph>
                Many data processing operations are only possible with your express consent. 
                You can revoke an already given consent at any time. For this an informal message 
                by e-mail to me is enough. The legality of the data processing carried out until 
                the revocation remains unaffected by the revocation.
            </Document.Paragraph>

            <Document.SecondHeadline>Right to object to data collection in special cases and direct mail (Article 21 GDPR)</Document.SecondHeadline>

            <Document.Important>
                If the data processing on the basis of Art. 6 para. 1 lit. e or f GDPA, you have the right 
                at any time to object to the processing of your personal data for reasons that arise from 
                your particular situation; this also applies to profiling based on these provisions. 
                The respective legal basis on which the processing is based can be found in this Privacy Policy. 
                If you file an objection, I will no longer process your personal data, unless I can establish 
                compelling legitimate grounds for processing that outweigh your interests, rights and freedoms
                or the processing is for the purpose of enforcing, pursuing or defending legal claims 
                ( Objection according to Art. 21 Abs. 1 GDPA). If your personal data are processed to operate 
                direct mail, you have the right to object at any time to the processing of personal data for the 
                purpose of such advertising; this also applies to profiling insofar as it is associated with such 
                direct mail. If you object, your personal data will then no longer be used for the purpose of direct 
                advertising (objection under Art. 21 (2) GDPR).
            </Document.Important>

            <Document.SecondHeadline>Right of appeal to the competent supervisory authority</Document.SecondHeadline>

            <Document.Paragraph>
                You have the right to have data that I automatically process on the basis of 
                your consent or in fulfillment of a contract, in itself or to a third party 
                in a standard, machine-readable format. If you require the direct transfer of 
                the data to another person in charge, this will only be done to the extent technically feasible.
            </Document.Paragraph>

            <Document.SecondHeadline>Right to data portability</Document.SecondHeadline>

            <Document.Paragraph>
                You have the right to have data that we process on the basis of your consent 
                or in fulfillment of a contract, in itself or to a third party in a standard, 
                machine-readable format. If you require the direct transfer of the data to another 
                person in charge, this will only be done to the extent technically feasible.
            </Document.Paragraph>

            <Document.SecondHeadline>SSL or TLS encryption</Document.SecondHeadline>

            <Document.Paragraph>
                This site uses, for security reasons and to protect the transmission of confidential content, 
                such as orders or requests that you send to me as a site operator, an SSL or. TLS encryption. 
                An encrypted connection is indicated by the browser's address bar changing from "http: //" to 
                "https: //" and the lock icon in your browser bar. If SSL or TLS encryption is enabled, the data 
                you submit to me can not be read by third parties.
            </Document.Paragraph>

            <Document.SecondHeadline>Information, blocking, deletion and correction</Document.SecondHeadline>

            <Document.Paragraph>
                Within the scope of the applicable legal provisions, you have the right 
                at any time to provide free information about your stored personal data, 
                their origin and recipient and the purpose of the data processing and, 
                if necessary, a right to correct, block or delete this data. For this purpose 
                as well as for further questions on the subject of personal data, you can always contact me at the address.
            </Document.Paragraph>

            <Document.SecondHeadline>Right to restriction of processing</Document.SecondHeadline>

            <Document.Paragraph>
                You have the right to request the restriction of the processing of your personal data. 
                You can contact me at any time at the address given in the imprint. The right to restrict
                processing exists in the following
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    If you deny the accuracy of your personal information I hold, it usually takes me 
                    time to verify it. For the duration of the audit you have the right to request the 
                    restriction of the processing of your personal data.
                </Document.ListItem>
                <Document.ListItem>
                    If the processing of your personal data is unlawful, you may request the restriction of data
                    processing instead of deletion.
                </Document.ListItem>
                <Document.ListItem>
                    If I no longer need your personal information, but you need it to exercise, defend or 
                    assert a claim, you have the right to request that your personal information be restricted instead 
                    of being deleted.
                </Document.ListItem>
                <Document.ListItem>
                    If you have filed an objection pursuant to Art. 21 (1) GDPR, a balance must be made 
                    between your interests and my interests. As long as it is not clear whose interests prevail,
                    you have the right to demand the restriction of the processing of your personal data.
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                If you have restricted the processing of your personal data, these data may only be used 
                with your consent or for the purpose of asserting, exercising or defending legal claims 
                or protecting the rights of another natural or legal person or for important public interest 
                the European Union or a Member State.
            </Document.Paragraph>
        </Document.Section>
    )
}

function DataCollection() {
    return (
        <Document.Section>
            <Document.FirstHeadline>3. Data collection on my website</Document.FirstHeadline>

            <Document.SecondHeadline>Cookies</Document.SecondHeadline>

            <Document.Paragraph>
                The internet pages partly use so-called cookies. Cookies do not harm your computer and do not 
                contain viruses. Cookies are used to make my offer more user-friendly, effective and secure.
                Cookies are small text files that are stored on your computer and stored by your browser. 
                Some of the cookies I use are so-called "session cookies". They are automatically deleted 
                after your visit. Other cookies remain stored on your device until you delete them. These cookies 
                allow me to recognize your browser the next time you visit. You can set your browser so that you 
                are informed about the setting of cookies and cookies only in individual cases allow, the acceptance
                of cookies for certain cases or generally exclude and activate the automatic deletion of cookies
                when closing the browser. Disabling cookies may limit the functionality of this website. Cookies
                required to carry out the electronic communication process or to provide certain functions desired 
                by you (eg shopping cart function) are processed on the basis of Art. 6 para. 1 lit. f GDPA saved. 
                The website operator has a legitimate interest in the storage of cookies for the technically correct
                and optimized provision of its services. If other cookies (such as cookies for analyzing your browsing 
                behavior) are stored, they will be treated separately in this privacy declaration.
            </Document.Paragraph>

            <Document.SecondHeadline>Server-Log-Files</Document.SecondHeadline>

            <Document.Paragraph>
                The provider of the pages automatically collects and stores information in so-called server log files, 
                which your browser automatically transmits to me. These are:
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    Browser type and browser version
                </Document.ListItem>
                <Document.ListItem>
                    Used operating system
                </Document.ListItem>
                <Document.ListItem>
                    Referrer URL
                </Document.ListItem>
                <Document.ListItem>
                    Host name of the accessing computer
                </Document.ListItem>
                <Document.ListItem>
                    Time of the server request
                </Document.ListItem>
                <Document.ListItem>
                    IP address
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                There is no merge of this data with other data sources. The collection of this data is based on Art. 
                6 para. 1 lit. f DSGVO. The website operator has a legitimate interest in the technically error-free
                presentation and the optimization of its website - for this purpose, the server log files must be recorded.
            </Document.Paragraph>

            <Document.SecondHeadline>Contact form</Document.SecondHeadline>

            <Document.Paragraph>
                If you send me inquiries via the contact form, your details from the inquiry form, including the 
                contact details you provided there, will be stored with me for the purpose of processing the request 
                and in case of follow-up questions. I will not share this information without your consent. 
                The processing of the data entered into the contact form takes place exclusively on the basis of
                your consent (Art. 6 (1) lit. DSGVO). You can revoke this consent at any time. For this an informal 
                message by e-mail to me is enough. The legality of the data processing operations carried out until
                the revocation remains unaffected by the revocation. The information you provide in the contact form 
                will remain with me until you ask me to delete it, revoke your consent to storage, or delete the data 
                storage purpose (for example, after your request has been processed). Mandatory statutory provisions - 
                especially retention periods - remain unaffected.
            </Document.Paragraph>

            <Document.SecondHeadline>Inquiry by e-mail, telephone or fax</Document.SecondHeadline>

            <Document.Paragraph>
                If you contact me by e-mail, telephone or fax, your request will be stored and processed by me 
                for the purpose of processing your request, including any resulting personal data (name, request).
                I will not share this information without your consent. The processing of this data is based on 
                Art. 6 para. 1 lit. b DSGVO, if your request is related to the performance of a contract or is 
                required to carry out pre-contractual action. In all other cases, the processing is based on your 
                consent (Article 6 (1) f DSGVO) and / or on our legitimate interests (Article 6 (1) (f) GDPR), since 
                I have a legitimate interest in the effective Processing of the requests addressed to me. The data 
                you send to me via contact requests will remain with me until you ask me to delete them, revoke your 
                consent to their storage or the purpose for data storage ceases to apply (eg after completion of your 
                request). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.
            </Document.Paragraph>
        </Document.Section>
    )
}

function Analysis() {
    return (
        <Document.Section>
            <Document.FirstHeadline>4. Analysis tools and advertising</Document.FirstHeadline>

            <Document.SecondHeadline>1&amp;1 Web Analytics</Document.SecondHeadline>

            <Document.Paragraph>
                This website uses the analytics services provided by 1&amp;1-Webanalytics. 
                Provider is the 1&amp;1 Internet SE, Elgendorfer Straße 57, D - 56410 Montabaur. 
                In the context of the analyzes with 1&amp;1 u. a. Visitor traffic and behavior (eg, 
                number of pageviews, duration of a website visit, bounce rates), traffic sources 
                (that is, which page visitors come from), visitor locations, and technical data 
                (browser and operating system versions). For this purpose 1&amp;1 stores in particular the following data:
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    Referrer (previously visited website)
                </Document.ListItem>
                <Document.ListItem>
                    Requested website or file
                </Document.ListItem>
                <Document.ListItem>
                    Browser type and browser version
                </Document.ListItem>
                <Document.ListItem>
                    Used operating system
                </Document.ListItem>
                <Document.ListItem>
                    Used device type
                </Document.ListItem>
                <Document.ListItem>
                    Time of access
                </Document.ListItem>
                <Document.ListItem>
                    IP address in anonymous form (used only to determine the location of access)
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                According to 1&amp;1, the data collection is completely anonymised so that it can not be traced back to 
                individual persons. Cookies are not stored by 1&amp;1 Webanalytics. The storage and analysis of the data 
                is based on Art. 6 para. 1 lit. f DSGVO. The website operator has a legitimate interest in the statistical 
                analysis of user behavior in order to optimize both its website and its advertising. Further information 
                on data collection and processing by 1&amp;1-Webanalytics can be found on the following links:
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/hilfe/online-marketing/">https://hosting.1und1.de/hilfe/online-marketing/</a>
                </Document.ListItem>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/">https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/</a>
                </Document.ListItem>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/terms-gtc/terms-privacy/">https://hosting.1und1.de/terms-gtc/terms-privacy/</a>
                </Document.ListItem>
            </Document.List>
        </Document.Section>
    )
}

function Settings() {
    return (
        <Document.Section>
            <Document.FirstHeadline>Settings</Document.FirstHeadline>
            <Document.FreeStanding>
                <Button label="Disable Cookies" fitContent />
            </Document.FreeStanding>
        </Document.Section>
    )
}

function Remarks() {
    return (
        <Document.Section>
            <Document.FirstHeadline>Remarks</Document.FirstHeadline>
            <Document.AssociativeList>
                <Document.AssociativeListItem 
                    name="Source"
                    value={<Link to="https://www.e-recht24.de">e-recht24.de</Link>}
                />
            </Document.AssociativeList>
        </Document.Section>
    )
}

export default function DataProtectionDeclaration() {
    return (
        <Document>
            <Document.Title>
                Data Protection Declaration
            </Document.Title>
    
            <AtAGlance />
            <GeneralInformation />
            <DataCollection />
            <Analysis />
            <Settings />
            <Remarks />

        </Document>
    )
}