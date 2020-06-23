import React from "react";
import Document from "../components/Document"
import Translation from "../components/Translation";

export default function LegalDisclosure() {
    return (
        <Document>
            <Document.Title>
                <Translation select={lang => lang.legalDisclosure.title} />
            </Document.Title>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h1} />
            </Document.FirstHeadline>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l1.i4} />
                </Document.ListItem>
            </Document.List>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h2} />
            </Document.FirstHeadline>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l2.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l2.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l2.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.legalDisclosure.l2.i4} />
                </Document.ListItem>
            </Document.List>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h3} />
            </Document.FirstHeadline>

            <Document.AssociativeList>
                    <Document.AssociativeListItem
                        name={<Translation select={lang => lang.legalDisclosure.l3.i1.k} />}
                        value={<Translation select={lang => lang.legalDisclosure.l3.i1.v} />}
                    />
                    <Document.AssociativeListItem
                        name={<Translation select={lang => lang.legalDisclosure.l3.i2.k} />}
                        value={
                            <a href="https://www.thoroee.com">
                                <Translation select={lang => lang.legalDisclosure.l3.i2.v} />
                            </a>
                        }
                    />
            </Document.AssociativeList>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h4} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.legalDisclosure.b4} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h5} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.legalDisclosure.b5} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h6} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.legalDisclosure.b6} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.legalDisclosure.h7} />
            </Document.FirstHeadline>

            <Document.AssociativeList>
                    <Document.AssociativeListItem
                        name={<Translation select={lang => lang.legalDisclosure.l7.i1.k} />}
                        value={
                            <a href="https://www.e-recht24.de">
                                <Translation select={lang => lang.legalDisclosure.l7.i1.v} />
                            </a>
                        }
                    />
                    <Document.AssociativeListItem
                        name={<Translation select={lang => lang.legalDisclosure.l7.i2.k} />}
                        value={<Translation select={lang => lang.legalDisclosure.l7.i2.v} />}
                    />
            </Document.AssociativeList>
        </Document>
    )
}