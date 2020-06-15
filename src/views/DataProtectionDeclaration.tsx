import Document from "../components/Document";
import React from "react";
import Button from "../components/Button";
import Translation from "../components/Translation";

function AtAGlance() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.title} />
            </Document.FirstHeadline>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec1.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.atAGlance.sec1.b} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.t} />
            </Document.SecondHeadline>

            <Document.ThirdHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.h1} />
            </Document.ThirdHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.b1} />
            </Document.Paragraph>

            <Document.ThirdHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.h2} />
            </Document.ThirdHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.b2} />
            </Document.Paragraph>

            <Document.ThirdHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.h3} />
            </Document.ThirdHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.b3} />
            </Document.Paragraph>

            <Document.ThirdHeadline>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.h4} />
            </Document.ThirdHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.atAGlance.sec2.b4} />
            </Document.Paragraph>
        </Document.Section>
    )
}

function GeneralInformation() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.information.title} />
            </Document.FirstHeadline>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec1.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec1.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec2.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec2.b1} />
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec2.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec2.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec2.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec2.l1.i4} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec2.l1.i5} />
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec2.b2} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec3.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec3.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec4.t} />
            </Document.SecondHeadline>

            <Document.Important>
                <Translation select={lang => lang.dataProtection.information.sec4.b1} />
            </Document.Important>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec5.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec5.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec6.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec6.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec7.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec7.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec8.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec8.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.information.sec9.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec9.b1} />
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec9.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec9.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec9.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.information.sec9.l1.i4} />
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.information.sec9.b2} />
            </Document.Paragraph>
        </Document.Section>
    )
}

function DataCollection() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.dataCollection.title} />
            </Document.FirstHeadline>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.dataCollection.sec1.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.dataCollection.sec1.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.dataCollection.sec2.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.dataCollection.sec2.b1} />
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i4} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i5} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.dataCollection.sec2.l1.i6} />
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.dataCollection.sec2.b2} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.dataCollection.sec3.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.dataCollection.sec3.b1} />
            </Document.Paragraph>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.dataCollection.sec4.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.dataCollection.sec4.b1} />
            </Document.Paragraph>
        </Document.Section>
    )
}

function Analysis() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.analysis.title} />
            </Document.FirstHeadline>

            <Document.SecondHeadline>
                <Translation select={lang => lang.dataProtection.analysis.sec1.t} />
            </Document.SecondHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.analysis.sec1.b1} />
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i4} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i5} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i6} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.dataProtection.analysis.sec1.l1.i7} />
                </Document.ListItem>
            </Document.List>

            <Document.Paragraph>
                <Translation select={lang => lang.dataProtection.analysis.sec1.b2} />
            </Document.Paragraph>

            <Document.List>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/hilfe/online-marketing/">
                        <Translation select={lang => lang.dataProtection.analysis.sec1.l2.i1} />
                    </a>
                </Document.ListItem>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/">
                        <Translation select={lang => lang.dataProtection.analysis.sec1.l2.i2} />
                    </a>
                </Document.ListItem>
                <Document.ListItem>
                    <a href="https://hosting.1und1.de/terms-gtc/terms-privacy/">
                        <Translation select={lang => lang.dataProtection.analysis.sec1.l2.i3} />
                    </a>
                </Document.ListItem>
            </Document.List>
        </Document.Section>
    )
}

function Settings() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.settings.title} />
            </Document.FirstHeadline>
            <Document.FreeStanding>
                <Button label={<Translation select={lang => lang.dataProtection.settings.cookies.disable} />} fitContent />
            </Document.FreeStanding>
        </Document.Section>
    )
}

function Remarks() {
    return (
        <Document.Section>
            <Document.FirstHeadline>
                <Translation select={lang => lang.dataProtection.remarks.title} />
            </Document.FirstHeadline>
            <Document.AssociativeList>
                <Document.AssociativeListItem 
                    name={<Translation select={lang => lang.dataProtection.remarks.k1} />}
                    value={
                        <a href="https://www.e-recht24.de">
                           <Translation select={lang => lang.dataProtection.remarks.v1} />
                        </a>
                    }
                />
            </Document.AssociativeList>
        </Document.Section>
    )
}

export default function DataProtectionDeclaration() {
    return (
        <Document>
            <Document.Title>
                <Translation select={lang => lang.dataProtection.title} />
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