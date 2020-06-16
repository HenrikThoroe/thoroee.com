import React from "react";
import Document from "../../components/Document"
import Translation from "../../components/Translation";

export default function CastleDataProtection() {
    return (
        <Document>
            <Document.Title>
                <Translation select={lang => lang.castleDataProtection.title} />
            </Document.Title>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h1} />
            </Document.FirstHeadline>

            <Document.List>
                <Document.ListItem>
                    <Translation select={lang => lang.castleDataProtection.l1.i1} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.castleDataProtection.l1.i2} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.castleDataProtection.l1.i3} />
                </Document.ListItem>
                <Document.ListItem>
                    <Translation select={lang => lang.castleDataProtection.l1.i4} />
                </Document.ListItem>
            </Document.List>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h2} />                
            </Document.FirstHeadline>

            <Document.AssociativeList>
                <Document.AssociativeListItem 
                    name={<Translation select={lang => lang.castleDataProtection.l2.i1.k} />}
                    value={<Translation select={lang => lang.castleDataProtection.l2.i1.v} />}
                />
                <Document.AssociativeListItem 
                    name={<Translation select={lang => lang.castleDataProtection.l2.i2.k} />}
                    value={<Translation select={lang => lang.castleDataProtection.l2.i2.v} />}
                />
            </Document.AssociativeList>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h3} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b3} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h4} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b4} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h5} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b5} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h6} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b6} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h7} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b7} />
            </Document.Paragraph>

            <Document.FirstHeadline>
                <Translation select={lang => lang.castleDataProtection.h8} />
            </Document.FirstHeadline>

            <Document.Paragraph>
                <Translation select={lang => lang.castleDataProtection.b8} />
            </Document.Paragraph>
        </Document>
    )
}