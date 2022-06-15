import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocuments extends Document {
    render() {        
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet"/>

                    <link rel="icon" type="image/png" href="/favicon.png"></link>

                    <title>Find.City</title>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}