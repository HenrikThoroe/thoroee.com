import React from 'react'
import Page from './views/Page'
import { Helmet } from "react-helmet"

function App() {
    return (
        <>
            <Helmet>
                <title>Thorøe</title>
            </Helmet>
            <Page />
        </>
    )
}

export default App;
