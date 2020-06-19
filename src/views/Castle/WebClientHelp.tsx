import React from "react";
import Document from "../../components/Document"
import Translation from "../../components/Translation";
import Card from "../../components/Card";

export default function WebClientHelp() {
    return (
        <Document>

            <Document.Title>
                <Translation select={lang => lang.castleWebClientFaq.title} />
            </Document.Title>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q1.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q1.a} />
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q2.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q2.a} />
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q3.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q3.a.b} />
                        </Card.Body>
                        <Document.List>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l1.i1} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l1.i2} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l1.i3} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l1.i4} />
                            </Document.ListItem>
                        </Document.List>
                        <Document.List>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l2.i1} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q3.a.l2.i2} />
                            </Document.ListItem>
                        </Document.List>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q4.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q4.a.b1} />
                        </Card.Body>
                        <Document.List>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i1} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i2} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i3} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i4} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i5} />
                            </Document.ListItem>
                            <Document.ListItem>
                                <Translation select={lang => lang.castleWebClientFaq.q4.a.l1.i6} />
                            </Document.ListItem>
                        </Document.List>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q4.a.b2} />
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q5.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q5.a} />
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q6.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q6.a} />
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

            <Document.FreeStanding>
                <Card>
                    <Card.Title>
                        <Translation select={lang => lang.castleWebClientFaq.q7.q} />
                    </Card.Title>
                    <Card.Section>
                        <Card.Body>
                            <Translation select={lang => lang.castleWebClientFaq.q7.a.b} />
                            <Document.List>
                                <Document.ListItem>
                                    <Translation select={lang => lang.castleWebClientFaq.q7.a.l1.i1} />
                                </Document.ListItem>
                                <Document.ListItem>
                                    <Translation select={lang => lang.castleWebClientFaq.q7.a.l1.i2} />
                                </Document.ListItem>
                                <Document.ListItem>
                                    <Translation select={lang => lang.castleWebClientFaq.q7.a.l1.i3} />
                                </Document.ListItem>
                            </Document.List>
                        </Card.Body>
                    </Card.Section>
                </Card>
            </Document.FreeStanding>

        </Document>
    )
}