import Document from "../components/Document";
import React from "react";

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

export default function DataProtectionDeclaration() {
    return (
        <Document>
            <Document.Title>
                Data Protection Declaration
            </Document.Title>
    
            <AtAGlance />
        </Document>
    )
}